import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'

// ── Blog post content ─────────────────────────────────────────────────────────
const POSTS: Record<string, {
  title: string
  description: string
  category: string
  date: string
  readTime: string
  content: string
}> = {
  'how-to-get-youtube-transcript': {
    title: 'How to Get a YouTube Video Transcript (Free & Fast)',
    description: 'Learn the easiest way to extract a full, timestamped transcript from any YouTube video — no software needed.',
    category: 'Guide',
    date: 'May 15, 2026',
    readTime: '3 min read',
    content: `
## What Is a YouTube Transcript?

A YouTube transcript is the full text version of everything spoken in a video, broken into time-stamped segments. YouTube auto-generates captions for most videos using speech recognition, and many creators also add manual captions.

Transcripts are useful for:
- **Accessibility** — readers who are deaf or hard of hearing
- **Research** — quickly scan a video for specific information
- **SEO** — turn video content into written blog posts
- **Studying** — take notes from lectures or educational videos

## Method 1: Use VidText AI (Fastest)

VidText AI is the fastest way to get a full transcript from any YouTube video — no account required.

**Step 1:** Copy the YouTube video URL from your browser.

**Step 2:** Go to [VidText AI Transcript Tool](https://www.vidtextai.com/tools/transcript) and paste the URL.

**Step 3:** Click **Convert**. Your timestamped transcript appears instantly.

**Step 4:** Click **Copy** or **Download** to save it.

The entire process takes under 10 seconds for most videos.

## Method 2: YouTube's Built-in Transcript

YouTube has a hidden transcript feature:

1. Open the video on YouTube
2. Click the **three-dot menu (⋯)** below the video
3. Select **"Open transcript"**
4. The transcript panel opens on the right side

**Limitations:** YouTube's built-in transcript has no search, no formatting, and you can't download it easily.

## Method 3: YouTube Auto-Generated Captions

If a video has captions (CC badge), you can turn them on while watching. But they're hard to copy and don't provide a clean text file.

## Which Method Is Best?

| Method | Speed | Downloadable | Timestamped | Free |
|---|---|---|---|---|
| VidText AI | ⚡ Instant | ✅ Yes | ✅ Yes | ✅ Yes |
| YouTube Built-in | Medium | ❌ No | ✅ Yes | ✅ Yes |
| Manual Captions | Slow | ❌ No | ✅ Yes | ✅ Yes |

**Winner: VidText AI** — for anyone who needs a clean, downloadable transcript.

## What Videos Support Transcripts?

Most public YouTube videos with these characteristics work:
- Videos from channels with **auto-generated captions** enabled
- Videos with **manual CC subtitles** uploaded by the creator
- Educational content, news, TED Talks, podcasts, tutorials

Videos that don't work:
- Private or unlisted videos
- Videos where the creator has **disabled captions**
- Videos with no spoken content (music-only videos)

## Tips for Best Transcript Quality

1. **Choose well-captioned videos** — channels like TED, Coursera, and major news outlets have high-quality captions
2. **Use the language selector** — VidText AI can output transcripts in 10+ languages
3. **Check timestamps** — use Ctrl+F in the transcript to jump to specific moments

## Conclusion

Getting a YouTube transcript is simple with the right tool. VidText AI gives you a clean, timestamped, downloadable transcript in seconds — no sign-up required. Try it now at [vidtextai.com](https://www.vidtextai.com).
    `.trim(),
  },

  'youtube-to-blog-post': {
    title: 'How to Turn a YouTube Video into a Blog Post with AI',
    description: 'Repurpose your video content into SEO-optimized blog posts in seconds using AI. Step-by-step guide for content creators.',
    category: 'Tutorial',
    date: 'May 15, 2026',
    readTime: '5 min read',
    content: `
## Why Turn YouTube Videos into Blog Posts?

Every YouTube video you create contains hours of effort — research, scripting, filming, editing. Yet most of that value disappears once the video is published, because:

- **Google ranks text, not video** — blog posts appear in Google Search, videos mostly don't
- **Different audiences** — some people prefer reading over watching
- **SEO compound interest** — a blog post can rank for years with zero additional effort
- **Social sharing** — written content is easier to quote and share on LinkedIn, Twitter, etc.

By repurposing your videos into blog posts, you double (or triple) your content output from the same amount of work.

## The Traditional Way (Slow)

Before AI tools, turning a video into a blog post meant:

1. Watch the video (30–60 min)
2. Type a transcript manually (2–3 hours)
3. Rewrite into article format (1–2 hours)
4. Add SEO optimizations (30 min)

**Total: 4–6 hours per video.** Most creators simply don't do this.

## The AI Way with VidText AI (Fast)

**Step 1: Copy your YouTube video URL**

Go to the video on YouTube and copy the URL from your browser address bar.

**Step 2: Paste into VidText AI**

Go to [VidText AI Blog Tool](https://www.vidtextai.com/tools/blog) and paste the URL.

**Step 3: Select "Blog Post" mode**

Click the **Blog Post** tab in the converter.

**Step 4: Click Generate**

In under 30 seconds, you'll have a complete, formatted blog post with:
- An SEO-optimized H1 title
- Introduction paragraph
- Subheadings (H2, H3)
- Key points in bullet lists
- A conclusion with a call-to-action

**Total time: under 2 minutes.**

## How to Optimize Your AI-Generated Blog Post

The AI gives you a solid first draft. Here's how to polish it:

### 1. Add Your Personal Voice
AI content is accurate but generic. Add your own opinions, examples, and stories. This makes it unique and more engaging.

### 2. Add Internal Links
Link to related articles on your website. This helps both readers and SEO.

### 3. Add a Custom Featured Image
A relevant image dramatically increases click-through rates in Google Search results.

### 4. Optimize the Meta Description
Make sure your meta description is under 155 characters and includes your main keyword.

### 5. Add a Table of Contents
For long posts (1,500+ words), a table of contents improves user experience and can earn Google "jump to" links in search results.

## SEO Tips for Video-to-Blog Repurposing

- **Target long-tail keywords** — phrases like "how to do X step by step" perform well
- **Embed the original video** — YouTube videos embedded on blog posts reduce bounce rate
- **Add timestamps as headers** — "At 5:30, we cover..." helps readers navigate
- **Update regularly** — refresh the post every 6 months with new information

## Best Video Types to Repurpose

| Video Type | Blog Post Potential |
|---|---|
| Tutorial / How-to | ⭐⭐⭐⭐⭐ Excellent |
| Product review | ⭐⭐⭐⭐ Very good |
| Interview / Podcast | ⭐⭐⭐⭐ Very good |
| News / Commentary | ⭐⭐⭐ Good |
| Entertainment / Vlog | ⭐⭐ Fair |

## Conclusion

Repurposing YouTube videos into blog posts is one of the highest-ROI activities for content creators. With AI tools like VidText AI, what used to take hours now takes minutes. Start with your most popular video and turn it into a blog post today — your future Google rankings will thank you.

Try the [VidText AI Blog Generator](https://www.vidtextai.com/tools/blog) — free, no sign-up required.
    `.trim(),
  },

  'study-notes-from-youtube': {
    title: 'How Students Can Use YouTube Transcripts for Studying',
    description: 'Extract key concepts, quotes, and summaries from educational YouTube videos to supercharge your study sessions.',
    category: 'Tips',
    date: 'May 15, 2026',
    readTime: '4 min read',
    content: `
## YouTube Is the World's Largest Classroom

From Khan Academy and MIT OpenCourseWare to independent educators on every subject imaginable, YouTube has become the go-to learning resource for millions of students. But there's a problem: **videos are hard to study from.**

You can't:
- Skim a video like you skim a textbook
- Highlight important sentences
- Search for a specific concept
- Review key points without re-watching

That's where YouTube transcripts and AI-generated study notes come in.

## Method 1: Get a Transcript and Study From Text

Converting a lecture video to text gives you all the benefits of a written resource:

**How to do it:**
1. Find the educational YouTube video you want to study
2. Go to [VidText AI](https://www.vidtextai.com) and paste the URL
3. Click "Convert" to get the full timestamped transcript
4. Use Ctrl+F to search for any concept instantly

**Pro tip:** Download the transcript as a .txt file and import it into Notion, Obsidian, or your notes app. Now you can highlight, annotate, and organize it just like lecture notes.

## Method 2: Generate AI Study Notes Automatically

Study notes from a raw transcript still require manual organization. The AI Notes feature in VidText AI takes it one step further:

**What AI Study Notes include:**
- **Key concepts** — the most important ideas, clearly defined
- **Important terms** — vocabulary and definitions
- **Summary** — the main argument or lesson of the video
- **Bullet-point outlines** — perfect for flashcard creation
- **Potential exam questions** — based on the video content

**How to use it:**
1. Paste your lecture video URL into [VidText AI Notes Tool](https://www.vidtextai.com/tools/notes)
2. Select "Study Notes" mode
3. Generate — done in under 30 seconds

## 5 Ways to Use Transcripts for Better Studying

### 1. Create Flashcards from Key Terms
Copy the key terms and definitions from your AI notes into Anki or Quizlet. Spaced repetition with AI-extracted concepts is far more efficient than manual flashcard creation.

### 2. Build a Mind Map
Use the outline structure from AI notes to build a visual mind map in tools like MindMeister or Miro. Visual learners retain information much better this way.

### 3. Prepare for Exams
Ask yourself: "What questions would a professor ask based on this content?" The AI notes feature extracts likely exam topics automatically.

### 4. Cite Video Sources in Essays
Transcripts give you exact quotes with timestamps. When writing academic papers, you can cite: *[Author's YouTube channel], [Video title], [Timestamp]*.

### 5. Compare Multiple Sources
Watch 3-4 videos on the same topic, generate notes from each, and compare what different educators emphasize. This gives you a much deeper understanding than any single source.

## Best Educational YouTube Channels for Studying

Here are channels that work exceptionally well with transcript tools:

- **Khan Academy** — Math, science, economics (excellent auto-captions)
- **CrashCourse** — History, literature, science overviews
- **MIT OpenCourseWare** — University-level lectures
- **3Blue1Brown** — Visual mathematics
- **Kurzgesagt** — Science and philosophy
- **TED-Ed** — Short, concept-focused lessons

All of these have high-quality captions, which means better transcript accuracy.

## Tips for Maximum Study Efficiency

1. **Watch first, then extract notes** — get the big picture before diving into details
2. **Use timestamps** — when reviewing notes, jump back to the video for context
3. **Chunk your study sessions** — process one video per session, not multiple
4. **Active recall** — after generating notes, close them and try to write what you remember

## Conclusion

YouTube is an incredible learning resource, but videos are hard to study from. Transcripts and AI study notes transform passive video watching into active, efficient learning. Whether you're preparing for exams, learning a new skill, or doing research, VidText AI helps you extract maximum value from educational video content.

Try [VidText AI Study Notes](https://www.vidtextai.com/tools/notes) — free for 3 generations per day.
    `.trim(),
  },

  'youtube-shorts-script-generator': {
    title: 'Generate YouTube Shorts Scripts from Long Videos',
    description: 'Repurpose your long-form YouTube content into multiple viral Shorts scripts with AI. Maximize your content output.',
    category: 'Tutorial',
    date: 'May 15, 2026',
    readTime: '4 min read',
    content: `
## Why YouTube Shorts Are Essential in 2026

YouTube Shorts crossed 70 billion daily views in 2024 and continues to grow. For creators, Shorts represent a massive opportunity:

- **Algorithm boost** — YouTube actively promotes Shorts to new audiences
- **Discovery** — Shorts appear on the Shorts shelf on YouTube's homepage
- **Monetization** — Shorts are now included in YouTube Partner Program revenue
- **Repurposing** — one long video can generate 5–10 Shorts

The problem? Creating Shorts scripts from scratch takes time. That's where AI-powered repurposing changes everything.

## What Makes a Great YouTube Shorts Script?

Before we get into the AI process, understand what works:

### The HOOK Formula
The first 2-3 seconds determine whether viewers swipe away or stay. Great hooks include:
- A surprising statistic: *"Most people don't know this about [topic]..."*
- A bold claim: *"This changed how I [do X] forever..."*
- A question: *"What would you do if [scenario]?"*

### Ideal Structure for a 60-Second Short
- **0-3s:** Hook (stop the scroll)
- **3-15s:** Setup (what's this about?)
- **15-50s:** Main value (the actual insight/content)
- **50-60s:** CTA (subscribe, comment, link in bio)

### Pacing
Shorts should feel fast. Aim for 1-2 sentences per "scene." Cut anything that doesn't add value.

## How to Generate Shorts Scripts with VidText AI

**Step 1: Identify your source video**

Choose a long-form video (10+ minutes) that covers multiple interesting points. Tutorial videos, listicles ("10 ways to..."), and interview clips work best.

**Step 2: Paste the URL into VidText AI**

Go to [VidText AI Shorts Script Generator](https://www.vidtextai.com/tools/shorts) and paste your YouTube video URL.

**Step 3: Select "Shorts Script" mode**

Click the **Shorts Script** tab. The AI will:
- Analyze your full video transcript
- Identify the 3-5 most quotable, shareable moments
- Write complete scripts for each moment with hooks, middle, and CTA

**Step 4: Review and customize**

Each script is formatted and ready to use. Customize the hook, add your personality, and adjust the CTA to match your channel.

## 5 Types of Shorts That Perform Well

### 1. "Did You Know?" Facts
Take surprising statistics or counterintuitive facts from your video and build a Short around each one.

*Example: A finance video might contain "85% of millionaires read for 30 minutes a day" — perfect Short hook.*

### 2. Step-by-Step Mini Tutorials
A 3-step version of a longer tutorial. Keep each step to 1-2 sentences.

### 3. Quote Clips
If your video includes an interview, pull the most powerful 30-60 second quote and build a Short around it.

### 4. Myth vs. Reality
"Everyone thinks X, but actually Y." Simple, shareable, and gets comments.

### 5. Before/After Transformation
Show a problem and solution in under 60 seconds.

## Optimizing Your Shorts for Maximum Reach

**Titles:** Use keywords people search for. "How to [X] in 60 seconds" performs well.

**Hashtags:** Use 3-5 relevant hashtags. #Shorts is mandatory. Add 2-3 niche-specific tags.

**Thumbnail:** Shorts auto-play, but a good thumbnail increases click-through from the Shorts shelf.

**Posting frequency:** Consistency beats virality. 3-5 Shorts per week outperforms 1 viral Short per month for channel growth.

**Captions:** Always add captions. 85% of Shorts are watched without sound.

## Content Calendar Strategy

With VidText AI, here's how to build a month of Shorts from just 4 long videos:

| Long Video | Shorts Generated |
|---|---|
| Video 1 (20 min) | 5 Shorts scripts |
| Video 2 (15 min) | 4 Shorts scripts |
| Video 3 (25 min) | 6 Shorts scripts |
| Video 4 (18 min) | 5 Shorts scripts |
| **Total** | **20 Shorts scripts** |

That's a full month of Shorts content (5 per week) from 4 long videos. Each Short takes 15 minutes to film — far faster than scripting from scratch.

## Conclusion

YouTube Shorts are one of the best opportunities for channel growth in 2026. The biggest barrier for most creators is the time to create scripts. With VidText AI's Shorts Script Generator, you can turn any long-form video into 5+ ready-to-film Shorts scripts in under 2 minutes.

Try [VidText AI Shorts Script Generator](https://www.vidtextai.com/tools/shorts) — free to start, no sign-up required.
    `.trim(),
  },
}

// ── Markdown renderer ────────────────────────────────────────────────────────
function renderContent(md: string): string {
  const lines = md.split('\n')
  const out: string[] = []
  let inList = false
  let inTable = false
  let tableRows: string[][] = []

  const flushTable = () => {
    if (!inTable || tableRows.length === 0) return
    const [header, , ...body] = tableRows
    out.push('<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">')
    out.push('<thead><tr>' + header.map(h => `<th class="border border-gray-200 bg-gray-50 px-4 py-2 text-left font-semibold">${h}</th>`).join('') + '</tr></thead>')
    out.push('<tbody>')
    body.forEach(row => {
      out.push('<tr>' + row.map(c => `<td class="border border-gray-200 px-4 py-2">${c}</td>`).join('') + '</tr>')
    })
    out.push('</tbody></table></div>')
    tableRows = []
    inTable = false
  }

  for (const line of lines) {
    const t = line.trim()
    if (t.startsWith('|')) {
      inTable = true
      tableRows.push(t.split('|').slice(1, -1).map(c => c.trim()))
      continue
    }
    if (inTable) flushTable()
    if (t.startsWith('## ')) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-3">${t.slice(3)}</h2>`)
    } else if (t.startsWith('### ')) {
      if (inList) { out.push('</ul>'); inList = false }
      out.push(`<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">${t.slice(4)}</h3>`)
    } else if (t.startsWith('#### ')) {
      out.push(`<h4 class="font-semibold text-gray-800 mt-4 mb-1">${t.slice(5)}</h4>`)
    } else if (/^[-*]\s/.test(t)) {
      if (!inList) { out.push('<ul class="my-3 space-y-2 pl-5">'); inList = true }
      const item = t.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-red-600 hover:underline">$1</a>')
      out.push(`<li class="list-disc text-gray-700 leading-relaxed">${item}</li>`)
    } else if (t === '') {
      if (inList) { out.push('</ul>'); inList = false }
      out.push('<div class="h-2"></div>')
    } else {
      if (inList) { out.push('</ul>'); inList = false }
      const p = t.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-red-600 hover:underline">$1</a>').replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>')
      out.push(`<p class="text-gray-700 leading-relaxed">${p}</p>`)
    }
  }
  if (inList) out.push('</ul>')
  if (inTable) flushTable()
  return out.join('\n')
}

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title} | VidText AI Blog`,
    description: post.description,
    alternates: { canonical: `https://www.vidtextai.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.vidtextai.com/blog/${slug}`,
      publishedTime: post.date,
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    author: { '@type': 'Organization', name: 'VidText AI', url: 'https://www.vidtextai.com' },
    publisher: { '@type': 'Organization', name: 'VidText AI', url: 'https://www.vidtextai.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.vidtextai.com/blog/${slug}` },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.vidtextai.com/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.vidtextai.com/blog/${slug}` },
      ],
    },
  }

  const CATEGORY_COLORS: Record<string, string> = {
    Guide: 'bg-blue-50 text-blue-700',
    Tutorial: 'bg-green-50 text-green-700',
    Tips: 'bg-purple-50 text-purple-700',
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-gray-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-600">{post.category}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[post.category]}`}>
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-500">{post.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
          <span>By VidText AI</span>
        </div>
      </header>

      {/* Article content */}
      <article
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
      />

      {/* Back link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-2xl bg-red-600 p-6 text-center text-white">
        <h2 className="text-xl font-bold mb-2">Ready to try it yourself?</h2>
        <p className="text-red-100 text-sm mb-4">Turn any YouTube video into transcripts, summaries, blog posts and more — free.</p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-red-600 hover:bg-red-50 transition-colors text-sm">
          Try VidText AI Free <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
