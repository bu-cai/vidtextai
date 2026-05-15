/**
 * In-memory rate limiter (no Redis needed for start)
 * Resets on server restart — good enough for early stage
 * Upgrade to Redis/Supabase when you have paying users
 */

const FREE_DAILY_LIMIT = 3      // free: 3 AI generations/day
const PRO_DAILY_LIMIT = 999     // pro: effectively unlimited

interface UsageRecord {
  count: number
  date: string   // YYYY-MM-DD
}

const usageStore = new Map<string, UsageRecord>()

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1'
  return ip
}

export function checkRateLimit(ip: string, isPro = false): {
  allowed: boolean
  used: number
  limit: number
  remaining: number
} {
  const limit = isPro ? PRO_DAILY_LIMIT : FREE_DAILY_LIMIT
  const key = `${ip}:${today()}`
  const record = usageStore.get(key) || { count: 0, date: today() }

  // Reset if new day
  if (record.date !== today()) {
    record.count = 0
    record.date = today()
  }

  const used = record.count
  const remaining = Math.max(0, limit - used)
  const allowed = used < limit

  return { allowed, used, limit, remaining }
}

export function incrementUsage(ip: string): void {
  const key = `${ip}:${today()}`
  const record = usageStore.get(key) || { count: 0, date: today() }
  if (record.date !== today()) {
    record.count = 0
    record.date = today()
  }
  record.count++
  usageStore.set(key, record)
}

// Cleanup old entries every hour to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const todayStr = today()
    for (const [key] of usageStore) {
      if (!key.endsWith(todayStr)) usageStore.delete(key)
    }
  }, 3600_000)
}
