/**
 * In-memory rate limiter (no Redis needed for start)
 * Resets on server restart — good enough for early stage
 * Upgrade to Redis/Supabase when you have paying users
 */

const FREE_DAILY_LIMIT = 3      // free: 3 AI generations/day
const PRO_DAILY_LIMIT = 200     // pro: 200/day — enough for any real user, blocks abuse

// Burst protection: max N requests per minute per IP
const BURST_LIMIT = 10          // max 10 requests per minute
const BURST_WINDOW_MS = 60_000  // 1 minute window

interface UsageRecord {
  count: number
  date: string   // YYYY-MM-DD
}

interface BurstRecord {
  timestamps: number[]
}

const usageStore = new Map<string, UsageRecord>()
const burstStore = new Map<string, BurstRecord>()

// Check burst: returns true if request is allowed (not bursting)
export function checkBurstLimit(ip: string): boolean {
  const now = Date.now()
  const record = burstStore.get(ip) || { timestamps: [] }
  // Remove timestamps outside the window
  record.timestamps = record.timestamps.filter(t => now - t < BURST_WINDOW_MS)
  if (record.timestamps.length >= BURST_LIMIT) {
    burstStore.set(ip, record)
    return false // too many requests
  }
  record.timestamps.push(now)
  burstStore.set(ip, record)
  return true
}

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
