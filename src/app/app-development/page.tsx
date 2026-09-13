import type { Metadata } from 'next';
import MobileAppDevelopmentView from '@/views/design-development/MobileAppDevelopment';

export const metadata: Metadata = {
  title: "Mobile App Development Services | Growth Service",
  description: "Cross-platform iOS and Android mobile app development with React Native, Flutter, and native performance.",
  alternates: {
    canonical: '/app-development',
  },
};

export default function AppDevelopmentPage() {
  return <MobileAppDevelopmentView />;
}
