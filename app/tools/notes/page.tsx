import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { StickyNote, GraduationCap, CheckSquare, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube to Study Notes Generator — AI Note Taker | TranscriptAI',
  description:
    'Convert YouTube lectures and educational videos into structured study notes with AI. Extract key concepts, action items, and important quotes automatically.',
  keywords: ['YouTube to notes', 'video note taker', 'study notes generator', 'lecture notes AI'],
}

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
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
      </article>
    </div>
  )
}
