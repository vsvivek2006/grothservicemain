/**
 * Growth Service Central Route Registry
 * Single authoritative source of truth for canonical paths, labels, categories,
 * sitemap configurations, and redirect aliases.
 */

import { AppRoute, RouteAlias } from './route-types';
import { normalizePath } from './route-normalization';

export const APP_ROUTES: Record<string, AppRoute> = {
  // Primary Core Pages
  home: {
    path: "/",
    canonical: "/",
    label: "Home",
    category: "primary",
    includeInSitemap: true,
    priority: 1.0,
    changefreq: "daily",
    kind: "static",
  },
  about: {
    path: "/about",
    canonical: "/about",
    label: "About Us",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "daily",
    kind: "static",
  },
  services: {
    path: "/services",
    canonical: "/services",
    label: "All Services",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    kind: "static",
  },
  portfolio: {
    path: "/portfolio",
    canonical: "/portfolio",
    label: "Portfolio",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  pricing: {
    path: "/pricing",
    canonical: "/pricing",
    label: "Pricing",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  packages: {
    path: "/packages",
    canonical: "/packages",
    label: "Packages",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    kind: "static",
  },
  contact: {
    path: "/contact",
    canonical: "/contact",
    label: "Contact Us",
    category: "primary",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    kind: "static",
  },
  bookCall: {
    path: "/book-call",
    canonical: "/book-call",
    label: "Book a Call",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    aliases: ["/consultation"],
    kind: "static",
  },
  freeAudit: {
    path: "/free-audit",
    canonical: "/free-audit",
    label: "Free Audit",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    kind: "static",
  },
  blog: {
    path: "/blog",
    canonical: "/blog",
    label: "Blog",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  impact: {
    path: "/impact",
    canonical: "/impact",
    label: "Our Impact",
    category: "primary",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    kind: "static",
  },
  growthServices: {
    path: "/growth-services",
    canonical: "/growth-services",
    label: "Growth Services",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  offer: {
    path: "/offer",
    canonical: "/offer",
    label: "Growth Offer",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },

  // Digital Marketing Suite
  digitalMarketing: {
    path: "/digital-marketing",
    canonical: "/digital-marketing",
    label: "Digital Marketing",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    aliases: ["/email-marketing"],
    kind: "static",
  },
  seo: {
    path: "/seo",
    canonical: "/seo",
    label: "SEO Services",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    kind: "static",
  },
  socialMedia: {
    path: "/social-media",
    canonical: "/social-media",
    label: "Social Media Management",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  paidMarketing: {
    path: "/paid-marketing",
    canonical: "/paid-marketing",
    label: "Meta & Performance Ads",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  localSeo: {
    path: "/local-seo",
    canonical: "/local-seo",
    label: "Google Business Profile (Local SEO)",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  contentMarketing: {
    path: "/content-marketing",
    canonical: "/content-marketing",
    label: "Content Marketing",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  leadGeneration: {
    path: "/lead-generation",
    canonical: "/lead-generation",
    label: "Lead Generation",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  branding: {
    path: "/branding",
    canonical: "/branding",
    label: "Brand Strategy",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "weekly",
    kind: "static",
  },

  // Design & Development Suite
  designDevelopment: {
    path: "/design-development",
    canonical: "/design-development",
    label: "Design & Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    kind: "static",
  },
  webDevelopment: {
    path: "/web-development",
    canonical: "/web-development",
    label: "Website Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    aliases: ["/website-development"],
    kind: "static",
  },
  uiUxDesign: {
    path: "/ui-ux-design",
    canonical: "/ui-ux-design",
    label: "UI/UX Design",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    aliases: ["/ui-ux"],
    kind: "static",
  },
  wordpressDevelopment: {
    path: "/wordpress-development",
    canonical: "/wordpress-development",
    label: "WordPress Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    kind: "static",
  },
  ecommerce: {
    path: "/ecommerce",
    canonical: "/ecommerce",
    label: "E-commerce Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    aliases: ["/ecommerce-development"],
    kind: "static",
  },
  appDevelopment: {
    path: "/app-development",
    canonical: "/app-development",
    label: "Mobile App Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    kind: "static",
  },

  // White Label Suite
  whiteLabel: {
    path: "/white-label",
    canonical: "/white-label",
    label: "White Label Agency",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    aliases: ["/whitelabel"],
    kind: "static",
  },
  whiteLabelSeo: {
    path: "/white-label-seo",
    canonical: "/white-label-seo",
    label: "White Label SEO",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    kind: "static",
  },
  whiteLabelPpc: {
    path: "/white-label-ppc",
    canonical: "/white-label-ppc",
    label: "White Label PPC",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    kind: "static",
  },
  whiteLabelSmo: {
    path: "/white-label-smo",
    canonical: "/white-label-smo",
    label: "White Label Social Media",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    kind: "static",
  },
  whiteLabelWeb: {
    path: "/white-label-web",
    canonical: "/white-label-web",
    label: "White Label Web Development",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    kind: "static",
  },

  // Locations & Offices
  locationsHub: {
    path: "/locations",
    canonical: "/locations",
    label: "Locations Directory",
    category: "locations",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
    aliases: ["/sitemap"],
    kind: "static",
  },
  officesHub: {
    path: "/offices",
    canonical: "/offices",
    label: "Company Offices",
    category: "offices",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
    kind: "static",
  },
  team: {
    path: "/team",
    canonical: "/team",
    label: "Meet The Team",
    category: "primary",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    aliases: ["/careers", "/about/team"],
    kind: "static",
  },

  // Resources & Proof
  resources: {
    path: "/resources",
    canonical: "/resources",
    label: "Resources & Guides",
    category: "resources",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    aliases: ["/webinars"],
    kind: "static",
  },
  caseStudies: {
    path: "/case-studies",
    canonical: "/case-studies",
    label: "Case Studies",
    category: "resources",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
    aliases: ["/success-stories"],
    kind: "static",
  },
  testimonials: {
    path: "/testimonials",
    canonical: "/testimonials",
    label: "Client Testimonials",
    category: "resources",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    kind: "static",
  },
  helpCenter: {
    path: "/help-center",
    canonical: "/help-center",
    label: "Help Center",
    category: "resources",
    includeInSitemap: true,
    priority: 0.6,
    changefreq: "monthly",
    kind: "static",
  },
  faq: {
    path: "/faq",
    canonical: "/faq",
    label: "FAQs",
    category: "resources",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    kind: "static",
  },

  // Security & Verification
  verify: {
    path: "/verify",
    canonical: "/verify",
    label: "Trust & Verification",
    category: "company",
    includeInSitemap: true,
    priority: 0.5,
    changefreq: "monthly",
    aliases: ["/scam-alert", "/report-scam"],
    kind: "static",
  },

  // Legal & Compliance
  terms: {
    path: "/terms",
    canonical: "/terms",
    label: "Terms & Conditions",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    kind: "static",
  },
  privacy: {
    path: "/privacy",
    canonical: "/privacy",
    label: "Privacy Policy",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    kind: "static",
  },
  refund: {
    path: "/refund",
    canonical: "/refund",
    label: "Refund Policy",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    kind: "static",
  },
  accessibility: {
    path: "/accessibility",
    canonical: "/accessibility",
    label: "Accessibility Statement",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    kind: "static",
  },
  onboardingAgreement: {
    path: "/onboarding-agreement",
    canonical: "/onboarding-agreement",
    label: "Onboarding Agreement",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    kind: "static",
  },
};

/**
 * Returns a list of all canonical routes intended for inclusion in the XML sitemap.
 */
export function getSitemapRoutes(): AppRoute[] {
  return Object.values(APP_ROUTES).filter(r => r.includeInSitemap);
}

/**
 * Returns a list of all alias -> canonical mappings.
 */
export function getRouteAliases(): RouteAlias[] {
  const aliases: RouteAlias[] = [];
  for (const route of Object.values(APP_ROUTES)) {
    if (route.aliases) {
      for (const alias of route.aliases) {
        aliases.push({
          from: normalizePath(alias),
          to: route.canonical,
          permanent: true,
        });
      }
    }
  }
  return aliases;
}

/**
 * Looks up a registered route configuration by path (supports raw or normalized paths).
 */
export function findRouteByPath(rawPath: string): AppRoute | undefined {
  const normalized = normalizePath(rawPath);
  return Object.values(APP_ROUTES).find(r => r.path === normalized || r.canonical === normalized);
}

/**
 * Checks if a given raw path is a registered static canonical route.
 */
export function isRegisteredStaticPath(rawPath: string): boolean {
  return findRouteByPath(rawPath) !== undefined;
}
