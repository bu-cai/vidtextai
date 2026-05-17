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
**The fastest way to get a YouTube transcript:** Go to [vidtextai.com/tools/transcript](https://www.vidtextai.com/tools/transcript), paste any YouTube URL, and get the full timestamped transcript in under 10 seconds — free, no sign-up, no extension required. Works on any public YouTube video with captions.

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

## Related Guides

- [How to See & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [Video to Text Converter: The Complete Guide](/blog/video-to-text-converter-guide)
- [Best YouTube Transcript Chrome Extensions (2026)](/blog/youtube-transcript-chrome-extension)

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
**Yes, you can turn any YouTube video into a blog post in under 60 seconds.** Paste the YouTube URL into [VidText AI Blog Tool](https://www.vidtextai.com/tools/blog), click generate, and get a fully structured, SEO-ready article — no manual writing required. Free, no sign-up needed.

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

## Related Guides

- [YouTube to Blog Post with AI — Fastest Workflow (2026)](/blog/youtube-to-blog-post-ai)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)
- [Best YouTube Video Summarizer Prompts for ChatGPT](/blog/best-youtube-summarizer-prompts)

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
**To study from a YouTube video, get the transcript first.** Use [VidText AI](https://www.vidtextai.com/tools/transcript) to extract the full text from any educational YouTube video in seconds — then search it, highlight key ideas, and generate structured study notes automatically. Free, no sign-up required.

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

## Related Guides

- [How to Generate Study Notes from Any YouTube Video](/blog/youtube-notes-generator)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)
- [Best YouTube Video Summarizer Prompts for ChatGPT](/blog/best-youtube-summarizer-prompts)

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
**Turn any long YouTube video into multiple Shorts scripts in under 60 seconds.** Paste the URL into [VidText AI Shorts Generator](https://www.vidtextai.com/tools/shorts), and get 3–5 ready-to-film short-form scripts extracted from the best moments in your video — free, no sign-up needed.

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

## Related Guides

- [How to Turn a YouTube Video into a Blog Post](/blog/youtube-to-blog-post)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)
- [YouTube to Blog Post AI — Fastest Workflow](/blog/youtube-to-blog-post-ai)

## Conclusion

YouTube Shorts are one of the best opportunities for channel growth in 2026. The biggest barrier for most creators is the time to create scripts. With VidText AI's Shorts Script Generator, you can turn any long-form video into 5+ ready-to-film Shorts scripts in under 2 minutes.

Try [VidText AI Shorts Script Generator](https://www.vidtextai.com/tools/shorts) — free to start, no sign-up required.
    `.trim(),
  },

  'youtube-notes-generator': {
    title: 'Best YouTube Notes Generator: Take Notes from Any Video Automatically',
    description: 'Discover how to automatically generate structured notes from any YouTube video using AI. Perfect for students, researchers, and lifelong learners.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '4 min read',
    content: `
## Why You Need a YouTube Notes Generator

YouTube hosts over 800 million videos. From university lectures to professional tutorials, the platform has become the world's largest learning library. But there's a fundamental problem: **you can't take notes from a video the same way you take notes from a book.**

When reading, you can pause, highlight, annotate, and search. With video, you're stuck pausing and rewinding — a slow, frustrating process that breaks your flow.

A YouTube notes generator solves this by automatically extracting the key information from any video and formatting it as structured, readable notes.

## What Is a YouTube Notes Generator?

A YouTube notes generator is a tool that:
1. Extracts the transcript from a YouTube video
2. Uses AI to identify the most important information
3. Formats that information as structured notes with headings, bullet points, and key concepts

The result is a clean, scannable set of notes — without you having to watch a single minute of the video.

## How to Generate Notes from a YouTube Video

Using [VidText AI Notes Generator](https://www.vidtextai.com/tools/notes):

**Step 1:** Find a YouTube video you want to take notes from — a lecture, tutorial, podcast, or documentary.

**Step 2:** Copy the video URL from your browser.

**Step 3:** Paste it into VidText AI and select the **Study Notes** tab.

**Step 4:** Click Generate. In under 30 seconds, you'll have structured notes including:
- **Key Concepts** — the most important ideas from the video
- **Definitions** — terms and their explanations
- **Action Items** — practical takeaways you can apply
- **Summary** — a concise overview of the whole video

## What Makes Good AI-Generated Notes?

Not all notes generators are equal. The best ones produce notes that are:

**Structured** — organized with clear headings and bullet points, not a wall of text.

**Selective** — only capturing the truly important information, not transcribing everything verbatim.

**Actionable** — highlighting what you can actually do with the information.

**Accurate** — faithfully representing what was said without hallucination.

VidText AI uses Google Gemini 2.5 Flash to analyze the full video transcript and produce notes that meet all four criteria.

## Best Types of Videos for Note Generation

| Video Type | Note Quality | Why |
|---|---|---|
| University lectures | ⭐⭐⭐⭐⭐ | Clear structure, factual content |
| TED Talks | ⭐⭐⭐⭐⭐ | Narrative arc, key arguments |
| Tutorial / How-to | ⭐⭐⭐⭐ | Step-by-step structure |
| Podcast interviews | ⭐⭐⭐⭐ | Q&A format extracts well |
| Documentary | ⭐⭐⭐ | More narrative, less structured |
| Entertainment | ⭐⭐ | Less factual content to extract |

## 5 Ways to Use AI-Generated YouTube Notes

### 1. Exam Preparation
Generate notes from all your course's YouTube lectures, then combine them into a master study guide. Search across notes to find exactly what you need before exams.

### 2. Professional Development
Follow industry experts on YouTube and generate notes from their videos. Build a personal knowledge base of insights from the best minds in your field.

### 3. Book Summaries
Many authors discuss their books on YouTube interviews and podcasts. Generate notes from these appearances to get the core ideas without reading the full book.

### 4. Meeting Preparation
Before joining a meeting or conference, watch related YouTube videos and generate notes to show up fully informed.

### 5. Content Research
Generate notes from multiple YouTube videos on the same topic to quickly synthesize what experts say — perfect for writing articles or reports.

## YouTube Notes Generator vs. Manual Note-Taking

| | Manual Note-Taking | VidText AI |
|---|---|---|
| Time per hour of video | 45-90 minutes | Under 1 minute |
| Structure quality | Depends on skill | Consistently structured |
| Completeness | Easy to miss things | Captures all key points |
| Searchability | Only if organized well | Instantly searchable text |
| Cost | Free (your time) | Free |

## Related Guides

- [How Students Can Use YouTube Transcripts for Studying](/blog/study-notes-from-youtube)
- [Best YouTube Video Summarizer Prompts for ChatGPT](/blog/best-youtube-summarizer-prompts)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)

## Conclusion

A YouTube notes generator transforms passive video watching into an active, efficient learning process. Instead of spending hours rewinding and pausing, you get structured notes in seconds — ready to review, search, and apply.

Try [VidText AI Study Notes Generator](https://www.vidtextai.com/tools/notes) free — no sign-up, no credit card, 3 AI generations per day.
    `.trim(),
  },

  'video-to-text-converter-guide': {
    title: 'How to Convert YouTube Video to Text (Free, Instant, No Software)',
    description: 'Learn the fastest way to convert any YouTube video to text. Get a full transcript in seconds — free, no software download, no sign-up required.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '3 min read',
    content: `
## The Fastest Way to Convert Video to Text

Converting a YouTube video to text used to mean hours of manual transcription — listening, pausing, typing, rewinding. Today, AI-powered tools do it in seconds.

This guide covers the fastest, most accurate methods to convert any YouTube video to text for free.

## Method 1: VidText AI (Recommended)

[VidText AI](https://www.vidtextai.com/tools/video-to-text) is the fastest way to convert YouTube video to text with zero friction.

**How it works:**
1. Copy the YouTube video URL
2. Paste it at [vidtextai.com](https://www.vidtextai.com)
3. Click "Get Transcript"
4. Get the full text in under 10 seconds

**What you get:**
- Full transcript with timestamps on every line
- Copy to clipboard with one click
- Download as .txt file
- No account required, completely free

**Best for:** Anyone who needs a quick, clean, downloadable transcript.

## Method 2: YouTube's Built-in Transcript

YouTube has a hidden transcript viewer built in:

1. Open any YouTube video
2. Click the **three-dot menu (⋯)** below the video
3. Select **"Open transcript"**
4. The transcript panel appears on the right

**Limitations:**
- Cannot be downloaded directly
- Difficult to copy cleanly
- No formatting or AI processing
- Hard to find the feature

**Best for:** Quick reference while watching a video.

## Method 3: YouTube Captions (CC)

Turn on captions while watching:
- Click the **CC button** on the video player
- Captions appear as subtitles

**Limitations:** Cannot be copied or downloaded. Not useful for text conversion.

## Comparison: Which Method Is Best?

| Method | Speed | Downloadable | Free | Sign-up |
|---|---|---|---|---|
| VidText AI | ⚡ 10 seconds | ✅ Yes (.txt) | ✅ Yes | ❌ Not needed |
| YouTube Built-in | Medium | ❌ No | ✅ Yes | ❌ Not needed |
| Manual transcription | ❌ Hours | ✅ Yes | ✅ Yes | ❌ Not needed |

## What to Do With Video Text

Once you have the transcript, you can:

**Create written content** — use the transcript as a base for blog posts, newsletters, or social media content.

**Study and research** — search the text for specific information, highlight key points, create flashcards.

**Improve accessibility** — use the text to create proper subtitles for your own videos.

**Translate** — paste the text into a translation tool to access content in your language.

**Feed AI tools** — use the transcript as input for further AI processing (summaries, analysis, etc.).

## Tips for Best Transcript Quality

1. **Choose videos with manual captions** — channels like TED, Coursera, and BBC have human-reviewed captions that are near-perfect.

2. **Check the CC badge** — the blue CC badge on YouTube thumbnails indicates manually created captions.

3. **Use educational content** — channels focused on education, news, and professional development tend to have the best caption quality.

4. **Verify timestamps** — if accuracy is critical (e.g., for citations), spot-check a few timestamps in the video.

## Beyond Plain Text: AI-Powered Formats

Once you have the text, VidText AI can transform it further:

- **[AI Summary](https://www.vidtextai.com/tools/summary)** — condensed key points in bullet format
- **[Blog Post](https://www.vidtextai.com/tools/blog)** — full SEO-ready article from the video
- **[Study Notes](https://www.vidtextai.com/tools/notes)** — structured notes with key concepts
- **[Shorts Script](https://www.vidtextai.com/tools/shorts)** — viral short-form video scripts

## Related Guides

- [How to See & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)
- [YouTube to Blog Post AI — Fastest Workflow](/blog/youtube-to-blog-post-ai)

## Conclusion

Converting YouTube video to text takes less than 10 seconds with VidText AI. No software to download, no account to create, no cost. Just paste a URL and get clean, timestamped, downloadable text.

Try [VidText AI Video to Text Converter](https://www.vidtextai.com/tools/video-to-text) — free, instant, no sign-up.
    `.trim(),
  },

  'youtube-to-blog-post-ai': {
    title: 'YouTube to Blog Post Generator: Turn Any Video into an SEO Article',
    description: 'Automatically convert YouTube videos into SEO-optimized blog posts using AI. Step-by-step guide for content creators who want more traffic from less effort.',
    category: 'Tutorial',
    date: 'May 16, 2026',
    readTime: '5 min read',
    content: `
## The Content Creator's Biggest Problem

You spend hours filming and editing a YouTube video. You publish it. It gets views. Then... nothing. The content sits on YouTube and doesn't bring you any Google traffic.

The solution is simple: **turn your YouTube videos into blog posts.**

Blog posts rank on Google. Videos mostly don't. By converting your video content into written articles, you can double your audience — reaching both YouTube viewers and Google searchers — from the exact same content.

## Why YouTube to Blog Post Conversion Works

Every YouTube video you create contains valuable information. When you convert it to a blog post:

- **Google can index it** — search engines read text, not video
- **It ranks for long-tail keywords** — written content captures "how to..." searches
- **It builds backlinks** — people link to articles, rarely to videos
- **It lasts longer** — a good article can rank for years
- **It reaches different audiences** — some people prefer reading to watching

## The Old Way vs. The AI Way

**Old way (3-5 hours per video):**
1. Watch the video again (30-60 min)
2. Write a transcript manually (2-3 hours)
3. Rewrite as an article (1-2 hours)
4. Add SEO elements (30 min)

**AI way with VidText AI (under 3 minutes):**
1. Copy the YouTube URL (10 seconds)
2. Paste into VidText AI, select Blog Post (10 seconds)
3. Click Generate, wait 20-30 seconds
4. Get a complete, formatted blog post

## How to Use VidText AI Blog Post Generator

**Step 1: Choose the right video**

Not every video converts equally well. Best candidates:
- Tutorial or how-to videos (strong keyword targeting)
- List videos ("10 ways to...")
- Educational explanations
- Expert interviews

**Step 2: Paste the URL**

Go to [VidText AI Blog Post Generator](https://www.vidtextai.com/tools/blog), paste your YouTube URL, and select the **Blog Post** tab.

**Step 3: Select your language**

VidText AI supports 10 output languages. If your target audience reads in Spanish, French, or Chinese, select that language before generating.

**Step 4: Generate and review**

Click Generate. The AI reads your full video transcript and produces a complete blog post with:
- SEO-optimized H1 title
- Introduction with the main value proposition
- Multiple H2 and H3 sections
- Bullet points and numbered lists
- A conclusion with call-to-action

**Step 5: Customize and publish**

Add your personal voice, insert relevant images, add internal links to your site, and publish. The AI gives you 80% of the work — you add the 20% that makes it uniquely yours.

## SEO Tips for Video-Derived Blog Posts

### Target the Right Keywords
Your video title is often a great starting point. If your video is "How to Make Cold Brew Coffee at Home," your blog post should target "how to make cold brew coffee at home" and related terms.

### Add What the Video Can't
Blog posts can include things videos can't:
- Comparison tables
- Downloadable resources
- Internal links to other articles
- Images and infographics
- Updated information

### Embed the Original Video
Add the YouTube embed at the top or middle of the post. This increases time-on-page (a ranking signal) and gives readers the choice of watching or reading.

### Optimize Meta Description
Write a compelling 150-160 character meta description that includes your main keyword and a clear value proposition.

## What Types of Blog Posts Convert Best from YouTube?

| Video Format | Blog Post Type | SEO Potential |
|---|---|---|
| Tutorial/How-to | Step-by-step guide | ⭐⭐⭐⭐⭐ |
| List video | Listicle article | ⭐⭐⭐⭐⭐ |
| Expert interview | Q&A or summary post | ⭐⭐⭐⭐ |
| Product review | Review article | ⭐⭐⭐⭐ |
| News/commentary | Opinion piece | ⭐⭐⭐ |
| Vlog | Behind the scenes | ⭐⭐ |

## Building a Content Repurposing System

The real power comes from building a system:

1. **Publish YouTube video** → immediately generate blog post
2. **Publish blog post** → share on LinkedIn, Twitter, newsletter
3. **Blog post gets Google traffic** → more YouTube subscribers
4. **Repeat weekly**

Over 6 months, this compound effect builds a significant content library that drives traffic 24/7.

## Related Guides

- [How to Turn a YouTube Video into a Blog Post](/blog/youtube-to-blog-post)
- [Best YouTube Video Summarizer Prompts for ChatGPT](/blog/best-youtube-summarizer-prompts)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)

## Conclusion

Converting YouTube videos to blog posts is one of the highest-ROI activities for content creators in 2026. With VidText AI, the process takes 3 minutes instead of 5 hours — making it practical to do for every video you publish.

Try [VidText AI Blog Post Generator](https://www.vidtextai.com/tools/blog) free — no sign-up, works on any public YouTube video.
    `.trim(),
  },

  'how-to-see-transcript-on-youtube': {
    title: 'How to See, Get & Download a YouTube Transcript (4 Ways)',
    description: 'Learn how to see, get, copy, and download a transcript from any YouTube video — step-by-step with screenshots. Free, no sign-up.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '5 min read',
    content: `
## Why You'd Want to See a YouTube Transcript

Before diving into the how-to, here's why so many people look for YouTube transcripts:

- **Find a specific quote** — search the text instead of scrubbing through the video
- **Study faster** — read a lecture transcript in 5 minutes vs. watching 45 minutes
- **Create content** — turn a video into a blog post, social media thread, or newsletter
- **Accessibility** — follow along if you can't use audio
- **Translation** — copy the text and translate it to your language

Let's look at every way to see a YouTube transcript, from fastest to slowest.

## Method 1: VidText AI — Instant Download (Recommended)

The fastest way to get a clean, downloadable YouTube transcript:

**Step 1:** Copy the YouTube video URL from your browser address bar.

**Step 2:** Go to [VidText AI Transcript Tool](https://www.vidtextai.com/tools/transcript) and paste the URL.

**Step 3:** Click **Get Transcript**. Your full, timestamped transcript appears in under 10 seconds.

**Step 4:** Click **Copy** to copy to clipboard, or **Save** to download as a .txt file.

That's it. No account, no software, no cost.

## Method 2: YouTube's Built-in Transcript Panel

YouTube has a hidden transcript feature that most people don't know about:

**Step 1:** Open the YouTube video in your browser.

**Step 2:** Click the **three-dot menu (⋯)** directly below the video player (next to the like/dislike buttons).

**Step 3:** Click **"Open transcript"** from the dropdown menu.

**Step 4:** A transcript panel appears on the right side of the screen with timestamped lines.

**Limitations of the YouTube built-in method:**
- Cannot be downloaded as a file
- Cannot be copied in bulk (you'd need to select all text manually)
- No search within the transcript panel
- Disappears when you close the video

## Method 3: How to Copy a YouTube Transcript Manually

If you want to copy the transcript text from YouTube's built-in panel:

1. Open the transcript panel using Method 2 above
2. Click the **toggle timestamps** button (clock icon) to hide timestamps if you want clean text
3. Click inside the transcript panel
4. Press **Ctrl+A** (Windows) or **Cmd+A** (Mac) to select all text
5. Press **Ctrl+C** to copy
6. Paste into any text editor, Google Docs, or Notion

**Drawback:** This copies the entire page, not just the transcript — you'll get navigation elements and other text mixed in. VidText AI gives you a clean copy with one click.

## Method 4: How to Download a YouTube Transcript as a File

YouTube doesn't offer a native download option. To download a transcript as a .txt file:

1. Go to [VidText AI](https://www.vidtextai.com/tools/transcript)
2. Paste the YouTube URL and click **Get Transcript**
3. Click the **Save** button
4. A .txt file downloads instantly to your computer

The downloaded file format looks like:
\`\`\`
[0:00] Welcome to today's lecture on machine learning.
[0:05] We're going to cover three main topics.
[0:12] First, supervised learning and its applications...
\`\`\`

## Which Method Should You Use?

| Method | Speed | Download | Clean Text | Free |
|---|---|---|---|---|
| VidText AI | ⚡ 10 sec | ✅ .txt file | ✅ Yes | ✅ Yes |
| YouTube Built-in | Medium | ❌ No | ⚠️ Partial | ✅ Yes |
| Manual copy | Slow | ❌ File only | ❌ Messy | ✅ Yes |

**Best for download:** VidText AI — one click, clean .txt file.
**Best for quick glance:** YouTube's built-in panel — no tool needed.

## Does Every YouTube Video Have a Transcript?

No. Transcripts are only available for videos with captions enabled. Here's what works:

**✅ Works:**
- Videos with auto-generated captions (most English videos)
- Videos with manually uploaded subtitles/captions
- Educational content: TED Talks, Coursera, university lectures
- News channels, podcasts, tutorials, documentaries

**❌ Doesn't work:**
- Private or unlisted videos
- Videos where the creator disabled captions
- Music videos with no speech
- Very short clips (under ~30 seconds)

## How to See Transcripts in Other Languages

If a video has captions in multiple languages, you can view the transcript in any available language:

**On YouTube:** Click the gear icon (⚙️) in the transcript panel, then select a language.

**On VidText AI:** Use the language dropdown before clicking Get Transcript. VidText AI can also output AI-generated content (summaries, notes) in 10 languages, regardless of the original video language.

## What to Do With Your Transcript

Once you have the transcript text, VidText AI can take it further:

- **[AI Summary](https://www.vidtextai.com/tools/summary)** — get the key points in 30 seconds of reading
- **[Blog Post Generator](https://www.vidtextai.com/tools/blog)** — turn the transcript into an SEO article
- **[Study Notes](https://www.vidtextai.com/tools/notes)** — structured notes for learning
- **[Shorts Script](https://www.vidtextai.com/tools/shorts)** — repurpose into short-form video content

## Related Guides

- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)
- [Video to Text Converter: The Complete Guide](/blog/video-to-text-converter-guide)
- [Best YouTube Transcript Chrome Extensions (2026)](/blog/youtube-transcript-chrome-extension)

## Conclusion

Seeing a YouTube transcript takes 10 seconds with VidText AI, or a few clicks with YouTube's built-in panel. For anything beyond viewing — downloading, copying cleanly, or processing with AI — VidText AI is the fastest option.

Try it free at [vidtextai.com/tools/transcript](https://www.vidtextai.com/tools/transcript) — no account required.
    `.trim(),
  },

  'best-youtube-summarizer-prompts': {
    title: 'Best YouTube Video Summarizer Prompts for ChatGPT & AI (2026)',
    description: 'Copy-paste prompts to summarize any YouTube video with ChatGPT, Claude, or Gemini. Get better summaries, key points, and action items instantly.',
    category: 'Tips',
    date: 'May 16, 2026',
    readTime: '5 min read',
    content: `
## Why Your AI Summaries Might Be Disappointing

You've probably tried asking ChatGPT or Claude to summarize a YouTube video — and gotten back a generic, shallow summary that missed the actual insights. The problem isn't the AI. It's the prompt.

The right video summarizer prompt makes the difference between "This video discusses machine learning" and a structured breakdown of every key concept, decision framework, and actionable takeaway from the video.

This guide gives you copy-paste prompts that actually work — tested with ChatGPT, Claude, and Gemini.

## Step 1: Get the Transcript First

AI tools can't watch YouTube videos directly (unless you use a plugin). You need to:

1. Go to [VidText AI](https://www.vidtextai.com/tools/transcript) and paste the YouTube URL
2. Click **Get Transcript** to get the full text in seconds
3. Copy the transcript
4. Paste it into ChatGPT, Claude, or Gemini along with your prompt

Now let's get to the prompts.

## The 6 Best YouTube Video Summarizer Prompts

### Prompt 1: The Standard Summary

Best for: quick overview of any video

\`\`\`
Here is the transcript of a YouTube video. Please summarize it in 3-5 bullet points, capturing the main ideas and any key conclusions or recommendations.

[PASTE TRANSCRIPT HERE]
\`\`\`

### Prompt 2: The Key Takeaways Prompt

Best for: learning videos, tutorials, expert interviews

\`\`\`
Read this YouTube video transcript and extract:
1. The 3-5 most important takeaways
2. Any specific frameworks, models, or methods mentioned
3. One sentence summary of the video's core argument

[PASTE TRANSCRIPT HERE]
\`\`\`

### Prompt 3: The Action Items Prompt

Best for: business content, productivity videos, how-to tutorials

\`\`\`
Based on this YouTube video transcript, extract all actionable advice. Format as a checklist I can actually follow. Group by category if there are multiple topics.

[PASTE TRANSCRIPT HERE]
\`\`\`

### Prompt 4: The Study Notes Prompt

Best for: lectures, educational content, documentaries

\`\`\`
Convert this YouTube lecture transcript into structured study notes. Include:
- Main topic and subtopics (as headers)
- Key definitions and concepts
- Important examples or case studies
- Questions for further study

[PASTE TRANSCRIPT HERE]
\`\`\`

### Prompt 5: The Blog Post Summary Prompt

Best for: content repurposing, creators turning videos into articles

\`\`\`
Here is a YouTube video transcript. Write a 400-600 word blog post summarizing the key insights. Use a clear introduction, 3-4 subheadings, and a conclusion with a call to action. Write in a clear, informative tone for a general audience.

[PASTE TRANSCRIPT HERE]
\`\`\`

### Prompt 6: The Q&A Extraction Prompt

Best for: interview videos, podcasts, panel discussions

\`\`\`
This transcript is from an interview/podcast. Extract the most interesting questions asked and the key points from each answer. Format as Q: / A: pairs.

[PASTE TRANSCRIPT HERE]
\`\`\`

## Comparison: Prompts vs. Purpose

| Goal | Best Prompt | Output Format |
|---|---|---|
| Quick overview | Standard Summary | Bullet points |
| Learn and apply | Key Takeaways | Numbered list |
| Do something | Action Items | Checklist |
| Study for exam | Study Notes | Structured outline |
| Write an article | Blog Post Summary | Paragraphs |
| Interview/podcast | Q&A Extraction | Q&A pairs |

## Pro Tips for Better Video Summaries

**Tip 1: Tell the AI your context**
Add a sentence about who you are: *"I'm a software engineer learning about machine learning"* — this makes summaries more relevant to what you care about.

**Tip 2: Ask for a specific length**
"Summarize in 3 bullet points" gives a different result than "summarize in 500 words." Be explicit.

**Tip 3: Request specific elements**
*"Include any statistics or numbers mentioned"* or *"highlight any counterintuitive ideas"* — this guides the AI to surface details that generic prompts miss.

**Tip 4: Use the language option**
If you want the summary in a different language, add: *"Respond in Spanish"* (or your preferred language).

## Skip the Copy-Paste: Use VidText AI

If running prompts manually feels like too many steps, [VidText AI](https://www.vidtextai.com) does it automatically:

1. Paste any YouTube URL
2. Click **Summary** — get key points in bullet format
3. Click **Study Notes** — get structured notes for learning
4. Click **Blog Post** — get a full SEO article

No copying transcripts, no manual prompting. The AI processes the transcript and returns the formatted output in one click — free for 3 generations per day.

## Which AI Gives the Best Video Summaries?

| AI Tool | Strengths | Limitations |
|---|---|---|
| ChatGPT (GPT-4o) | Great at structure and formatting | Needs manual transcript paste |
| Claude (Sonnet) | Excellent comprehension of long texts | Same manual process |
| Gemini | Good for YouTube videos (Google integration) | Variable quality |
| VidText AI | One-click, no manual steps | YouTube only |

## Related Guides

- [How to See & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [How to Generate Study Notes from Any YouTube Video](/blog/youtube-notes-generator)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)

## Conclusion

The best YouTube video summarizer prompt is the one that matches your goal — whether that's a quick overview, actionable takeaways, or structured study notes. Start with the prompts above, then customize based on what you need.

For the fastest workflow, try [VidText AI](https://www.vidtextai.com) — paste a URL, click once, get your summary. No prompts needed.
    `.trim(),
  },

  'youtube-transcript-chrome-extension': {
    title: 'Best YouTube Transcript & Note-Taking Chrome Extensions (2026)',
    description: 'Compare the top Chrome extensions for getting YouTube transcripts and taking notes. Find the best free tool for students, researchers, and content creators.',
    category: 'Guide',
    date: 'May 16, 2026',
    readTime: '6 min read',
    content: `
## Why People Search for YouTube Transcript Chrome Extensions

Most people discover the need for a YouTube transcript tool when they're trying to study, research, or create content and realize that:

1. **YouTube's built-in transcript** is hard to find, can't be downloaded, and can't be searched
2. **Manual note-taking** while watching is slow and you miss things
3. **There must be a better way**

Chrome extensions are one popular answer. But browser extensions come with trade-offs — and for many use cases, a web-based tool works better.

This guide covers the top options for 2026: which Chrome extensions are worth installing, and when a web tool is the smarter choice.

## Top YouTube Transcript Chrome Extensions

### 1. YouTube Summary with ChatGPT & Claude

**What it does:** Adds a summary button to YouTube pages. Click it to get an AI summary powered by ChatGPT or Claude.

**Pros:**
- Integrates directly into YouTube's UI
- Works with multiple AI models
- Shows the transcript in a sidebar

**Cons:**
- Requires a ChatGPT/Claude account
- Limited formatting options
- No download feature

**Best for:** Users who already have ChatGPT Plus or Claude Pro

---

### 2. Glasp — YouTube Highlights

**What it does:** Chrome extension that lets you highlight and save quotes from YouTube transcripts. Builds a personal knowledge base.

**Pros:**
- Great for researchers and note-takers
- Saves highlights to a personal library
- Social sharing features

**Cons:**
- Account required
- Focused on highlighting, not downloading
- Less useful for content creation

**Best for:** Researchers who want to build a curated knowledge library

---

### 3. Tactiq

**What it does:** Captures meeting transcripts from Google Meet, Zoom, and Teams — also has YouTube functionality.

**Pros:**
- Excellent for meeting transcripts
- Clean interface
- Good export options

**Cons:**
- Primarily designed for meetings, not YouTube
- Free tier is limited
- Can feel heavyweight for simple YouTube use

**Best for:** Users who need transcripts for both meetings AND YouTube

---

### 4. YouTube Transcript Exporter (Various)

Several smaller extensions in the Chrome Store offer basic transcript extraction:

**Pros:** Simple, lightweight

**Cons:** Inconsistent quality, some are outdated or abandoned, security concerns with lesser-known extensions

---

## The Problem With Chrome Extensions

Before installing any extension, consider:

**Privacy:** Chrome extensions request broad permissions. Many transcript extensions can "read and change all your data on websites you visit." That's a significant permission.

**Reliability:** Extensions break when YouTube updates its interface. A tool that worked last month may stop working today.

**Maintenance:** Many transcript extensions are built by solo developers and may be abandoned without notice.

**Limited features:** Most extensions only do transcripts — they can't generate summaries, blog posts, or study notes.

## The Web App Alternative: VidText AI

[VidText AI](https://www.vidtextai.com) is a web-based tool that does everything a Chrome extension does — plus much more — without any installation:

| Feature | Chrome Extensions | VidText AI |
|---|---|---|
| Get YouTube transcript | ✅ Most do this | ✅ Yes |
| Download as .txt | ❌ Rarely | ✅ Yes |
| AI Summary | ⚠️ Some (requires account) | ✅ Free tier |
| Blog post generation | ❌ No | ✅ Yes |
| Study notes | ❌ No | ✅ Yes |
| Shorts scripts | ❌ No | ✅ Yes |
| No installation needed | ❌ No | ✅ Yes |
| No account required | ❌ Usually required | ✅ Yes |
| Works on mobile | ❌ No | ✅ Yes |
| Privacy (no broad permissions) | ❌ Needs permissions | ✅ Yes |

## How to Use VidText AI (No Extension Needed)

**Step 1:** Copy the YouTube video URL from your browser.

**Step 2:** Go to [vidtextai.com](https://www.vidtextai.com) — no installation, no account.

**Step 3:** Paste the URL and click **Get Transcript**.

**Step 4:** Choose your output:
- **Transcript** — full timestamped text, downloadable as .txt
- **Summary** — AI-generated key points
- **Study Notes** — structured notes for learning
- **Blog Post** — full SEO article from the video

**Step 5:** Copy or download your content.

The whole process takes under 30 seconds.

## Which Option Is Right for You?

| Use Case | Best Option |
|---|---|
| Need transcripts while browsing YouTube | Chrome extension (YouTube Summary with ChatGPT) |
| Research with highlights and knowledge base | Glasp extension |
| Meeting + YouTube transcripts | Tactiq |
| Download transcript as a file | VidText AI |
| Generate AI summaries or blog posts | VidText AI |
| Use on mobile or shared computer | VidText AI |
| Privacy-conscious | VidText AI (no extension permissions) |

## For Students: Best Setup for Note-Taking

If you're a student using YouTube for lectures and tutorials, the most efficient setup is:

1. **VidText AI for Study Notes** — paste the video URL, click Study Notes, get structured notes in 20 seconds
2. **Copy notes to Notion or Google Docs** — organize by subject
3. **Use the transcript for citations** — reference exact timestamps when quoting

This workflow beats manually pausing and rewinding every time you want to write something down.

## Related Guides

- [How to See & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [Best YouTube Video Summarizer Prompts for ChatGPT](/blog/best-youtube-summarizer-prompts)
- [How to Generate Study Notes from Any YouTube Video](/blog/youtube-notes-generator)

## Conclusion

Chrome extensions are convenient but come with installation friction, privacy trade-offs, and maintenance risks. For most users — especially students, researchers, and content creators — a web-based tool like VidText AI provides more features with less hassle.

Try [VidText AI](https://www.vidtextai.com) free — get transcripts, summaries, study notes, and more from any YouTube video in seconds. No Chrome extension required.
    `.trim(),
  },

  'chatgpt-summarize-youtube-video': {
    title: 'Can ChatGPT Summarize a YouTube Video? (Yes — Here\'s How)',
    description: 'Learn how to use ChatGPT, Claude, or Gemini to summarize any YouTube video. Step-by-step guide with copy-paste prompts and a faster one-click alternative.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '5 min read',
    content: `
## Can ChatGPT Summarize a YouTube Video?

Yes — but not directly. ChatGPT cannot watch or access YouTube videos on its own. To summarize a YouTube video with ChatGPT, you first need to get the video's transcript (the text version of what was spoken), then paste it into ChatGPT with a prompt.

The same applies to Claude, Gemini, and other AI tools.

Here's the exact process — and a faster one-click alternative at the end.

## Method 1: ChatGPT + Transcript (Step by Step)

**Step 1: Get the YouTube transcript**

Go to [VidText AI Transcript Tool](https://www.vidtextai.com/tools/transcript), paste the YouTube video URL, and click Get Transcript. Your full transcript appears in under 10 seconds. Click Copy.

**Step 2: Open ChatGPT**

Go to [chat.openai.com](https://chat.openai.com) and start a new chat.

**Step 3: Paste this prompt**

\`\`\`
Here is the transcript of a YouTube video. Please summarize it in 5 bullet points, capturing the main ideas and key takeaways:

[PASTE TRANSCRIPT HERE]
\`\`\`

**Step 4: Read your summary**

ChatGPT will return a clear, structured summary in seconds.

**Total time: about 2 minutes.**

## Method 2: Gemini (Has YouTube Access)

Google Gemini can sometimes access YouTube videos directly — but only videos that have auto-generated captions, and results vary.

**How to try it:**

1. Go to [gemini.google.com](https://gemini.google.com)
2. Type: "Summarize this YouTube video: [paste the URL]"
3. Gemini will attempt to read the captions and generate a summary

**When it works:** Videos with clear auto-generated captions from major channels.

**When it fails:** Videos with poor captions, non-English content, or videos where Google hasn't indexed the captions.

For reliable results, the transcript method (Method 1) works every time.

## Method 3: Claude

Anthropic's Claude works similarly to ChatGPT — it cannot directly access YouTube, but produces excellent summaries when given a transcript.

**Prompt for Claude:**

\`\`\`
Read this YouTube video transcript and extract:
1. The main argument or topic
2. The 3-5 most important points
3. Any specific data, examples, or quotes worth noting
4. One sentence conclusion

[PASTE TRANSCRIPT HERE]
\`\`\`

Claude is especially good at long transcripts — it handles videos over 2 hours without losing context.

## Method 4: VidText AI (One Click — No Prompting)

If the 2-minute process above feels like too many steps, [VidText AI](https://www.vidtextai.com) does everything automatically:

1. Paste any YouTube URL
2. Click the **Summary** tab
3. Get a structured AI summary in under 30 seconds

No copying transcripts. No writing prompts. No switching between tabs. VidText AI fetches the transcript, sends it to AI, and returns your summary — all in one click.

Free for 3 AI summaries per day. No account required.

## Comparison: Which Method Is Best?

| Method | Steps | Time | Reliability | Cost |
|---|---|---|---|---|
| VidText AI | 1 click | 30 seconds | ✅ Always works | Free (3/day) |
| ChatGPT + transcript | 4 steps | ~2 minutes | ✅ Always works | Free tier |
| Gemini direct | 1 step | 30 seconds | ⚠️ Sometimes fails | Free |
| Claude + transcript | 4 steps | ~2 minutes | ✅ Always works | Free tier |

## Best Prompts for Summarizing YouTube Videos

Once you have the transcript, these prompts give better results than a generic "summarize this":

**For a quick overview:**
\`\`\`
Summarize this YouTube video transcript in 3-5 bullet points.
[TRANSCRIPT]
\`\`\`

**For study notes:**
\`\`\`
Convert this transcript into structured study notes with headings, key concepts, and important examples.
[TRANSCRIPT]
\`\`\`

**For action items:**
\`\`\`
Extract all actionable advice from this transcript as a checklist.
[TRANSCRIPT]
\`\`\`

**For a blog post:**
\`\`\`
Write a 500-word blog post based on this YouTube video transcript. Include an intro, 3 subheadings, and a conclusion.
[TRANSCRIPT]
\`\`\`

## Does ChatGPT Plus Summarize YouTube Videos Better?

ChatGPT Plus (paid) gives access to GPT-4o and browsing capabilities. With browsing enabled, ChatGPT can sometimes access YouTube video pages — but it reads the page metadata, not the actual captions. For accurate summaries, the transcript method is still more reliable even with ChatGPT Plus.

## What Types of Videos Can Be Summarized?

Any public YouTube video with captions can be summarized using this method:

**✅ Works great:**
- Educational videos, lectures, TED Talks
- Podcast interviews and panel discussions
- Tutorial and how-to videos
- News and documentary content

**⚠️ Limited:**
- Videos with poor auto-generated captions
- Very short clips (under 2 minutes)
- Videos with heavy accents or background noise

**❌ Won't work:**
- Private or unlisted videos
- Videos with captions disabled
- Music videos with no speech

## Related Guides

- [Best YouTube Video Summarizer Prompts for ChatGPT & AI](/blog/best-youtube-summarizer-prompts)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)
- [How to Generate Study Notes from Any YouTube Video](/blog/youtube-notes-generator)

## Conclusion

ChatGPT, Claude, and Gemini can all summarize YouTube videos — the key is getting the transcript first. Use [VidText AI](https://www.vidtextai.com/tools/transcript) to get any transcript in 10 seconds, then paste it into your AI tool of choice.

Or skip the manual process entirely: [VidText AI's AI Summary tool](https://www.vidtextai.com/tools/summary) does the whole thing in one click — free, no account needed.
    `.trim(),
  },

  'youtube-caption-downloader': {
    title: 'YouTube Caption Downloader: How to Download Captions Free (2026)',
    description: 'Download captions and subtitles from any YouTube video instantly. Free YouTube caption downloader — no software, no sign-up, works on any public video.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '4 min read',
    content: `
## What Are YouTube Captions and Why Download Them?

YouTube captions (also called subtitles or closed captions) are the text version of everything spoken in a video. YouTube generates them automatically for most videos, and many creators also upload manual captions for higher accuracy.

Downloading captions gives you the full text of any YouTube video — useful for:
- **Research** — search for specific quotes or data points without watching
- **Study** — read lecture content instead of rewatching
- **Content creation** — repurpose video content into articles or posts
- **Translation** — translate the text into another language
- **Accessibility** — share the text with people who can't access audio

## How to Download YouTube Captions (Fastest Method)

[VidText AI Transcript Tool](https://www.vidtextai.com/tools/transcript) downloads YouTube captions in under 10 seconds:

**Step 1:** Copy the YouTube video URL from your browser.

**Step 2:** Go to [vidtextai.com/tools/transcript](https://www.vidtextai.com/tools/transcript) and paste the URL.

**Step 3:** Click **Get Transcript**. The full captioned text appears with timestamps.

**Step 4:** Click **Save** to download as a .txt file, or **Copy** to copy to clipboard.

That's it. No account, no software, no cost.

## How to Download Captions from YouTube (Built-in Method)

YouTube doesn't have a native caption download button, but you can access captions through the transcript panel:

**Step 1:** Open the YouTube video.

**Step 2:** Click the **three-dot menu (⋯)** below the video.

**Step 3:** Click **"Open transcript"**.

**Step 4:** To copy: click inside the panel, press Ctrl+A then Ctrl+C.

**Limitation:** You can't download them as a file directly. The copied text includes timestamps mixed in, and you'll need to clean it up manually.

## YouTube Caption Downloader: Comparison

| Method | Download as File | Timestamps | Clean Text | Free |
|---|---|---|---|---|
| VidText AI | ✅ .txt file | ✅ Yes | ✅ Yes | ✅ Yes |
| YouTube built-in | ❌ Copy only | ✅ Yes | ⚠️ Messy | ✅ Yes |
| Browser extensions | ⚠️ Some do | ✅ Yes | ⚠️ Varies | ⚠️ Some |

## What Format Do Downloaded Captions Come In?

When you download captions using VidText AI, you get a clean .txt file formatted like this:

\`\`\`
[0:00] Welcome to today's video on productivity.
[0:05] We're going to cover three main strategies.
[0:12] The first one is time-blocking...
\`\`\`

Each line starts with a timestamp in [M:SS] format, followed by the spoken text. You can open this in any text editor, Word, Google Docs, or Notion.

## Can You Download Closed Captions from YouTube?

Yes. VidText AI downloads both types of YouTube captions:

**Auto-generated captions** — YouTube creates these automatically using speech recognition. Available on most English-language videos. Accuracy is typically 85–95%.

**Manual/closed captions (CC)** — Human-created captions uploaded by the video creator. Usually near 100% accurate. Look for the **CC badge** on the video thumbnail.

VidText AI automatically uses the highest-quality caption track available for that video.

## How to Download Captions in a Different Language

Many YouTube videos have captions in multiple languages. To download captions in a specific language:

1. Go to [VidText AI](https://www.vidtextai.com/tools/transcript)
2. Paste the YouTube URL
3. Use the **language selector** before clicking Get Transcript
4. The transcript will output in your selected language

Note: Language availability depends on what caption tracks the video creator has provided or what YouTube has auto-generated.

## What Videos Support Caption Download?

**✅ Works:**
- Public YouTube videos with auto-generated captions
- Videos with manually uploaded CC subtitles
- Educational content, TED Talks, podcasts, tutorials, news

**❌ Doesn't work:**
- Private or unlisted videos
- Videos where captions are disabled by the creator
- Music-only videos with no speech
- YouTube Shorts (limited caption support)

## From Captions to AI Content

Once you have the caption text, VidText AI can transform it further:

- **[AI Summary](https://www.vidtextai.com/tools/summary)** — get the key points in bullet format
- **[Blog Post](https://www.vidtextai.com/tools/blog)** — turn the captions into a full SEO article
- **[Study Notes](https://www.vidtextai.com/tools/notes)** — structured notes for learning
- **[Shorts Script](https://www.vidtextai.com/tools/shorts)** — repurpose into short-form video scripts

## Related Guides

- [How to See & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [YouTube Transcript Shortcut & Search Guide](/blog/youtube-transcript-shortcut-search)
- [Best YouTube Transcript Chrome Extensions (2026)](/blog/youtube-transcript-chrome-extension)

## Conclusion

Downloading YouTube captions is free and takes under 10 seconds with VidText AI. No software to install, no account to create — just paste a URL and download the caption file instantly.

Try [VidText AI Caption Downloader](https://www.vidtextai.com/tools/transcript) — works on any public YouTube video.
    `.trim(),
  },

  'best-youtube-transcript-tools': {
    title: 'Best YouTube Transcript Tools in 2026 (Free, No Install, AI-Powered)',
    description: 'Compare the top YouTube transcript tools — VidText AI, Tactiq, NoteGPT, Glasp, and YouTube\'s built-in feature. Find the best free tool for your use case.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '6 min read',
    content: `
**Bottom line:** VidText AI is the best free YouTube transcript tool in 2026 for most users — no installation, no sign-up, works on any public video, and outputs AI-powered summaries, blog posts, and study notes in under 30 seconds.

## Quick Comparison: Top YouTube Transcript Tools

| Tool | Free? | No Install? | AI Features | Languages | Export |
|------|-------|-------------|-------------|-----------|--------|
| **VidText AI** | ✅ Yes | ✅ Yes | ✅ Summary, Blog, Notes, Shorts | 10+ | .txt |
| YouTube Built-in | ✅ Yes | ✅ Yes | ❌ No | Limited | ❌ No |
| Tactiq | Partial | ❌ Chrome ext. | ✅ Limited | 30+ | .txt, .docx |
| NoteGPT | Partial | ❌ Required | ✅ Summary | 20+ | .txt |
| Glasp | ✅ Yes | ❌ Chrome ext. | ✅ Summary | 10+ | .txt |

---

## 1. VidText AI — Best Overall (Free, No Install)

**Best for:** Content creators, students, researchers, marketers who want transcripts + AI content in one step.

VidText AI extracts the full transcript from any public YouTube video and immediately lets you generate:
- **AI Summary** — key points in bullet form
- **Blog Post** — SEO-ready article from the video
- **Study Notes** — structured notes for learning
- **Shorts Script** — repurpose long videos into viral short-form scripts

**Key facts:**
- 100% free for transcript extraction (unlimited)
- AI features: 3 free generations per day, no credit card required
- No Chrome extension required — works entirely in the browser
- Supports 10+ output languages
- Average processing time: under 30 seconds
- Works on any public YouTube video with captions

**Accuracy:** Uses YouTube's official caption data — 85–98% accuracy depending on the channel. Manually captioned videos are near-perfect.

→ Try it: [vidtextai.com/tools/transcript](https://www.vidtextai.com/tools/transcript)

---

## 2. YouTube Built-in Transcript — Best for Quick Timestamps

**Best for:** Viewers who just want to skim a video or find a specific moment.

YouTube has a built-in transcript panel (click the three-dot menu below any video → "Show transcript"). It's free and instant, but has major limitations:

**Pros:**
- No tools needed — it's built into YouTube
- Clickable timestamps take you to that moment in the video
- Works for any video with auto-generated captions

**Cons:**
- Cannot export or download the transcript
- No AI features — just raw text
- Messy formatting with no punctuation on auto-generated captions
- Only available on desktop, not mobile

**Verdict:** Fine for a quick look, but useless if you need to save, search, or reuse the content.

---

## 3. Tactiq — Best for Meeting Transcription

**Best for:** Teams that need real-time transcription of Zoom, Google Meet, and YouTube.

Tactiq is a Chrome extension that captures captions in real-time during live meetings and YouTube playback. It's more powerful than VidText AI for live use cases, but requires an extension install.

**Pros:**
- Real-time transcription during meetings
- Integrates with Zoom, Google Meet, Microsoft Teams, and YouTube
- AI summaries and action items
- Exports to Google Docs, Notion

**Cons:**
- Requires Chrome extension installation
- Free tier limited to 10 transcripts/month
- Paid plans start at $12/month
- YouTube transcript quality depends on live captions

**Verdict:** Best if you need meeting transcription. Overkill for YouTube-only use.

---

## 4. NoteGPT — Best for AI-Powered Notes

**Best for:** Students and researchers who want structured notes from YouTube lectures.

NoteGPT uses AI to convert YouTube videos into structured study notes, mind maps, and summaries. It's more focused on note-taking than raw transcription.

**Pros:**
- Strong AI note-taking features
- Mind map generation
- Flashcard creation for studying
- Browser extension available

**Cons:**
- Requires account creation
- Free tier is limited (5 summaries/day)
- Extension required for best experience
- Less useful for non-educational content

**Verdict:** Great for students. VidText AI is faster and doesn't require sign-up for basic use.

---

## 5. Glasp — Best for Highlighting & Social Sharing

**Best for:** Researchers and learners who want to highlight and share insights from YouTube videos.

Glasp is a social web highlighter that also captures YouTube transcripts. Its unique feature is letting you highlight text and share it publicly with your "knowledge graph."

**Pros:**
- Highlight and annotate YouTube transcripts
- Share highlights with a community
- AI summary powered by ChatGPT
- Works on web pages and YouTube simultaneously

**Cons:**
- Requires Chrome extension
- Social-first design may not suit all users
- AI summary quality varies
- Less useful for pure transcript extraction

**Verdict:** Niche tool for researchers who want to build a public learning portfolio.

---

## How to Choose the Right YouTube Transcript Tool

**Choose VidText AI if:**
- You want zero installation and no sign-up
- You need transcripts AND AI content (summary, blog, notes) in one tool
- You're a content creator repurposing YouTube videos
- You want the fastest solution for most YouTube use cases

**Choose YouTube built-in if:**
- You just need to quickly find a moment in a single video
- You don't need to save or export anything

**Choose Tactiq if:**
- You also need meeting transcription (Zoom, Google Meet)
- Your team shares and collaborates on transcripts

**Choose NoteGPT if:**
- You're a student studying from YouTube lectures
- You want mind maps and flashcards

**Choose Glasp if:**
- You want to highlight and share insights publicly
- You're building a social learning profile

---

## FAQ

**Which YouTube transcript tool is completely free?**
VidText AI and YouTube's built-in transcript panel are both completely free with no usage limits for transcript extraction. VidText AI also offers 3 free AI generations (summaries, blog posts, notes) per day without any account required.

**Which YouTube transcript tool works without installing a Chrome extension?**
VidText AI and YouTube's built-in panel both work without any extension or software installation. Tactiq, NoteGPT, and Glasp all require a Chrome extension for full functionality.

**How accurate are YouTube transcript tools?**
Accuracy depends on the video's captions. Manually uploaded captions (common on professional channels) are 98–100% accurate. Auto-generated YouTube captions are typically 85–95% accurate. All tools that use YouTube's caption data will have the same base accuracy.

**Can these tools transcribe YouTube Shorts?**
VidText AI supports YouTube Shorts. The built-in YouTube transcript panel does not show transcripts for Shorts. Extension-based tools vary in Shorts support.

**Which tool is best for converting YouTube videos to blog posts?**
VidText AI is the only tool in this list that directly converts a YouTube transcript into a full SEO blog post. Other tools focus on summaries and notes rather than long-form content generation.

## Related Guides

- [How to Get a YouTube Transcript Free & Fast](/blog/how-to-get-youtube-transcript)
- [How to See, Get & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [Best YouTube Transcript Chrome Extensions (2026)](/blog/youtube-transcript-chrome-extension)
- [Can ChatGPT Summarize a YouTube Video?](/blog/chatgpt-summarize-youtube-video)
    `.trim(),
  },

  'youtube-transcript-shortcut-search': {
    title: 'YouTube Transcript Shortcut & Search Guide (2026)',
    description: 'How to open YouTube transcripts with a keyboard shortcut, search within any transcript, and find specific words in a video. Free tools included.',
    category: 'Guide',
    date: 'May 17, 2026',
    readTime: '5 min read',
    content: `
## Is There a Keyboard Shortcut to Show Transcript on YouTube?

Technically, YouTube has no single keyboard shortcut that opens the transcript panel directly. However, there's a fast sequence most people don't know about:

**The fastest way to open a transcript on YouTube:**

1. Press **Tab** repeatedly until the three-dot menu (⋯) below the video is focused
2. Press **Enter** to open it
3. Press **T** or use arrow keys to select "Open transcript"

This is the closest thing to a shortcut — but it's still 3 steps. Most users find it easier to click the three-dot menu directly.

**Faster alternative:** Use [VidText AI](https://www.vidtextai.com/tools/transcript) — paste the YouTube URL and the full transcript appears in under 10 seconds. No clicking through menus.

## How to Open the YouTube Transcript (Step by Step)

If you prefer the built-in YouTube method:

**Step 1:** Open any YouTube video in your browser.

**Step 2:** Look for the **three-dot menu (⋯)** directly below the video, next to the like and share buttons.

**Step 3:** Click it and select **"Open transcript"** from the dropdown.

**Step 4:** The transcript panel opens on the right side of the page, showing timestamped lines.

**Pro tip:** Click the **timestamps toggle** (clock icon) in the transcript panel to hide or show timestamps.

## How to Search Within a YouTube Transcript

YouTube's built-in transcript panel has **no search function**. You cannot press Ctrl+F and search within the transcript panel — it's not searchable.

Here's how people work around this:

### Method 1: Browser Find (Partial Workaround)
1. Open the transcript panel (see above)
2. Press **Ctrl+F** (Windows) or **Cmd+F** (Mac) to open browser search
3. Type your search term
4. The browser will highlight matches — but only for the portion of the transcript currently visible on screen

**Problem:** If the transcript is long, you'll only find words in the visible area, not the full transcript.

### Method 2: Copy Transcript, Then Search (Best for Quick Use)
1. Open the transcript panel
2. Click inside it, press **Ctrl+A** to select all, **Ctrl+C** to copy
3. Paste into a text editor, Google Docs, or Notion
4. Use **Ctrl+F** in that app to search the full transcript

**Problem:** Copying from YouTube's panel also copies page navigation and other text — the result is messy.

### Method 3: VidText AI (Cleanest Search Experience)
1. Go to [VidText AI Transcript Tool](https://www.vidtextai.com/tools/transcript)
2. Paste the YouTube URL and click **Get Transcript**
3. Once the transcript appears, use **Ctrl+F** in your browser to search it
4. Every word is searchable — clean text, no page clutter

This is the most reliable way to search any YouTube transcript.

## How to Search YouTube Transcripts for a Specific Word or Phrase

If you want to find where a speaker mentions a specific topic, here are your options ranked from fastest to slowest:

| Method | Searchable | Download | Time |
|---|---|---|---|
| VidText AI | ✅ Full transcript | ✅ .txt file | 10 seconds |
| YouTube built-in panel | ⚠️ Partial only | ❌ No | 30 seconds |
| Manual copy to Google Docs | ✅ Full | ✅ Yes | 2 minutes |
| Watch the video | ❌ No | ❌ No | Full video length |

## How to Find a Transcript on YouTube (If You Can't See It)

Some users can't find the "Open transcript" option. Here's why and what to do:

**Reason 1: The video has no captions**
If a video has captions disabled, there's no transcript available — even with a tool. Look for the **CC badge** on the video thumbnail to confirm captions exist.

**Reason 2: You're on mobile**
YouTube's mobile app doesn't show the transcript option in the same place. On Android/iOS, tap the video title to expand the description, then scroll down to find "Transcript."

**Reason 3: The three-dot menu looks different**
On some screen sizes the menu might be in a slightly different position. Try scrolling down just below the video player to find it.

**Reason 4: The video is a YouTube Short**
YouTube Shorts don't have a transcript panel in the standard interface.

## How to Search Across Multiple YouTube Transcripts

If you want to search what a creator has said across multiple videos (not just one), YouTube doesn't support this natively. Options:

**Option 1: Search YouTube with quotes**
Type \`"exact phrase" site:youtube.com\` in Google — this sometimes surfaces videos where the phrase appears in titles or descriptions, but not in the spoken content.

**Option 2: Transcript multiple videos manually**
Use VidText AI to generate transcripts for each video, download them as .txt files, then use a local search tool (like Windows Search or macOS Spotlight) to search across all the files.

**Option 3: Use YouTube's own search**
YouTube's search indexes auto-captions for most videos, so searching \`topic + channel name\` often surfaces relevant timestamps in the search results.

## Tips for Getting the Most Out of YouTube Transcripts

**Tip 1: Use timestamps to navigate**
Every transcript line includes a timestamp. Click the timestamp in YouTube's built-in panel to jump to that exact moment in the video.

**Tip 2: Download before you search**
For long videos (1+ hour), download the transcript as a .txt file from VidText AI, then open in any text editor. Ctrl+F works perfectly on local files.

**Tip 3: Use AI to answer questions about the video**
Once you have the transcript text, paste it into ChatGPT or Claude with a question like "At what point does the speaker discuss X?" The AI can find and quote the relevant section instantly.

**Tip 4: Check multiple language tracks**
If a video has transcripts in multiple languages, you can view each. In YouTube's panel, click the gear icon (⚙️) to switch languages.

## Related Guides

- [How to See & Download a YouTube Transcript (4 Ways)](/blog/how-to-see-transcript-on-youtube)
- [Best YouTube Transcript Chrome Extensions (2026)](/blog/youtube-transcript-chrome-extension)
- [How to Get a YouTube Transcript (Free & Fast)](/blog/how-to-get-youtube-transcript)

## Conclusion

YouTube has no true keyboard shortcut for opening transcripts, and its built-in transcript panel can't be searched properly. The most reliable workflow is to use [VidText AI](https://www.vidtextai.com/tools/transcript) — get a clean, fully searchable transcript in 10 seconds, download it as a .txt file, and use any text editor or browser Ctrl+F to find exactly what you're looking for.

Try it free at [vidtextai.com/tools/transcript](https://www.vidtextai.com/tools/transcript) — no account, no sign-up.
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
  // Keep title ≤ 60 chars: use post title alone if it fits, else trim suffix
  const titleSuffix = ' | VidText AI'
  const fullTitle = post.title.length + titleSuffix.length <= 60
    ? post.title + titleSuffix
    : post.title.slice(0, 57 - titleSuffix.length) + '...' + titleSuffix

  return {
    title: fullTitle,
    description: post.description,
    alternates: { canonical: `https://www.vidtextai.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.vidtextai.com/blog/${slug}`,
      publishedTime: post.date,
      images: [{ url: 'https://www.vidtextai.com/og-image.png', width: 1200, height: 630 }],
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  // Parse date string to ISO format
  const dateMap: Record<string, string> = {
    'May 15, 2026': '2026-05-15', 'May 16, 2026': '2026-05-16', 'May 17, 2026': '2026-05-17',
  }
  const isoDate = dateMap[post.date] || '2026-05-15'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://www.vidtextai.com/blog/${slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: isoDate,
        dateModified: isoDate,
        image: {
          '@type': 'ImageObject',
          url: 'https://www.vidtextai.com/og-image.png',
          width: 1200,
          height: 630,
        },
        author: {
          '@type': 'Organization',
          name: 'VidText AI',
          url: 'https://www.vidtextai.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.vidtextai.com/og-image.png',
          },
        },
        publisher: {
          '@type': 'Organization',
          name: 'VidText AI',
          url: 'https://www.vidtextai.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.vidtextai.com/og-image.png',
          },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.vidtextai.com/blog/${slug}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.vidtextai.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.vidtextai.com/blog/${slug}` },
        ],
      },
    ],
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
