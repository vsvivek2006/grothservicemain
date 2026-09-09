# Phase 1: Data Ownership, Normalization & Single Source of Truth Architecture

**Project**: Growth Service (https://www.growthservice.in/)  
**Repository**: https://github.com/vsvivek2006/grothservicemain  
**Branch**: `staging`  
**Status**: Architecture Documented & Verified  
**Date**: September 2026  

---

## 1. Executive Summary

This document defines the production domain data architecture and single-source-of-truth rules established in Phase 1 on the `staging` branch.

Prior to this phase, factual entities (corporate addresses, phone lines, WhatsApp endpoints, employee assignments, and commercial packages) were fragmented across multiple pages, local arrays, and inline literals. Phase 1 establishes the rule:

> **ONE FACT = ONE OWNER**

All entities now reside in dedicated domain files (`src/data/` and `src/config/business.ts`), relationships are normalized with foreign keys (rather than copied facts), and consumers access data through pure, typed selectors (`src/selectors/`) or the unified site configuration facade (`src/config/site.ts`).

---

## 2. Entity Relationship Diagram

```text
┌────────────────────────────────────────────────────────┐
│               BusinessConfig (Company Brand)           │
│   (src/config/business.ts: Name, Legal, Social, Phone) │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────────┐ ┌───────────────────────────┐
│     Physical Offices      │ │     Canonical Services    │
│    (src/data/offices.ts)  │ │   (src/data/services.ts)  │
│  [jaipur, vrindavan,      │ │   (13 Core Capabilities)  │
│   nepal]                  │ └─────────────┬─────────────┘
└─────────────┬─────────────┘               │
              │                             │
       ┌──────┴──────┐                      │ serviceSlugs[]
       ▼             ▼                      ▼
┌──────────────┐ ┌──────────────┐ ┌───────────────────────────┐
│  Employees   │ │    Cities    │ │    Commercial Packages    │
│ (data/team)  │ │(locations.ts)│ │   (src/data/packages.ts)  │
│ officeId FK  │ │ officeId FK  │ │   (10 Offerings)          │
└──────────────┘ └──────▲───────┘ └───────────────────────────┘
                        │ citySlugs[]
                        │
                 ┌──────┴───────┐
                 │   Regions    │
                 │(locations.ts)│
                 └──────────────┘
```

---

## 3. Canonical Data Owners

| Domain Entity | Canonical File | Key Fields Owned | Forbidden Elsewhere |
| :--- | :--- | :--- | :--- |
| **Business Brand & Comms** | `src/config/business.ts` | `name`, `legalName`, `tagline`, `domain`, `ratings`, `phones.indiaPrimary`, `phones.supportDesk`, `emails.primary`, `social`, `buildWhatsAppUrl` | No hardcoded company WhatsApp links or phone strings in components. |
| **Physical Offices** | `src/data/offices.ts` | `id`, `slug`, `name`, `address`, `landmark`, `postalCode`, `phone`, `email`, `timings`, `mapLink`, `coordinates`, `servicesOffered`, `areasServed`, `teamMemberIds` | No duplicate office arrays in `Contact.tsx`, `About.tsx`, `locations.ts`, or `Footer.tsx`. |
| **Team & Staff** | `src/data/team.ts` | `id`, `name`, `role`, `department`, `officeId`, `employeeCode`, `bio`, `expertise`, `image` | No `officeSlug` field; office name/address must not be copied inside employee records. |
| **Canonical Services** | `src/data/services.ts` | `slug`, `title`, `shortDesc`, `fullDesc`, `category`, `path`, `features`, `deliverables`, `technologies` | No commercial package bundles in `servicesData`. |
| **Commercial Packages** | `src/data/packages.ts` | `id`, `title`, `category`, `description`, `delivery`, `duration`, `iconName`, `features`, `technologies`, `useCases`, `color`, `serviceSlugs` | No inline package databases in `Services.tsx` or other pages. |
| **Regions** | `src/data/locations.ts` | `slug`, `name`, `state`, `country`, `flag`, `description`, `citySlugs` | No independent regional definitions. |
| **Cities** | `src/data/locations.ts` | `slug`, `name`, `regionSlug`, `state`, `country`, `flag`, `isPhysicalOffice`, `officeId`, `servingOfficeId`, `localAreas`, `keyIndustries`, `servicesAvailable`, `faqs` | Must NOT contain `address`, `phone`, `email`, `timings`, or `mapLink`. Derive via selectors. |
| **Target Industries** | `src/data/industries.ts` | `id`, `name`, `iconName`, `shortDesc`, `keySolutions`, `metricsHighlight` | No duplicated industry definitions. |

---

## 4. Pure Typed Selectors (`src/selectors/`)

Selectors decouple UI rendering from raw array structures and encapsulate relational traversal.

### 4.1. Office Selectors (`src/selectors/officeSelectors.ts`)
- `getPhysicalOffices()`: Returns all 3 physical offices.
- `getOfficeById(id: string)`: Resolves office by `id` ('jaipur', 'vrindavan', 'nepal').
- `getOfficeBySlug(slug: string)`: Resolves office by URL slug.
- `getOfficePhone(id: OfficeId)`: Returns phone line for an office.
- `getOfficeEmail(id: OfficeId)`: Returns email for an office.
- `getOfficeEmployeeCount(officeId: string)`: Returns verified employee count for an office.
- `getOfficeTeamMembers(officeId: string)`: Returns all team members stationed at an office.

### 4.2. Location Selectors (`src/selectors/locationSelectors.ts`)
- `getAllRegions()`: Returns all 9 regions.
- `getRegionBySlug(slug: string)`: Resolves region entity.
- `getAllCities()`: Returns all 24 cities.
- `getCityBySlug(slug: string)`: Resolves city entity (with alias normalization).
- `getCitiesByRegion(regionSlug: string)`: Resolves cities in a region.
- `getPhysicalOfficeCities()`: Filters cities with a physical office.
- `getOfficeForCity(city: CityData)`: Resolves the physical `OfficeData` entity for a city.
- `getCityPhone(city: CityData)`: Returns physical office phone, regional serving office phone, or central line.
- `getCityEmail(city: CityData)`: Returns physical office email, regional serving office email, or central email.
- `getCityAddress(city: CityData)`: Returns office address if physical office, else undefined.
- `getServicesForCity(city: CityData)`: Resolves full `ServiceData[]` for a city.
- `isServiceAvailableInCity(citySlug: string, serviceSlug: string)`: Boolean capability check.
- `getCitiesForService(serviceSlug: string)`: Returns all cities providing a given service.

### 4.3. Service & Package Selectors (`src/selectors/serviceSelectors.ts`)
- `getAllServices()`: Returns all 13 canonical services.
- `getServiceBySlug(slug: string)`: Resolves service by slug.
- `getServicesByCategory(category: ServiceCategory)`: Filters services by category.
- `getAllPackages()`: Returns all 10 commercial packages.
- `getPackageById(id: number)`: Resolves commercial package by ID.
- `getPackagesByCategory(category: string)`: Filters packages by category.
- `getPackagesForService(serviceSlug: string)`: Resolves commercial packages linked to a canonical service.

### 4.4. Team Selectors (`src/selectors/teamSelectors.ts`)
- `getAllTeamMembers()`: Returns all 9 team members.
- `getTeamMemberById(id: number)`: Resolves staff member by ID.
- `getTeamMembersByOffice(officeId: string)`: Filters staff by office.
- `getTeamMembersByDepartment(dept: string)`: Filters staff by department.
- `getEmployeeOffice(member: TeamMember)`: Resolves full `OfficeData` for an employee.

---

## 5. Standard Procedures (How-To Guides)

### 5.1. How to Add a New Physical Office
1. Open `src/data/offices.ts`.
2. Update `type OfficeId` union: add `'your-office-id'`.
3. Append new `OfficeData` record to `physicalOffices` with all required fields (`id`, `slug`, `address`, `phone`, `email`, etc.).
4. Open `src/data/locations.ts` and ensure the matching city record has `isPhysicalOffice: true, officeId: 'your-office-id'`.
5. Run `npm run data:validate` to ensure all foreign keys and relations pass.

### 5.2. How to Add a New Employee
1. Open `src/data/team.ts`.
2. Append a new `TeamMember` object to `teamMembers`:
   ```ts
   {
     id: 10,
     name: "Employee Name",
     role: "Senior Consultant",
     department: "Marketing",
     officeId: "jaipur", // Valid OfficeId
     employeeCode: "GS-JPR-04",
     image: "",
     bio: "...",
     expertise: ["Strategy", "SEO"]
   }
   ```
3. In `src/data/offices.ts`, add the new employee ID (`10`) to the office's `teamMemberIds` array.
4. Run `npm run data:validate`.

### 5.3. How to Add a New City
1. Open `src/data/locations.ts`.
2. Add the city record to `citiesData`:
   ```ts
   {
     slug: "mysore",
     name: "Mysore",
     regionSlug: "karnataka", // Valid RegionSlug
     regionName: "Karnataka",
     state: "Karnataka",
     country: "India",
     flag: "🇮🇳",
     isPhysicalOffice: false,
     servingOfficeId: "vrindavan",
     localAreas: ["Gokulam", "Jayalakshmipuram", "Vontikoppal"],
     keyIndustries: ["IT & Software", "Tourism & Heritage", "Silk & Handicrafts"],
     servicesAvailable: ["seo", "web-development", "ecommerce"],
     description: "...",
     faqs: [...]
   }
   ```
3. In `regionsData`, add `"mysore"` to the `citySlugs` array for region `"karnataka"`.
4. Run `npm run data:validate`.

### 5.4. How to Add a New Canonical Service
1. Open `src/data/services.ts`.
2. Update `type ServiceSlug`: add `'your-service-slug'`.
3. Append a new `ServiceData` record to `servicesData`.
4. Update `src/config/navigation.ts` and `src/config/routes.ts` if adding to navigation/routing.
5. Run `npm run data:validate`.

### 5.5. How to Add a New Commercial Package
1. Open `src/data/packages.ts`.
2. Append a new `CommercialPackage` object to `commercialPackages`, specifying its foreign key `serviceSlugs: ['web-development']`.
3. Run `npm run data:validate`.

---

## 6. How Page Components Should Consume Data

1. **Direct Imports from Selectors / SiteConfig**:
   ```tsx
   import { getCityPhone, getCityAddress, getOfficeForCity } from '../selectors';
   import { buildWhatsAppUrl } from '../config';
   ```
2. **Never hardcode phone numbers or WhatsApp links**:
   ```tsx
   // BAD
   <a href="https://wa.me/9779707382481">WhatsApp</a>
   <a href="tel:+919341436937">Call Us</a>

   // GOOD
   <a href={buildWhatsAppUrl('nepal')}>WhatsApp</a>
   <a href={formatTelHref(businessConfig.phones.indiaPrimary)}>Call Us</a>
   ```
3. **Never duplicate office address lists**:
   ```tsx
   // BAD
   const offices = [ { name: "Jaipur", address: "..." }, ... ];

   // GOOD
   import { physicalOffices } from '../config/site';
   ```

---

## 7. Validation & Quality Gate Verification

All changes in Phase 1 are validated with automated scripts:

- `npm run data:validate`: Verifies uniqueness, relational foreign keys, orphan objects, and normalization constraints. Exits with 0 on pass, 1 on failure.
- `npm run data:audit`: Reports all remaining raw string literals in UI components to track migration progress into Phase 2/3.
- `npm run lint`: 0 errors, 0 warnings.
- `npm run build`: Production build passes in under 6.1s with zero errors.
