import type { Metadata } from 'next';
import CaseStudiesView from '@/views/CaseStudies';

export const metadata: Metadata = {
  title: "Case Studies & Client Results | Growth Service",
  description: "In-depth case studies showcasing real business growth, 10x organic traffic increases, and high-ROI digital transformations delivered by Growth Service.",
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesView />;
}
