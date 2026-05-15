import { TranscriptResult, TranscriptSegment } from '@/types'

async function fetchViaYoutubeTranscriptApi(videoId: string): Promise<TranscriptSegment[]> {
  const { YoutubeTranscript } = await import('youtube-transcript')
  const raw = await YoutubeTranscript.fetchTranscript(videoId)
  return raw.map((item) => ({
    text: item.text,
    start: item.offset / 1000,    // package returns milliseconds
    duration: item.duration / 1000,
  }))
}

async function fetchViaTimedTextApi(videoId: string): Promise<TranscriptSegment[]> {
  // Try direct timedtext endpoint (works for most videos with auto-captions)
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

async function fetchViaPageParse(videoId: string): Promise<TranscriptSegment[]> {
  // Parse YouTube page for caption track URLs
  const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
    headers: {
      'Accept-Language': 'en-US,en;q=0.9',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  })
  const html = await res.text()

  // Extract caption track URLs from the page
  const captionUrlMatch = html.match(/"baseUrl":"(https:\/\/www\.youtube\.com\/api\/timedtext[^"]+)"/)
  if (!captionUrlMatch) throw new Error('No caption URL found in page')

  // Decode JSON-escaped URL
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

export async function getTranscript(videoId: string): Promise<TranscriptResult> {
  let segments: TranscriptSegment[] = []
  let source: 'api' | 'ytdlp' | 'manual' = 'api'
  const errors: string[] = []

  // Method 1: youtube-transcript package
  try {
    segments = await fetchViaYoutubeTranscriptApi(videoId)
    source = 'api'
  } catch (e1) {
    errors.push(`pkg: ${e1 instanceof Error ? e1.message : String(e1)}`)
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
