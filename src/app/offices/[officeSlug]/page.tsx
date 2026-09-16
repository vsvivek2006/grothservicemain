import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getOfficeBySlug, getPhysicalOffices } from '@/selectors';
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/seo/schema';
import OfficeDetailPageView from '@/views/OfficeDetailPage';

interface PageProps {
  params: Promise<{ officeSlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getPhysicalOffices().map((office) => ({
    officeSlug: office.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { officeSlug } = await params;
  const office = getOfficeBySlug(officeSlug);
  if (!office) return {};

  const pageTitle = `${office.name} — ${office.city}, ${office.state} | Growth Service`;
  const pageDescription = `${office.name} of Growth Service located at ${office.address}. Contact: ${office.phone}. Services available to clients in this region include ${office.servicesOffered.slice(0, 3).join(', ')}.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/offices/${office.slug}`,
    },
  };
}

export default async function OfficePage({ params }: PageProps) {
  const { officeSlug } = await params;
  const office = getOfficeBySlug(officeSlug);
  if (!office) {
    notFound();
  }

  const localBusinessSchema = buildLocalBusinessSchema(office);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Offices', path: '/offices' },
    { label: office.name, path: `/offices/${office.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <OfficeDetailPageView officeSlug={officeSlug} />
    </>
  );
}
