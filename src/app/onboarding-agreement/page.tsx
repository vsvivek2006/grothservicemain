import type { Metadata } from 'next';
import OnboardingAgreementView from '@/views/OnboardingAgreement';

export const metadata: Metadata = {
  title: "Client Onboarding Agreement | Growth Service",
  description: "Official client onboarding agreement and service delivery terms for new projects and digital marketing retainers.",
  alternates: {
    canonical: '/onboarding-agreement',
  },
};

export default function OnboardingAgreementPage() {
  return <OnboardingAgreementView />;
}
