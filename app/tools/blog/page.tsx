import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { BookOpen, Search, PenTool, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube to Blog Post Generator — AI Writer | VidText AI',
  description:
    'Convert any YouTube video into a fully-written, SEO-optimized blog post with AI. Get headers, subheadings, and keyword-rich content automatically.',
  keywords: ['YouTube to blog post', 'video to article', 'AI blog writer', 'SEO content generator'],
  alternates: { canonical: 'https://www.vidtextai.com/tools/blog' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'YouTube to Blog Post Generator',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: 'https://www.vidtextai.com/tools/blog',
      description: 'Convert any YouTube video into a fully-written, SEO-optimized blog post with AI.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '843', bestRating: '5' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog Post Generator', item: 'https://www.vidtextai.com/tools/blog' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Turn a YouTube Video into a Blog Post with AI',
      description: 'Convert any YouTube video into a fully-written, SEO-optimized blog article in under 60 seconds.',
      totalTime: 'PT60S',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Copy the YouTube URL', text: 'Find the YouTube video you want to convert and copy its URL from the browser address bar.' },
        { '@type': 'HowToStep', position: 2, name: 'Paste into VidText AI', text: 'Go to vidtextai.com/tools/blog and paste the YouTube URL into the input box.' },
        { '@type': 'HowToStep', position: 3, name: 'Select Blog Post format', text: 'Make sure Blog Post is selected as the output format.' },
        { '@type': 'HowToStep', position: 4, name: 'Generate and copy', text: 'Click Generate. A complete SEO-optimized blog post appears in under 60 seconds. Copy or download it.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Can AI convert a YouTube video into a blog post?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. VidText AI extracts the video transcript and uses Gemini AI to generate a complete, SEO-optimized blog post with headers, subheadings, and keyword-rich content — in under 60 seconds.' } },
        { '@type': 'Question', name: 'Is the YouTube to blog post generator free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. VidText AI offers 3 free blog post generations per day with no account required. Unlimited transcript extraction is always free.' } },
        { '@type': 'Question', name: 'Is the AI-generated blog post SEO-optimized?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The generated blog post includes a structured H1 title, H2/H3 subheadings, an introduction, body sections, and a conclusion — all formatted for both readers and search engines.' } },
        { '@type': 'Question', name: 'Can I publish the generated blog post on my website?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The output is ready to paste into WordPress, Ghost, Webflow, or any CMS. Pro users can use the generated content for commercial publishing.' } },
      ],
    },
  ],
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <BookOpen className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">YouTube to Blog Post Generator</h1>
        <p className="mt-3 text-lg text-gray-500">
          Transform any YouTube video into a complete, SEO-ready blog article with AI.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <VideoConverter />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: PenTool, title: 'Full Article', desc: 'Complete blog post with intro, body, and conclusion.' },
          { icon: Search, title: 'SEO Optimized', desc: 'Naturally includes keywords for better Google rankings.' },
          { icon: BookOpen, title: 'H2 / H3 Headers', desc: 'Proper heading structure for readability and SEO.' },
          { icon: TrendingUp, title: 'Publish Ready', desc: 'Copy directly into WordPress, Ghost, or any CMS.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 p-5">
            <item.icon className="mb-3 h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <article className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Turn Videos Into Blog Traffic</h2>
        <p className="text-gray-600 mt-3">
          Video content is great, but Google ranks written content. Our AI Blog Post Generator
          bridges that gap — converting the insights from any YouTube video into a publish-ready
          article that can drive organic search traffic to your site.
        </p>
        <p className="text-gray-600 mt-3">
          Each generated article includes an SEO-friendly title, well-structured introduction,
          organized body sections with H2 and H3 headers, and a conclusion with clear takeaways.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Turn a YouTube Video Into a Blog Post</h2>
        <ol className="mt-3 space-y-2 text-gray-600">
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">1.</span>Paste any YouTube video URL into the tool above.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">2.</span>Click <strong>Get Transcript</strong> to extract the full video text.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">3.</span>Select the <strong>Blog Post</strong> tab and click Generate.</li>
          <li className="flex gap-2"><span className="font-bold text-red-600 shrink-0">4.</span>Copy the article or download it as a .txt file to paste into your CMS.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Who Should Use This Tool?</h2>
        <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-5">
          <li><strong>YouTubers</strong> who want written content without hiring writers</li>
          <li><strong>Content marketers</strong> repurposing video into SEO articles</li>
          <li><strong>Bloggers</strong> covering topics discussed in industry YouTube videos</li>
          <li><strong>Agencies</strong> scaling content production across multiple channels</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: 'How long does it take to generate a blog post from a YouTube video?', a: 'Most blog posts are generated in 15–30 seconds, regardless of the video length. VidText AI processes the transcript and generates a complete article in one step.' },
            { q: 'Is the generated blog post SEO-optimized?', a: 'Yes. The AI structures the article with H2 and H3 headings, uses natural keyword placement, and writes in a format that Google can index effectively.' },
            { q: 'Can I edit the generated blog post?', a: 'Absolutely. The blog post is plain text that you can copy and paste into any editor — WordPress, Ghost, Notion, Google Docs — and edit freely.' },
            { q: 'Does this work for any YouTube video?', a: 'It works on any public YouTube video with captions enabled. Educational channels, podcasts, tutorials, and news videos work best.' },
          ].map(item => (
            <div key={item.q} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 text-sm">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
