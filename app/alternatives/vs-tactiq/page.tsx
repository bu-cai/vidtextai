import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VidText AI vs Tactiq — Which YouTube Transcript Tool Is Better?',
  description:
    'VidText AI vs Tactiq: honest comparison of features, pricing, and use cases. Find out which YouTube transcript tool is right for you.',
  alternates: { canonical: 'https://www.vidtextai.com/alternatives/vs-tactiq' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VidText AI vs Tactiq',
  description: 'Comparison of VidText AI and Tactiq for YouTube transcript generation.',
  url: 'https://www.vidtextai.com/alternatives/vs-tactiq',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
      { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.vidtextai.com/alternatives' },
      { '@type': 'ListItem', position: 3, name: 'vs Tactiq', item: 'https://www.vidtextai.com/alternatives/vs-tactiq' },
    ],
  },
}

const ROWS = [
  { feature: 'YouTube transcript extraction', vidtext: true, other: true },
  { feature: 'No sign-up required', vidtext: true, other: false },
  { feature: 'Browser extension needed', vidtext: false, other: true },
  { feature: 'AI-generated summary', vidtext: true, other: true },
  { feature: 'Blog post generator', vidtext: true, other: false },
  { feature: 'Study notes generator', vidtext: true, other: false },
  { feature: 'Shorts script generator', vidtext: true, other: false },
  { feature: 'Works on any YouTube video', vidtext: true, other: false },
  { feature: 'Real-time meeting transcription', vidtext: false, other: true },
  { feature: '10+ output languages', vidtext: true, other: true },
  { feature: 'Free tier available', vidtext: true, other: true },
  { feature: 'Free plan limit', vidtext: '3 AI/day', other: '10 meetings/month' },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') return <span className="flex justify-center text-sm text-gray-600">{value}</span>
  return value
    ? <span className="flex justify-center"><Check className="h-5 w-5 text-green-500" /></span>
    : <span className="flex justify-center"><X className="h-5 w-5 text-gray-300" /></span>
}

export default function VsTactiqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/alternatives" className="hover:text-gray-600">Alternatives</Link>
        <span>/</span>
        <span className="text-gray-600">VidText AI vs Tactiq</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">VidText AI vs Tactiq</h1>
        <p className="mt-4 text-lg text-gray-500">
          Both tools offer YouTube transcripts, but they serve very different use cases.
          Here&apos;s an honest breakdown to help you choose.
        </p>
      </div>

      {/* Quick verdict */}
      <div className="grid gap-4 sm:grid-cols-2 mb-10">
        <div className="rounded-xl border-2 border-red-600 bg-red-50/40 p-5">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Choose VidText AI if…</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You want to repurpose YouTube videos into blog posts, notes, or Shorts scripts</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You don&apos;t want to install a browser extension</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You need instant results with no sign-up</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You&apos;re a content creator or student</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Choose Tactiq if…</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />You need real-time transcription during live Google Meet or Zoom calls</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />You work in a team that shares meeting notes</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />Your primary use case is meetings, not YouTube videos</li>
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
              <th className="px-4 py-4 text-center font-semibold text-gray-500">Tactiq</th>
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

      {/* Detailed analysis */}
      <div className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Detailed Analysis</h2>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Use Case Focus</h3>
          <p className="text-sm text-gray-600">Tactiq is purpose-built for <strong>live meeting transcription</strong> — it works as a Chrome extension that listens to your Google Meet, Zoom, and MS Teams calls in real time. VidText AI is built specifically for <strong>YouTube video content</strong> — it extracts transcripts from existing videos and uses AI to transform them into multiple content formats.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Content Generation</h3>
          <p className="text-sm text-gray-600">Tactiq offers AI summaries of meetings. VidText AI goes further: it generates full <strong>blog posts, study notes, and YouTube Shorts scripts</strong> — making it a complete content repurposing platform, not just a transcript tool.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Setup & Friction</h3>
          <p className="text-sm text-gray-600">Tactiq requires installing a Chrome extension and creating an account. VidText AI requires <strong>nothing</strong> — paste a URL, get results instantly. No extension, no account, no credit card.</p>
        </div>
      </div>

      <div className="rounded-2xl bg-red-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Try VidText AI Free</h2>
        <p className="text-red-100 mb-5">No extension. No sign-up. Works on any YouTube video.</p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 hover:bg-red-50 transition-colors">
          Get Free Transcript <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
