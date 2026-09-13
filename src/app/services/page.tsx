import type { Metadata } from 'next';
import ServicesView from '@/views/Services';

export const metadata: Metadata = {
  title: "Professional Digital Services | Growth Service",
  description: "Explore professional digital services: Custom Website Development, SEO, Social Media Management, and Strategic Business Setup tailored to your growth goals.",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
