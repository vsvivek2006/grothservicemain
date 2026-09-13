import type { Metadata } from 'next';
import BlogView from '@/views/Blog';

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Insights | Growth Service",
  description: "Actionable digital marketing strategies, SEO masterclasses, web development guides, and business growth playbooks from Growth Service.",
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return <BlogView />;
}
