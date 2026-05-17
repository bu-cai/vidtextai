import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VidText AI vs Summarize.tech — Best YouTube Summarizer Tool?',
  description:
    'VidText AI vs Summarize.tech: which tool gives better YouTube summaries? Compare features, output quality, and content formats side by side.',
  alternates: { canonical: 'https://www.vidtextai.com/alternatives/vs-summarize-tech' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'VidText AI vs Summarize.tech',
      description: 'Comparison of VidText AI and Summarize.tech for YouTube video summarization.',
      url: 'https://www.vidtextai.com/alternatives/vs-summarize-tech',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Alternatives', item: 'https://www.vidtextai.com/alternatives' },
        { '@type': 'ListItem', position: 3, name: 'vs Summarize.tech', item: 'https://www.vidtextai.com/alternatives/vs-summarize-tech' },
      ],
    },
  ],
}

const ROWS = [
  { feature: 'YouTube transcript extraction', vidtext: true, other: false },
  { feature: 'AI-generated summary', vidtext: true, other: true },
  { feature: 'Blog post generator', vidtext: true, other: false },
  { feature: 'Study notes generator', vidtext: true, other: false },
  { feature: 'Shorts script generator', vidtext: true, other: false },
  { feature: 'No sign-up required', vidtext: true, other: true },
  { feature: 'Download as .txt', vidtext: true, other: false },
  { feature: '10+ output languages', vidtext: true, other: false },
  { feature: 'Timestamped transcript', vidtext: true, other: false },
  { feature: 'Powered by latest AI model', vidtext: true, other: false },
  { feature: 'Free tier available', vidtext: true, other: true },
]

function Cell({ value }: { value: boolean }) {
  return value
    ? <span className="flex justify-center"><Check className="h-5 w-5 text-green-500" /></span>
    : <span className="flex justify-center"><X className="h-5 w-5 text-gray-300" /></span>
}

export default function VsSummarizeTechPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/alternatives" className="hover:text-gray-600">Alternatives</Link>
        <span>/</span>
        <span className="text-gray-600">VidText AI vs Summarize.tech</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">VidText AI vs Summarize.tech</h1>
        <p className="mt-4 text-lg text-gray-500">
          Summarize.tech does one thing: summarize YouTube videos. VidText AI does that — and four things more.
          Here&apos;s how they compare.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-10">
        <div className="rounded-xl border-2 border-red-600 bg-red-50/40 p-5">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Choose VidText AI if…</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You need more than just a summary — blog posts, notes, scripts</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You want a downloadable, timestamped transcript</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You need output in multiple languages</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />You are a content creator or student wanting full repurposing</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Choose Summarize.tech if…</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />You only ever need a quick paragraph summary</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />Simplicity is your top priority</li>
          </ul>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-5 py-4 text-left font-semibold text-gray-900">Feature</th>
              <th className="px-4 py-4 text-center font-semibold text-red-600">VidText AI</th>
              <th className="px-4 py-4 text-center font-semibold text-gray-500">Summarize.tech</th>
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
        <h2 className="text-2xl font-bold text-gray-900">Why VidText AI Wins for Most Users</h2>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Output Formats</h3>
          <p className="text-sm text-gray-600">Summarize.tech produces a single paragraph or bullet-point summary. VidText AI gives you <strong>5 different formats</strong> from the same video: transcript, summary, blog post, study notes, and Shorts scripts — each optimized for its use case.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">AI Model Quality</h3>
          <p className="text-sm text-gray-600">VidText AI uses <strong>Google Gemini 2.5 Flash</strong>, one of the most capable AI models available in 2026. The output is more coherent, better structured, and more actionable than basic summarization tools.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-2">Language Support</h3>
          <p className="text-sm text-gray-600">VidText AI outputs content in <strong>10+ languages</strong> including Chinese, Japanese, Spanish, and Arabic. Summarize.tech is English-only.</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is VidText AI better than Summarize.tech?',
              a: 'For most users, yes. VidText AI provides five content formats from any YouTube video — transcript, summary, blog post, study notes, and Shorts scripts — while Summarize.tech only provides a basic summary. VidText AI also supports 10+ languages, allows downloading transcripts, and uses a more capable AI model. Summarize.tech is simpler and faster if you only ever need a quick one-paragraph summary.',
            },
            {
              q: 'Does Summarize.tech give you the full transcript?',
              a: 'No. Summarize.tech only produces a summary of the video — it does not provide access to the full, timestamped transcript. VidText AI gives you the complete transcript with timestamps, which you can copy, download, or use as a basis for AI content generation.',
            },
            {
              q: 'Which tool supports multiple languages?',
              a: 'VidText AI supports 10+ output languages including English, Chinese (Simplified and Traditional), Japanese, Korean, Spanish, French, German, Portuguese, and Arabic. Summarize.tech outputs in English only, making VidText AI the better choice for non-English speakers or multilingual content creators.',
            },
            {
              q: 'Can Summarize.tech generate blog posts or study notes from YouTube videos?',
              a: 'No. Summarize.tech is a single-purpose tool focused on one-click summaries. It cannot generate blog posts, study notes, or Shorts scripts. VidText AI is a full content repurposing platform — from one YouTube video, you can generate all five content formats in seconds.',
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
        <p className="text-red-100 mb-5">5 content formats. 10 languages. No sign-up required.</p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 hover:bg-red-50 transition-colors">
          Get Free Transcript <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
