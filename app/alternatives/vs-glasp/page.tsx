import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VidText AI vs Glasp — Best YouTube Transcript & Highlight Tool?',
  description:
    'VidText AI vs Glasp: compare features, use cases, and pricing. Find out which tool better fits content creators, students, and researchers.',
  alternates: { canonical: 'https://www.vidtextai.com/alternatives/vs-glasp' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'VidText AI vs Glasp',
      description: 'Comparison of VidText AI and Glasp for YouTube transcript and content creation.',
      url: 'https://www.vidtextai.com/alternatives/vs-glasp',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.vidtextai.com/alternatives' },
        { '@type': 'ListItem', position: 3, name: 'vs Glasp', item: 'https://www.vidtextai.com/alternatives/vs-glasp' },
      ],
    },
  ],
}

const ROWS = [
  { feature: 'YouTube transcript extraction', vidtext: true, other: true },
  { feature: 'No sign-up required', vidtext: true, other: false },
  { feature: 'Browser extension needed', vidtext: false, other: true },
  { feature: 'AI-generated summary', vidtext: true, other: false },
  { feature: 'Blog post generator', vidtext: true, other: false },
  { feature: 'Study notes generator', vidtext: true, other: false },
  { feature: 'Shorts script generator', vidtext: true, other: false },
  { feature: 'Social highlights & sharing', vidtext: false, other: true },
  { feature: 'Highlight & annotate transcript', vidtext: false, other: true },
  { feature: 'Download transcript as .txt', vidtext: true, other: false },
  { feature: '10+ output languages', vidtext: true, other: false },
  { feature: 'Free tier available', vidtext: true, other: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') return <span className="flex justify-center text-sm text-gray-600">{value}</span>
  return value
    ? <span className="flex justify-center"><Check className="h-5 w-5 text-green-500" /></span>
    : <span className="flex justify-center"><X className="h-5 w-5 text-gray-300" /></span>
}

export default function VsGlaspPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/alternatives" className="hover:text-gray-600">Alternatives</Link>
        <span>/</span>
        <span className="text-gray-600">VidText AI vs Glasp</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">VidText AI vs Glasp</h1>
        <p className="mt-4 text-lg text-gray-500">
          Glasp is great for social learning and highlighting. VidText AI is built for content creation and repurposing.
          Here&apos;s how they differ.
        </p>
      </div>

      {/* Quick verdict */}
      <div className="grid gap-4 sm:grid-cols-2 mb-10">
        <div className="rounded-xl border-2 border-red-600 bg-red-50/40 p-5">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Choose VidText AI if…</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You want to turn YouTube videos into blog posts or study notes</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You need a downloadable, clean transcript</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You want AI-powered content generation in multiple languages</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You don&apos;t want to install a browser extension</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Choose Glasp if…</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />You want to highlight and annotate specific sentences in a transcript</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />You want to share highlights with a community</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />Social learning and discovery is important to you</li>
          </ul>
        </div>
      </div>

      {/* Feature table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-5 py-4 text-left font-semibold text-gray-900">Feature</th>
              <th className="px-4 py-4 text-center font-semibold text-red-600">VidText AI</th>
              <th className="px-4 py-4 text-center font-semibold text-gray-500">Glasp</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-5 py-3 text-gray-700">{row.feature}</td>
                <td className="px-4 py-3"><Cell value={row.vidtext} /></td>
                <td className="px-4 py-3"><Cell value={row.other} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Detailed Analysis</h2>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Core Philosophy</h3>
          <p className="text-sm text-gray-600">Glasp is a <strong>social learning platform</strong> — it lets you highlight quotes from web pages and YouTube videos, then share them with followers. VidText AI is a <strong>content production tool</strong> — it takes a YouTube video and outputs ready-to-use content formats like blog posts, notes, and video scripts.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">AI Capabilities</h3>
          <p className="text-sm text-gray-600">Glasp offers basic AI summaries of YouTube transcripts. VidText AI uses <strong>Google Gemini 2.5 Flash</strong> to generate five different content formats — including SEO-optimized blog posts and Shorts scripts — with support for 10 languages. This makes it significantly more powerful for content creators.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Accessibility</h3>
          <p className="text-sm text-gray-600">Glasp requires signing up and installing a Chrome extension. VidText AI works instantly in your browser — <strong>no account, no extension, no friction</strong>. Just paste a YouTube URL and get your transcript or AI content in under 30 seconds.</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is VidText AI better than Glasp for content creators?',
              a: 'For content creation, yes. VidText AI generates blog posts, study notes, and Shorts scripts directly from any YouTube video — no browser extension needed. Glasp is better suited for readers who want to highlight and socially share quotes from web pages and YouTube videos, but it does not produce full content formats for publishing.',
            },
            {
              q: 'Does Glasp work without a browser extension?',
              a: 'No. Glasp requires installing a Chrome extension and creating an account before you can use it. This adds setup friction compared to VidText AI, which works instantly in any browser with no installation and no account required.',
            },
            {
              q: 'Can Glasp generate blog posts or study notes from YouTube videos?',
              a: 'No. Glasp focuses on highlighting and annotating transcript text, and sharing those highlights with a social community. It does not generate full blog posts, structured study notes, or Shorts scripts. VidText AI provides all five content formats: transcript, summary, blog post, study notes, and Shorts script.',
            },
            {
              q: 'Which tool is better for students who study YouTube lectures?',
              a: 'VidText AI is the better choice for students. Its Study Notes feature automatically extracts key concepts, important quotes, and action items from any YouTube lecture or educational video — formatted for review and retention. Glasp allows highlighting but requires manual selection of what to save, making it more time-consuming for comprehensive note-taking.',
            },
          ].map(item => (
            <div key={item.q} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 text-sm">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-red-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Try VidText AI Free</h2>
        <p className="text-red-100 mb-5">No extension. No account. 5 AI content formats from any YouTube video.</p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 hover:bg-red-50 transition-colors">
          Get Free Transcript <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
