import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Tips & Guides | VidText AI',
  description: 'Learn how to get the most out of YouTube transcripts and AI content generation with VidText AI guides and tutorials.',
  alternates: { canonical: 'https://www.vidtextai.com/blog' },
}

const POSTS = [
  {
    slug: 'how-to-get-youtube-transcript',
    title: 'How to Get a YouTube Video Transcript (Free & Fast)',
    excerpt: 'Learn the easiest way to extract a full, timestamped transcript from any YouTube video — no software needed.',
    category: 'Guide',
    date: 'May 15, 2026',
    readTime: '3 min read',
  },
  {
    slug: 'youtube-to-blog-post',
    title: 'How to Turn a YouTube Video into a Blog Post with AI',
    excerpt: 'Repurpose your video content into SEO-optimized blog posts in seconds using AI. Step-by-step guide for content creators.',
    category: 'Tutorial',
    date: 'May 15, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'study-notes-from-youtube',
    title: 'How Students Can Use YouTube Transcripts for Studying',
    excerpt: 'Extract key concepts, quotes, and summaries from educational YouTube videos to supercharge your study sessions.',
    category: 'Tips',
    date: 'May 15, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'youtube-shorts-script-generator',
    title: 'Generate YouTube Shorts Scripts from Long Videos',
    excerpt: 'Repurpose your long-form YouTube content into multiple viral Shorts scripts with AI. Maximize your content output.',
    category: 'Tutorial',
    date: 'May 15, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'youtube-notes-generator',
    title: 'How to Generate Study Notes from Any YouTube Video',
    excerpt: 'Stop rewinding. Use an AI notes generator to extract structured, searchable notes from lectures, tutorials, and talks instantly.',
    category: 'Tips',
    date: 'May 16, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'video-to-text-converter-guide',
    title: 'Video to Text Converter: The Complete Guide (2026)',
    excerpt: 'Everything you need to know about converting YouTube videos to text — how it works, top tools, accuracy, and use cases.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'youtube-to-blog-post-ai',
    title: 'How to Turn Any YouTube Video into a Blog Post with AI',
    excerpt: 'Repurpose your video content into SEO-ready blog articles in minutes. The fastest workflow for video-first creators.',
    category: 'Tutorial',
    date: 'May 16, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'how-to-see-transcript-on-youtube',
    title: 'How to See, Get & Download a YouTube Transcript (4 Ways)',
    excerpt: 'Step-by-step guide to viewing, copying, and downloading a transcript from any YouTube video — with and without tools.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'best-youtube-summarizer-prompts',
    title: 'Best YouTube Video Summarizer Prompts for ChatGPT & AI (2026)',
    excerpt: 'Copy-paste prompts to summarize any YouTube video with ChatGPT, Claude, or Gemini. Get better summaries and key takeaways instantly.',
    category: 'Tips',
    date: 'May 16, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'youtube-transcript-chrome-extension',
    title: 'Best YouTube Transcript & Note-Taking Chrome Extensions (2026)',
    excerpt: 'Compare the top Chrome extensions for YouTube transcripts and note-taking — plus a faster alternative that needs no installation.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'youtube-caption-downloader',
    title: 'YouTube Caption Downloader: How to Download Captions Free (2026)',
    excerpt: 'Download captions and subtitles from any YouTube video instantly — as a .txt file, no software needed, no sign-up required.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'chatgpt-summarize-youtube-video',
    title: 'Can ChatGPT Summarize a YouTube Video? (Yes — Here\'s How)',
    excerpt: 'ChatGPT can\'t watch YouTube directly — but with a transcript, it summarizes perfectly. Step-by-step guide + faster one-click alternative.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'best-youtube-transcript-tools',
    title: 'Best YouTube Transcript Tools in 2026 (Free, No Install, AI-Powered)',
    excerpt: 'Compare VidText AI, Tactiq, NoteGPT, Glasp, and YouTube\'s built-in transcript. Find the best free tool — no install required.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'youtube-transcript-shortcut-search',
    title: 'YouTube Transcript Shortcut & Search Guide (2026)',
    excerpt: 'How to open YouTube transcripts with a keyboard shortcut, search within any transcript, and find specific words in a video instantly.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '5 min read',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Guide: 'bg-blue-50 text-blue-700',
  Tutorial: 'bg-green-50 text-green-700',
  Tips: 'bg-purple-50 text-purple-700',
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 mb-4">
          <BookOpen className="h-4 w-4" />
          VidText AI Blog
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Tips, Guides & Tutorials</h1>
        <p className="mt-3 text-lg text-gray-500">Learn how to get the most out of YouTube transcripts and AI content tools.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="rounded-2xl border border-gray-200 p-6 hover:border-red-200 hover:shadow-sm transition-all group h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[post.category]}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-red-600 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-red-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to try it yourself?</h2>
        <p className="text-red-100 mb-6">Turn any YouTube video into transcripts, summaries, blog posts and more — free.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-red-600 hover:bg-red-50 transition-colors"
        >
          Try VidText AI Free <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </div>
  )
}
