import type { Metadata } from 'next';
import PricingView from '@/views/Pricing';

export const metadata: Metadata = {
  title: "Custom Quotes & Solutions | Growth Service",
  description: "Request custom quotes and scope consultations for website development, SEO, social media management, and digital transformation tailored to your business.",
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return <PricingView />;
}
