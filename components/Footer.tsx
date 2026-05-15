import Link from 'next/link'
import { Video } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600">
                <Video className="h-5 w-5 text-white" />
              </div>
              <span>VidText AI</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Convert YouTube videos to transcripts, summaries, blog posts, and more with AI.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Tools</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/tools/transcript" className="hover:text-gray-900">Transcript</Link></li>
              <li><Link href="/tools/summary" className="hover:text-gray-900">Summary</Link></li>
              <li><Link href="/tools/blog" className="hover:text-gray-900">Blog Post</Link></li>
              <li><Link href="/tools/notes" className="hover:text-gray-900">Study Notes</Link></li>
              <li><Link href="/tools/shorts" className="hover:text-gray-900">Shorts Script</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
              <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} VidText AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
