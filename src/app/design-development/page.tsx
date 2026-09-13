import type { Metadata } from 'next';
import DesignDevelopmentView from '@/views/DesignDevelopment';

export const metadata: Metadata = {
  title: "Design & Development Services | Growth Service",
  description: "Modern UI/UX design, custom web applications, WordPress solutions, and e-commerce platforms engineered for high performance and conversions.",
  alternates: {
    canonical: '/design-development',
  },
};

export default function DesignDevelopmentPage() {
  return <DesignDevelopmentView />;
}
