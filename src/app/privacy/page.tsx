import type { Metadata } from 'next';
import PrivacyView from '@/views/Privacy';

export const metadata: Metadata = {
  title: "Privacy Policy | Growth Service Digital Solutions",
  description: "Read the Privacy Policy for Growth Service Digital Solutions explaining what information we collect, how we use it, and your choices.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
