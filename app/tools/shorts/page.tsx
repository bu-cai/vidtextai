import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { Scissors, Play, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube to Shorts Script Generator — TikTok & Reels Scripts | TranscriptAI',
  description:
    'Convert long YouTube videos into 3-5 viral short-form video scripts for YouTube Shorts, TikTok, and Instagram Reels. AI-powered, hook included.',
  keywords: ['YouTube Shorts script', 'TikTok script generator', 'short form video script', 'video repurposing AI'],
}

export default function ShortsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <Scissors className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube Shorts Script Generator</h1>
        <p className="mt-3 text-lg text-gray-500">
          Repurpose long videos into 3-5 viral short-form scripts for Shorts, TikTok, and Reels.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Zap, title: '30-60 Seconds', desc: 'Scripts optimized for the perfect short-form length.' },
          { icon: Play, title: 'Hook Included', desc: 'Every script starts with a scroll-stopping hook.' },
          { icon: TrendingUp, title: 'Viral-Ready', desc: 'Structured for maximum engagement and watch time.' },
          { icon: Scissors, title: 'Multi-Platform', desc: 'Works for YouTube Shorts, TikTok, and Reels.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <article className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Maximize Your Content With Short-Form Video</h2>
        <p className="text-gray-600 mt-3">
          One long video can become 3-5 high-performing Shorts. Our AI identifies the most engaging
          moments in your video and turns them into complete scripts with a compelling hook, core
          message, and call to action — ready to film immediately.
        </p>
        <p className="text-gray-600 mt-3">
          Ideal for content creators looking to expand their reach on YouTube Shorts, TikTok,
          and Instagram Reels without spending hours on scripting.
        </p>
      </article>
    </div>
  )
}
