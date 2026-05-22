import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { Scissors, Play, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Shorts Script Generator — AI Scripts | VidText AI',
  description:
    'Convert long YouTube videos into 3-5 viral short-form video scripts for YouTube Shorts, TikTok, and Instagram Reels. AI-powered, hook included.',
  keywords: ['YouTube Shorts script', 'TikTok script generator', 'short form video script', 'video repurposing AI'],
  alternates: { canonical: 'https://www.vidtextai.com/tools/shorts' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'YouTube Shorts Script Generator',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: 'https://www.vidtextai.com/tools/shorts',
      description: 'Convert long YouTube videos into viral short-form scripts for Shorts, TikTok, and Reels.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '528', bestRating: '5' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Shorts Script Generator', item: 'https://www.vidtextai.com/tools/shorts' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Generate YouTube Shorts Scripts from a Long Video',
      description: 'Repurpose any long YouTube video into 3–5 viral Shorts scripts using AI in under 30 seconds.',
      totalTime: 'PT30S',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Copy the YouTube video URL', text: 'Find the long-form YouTube video you want to repurpose and copy its URL.' },
        { '@type': 'HowToStep', position: 2, name: 'Paste into VidText AI Shorts Generator', text: 'Go to vidtextai.com/tools/shorts and paste the YouTube URL into the input box.' },
        { '@type': 'HowToStep', position: 3, name: 'Generate your Shorts scripts', text: 'Click Generate. AI creates 3–5 complete short-form scripts with hooks, body, and CTA — each 30–60 seconds long.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy and film', text: 'Copy your chosen script and use it for your next YouTube Shorts, TikTok, or Instagram Reel.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Can AI generate YouTube Shorts scripts from long videos?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. VidText AI analyzes the transcript of any long YouTube video and extracts the most engaging segments, then formats them into complete 30–60 second Shorts scripts with hooks and CTAs.' } },
        { '@type': 'Question', name: 'How many Shorts scripts does VidText AI generate?', acceptedAnswer: { '@type': 'Answer', text: 'VidText AI generates 3–5 individual Shorts scripts from a single long video, each focused on a different highlight or key moment from the original content.' } },
        { '@type': 'Question', name: 'Do the generated scripts work for TikTok and Instagram Reels too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The scripts are formatted for any short-form platform — YouTube Shorts, TikTok, and Instagram Reels all use similar 30–60 second vertical video formats.' } },
        { '@type': 'Question', name: 'Is the Shorts script generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. VidText AI offers 3 free script generations per day with no account required. Each generation produces 3–5 complete scripts.' } },
      ],
    },
  ],
}

export default function ShortsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Generate Shorts Scripts From a Long Video</h2>
        <ol className="mt-3 space-y-2 text-gray-600">
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">1.</span>Find a long YouTube video (10+ minutes works best).</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">2.</span>Paste the URL into the tool above and click <strong>Get Transcript</strong>.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">3.</span>Select the <strong>Shorts Script</strong> tab and click Generate.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">4.</span>Get 3–5 complete short-form scripts ready to film immediately.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">What Makes a Good Shorts Script?</h2>
        <p className="mt-3 text-gray-600">Every VidText AI Shorts script is structured with three essential parts:</p>
        <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-5">
          <li><strong>Hook (0–3 seconds):</strong> A bold statement or question that stops the scroll</li>
          <li><strong>Value (3–50 seconds):</strong> The core insight, tip, or story from the original video</li>
          <li><strong>CTA (final 5 seconds):</strong> A clear call to action — subscribe, comment, or click the link</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: 'How many Shorts scripts does one video generate?', a: 'VidText AI generates 3–5 complete short-form scripts per video, each focusing on a different highlight or angle from the original content.' },
            { q: 'Do the scripts work for TikTok and Instagram Reels?', a: 'Yes. The scripts are optimized for any 60-second vertical video format — YouTube Shorts, TikTok, and Instagram Reels all work.' },
            { q: 'What length are the generated scripts?', a: 'Scripts are written for 30–60 second videos, which is the optimal length for engagement across all short-form platforms.' },
            { q: 'Can I customize the generated scripts?', a: 'Absolutely. The scripts are plain text you can edit freely before filming. Add your own examples, adjust the tone, or combine ideas from multiple scripts.' },
          ].map(item => (
            <div key={item.q} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 text-sm">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
