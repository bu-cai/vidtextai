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
  title: 'VidText AI — YouTube Transcript, Summary & Blog Generator',
  description:
    'Convert any YouTube video into transcript, summary, blog post, study notes, or Shorts script using AI. Free, fast, and accurate.',
  keywords: [
    'YouTube transcript',
    'YouTube summary',
    'YouTube to blog post',
    'AI transcript generator',
    'video to text',
    'YouTube notes',
    'VidText AI',
    'vidtextai',
  ],
  metadataBase: new URL('https://www.vidtextai.com'),
  verification: {
    google: 'JoS2yB4WO0LSy_9GOdN7Vp47jM8z5pKKpcl40hHSDj8',
  },
  openGraph: {
    title: 'VidText AI — YouTube Transcript & AI Content Platform',
    description: 'Convert YouTube videos to transcripts, summaries, blog posts, and more with AI.',
    type: 'website',
    url: 'https://www.vidtextai.com',
    siteName: 'VidText AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidText AI — YouTube Transcript & AI Content Platform',
    description: 'Convert YouTube videos to transcripts, summaries, blog posts, and more with AI.',
  },
  alternates: {
    canonical: 'https://www.vidtextai.com',
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
