'use client'

import Link from 'next/link'
import { Video, Menu, X } from 'lucide-react'
import { useState } from 'react'

const TOOL_LINKS = [
  { href: '/tools/transcript', label: 'Transcript' },
  { href: '/tools/summary', label: 'Summary' },
  { href: '/tools/blog', label: 'Blog Post' },
  { href: '/tools/notes', label: 'Study Notes' },
  { href: '/tools/shorts', label: 'Shorts Script' },
]

const NAV_LINKS = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/alternatives', label: 'Alternatives' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900" onClick={() => setMobileOpen(false)}>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 sm:h-8 sm:w-8">
            <Video className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </div>
          <span className="text-base font-bold sm:text-lg">VidText AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Tools dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
              Tools <span className="text-gray-400 text-xs">▾</span>
            </button>
            <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50">
              <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-1.5 min-w-[160px]">
                {TOOL_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/#converter"
            className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700 transition-colors sm:px-4 sm:py-2 sm:text-sm"
          >
            Try Free
          </Link>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            <p className="px-3 pt-1 pb-0.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Tools</p>
            {TOOL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="my-1 border-t border-gray-100" />
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
