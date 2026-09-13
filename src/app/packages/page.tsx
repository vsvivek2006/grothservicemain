import type { Metadata } from 'next';
import PackagesView from '@/views/Packages';

export const metadata: Metadata = {
  title: "Engagement Models & Solutions | Growth Service",
  description: "Explore structured engagement models and service solutions across web development, SEO, social media, and digital marketing tailored to your business needs.",
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return <PackagesView />;
}
