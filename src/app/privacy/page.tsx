import type { Metadata } from 'next';
import PrivacyView from '@/views/Privacy';

export const metadata: Metadata = {
  title: "Privacy Policy | Growth Service",
  description: "Read Growth Service Privacy Policy explaining how we collect, protect, and handle client data and visitor information.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
