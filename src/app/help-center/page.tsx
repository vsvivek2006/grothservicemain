import type { Metadata } from 'next';
import HelpCenterView from '@/views/HelpCenter';

export const metadata: Metadata = {
  title: "Help Center - Growth Service Support & FAQs",
  description: "Get help with website development, SEO services, social media management, and billing. Contact our support team for assistance.",
  alternates: {
    canonical: '/help-center',
  },
};

export default function HelpCenterPage() {
  return <HelpCenterView />;
}
