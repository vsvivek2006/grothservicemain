import type { Metadata } from 'next';
import NotFoundView from '@/views/NotFound';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Growth Service',
  description: 'The requested page could not be found. Explore Growth Service digital marketing, SEO, and web development services.',
};

export default function NotFound() {
  return <NotFoundView />;
}
