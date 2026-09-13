import type { Metadata } from 'next';
import SEOServiceView from '@/views/digital-marketing/SEOService';

export const metadata: Metadata = {
  title: "Best SEO Services in Jaipur, Vrindavan & Nepal | Growth Service",
  description: "Professional SEO services in Jaipur, Vrindavan, and Nepal. Top Google rankings, organic traffic growth, and verified client outcomes. Free SEO audit available.",
  alternates: {
    canonical: '/seo',
  },
};

export default function SEOPage() {
  return <SEOServiceView />;
}
