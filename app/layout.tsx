import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.vidtextai.com/#organization',
      name: 'VidText AI',
      url: 'https://www.vidtextai.com',
      logo: 'https://www.vidtextai.com/icon.png',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.vidtextai.com/#website',
      url: 'https://www.vidtextai.com',
      name: 'VidText AI',
      publisher: { '@id': 'https://www.vidtextai.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.vidtextai.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google AdSense */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7224234791121280"
          crossOrigin="anonymous"
        />
        {/* Global JSON-LD: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
