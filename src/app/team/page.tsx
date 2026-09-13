import type { Metadata } from 'next';
import TeamPageView from '@/views/TeamPage';

export const metadata: Metadata = {
  title: "Meet Our Team | Growth Service Employee Directory",
  description: "Meet the verified leadership, developers, SEO specialists, and marketing team across Growth Service offices.",
  alternates: {
    canonical: '/team',
  },
};

export default function TeamPage() {
  return <TeamPageView />;
}
