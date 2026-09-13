import type { Metadata } from 'next';
import OfficesHubView from '@/views/OfficesHub';

export const metadata: Metadata = {
  title: "Our 3 Company Offices — Jaipur, Vrindavan & Nepal | Growth Service",
  description: "Explore Growth Service physical offices in Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Bariyarpatti (Nepal). Verified addresses, direct contacts, and business hours.",
  alternates: {
    canonical: '/offices',
  },
};

export default function OfficesHubPage() {
  return <OfficesHubView />;
}
