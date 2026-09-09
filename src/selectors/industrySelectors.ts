import { industriesData, IndustryData } from '../data/industries';
import { citiesData, CityData } from '../data/locations';

/**
 * Returns all 6 vertical industry profiles.
 */
export function getAllIndustries(): readonly IndustryData[] {
  return industriesData;
}

/**
 * Finds an industry by ID.
 */
export function getIndustryById(id: string): IndustryData | undefined {
  const norm = id.toLowerCase();
  return industriesData.find(ind => ind.id.toLowerCase() === norm);
}

/**
 * Finds an industry by Name.
 */
export function getIndustryByName(name: string): IndustryData | undefined {
  const norm = name.toLowerCase();
  return industriesData.find(ind => ind.name.toLowerCase() === norm);
}

/**
 * Returns key industries defined for a city.
 */
export function getIndustriesForCity(cityOrSlug: CityData | string): readonly string[] {
  const city = typeof cityOrSlug === 'string'
    ? citiesData.find(c => c.slug.toLowerCase() === cityOrSlug.toLowerCase())
    : cityOrSlug;

  return city?.keyIndustries ?? [];
}
