import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { FileText, Clock, Globe, Download, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Transcript Generator — Download Free Transcript | VidText AI',
  description:
    'Download a free, accurate, timestamped transcript from any YouTube video instantly. Copy or save as .txt file. No sign-up required.',
  keywords: [
    'youtube transcript generator',
    'youtube transcript download',
    'download youtube transcript',
    'youtube transcript free',
    'youtube video transcript',
    'YouTube to text',
  ],
  alternates: { canonical: 'https://www.vidtextai.com/tools/transcript' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'YouTube Transcript Generator & Downloader',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: 'https://www.vidtextai.com/tools/transcript',
      description: 'Download free, accurate, timestamped transcripts from any YouTube video instantly.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Timestamped transcript download',
        'Copy to clipboard',
        'Download as .txt file',
        '100+ languages',
        'No sign-up required',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'YouTube Transcript Download', item: 'https://www.vidtextai.com/tools/transcript' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Get a YouTube Transcript',
      description: 'Extract a full, timestamped transcript from any YouTube video in seconds.',
      totalTime: 'PT30S',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Copy the YouTube URL', text: 'Open the YouTube video and copy the URL from your browser address bar.' },
        { '@type': 'HowToStep', position: 2, name: 'Paste into VidText AI', text: 'Go to vidtextai.com/tools/transcript and paste the YouTube URL into the input box.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Get Transcript', text: 'Click the Get Transcript button. The full timestamped transcript appears in under 10 seconds.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy or Download', text: 'Click Copy to copy the transcript to your clipboard, or Download to save it as a .txt file.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I download a YouTube transcript?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Paste the YouTube video URL into VidText AI, click Get Transcript, then click the Download button to save the transcript as a .txt file. No sign-up required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is downloading a YouTube transcript free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Transcript extraction and download is completely free with no daily limit on VidText AI.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format is the downloaded transcript?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Transcripts download as a plain .txt file with timestamps on each line, making it easy to open in any text editor, Word, or Google Docs.',
          },
        },
      ],
    },
  ],
}

export default function TranscriptPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <FileText className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube Transcript Generator</h1>
        <p className="mt-3 text-lg text-gray-500">
          Extract and download full, timestamped transcripts from any YouTube video — free, instant, no sign-up.
        </p>
        {/* Download highlight */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm text-green-700 font-medium">
          <Download className="h-4 w-4" />
          Download as .txt — always free, no limit
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      {/* Features */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Clock, title: 'Timestamped Lines', desc: 'Every line includes the exact timestamp — perfect for citing specific moments.' },
          { icon: Globe, title: '100+ Languages', desc: 'Supports auto-generated and manual captions in over 100 languages.' },
          { icon: Download, title: 'Download as .txt', desc: 'Save your transcript instantly as a plain text file. Open in any editor.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* How to download */}
      <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Download a YouTube Transcript</h2>
        <div className="space-y-3">
          {[
            { step: '1', text: 'Copy the YouTube video URL from your browser address bar' },
            { step: '2', text: 'Paste it into the input box above and click "Get Transcript"' },
            { step: '3', text: 'Wait a few seconds — the full timestamped transcript appears' },
            { step: '4', text: 'Click "Save" to download as a .txt file, or "Copy" to copy to clipboard' },
          ].map(item => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">{item.step}</span>
              <p className="text-sm text-gray-700 pt-0.5">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Can You Do With a Downloaded Transcript?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: '📝', title: 'Write blog posts', desc: 'Repurpose video content into SEO articles' },
            { icon: '📚', title: 'Study & take notes', desc: 'Search and highlight key concepts from lectures' },
            { icon: '🔍', title: 'Research & citations', desc: 'Quote specific timestamps for academic work' },
            { icon: '♿', title: 'Accessibility', desc: 'Create subtitles or closed captions' },
            { icon: '🌍', title: 'Translation', desc: 'Translate content into other languages' },
            { icon: '📊', title: 'Content analysis', desc: 'Analyze what topics a creator covers' },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <article className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I download a YouTube transcript?',
              a: 'Paste the YouTube URL into VidText AI above, click "Get Transcript", then click the "Save" button to download the transcript as a .txt file. The whole process takes under 10 seconds.',
            },
            {
              q: 'Is downloading a YouTube transcript free?',
              a: 'Yes, completely free with no daily limit. Transcript extraction and download never counts toward any usage limit on VidText AI.',
            },
            {
              q: 'What format does the downloaded transcript use?',
              a: 'The transcript downloads as a plain .txt file with timestamps on each line (e.g., [0:00] Hello and welcome...). You can open it in any text editor, Word, Google Docs, or Notion.',
            },
            {
              q: 'Does it work with all YouTube videos?',
              a: 'It works with any public YouTube video that has captions enabled — including auto-generated captions. Most videos on educational channels, news, podcasts, and TED Talks work perfectly.',
            },
            {
              q: 'Can I download transcripts in other languages?',
              a: 'Yes. VidText AI supports transcripts in 100+ languages. If the video has captions in multiple languages, you can select your preferred language from the dropdown.',
            },
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
      </article>
    </div>
  )
}
