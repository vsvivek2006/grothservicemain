// src/data/centralizedData.ts
import { getPrimaryPhone, getBusinessEmail, getBusinessName } from '../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl, getPrimaryWhatsAppUrl } from '../services';

export const primaryPhone = getPrimaryPhone();
export const primaryEmail = getBusinessEmail();
export const businessName = getBusinessName();

export {
  getPrimaryPhone,
  getBusinessEmail,
  getBusinessName,
  getTelHref,
  getMailtoHref,
  getNepalWhatsAppUrl,
  getPrimaryWhatsAppUrl
};
