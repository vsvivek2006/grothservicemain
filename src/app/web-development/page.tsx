import type { Metadata } from 'next';
import WebsiteDevelopmentView from '@/views/design-development/WebsiteDevelopment';

export const metadata: Metadata = {
  title: "Custom Website Development Services | Growth Service",
  description: "Modern, responsive, blazing-fast websites and web applications built using React, TypeScript, Tailwind CSS, and Next.js.",
  alternates: {
    canonical: '/web-development',
  },
};

export default function WebDevelopmentPage() {
  return <WebsiteDevelopmentView />;
}
