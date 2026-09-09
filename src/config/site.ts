/**
 * Growth Service Unified Site Configuration
 * Aggregates all central schemas into a single, cohesive source of truth.
 */

import { businessConfig, BusinessConfigSchema } from './business';
import { navigationConfig } from './navigation';
import { APP_ROUTES, AppRoute, getSitemapRoutes, getRouteAliases } from './routes';
import { physicalOffices, OfficeData, getOfficeById, getOfficeBySlug } from '../data/offices';
import { servicesData, ServiceData, getServiceBySlug } from '../data/services';
import { teamMembers, TeamMember, getAllTeamMembers, getTeamMembersByOffice } from '../data/team';
import { regionsData, citiesData } from '../data/locations';

export interface SiteConfigSchema {
  readonly business: BusinessConfigSchema;
  readonly navigation: typeof navigationConfig;
  readonly routes: Record<string, AppRoute>;
  readonly offices: readonly OfficeData[];
  readonly services: readonly ServiceData[];
  readonly team: readonly TeamMember[];
  readonly locations: {
    readonly regions: typeof regionsData;
    readonly cities: typeof citiesData;
  };
}

export const siteConfig: SiteConfigSchema = {
  business: businessConfig,
  navigation: navigationConfig,
  routes: APP_ROUTES,
  offices: physicalOffices,
  services: servicesData,
  team: teamMembers,
  locations: {
    regions: regionsData,
    cities: citiesData,
  },
} as const;

export {
  businessConfig,
  navigationConfig,
  APP_ROUTES,
  getSitemapRoutes,
  getRouteAliases,
  physicalOffices,
  getOfficeById,
  getOfficeBySlug,
  servicesData,
  getServiceBySlug,
  teamMembers,
  getAllTeamMembers,
  getTeamMembersByOffice,
  regionsData,
  citiesData,
};

export default siteConfig;
