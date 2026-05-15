import { NextRequest, NextResponse } from 'next/server'
import { getTranscript } from '@/lib/youtube/transcript'
import { getProvider, getDefaultProvider } from '@/lib/ai/provider'
import { extractVideoId, wordCount } from '@/lib/utils'
import { createServerClient } from '@/lib/supabase/client'
import { ProcessingMode, AIProvider } from '@/types'
import { checkRateLimit, incrementUsage, getClientIp } from '@/lib/rate-limit'

function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  return url.length > 0 && !url.includes('placeholder')
}

// ── Model selection ──────────────────────────────────────────────────────────
// gemini-2.5-flash is the only model with active quota on this API key.
// When billing is set up, can split: free→gemini-2.0-flash, pro→gemini-2.5-flash
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getModelForMode(_mode: ProcessingMode, _isPro: boolean): string {
  return 'gemini-2.5-flash'
}

// ── Token limits by tier ───────────────────────────────────────────────────
const TOKEN_LIMITS = {
  free: 6_000,   // ~4,500 tokens → costs ~$0.0006
  pro: 14_000,   // ~10,500 tokens → costs ~$0.0015 (better results)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { url, videoId: rawId, mode, provider: rawProvider, customPrompt, language } = body

    const input = url || rawId
    if (!input) return NextResponse.json({ error: 'Missing url or videoId' }, { status: 400 })

    const videoId = extractVideoId(input)
    if (!videoId) return NextResponse.json({ error: 'Invalid YouTube URL or video ID' }, { status: 400 })

    const validModes: ProcessingMode[] = ['transcript', 'summary', 'blog', 'notes', 'shorts']
    if (!validModes.includes(mode)) return NextResponse.json({ error: 'Invalid mode' }, { status: 400 })

    // ── Check subscription (future: read from Supabase/auth) ──────────────
    // For now: everyone is free. Add `isPro = true` for paying users.
    const isPro = false   // TODO: check JWT / Supabase user subscription
    const ip = getClientIp(req)

    // ── Rate limiting ─────────────────────────────────────────────────────
    const rateCheck = checkRateLimit(ip, isPro)
    if (!rateCheck.allowed) {
      return NextResponse.json({
        error: 'rate_limit_exceeded',
        message: `You've used all ${rateCheck.limit} free AI generations for today.`,
        used: rateCheck.used,
        limit: rateCheck.limit,
        resetAt: 'midnight UTC',
      }, { status: 429 })
    }

    const provider: AIProvider = rawProvider || getDefaultProvider()
    const useCache = isSupabaseConfigured()
    let transcriptText = ''
    let videoTitle: string | undefined

    // ── Cache lookup ──────────────────────────────────────────────────────
    if (useCache) {
      try {
        const supabase = createServerClient()
        if (!customPrompt) {
          const { data: cachedRaw } = await supabase
            .from('processed_results')
            .select('*')
            .eq('video_id', videoId)
            .eq('mode', mode)
            .order('created_at', { ascending: false })
            .limit(1)
            .single()

          const cached = cachedRaw as unknown as { content: string; created_at: string } | null
          if (cached) {
            // Cache HIT: don't charge rate limit!
            return NextResponse.json({
              mode, content: cached.content, videoId,
              createdAt: cached.created_at,
              wordCount: wordCount(cached.content),
              cached: true,
              remaining: rateCheck.remaining,
            })
          }
        }

        const { data: ctRaw } = await supabase.from('transcripts').select('full_text').eq('video_id', videoId).single()
        const ct = ctRaw as unknown as { full_text: string } | null
        if (ct) transcriptText = ct.full_text

        const { data: viRaw } = await supabase.from('video_info').select('title').eq('video_id', videoId).single()
        const vi = viRaw as unknown as { title: string } | null
        if (vi) videoTitle = vi.title
      } catch (e) {
        console.warn('Cache lookup failed:', e)
      }
    }

    // ── Fetch transcript ──────────────────────────────────────────────────
    if (!transcriptText) {
      const result = await getTranscript(videoId)
      transcriptText = result.fullText
      if (useCache) {
        const supabase = createServerClient()
        void supabase.from('transcripts').upsert({
          video_id: videoId, full_text: result.fullText,
          segments: result.transcript as unknown as never,
          language: result.language, source: result.source,
        } as never)
      }
    }

    if (!transcriptText) return NextResponse.json({ error: 'No transcript available' }, { status: 404 })
    if (!process.env.OPENAI_API_KEY && !process.env.ANTHROPIC_API_KEY && !process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'No AI provider configured.' }, { status: 503 })
    }

    // ── Consume rate limit token ──────────────────────────────────────────
    incrementUsage(ip)
    const remaining = rateCheck.remaining - 1

    // ── Set model + token limit by tier ──────────────────────────────────
    const modelName = getModelForMode(mode, isPro)
    process.env.GEMINI_MODEL = modelName  // Dynamic model selection
    const charLimit = isPro ? TOKEN_LIMITS.pro : TOKEN_LIMITS.free

    // ── AI generation ─────────────────────────────────────────────────────
    const aiProvider = await getProvider(provider)
    const content = await aiProvider.process({
      transcript: transcriptText.slice(0, charLimit),
      mode, videoTitle, customPrompt, language,
    })

    // ── Cache result ──────────────────────────────────────────────────────
    if (useCache && !customPrompt) {
      const supabase = createServerClient()
      void supabase.from('processed_results').insert({
        video_id: videoId, mode, provider, content, language: language || 'en',
      } as never)
    }

    return NextResponse.json({
      mode, content, videoId,
      createdAt: new Date().toISOString(),
      wordCount: wordCount(content),
      cached: false,
      remaining,           // ← tell frontend how many left
      limit: rateCheck.limit,
      isPro,
    })
  } catch (error) {
    console.error('Process error:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
