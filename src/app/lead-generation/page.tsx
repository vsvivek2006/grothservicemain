import type { Metadata } from 'next';
import LeadGenerationView from '@/views/digital-marketing/LeadGeneration';

export const metadata: Metadata = {
  title: "B2B & B2C Lead Generation Services | Growth Service",
  description: "Drive qualified sales leads with high-converting landing pages, paid acquisition funnels, and automated nurturing pipelines.",
  alternates: {
    canonical: '/lead-generation',
  },
};

export default function LeadGenerationPage() {
  return <LeadGenerationView />;
}
