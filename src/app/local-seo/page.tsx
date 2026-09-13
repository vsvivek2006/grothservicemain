import type { Metadata } from 'next';
import GoogleBusinessProfileView from '@/views/digital-marketing/GoogleBusinessProfile';

export const metadata: Metadata = {
  title: "Google Business Profile & Local SEO Services | Growth Service",
  description: "Dominate local search rankings with Google Business Profile optimization, local citation management, and review growth strategies.",
  alternates: {
    canonical: '/local-seo',
  },
};

export default function LocalSEOPage() {
  return <GoogleBusinessProfileView />;
}
