import { regionsData, citiesData, RegionData, CityData, LocationData } from '../data/locations';
import { OfficeData } from '../data/offices';
import { servicesData, ServiceData } from '../data/services';
import { getOfficeById } from './officeSelectors';

/**
 * Helper to resolve city object from CityData or slug string.
 */
function resolveCity(cityOrSlug: CityData | string | undefined): CityData | undefined {
  if (!cityOrSlug) return undefined;
  if (typeof cityOrSlug === 'object') return cityOrSlug;
  const norm = cityOrSlug.toLowerCase();
  if (norm === 'panaji') return citiesData.find(c => c.slug === 'goa');
  return citiesData.find(c => c.slug.toLowerCase() === norm);
}

/**
 * Returns all 9 regions.
 */
export function getAllRegions(): readonly RegionData[] {
  return regionsData;
}

/**
 * Finds a region by its slug.
 */
export function getRegionBySlug(slug: string): RegionData | undefined {
  const norm = slug.toLowerCase();
  return regionsData.find(r => r.slug.toLowerCase() === norm);
}

/**
 * Returns all 24 cities.
 */
export function getAllCities(): readonly CityData[] {
  return citiesData;
}

/**
 * Alias for all locations.
 */
export function getAllLocations(): readonly LocationData[] {
  return citiesData;
}

/**
 * Finds a city by its slug (normalizes aliases like panaji -> goa).
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return resolveCity(slug);
}

/**
 * Resolves the parent region for a city.
 */
export function getRegionForCity(cityOrSlug: CityData | string): RegionData | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city) return undefined;
  return getRegionBySlug(city.regionSlug);
}

/**
 * Returns all cities situated in a specific region.
 */
export function getCitiesByRegion(regionSlug: string): readonly CityData[] {
  const norm = regionSlug.toLowerCase();
  return citiesData.filter(c => c.regionSlug.toLowerCase() === norm);
}

/**
 * Returns cities hosting a verified physical office.
 */
export function getPhysicalOfficeCities(): readonly CityData[] {
  return citiesData.filter(c => c.isPhysicalOffice);
}

/**
 * Returns expansion market cities served through regional offices.
 */
export function getExpansionCities(): readonly CityData[] {
  return citiesData.filter(c => !c.isPhysicalOffice);
}

/**
 * Resolves the physical OfficeData entity associated with a city (if any).
 */
export function getOfficeForCity(cityOrSlug: CityData | string): OfficeData | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city?.officeId) return undefined;
  return getOfficeById(city.officeId);
}

/**
 * Alias for getOfficeForCity.
 */
export function getCityOffice(cityOrSlug: CityData | string): OfficeData | undefined {
  return getOfficeForCity(cityOrSlug);
}

/**
 * Returns the canonical phone for a city (physical office phone, or regional serving office phone, or primary line).
 */
export function getCityPhone(cityOrSlug: CityData | string): string {
  const city = resolveCity(cityOrSlug);
  if (!city) return '+91 93414 36937';

  if (city.officeId) {
    const office = getOfficeById(city.officeId);
    if (office) return office.phone;
  }
  if (city.servingOfficeId) {
    const servingOffice = getOfficeById(city.servingOfficeId);
    if (servingOffice) return servingOffice.phone;
  }
  return '+91 93414 36937';
}

/**
 * Returns the canonical email for a city (physical office email, or regional serving office email, or primary email).
 */
export function getCityEmail(cityOrSlug: CityData | string): string {
  const city = resolveCity(cityOrSlug);
  if (!city) return 'info@growthservice.in';

  if (city.officeId) {
    const office = getOfficeById(city.officeId);
    if (office) return office.email;
  }
  if (city.servingOfficeId) {
    const servingOffice = getOfficeById(city.servingOfficeId);
    if (servingOffice) return servingOffice.email;
  }
  return 'info@growthservice.in';
}

/**
 * Resolves physical office address if present.
 */
export function getCityAddress(cityOrSlug: CityData | string): string | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city?.officeId) return undefined;
  return getOfficeById(city.officeId)?.address;
}

/**
 * Resolves physical office landmark if present.
 */
export function getCityLandmark(cityOrSlug: CityData | string): string | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city?.officeId) return undefined;
  return getOfficeById(city.officeId)?.landmark;
}

/**
 * Resolves physical office postal code if present.
 */
export function getCityPostalCode(cityOrSlug: CityData | string): string | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city?.officeId) return undefined;
  return getOfficeById(city.officeId)?.postalCode;
}

/**
 * Resolves physical office map link if present.
 */
export function getCityMapLink(cityOrSlug: CityData | string): string | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city?.officeId) return undefined;
  return getOfficeById(city.officeId)?.mapLink;
}

/**
 * Resolves physical office operating hours if present.
 */
export function getCityTimings(cityOrSlug: CityData | string): string | undefined {
  const city = resolveCity(cityOrSlug);
  if (!city?.officeId) return undefined;
  return getOfficeById(city.officeId)?.timings;
}

/**
 * Resolves the full ServiceData objects for the services available in a city.
 */
export function getServicesForCity(cityOrSlug: CityData | string): readonly ServiceData[] {
  const city = resolveCity(cityOrSlug);
  if (!city) return [];
  const slugSet = new Set(city.servicesAvailable);
  return servicesData.filter(s => slugSet.has(s.slug));
}

/**
 * Alias for getServicesForCity.
 */
export const getAvailableServicesForCity = getServicesForCity;

/**
 * Checks if a canonical service is available in a city.
 */
export function isServiceAvailableInCity(citySlug: string, serviceSlug: string): boolean {
  const city = getCityBySlug(citySlug);
  if (!city) return false;
  return city.servicesAvailable.includes(serviceSlug);
}

/**
 * Returns all cities that provide a specific service.
 */
export function getCitiesForService(serviceSlug: string): readonly CityData[] {
  return citiesData.filter(c => c.servicesAvailable.includes(serviceSlug));
}
