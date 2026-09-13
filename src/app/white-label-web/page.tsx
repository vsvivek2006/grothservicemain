import type { Metadata } from 'next';
import WhiteLabelWebDevelopmentView from '@/views/white-label/WhiteLabelWebDevelopment';

export const metadata: Metadata = {
  title: "White Label Web Development Services for Agencies | Growth Service",
  description: "Offer premium web development services under your brand with our complete white label solution. WordPress, E-commerce, custom apps, high margins, and 100% white label delivery.",
  alternates: {
    canonical: '/white-label-web',
  },
};

export default function WhiteLabelWebPage() {
  return <WhiteLabelWebDevelopmentView />;
}
