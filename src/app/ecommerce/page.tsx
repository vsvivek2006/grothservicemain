import type { Metadata } from 'next';
import EcommerceDevelopmentView from '@/views/design-development/EcommerceDevelopment';

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Growth Service",
  description: "Build high-converting online stores with custom e-commerce web design, Shopify, WooCommerce, and payment gateway integrations.",
  alternates: {
    canonical: '/ecommerce',
  },
};

export default function EcommercePage() {
  return <EcommerceDevelopmentView />;
}
