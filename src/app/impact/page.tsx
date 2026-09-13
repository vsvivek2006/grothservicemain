import type { Metadata } from 'next';
import OurImpactView from '@/views/OurImpact';

export const metadata: Metadata = {
  title: "Our Impact - Business Transformation Stories | Growth Service",
  description: "See how Growth Service transforms businesses with digital solutions, automation, and growth strategies. Real results and success stories.",
  alternates: {
    canonical: '/impact',
  },
};

export default function OurImpactPage() {
  return <OurImpactView />;
}
