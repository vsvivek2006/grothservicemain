import type { Metadata } from 'next';
import RefundPolicyView from '@/views/RefundPolicy';

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Growth Service",
  description: "Review the Growth Service Refund and Cancellation Policy for web development, SEO retainers, and digital marketing services.",
  alternates: {
    canonical: '/refund',
  },
};

export default function RefundPage() {
  return <RefundPolicyView />;
}
