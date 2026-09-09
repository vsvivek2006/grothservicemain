import { servicesData, ServiceData, ServiceSlug, ServiceCategory } from '../data/services';
import { commercialPackages, CommercialPackage, PackageCategory } from '../data/packages';
import { citiesData, CityData } from '../data/locations';

/**
 * Returns all 13 canonical service entities.
 */
export function getAllServices(): readonly ServiceData[] {
  return servicesData;
}

/**
 * Finds a service by its slug.
 */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  const norm = slug.toLowerCase();
  return servicesData.find(s => s.slug.toLowerCase() === norm);
}

/**
 * Filters services by primary category.
 */
export function getServicesByCategory(category: ServiceCategory): readonly ServiceData[] {
  return servicesData.filter(s => s.category === category);
}

/**
 * Returns all commercial package offerings.
 */
export function getAllPackages(): readonly CommercialPackage[] {
  return commercialPackages;
}

/**
 * Finds a commercial package by its ID.
 */
export function getPackageById(id: number): CommercialPackage | undefined {
  return commercialPackages.find(p => p.id === id);
}

/**
 * Filters commercial packages by category.
 */
export function getPackagesByCategory(category: string): readonly CommercialPackage[] {
  if (category === 'all') return commercialPackages;
  return commercialPackages.filter(p => p.category === category as PackageCategory);
}

/**
 * Returns commercial packages mapped to a canonical service slug.
 */
export function getPackagesForService(serviceSlug: string): readonly CommercialPackage[] {
  const norm = serviceSlug.toLowerCase();
  return commercialPackages.filter(p => p.serviceSlugs.includes(norm));
}

/**
 * Returns all cities that provide a specific service slug.
 */
export function getServiceCities(serviceSlug: string): readonly CityData[] {
  const norm = serviceSlug.toLowerCase();
  return citiesData.filter(c => c.servicesAvailable.includes(norm));
}
