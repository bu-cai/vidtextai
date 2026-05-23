import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — VidText AI Pro | $9.90/month, 7-Day Free Trial',
  description:
    'Simple pricing for VidText AI. Free plan: 3 AI generations/day, no sign-up. Pro plan: $9.90/month with unlimited AI generations, Gemini 2.5 Flash, and a 7-day free trial.',
  alternates: { canonical: 'https://www.vidtextai.com/pricing' },
  openGraph: {
    title: 'VidText AI Pro — Unlimited YouTube AI Content',
    description: 'Start your 7-day free trial. $9.90/month after. Unlimited AI summaries, blog posts, notes & Shorts scripts.',
    url: 'https://www.vidtextai.com/pricing',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
