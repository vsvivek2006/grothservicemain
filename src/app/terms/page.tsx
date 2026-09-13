import type { Metadata } from 'next';
import TermsView from '@/views/Terms';

export const metadata: Metadata = {
  title: "Terms of Service | Growth Service - Professional Digital Solutions",
  description: "Review the Growth Service Terms and Conditions covering service agreements, deliverables, retainers, and legal policies.",
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return <TermsView />;
}
