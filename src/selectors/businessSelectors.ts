import { businessConfig, BusinessConfigSchema } from '../config/business';

/**
 * Returns canonical company trade name ("Growth Service").
 */
export function getBusinessName(): string {
  return businessConfig.name;
}

/**
 * Returns canonical legal corporate name.
 */
export function getBusinessLegalName(): string {
  return businessConfig.legalName;
}

/**
 * Returns canonical company tagline ("Digital Growth Partner").
 */
export function getBusinessTagline(): string {
  return businessConfig.tagline;
}

/**
 * Returns canonical company description.
 */
export function getBusinessDescription(): string {
  return businessConfig.description;
}

/**
 * Returns canonical origin URL ("https://www.growthservice.in").
 */
export function getCanonicalOrigin(): string {
  return businessConfig.canonicalOrigin;
}

/**
 * Returns domain string.
 */
export function getBusinessDomain(): string {
  return businessConfig.domain;
}

/**
 * Returns primary corporate contact email ("info@growthservice.in").
 */
export function getBusinessEmail(): string {
  return businessConfig.emails.primary;
}

/**
 * Returns customer support email ("info@growthservice.in").
 */
export function getSupportEmail(): string {
  return businessConfig.emails.support;
}

/**
 * Returns primary India corporate phone line.
 */
export function getPrimaryPhone(): string {
  return businessConfig.phones.indiaPrimary;
}

/**
 * Returns customer support desk phone line.
 */
export function getSupportPhone(): string {
  return businessConfig.phones.supportDesk;
}

/**
 * Returns official verified social media profile links and handles.
 */
export function getSocialProfiles(): BusinessConfigSchema['social'] {
  return businessConfig.social;
}

/**
 * Returns authoritative review scores and verified review counts.
 */
export function getTrustSignals(): BusinessConfigSchema['ratings'] {
  return businessConfig.ratings;
}

/**
 * Returns founding year (2021).
 */
export function getEstablishedYear(): number {
  return businessConfig.establishedYear;
}

/**
 * Returns primary brand theme hex code ("#7C3AED").
 */
export function getThemeColor(): string {
  return businessConfig.themeColor;
}
