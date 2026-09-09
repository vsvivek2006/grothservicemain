/**
 * Single source of truth for Growth Service business details,
 * official contact numbers, email addresses, and physical office locations.
 */

import { physicalOffices, OfficeData } from '../data/offices';

export type OfficeContact = OfficeData;

export const businessConfig = {
  name: "Growth Service",
  legalName: "Growth Service",
  tagline: "Digital Growth Partner",
  domain: "https://www.growthservice.in",
  canonicalOrigin: "https://www.growthservice.in",
  
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
    defaultUrl: "https://wa.me/919521281509?text=Hello%20Growth%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20digital%20growth%20services.",
  },

  social: {
    facebook: "https://facebook.com/growthservices",
    instagram: "https://instagram.com/growth_servces",
    linkedin: "https://linkedin.com/company/growthservice",
    youtube: "https://youtube.com/@growthservice",
  },

  offices: physicalOffices,
} as const;

