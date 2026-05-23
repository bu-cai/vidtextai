'use client'

import Link from 'next/link'
import { Check, Zap, Loader2, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'


const FREE_FEATURES = [
  '3 AI content generations per day',
  'Full YouTube transcript extraction',
  'Summary, Blog, Notes & Shorts Script',
  '10 output languages',
  'Copy & download results',
  'No sign-up required',
]

const PRO_FEATURES = [
  'Unlimited AI content generations',
  'Priority processing speed',
  'All 10 output languages',
  'Custom AI prompts',
  'Batch processing (coming soon)',
  'API access (coming soon)',
  'Priority support',
  'No ads',
]

export default function PricingPage() {
  const [loading, setLoading] = useState(false)
  const [isAlreadyPro, setIsAlreadyPro] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('vidtext_pro_token')
    if (token) setIsAlreadyPro(true)
  }, [])

  async function handleUpgrade() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-lg text-gray-500">Start free. Upgrade when you need more.</p>
        {isAlreadyPro && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            You&apos;re already on Pro — enjoy unlimited access!
          </div>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">

        {/* Free Plan */}
        <div className="rounded-2xl border-2 border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Free</h2>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 mb-1">/forever</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Perfect for occasional use</p>
          </div>

          <Link
            href="/"
            className="block w-full rounded-xl border-2 border-gray-900 py-3 text-center font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            Start Free — No Sign-up
          </Link>

          <ul className="mt-8 space-y-3">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border-2 border-red-600 p-8 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Pro</h2>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-5xl font-bold text-gray-900">$9.90</span>
              <span className="text-gray-500 mb-1">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">For creators & power users</p>
          </div>

          <button
            onClick={handleUpgrade}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
            {loading ? 'Redirecting...' : 'Start 7-Day Free Trial'}
          </button>

          <ul className="mt-8 space-y-3">
            {PRO_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Pricing FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Do I need a credit card to use the free plan?',
              a: 'No. The free plan requires no sign-up and no credit card. Just paste a YouTube URL and go.',
            },
            {
              q: 'When does the daily limit reset?',
              a: 'Your 3 free AI generations reset at midnight UTC every day.',
            },
            {
              q: 'What counts as one AI generation?',
              a: 'Each time you generate a Summary, Blog Post, Study Notes, or Shorts Script uses one generation. Fetching a plain transcript does not count.',
            },
            {
              q: 'How does the 7-day free trial work?',
              a: "Start your Pro trial with no charge for 7 days. You'll only be billed $9.90/month after the trial ends. Cancel anytime before — no questions asked.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's included */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">What You Get With VidText AI Free</h2>
        <p className="text-gray-600 text-center mb-8">
          The free plan gives you full access to every tool — no credit card, no sign-up, no hidden limits on transcripts.
          YouTube transcript extraction is always free and unlimited. The 3-per-day limit only applies to AI-powered features
          like summaries, blog posts, study notes, and Shorts scripts.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { emoji: '📝', title: 'Full Transcripts', desc: 'Extract complete, timestamped transcripts from any public YouTube video. Always free, always unlimited.' },
            { emoji: '✨', title: 'AI Summaries', desc: 'Get concise key-point summaries from any video. 3 free generations per day — resets at midnight UTC.' },
            { emoji: '📖', title: 'Blog & Notes', desc: 'Generate SEO blog posts and structured study notes. Same daily free tier as summaries.' },
          ].map(item => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-5 text-center">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
