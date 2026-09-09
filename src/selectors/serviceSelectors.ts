import { servicesData, ServiceData, ServiceCategory } from '../data/services';
import { citiesData, CityData } from '../data/locations';

/**
 * Returns all 13 canonical service entities.
 */
export function getAllServices(): readonly ServiceData[] {
  return servicesData;
}

/**
 * Alias for getAllServices.
 */
export const getServices = getAllServices;

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
export function getServicesByCategory(category: ServiceCategory | string): readonly ServiceData[] {
  if (category === 'all') return servicesData;
  return servicesData.filter(s => s.category === category);
}

/**
 * Returns all cities that provide a specific service slug.
 */
export function getServiceCities(serviceSlug: string): readonly CityData[] {
  const norm = serviceSlug.toLowerCase();
  return citiesData.filter(c => c.servicesAvailable.includes(norm));
}

/**
 * Alias for getServiceCities.
 */
export const getCitiesForService = getServiceCities;
