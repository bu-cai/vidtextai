import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractVideoId(input: string): string | null {
  const trimmed = input.trim()
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,                          // watch?v=
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,                      // youtu.be/
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,            // /embed/
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,                // /v/
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,           // /shorts/
    /youtube\.com\/live\/([a-zA-Z0-9_-]{11})/,             // /live/
    /^([a-zA-Z0-9_-]{11})$/,                               // bare 11-char ID
  ]
  for (const pattern of patterns) {
    const match = trimmed.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${m}:${String(s).padStart(2, '0')}`
}

export function formatTimestamp(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
