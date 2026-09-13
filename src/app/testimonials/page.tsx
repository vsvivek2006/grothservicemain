import type { Metadata } from 'next';
import TestimonialsView from '@/views/Testimonials';

export const metadata: Metadata = {
  title: "Client Testimonials & Success Stories | Growth Service",
  description: "Read real client testimonials and success stories about Growth Service website development, SEO, social media management, and business setup services.",
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
