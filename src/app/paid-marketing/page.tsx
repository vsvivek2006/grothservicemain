import type { Metadata } from 'next';
import MetaAdsView from '@/views/digital-marketing/MetaAdsManagement';

export const metadata: Metadata = {
  title: "Best Meta Ads Management in Jaipur, Vrindavan & Nepal | Growth Service",
  description: "Professional Meta Ads management services in Jaipur, Vrindavan, and Nepal. Expert Facebook, Instagram & WhatsApp advertising. Get 5x ROI with our data-driven ad strategies.",
  alternates: {
    canonical: '/paid-marketing',
  },
};

export default function PaidMarketingPage() {
  return <MetaAdsView />;
}
