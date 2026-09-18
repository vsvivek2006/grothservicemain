import type { Metadata } from 'next';
import RefundPolicyView from '@/views/RefundPolicy';

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Growth Service Digital Solutions",
  description: "Review the Refund & Cancellation Policy for Growth Service Digital Solutions covering cancellations, refund eligibility, and payment terms.",
  alternates: {
    canonical: '/refund',
  },
};

export default function RefundPage() {
  return <RefundPolicyView />;
}
