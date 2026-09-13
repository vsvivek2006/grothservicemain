import type { Metadata } from 'next';
import AccessibilityView from '@/views/Accessibility';

export const metadata: Metadata = {
  title: "Accessibility Statement | Growth Service",
  description: "Growth Service accessibility commitment, WCAG compliance standards, and digital equity policies for all users.",
  alternates: {
    canonical: '/accessibility',
  },
};

export default function AccessibilityPage() {
  return <AccessibilityView />;
}
