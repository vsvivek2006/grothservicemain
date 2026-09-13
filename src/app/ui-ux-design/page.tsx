import type { Metadata } from 'next';
import UIUXDesignView from '@/views/design-development/UIUXDesign';

export const metadata: Metadata = {
  title: "UI/UX Design Services | Growth Service",
  description: "User-centered UI/UX design, wireframing, interactive prototyping, and design systems for web and mobile applications.",
  alternates: {
    canonical: '/ui-ux-design',
  },
};

export default function UIUXDesignPage() {
  return <UIUXDesignView />;
}
