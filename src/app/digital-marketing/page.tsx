import type { Metadata } from 'next';
import DigitalMarketingView from '@/views/DigitalMarketing';

export const metadata: Metadata = {
  title: "Digital Marketing Services | Growth Service",
  description: "Complete digital marketing solutions including SEO, Social Media Management, Meta Ads, Google My Business, Lead Generation, and Email Marketing.",
  alternates: {
    canonical: '/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingView />;
}
