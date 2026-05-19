import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { FileText, Clock, Globe, Download, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Transcript Generator — Free Download | VidText AI',
  description:
    'Free YouTube transcript generator — paste any YouTube URL and get a full, timestamped transcript in seconds. Download as .txt, no sign-up required. Works on any YouTube video.',
  keywords: [
    'youtube transcript generator',
    'youtube to transcript',
    'youtube video transcript',
    'transcript for youtube videos',
    'transcript generator',
    'youtube transcript download',
    'download youtube transcript',
    'youtube transcript free',
    'YouTube to text',
  ],
  alternates: { canonical: 'https://www.vidtextai.com/tools/transcript' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'YouTube Transcript Generator & Downloader',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: 'https://www.vidtextai.com/tools/transcript',
      description: 'Download free, accurate, timestamped transcripts from any YouTube video instantly.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1284', bestRating: '5' },
      featureList: [
        'Timestamped transcript download',
        'Copy to clipboard',
        'Download as .txt file',
        '100+ languages',
        'No sign-up required',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'YouTube Transcript Download', item: 'https://www.vidtextai.com/tools/transcript' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Get a YouTube Transcript',
      description: 'Extract a full, timestamped transcript from any YouTube video in seconds.',
      totalTime: 'PT30S',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Copy the YouTube URL', text: 'Open the YouTube video and copy the URL from your browser address bar.' },
        { '@type': 'HowToStep', position: 2, name: 'Paste into VidText AI', text: 'Go to vidtextai.com/tools/transcript and paste the YouTube URL into the input box.' },
        { '@type': 'HowToStep', position: 3, name: 'Click Get Transcript', text: 'Click the Get Transcript button. The full timestamped transcript appears in under 10 seconds.' },
        { '@type': 'HowToStep', position: 4, name: 'Copy or Download', text: 'Click Copy to copy the transcript to your clipboard, or Download to save it as a .txt file.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I download a YouTube transcript?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Paste the YouTube video URL into VidText AI, click Get Transcript, then click the Download button to save the transcript as a .txt file. No sign-up required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is downloading a YouTube transcript free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Transcript extraction and download is completely free with no daily limit on VidText AI.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format is the downloaded transcript?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Transcripts download as a plain .txt file with timestamps on each line, making it easy to open in any text editor, Word, or Google Docs.',
          },
        },
      ],
    },
  ],
}

export default function TranscriptPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <FileText className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube Transcript Generator</h1>
        <p className="mt-3 text-lg text-gray-500">
          Extract and download full, timestamped transcripts from any YouTube video — free, instant, no sign-up.
        </p>
        {/* Download highlight */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm text-green-700 font-medium">
          <Download className="h-4 w-4" />
          Download as .txt — always free, no limit
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      {/* Features */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Clock, title: 'Timestamped Lines', desc: 'Every line includes the exact timestamp — perfect for citing specific moments.' },
          { icon: Globe, title: '100+ Languages', desc: 'Supports auto-generated and manual captions in over 100 languages.' },
          { icon: Download, title: 'Download as .txt', desc: 'Save your transcript instantly as a plain text file. Open in any editor.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* How to download */}
      <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Download a YouTube Transcript</h2>
        <div className="space-y-3">
          {[
            { step: '1', text: 'Copy the YouTube video URL from your browser address bar' },
            { step: '2', text: 'Paste it into the input box above and click "Get Transcript"' },
            { step: '3', text: 'Wait a few seconds — the full timestamped transcript appears' },
            { step: '4', text: 'Click "Save" to download as a .txt file, or "Copy" to copy to clipboard' },
          ].map(item => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">{item.step}</span>
              <p className="text-sm text-gray-700 pt-0.5">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use cases */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Can You Do With a Downloaded Transcript?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: '📝', title: 'Write blog posts', desc: 'Repurpose video content into SEO articles' },
            { icon: '📚', title: 'Study & take notes', desc: 'Search and highlight key concepts from lectures' },
            { icon: '🔍', title: 'Research & citations', desc: 'Quote specific timestamps for academic work' },
            { icon: '♿', title: 'Accessibility', desc: 'Create subtitles or closed captions' },
            { icon: '🌍', title: 'Translation', desc: 'Translate content into other languages' },
            { icon: '📊', title: 'Content analysis', desc: 'Analyze what topics a creator covers' },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <article className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I download a YouTube transcript?',
              a: 'Paste the YouTube URL into VidText AI above, click "Get Transcript", then click the "Save" button to download the transcript as a .txt file. The whole process takes under 10 seconds.',
            },
            {
              q: 'Is downloading a YouTube transcript free?',
              a: 'Yes, completely free with no daily limit. Transcript extraction and download never counts toward any usage limit on VidText AI.',
            },
            {
              q: 'What format does the downloaded transcript use?',
              a: 'The transcript downloads as a plain .txt file with timestamps on each line (e.g., [0:00] Hello and welcome...). You can open it in any text editor, Word, Google Docs, or Notion.',
            },
            {
              q: 'Does it work with all YouTube videos?',
              a: 'It works with any public YouTube video that has captions enabled — including auto-generated captions. Most videos on educational channels, news, podcasts, and TED Talks work perfectly.',
            },
            {
              q: 'Can I download transcripts in other languages?',
              a: 'Yes. VidText AI supports transcripts in 100+ languages. If the video has captions in multiple languages, you can select your preferred language from the dropdown.',
            },
          ].map(item => (
            <div key={item.q} className="rounded-xl border border-gray-200 p-5">
              <div className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.q}</h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Deep content for SEO */}
      <article className="mt-16 space-y-10 text-gray-600">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Is a YouTube Transcript Generator?</h2>
          <p>A YouTube transcript generator is a tool that automatically extracts the full spoken text from a YouTube video and presents it as a readable, searchable document. VidText AI&apos;s transcript generator reads the captions data from any public YouTube video and converts it into a clean, timestamped text file — in seconds, with no manual effort.</p>
          <p className="mt-3">Unlike YouTube&apos;s hidden built-in transcript panel (which you can&apos;t download or search easily), a dedicated transcript generator gives you a portable file you can use anywhere: paste into Google Docs, import into Notion, feed to ChatGPT, or archive for later.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Convert YouTube Videos to Transcripts</h2>
          <p>Converting a YouTube video to a transcript with VidText AI takes three steps:</p>
          <ol className="mt-3 space-y-2 list-decimal pl-5">
            <li><strong>Copy the video URL</strong> — from your browser address bar or YouTube&apos;s Share button.</li>
            <li><strong>Paste into VidText AI</strong> — the tool fetches the caption data from YouTube&apos;s servers automatically.</li>
            <li><strong>Download or copy</strong> — save as a .txt file or copy the full transcript to your clipboard in one click.</li>
          </ol>
          <p className="mt-3">The entire YouTube-to-transcript process takes under 10 seconds for most videos, regardless of length. A 3-hour documentary produces a transcript just as fast as a 5-minute tutorial.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">YouTube Video Transcript: 3 Methods Compared</h2>
          <p>There are three main ways to get a transcript for YouTube videos in 2026:</p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Method</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Downloadable</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">Timestamped</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">No Sign-up</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-900">AI Features</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: 'VidText AI', dl: '✅', ts: '✅', ns: '✅', ai: '✅' },
                  { method: 'YouTube Built-in', dl: '❌', ts: '✅', ns: '✅', ai: '❌' },
                  { method: 'Chrome Extensions', dl: '⚠️ Some', ts: '✅', ns: '❌', ai: '⚠️ Some' },
                ].map(row => (
                  <tr key={row.method} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.method}</td>
                    <td className="px-4 py-3 text-center">{row.dl}</td>
                    <td className="px-4 py-3 text-center">{row.ts}</td>
                    <td className="px-4 py-3 text-center">{row.ns}</td>
                    <td className="px-4 py-3 text-center">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">VidText AI is the only option that combines downloadable output, no sign-up, and built-in AI content generation — making it the most complete transcript tool for YouTube videos in 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Use a Transcript Generator for YouTube Videos?</h2>
          <p>Getting a text transcript from YouTube videos is useful across dozens of workflows:</p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li><strong>Content repurposing:</strong> Turn a YouTube video into a blog post, newsletter, or Twitter thread without rewriting from scratch. The transcript gives you the raw material.</li>
            <li><strong>Research and fact-checking:</strong> Search a long interview or documentary for specific quotes. Ctrl+F in the transcript is faster than scrubbing through video.</li>
            <li><strong>Study notes:</strong> Download lecture transcripts to review, highlight, and annotate — without rewinding the video repeatedly.</li>
            <li><strong>Subtitles and captions:</strong> Use the transcript as a starting point for creating subtitle files for your own videos or accessibility purposes.</li>
            <li><strong>SEO content:</strong> Transcripts contain naturally-spoken keywords and phrases that make excellent source material for SEO-optimized articles.</li>
            <li><strong>AI summarization:</strong> Paste the transcript into ChatGPT, Claude, or Gemini for custom summaries and analysis — or use VidText AI&apos;s built-in AI tools directly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Which YouTube Videos Have Transcripts?</h2>
          <p>VidText AI can generate transcripts for any public YouTube video that has captions enabled. This includes:</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li>Videos with <strong>auto-generated captions</strong> (the vast majority of English-language videos)</li>
            <li>Videos with <strong>manually uploaded captions</strong> by the creator</li>
            <li>Videos from major channels: TED, Coursera, Khan Academy, BBC, CNN, major podcasters</li>
            <li>Educational content, tutorials, news, interviews, documentaries, and lectures</li>
          </ul>
          <p className="mt-3">Videos that do <strong>not</strong> have transcripts available: private or unlisted videos, videos where the creator has disabled captions, and music-only content without speech.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">From Transcript to AI Content — One Click More</h2>
          <p>Once you have the transcript, VidText AI lets you instantly convert it into five AI-powered content formats — no extra copying or pasting required:</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { emoji: '✨', title: 'AI Summary', desc: 'Key points and takeaways in bullet format' },
              { emoji: '📝', title: 'Blog Post', desc: 'Full SEO article with H2/H3 headers' },
              { emoji: '📖', title: 'Study Notes', desc: 'Structured notes with key concepts and quotes' },
              { emoji: '🎬', title: 'Shorts Script', desc: '3–5 viral short-form video scripts' },
            ].map(item => (
              <div key={item.title} className="flex gap-3 rounded-xl border border-gray-200 p-4">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4">All AI formats are free for 3 generations per day — no account required. The transcript itself is always unlimited and free.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Related Guides</h2>
          <ul className="space-y-2">
            <li>→ <a href="/blog/how-to-get-youtube-transcript" className="text-red-600 hover:underline">How to Get a YouTube Transcript (Free & Fast)</a></li>
            <li>→ <a href="/blog/how-to-see-transcript-on-youtube" className="text-red-600 hover:underline">How to See & Download a YouTube Transcript (4 Methods)</a></li>
            <li>→ <a href="/blog/youtube-transcript-on-phone" className="text-red-600 hover:underline">How to Get a YouTube Transcript on iPhone and Android</a></li>
            <li>→ <a href="/blog/youtube-caption-downloader" className="text-red-600 hover:underline">YouTube Caption Downloader: Save Subtitles as SRT or TXT</a></li>
            <li>→ <a href="/blog/best-youtube-transcript-tools" className="text-red-600 hover:underline">Best YouTube Transcript Tools in 2026 (Comparison)</a></li>
          </ul>
        </section>

      </article>
    </div>
  )
}
