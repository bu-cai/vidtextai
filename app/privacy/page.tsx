import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | VidText AI',
  description: 'Learn how VidText AI collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://www.vidtextai.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: May 15, 2026</p>

      <div className="mt-8 space-y-8 text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p>Welcome to VidText AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate the website <strong>www.vidtextai.com</strong> and provide AI-powered YouTube content conversion tools. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
          <h3 className="font-medium text-gray-800 mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>YouTube video URLs you submit for processing</li>
            <li>Custom prompts or instructions you enter</li>
            <li>Language preferences you select</li>
          </ul>
          <h3 className="font-medium text-gray-800 mt-4 mb-2">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address (used for rate limiting only, not stored permanently)</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring URLs</li>
            <li>Device type (mobile, desktop, tablet)</li>
          </ul>
          <h3 className="font-medium text-gray-800 mt-4 mb-2">2.3 Cookies and Tracking</h3>
          <p>We use cookies and similar tracking technologies to improve your experience. These include:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Essential cookies:</strong> Required for the site to function properly</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (Vercel Analytics)</li>
            <li><strong>Advertising cookies:</strong> Used by Google AdSense to show relevant advertisements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To process YouTube video transcripts and generate AI content</li>
            <li>To enforce usage limits (3 free AI generations per day)</li>
            <li>To improve and optimize our services</li>
            <li>To analyze site traffic and usage patterns</li>
            <li>To display relevant advertisements via Google AdSense</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <div className="mt-3 space-y-3">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">Google AdSense</h3>
              <p className="text-sm mt-1">We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our site or other sites. You can opt out at <a href="https://www.google.com/settings/ads" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">Google Gemini AI</h3>
              <p className="text-sm mt-1">Video transcripts are processed by Google&apos;s Gemini AI models to generate summaries, blog posts, and other content. Your transcript content is sent to Google&apos;s API for processing.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">Supadata.ai</h3>
              <p className="text-sm mt-1">We use Supadata.ai to retrieve YouTube video transcripts. Video IDs are sent to their API for transcript extraction.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900">Vercel Analytics</h3>
              <p className="text-sm mt-1">We use Vercel&apos;s privacy-friendly analytics to understand site usage. No personal data is stored.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>
          <p>We do not permanently store YouTube URLs or generated content unless you have an account with us. IP addresses used for rate limiting are stored in memory only and reset daily. We do not sell, rent, or trade your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights (GDPR / CCPA)</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Right to access:</strong> Request a copy of data we hold about you</li>
            <li><strong>Right to deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Right to opt-out:</strong> Opt out of personalized advertising</li>
            <li><strong>Right to portability:</strong> Receive your data in a portable format</li>
          </ul>
          <p className="mt-3">To exercise these rights, contact us at <strong>privacy@vidtextai.com</strong></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children&apos;s Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <div className="mt-2 rounded-lg bg-gray-50 p-4 text-sm">
            <p><strong>VidText AI</strong></p>
            <p>Email: privacy@vidtextai.com</p>
            <p>Website: www.vidtextai.com</p>
          </div>
        </section>

      </div>
    </div>
  )
}
