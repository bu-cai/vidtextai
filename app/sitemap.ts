import { MetadataRoute } from 'next'

const BLOG_SLUGS = [
  'video-summarizer-prompt',
  'video-to-srt',
  'closed-captions-vs-subtitles',
  'can-chatgpt-transcribe-audio',
  'best-live-captioning-tool-mac',
  'mp4-to-transcript',
  'how-to-get-youtube-transcript',
  'youtube-to-blog-post',
  'study-notes-from-youtube',
  'youtube-shorts-script-generator',
  'youtube-notes-generator',
  'video-to-text-converter-guide',
  'youtube-to-blog-post-ai',
  'how-to-see-transcript-on-youtube',
  'best-youtube-summarizer-prompts',
  'youtube-transcript-chrome-extension',
  'best-youtube-transcript-tools',
  'youtube-transcript-shortcut-search',
  'chatgpt-summarize-youtube-video',
  'youtube-caption-downloader',
  'youtube-timestamp-generator',
  'extract-subtitles-from-youtube',
  'youtube-video-to-notes-ai',
  'youtube-video-converter',
  'search-youtube-transcripts',
  'youtube-transcript-api-guide',
  'shortcut-to-show-transcript-on-youtube',
  'how-to-open-transcript-on-youtube',
  'youtube-transcript-on-phone',
  'youtube-transcript-translate',
  'youtube-video-summary-free',
]

// 每次更新页面内容时，同步更新对应的日期
const DATES = {
  home:          new Date('2026-05-23'),
  toolTranscript:new Date('2026-05-20'),
  toolSummary:   new Date('2026-05-20'),
  toolBlog:      new Date('2026-05-20'),
  toolNotes:     new Date('2026-05-20'),
  toolShorts:    new Date('2026-05-20'),
  toolVideoText: new Date('2026-05-20'),
  about:         new Date('2026-04-01'),
  pricing:       new Date('2026-05-01'),
  blog:          new Date('2026-05-23'),
  blogPosts:     new Date('2026-05-15'),
  alternatives:  new Date('2026-05-10'),
  legal:         new Date('2026-01-01'),
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vidtextai.com'

  return [
    { url: baseUrl, lastModified: DATES.home, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/tools/transcript`, lastModified: DATES.toolTranscript, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tools/summary`, lastModified: DATES.toolSummary, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tools/blog`, lastModified: DATES.toolBlog, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/notes`, lastModified: DATES.toolNotes, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/shorts`, lastModified: DATES.toolShorts, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/video-to-text`, lastModified: DATES.toolVideoText, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: DATES.about, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: DATES.pricing, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: DATES.blog, changeFrequency: 'weekly', priority: 0.7 },
    ...BLOG_SLUGS.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: DATES.blogPosts,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/alternatives`, lastModified: DATES.alternatives, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alternatives/vs-tactiq`, lastModified: DATES.alternatives, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alternatives/vs-glasp`, lastModified: DATES.alternatives, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alternatives/vs-summarize-tech`, lastModified: DATES.alternatives, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: DATES.legal, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
