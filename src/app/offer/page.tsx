import type { Metadata } from 'next';
import OfferView from '@/views/Offer';

export const metadata: Metadata = {
  title: "Free Digital Growth Strategy & Audit | Growth Service",
  description: "Request a complimentary 30-minute growth strategy consultation and technical digital audit with senior specialists across Jaipur, Vrindavan, and Nepal.",
  alternates: {
    canonical: '/offer',
  },
};

export default function OfferPage() {
  return <OfferView />;
}
