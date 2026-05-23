import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase/client'
import crypto from 'crypto'

function generateProToken(): string {
  return 'pro_' + crypto.randomBytes(32).toString('hex')
}

// GET /api/subscription?session_id=xxx  — called from success page
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')
  if (!sessionId) return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session.payment_status !== 'paid' && session.status !== 'complete') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 402 })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createServerClient() as any
    const customerId = session.customer as string

    // Look up existing record
    const { data } = await supabase
      .from('subscriptions')
      .select('pro_token, status')
      .eq('stripe_customer_id', customerId)
      .single()

    if (data?.pro_token && data.status === 'active') {
      return NextResponse.json({ pro_token: data.pro_token })
    }

    // Webhook may not have fired yet — create record now
    const email = session.customer_email || session.customer_details?.email || ''
    const proToken = generateProToken()

    await supabase.from('subscriptions').upsert({
      stripe_customer_id: customerId,
      stripe_subscription_id: session.subscription as string,
      email,
      status: 'active',
      pro_token: proToken,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'stripe_customer_id' })

    return NextResponse.json({ pro_token: proToken })
  } catch (err) {
    console.error('Subscription verify error:', err)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}

// POST /api/subscription  — validate pro token on each AI request
export async function POST(req: NextRequest) {
  try {
    const { pro_token } = await req.json()
    if (!pro_token) return NextResponse.json({ isPro: false })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createServerClient() as any
    const { data } = await supabase
      .from('subscriptions')
      .select('status')
      .eq('pro_token', pro_token)
      .single()

    return NextResponse.json({ isPro: data?.status === 'active' })
  } catch {
    return NextResponse.json({ isPro: false })
  }
}
