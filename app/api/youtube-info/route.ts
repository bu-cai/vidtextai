import { NextRequest, NextResponse } from 'next/server'
import { getVideoInfo } from '@/lib/youtube/info'
import { extractVideoId } from '@/lib/utils'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const input = searchParams.get('url') || searchParams.get('videoId')

  if (!input) {
    return NextResponse.json({ error: 'Missing url or videoId' }, { status: 400 })
  }

  const videoId = extractVideoId(input)
  if (!videoId) {
    return NextResponse.json({ error: 'Invalid YouTube URL or video ID' }, { status: 400 })
  }

  try {
    const info = await getVideoInfo(videoId)
    return NextResponse.json(info)
  } catch (error) {
    console.error('Video info error:', error)
    return NextResponse.json({ error: 'Failed to fetch video info' }, { status: 500 })
  }
}
