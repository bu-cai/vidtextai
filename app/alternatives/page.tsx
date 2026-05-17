import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VidText AI Alternatives & Comparisons | Best YouTube Transcript Tools',
  description:
    'Compare VidText AI with Tactiq, Glasp, Summarize.tech, and other YouTube transcript tools. See which tool is best for your needs.',
  alternates: { canonical: 'https://www.vidtextai.com/alternatives' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'VidText AI vs Alternatives',
      description: 'Comparison of VidText AI with other YouTube transcript and AI content tools.',
      url: 'https://www.vidtextai.com/alternatives',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.vidtextai.com/alternatives' },
      ],
    },
  ],
}

const COMPARISON = [
  { feature: 'Free transcript extraction', vidtext: true, tactiq: true, glasp: true, summarize: true },
  { feature: 'AI-generated summary', vidtext: true, tactiq: true, glasp: false, summarize: true },
  { feature: 'Blog post generator', vidtext: true, tactiq: false, glasp: false, summarize: false },
  { feature: 'Study notes generator', vidtext: true, tactiq: false, glasp: false, summarize: false },
  { feature: 'Shorts script generator', vidtext: true, tactiq: false, glasp: false, summarize: false },
  { feature: 'No sign-up required', vidtext: true, tactiq: false, glasp: false, summarize: true },
  { feature: '10+ output languages', vidtext: true, tactiq: true, glasp: false, summarize: false },
  { feature: 'Free tier available', vidtext: true, tactiq: true, glasp: true, summarize: true },
  { feature: 'Download as .txt', vidtext: true, tactiq: true, glasp: false, summarize: false },
  { feature: 'Powered by Gemini AI', vidtext: true, tactiq: false, glasp: false, summarize: false },
]

const ALTERNATIVES = [
  {
    name: 'Tactiq',
    slug: 'tactiq',
    href: '/alternatives/vs-tactiq',
    verdict: 'Great for real-time meeting transcripts, but lacks AI content generation.',
    best: 'Meeting transcription',
    missing: 'Blog, Notes, Shorts script generation',
  },
  {
    name: 'Glasp',
    slug: 'glasp',
    href: '/alternatives/vs-glasp',
    verdict: 'Excellent for highlighting & social learning, but requires a browser extension.',
    best: 'Social highlights & notes',
    missing: 'AI content generation, no sign-up required',
  },
  {
    name: 'Summarize.tech',
    slug: 'summarize-tech',
    href: '/alternatives/vs-summarize-tech',
    verdict: 'Simple summarizer, but limited to summaries only — no other content formats.',
    best: 'Quick one-click summaries',
    missing: 'Transcripts, blog posts, study notes, Shorts scripts',
  },
  {
    name: 'YouTube (built-in)',
    slug: 'youtube-built-in',
    href: null,
    verdict: 'Free and always available, but no download, no AI, and hard to copy.',
    best: 'Quick reference while watching',
    missing: 'AI processing, downloadable output, all content formats',
  },
]

function Cell({ value }: { value: boolean }) {
  return value
    ? <span className="flex justify-center"><Check className="h-5 w-5 text-green-500" /></span>
    : <span className="flex justify-center"><X className="h-5 w-5 text-gray-300" /></span>
}

export default function AlternativesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">VidText AI vs. Alternatives</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          How does VidText AI compare to other YouTube transcript and AI content tools?
          Here&apos;s an honest breakdown.
        </p>
      </div>

      {/* Feature comparison table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-16">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-5 py-4 text-left font-semibold text-gray-900 w-1/3">Feature</th>
              <th className="px-4 py-4 text-center font-semibold text-red-600">VidText AI</th>
              <th className="px-4 py-4 text-center font-semibold text-gray-500">Tactiq</th>
              <th className="px-4 py-4 text-center font-semibold text-gray-500">Glasp</th>
              <th className="px-4 py-4 text-center font-semibold text-gray-500">Summarize.tech</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-5 py-3 text-gray-700">{row.feature}</td>
                <td className="px-4 py-3"><Cell value={row.vidtext} /></td>
                <td className="px-4 py-3"><Cell value={row.tactiq} /></td>
                <td className="px-4 py-3"><Cell value={row.glasp} /></td>
                <td className="px-4 py-3"><Cell value={row.summarize} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Individual comparisons */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Comparisons</h2>
      <div className="space-y-4 mb-16">
        {ALTERNATIVES.map((alt) => (
          <div key={alt.slug} className="rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">VidText AI vs. {alt.name}</h3>
                <p className="mt-1 text-gray-600 text-sm">{alt.verdict}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  <span><span className="font-medium text-green-700">✓ {alt.name} is best for:</span> {alt.best}</span>
                  <span><span className="font-medium text-red-600">✗ Missing:</span> {alt.missing}</span>
                </div>
              </div>
              {alt.href && (
                <Link
                  href={alt.href}
                  className="shrink-0 flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 whitespace-nowrap"
                >
                  Full comparison <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Why VidText AI */}
      <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose VidText AI?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: '5 tools in one', desc: 'Transcript, Summary, Blog Post, Study Notes, and Shorts Script — no other free tool offers all five.' },
            { title: 'No sign-up required', desc: 'Most competitors require an account. VidText AI works instantly with just a YouTube URL.' },
            { title: 'AI-powered generation', desc: 'Built on Google Gemini 2.5 Flash — one of the most capable AI models available in 2026.' },
            { title: '10 output languages', desc: 'Generate content in English, Chinese, Japanese, Spanish, French, German, and more.' },
          ].map(item => (
            <div key={item.title} className="flex gap-3">
              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-red-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Try VidText AI Free</h2>
        <p className="text-red-100 mb-6">No sign-up. No credit card. 3 free AI generations per day.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 hover:bg-red-50 transition-colors"
        >
          Start for Free <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
