/**
 * Growth Service — Notification Provider Factory
 *
 * Provides a single point of resolution for communication providers.
 * Swap implementation (e.g. Resend, Sendgrid, AWS SES, Postmark, Twilio)
 * without modifying any billing domain code.
 */

import type { NotificationProvider } from "./provider-types";
import { MockNotificationProvider } from "./providers/mockNotificationProvider";

let defaultProviderInstance: NotificationProvider | null = null;

export function getNotificationProvider(): NotificationProvider {
  if (!defaultProviderInstance) {
    // In future, inspect process.env.NOTIFICATION_PROVIDER (e.g., 'resend', 'ses', 'smtp')
    // Defaults safely to Mock/Structured Logger for maximum resilience
    defaultProviderInstance = new MockNotificationProvider();
  }
  return defaultProviderInstance;
}

export function setNotificationProviderForTesting(provider: NotificationProvider | null): void {
  defaultProviderInstance = provider;
}
