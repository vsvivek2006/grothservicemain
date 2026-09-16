import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, getServiceBySlug, getAllCities, getServicesForCity } from '@/selectors';
import { buildServiceSchema, buildBreadcrumbSchema } from '@/seo/schema';
import LocationServicePageView from '@/views/LocationServicePage';

interface PageProps {
  params: Promise<{ city: string; serviceSlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { city: string; serviceSlug: string }[] = [];
  const cities = getAllCities();
  for (const city of cities) {
    const services = getServicesForCity(city);
    for (const service of services) {
      params.push({
        city: city.slug,
        serviceSlug: service.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service || !city.servicesAvailable.includes(service.slug)) {
    return {};
  }

  const pageTitle = `${service.title} in ${city.name}, ${city.state} | Growth Service`;
  const pageDescription = `Top-rated ${service.title.toLowerCase()} in ${city.name}, ${city.state}. Drive targeted traffic and measurable conversions with Growth Service.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/${city.slug}/${service.slug}`,
    },
  };
}

export default async function LocationServicePageRoute({ params }: PageProps) {
  const { city: citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service || !city.servicesAvailable.includes(service.slug)) {
    notFound();
  }

  const serviceSchema = buildServiceSchema(service, city);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Locations', path: '/locations' },
    { label: city.name, path: `/locations/${city.slug}` },
    { label: `${service.title} in ${city.name}`, path: `/${city.slug}/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationServicePageView citySlug={citySlug} serviceSlug={serviceSlug} />
    </>
  );
}
