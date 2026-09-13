import type { Metadata } from 'next';
import ResourcesView from '@/views/Resources';

export const metadata: Metadata = {
  title: "Free Digital Marketing & SEO Resources | Growth Service",
  description: "Free resources for web development, SEO, social media marketing, and business growth. Download templates, guides, tools, and checklists from Growth Service.",
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  return <ResourcesView />;
}
