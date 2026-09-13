import type { Metadata } from 'next';
import WhiteLabelPPCView from '@/views/white-label/WhiteLabelPPC';

export const metadata: Metadata = {
  title: "White Label PPC Management Services | Growth Service",
  description: "Offer premium PPC services under your brand with our complete white label solution. High profit margins, zero hiring costs, and 100% confidential fulfillment.",
  alternates: {
    canonical: '/white-label-ppc',
  },
};

export default function WhiteLabelPPCPage() {
  return <WhiteLabelPPCView />;
}
