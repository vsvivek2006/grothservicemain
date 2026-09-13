import type { Metadata } from 'next';
import SocialMediaView from '@/views/digital-marketing/SocialMediaManagement';

export const metadata: Metadata = {
  title: "Social Media Management Services | Growth Service",
  description: "Build your brand, engage your audience, and drive measurable business growth with our expert social media management services.",
  alternates: {
    canonical: '/social-media',
  },
};

export default function SocialMediaPage() {
  return <SocialMediaView />;
}
