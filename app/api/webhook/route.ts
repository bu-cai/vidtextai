import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase/client'
import crypto from 'crypto'

// Generate a secure random pro token
function generateProToken(): string {
  return 'pro_' + crypto.randomBytes(32).toString('hex')
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature error:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const supabase = createServerClient() as any

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as {
      id: string
      customer: string
      subscription: string
      customer_email: string | null
      customer_details?: { email?: string }
    }

    const email = session.customer_email || session.customer_details?.email || ''

    // Preserve existing pro_token if already created by success page polling
    // to avoid invalidating the token already stored in user's localStorage
    const { data: existing } = await supabase
      .from('subscriptions')
      .select('pro_token')
      .eq('stripe_customer_id', session.customer as string)
      .single()

    const proToken = existing?.pro_token || generateProToken()

    const { error } = await supabase.from('subscriptions').upsert({
      stripe_customer_id: session.customer as string,
      stripe_subscription_id: session.subscription as string,
      email,
      status: 'active',
      pro_token: proToken,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'stripe_customer_id' })

    if (error) console.error('Supabase upsert error:', error)
  }

  if (event.type === 'customer.subscription.deleted' ||
      event.type === 'customer.subscription.updated') {
    const subscription = event.data.object as {
      id: string
      customer: string
      status: string
    }

    const isActive = subscription.status === 'active' || subscription.status === 'trialing'

    const { error } = await supabase.from('subscriptions')
      .update({
        status: isActive ? 'active' : 'canceled',
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', subscription.id)

    if (error) console.error('Supabase update error:', error)
  }

  return NextResponse.json({ received: true })
}
