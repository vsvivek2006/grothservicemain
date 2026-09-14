import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, getAllCities } from '@/selectors';
import { buildBreadcrumbSchema } from '@/seo/schema';
import CityHubPageView from '@/views/CityHubPage';

interface PageProps {
  params: Promise<{ citySlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCities().map((city) => ({
    citySlug: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const pageTitle = `Digital Marketing & SEO Services in ${city.name}, ${city.state} | Growth Service`;
  const pageDescription = `Looking for top digital marketing, SEO, and website development services in ${city.name}, ${city.state}? Growth Service provides tailored solutions with verified ROI.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/locations/${city.slug}`,
    },
  };
}

export default async function LocationCityPage({ params }: PageProps) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Locations', path: '/locations' },
    { label: city.name, path: `/locations/${city.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CityHubPageView />
    </>
  );
}
