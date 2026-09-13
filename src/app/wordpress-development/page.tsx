import type { Metadata } from 'next';
import WordPressDevelopmentView from '@/views/design-development/WordPressDevelopment';

export const metadata: Metadata = {
  title: "Custom WordPress Development Services | Growth Service",
  description: "Fast, secure, and scalable custom WordPress websites, WooCommerce setups, and enterprise CMS implementations.",
  alternates: {
    canonical: '/wordpress-development',
  },
};

export default function WordPressDevelopmentPage() {
  return <WordPressDevelopmentView />;
}
