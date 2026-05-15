import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './types'

// Lazy initialization — only creates client when actually called
// This prevents build-time errors when env vars are not set
function getSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || ''
}

function getSupabaseAnonKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
}

export function getSupabaseClient(): SupabaseClient<Database> {
  return createClient<Database>(getSupabaseUrl(), getSupabaseAnonKey())
}

export const supabase: SupabaseClient<Database> = new Proxy({} as SupabaseClient<Database>, {
  get(_target, prop) {
    return getSupabaseClient()[prop as keyof SupabaseClient<Database>]
  },
})

export function createServerClient(): SupabaseClient<Database> {
  return createClient<Database>(
    getSupabaseUrl(),
    process.env.SUPABASE_SERVICE_ROLE_KEY || getSupabaseAnonKey()
  )
}
