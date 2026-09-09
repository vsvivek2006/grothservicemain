import { regionsData, citiesData, RegionData, CityData, LocationData } from '../data/locations';
import { OfficeData } from '../data/offices';
import { servicesData, ServiceData } from '../data/services';
import { getOfficeById } from './officeSelectors';

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
  const norm = slug.toLowerCase();
  if (norm === 'panaji') {
    return citiesData.find(c => c.slug === 'goa');
  }
  return citiesData.find(c => c.slug.toLowerCase() === norm);
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
export function getOfficeForCity(city: CityData): OfficeData | undefined {
  if (!city.officeId) return undefined;
  return getOfficeById(city.officeId);
}

/**
 * Alias for getOfficeForCity.
 */
export function getCityOffice(city: CityData): OfficeData | undefined {
  return getOfficeForCity(city);
}

/**
 * Returns the canonical phone for a city (physical office phone, or regional serving office phone, or primary line).
 */
export function getCityPhone(city: CityData): string {
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
export function getCityEmail(city: CityData): string {
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
export function getCityAddress(city: CityData): string | undefined {
  if (city.officeId) {
    return getOfficeById(city.officeId)?.address;
  }
  return undefined;
}

/**
 * Resolves physical office landmark if present.
 */
export function getCityLandmark(city: CityData): string | undefined {
  if (city.officeId) {
    return getOfficeById(city.officeId)?.landmark;
  }
  return undefined;
}

/**
 * Resolves physical office postal code if present.
 */
export function getCityPostalCode(city: CityData): string | undefined {
  if (city.officeId) {
    return getOfficeById(city.officeId)?.postalCode;
  }
  return undefined;
}

/**
 * Resolves physical office map link if present.
 */
export function getCityMapLink(city: CityData): string | undefined {
  if (city.officeId) {
    return getOfficeById(city.officeId)?.mapLink;
  }
  return undefined;
}

/**
 * Resolves physical office operating hours if present.
 */
export function getCityTimings(city: CityData): string | undefined {
  if (city.officeId) {
    return getOfficeById(city.officeId)?.timings;
  }
  return undefined;
}

/**
 * Resolves the full ServiceData objects for the services available in a city.
 */
export function getServicesForCity(city: CityData): readonly ServiceData[] {
  const slugSet = new Set(city.servicesAvailable);
  return servicesData.filter(s => slugSet.has(s.slug));
}

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
