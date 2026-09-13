import type { Metadata } from 'next';
import WhiteLabelSocialMediaView from '@/views/white-label/WhiteLabelSocialMedia';

export const metadata: Metadata = {
  title: "White Label Social Media Management Services | Growth Service",
  description: "Offer premium social media services under your brand with our complete white label solution. Turnkey creative assets, 60-70% profit margins, and 100% white label fulfillment.",
  alternates: {
    canonical: '/white-label-smo',
  },
};

export default function WhiteLabelSmoPage() {
  return <WhiteLabelSocialMediaView />;
}
