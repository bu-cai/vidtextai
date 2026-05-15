// Server component — renders JSON-LD in <head> without client JS
export function HomeJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'VidText AI',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        url: 'https://www.vidtextai.com',
        description:
          'Convert any YouTube video into transcript, summary, blog post, study notes, or Shorts script using AI. Free, fast, and accurate.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1200',
          bestRating: '5',
        },
        featureList: [
          'YouTube Transcript Extraction',
          'AI Video Summarization',
          'Blog Post Generation',
          'Study Notes Generator',
          'YouTube Shorts Script Generator',
          '10+ Output Languages',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What types of YouTube videos does VidText AI support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Any public YouTube video with captions or subtitles enabled. This includes most educational videos, news, podcasts, TED Talks, and channels that auto-generate captions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many videos can I process for free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Free users get 3 AI generations per day. Transcript fetch is always free. Upgrade to Pro for unlimited access.',
            },
          },
          {
            '@type': 'Question',
            name: 'What languages does VidText AI support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'VidText AI supports 10+ output languages including English, Chinese, Japanese, Spanish, French, German, Korean, Portuguese, Russian, and Arabic.',
            },
          },
          {
            '@type': 'Question',
            name: 'How accurate are the AI-generated outputs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Very accurate. VidText AI uses the latest Gemini AI models. Transcript accuracy depends on the original caption quality, while summaries and blog posts are AI-generated with high fidelity to the source content.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is VidText AI free to use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. VidText AI is free to use with 3 AI content generations per day. No sign-up or credit card is required. A Pro plan with unlimited access is coming soon.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use VidText AI for commercial purposes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Pro users can use generated content commercially. Always verify the source YouTube video license permits the intended reuse.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
