/**
 * Growth Service Central Navigation Configuration
 * Single source of truth for global Header, Footer, Submenus, Mobile Nav,
 * and Trust Badges across the website.
 */

import { businessConfig } from './business';

export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  highlight?: boolean;
}

export interface NavDropdownSection {
  title: string;
  items: NavItem[];
}

export interface FooterSection {
  title: string;
  items: NavItem[];
}

export interface SocialMediaItem {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'youtube';
  label: string;
  href: string;
  handle: string;
}

export const mainNavigation: NavItem[] = [
  { name: "ABOUT", href: "/about" },
  { name: "SOLUTIONS", href: "/packages" },
  { name: "BLOG", href: "/blog" },
  { name: "RESOURCES", href: "/resources" },
  { name: "FREE AUDIT", href: "/free-audit", highlight: true }
];

export const digitalMarketingSubmenu: NavItem[] = [
  { name: "SEO Services", href: "/seo" },
  { name: "Social Media Management", href: "/social-media" },
  { name: "Meta Ads Management", href: "/paid-marketing" },
  { name: "Google Business Profile", href: "/local-seo" },
  { name: "Content Marketing", href: "/content-marketing" },
  { name: "Lead Generation", href: "/lead-generation" },
  { name: "Brand Strategy", href: "/branding" }
];

export const designDevelopmentSubmenu: NavItem[] = [
  { name: "Website Development", href: "/web-development" },
  { name: "UI/UX Design", href: "/ui-ux-design" },
  { name: "WordPress Development", href: "/wordpress-development" },
  { name: "E-commerce Solutions", href: "/ecommerce" },
  { name: "Mobile App Development", href: "/app-development" }
];

export const whiteLabelSubmenu: NavItem[] = [
  { name: "White Label Hub", href: "/white-label" },
  { name: "White Label SEO", href: "/white-label-seo" },
  { name: "White Label PPC", href: "/white-label-ppc" },
  { name: "White Label Social Media", href: "/white-label-smo" },
  { name: "White Label Web Dev", href: "/white-label-web" }
];

export const trustAndLegalLinks: NavItem[] = [
  { name: "Careers", href: "/careers" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Refund Policy", href: "/refund" },
  { name: "Accessibility", href: "/accessibility" },
  { name: "Verify Authenticity", href: "/verify" }
];

export const footerCompanyLinks: NavItem[] = [
  { name: "About Growth Service", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Our Impact", href: "/impact" },
  { name: "Careers", href: "/careers" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Refund Policy", href: "/refund" },
  { name: "Accessibility Statement", href: "/accessibility" },
  { name: "Trust & Verification", href: "/verify" }
];

export const footerResourceLinks: NavItem[] = [
  { name: "Resources & Guides", href: "/resources" },
  { name: "Digital Growth Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Client Testimonials", href: "/testimonials" },
  { name: "Help Center", href: "/help-center" },
  { name: "FAQs", href: "/faq" },
  { name: "Book a Consultation", href: "/book-call" }
];

export const socialMediaLinks: SocialMediaItem[] = [
  {
    platform: "facebook",
    label: "Facebook",
    href: businessConfig.social.facebook,
    handle: businessConfig.social.handles.facebook,
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: businessConfig.social.instagram,
    handle: businessConfig.social.handles.instagram,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: businessConfig.social.linkedin,
    handle: businessConfig.social.handles.linkedin,
  },
  {
    platform: "youtube",
    label: "YouTube",
    href: businessConfig.social.youtube,
    handle: businessConfig.social.handles.youtube,
  }
];

export const trustBadges = [
  { text: "Social Media Marketing", path: "/social-media" },
  { text: "Meta Ads Management", path: "/paid-marketing" },
  { text: "SEO Services", path: "/seo" },
  { text: "Website Development", path: "/web-development" },
  { text: "Performance Marketing", path: "/paid-marketing" },
  { text: "E-commerce Solutions", path: "/ecommerce" },
  { text: "App Development", path: "/app-development" },
  { text: "UI/UX Design", path: "/ui-ux-design" }
];

export const navigationConfig = {
  mainNavigation,
  digitalMarketingSubmenu,
  designDevelopmentSubmenu,
  whiteLabelSubmenu,
  trustAndLegalLinks,
  footerCompanyLinks,
  footerResourceLinks,
  socialMediaLinks,
  trustBadges
} as const;

export default navigationConfig;
