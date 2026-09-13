import type { Metadata } from 'next';
import WhiteLabelSEOView from '@/views/white-label/WhiteLabelSEO';

export const metadata: Metadata = {
  title: "White Label SEO Services for Agencies | Growth Service",
  description: "Offer premium SEO services under your brand with our complete white label solution. High profit margins, zero overhead, and 100% confidential white-hat fulfillment.",
  alternates: {
    canonical: '/white-label-seo',
  },
};

export default function WhiteLabelSEOPage() {
  return <WhiteLabelSEOView />;
}
