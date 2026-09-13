import type { Metadata } from 'next';
import ContentMarketingView from '@/views/digital-marketing/ContentMarketing';

export const metadata: Metadata = {
  title: "Content Marketing Services | Growth Service",
  description: "High-impact content marketing strategies that attract, engage, and convert your target audience with data-backed articles, infographics, and copy.",
  alternates: {
    canonical: '/content-marketing',
  },
};

export default function ContentMarketingPage() {
  return <ContentMarketingView />;
}
