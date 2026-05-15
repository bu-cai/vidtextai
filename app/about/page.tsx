import { Metadata } from 'next'
import Link from 'next/link'
import { Video, Zap, Globe, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About VidText AI — YouTube Transcript & AI Content Platform',
  description: 'Learn about VidText AI — our mission to make YouTube content accessible and repurposable for everyone using AI.',
  alternates: { canonical: 'https://www.vidtextai.com/about' },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 mb-6">
          <Video className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">About VidText AI</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          We believe every YouTube video contains valuable knowledge — we make it instantly accessible, searchable, and repurposable.
        </p>
      </div>

      {/* Mission */}
      <div className="rounded-2xl bg-red-50 border border-red-100 p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          YouTube hosts over 800 million videos containing lectures, tutorials, interviews, documentaries, and more. But most of this knowledge is locked inside video format — hard to search, quote, or repurpose. VidText AI breaks down those barriers by instantly transforming any YouTube video into text-based formats that you can actually use.
        </p>
      </div>

      {/* Values */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Stand For</h2>
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {[
          {
            icon: Zap,
            title: 'Speed First',
            desc: 'Get your transcript or AI-generated content in under 30 seconds. No waiting, no sign-up required.',
          },
          {
            icon: Globe,
            title: 'Global Access',
            desc: 'Support for 50+ output languages means content creators and students worldwide can benefit.',
          },
          {
            icon: Shield,
            title: 'Privacy Focused',
            desc: "We don't store your content. YouTube URLs are processed and discarded. Your data stays yours.",
          },
          {
            icon: Heart,
            title: 'Free to Start',
            desc: '3 free AI generations every day, no credit card required. Upgrade only when you need more.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-6">
            <item.icon className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">How VidText AI Works</h2>
      <div className="space-y-4 mb-12">
        {[
          { step: '1', title: 'You paste a YouTube URL', desc: 'Any public YouTube video works — lectures, podcasts, tutorials, interviews.' },
          { step: '2', title: 'We fetch the transcript', desc: 'Our system retrieves the video captions via multiple methods to ensure high accuracy.' },
          { step: '3', title: 'AI transforms the content', desc: "Google's Gemini AI processes the transcript and generates your chosen output format." },
          { step: '4', title: 'You get instant results', desc: 'Copy, download, or use the output directly — ready in under 30 seconds.' },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 rounded-xl border border-gray-200 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-bold text-sm">
              {item.step}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gray-900 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to try it?</h2>
        <p className="text-gray-400 mb-6">No sign-up needed. Start with 3 free AI generations today.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
        >
          Try VidText AI Free
        </Link>
      </div>

    </div>
  )
}
