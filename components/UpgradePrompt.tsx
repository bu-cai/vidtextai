'use client'

import { X, Zap, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface UpgradePromptProps {
  used: number
  limit: number
  onClose: () => void
}

const PRO_FEATURES = [
  'Unlimited AI generations per day',
  'Higher quality output (Gemini 2.5 Flash)',
  'Longer transcript processing (2× more context)',
  'Blog Post & Shorts Script priority',
  'Custom AI prompts',
  'No ads',
]

export function UpgradePrompt({ used, limit, onClose }: UpgradePromptProps) {
  const [loading, setLoading] = useState(false)

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-t-2xl px-6 py-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 fill-yellow-300 text-yellow-300" />
            <span className="font-bold text-lg">Daily Limit Reached</span>
          </div>
          <p className="text-red-100 text-sm">
            You&apos;ve used <strong>{used}/{limit}</strong> free AI generations today.
            Upgrade to Pro for unlimited access.
          </p>
          {/* Usage bar */}
          <div className="mt-3 h-2 bg-red-800/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-300 rounded-full transition-all"
              style={{ width: `${Math.min(100, (used / limit) * 100)}%` }}
            />
          </div>
        </div>

        {/* Features */}
        <div className="px-6 py-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Pro Plan includes
          </p>
          <ul className="space-y-2">
            {PRO_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing + CTA */}
        <div className="px-6 pb-6">
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-3xl font-extrabold text-gray-900">$9.90</span>
            <span className="text-gray-400 text-sm">/month</span>
            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              Save 40% yearly
            </span>
          </div>
          <Button className="w-full h-11 text-base font-semibold gap-2" onClick={handleUpgrade} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4 fill-current" />}
            {loading ? 'Redirecting...' : 'Upgrade to Pro'}
          </Button>
          <p className="mt-2 text-center text-xs text-gray-400">
            Cancel anytime · 7-day free trial
          </p>
          <button onClick={onClose} className="w-full mt-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Continue with free plan (resets at midnight)
          </button>
        </div>
      </div>
    </div>
  )
}
