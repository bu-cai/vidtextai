'use client'

import { useState } from 'react'
import { Mail, X, ArrowRight, CheckCircle2 } from 'lucide-react'

interface EmailCaptureProps {
  onDismiss: () => void
}

export function EmailCapture({ onDismiss }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setLoading(true)
    // Store in localStorage so we don't show again
    localStorage.setItem('vidtext_email_captured', '1')
    // Small delay for UX
    await new Promise(r => setTimeout(r, 600))
    setSubmitted(true)
    setLoading(false)
    setTimeout(onDismiss, 2000)
  }

  function handleSkip() {
    localStorage.setItem('vidtext_email_captured', '1')
    onDismiss()
  }

  if (submitted) {
    return (
      <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
        <p className="text-sm text-green-700 font-medium">You&apos;re in! We&apos;ll notify you when Pro launches 🎉</p>
      </div>
    )
  }

  return (
    <div className="mt-4 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3.5">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-red-500 shrink-0" />
          <p className="text-sm font-semibold text-gray-900">Get notified when Pro launches</p>
        </div>
        <button onClick={handleSkip} className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-3">
        Unlimited generations, custom prompts & API access — join the waitlist for early access + a launch discount.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <button
          type="submit"
          disabled={loading || !email.includes('@')}
          className="flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50 transition-colors shrink-0"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <><span>Join</span><ArrowRight className="h-3.5 w-3.5" /></>
          )}
        </button>
      </form>
      <button onClick={handleSkip} className="mt-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
        No thanks, skip
      </button>
    </div>
  )
}
