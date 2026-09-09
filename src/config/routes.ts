/**
 * Growth Service Central Route Registry
 * Defines canonical paths, labels, categories, sitemap attributes, and aliases.
 */

export interface AppRoute {
  path: string;
  canonical: string;
  label: string;
  category: 'primary' | 'services-digital' | 'services-dev' | 'services-whitelabel' | 'locations' | 'offices' | 'resources' | 'legal' | 'hidden';
  includeInSitemap: boolean;
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  aliases?: string[];
}

export const APP_ROUTES: Record<string, AppRoute> = {
  home: {
    path: "/",
    canonical: "/",
    label: "Home",
    category: "primary",
    includeInSitemap: true,
    priority: 1.0,
    changefreq: "daily",
  },
  about: {
    path: "/about",
    canonical: "/about",
    label: "About Us",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "daily",
  },
  services: {
    path: "/services",
    canonical: "/services",
    label: "All Services",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
  },
  portfolio: {
    path: "/portfolio",
    canonical: "/portfolio",
    label: "Portfolio",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  pricing: {
    path: "/pricing",
    canonical: "/pricing",
    label: "Pricing",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  packages: {
    path: "/packages",
    canonical: "/packages",
    label: "Packages",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
  },
  contact: {
    path: "/contact",
    canonical: "/contact",
    label: "Contact Us",
    category: "primary",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
    aliases: ["/verify", "/report-scam"],
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
  },
  freeAudit: {
    path: "/free-audit",
    canonical: "/free-audit",
    label: "Free Audit",
    category: "primary",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
  },
  blog: {
    path: "/blog",
    canonical: "/blog",
    label: "Blog",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  impact: {
    path: "/impact",
    canonical: "/impact",
    label: "Our Impact",
    category: "primary",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
  },
  growthServices: {
    path: "/growth-services",
    canonical: "/growth-services",
    label: "Growth Services",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  offer: {
    path: "/offer",
    canonical: "/offer",
    label: "Growth Offer",
    category: "primary",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
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
  },
  seo: {
    path: "/seo",
    canonical: "/seo",
    label: "SEO Services",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.9,
    changefreq: "weekly",
  },
  socialMedia: {
    path: "/social-media",
    canonical: "/social-media",
    label: "Social Media Management",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  paidMarketing: {
    path: "/paid-marketing",
    canonical: "/paid-marketing",
    label: "Meta & Performance Ads",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  localSeo: {
    path: "/local-seo",
    canonical: "/local-seo",
    label: "Google Business Profile (Local SEO)",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  contentMarketing: {
    path: "/content-marketing",
    canonical: "/content-marketing",
    label: "Content Marketing",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  leadGeneration: {
    path: "/lead-generation",
    canonical: "/lead-generation",
    label: "Lead Generation",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "weekly",
  },
  branding: {
    path: "/branding",
    canonical: "/branding",
    label: "Brand Strategy",
    category: "services-digital",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "weekly",
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
  },
  wordpressDevelopment: {
    path: "/wordpress-development",
    canonical: "/wordpress-development",
    label: "WordPress Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
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
  },
  appDevelopment: {
    path: "/app-development",
    canonical: "/app-development",
    label: "Mobile App Development",
    category: "services-dev",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
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
  },
  whiteLabelSeo: {
    path: "/white-label-seo",
    canonical: "/white-label-seo",
    label: "White Label SEO",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
  },
  whiteLabelPpc: {
    path: "/white-label-ppc",
    canonical: "/white-label-ppc",
    label: "White Label PPC",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
  },
  whiteLabelSmo: {
    path: "/white-label-smo",
    canonical: "/white-label-smo",
    label: "White Label Social Media",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
  },
  whiteLabelWeb: {
    path: "/white-label-web",
    canonical: "/white-label-web",
    label: "White Label Web Development",
    category: "services-whitelabel",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
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
  },
  officesHub: {
    path: "/offices",
    canonical: "/offices",
    label: "Company Offices",
    category: "offices",
    includeInSitemap: true,
    priority: 0.8,
    changefreq: "monthly",
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
  },
  testimonials: {
    path: "/testimonials",
    canonical: "/testimonials",
    label: "Client Testimonials",
    category: "resources",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
  },
  helpCenter: {
    path: "/help-center",
    canonical: "/help-center",
    label: "Help Center",
    category: "resources",
    includeInSitemap: true,
    priority: 0.6,
    changefreq: "monthly",
    aliases: ["/scam-alert"],
  },
  faq: {
    path: "/faq",
    canonical: "/faq",
    label: "FAQs",
    category: "resources",
    includeInSitemap: true,
    priority: 0.7,
    changefreq: "monthly",
  },

  // Legal
  terms: {
    path: "/terms",
    canonical: "/terms",
    label: "Terms & Conditions",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    aliases: ["/accessibility"],
  },
  privacy: {
    path: "/privacy",
    canonical: "/privacy",
    label: "Privacy Policy",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
    aliases: ["/refund"],
  },
  onboardingAgreement: {
    path: "/onboarding-agreement",
    canonical: "/onboarding-agreement",
    label: "Onboarding Agreement",
    category: "legal",
    includeInSitemap: true,
    priority: 0.4,
    changefreq: "yearly",
  },

  // Non-Indexable Flow Pages
  paymentSuccess: {
    path: "/payment/success",
    canonical: "/payment/success",
    label: "Payment Successful",
    category: "hidden",
    includeInSitemap: false,
  },
  paymentFailed: {
    path: "/payment/failed",
    canonical: "/payment/failed",
    label: "Payment Failed",
    category: "hidden",
    includeInSitemap: false,
  },
};

/**
 * Returns a list of all canonical routes intended for inclusion in the XML sitemap.
 */
export function getSitemapRoutes(): AppRoute[] {
  return Object.values(APP_ROUTES).filter(r => r.includeInSitemap);
}

/**
 * Returns map of all redirect aliases -> canonical paths.
 */
export function getRouteAliases(): Array<{ from: string; to: string }> {
  const aliases: Array<{ from: string; to: string }> = [];
  for (const route of Object.values(APP_ROUTES)) {
    if (route.aliases) {
      for (const alias of route.aliases) {
        aliases.push({ from: alias, to: route.canonical });
      }
    }
  }
  return aliases;
}
