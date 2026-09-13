import type { Metadata } from 'next';
import FreeWebsiteAuditView from '@/views/FreeWebsiteAudit';

export const metadata: Metadata = {
  title: "Free Website & SEO Audit | Growth Service",
  description: "Request a comprehensive free website and SEO audit from Growth Service. Identify technical issues, Core Web Vitals, speed, and ranking opportunities.",
  alternates: {
    canonical: '/free-audit',
  },
};

export default function FreeWebsiteAuditPage() {
  return <FreeWebsiteAuditView />;
}
