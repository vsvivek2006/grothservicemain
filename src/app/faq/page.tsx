import type { Metadata } from 'next';
import FAQView from '@/views/FAQ';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Growth Service",
  description: "Frequently asked questions about digital marketing, web development, branding, SEO, and white label solutions. Get answers from Growth Service.",
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return <FAQView />;
}
