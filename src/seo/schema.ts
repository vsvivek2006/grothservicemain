/**
 * Centralized Schema.org Structured Data Generator
 * Generates verified JSON-LD graphs from canonical domain models and business configuration.
 */

import { businessConfig } from '../config/business';
import { physicalOffices, OfficeData } from '../data/offices';
import { ServiceData } from '../data/services';
import { CityData } from '../data/locations';
import { getCanonicalUrl } from './canonical';

/**
 * Builds standard Organization JSON-LD graph.
 */
export function buildOrganizationSchema(): Record<string, unknown> {
  const primaryOffice = physicalOffices.find(o => o.isHeadOffice) || physicalOffices[0];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${businessConfig.canonicalOrigin}/#organization`,
    "name": businessConfig.name,
    "legalName": businessConfig.legalName,
    "url": businessConfig.canonicalOrigin,
    "logo": `${businessConfig.canonicalOrigin}/logo.png`,
    "description": businessConfig.description,
    "email": businessConfig.emails.primary,
    "telephone": businessConfig.phones.indiaPrimary,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": primaryOffice.address,
      "addressLocality": primaryOffice.city,
      "addressCountry": primaryOffice.country === 'Nepal' ? 'NP' : 'IN',
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": businessConfig.phones.indiaPrimary,
        "contactType": "customer service",
        "email": businessConfig.emails.primary,
        "availableLanguage": ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": businessConfig.phones.nepalPrimary,
        "contactType": "customer service",
        "email": businessConfig.emails.nepal,
        "availableLanguage": ["English", "Hindi", "Nepali"],
      }
    ],
    "sameAs": [
      businessConfig.social.facebook,
      businessConfig.social.instagram,
      businessConfig.social.linkedin,
      businessConfig.social.youtube,
    ].filter(Boolean),
  };
}

/**
 * Builds WebSite JSON-LD graph.
 */
export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessConfig.canonicalOrigin}/#website`,
    "url": businessConfig.canonicalOrigin,
    "name": businessConfig.name,
    "description": businessConfig.tagline,
    "publisher": {
      "@id": `${businessConfig.canonicalOrigin}/#organization`,
    },
  };
}

/**
 * Builds BreadcrumbList JSON-LD graph.
 */
export function buildBreadcrumbSchema(items: Array<{ label: string; path?: string }>): Record<string, unknown> {
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": getCanonicalUrl('/'),
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 2,
      "name": item.label,
      ...(item.path ? { "item": getCanonicalUrl(item.path) } : {}),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };
}

/**
 * Builds LocalBusiness JSON-LD graph for a specific physical office.
 */
export function buildLocalBusinessSchema(office: OfficeData): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessConfig.canonicalOrigin}/offices/${office.slug}#office`,
    "name": `${businessConfig.name} - ${office.city} Office`,
    "url": getCanonicalUrl(`/offices/${office.slug}`),
    "telephone": office.phone,
    "email": office.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": office.address,
      "addressLocality": office.city,
      "addressCountry": office.country === 'Nepal' ? 'NP' : 'IN',
    },
    "parentOrganization": {
      "@id": `${businessConfig.canonicalOrigin}/#organization`,
    },
  };
}

/**
 * Builds Service JSON-LD graph.
 */
export function buildServiceSchema(service: ServiceData, city?: CityData): Record<string, unknown> {
  const serviceName = city ? `${service.title} in ${city.name}` : service.title;
  const servicePath = city ? `/${city.slug}/${service.slug}` : service.path;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": service.shortDesc,
    "url": getCanonicalUrl(servicePath),
    "provider": {
      "@id": `${businessConfig.canonicalOrigin}/#organization`,
    },
    ...(city ? { "areaServed": { "@type": "City", "name": city.name } } : {}),
  };
}
