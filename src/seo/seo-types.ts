/**
 * SEO & Structured Data Types
 */

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  robots?: 'index, follow' | 'noindex, nofollow' | 'noindex, follow';
  keywords?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface TitleTemplateOptions {
  brandSuffix?: boolean;
  separator?: string;
}
