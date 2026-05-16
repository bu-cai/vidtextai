import { Metadata } from 'next'
import { VideoConverter } from '@/components/VideoConverter'
import { BookOpen, Search, PenTool, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube to Blog Post Generator — AI SEO Article Writer | VidText AI',
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
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vidtextai.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog Post Generator', item: 'https://www.vidtextai.com/tools/blog' },
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
      </article>
    </div>
  )
}
