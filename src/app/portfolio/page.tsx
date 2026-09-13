import type { Metadata } from 'next';
import PortfolioView from '@/views/Portfolio';

export const metadata: Metadata = {
  title: "Our Portfolio - Real Projects & Case Studies | Growth Service",
  description: "Explore our portfolio of website development, SEO services, social media campaigns, and business setup projects. See real results and case studies.",
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
