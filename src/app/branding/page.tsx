import type { Metadata } from 'next';
import BrandStrategyView from '@/views/digital-marketing/BrandStrategy';

export const metadata: Metadata = {
  title: "Brand Strategy & Visual Identity Services | Growth Service",
  description: "Define and elevate your brand with memorable visual identity design, messaging architecture, and brand strategy guidelines.",
  alternates: {
    canonical: '/branding',
  },
};

export default function BrandingPage() {
  return <BrandStrategyView />;
}
