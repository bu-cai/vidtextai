import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { FileText, Clock, Globe, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Transcript Generator — Free & Accurate | VidText AI',
  description:
    'Get a free, accurate, timestamped transcript from any YouTube video instantly. Supports auto-generated and manual captions in 100+ languages.',
  keywords: ['YouTube transcript', 'video transcript generator', 'YouTube to text', 'free transcript'],
}

export default function TranscriptPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <FileText className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube Transcript Generator</h1>
        <p className="mt-3 text-lg text-gray-500">
          Extract full, timestamped transcripts from any YouTube video for free.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      {/* Features */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Clock, title: 'Timestamped', desc: 'Every line includes the exact timestamp for easy reference.' },
          { icon: Globe, title: 'Multi-language', desc: 'Supports transcripts in 100+ languages, including auto-generated captions.' },
          { icon: Download, title: 'Export Freely', desc: 'Copy to clipboard or download as a .txt file instantly.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* SEO Content */}
      <article className="mt-12 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">How to Get a YouTube Video Transcript</h2>
        <p className="text-gray-600 mt-3">
          Getting a transcript from a YouTube video has never been easier. Simply paste the YouTube URL
          into the box above and click &quot;Convert.&quot; Our tool automatically fetches the captions —
          whether they&apos;re manually created or auto-generated — and displays them with timestamps.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6">Why Use a Transcript?</h3>
        <ul className="mt-3 space-y-2 text-gray-600">
          <li>Search for specific information within a long video</li>
          <li>Create subtitles or closed captions for accessibility</li>
          <li>Repurpose video content for blog posts or social media</li>
          <li>Study and take notes from educational videos</li>
          <li>Quote specific sections for research or citations</li>
        </ul>
      </article>
    </div>
  )
}
