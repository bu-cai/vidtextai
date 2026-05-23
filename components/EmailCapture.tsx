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
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
    } catch {
      // Fail silently — still show success to user
    }
    localStorage.setItem('vidtext_email_captured', '1')
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
        <p className="text-sm text-green-700 font-medium">Thanks! Check your email for your exclusive discount 🎉</p>
      </div>
    )
  }

  return (
    <div className="mt-4 rounded-xl border border-red-100 bg-red-50/60 px-4 py-3.5">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-red-500 shrink-0" />
          <p className="text-sm font-semibold text-gray-900">Get 20% off Pro — limited time</p>
        </div>
        <button onClick={handleSkip} className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-3">
        Enter your email to get an exclusive 20% discount on VidText AI Pro — unlimited AI generations, better quality.
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
