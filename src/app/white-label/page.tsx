import type { Metadata } from 'next';
import WhiteLabelView from '@/views/WhiteLabel';

export const metadata: Metadata = {
  title: "White Label Partner Program | Growth Service",
  description: "White label digital marketing, website development, and SEO services for agencies. Resell our services under your brand with 40-85% profit margins.",
  alternates: {
    canonical: '/white-label',
  },
};

export default function WhiteLabelPage() {
  return <WhiteLabelView />;
}
