import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { StickyNote, GraduationCap, CheckSquare, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Study Notes Generator — AI Note Taker | VidText AI',
  description:
    'Convert YouTube lectures and educational videos into structured study notes with AI. Extract key concepts, action items, and important quotes automatically.',
  keywords: ['YouTube to notes', 'video note taker', 'study notes generator', 'lecture notes AI'],
  alternates: { canonical: 'https://www.vidtextai.com/tools/notes' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'YouTube to Study Notes Generator',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://www.vidtextai.com/tools/notes',
      description: 'Convert YouTube lectures and educational videos into structured study notes with AI.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '612', bestRating: '5' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Study Notes Generator', item: 'https://www.vidtextai.com/tools/notes' },
      ],
    },
  ],
}

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <StickyNote className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube to Study Notes</h1>
        <p className="mt-3 text-lg text-gray-500">
          AI-powered note-taking from any YouTube video, lecture, or tutorial.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: GraduationCap, title: 'Learning Ready', desc: 'Structured for studying, revision, and retention.' },
          { icon: CheckSquare, title: 'Action Items', desc: 'Highlights tasks and actionable steps from the video.' },
          { icon: Lightbulb, title: 'Key Concepts', desc: 'Extracts important ideas and definitions automatically.' },
          { icon: StickyNote, title: 'Notable Quotes', desc: 'Captures memorable quotes and key statements.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <article className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Study Smarter With AI Notes</h2>
        <p className="text-gray-600 mt-3">
          Stop pausing and rewinding educational videos. Our AI automatically extracts the most
          important information from lectures, tutorials, and educational content — formatted as
          clean, structured study notes you can review anytime.
        </p>
        <p className="text-gray-600 mt-3">
          Works great for online course lectures, conference talks, university video content,
          documentary insights, and how-to tutorials.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Generate Study Notes From a YouTube Video</h2>
        <ol className="mt-3 space-y-2 text-gray-600">
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">1.</span>Copy the YouTube video URL (lecture, tutorial, or talk).</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">2.</span>Paste it into the tool above and click <strong>Get Transcript</strong>.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">3.</span>Select the <strong>Study Notes</strong> tab and click Generate.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">4.</span>Get structured notes with key concepts, quotes, and action items in seconds.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">What Types of Videos Work Best?</h2>
        <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-5">
          <li>University and online course lectures (Coursera, Khan Academy, MIT)</li>
          <li>TED Talks and conference presentations</li>
          <li>Technical tutorials and how-to videos</li>
          <li>Business and finance educational content</li>
          <li>Documentary narration and explainer videos</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: 'How are the study notes structured?', a: 'Notes are organized with a summary, key concepts, important quotes, and action items or takeaways — formatted for quick review and revision.' },
            { q: 'Can I use this for university lecture videos?', a: 'Yes. Any public YouTube video with captions works, including recorded university lectures, online courses, and educational channels.' },
            { q: 'Is there a word limit on the generated notes?', a: 'No. VidText AI processes the full transcript regardless of video length and generates comprehensive notes covering the entire content.' },
            { q: 'Can I export the study notes?', a: 'Yes. Click Download to save the notes as a .txt file, or use the Copy button to paste into Notion, Google Docs, or any note-taking app.' },
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
