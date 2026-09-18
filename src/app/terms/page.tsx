import type { Metadata } from 'next';
import TermsView from '@/views/Terms';

export const metadata: Metadata = {
  title: "Terms & Conditions | Growth Service Digital Solutions",
  description: "Review the Terms & Conditions for Growth Service Digital Solutions governing our website, digital marketing, web/app development, and services.",
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return <TermsView />;
}
