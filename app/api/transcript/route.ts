import { NextRequest, NextResponse } from 'next/server'
import { getTranscript } from '@/lib/youtube/transcript'
import { getVideoInfo } from '@/lib/youtube/info'
import { extractVideoId } from '@/lib/utils'
import { createServerClient } from '@/lib/supabase/client'

type TranscriptRow = {
  video_id: string; full_text: string; segments: unknown; language: string; source: string
}
type VideoInfoRow = {
  title: string; channel_name: string; channel_id: string; published_at: string
  duration: string; thumbnail_url: string; description: string; view_count: string | null
}

function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  return url.length > 0 && !url.includes('placeholder')
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const input = searchParams.get('url') || searchParams.get('videoId')

  if (!input) {
    return NextResponse.json({ error: 'Missing url or videoId parameter' }, { status: 400 })
  }

  const videoId = extractVideoId(input)
  if (!videoId) {
    return NextResponse.json({ error: 'Invalid YouTube URL or video ID' }, { status: 400 })
  }

  try {
    const useCache = isSupabaseConfigured()

    // Check cache only if Supabase is configured
    if (useCache) {
      try {
        const supabase = createServerClient()
        const { data: cached } = await supabase
          .from('transcripts')
          .select('*')
          .eq('video_id', videoId)
          .single()

        if (cached) {
          const row = cached as unknown as TranscriptRow
          const { data: videoInfoRaw } = await supabase
            .from('video_info')
            .select('*')
            .eq('video_id', videoId)
            .single()

          const vi = videoInfoRaw as unknown as VideoInfoRow | null
          return NextResponse.json({
            videoId,
            transcript: row.segments,
            fullText: row.full_text,
            language: row.language,
            source: row.source,
            videoInfo: vi ? {
              videoId, title: vi.title, channelName: vi.channel_name,
              channelId: vi.channel_id, publishedAt: vi.published_at,
              duration: vi.duration, thumbnailUrl: vi.thumbnail_url,
              description: vi.description, viewCount: vi.view_count,
            } : undefined,
            cached: true,
          })
        }
      } catch (cacheErr) {
        console.warn('Cache read failed, fetching fresh:', cacheErr)
      }
    }

    // Fetch fresh
    const [transcriptResult, videoInfoResult] = await Promise.allSettled([
      getTranscript(videoId),
      getVideoInfo(videoId),
    ])

    if (transcriptResult.status === 'rejected') {
      return NextResponse.json(
        { error: transcriptResult.reason?.message || 'Failed to get transcript' },
        { status: 404 }
      )
    }

    const transcript = transcriptResult.value
    const info = videoInfoResult.status === 'fulfilled' ? videoInfoResult.value : undefined

    // Save to cache (fire and forget, don't block response)
    if (useCache) {
      const supabase = createServerClient()
      Promise.all([
        supabase.from('transcripts').upsert({
          video_id: videoId,
          full_text: transcript.fullText,
          segments: transcript.transcript as unknown as never,
          language: transcript.language,
          source: transcript.source,
        } as never),
        info ? supabase.from('video_info').upsert({
          video_id: videoId,
          title: info.title,
          channel_name: info.channelName,
          channel_id: info.channelId,
          published_at: info.publishedAt,
          duration: info.duration,
          thumbnail_url: info.thumbnailUrl,
          description: info.description,
          view_count: info.viewCount || null,
        } as never) : Promise.resolve(),
      ]).catch((e) => console.warn('Cache write failed:', e))
    }

    return NextResponse.json({ ...transcript, videoInfo: info, cached: false })
  } catch (error) {
    console.error('Transcript error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
