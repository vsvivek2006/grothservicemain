import type { Metadata } from 'next';
import GrowthServicesView from '@/views/GrowthServices';

export const metadata: Metadata = {
  title: "Specialized SEO & Organic Growth Solutions | Growth Service",
  description: "Accelerate organic traffic and local brand visibility with specialized authority backlink outreach, Google Business Profile optimization, and technical audits.",
  alternates: {
    canonical: '/growth-services',
  },
};

export default function GrowthServicesPage() {
  return <GrowthServicesView />;
}
