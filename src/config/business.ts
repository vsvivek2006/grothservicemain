/**
 * Growth Service Central Business Configuration
 * Single source of truth for company identity, contacts, official phone lines,
 * emails, social profiles, and physical corporate office locations.
 */

import { physicalOffices, OfficeData } from '../data/offices';

export type OfficeContact = OfficeData;

export interface CommunicationChannels {
  phones: {
    readonly indiaPrimary: string;
    readonly indiaJaipur: string;
    readonly nepalPrimary: string;
    readonly supportDesk: string;
  };
  whatsapp: {
    readonly number: string;
    readonly nepalNumber: string;
    readonly defaultUrl: string;
    readonly defaultMessage: string;
  };
  emails: {
    readonly primary: string;
    readonly support: string;
    readonly jaipur: string;
    readonly vrindavan: string;
    readonly nepal: string;
  };
  social: {
    readonly facebook: string;
    readonly instagram: string;
    readonly linkedin: string;
    readonly youtube: string;
    readonly handles: {
      readonly facebook: string;
      readonly instagram: string;
      readonly linkedin: string;
      readonly youtube: string;
    };
  };
}

export interface BusinessConfigSchema extends CommunicationChannels {
  readonly name: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly domain: string;
  readonly canonicalOrigin: string;
  readonly description: string;
  readonly themeColor: string;
  readonly establishedYear: number;
  readonly ratings: {
    readonly average: number;
    readonly reviewCount: number;
    readonly displayString: string;
    readonly sourceText: string;
  };
  readonly offices: readonly OfficeData[];
}

export const businessConfig: BusinessConfigSchema = {
  name: "Growth Service",
  legalName: "Growth Service",
  tagline: "Digital Growth Partner",
  domain: "https://www.growthservice.in",
  canonicalOrigin: "https://www.growthservice.in",
  description: "Growth Service is a premier digital marketing and web engineering agency delivering measurable ROI, technical SEO, and high-performance React/Node solutions across India and Nepal.",
  themeColor: "#7C3AED",
  establishedYear: 2021,

  ratings: {
    average: 4.8,
    reviewCount: 300,
    displayString: "4.8/5",
    sourceText: "Rated 4.8/5 average across Google, Facebook & Trustpilot (300+ Verified Reviews)",
  },

  emails: {
    primary: "info@growthservice.in",
    support: "info@growthservice.in",
    jaipur: "jaipur@growthservice.in",
    vrindavan: "info@growthservice.in",
    nepal: "nepal@growthservice.in",
  },

  phones: {
    indiaPrimary: "+91 93414 36937",
    indiaJaipur: "+91 62073 00553",
    nepalPrimary: "+977 970-7382481",
    supportDesk: "+91 95212 81509",
  },

  whatsapp: {
    number: "919521281509",
    nepalNumber: "9779707382481",
    defaultMessage: "Hello Growth Service, I would like to inquire about your digital growth services.",
    defaultUrl: "https://wa.me/919521281509?text=Hello%20Growth%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20digital%20growth%20services.",
  },

  social: {
    facebook: "https://facebook.com/growthservices",
    instagram: "https://instagram.com/growth_servces",
    linkedin: "https://linkedin.com/company/growthservice",
    youtube: "https://youtube.com/@growthservice",
    handles: {
      facebook: "@growthservices",
      instagram: "@growth_servces",
      linkedin: "growthservice",
      youtube: "@growthservice",
    },
  },

  offices: physicalOffices,
} as const;

/**
 * Helper to build localized WhatsApp click-to-chat URLs
 */
export function buildWhatsAppUrl(
  phoneOrLocale: 'india' | 'nepal' | string = 'india',
  customMessage?: string
): string {
  const message = customMessage || businessConfig.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(message);
  
  if (phoneOrLocale === 'nepal') {
    return `https://wa.me/${businessConfig.whatsapp.nepalNumber}?text=${encoded}`;
  }
  
  const rawNumber = phoneOrLocale === 'india' 
    ? businessConfig.whatsapp.number 
    : phoneOrLocale.replace(/[^0-9]/g, '');

  return `https://wa.me/${rawNumber}?text=${encoded}`;
}

/**
 * Helper to format phone for `tel:` links
 */
export function formatTelHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`;
}

export default businessConfig;
