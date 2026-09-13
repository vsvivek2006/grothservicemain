import type { Metadata } from 'next';
import TrustVerificationView from '@/views/TrustVerification';

export const metadata: Metadata = {
  title: "Trust, Verification & Scam Alert | Growth Service",
  description: "Official verification portal for Growth Service. Verify official representatives, payment channels, and report impersonation or fraud attempts.",
  alternates: {
    canonical: '/verify',
  },
};

export default function TrustVerificationPage() {
  return <TrustVerificationView />;
}
