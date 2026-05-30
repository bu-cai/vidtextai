export type AIProvider = 'openai' | 'claude' | 'gemini'

export type ProcessingMode =
  | 'transcript'
  | 'summary'
  | 'blog'
  | 'notes'
  | 'shorts'
  | 'thread'
  | 'linkedin'

export interface VideoInfo {
  videoId: string
  title: string
  channelName: string
  channelId: string
  publishedAt: string
  duration: string
  thumbnailUrl: string
  description: string
  viewCount?: string
}

export interface TranscriptSegment {
  text: string
  start: number
  duration: number
}

export interface TranscriptResult {
  videoId: string
  videoInfo?: VideoInfo
  transcript: TranscriptSegment[]
  fullText: string
  language: string
  source: 'api' | 'ytdlp' | 'manual'
}

export interface ProcessingRequest {
  videoId: string
  mode: ProcessingMode
  provider?: AIProvider
  language?: string
  customPrompt?: string
}

export interface ProcessingResult {
  mode: ProcessingMode
  content: string
  videoId: string
  createdAt: string
  wordCount: number
}

export interface CachedResult {
  id: string
  videoId: string
  mode: ProcessingMode
  provider: AIProvider
  content: string
  createdAt: string
  language: string
}
