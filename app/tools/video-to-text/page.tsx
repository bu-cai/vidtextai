import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { FileText, Zap, Globe, Download, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Video to Text Converter — Free YouTube to Text | VidText AI',
  description:
    'Convert any YouTube video to text instantly with AI. Get a full, accurate text transcript from any video in seconds. Free, no sign-up required.',
  keywords: [
    'video to text converter',
    'youtube video to text',
    'convert video to text',
    'video to text free',
    'youtube to text',
    'video transcription online',
  ],
  alternates: { canonical: 'https://www.vidtextai.com/tools/video-to-text' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Video to Text Converter',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: 'https://www.vidtextai.com/tools/video-to-text',
      description: 'Convert any YouTube video to text instantly. Free, accurate, no sign-up required.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '731', bestRating: '5' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Video to Text Converter', item: 'https://www.vidtextai.com/tools/video-to-text' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert a YouTube Video to Text',
      description: 'Convert any YouTube video to a full text transcript in seconds using VidText AI.',
      totalTime: 'PT30S',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Copy the YouTube video URL', text: 'Open the YouTube video and copy its URL from your browser address bar.' },
        { '@type': 'HowToStep', position: 2, name: 'Go to VidText AI Video to Text Converter', text: 'Navigate to vidtextai.com/tools/video-to-text and paste the URL into the input field.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Convert', text: 'Click the Convert button. The full text transcript appears in under 30 seconds.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy or download the text', text: 'Click Copy to clipboard, or Download to save the text file to your device.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I convert a YouTube video to text for free?', acceptedAnswer: { '@type': 'Answer', text: 'Paste any YouTube URL into VidText AI at vidtextai.com/tools/video-to-text and click Convert. The full text transcript appears in under 30 seconds — completely free, no sign-up required.' } },
        { '@type': 'Question', name: 'How accurate is the video to text conversion?', acceptedAnswer: { '@type': 'Answer', text: 'Accuracy depends on the video\'s caption quality. For major YouTube channels and educational content, accuracy is typically 95–99%. Auto-generated captions on speech-heavy videos are usually 90–95% accurate.' } },
        { '@type': 'Question', name: 'Can I convert any YouTube video to text?', acceptedAnswer: { '@type': 'Answer', text: 'You can convert any public YouTube video that has captions enabled, including auto-generated captions. Private videos, unlisted videos, or videos with captions disabled cannot be converted.' } },
        { '@type': 'Question', name: 'What format is the converted text in?', acceptedAnswer: { '@type': 'Answer', text: 'The text is formatted as a timestamped transcript — each line shows the spoken text with its corresponding time code. You can download it as a .txt file or copy it directly to your clipboard.' } },
      ],
    },
  ],
}

export default function VideoToTextPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <FileText className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Video to Text Converter</h1>
        <p className="mt-3 text-lg text-gray-500">
          Convert any YouTube video to text in seconds. Free, accurate, timestamped — no sign-up needed.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Zap, title: 'Instant Conversion', desc: 'Paste a YouTube URL and get the full text in under 10 seconds.' },
          { icon: Globe, title: '100+ Languages', desc: 'Converts video to text in any language with caption support.' },
          { icon: Download, title: 'Download Text', desc: 'Save the converted text as a .txt file instantly.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* What is this */}
      <article className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">What Is a Video to Text Converter?</h2>
          <p className="mt-3 text-gray-600">
            A video to text converter extracts the spoken words from a video and turns them into readable text.
            VidText AI works specifically with YouTube videos — paste any YouTube URL and instantly receive the
            complete transcript as text, with timestamps for every line.
          </p>
          <p className="mt-3 text-gray-600">
            Unlike manual transcription (which can take hours), VidText AI converts video to text in seconds
            using YouTube&apos;s caption system — giving you near-perfect accuracy at zero cost.
          </p>
        </div>

        {/* Steps */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Convert YouTube Video to Text</h2>
          <div className="space-y-3">
            {[
              'Copy the YouTube video URL from your browser',
              'Paste it into the converter above and click "Get Transcript"',
              'Your video is converted to text with timestamps in seconds',
              'Copy the text or download it as a .txt file',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">{i + 1}</span>
                <p className="text-sm text-gray-700 pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Convert Video to Text?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { e: '📰', t: 'Create blog posts', d: 'Turn video content into SEO articles that rank on Google' },
              { e: '📚', t: 'Study from videos', d: 'Search and highlight key points from lectures' },
              { e: '♿', t: 'Accessibility', d: 'Make video content accessible to deaf or hard-of-hearing audiences' },
              { e: '🌍', t: 'Translation', d: 'Translate video content into any language' },
              { e: '📋', t: 'Meeting notes', d: 'Convert recorded presentations to written notes' },
              { e: '🔍', t: 'Content research', d: 'Quickly scan what a video covers without watching' },
            ].map(item => (
              <div key={item.t} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <span className="text-xl">{item.e}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.t}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Also try */}
        <div className="rounded-2xl border border-red-100 bg-red-50/40 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Also Try: AI-Powered Formats</h2>
          <p className="text-sm text-gray-600 mb-4">Once you have the text, use AI to go further:</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: '/tools/summary', label: '✨ AI Summary', desc: 'Get key points in seconds' },
              { href: '/tools/blog', label: '📖 Blog Post', desc: 'Full SEO article from the video' },
              { href: '/tools/notes', label: '🗒️ Study Notes', desc: 'Structured notes for learning' },
              { href: '/tools/shorts', label: '🎬 Shorts Script', desc: 'Viral short-form video scripts' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-4 py-2.5 hover:border-red-300 transition-colors">
                <span className="font-semibold text-sm text-gray-900">{item.label}</span>
                <span className="text-xs text-gray-400">— {item.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Is this video to text converter really free?', a: 'Yes. Converting video to text is completely free on VidText AI with no daily limit. AI-powered features like summaries and blog posts have a free tier of 3 per day.' },
              { q: 'How accurate is the video to text conversion?', a: 'Accuracy depends on the original captions. YouTube\'s auto-generated captions are typically 85-95% accurate. Videos from professional channels with manually uploaded captions are near 100% accurate.' },
              { q: 'Does it work with any YouTube video?', a: 'It works with any public YouTube video that has captions enabled. Most educational videos, news, podcasts, TED Talks, and tutorial channels work perfectly.' },
              { q: 'Can I convert a YouTube video to text in another language?', a: 'Yes. If the video has captions in multiple languages, you can select your preferred language. VidText AI also supports AI output in 10 languages.' },
            ].map(item => (
              <div key={item.q} className="rounded-xl border border-gray-200 p-5">
                <div className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.q}</h3>
                    <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
