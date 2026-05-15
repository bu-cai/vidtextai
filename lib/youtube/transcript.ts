import { TranscriptResult, TranscriptSegment } from '@/types'

// ── Method 0: Supadata.ai API (handles YouTube IP blocking) ──────────────────
async function fetchViaSupadata(videoId: string): Promise<TranscriptSegment[]> {
  const apiKey = process.env.SUPADATA_API_KEY
  if (!apiKey) throw new Error('SUPADATA_API_KEY not configured')

  const res = await fetch(
    `https://api.supadata.ai/v1/youtube/transcript?videoId=${videoId}`,
    {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supadata error ${res.status}: ${text}`)
  }

  const data = await res.json()

  // Supadata returns { content: [{text, offset, duration}] }
  const items: Array<{ text: string; offset: number; duration: number }> =
    data.content ?? data.transcript ?? []

  if (!items.length) throw new Error('Supadata returned empty transcript')

  return items.map((item) => ({
    text: item.text,
    start: (item.offset ?? 0) / 1000,
    duration: (item.duration ?? 0) / 1000,
  }))
}

// ── Method 1: youtube-transcript npm package ─────────────────────────────────
async function fetchViaYoutubeTranscriptApi(videoId: string): Promise<TranscriptSegment[]> {
  const { YoutubeTranscript } = await import('youtube-transcript')
  const raw = await YoutubeTranscript.fetchTranscript(videoId)
  return raw.map((item) => ({
    text: item.text,
    start: item.offset / 1000,
    duration: item.duration / 1000,
  }))
}

// ── Method 2: Direct timedtext API ───────────────────────────────────────────
async function fetchViaTimedTextApi(videoId: string): Promise<TranscriptSegment[]> {
  const langs = ['en', 'en-US', 'a.en']
  for (const lang of langs) {
    try {
      const url = `https://www.youtube.com/api/timedtext?v=${videoId}&lang=${lang}&fmt=json3`
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      })
      if (!res.ok) continue
      const data = await res.json()
      if (!data.events?.length) continue

      const segments = (data.events as Array<{
        segs?: Array<{ utf8: string }>
        tStartMs: number
        dDurationMs?: number
      }>)
        .filter((e) => e.segs?.length)
        .map((e) => ({
          text: e.segs!.map((s) => s.utf8 || '').join('').replace(/\n/g, ' ').trim(),
          start: e.tStartMs / 1000,
          duration: (e.dDurationMs || 0) / 1000,
        }))
        .filter((s) => s.text.length > 0)

      if (segments.length > 0) return segments
    } catch {
      continue
    }
  }
  throw new Error('No timedtext captions found')
}

// ── Method 3: Parse YouTube page ─────────────────────────────────────────────
async function fetchViaPageParse(videoId: string): Promise<TranscriptSegment[]> {
  const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
    headers: {
      'Accept-Language': 'en-US,en;q=0.9',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  })
  const html = await res.text()

  const captionUrlMatch = html.match(/"baseUrl":"(https:\/\/www\.youtube\.com\/api\/timedtext[^"]+)"/)
  if (!captionUrlMatch) throw new Error('No caption URL found in page')

  const baseUrl = captionUrlMatch[1].replace(/\\u0026/g, '&').replace(/\\\//g, '/')
  const xmlRes = await fetch(`${baseUrl}&fmt=json3`)
  const data = await xmlRes.json()

  if (!data.events?.length) throw new Error('No caption events')

  return (data.events as Array<{
    segs?: Array<{ utf8: string }>
    tStartMs: number
    dDurationMs?: number
  }>)
    .filter((e) => e.segs?.length)
    .map((e) => ({
      text: e.segs!.map((s) => s.utf8 || '').join('').replace(/\n/g, ' ').trim(),
      start: e.tStartMs / 1000,
      duration: (e.dDurationMs || 0) / 1000,
    }))
    .filter((s) => s.text.length > 0)
}

// ── Main export ───────────────────────────────────────────────────────────────
export async function getTranscript(videoId: string): Promise<TranscriptResult> {
  let segments: TranscriptSegment[] = []
  let source: 'api' | 'ytdlp' | 'manual' = 'api'
  const errors: string[] = []

  // Method 0: Supadata API (most reliable on hosted servers)
  if (process.env.SUPADATA_API_KEY) {
    try {
      segments = await fetchViaSupadata(videoId)
      source = 'api'
    } catch (e0) {
      errors.push(`supadata: ${e0 instanceof Error ? e0.message : String(e0)}`)
    }
  }

  // Method 1: youtube-transcript package
  if (!segments.length) {
    try {
      segments = await fetchViaYoutubeTranscriptApi(videoId)
      source = 'api'
    } catch (e1) {
      errors.push(`pkg: ${e1 instanceof Error ? e1.message : String(e1)}`)
    }
  }

  // Method 2: Direct timedtext API
  if (!segments.length) {
    try {
      segments = await fetchViaTimedTextApi(videoId)
      source = 'ytdlp'
    } catch (e2) {
      errors.push(`timedtext: ${e2 instanceof Error ? e2.message : String(e2)}`)
    }
  }

  // Method 3: Parse YouTube page for caption URL
  if (!segments.length) {
    try {
      segments = await fetchViaPageParse(videoId)
      source = 'ytdlp'
    } catch (e3) {
      errors.push(`page: ${e3 instanceof Error ? e3.message : String(e3)}`)
    }
  }

  if (!segments.length) {
    throw new Error(
      `No transcript available for this video. Details: ${errors.join(' | ')}`
    )
  }

  const fullText = segments.map((s) => s.text).join(' ')

  return {
    videoId,
    transcript: segments,
    fullText,
    language: 'en',
    source,
  }
}
