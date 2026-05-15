import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'TranscriptAI — YouTube Transcript, Summary & Blog Generator',
  description:
    'Convert any YouTube video into transcript, summary, blog post, study notes, or Shorts script using AI. Free, fast, and accurate.',
  keywords: [
    'YouTube transcript',
    'YouTube summary',
    'YouTube to blog post',
    'AI transcript generator',
    'video to text',
    'YouTube notes',
  ],
  openGraph: {
    title: 'TranscriptAI — YouTube Transcript & AI Content Platform',
    description: 'Convert YouTube videos to transcripts, summaries, blog posts, and more with AI.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
