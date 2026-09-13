import type { Metadata } from 'next';
import LocationsHubView from '@/views/LocationsHub';

export const metadata: Metadata = {
  title: "Locations We Serve — Regional Digital Marketing & SEO | Growth Service",
  description: "Explore Growth Service digital marketing, SEO, and web development services across Delhi NCR, Rajasthan, Uttar Pradesh, Bihar, Punjab, Goa, Maharashtra, Karnataka, and Nepal.",
  alternates: {
    canonical: '/locations',
  },
};

export default function LocationsHubPage() {
  return <LocationsHubView />;
}
