import { businessConfig } from '../config/business';
import { OfficeId } from '../data/offices';

/**
 * Normalizes phone numbers into clean `tel:` URI schemes.
 */
export function getTelHref(phone: string): string {
  if (!phone) return 'tel:+919341436937';
  return `tel:${phone.replace(/[^0-9+]/g, '')}`;
}

/**
 * Backwards-compatible alias for getTelHref.
 */
export const formatTelHref = getTelHref;

/**
 * Normalizes emails into clean `mailto:` URI schemes with optional subject and body.
 */
export function getMailtoHref(email: string, subject?: string, body?: string): string {
  const targetEmail = email || businessConfig.emails.primary;
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  return params.length > 0
    ? `mailto:${targetEmail}?${params.join('&')}`
    : `mailto:${targetEmail}`;
}

/**
 * Constructs a localized, URL-encoded WhatsApp click-to-chat link.
 * Automatically resolves 'india', 'nepal', or direct raw number strings.
 */
export function getWhatsAppUrl(
  target: 'india' | 'nepal' | string = 'india',
  customMessage?: string
): string {
  const message = customMessage || businessConfig.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(message);

  if (target === 'nepal') {
    return `https://wa.me/${businessConfig.whatsapp.nepalNumber}?text=${encoded}`;
  }

  const rawNumber = target === 'india'
    ? businessConfig.whatsapp.number
    : target.replace(/[^0-9]/g, '');

  return `https://wa.me/${rawNumber}?text=${encoded}`;
}

/**
 * Backwards-compatible alias for getWhatsAppUrl.
 */
export const buildWhatsAppUrl = getWhatsAppUrl;

/**
 * Returns the primary corporate WhatsApp chat link (India support desk).
 */
export function getPrimaryWhatsAppUrl(customMessage?: string): string {
  return getWhatsAppUrl('india', customMessage);
}

/**
 * Returns the Nepal branch WhatsApp chat link.
 */
export function getNepalWhatsAppUrl(customMessage?: string): string {
  return getWhatsAppUrl('nepal', customMessage);
}

/**
 * Returns office-specific WhatsApp click-to-chat link based on office ID.
 */
export function getOfficeWhatsAppUrl(officeId: OfficeId | string, customMessage?: string): string {
  const norm = officeId.toLowerCase();
  if (norm === 'nepal') {
    return getNepalWhatsAppUrl(customMessage);
  }
  // Jaipur, Vrindavan, and general inquiries route through primary desk
  return getPrimaryWhatsAppUrl(customMessage);
}

/**
 * Formats a phone number for consistent UI presentation.
 */
export function formatPhoneDisplay(phone: string): string {
  return phone.trim();
}
