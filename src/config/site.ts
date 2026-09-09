/**
 * Growth Service Unified Site Configuration Facade
 * Provides a clean application-level facade over canonical master data,
 * routes, navigation, and typed domain selectors without duplicating state.
 */

import { businessConfig, BusinessConfigSchema } from './business';
import { navigationConfig } from './navigation';
import { APP_ROUTES, AppRoute, getSitemapRoutes, getRouteAliases } from './routes';
import { physicalOffices, OfficeData } from '../data/offices';
import { servicesData, ServiceData } from '../data/services';
import { commercialPackages, CommercialPackage } from '../data/packages';
import { teamMembers, TeamMember } from '../data/team';
import { regionsData, citiesData, RegionData, CityData } from '../data/locations';
import { industriesData, IndustryData } from '../data/industries';

import * as selectors from '../selectors';

export interface SiteConfigSchema {
  readonly business: BusinessConfigSchema;
  readonly navigation: typeof navigationConfig;
  readonly routes: Record<string, AppRoute>;
  readonly offices: readonly OfficeData[];
  readonly services: readonly ServiceData[];
  readonly packages: readonly CommercialPackage[];
  readonly team: readonly TeamMember[];
  readonly locations: {
    readonly regions: readonly RegionData[];
    readonly cities: readonly CityData[];
  };
  readonly industries: readonly IndustryData[];
}

export const siteConfig: SiteConfigSchema = {
  business: businessConfig,
  navigation: navigationConfig,
  routes: APP_ROUTES,
  offices: physicalOffices,
  services: servicesData,
  packages: commercialPackages,
  team: teamMembers,
  locations: {
    regions: regionsData,
    cities: citiesData,
  },
  industries: industriesData,
} as const;

export {
  businessConfig,
  navigationConfig,
  APP_ROUTES,
  getSitemapRoutes,
  getRouteAliases,
  physicalOffices,
  servicesData,
  commercialPackages,
  teamMembers,
  regionsData,
  citiesData,
  industriesData,
  selectors,
};

// Re-export selectors directly for top-level convenience
export * from '../selectors';

export default siteConfig;
