import type { Metadata } from 'next';
import HomeView from '../views/Home';

export const metadata: Metadata = {
  title: 'Growth Service - Best Digital Marketing & Web Development Agency',
  description:
    'Growth Service is a leading digital marketing agency offering SEO, web development, performance marketing, and social media management. Offices in Jaipur, Vrindavan, Nepal. 500+ happy clients.',
  alternates: {
    canonical: 'https://www.growthservice.in/',
  },
};

export default function HomePage() {
  return <HomeView />;
}
