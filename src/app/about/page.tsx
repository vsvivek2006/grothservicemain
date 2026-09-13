import type { Metadata } from 'next';
import AboutView from '@/views/About';

export const metadata: Metadata = {
  title: "About Us | Growth Service",
  description: "Learn about Growth Service, our history, verified offices in Jaipur, Vrindavan, and Nepal, and our mission to deliver high-performance digital marketing and web solutions.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutView />;
}
