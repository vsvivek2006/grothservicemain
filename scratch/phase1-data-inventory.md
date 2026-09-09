# Phase 1: Repository-Wide Data Inventory & Ownership Blueprint

**Project**: Growth Service (https://www.growthservice.in/)  
**Repository**: https://github.com/vsvivek2006/grothservicemain  
**Branch**: staging  
**Status**: Step 1 Inventory Complete  
**Date**: September 2026  

---

## 1. Inventory Classification Schema

Every factual data occurrence in the repository is classified into one of nine architectural categories:

1. **Master Data**: Canonical, authoritative single source of truth for an entity.
2. **Derived Presentation**: Dynamic data consumed/transformed through selectors or helpers.
3. **Valid One-Off Copy**: Context-specific editorial prose that does not duplicate an entity fact.
4. **Duplicate Factual Data**: Redundant, hardcoded literals that represent an entity fact and must be normalized.
5. **External / Client Data**: Data belonging to external partner agencies, clients, or third parties.
6. **Test Data**: Fixtures or mock values used strictly for validation/tests.
7. **SEO Metadata**: Static head tags (Helmet, index.html) that will be unified in Phase 4.
8. **Navigation Data**: Menus, breadcrumbs, and link hierarchies handled in Phase 2/3.
9. **Technical Configuration**: Build tools, deployment manifests, environment variables.

---

## 2. Comprehensive Data Inventory Table

| Data Field / Concept | Current Source(s) in Code | Occurrence Locations (Files & Components) | Classification | Authoritative Owner | Proposed Owner | Migration Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Company Brand Name** | `src/config/business.ts` | `businessConfig.name`, `Header.tsx`, `Footer.tsx`, `index.html`, `utils/razorpay.ts` | Master Data / SEO / Tech | `businessConfig.name` | `src/config/business.ts` | Master exists; `index.html` noted for Phase 4 |
| **Brand Spelling Variant** | `index.html` (`GrowthService`) | Title tags, Schema.org LD-JSON in `index.html` | SEO Metadata | `businessConfig.name` | `src/config/business.ts` | Documented for Phase 4 SEO unification |
| **External Partner Brand** | `src/pages/Home.tsx` | Client logo grid ("Dizigrow") | External / Client Data | Client asset | `src/pages/Home.tsx` | Preserved as valid client copy |
| **Company Domain & Canonical** | `src/config/business.ts` | `businessConfig.domain`, `index.html`, page `<Helmet>` links | Master Data / SEO | `businessConfig.domain` | `src/config/business.ts` | Master exists; page head links cataloged |
| **Established Year** | `src/config/business.ts` | `businessConfig.establishedYear` (`2021`), `Footer.tsx` | Master Data | `businessConfig.establishedYear` | `src/config/business.ts` | Master defined; Footer uses dynamic year for copyright |
| **Trust & Ratings Claim** | `src/config/business.ts` | `4.8/5`, `300+ Verified Reviews` in `business.ts`, `Home.tsx`, `Header.tsx`, `Footer.tsx` | Master Data / Duplicate Factual | `businessConfig.ratings` | `src/config/business.ts` (`ratings` + `trustSignals`) | Normalize consumers to `businessConfig.ratings` |
| **Top-Level India Phone** | `src/config/business.ts` (`phones.indiaPrimary`) | `+91 93414 36937` in >30 page files (`white-label/*`, `digital-marketing/*`, `Contact.tsx`) | Master Data / Duplicate Factual | `businessConfig.phones.indiaPrimary` | `src/config/business.ts` | Master defined; normalize consumers via selector/helper |
| **Jaipur Office Phone** | `src/data/offices.ts` | `+91 62073 00553` in `offices.ts`, `locations.ts` (5 cities), `business.ts`, subpages | Master Data / Duplicate Factual | `offices.ts` (`jaipur.phone`) | `src/data/offices.ts` | Remove from `locations.ts`; derive via `getOfficePhone("jaipur")` |
| **Nepal Office Phone** | `src/data/offices.ts` | `+977 970-7382481` in `offices.ts`, `locations.ts` (2 cities), `business.ts`, 15+ subpages | Master Data / Duplicate Factual | `offices.ts` (`nepal.phone`) | `src/data/offices.ts` | Remove from `locations.ts`; derive via `getOfficePhone("nepal")` |
| **Support Desk Phone** | `src/config/business.ts` | `+91 95212 81509` in `businessConfig.phones.supportDesk`, `FAQ.tsx`, `App.tsx` | Master Data | `businessConfig.phones.supportDesk` | `src/config/business.ts` | Canonical support channel; helper provided |
| **WhatsApp Primary URL** | `src/config/business.ts` | `buildWhatsAppUrl('india')`, `919521281509` | Master Data / Tech | `businessConfig.whatsapp` | `src/config/business.ts` (`buildWhatsAppUrl`) | Unified in `business.ts` |
| **WhatsApp Nepal URL** | Hardcoded in 20+ files | `https://wa.me/9779707382481` in `Services.tsx`, `Pricing.tsx`, `Portfolio.tsx`, etc. | Duplicate Factual Data | `businessConfig.whatsapp` | `src/config/business.ts` (`buildWhatsAppUrl('nepal')`) | Replace hardcoded literals with `buildWhatsAppUrl('nepal')` |
| **Company Primary Email** | `src/config/business.ts` | `info@growthservice.in` in `business.ts`, `offices.ts` (Vrindavan), `index.html`, 20+ pages | Master Data / Duplicate Factual | `businessConfig.emails.primary` | `src/config/business.ts` | Centralize; replace raw literals in components |
| **Office Specific Emails** | `src/data/offices.ts` | `jaipur@growthservice.in`, `nepal@growthservice.in` in `offices.ts`, `locations.ts` | Master Data / Duplicate Factual | `offices.ts` (`office.email`) | `src/data/offices.ts` | Remove from `locations.ts`; derive via `getOfficeEmail(officeId)` |
| **Jaipur Office Address** | `src/data/offices.ts` | `138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur 302017` in `offices.ts`, `locations.ts` | Master Data / Duplicate Factual | `offices.ts` (`jaipur.address`) | `src/data/offices.ts` | Remove from `locations.ts` (`jaipur` record) |
| **Vrindavan Office Address** | `src/data/offices.ts` | `Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan 281121` in `offices.ts`, `locations.ts` | Master Data / Duplicate Factual | `offices.ts` (`vrindavan.address`) | `src/data/offices.ts` | Remove from `locations.ts` (`vrindavan` record) |
| **Nepal Office Address** | `src/data/offices.ts` | `Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal` in `offices.ts`, `locations.ts` | Master Data / Duplicate Factual | `offices.ts` (`nepal.address`) | `src/data/offices.ts` | Remove from `locations.ts` (`bariyarpatti` record) |
| **Office Landmarks & Maps** | `src/data/offices.ts` | Duplicated in `src/data/locations.ts` for Jaipur, Vrindavan, Bariyarpatti | Duplicate Factual Data | `offices.ts` | `src/data/offices.ts` | Remove from `locations.ts`; derive via office relationship |
| **Office Operating Timings** | `src/data/offices.ts` | Duplicated in `src/data/locations.ts` for Jaipur, Vrindavan, Bariyarpatti | Duplicate Factual Data | `offices.ts` | `src/data/offices.ts` | Remove from `locations.ts`; derive via office relationship |
| **Employee Roster** | `src/data/team.ts` | 9 verified team members in `src/data/team.ts` | Master Data | `teamMembers` | `src/data/team.ts` | Master exists; remove redundant `officeSlug` field |
| **Employee Office Link** | `src/data/team.ts` | Has both `officeId: "jaipur"` AND `officeSlug: "jaipur"` | Duplicate Factual Data | `officeId` | `src/data/team.ts` (`officeId` only) | Remove `officeSlug`; derive via office entity |
| **Canonical Services** | `src/data/services.ts` | 13 core services (`seo`, `web-development`, `paid-marketing`, `social-media`, etc.) | Master Data | `servicesData` | `src/data/services.ts` | Master catalogue confirmed |
| **Commercial Packages** | `src/pages/Services.tsx` | 10 productized packages in `allServices` ("Custom Business Website", etc.) | Master Data (Misplaced) | `allServices` in `Services.tsx` | `src/data/packages.ts` (NEW) | Extract to dedicated `packages.ts`; link to `serviceSlugs` |
| **Regions Catalogue** | `src/data/locations.ts` | 9 regional definitions (`delhi-ncr`, `rajasthan`, `uttar-pradesh`, etc.) | Master Data | `regionsData` | `src/data/locations.ts` | Clean master entity; owns `citySlugs` |
| **Cities Catalogue** | `src/data/locations.ts` | 24 cities (`jaipur`, `delhi`, `patna`, `goa`, etc.) | Master Data | `citiesData` | `src/data/locations.ts` | Normalize: remove copied office fields; reference `officeId` |
| **City-Office Connection** | `src/data/locations.ts` | Physical office cities store inline phone/address/maps | Duplicate Factual Data | `officeId` relation | `src/selectors/locationSelectors.ts` | Replace inline office data with `getOfficeForCity(city)` |
| **Industries Catalogue** | `src/data/industries.ts` | 6 target industry verticals | Master Data | `industriesData` | `src/data/industries.ts` | Master catalogue confirmed |
| **Official Social Links** | `src/config/business.ts` | Facebook, Instagram, LinkedIn, YouTube URLs & handles | Master Data | `businessConfig.social` | `src/config/business.ts` | Master confirmed; replace inline string literals |
| **Razorpay Public Key** | `src/utils/razorpay.ts` | `import.meta.env.VITE_RAZORPAY_KEY_ID` | Technical Configuration | Environment variable | `src/utils/razorpay.ts` | Verified secure; no secret keys |
| **Google Analytics ID** | `index.html` | `G-P50L6F04NE` in `index.html` | Technical Configuration / SEO | `index.html` tag | `index.html` (Phase 4 review) | Single instance confirmed |

---

## 3. Detailed Entity Ownership Rules

### 3.1. Business / Brand (`src/config/business.ts`)
- **Owns**: Company name, legal name, tagline, domain, canonical origin, main description, brand color constants, established year, trust signals / ratings, primary communication channels (India primary phone, support desk phone, primary email), WhatsApp defaults, and official social media profiles.
- **Forbidden**: Must NOT duplicate individual physical office details or act as an independent office registry.

### 3.2. Physical Offices (`src/data/offices.ts`)
- **Owns**: Exactly 3 corporate offices (`jaipur`, `vrindavan`, `nepal`).
- **Fields Owned**: `id`, `slug`, `name`, `city`, `state`, `country`, `flag`, `isHeadOffice`, `tagline`, `address`, `phone`, `email`, `landmark`, `postalCode`, `mapLink`, `timings`, `coordinates`, `servicesOffered`, `areasServed`, `description`.
- **Forbidden**: No second office dataset in any page, component, or config file.

### 3.3. Employees / Team (`src/data/team.ts`)
- **Owns**: Exactly 9 verified corporate staff members.
- **Fields Owned**: `id`, `name`, `role`, `department`, `officeId` (strictly typed `OfficeId`), `employeeCode`, `image`, `bio`, `expertise`, optional `email`, `phone`, `socialLinks`.
- **Normalization Change**: Remove `officeSlug`. Derive office details exclusively from `officeId` via `getOfficeById(member.officeId)`.

### 3.4. Canonical Services (`src/data/services.ts`)
- **Owns**: Exactly 13 core service capabilities (`seo`, `web-development`, `paid-marketing`, `social-media`, `content-marketing`, `ecommerce`, `digital-marketing`, `local-seo`, `lead-generation`, `branding`, `ui-ux-design`, `wordpress-development`, `app-development`).
- **Fields Owned**: `slug`, `title`, `shortDesc`, `fullDesc`, `category`, `path`, `features`, `deliverables`, `technologies`.
- **Forbidden**: Must NOT mix commercial package bundles ("5-Page Website", "Tour Booking Engine") into canonical services.

### 3.5. Commercial Packages (`src/data/packages.ts` — NEW)
- **Owns**: The 10 commercial package offerings previously inline in `src/pages/Services.tsx`.
- **Fields Owned**: `id`, `title`, `category`, `description`, `delivery` / `duration`, `iconName`, `features`, `technologies`, `useCases`, `color`, `serviceSlugs` (foreign keys to `ServiceData.slug`).
- **Separation**: Creates the clean relationship: `Canonical Service` -> `Commercial Package`.

### 3.6. Regions (`src/data/locations.ts`)
- **Owns**: 9 economic regions (`delhi-ncr`, `rajasthan`, `uttar-pradesh`, `bihar`, `punjab-chandigarh`, `goa`, `maharashtra`, `karnataka`, `nepal`).
- **Fields Owned**: `slug`, `name`, `state`, `country`, `flag`, `description`, `citySlugs`.

### 3.7. Cities (`src/data/locations.ts`)
- **Owns**: 24 market cities.
- **Fields Owned**: `slug`, `name`, `regionSlug`, `state`, `country`, `flag`, `isPhysicalOffice`, `officeId` (`jaipur` | `vrindavan` | `nepal` | `undefined`), `servingOfficeId` (`jaipur` | `vrindavan` | `nepal`), `localAreas`, `keyIndustries`, `servicesAvailable` (`string[]`), `description`, `faqs`.
- **Normalization Change**: Remove duplicated office data (`address`, `phone`, `email`, `landmark`, `postalCode`, `mapLink`, `timings`) from city records. All office details are derived via `getOfficeById(city.officeId)`. For non-office cities, contact details are derived via `getCityContact(city)`.

### 3.8. Target Industries (`src/data/industries.ts`)
- **Owns**: 6 primary vertical industries (`ecommerce-retail`, `hospitality-tourism`, `healthcare-wellness`, `real-estate-construction`, `education-edtech`, `professional-services`).

---

## 4. Derived Selectors Blueprint (`src/selectors/`)

To prevent components from manually filtering arrays or formatting URLs, create pure typed selectors:

- **Office Selectors** (`src/selectors/officeSelectors.ts`):
  - `getPhysicalOffices()`: Returns all physical offices (readonly).
  - `getOfficeById(id: OfficeId)`: Returns office by ID.
  - `getOfficeBySlug(slug: string)`: Returns office by URL slug.
  - `getOfficePhone(id: OfficeId)`: Returns office phone.
  - `getOfficeEmail(id: OfficeId)`: Returns office email.
  - `getHeadOffice()`: Returns designated primary/corporate office if configured.

- **Location Selectors** (`src/selectors/locationSelectors.ts`):
  - `getAllRegions()`: Returns all regions.
  - `getRegionBySlug(slug: string)`: Returns region by slug.
  - `getAllCities()`: Returns all 24 cities.
  - `getCityBySlug(slug: string)`: Returns city by slug.
  - `getCitiesByRegion(regionSlug: string)`: Returns cities belonging to a region.
  - `getPhysicalOfficeCities()`: Returns cities with physical office presence.
  - `getOfficeForCity(city: CityData)`: Resolves associated physical office or undefined.
  - `getCityPhone(city: CityData)`: Returns physical office phone or regional serving office phone.
  - `getCityEmail(city: CityData)`: Returns physical office email or regional serving office email.

- **Service Selectors** (`src/selectors/serviceSelectors.ts`):
  - `getAllServices()`: Returns all 13 canonical services.
  - `getServiceBySlug(slug: string)`: Returns service by canonical slug.
  - `getServicesForCity(city: CityData)`: Resolves full `ServiceData[]` for a city.
  - `isServiceAvailableInCity(citySlug: string, serviceSlug: string)`: Boolean check.
  - `getCitiesForService(serviceSlug: string)`: Returns cities offering a given service.
  - `getAllPackages()`: Returns all 10 commercial package offerings.
  - `getPackageById(id: number)`: Returns package by numeric ID.
  - `getPackagesForService(serviceSlug: string)`: Returns commercial packages mapped to a service slug.

- **Team Selectors** (`src/selectors/teamSelectors.ts`):
  - `getAllTeamMembers()`: Returns all 9 team members.
  - `getTeamMemberById(id: number)`: Returns member by ID.
  - `getTeamMembersByOffice(officeId: string)`: Returns members filtered by office ID.
  - `getTeamMembersByDepartment(dept: string)`: Returns members filtered by department.
  - `getEmployeeOffice(member: TeamMember)`: Resolves full `OfficeData` for an employee.

---

## 5. Summary of Actions for Phase 1 Execution

1. **Create `src/data/packages.ts`**: Extract 10 package offerings from `Services.tsx`.
2. **Normalize `src/data/team.ts`**: Remove redundant `officeSlug` field; enforce typed `officeId: OfficeId`.
3. **Normalize `src/data/locations.ts`**: Remove copied office fields (`address`, `phone`, `email`, `landmark`, `postalCode`, `mapLink`, `timings`) from physical office city records. Add `servingOfficeId` for regional routing.
4. **Create Pure Typed Selectors** in `src/selectors/`:
   - `src/selectors/officeSelectors.ts`
   - `src/selectors/locationSelectors.ts`
   - `src/selectors/serviceSelectors.ts`
   - `src/selectors/teamSelectors.ts`
   - `src/selectors/index.ts`
5. **Update `src/config/business.ts` & `src/config/site.ts`**:
   - Make `siteConfig` a facade over canonical data and selectors without duplicating data or creating circular imports.
   - Clean barrel export in `src/config/index.ts`.
6. **Update Consumers (`Services.tsx`, `TeamPage.tsx`, `OfficeDetailPage.tsx`, `CityHubPage.tsx`, `LocationServicePage.tsx`, etc.)**:
   - Point to normalized selectors and canonical datasets.
7. **Create Validation Scripts**:
   - `scratch/validate_data_architecture.js` (`npm run data:validate`)
   - `scratch/data_literal_audit.js` (`npm run data:audit`)
8. **Document Architecture**:
   - `scratch/phase1-data-architecture.md`
