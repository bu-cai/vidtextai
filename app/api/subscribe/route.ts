import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/client'

function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  return url.length > 0 && !url.includes('placeholder')
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const cleanEmail = email.trim().toLowerCase()

    if (isSupabaseConfigured()) {
      const supabase = createServerClient()
      const { error } = await supabase
        .from('email_subscribers')
        .upsert({ email: cleanEmail, source: 'email_capture', created_at: new Date().toISOString() })

      if (error && !error.message.includes('duplicate')) {
        console.error('Supabase subscribe error:', error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
