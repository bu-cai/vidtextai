'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Loader2, Copy, Download, CheckCircle2, RefreshCw, Zap, Globe, FileText, History, ChevronDown, ChevronUp, Settings2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { UpgradePrompt } from '@/components/UpgradePrompt'
import { ProcessingMode, VideoInfo, TranscriptSegment } from '@/types'
import { formatTimestamp, wordCount, extractVideoId } from '@/lib/utils'

const MODES: { id: ProcessingMode; label: string; desc: string; emoji: string }[] = [
  { id: 'transcript', label: 'Transcript', desc: 'Full timestamped text', emoji: '📝' },
  { id: 'summary',    label: 'Summary',    desc: 'Key points & takeaways', emoji: '✨' },
  { id: 'blog',       label: 'Blog Post',  desc: 'SEO-ready article', emoji: '📖' },
  { id: 'notes',      label: 'Study Notes',desc: 'Structured notes', emoji: '🗒️' },
  { id: 'shorts',     label: 'Shorts',     desc: '3-5 short scripts', emoji: '🎬' },
  { id: 'thread',     label: 'X Thread',   desc: 'Twitter/X thread', emoji: '🐦' },
  { id: 'linkedin',   label: 'LinkedIn',   desc: 'LinkedIn post', emoji: '💼' },
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

interface HistoryItem {
  videoId: string
  title: string
  thumbnailUrl: string
  url: string
  savedAt: number
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

    if (/^-{3,}$/.test(trimmed) || /^\*{3,}$/.test(trimmed)) {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push('<hr class="my-4 border-gray-200" />')
      continue
    }
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
    if (/^[-*]\s+/.test(trimmed)) {
      if (inOl) { out.push('</ol>'); inOl = false }
      if (!inList) { out.push('<ul class="my-2 space-y-1 pl-5">'); inList = true }
      out.push(`<li class="list-disc text-gray-700 leading-relaxed">${inlineFormat(trimmed.replace(/^[-*]\s+/, ''))}</li>`)
      continue
    }
    if (/^\d+\.\s+/.test(trimmed)) {
      if (inList) { out.push('</ul>'); inList = false }
      if (!inOl) { out.push('<ol class="my-2 space-y-1 pl-5">'); inOl = true }
      out.push(`<li class="list-decimal text-gray-700 leading-relaxed">${inlineFormat(trimmed.replace(/^\d+\.\s+/, ''))}</li>`)
      continue
    }
    if (trimmed === '') {
      if (inList) { out.push('</ul>'); inList = false }
      if (inOl) { out.push('</ol>'); inOl = false }
      out.push('<div class="h-2"></div>')
      continue
    }
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

// ─── Cookie-based usage tracker ───────────────────────────────────────────────
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

// ─── SRT format helper ────────────────────────────────────────────────────────
function toSrtTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const ms = Math.round((seconds % 1) * 1000)
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')},${String(ms).padStart(3,'0')}`
}

function buildSrt(segments: TranscriptSegment[]): string {
  return segments.map((seg, i) => {
    const start = toSrtTime(seg.start)
    const end = toSrtTime(seg.start + (seg.duration || 3))
    return `${i + 1}\n${start} --> ${end}\n${seg.text}`
  }).join('\n\n')
}

// ─── Local history helpers ────────────────────────────────────────────────────
const HISTORY_KEY = 'vidtext_history'
const HISTORY_MAX = 10

function loadHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

function saveHistory(items: HistoryItem[]): void {
  if (typeof window === 'undefined') return
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(items)) } catch { /* ignore */ }
}

// ─────────────────────────────────────────────────────────────────────────────

interface VideoConverterProps {
  initialMode?: ProcessingMode
}

export function VideoConverter({ initialMode = 'transcript' }: VideoConverterProps) {
  const [url, setUrl] = useState('')
  const [language, setLanguage] = useState('en')
  const [loading, setLoading] = useState(false)
  const [transcriptData, setTranscriptData] = useState<TranscriptData | null>(null)
  const [results, setResults] = useState<Partial<Record<ProcessingMode, ProcessResult>>>({})
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<ProcessingMode | null>(null)
  const [activeMode, setActiveMode] = useState<ProcessingMode>(initialMode)
  const [remaining, setRemaining] = useState<number>(FREE_LIMIT)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [usedCount, setUsedCount] = useState(0)
  const [videoId, setVideoId] = useState<string | null>(null)
  const [isPro, setIsPro] = useState(false)
  const [proToken, setProToken] = useState<string | null>(null)
  const [proChecked, setProChecked] = useState(false)
  // New feature state
  const [customPrompt, setCustomPrompt] = useState('')
  const [showCustomPrompt, setShowCustomPrompt] = useState(false)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [showHistory, setShowHistory] = useState(false)
  // Animation state
  const [typingContent, setTypingContent] = useState<Partial<Record<ProcessingMode, string>>>({})
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingStatus, setLoadingStatus] = useState('')

  const playerRef = useRef<any>(null)
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const typingTimers = useRef<Partial<Record<ProcessingMode, ReturnType<typeof setInterval>>>>({})
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null)

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

  // Auto-trigger AI when transcript loads on a tool-specific page
  useEffect(() => {
    if (transcriptData && initialMode !== 'transcript' && !results[initialMode]) {
      handleProcess(initialMode)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcriptData])

  // Load usage from cookie + pro token + history on mount
  useEffect(() => {
    const token = localStorage.getItem('vidtext_pro_token')
    if (token) {
      setProToken(token)
      setIsPro(true)
      setRemaining(999)
    } else {
      const used = getUsedFromCookie()
      setUsedCount(used)
      setRemaining(Math.max(0, FREE_LIMIT - used))
      if (used >= FREE_LIMIT) setShowUpgrade(true)
    }
    setProChecked(true)
    setHistory(loadHistory())
  }, [])

  // Save to history when a video successfully loads
  useEffect(() => {
    if (!transcriptData?.videoInfo || !url) return
    const { videoId: vid, title, thumbnailUrl } = transcriptData.videoInfo
    const item: HistoryItem = { videoId: vid, title, thumbnailUrl, url, savedAt: Date.now() }
    setHistory(prev => {
      const updated = [item, ...prev.filter(h => h.videoId !== vid)].slice(0, HISTORY_MAX)
      saveHistory(updated)
      return updated
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcriptData?.videoInfo])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setLoading(true)
    setError('')
    setTranscriptData(null)
    setResults({})
    setTypingContent({})
    setActiveMode(initialMode)
    setShowHistory(false)
    startLoadingProgress(true)

    try {
      const res = await fetch(`/api/transcript?url=${encodeURIComponent(url)}`)
      const data = await res.json()

      if (!res.ok) {
        completeLoadingProgress()
        const isDisabled = data.error?.includes('disabled') || data.error?.includes('No transcript')
        setError(
          isDisabled
            ? '⚠️ This video does not have captions enabled.\nTry another video — educational content, news, TED Talks, or videos with the CC badge work best.'
            : data.error || 'Failed to fetch transcript'
        )
        return
      }
      completeLoadingProgress()
      setTranscriptData(data)
      setVideoId(extractVideoId(url))
    } catch {
      completeLoadingProgress()
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
    startLoadingProgress(false)

    try {
      const res = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          mode: selectedMode,
          language,
          ...(proToken ? { pro_token: proToken } : {}),
          ...(customPrompt.trim() ? { customPrompt: customPrompt.trim() } : {}),
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        completeLoadingProgress()
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

      completeLoadingProgress()

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
      startTypewriter(selectedMode, data.content)

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

  function getDownloadFilename(modeId: ProcessingMode, ext = 'txt'): string {
    const title = transcriptData?.videoInfo?.title
    const slug = title
      ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50)
      : modeId
    return `${slug}-${modeId}.${ext}`
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
    a.download = getDownloadFilename(modeId, 'txt')
    a.click()
  }

  function handleDownloadSrt() {
    if (!transcriptData?.transcript.length) return
    const srt = buildSrt(transcriptData.transcript)
    const blob = new Blob([srt], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = getDownloadFilename('transcript', 'srt')
    a.click()
  }

  // ── Typewriter effect ─────────────────────────────────────────────────────
  function startTypewriter(mode: ProcessingMode, content: string) {
    if (typingTimers.current[mode]) clearInterval(typingTimers.current[mode])
    setTypingContent(prev => ({ ...prev, [mode]: '' }))
    let i = 0
    typingTimers.current[mode] = setInterval(() => {
      i += 18
      if (i >= content.length) {
        setTypingContent(prev => ({ ...prev, [mode]: content }))
        clearInterval(typingTimers.current[mode])
      } else {
        setTypingContent(prev => ({ ...prev, [mode]: content.slice(0, i) }))
      }
    }, 16)
  }

  // ── Progress bar simulation ───────────────────────────────────────────────
  function startLoadingProgress(isTranscript: boolean) {
    if (progressTimer.current) clearInterval(progressTimer.current)
    setLoadingProgress(0)
    const stages = isTranscript
      ? [
          { target: 35, label: 'Connecting to YouTube...' },
          { target: 70, label: 'Fetching transcript...' },
          { target: 92, label: 'Processing...' },
        ]
      : [
          { target: 22, label: 'Reading transcript...' },
          { target: 52, label: 'Analyzing content...' },
          { target: 78, label: 'Generating with AI...' },
          { target: 93, label: 'Almost there...' },
        ]
    let stageIdx = 0
    let cur = 0
    setLoadingStatus(stages[0].label)
    progressTimer.current = setInterval(() => {
      if (stageIdx >= stages.length) return
      const { target, label } = stages[stageIdx]
      cur = Math.min(cur + 1.5, target)
      setLoadingProgress(Math.round(cur))
      setLoadingStatus(label)
      if (cur >= target) stageIdx++
    }, 40)
  }

  function completeLoadingProgress() {
    if (progressTimer.current) clearInterval(progressTimer.current)
    setLoadingProgress(100)
    setLoadingStatus('Done!')
    setTimeout(() => { setLoadingProgress(0); setLoadingStatus('') }, 700)
  }

  function handleHistoryClick(item: HistoryItem) {
    setUrl(item.url)
    setShowHistory(false)
  }

  function clearHistory() {
    setHistory([])
    saveHistory([])
  }

  const generateDesc: Partial<Record<ProcessingMode, string>> = {
    summary:  'Get a concise overview with key points',
    blog:     'Turn this video into an SEO blog post',
    notes:    'Extract structured study notes',
    shorts:   'Create short-form video scripts',
    thread:   'Turn key insights into a Twitter/X thread',
    linkedin: 'Create a LinkedIn post from this video',
  }

  return (
    <div className="w-full">
      {/* URL Input + Language selector */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <div className="flex gap-2 flex-1">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => !transcriptData && history.length > 0 && setShowHistory(true)}
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

      {/* Recent History panel */}
      {showHistory && !transcriptData && history.length > 0 && (
        <div className="mt-1 rounded-xl border border-gray-200 bg-white shadow-lg z-20 relative">
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <History className="h-3.5 w-3.5" /> Recent
            </span>
            <button
              type="button"
              onClick={clearHistory}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {history.slice(0, 5).map((item) => (
              <button
                key={item.videoId}
                type="button"
                onClick={() => handleHistoryClick(item)}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors text-left"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="h-9 w-16 rounded object-cover shrink-0"
                />
                <span className="text-sm text-gray-700 line-clamp-1 flex-1">{item.title}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowHistory(false)}
            className="w-full py-2 text-xs text-gray-400 hover:text-gray-600 border-t border-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Progress bar — shown while fetching transcript */}
      {loading && !transcriptData && loadingProgress > 0 && (
        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Loader2 className="h-3 w-3 animate-spin text-red-500" />
              {loadingStatus}
            </span>
            <span className="font-mono tabular-nums text-gray-400">{loadingProgress}%</span>
          </div>
          <div className="h-1 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-200 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Upgrade modal */}
      {showUpgrade && (
        <UpgradePrompt
          used={usedCount}
          limit={FREE_LIMIT}
          onClose={() => setShowUpgrade(false)}
        />
      )}

      {/* Usage indicator */}
      <div className={`mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 transition-opacity ${proChecked ? 'opacity-100' : 'opacity-0'}`}>
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

      {/* YouTube embed */}
      {transcriptData && videoId && (
        <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 bg-black">
          <div ref={playerContainerRef} className="w-full aspect-video" />
        </div>
      )}

      {/* Language hint */}
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
                  className="flex-1 min-w-[3rem] flex-col h-auto py-2 px-1 text-xs gap-0.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-red-600 whitespace-nowrap"
                >
                  <span className="text-base leading-none">{m.emoji}</span>
                  <span className="font-semibold text-[10px] leading-none mt-0.5 hidden xs:block sm:block">{m.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Custom Prompt toggle */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setShowCustomPrompt(v => !v)}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
              >
                <Settings2 className="h-3.5 w-3.5" />
                <span>Custom instruction</span>
                {showCustomPrompt ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                {customPrompt.trim() && (
                  <span className="ml-1 rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-600">active</span>
                )}
              </button>
              {showCustomPrompt && (
                <div className="mt-1.5 rounded-lg border border-gray-200 bg-gray-50 p-3">
                  <textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder='e.g. "Summarize for a 10-year-old" or "Focus only on actionable tips" or "Use a formal academic tone"'
                    rows={2}
                    className="w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                  <p className="mt-1 text-[10px] text-gray-400">
                    This instruction will be applied when you generate any AI content. Clear to use default prompts.
                  </p>
                </div>
              )}
            </div>

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
                            title="Download .txt"
                          >
                            <Download className="h-3.5 w-3.5" />
                            <span className="ml-1 hidden sm:inline">Save</span>
                          </Button>
                          {/* SRT download — transcript tab only */}
                          {m.id === 'transcript' && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-xs text-gray-500 hover:text-gray-700 hidden sm:flex"
                              onClick={handleDownloadSrt}
                              title="Download .srt subtitle file"
                            >
                              .srt
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="max-h-[480px] overflow-y-auto sm:max-h-[560px]">
                      {m.id === 'transcript' ? (
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
                        <div className="flex flex-col items-center justify-center py-14 gap-4 sm:py-18 px-6">
                          <div className="w-full max-w-xs space-y-3">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span className="flex items-center gap-1.5">
                                <Loader2 className="h-3.5 w-3.5 animate-spin text-red-500" />
                                {loadingStatus || `Generating ${m.label}...`}
                              </span>
                              <span className="font-mono tabular-nums text-gray-400">{loadingProgress}%</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-200 ease-out"
                                style={{ width: `${loadingProgress}%` }}
                              />
                            </div>
                            <p className="text-center text-xs text-gray-400">This may take 10–30 seconds</p>
                          </div>
                        </div>
                      ) : results[m.id] ? (
                        <div
                          className="px-4 py-4 text-left sm:px-6 sm:py-5"
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(typingContent[m.id] ?? results[m.id]!.content) }}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 gap-3 sm:py-16 px-4">
                          <div className="text-3xl">{m.emoji}</div>
                          <p className="text-sm text-gray-400 text-center">
                            {generateDesc[m.id] || `Generate ${m.label}`}
                          </p>
                          {customPrompt.trim() && (
                            <p className="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-1.5 text-center">
                              ⚙ Custom instruction active
                            </p>
                          )}
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
