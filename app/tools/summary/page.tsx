import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { Sparkles, Zap, Target, List } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Video Summarizer — AI Summary Generator | VidText AI',
  description:
    'Summarize any YouTube video with AI. Get key points, main takeaways, and a concise overview in seconds. Perfect for research, studying, and staying informed.',
  keywords: ['YouTube summarizer', 'video summary AI', 'summarize YouTube video', 'key points extractor'],
}

export default function SummaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <Sparkles className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube Video Summarizer</h1>
        <p className="mt-3 text-lg text-gray-500">
          Get AI-powered summaries with key points and takeaways from any YouTube video.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Zap, title: 'Instant Results', desc: 'Get a complete summary in under 30 seconds.' },
          { icon: Target, title: 'Key Takeaways', desc: 'AI identifies the most important points for you.' },
          { icon: List, title: 'Structured Format', desc: 'Organized with headers, bullets, and clear sections.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <article className="mt-12 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">AI-Powered YouTube Video Summaries</h2>
        <p className="text-gray-600 mt-3">
          Our AI summarizer reads the full transcript of any YouTube video and generates a concise,
          well-structured summary. Whether it&apos;s a 10-minute tutorial or a 3-hour documentary,
          you&apos;ll get the key information in a fraction of the time.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-6">Perfect For:</h3>
        <ul className="mt-3 space-y-2 text-gray-600">
          <li>Quickly checking if a video is worth watching</li>
          <li>Research and fact-checking from video sources</li>
          <li>Staying updated with news and analysis channels</li>
          <li>Summarizing meetings, webinars, and conference talks</li>
        </ul>
      </article>
    </div>
  )
}
