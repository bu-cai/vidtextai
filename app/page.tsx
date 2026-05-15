'use client'

import { VideoConverter } from '@/components/VideoConverter'
import { FileText, Sparkles, BookOpen, Scissors, ChevronRight, StickyNote, Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const FEATURES = [
  {
    icon: FileText,
    title: 'Full Transcript',
    desc: 'Get timestamped, accurate transcripts from any YouTube video in seconds.',
    href: '/tools/transcript',
    color: 'from-blue-50 to-blue-100/50',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Sparkles,
    title: 'AI Summary',
    desc: 'Extract key points and takeaways with intelligent AI summarization.',
    href: '/tools/summary',
    color: 'from-purple-50 to-purple-100/50',
    iconBg: 'bg-purple-50 group-hover:bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Blog Post',
    desc: 'Transform videos into SEO-optimized blog articles automatically.',
    href: '/tools/blog',
    color: 'from-green-50 to-green-100/50',
    iconBg: 'bg-green-50 group-hover:bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: StickyNote,
    title: 'Study Notes',
    desc: 'Convert lectures and educational videos into structured study notes.',
    href: '/tools/notes',
    color: 'from-yellow-50 to-yellow-100/50',
    iconBg: 'bg-yellow-50 group-hover:bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Scissors,
    title: 'Shorts Script',
    desc: 'Repurpose long videos into viral short-form scripts for TikTok & Shorts.',
    href: '/tools/shorts',
    color: 'from-red-50 to-red-100/50',
    iconBg: 'bg-red-50 group-hover:bg-red-100',
    iconColor: 'text-red-600',
  },
]

const STATS = [
  { value: '500K+', label: 'Transcripts Generated' },
  { value: '50+', label: 'Languages Supported' },
  { value: '5', label: 'AI Output Formats' },
  { value: '< 30s', label: 'Average Processing Time' },
]

const HOW_IT_WORKS = [
  { step: '1', title: 'Paste YouTube URL', desc: 'Copy any YouTube video URL and paste it into the converter above.', emoji: '🔗' },
  { step: '2', title: 'Choose Output Type', desc: 'Select transcript, summary, blog post, notes, or Shorts script.', emoji: '🎯' },
  { step: '3', title: 'Get Your Content', desc: 'AI generates your content in seconds. Copy or download instantly.', emoji: '⚡' },
]

const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    role: 'Content Creator',
    avatar: 'SK',
    color: 'bg-purple-500',
    text: 'I use this every day to repurpose my YouTube videos into blog posts. Saves me 3+ hours a week!',
    stars: 5,
  },
  {
    name: 'Michael T.',
    role: 'Graduate Student',
    avatar: 'MT',
    color: 'bg-blue-500',
    text: 'Perfect for converting lecture recordings into study notes. Game changer for exam prep.',
    stars: 5,
  },
  {
    name: 'Lisa Chen',
    role: 'SEO Specialist',
    avatar: 'LC',
    color: 'bg-green-500',
    text: 'The blog post generator creates SEO-ready articles from videos in seconds. Incredible quality.',
    stars: 5,
  },
]

const USE_CASES = [
  { title: '🎬 Content Creators', desc: 'Repurpose your video content into blog posts and social media scripts automatically.' },
  { title: '📚 Students & Researchers', desc: 'Convert lecture videos and educational content into structured study notes.' },
  { title: '📈 Marketers & SEO Pros', desc: 'Transform YouTube videos into keyword-rich blog articles that rank on Google.' },
  { title: '🎙️ Podcast Hosts', desc: 'Get transcripts and show notes from video podcasts in one click.' },
]

const FAQS = [
  {
    q: 'What types of YouTube videos does it support?',
    a: 'Any public YouTube video with captions or subtitles enabled. This includes most educational videos, news, podcasts, TED Talks, and channels that auto-generate captions. Videos without any captions cannot be processed.',
  },
  {
    q: 'How many videos can I process for free?',
    a: 'Free users get 3 AI generations per day (transcript fetch is always free). Upgrade to Pro for unlimited access, higher quality output, and priority processing.',
  },
  {
    q: 'What languages are supported?',
    a: 'We support 10+ output languages including English, Chinese, Japanese, Spanish, French, German, Korean, Portuguese, Russian, and Arabic. Simply select your preferred language before generating.',
  },
  {
    q: 'How accurate are the AI-generated outputs?',
    a: 'Very accurate. We use the latest Gemini AI models which understand context and nuance. Transcript accuracy depends on the original caption quality, while summaries and blog posts are AI-generated with high fidelity to the source content.',
  },
  {
    q: 'Is my data private?',
    a: 'We only process publicly available YouTube video transcripts. Your generated content is cached temporarily to speed up repeat requests, but we do not sell your data or use it for training AI models.',
  },
  {
    q: 'Can I use this for commercial purposes?',
    a: 'Yes! Pro users can use the generated content commercially. Remember to verify that the source YouTube video\'s license permits the type of content reuse you have in mind.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-red-50 via-white to-white px-4 py-12 text-center md:py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-3xl" />
          <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
          <div className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered YouTube Content Platform
            <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white">✓</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Turn YouTube Videos Into
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Any Content Format
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
            Extract transcripts, generate summaries, create SEO blog posts, study notes, and Shorts
            scripts from any YouTube video — in seconds with AI.
          </p>

          {/* Converter */}
          <div id="converter" className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-5 shadow-xl border border-gray-100 sm:p-6">
            <VideoConverter />
          </div>

          <p className="mt-4 text-xs text-gray-400 sm:text-sm">
            Works with any public YouTube video&nbsp;•&nbsp;No account required&nbsp;•&nbsp;3 free AI generations/day
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-100 bg-white px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-red-600 sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-gray-500 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Everything You Need From a YouTube Video</h2>
            <p className="mt-3 text-gray-500">Five powerful AI tools, one platform.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className={`group rounded-xl border border-gray-200 bg-gradient-to-br ${f.color} p-5 hover:border-red-200 hover:shadow-md transition-all`}
              >
                <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.iconBg} transition-colors`}>
                  <f.icon className={`h-5 w-5 ${f.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Try it <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">How It Works</h2>
            <p className="mt-3 text-gray-500">Get results in under 30 seconds.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {HOW_IT_WORKS.map((item, idx) => (
              <div key={item.step} className="relative">
                {/* Card */}
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                  {/* Top row: emoji badge + step pill */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-3xl">
                      {item.emoji}
                    </div>
                    <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                      Step {item.step}
                    </span>
                  </div>
                  {/* Text */}
                  <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                {/* Arrow connector (desktop only) */}
                {idx < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center text-red-300 text-lg font-bold">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Loved by Creators & Learners</h2>
            <p className="mt-3 text-gray-500">Join thousands who save hours every week.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${t.color} text-white text-xs font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Who Uses VidText AI?</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {USE_CASES.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-red-200 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-3 text-gray-500">Everything you need to know about VidText AI.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-4xl">🚀</div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Converting Videos Now</h2>
          <p className="mt-3 text-red-100 text-sm sm:text-base">
            Free to use. No signup required. Powered by the latest Gemini AI.
          </p>
          <a
            href="#converter"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-red-600 hover:bg-red-50 transition-colors shadow-lg"
          >
            Try Free Now <ChevronRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-red-200">3 free generations per day · No credit card required</p>
        </div>
      </section>
    </>
  )
}
