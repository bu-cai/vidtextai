'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Zap, Loader2 } from 'lucide-react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    if (!sessionId) { setStatus('error'); return }

    fetch(`/api/subscription?session_id=${sessionId}`)
      .then(r => r.json())
      .then(data => {
        if (data.pro_token) {
          localStorage.setItem('vidtext_pro_token', data.pro_token)
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }, [sessionId])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin text-red-500 mx-auto mb-4" />
          <p className="text-gray-500">Activating your Pro account...</p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-4xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Something went wrong</h1>
          <p className="text-gray-500 mb-6">
            Your payment was received but we couldn&apos;t activate Pro automatically.
            Please contact support with your order details.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Welcome to Pro! 🎉
        </h1>
        <p className="text-gray-500 mb-2">
          Your 7-day free trial has started. You now have <strong>unlimited AI generations</strong>.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Pro access is saved in this browser. Use the same browser to keep your Pro benefits.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-3.5 font-semibold text-white hover:bg-red-700 transition-colors shadow-lg"
        >
          <Zap className="h-4 w-4 fill-current" />
          Start Using Pro
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-red-500" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
