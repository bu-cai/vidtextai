'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Loader2, Copy, Download, CheckCircle2, RefreshCw, Zap, Globe, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { UpgradePrompt } from '@/components/UpgradePrompt'
import { ProcessingMode, VideoInfo, TranscriptSegment } from '@/types'
import { formatTimestamp, wordCount } from '@/lib/utils'

const MODES: { id: ProcessingMode; label: string; desc: string; emoji: string }[] = [
  { id: 'transcript', label: 'Transcript', desc: 'Full timestamped text', emoji: '📝' },
  { id: 'summary', label: 'Summary', desc: 'Key points & takeaways', emoji: '✨' },
  { id: 'blog', label: 'Blog Post', desc: 'SEO-ready article', emoji: '📖' },
  { id: 'notes', label: 'Study Notes', desc: 'Structured notes', emoji: '🗒️' },
  { id: 'shorts', label: 'Shorts Script', desc: '3-5 short scripts', emoji: '🎬' },
]

const LANGUAGES = [
  { code: 'en', label: '🇺🇸 English' },
  { code: 'zh', label: '🇨🇳 中文' },
  { code: 'ja', label: '🇯🇵 日本語' },
  { code: 'ko', label: '🇰🇷 한국어' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'pt', label: '🇧🇷 Português' },
  { code: 'ru', label: '🇷🇺 Русский' },
  { code: 'ar', label: '🇸🇦 العربية' },
]

interface TranscriptData {
  videoInfo?: VideoInfo
  transcript: TranscriptSegment[]
  fullText: string
}

interface ProcessResult {
  content: string
  wordCount: number
  cached: boolean
}

// ─── Markdown renderer ───────────────────────────────────────────────────────
function renderMarkdown(raw: string): string {
  const lines = raw.split('\n')
  const out: string[] = []
  let inList = false
  let inOl = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Horizontal rule
    if (/^-{3,}$/.test(trimmed) || /^\*{3,}$/.test(trimmed)) {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push('<hr class="my-4 border-gray-200" />')
      continue
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push(`<h3 class="text-base font-semibold text-gray-900 mt-5 mb-2">${inlineFormat(trimmed.slice(4))}</h3>`)
      continue
    }
    if (trimmed.startsWith('## ')) {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push(`<h2 class="text-lg font-bold text-gray-900 mt-6 mb-2 border-b border-gray-100 pb-1">${inlineFormat(trimmed.slice(3))}</h2>`)
      continue
    }
    if (trimmed.startsWith('# ')) {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push(`<h1 class="text-xl font-bold text-gray-900 mt-6 mb-3">${inlineFormat(trimmed.slice(2))}</h1>`)
      continue
    }

    // Bullet list: - or *
    if (/^[-*]\s+/.test(trimmed)) {
      if (inOl) { out.push('</ol>'); inOl = false }
      if (!inList) { out.push('<ul class="my-2 space-y-1 pl-5">'); inList = true }
      out.push(`<li class="list-disc text-gray-700 leading-relaxed">${inlineFormat(trimmed.replace(/^[-*]\s+/, ''))}</li>`)
      continue
    }

    // Numbered list
    if (/^\d+\.\s+/.test(trimmed)) {
      if (inList) { out.push('</ul>'); inList = false }
      if (!inOl) { out.push('<ol class="my-2 space-y-1 pl-5">'); inOl = true }
      out.push(`<li class="list-decimal text-gray-700 leading-relaxed">${inlineFormat(trimmed.replace(/^\d+\.\s+/, ''))}</li>`)
      continue
    }

    // Close list on blank line
    if (trimmed === '') {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push('<div class="h-2"></div>')
      continue
    }

    // Paragraph
    if (inList) { out.push('</ul>'); inList = false }
    if (inOl) { out.push('</ol>'); inOl = false }
    out.push(`<p class="text-gray-700 leading-relaxed">${inlineFormat(trimmed)}</p>`)
  }

  if (inList) out.push('</ul>')
  if (inOl) out.push('</ol>')
  return out.join('\n')
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>')
}
// ─── YouTube video ID extractor ──────────────────────────────────────────────
function extractVideoId(url: string): string | null {
  const patterns = [
    /[?&]v=([^&]{11})/,
    /youtu\.be\/([^?&]{11})/,
    /youtube\.com\/embed\/([^?&]{11})/,
    /youtube\.com\/shorts\/([^?&]{11})/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Cookie-based usage tracker (persists across page refreshes) ─────────────
const FREE_LIMIT = 3

function getCookieKey(): string {
  const today = new Date().toISOString().slice(0, 10)
  return `ai_usage_${today}`
}

function getUsedFromCookie(): number {
  if (typeof document === 'undefined') return 0
  const key = getCookieKey()
  const match = document.cookie.split(';').find(c => c.trim().startsWith(`${key}=`))
  if (!match) return 0
  return Math.min(parseInt(match.split('=')[1]) || 0, FREE_LIMIT)
}

function saveUsedToCookie(used: number): void {
  if (typeof document === 'undefined') return
  const key = getCookieKey()
  const tomorrow = new Date()
  tomorrow.setUTCHours(24, 0, 0, 0)
  document.cookie = `${key}=${used}; expires=${tomorrow.toUTCString()}; path=/; SameSite=Strict`
}
// ─────────────────────────────────────────────────────────────────────────────

export function VideoConverter() {
  const [url, setUrl] = useState('')
  const [language, setLanguage] = useState('en')
  const [loading, setLoading] = useState(false)
  const [transcriptData, setTranscriptData] = useState<TranscriptData | null>(null)
  const [results, setResults] = useState<Partial<Record<ProcessingMode, ProcessResult>>>({})
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<ProcessingMode | null>(null)
  const [activeMode, setActiveMode] = useState<ProcessingMode>('transcript')
  const [remaining, setRemaining] = useState<number>(FREE_LIMIT)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [usedCount, setUsedCount] = useState(0)
  const [videoId, setVideoId] = useState<string | null>(null)
  const [isPro, setIsPro] = useState(false)
  const [proToken, setProToken] = useState<string | null>(null)
  const playerRef = useRef<any>(null)
  const playerContainerRef = useRef<HTMLDivElement>(null)

  // Load YouTube IFrame API once
  useEffect(() => {
    if (typeof window === 'undefined') return
    if ((window as any).YT?.Player) return
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
  }, [])

  // Create / replace player when videoId changes
  useEffect(() => {
    if (!videoId || !playerContainerRef.current) return
    if (playerRef.current?.destroy) {
      playerRef.current.destroy()
      playerRef.current = null
    }
    const container = playerContainerRef.current
    const create = () => {
      const div = document.createElement('div')
      container.innerHTML = ''
      container.appendChild(div)
      playerRef.current = new (window as any).YT.Player(div, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: { autoplay: 0, modestbranding: 1, rel: 0 },
      })
    }
    if ((window as any).YT?.Player) create()
    else (window as any).onYouTubeIframeAPIReady = create
  }, [videoId])

  function seekTo(seconds: number) {
    if (playerRef.current?.seekTo) {
      playerRef.current.seekTo(seconds, true)
      playerRef.current.playVideo?.()
    }
  }

  // Load usage from cookie on mount + check pro token
  useEffect(() => {
    // Check Pro status from localStorage
    const token = localStorage.getItem('vidtext_pro_token')
    if (token) {
      setProToken(token)
      setIsPro(true)
      setRemaining(999) // Pro = effectively unlimited
      return
    }
    // Free tier: load usage from cookie
    const used = getUsedFromCookie()
    setUsedCount(used)
    setRemaining(Math.max(0, FREE_LIMIT - used))
    if (used >= FREE_LIMIT) setShowUpgrade(true)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setLoading(true)
    setError('')
    setTranscriptData(null)
    setResults({})
    setActiveMode('transcript')

    try {
      const res = await fetch(`/api/transcript?url=${encodeURIComponent(url)}`)
      const data = await res.json()

      if (!res.ok) {
        const isDisabled = data.error?.includes('disabled') || data.error?.includes('No transcript')
        setError(
          isDisabled
            ? '⚠️ This video does not have captions enabled.\nTry another video — educational content, news, TED Talks, or videos with the CC badge work best.'
            : data.error || 'Failed to fetch transcript'
        )
        return
      }
      setTranscriptData(data)
      setVideoId(extractVideoId(url))
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleProcess(selectedMode: ProcessingMode, force = false) {
    if (!transcriptData) return
    if (results[selectedMode] && !force) {
      setActiveMode(selectedMode)
      return
    }

    setLoading(true)
    setError('')
    setActiveMode(selectedMode)

    try {
      const res = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url, mode: selectedMode, language,
          ...(proToken ? { pro_token: proToken } : {}),
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        if (data.error === 'rate_limit_exceeded') {
          const used = FREE_LIMIT
          setUsedCount(used)
          setRemaining(0)
          saveUsedToCookie(used)
          setShowUpgrade(true)
          return
        }
        setError(data.error || 'AI processing failed')
        return
      }

      // Update remaining count — Pro users skip this
      if (!data.cached && !isPro) {
        const newUsed = usedCount + 1
        const newRemaining = Math.max(0, FREE_LIMIT - newUsed)
        setUsedCount(newUsed)
        setRemaining(newRemaining)
        saveUsedToCookie(newUsed)
        if (newRemaining <= 0) setShowUpgrade(true)
      }

      setResults((prev) => ({
        ...prev,
        [selectedMode]: { content: data.content, wordCount: data.wordCount, cached: data.cached },
      }))

    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function getTabText(modeId: ProcessingMode): string {
    if (modeId === 'transcript') {
      return transcriptData?.transcript.map((s) => `[${formatTimestamp(s.start)}] ${s.text}`).join('\n') || ''
    }
    return results[modeId]?.content || ''
  }

  function handleCopy(modeId: ProcessingMode) {
    const text = getTabText(modeId)
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopied(modeId)
    setTimeout(() => setCopied(null), 2000)
  }

  function handleDownload(modeId: ProcessingMode) {
    const text = getTabText(modeId)
    if (!text) return
    const blob = new Blob([text], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${modeId}.txt`
    a.click()
  }

  return (
    <div className="w-full">
      {/* URL Input + Language selector */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <div className="flex gap-2 flex-1">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube URL here..."
            className="h-11 text-sm flex-1 min-w-0"
          />
          <Button type="submit" disabled={loading || !url.trim()} className="h-11 px-4 shrink-0">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
            <span className="hidden sm:inline ml-1.5">{loading ? 'Processing...' : 'Get Transcript'}</span>
          </Button>
        </div>

        {/* Language selector */}
        <div className="relative flex items-center">
          <Globe className="absolute left-2.5 h-3.5 w-3.5 text-gray-400 pointer-events-none z-10" />
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value)
              // Clear cached results when language changes
              setResults({})
            }}
            className="h-11 w-full sm:w-auto appearance-none rounded-lg border border-input bg-background pl-8 pr-8 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer text-gray-700"
            title="Output language"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-2.5 text-gray-400 text-xs">▾</div>
        </div>
      </form>

      {/* Upgrade modal */}
      {showUpgrade && (
        <UpgradePrompt
          used={usedCount}
          limit={FREE_LIMIT}
          onClose={() => setShowUpgrade(false)}
        />
      )}

      {/* Usage indicator */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
        {isPro ? (
          <div className="flex items-center gap-1.5 text-amber-600 font-medium">
            <Zap className="h-3 w-3 fill-current" />
            <span>Pro — unlimited AI generations</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: FREE_LIMIT }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-5 rounded-full transition-colors ${
                      i < usedCount ? 'bg-red-400' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span>{remaining} free AI generations left today</span>
            </div>
            <button
              onClick={() => setShowUpgrade(true)}
              className="flex items-center gap-1 text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              <Zap className="h-3 w-3" />
              Upgrade for unlimited
            </button>
          </>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 whitespace-pre-line leading-relaxed">
          {error}
        </div>
      )}

      {/* Video Info Card */}
      {transcriptData?.videoInfo && (
        <div className="mt-4 flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 items-center">
          <img
            src={transcriptData.videoInfo.thumbnailUrl}
            alt={transcriptData.videoInfo.title}
            className="h-14 w-24 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-snug">
              {transcriptData.videoInfo.title}
            </h3>
            <p className="mt-0.5 text-xs text-gray-500">{transcriptData.videoInfo.channelName}</p>
            <Badge variant="success" className="mt-1.5 text-xs">✓ Transcript Ready</Badge>
          </div>
        </div>
      )}

      {/* YouTube embed — shows after transcript loads */}
      {transcriptData && videoId && (
        <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 bg-black">
          <div ref={playerContainerRef} className="w-full aspect-video" />
        </div>
      )}

      {/* Language hint (shown after transcript loads for AI tabs) */}
      {transcriptData && language !== 'en' && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-1.5 border border-blue-100">
          <Globe className="h-3 w-3 shrink-0" />
          AI content will be generated in {LANGUAGES.find(l => l.code === language)?.label.replace(/^.{2}\s/, '') || language}
        </div>
      )}

      {/* Tabs */}
      {transcriptData && (
        <div className="mt-5">
          <Tabs value={activeMode} onValueChange={(v) => {
            const m = v as ProcessingMode
            setActiveMode(m)
            if (m !== 'transcript' && !results[m]) handleProcess(m)
          }}>
            {/* Tab Headers */}
            <TabsList className="flex w-full h-auto bg-gray-100 p-1 rounded-xl gap-0.5 overflow-x-auto">
              {MODES.map((m) => (
                <TabsTrigger
                  key={m.id}
                  value={m.id}
                  className="flex-1 min-w-[3.5rem] flex-col h-auto py-2 px-1 text-xs gap-0.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-red-600 whitespace-nowrap"
                >
                  <span className="text-base leading-none">{m.emoji}</span>
                  <span className="font-semibold text-[10px] leading-none mt-0.5 hidden xs:block sm:block">{m.label}</span>
                  <span className="text-[9px] opacity-60 hidden lg:block leading-none mt-0.5">{m.desc}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {MODES.map((m) => {
              const hasContent = m.id === 'transcript'
                ? transcriptData.transcript.length > 0
                : !!results[m.id]
              const isLoading = loading && activeMode === m.id

              return (
                <TabsContent key={m.id} value={m.id} className="mt-3">
                  <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-3 py-2 sm:px-4 sm:py-2.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-sm font-semibold text-gray-800 truncate">{m.emoji} {m.label}</span>
                        {m.id === 'transcript' && transcriptData.transcript.length > 0 && (
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {wordCount(transcriptData.fullText).toLocaleString()} words
                          </Badge>
                        )}
                        {m.id !== 'transcript' && results[m.id] && (
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {results[m.id]!.wordCount.toLocaleString()} words
                          </Badge>
                        )}
                        {results[m.id]?.cached && (
                          <Badge variant="outline" className="text-xs text-gray-400 shrink-0 hidden sm:inline-flex">cached</Badge>
                        )}
                      </div>

                      {hasContent && !isLoading && (
                        <div className="flex items-center gap-0.5 shrink-0">
                          {m.id !== 'transcript' && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 sm:w-auto sm:px-2 text-xs text-gray-500 hover:text-gray-700"
                              onClick={() => handleProcess(m.id, true)}
                              title="Regenerate"
                            >
                              <RefreshCw className="h-3.5 w-3.5" />
                              <span className="ml-1 hidden sm:inline">Redo</span>
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 sm:w-auto sm:px-2 text-xs text-gray-500 hover:text-gray-700"
                            onClick={() => handleCopy(m.id)}
                            title="Copy"
                          >
                            {copied === m.id
                              ? <><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /><span className="ml-1 hidden sm:inline text-green-600">Copied!</span></>
                              : <><Copy className="h-3.5 w-3.5" /><span className="ml-1 hidden sm:inline">Copy</span></>
                            }
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 sm:w-auto sm:px-2 text-xs text-gray-500 hover:text-gray-700"
                            onClick={() => handleDownload(m.id)}
                            title="Download"
                          >
                            <Download className="h-3.5 w-3.5" />
                            <span className="ml-1 hidden sm:inline">Save</span>
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="max-h-[480px] overflow-y-auto sm:max-h-[560px]">
                      {m.id === 'transcript' ? (
                        /* Transcript: timestamped lines */
                        <div className="divide-y divide-gray-50">
                          {videoId && (
                            <div className="px-3 py-2 bg-red-50 border-b border-red-100 flex items-center gap-1.5 text-xs text-red-600">
                              <span>▶</span>
                              <span>Click any timestamp to jump to that moment in the video</span>
                            </div>
                          )}
                          {transcriptData.transcript.map((seg, i) => (
                            <div
                              key={i}
                              className={`flex gap-2 px-3 py-1.5 text-sm group sm:gap-3 sm:px-4 transition-colors ${videoId ? 'cursor-pointer hover:bg-red-50' : 'hover:bg-gray-50'}`}
                              onClick={() => seekTo(seg.start)}
                            >
                              <span className={`shrink-0 font-mono text-[10px] w-9 pt-0.5 transition-colors sm:text-[11px] sm:w-10 ${videoId ? 'text-red-500 group-hover:text-red-700 font-semibold' : 'text-gray-400 group-hover:text-red-500'}`}>
                                {formatTimestamp(seg.start)}
                              </span>
                              <span className="text-gray-700 leading-relaxed text-xs sm:text-sm">{seg.text}</span>
                            </div>
                          ))}
                        </div>
                      ) : isLoading ? (
                        /* Loading state */
                        <div className="flex flex-col items-center justify-center py-16 gap-3 sm:py-20">
                          <Loader2 className="h-8 w-8 animate-spin text-red-500" />
                          <p className="text-sm text-gray-500">Generating {m.label} with AI...</p>
                          <p className="text-xs text-gray-400">This may take 10–30 seconds</p>
                        </div>
                      ) : results[m.id] ? (
                        /* Rendered markdown content */
                        <div
                          className="px-4 py-4 text-left sm:px-6 sm:py-5"
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(results[m.id]!.content) }}
                        />
                      ) : (
                        /* Generate button */
                        <div className="flex flex-col items-center justify-center py-12 gap-3 sm:py-16 px-4">
                          <div className="text-3xl">{m.emoji}</div>
                          <p className="text-sm text-gray-400 text-center">
                            {m.id === 'summary' && 'Get a concise overview with key points'}
                            {m.id === 'blog' && 'Turn this video into an SEO blog post'}
                            {m.id === 'notes' && 'Extract structured study notes'}
                            {m.id === 'shorts' && 'Create short-form video scripts'}
                          </p>
                          {language !== 'en' && (
                            <p className="text-xs text-blue-500">
                              Output: {LANGUAGES.find(l => l.code === language)?.label}
                            </p>
                          )}
                          <Button
                            onClick={() => handleProcess(m.id)}
                            className="gap-2 mt-1"
                          >
                            <Zap className="h-4 w-4" />
                            Generate {m.label}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      )}
    </div>
  )
}
