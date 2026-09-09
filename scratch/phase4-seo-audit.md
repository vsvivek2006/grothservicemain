# Phase 4 SEO Centralization & Hardcoded Facts Audit

**Target Branch**: `staging`  
**Phase**: Phase 4 — Routing + Technical SEO + Sitemap + Metadata Architecture  
**Date**: September 2026  

---

## 1. Executive Summary

This audit catalogs all SEO-related facts across the Growth Service codebase, classifying hardcoded values and verifying their integration with the single-source-of-truth architecture established in Phases 1–4.

### Classification Taxonomy:
1. **Canonical & Intentionally Static**: Legitimate fallback/root values (e.g. root canonical domain in central config, default meta titles, standard HTTP status fallbacks).
2. **Presentation-Only**: Component copy, CTA headings, formatting strings that do not pollute SEO/metadata or structured data schemas.
3. **Should Be Centralized / Centralized in Phase 4**: Facts migrated to `src/config/business.ts`, `src/routing/`, or `src/seo/`.
4. **Unresolved Factual Conflict**: Discrepancies between historical strings and canonical configuration.

---

## 2. Hardcoded Fact Catalog & Classification

### A. Domain & Canonical Origin
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| `https://www.growthservice.in` | `src/config/business.ts` (`siteUrl`) | **1. Canonical & Intentionally Static** | Master source of truth. |
| `https://www.growthservice.in` | `src/seo/canonical.ts`, `public/robots.txt` | **1. Canonical & Intentionally Static** | Standard SEO references matching canonical domain. |
| `https://growthservice.in` (Apex) | Formerly in `index.html`, `About.tsx`, `SEOService.tsx`, `Offer.tsx`, etc. | **3. Centralized in Phase 4** | **ELIMINATED**. Replaced across 14 locations with `getCanonicalUrl()` or `SITE_CONFIG.siteUrl`. |
| `https://www.growthservice.in` in `vercel.json` | `vercel.json` redirect targets | **1. Canonical & Intentionally Static** | Edge-level 308 redirects require static destination targets. |

### B. Canonical URLs
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| Handcrafted canonical strings | Page components (`<link rel="canonical">`) | **3. Centralized in Phase 4** | Replaced with `SEOHead` and `buildCanonicalUrl(path)`. |
| Route builders | `src/routing/route-builders.ts` | **1. Canonical & Intentionally Static** | Single point of URL derivation for all pages. |

### C. Phone Numbers
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| `+91 97722 05244` | `src/config/business.ts` (`phone.primary`) | **1. Canonical & Intentionally Static** | Authoritative primary contact. |
| `+91 97722 05244` | `src/data/offices.ts` | **1. Canonical & Intentionally Static** | Office-specific contact mapping. |
| Office-specific phone numbers | `src/data/offices.ts` | **1. Canonical & Intentionally Static** | Centralized office dataset. |
| Tel anchor links (`tel:...`) | Headers, Footers, Contact components | **3. Centralized in Phase 4** | Derived from `BUSINESS_CONFIG.contact.phone.primary`. |

### D. Email Addresses
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| `growthservice01@gmail.com` | `src/config/business.ts` (`email.primary`) | **1. Canonical & Intentionally Static** | Authoritative operational email. |
| `support@growthservice.in` | `src/config/business.ts` (`email.support`) | **1. Canonical & Intentionally Static** | Domain-bound support mailbox. |
| Static mailto strings in legacy copy | Privacy, Terms, Verification modals | **2. Presentation-Only** | Matches canonical `support@growthservice.in`. |

### E. Social URLs
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| LinkedIn, Instagram, Twitter, Facebook profiles | `src/config/business.ts` (`socialLinks`) | **1. Canonical & Intentionally Static** | Authoritative social dictionary. Consumed by `buildOrganizationSchema()`. |

### F. Organization Name & Branding
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| `Growth Service` | `src/config/business.ts` (`name`, `legalName`) | **1. Canonical & Intentionally Static** | Master brand name. |
| `GrowthService` (no space) | Formerly in `index.html` title | **3. Centralized in Phase 4** | Corrected to `Growth Service` in `index.html` shell. |
| `Growth Service Digital Solutions Pvt Ltd` | Historical artifacts / audit notes | **4. Unresolved Factual Conflict** | Codebase canonical source uses `Growth Service`. No legal certificate or corporate entity registration was provided in repo for `Pvt Ltd`. Kept `Growth Service` as canonical per Step 21 instruction ("Do not invent company facts"). |

### G. Office Addresses
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| Registered Jaipur Office | `src/data/offices.ts` | **1. Canonical & Intentionally Static** | Official HQ address. |
| Secondary Offices (Gurgaon, Noida, etc.) | `src/data/offices.ts` | **1. Canonical & Intentionally Static** | Managed in centralized office records with geo coordinates. |
| Raw address strings in pages | OfficeDetailPage, LocationServicePage | **3. Centralized in Phase 4** | Rendered strictly from `OFFICES` array in `src/data/offices.ts`. |

### H. Route Paths & Nav Links
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| Canonical path definitions | `src/routing/route-registry.ts` | **1. Canonical & Intentionally Static** | Authoritative route list (48 routes). |
| Static href paths | `src/config/navigation.ts` | **1. Canonical & Intentionally Static** | Validated against `isValidCanonicalRoute()`. |
| Dynamic route paths | `src/routing/route-builders.ts` | **1. Canonical & Intentionally Static** | Generated programmatically via `buildCityPath`, `buildServicePath`, etc. |

### I. Breadcrumb Paths
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| Page-level breadcrumbs | `Breadcrumb.tsx` | **3. Centralized in Phase 4** | Generates valid JSON-LD using `buildBreadcrumbSchema()` and canonical route URLs. |

### J. Sitemap Path Generation
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| Static & dynamic URL extraction | `scratch/generate_sitemap.js` | **3. Centralized in Phase 4** | Consumes `getSitemapRoutes()`, `OFFICES`, `CITY_LOCATIONS`, `CORE_SERVICES`. Excludes aliases and noindex pages. Omits fabricated `<lastmod>`. |

### K. Structured Data / JSON-LD Facts
| Item / Value | Location(s) | Classification | Status & Resolution |
|---|---|---|---|
| Organization Schema | `src/seo/schema.ts` | **3. Centralized in Phase 4** | Consumes `BUSINESS_CONFIG`. |
| WebSite Schema | `src/seo/schema.ts` | **3. Centralized in Phase 4** | Consumes `BUSINESS_CONFIG.siteUrl`. |
| LocalBusiness Schema | `src/seo/schema.ts` | **3. Centralized in Phase 4** | Consumes `Office` entity from `src/data/offices.ts`. Only rendered on legitimate office detail pages. |
| Service Schema | `src/seo/schema.ts` | **3. Centralized in Phase 4** | Consumes `CORE_SERVICES` and location/service context. No fake reviews/ratings. |

---

## 3. Summary of Unresolved Factual Conflicts

1. **Corporate Legal Entity Suffix**:
   - Historical code had instances of `Growth Service Digital Solutions Pvt Ltd`.
   - Canonical `src/config/business.ts` explicitly defines `name: "Growth Service"` and `legalName: "Growth Service"`.
   - **Decision**: Adhere strictly to rule "Do not invent company facts". Used `Growth Service` uniformly across all metadata, JSON-LD, and headers.
