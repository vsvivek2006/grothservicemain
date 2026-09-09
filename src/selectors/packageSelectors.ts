import { commercialPackages, CommercialPackage, PackageCategory } from '../data/packages';

/**
 * Returns all 10 verified commercial packages.
 */
export function getAllPackages(): readonly CommercialPackage[] {
  return commercialPackages;
}

/**
 * Finds a package by numeric ID.
 */
export function getPackageById(id: number): CommercialPackage | undefined {
  return commercialPackages.find(p => p.id === id);
}

/**
 * Filters packages by category.
 */
export function getPackagesByCategory(category: string): readonly CommercialPackage[] {
  if (category === 'all') return commercialPackages;
  return commercialPackages.filter(p => p.category === category as PackageCategory);
}

/**
 * Resolves commercial package offerings mapped to a canonical service slug.
 */
export function getPackagesForService(serviceSlug: string): readonly CommercialPackage[] {
  const norm = serviceSlug.toLowerCase();
  return commercialPackages.filter(p => p.serviceSlugs.includes(norm));
}

/**
 * Returns prominent/featured packages (top packages for homepage & solutions grid).
 */
export function getFeaturedPackages(): readonly CommercialPackage[] {
  return commercialPackages.slice(0, 6);
}
