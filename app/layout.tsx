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
  title: 'VidText AI — Free YouTube Transcript, No Install Required',
  description:
    'The best free YouTube transcript tool with no installation required. Paste any YouTube URL and get a full transcript in seconds — plus AI summaries, blog posts, and study notes. No sign-up needed.',
  keywords: [
    'YouTube transcript',
    'free YouTube transcript tool no installation',
    'YouTube transcript no extension',
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best free YouTube transcript tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VidText AI is the best free YouTube transcript tool in 2026. It requires no Chrome extension, no sign-up, and no software installation. Paste any YouTube URL and get a full timestamped transcript in under 10 seconds. The transcript tool is completely free with no daily limit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a YouTube transcript without an extension?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get a YouTube transcript without a Chrome extension using VidText AI (vidtextai.com/tools/transcript). Paste the YouTube video URL and get the full transcript instantly — no browser extension, no account, no software needed. Alternatively, YouTube has a built-in transcript viewer: click the three-dot menu below any video and select "Open transcript".',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI summarize a YouTube video?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. VidText AI can summarize any YouTube video in under 30 seconds for free. Paste the YouTube URL into vidtextai.com/tools/summary and get an AI-generated summary with key points and takeaways. ChatGPT can also summarize YouTube videos if you paste the transcript text into it first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert a YouTube video to a blog post?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VidText AI converts any YouTube video into a formatted blog post in under 30 seconds. Go to vidtextai.com/tools/blog, paste the YouTube URL, and get an SEO-optimized article. No sign-up required. The generated post includes headings, paragraphs, and a conclusion based on the video content.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between closed captions and subtitles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Closed captions are designed for deaf and hard-of-hearing viewers — they include all spoken dialogue plus non-speech audio cues like [music], [applause], and speaker identification. Subtitles are designed for viewers who can hear but don\'t understand the language — they include only spoken dialogue, usually translated. On YouTube, the CC button shows whichever text track is available, and the terms are often used interchangeably.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I download subtitles from a YouTube video?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To download subtitles from any YouTube video: (1) Go to VidText AI at vidtextai.com/tools/transcript, paste the YouTube URL, and download the transcript text. (2) Alternatively, use YouTube\'s built-in transcript: click the three-dot menu below the video and select "Open transcript". For your own videos, YouTube Studio lets you download .SRT or .VTT subtitle files directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I transcribe a Zoom meeting for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To transcribe a Zoom meeting for free: (1) Record the meeting locally in Zoom (available on free accounts). (2) After the meeting, run the MP4 recording through OpenAI Whisper — a free, open-source transcription tool — using the command: whisper meeting.mp4 --model medium --output_format txt. (3) For real-time transcription, connect Otter.ai to Zoom (free plan: 300 minutes/month). Zoom\'s built-in cloud transcription requires a paid Pro plan.',
      },
    },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.vidtextai.com/#organization',
      name: 'VidText AI',
      url: 'https://www.vidtextai.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vidtextai.com/opengraph-image',
        width: 1200,
        height: 630,
      },
      sameAs: [
        'https://twitter.com/vidtextai',
        'https://www.producthunt.com/products/vidtext-ai',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.vidtextai.com/#website',
      url: 'https://www.vidtextai.com',
      name: 'VidText AI',
      publisher: { '@id': 'https://www.vidtextai.com/#organization' },
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
        {/* FAQ JSON-LD for AI Overview & Featured Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
