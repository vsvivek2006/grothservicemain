/**
 * Growth Service Commercial Packages & Productized Offerings
 * Canonical source of truth for commercial package bundles and service product offerings.
 * Linked to canonical capabilities in `src/data/services.ts` via `serviceSlugs`.
 */

export type PackageCategory = 'web' | 'seo' | 'smm' | 'business';

export interface CommercialPackage {
  readonly id: number;
  readonly title: string;
  readonly category: PackageCategory;
  readonly description: string;
  readonly delivery?: string;
  readonly duration?: string;
  readonly iconName: 'Globe' | 'ShoppingCart' | 'Headphones' | 'Search' | 'Instagram' | 'MapPin' | 'Users' | 'Zap' | 'MessageCircle';
  readonly features: readonly string[];
  readonly technologies: readonly string[];
  readonly useCases: readonly string[];
  readonly color: 'blue' | 'green' | 'purple' | 'indigo' | 'orange' | 'pink';
  readonly serviceSlugs: readonly string[];
}

export const commercialPackages: readonly CommercialPackage[] = [
  {
    id: 1,
    title: 'Custom Business Website (5 Pages)',
    category: 'web',
    description: 'Professional responsive website tailored to your brand identity with WhatsApp integration',
    delivery: '7-10 Days',
    iconName: 'Globe',
    features: [
      'Home Page with Hero Section',
      'About Us Narrative Page',
      'Services/Products Showcase',
      'Contact Us with Inquiry Form',
      'WhatsApp Live Integration',
      'Mobile-First Responsive Layout',
      'Basic SEO & Meta Setup',
      '1 Year Free Hosting Setup',
      'SSL Certificate Configuration',
      'Social Media Integration',
      'Dedicated Technical Support',
      'Google Analytics & Search Console Setup'
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    useCases: ['Startups', 'Small Businesses', 'Portfolio Sites', 'Service Providers'],
    color: 'blue',
    serviceSlugs: ['web-development']
  },
  {
    id: 2,
    title: 'Tour & Travel Booking Platform',
    category: 'web',
    description: 'Complete travel booking platform with dynamic tour itineraries and inquiry workflows',
    delivery: '10-15 Days',
    iconName: 'Globe',
    features: [
      'Dynamic Tour Showcase Home Page',
      'Tour Packages Detail Pages',
      'Booking Inquiry Engine',
      'Payment Gateway Ready',
      'Admin Management Dashboard',
      'Photo & Media Gallery',
      'Verified Customer Reviews',
      'SEO-Optimized Structure',
      'Mobile Responsive Architecture',
      'Email Booking Notifications',
      'Departure Calendar Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe/Razorpay'],
    useCases: ['Travel Agencies', 'Tour Operators', 'Hotel Chains', 'Adventure Companies'],
    color: 'green',
    serviceSlugs: ['web-development']
  },
  {
    id: 3,
    title: 'E-commerce Store Architecture',
    category: 'web',
    description: 'Full-featured online store with inventory tracking, payment gateways, and order control',
    delivery: '20-25 Days',
    iconName: 'ShoppingCart',
    features: [
      'Product Catalog Management',
      'Shopping Cart System',
      'Secure Payment Gateway Integration',
      'User Account & Authentication',
      'Administrative Dashboard',
      'Order Processing & Management',
      'Inventory Tracking',
      'Customer Reviews & Ratings',
      'Discount & Coupon Engine',
      'Analytics Dashboard',
      'Mobile Responsive Design',
      'Ongoing Technical Support'
    ],
    technologies: ['MERN Stack', 'Redux', 'Stripe', 'AWS S3'],
    useCases: ['Retail Stores', 'Brand Outlets', 'Dropshipping', 'Product Businesses'],
    color: 'purple',
    serviceSlugs: ['ecommerce', 'web-development']
  },
  {
    id: 4,
    title: 'Hospitality & Guest House Website',
    category: 'web',
    description: 'Hotel and accommodation portal with room showcase and direct reservation inquiries',
    delivery: '12-18 Days',
    iconName: 'Headphones',
    features: [
      'Homepage with Hero Slider',
      'Room Listings & Showcase',
      'Direct Booking Inquiries',
      'Admin Control Panel',
      'Customer Review System',
      'Amenities Showcase',
      'Interactive Location Map',
      'Photo Gallery',
      'Booking Calendar Sync',
      'Email Notifications',
      'Mobile Responsive Design',
      'SEO Optimized Architecture'
    ],
    technologies: ['MERN Stack', 'Razorpay/Stripe', 'JWT Auth', 'Cloudinary'],
    useCases: ['Hotels', 'Guest Houses', 'Resorts', 'Vacation Rentals'],
    color: 'indigo',
    serviceSlugs: ['web-development']
  },
  {
    id: 5,
    title: 'Professional Search Engine Optimization',
    category: 'seo',
    description: 'Complete SEO optimization program for sustainable organic rankings and high-intent traffic',
    duration: '3-6 Months Retainer',
    iconName: 'Search',
    features: [
      'Monthly 4 Comprehensive Performance Reports',
      '4 In-Depth SEO Content Articles',
      'High-Intent Keyword Cluster Optimization',
      'On-Page Code & Meta Optimization',
      'Off-Page Link Acquisition Strategy',
      'Technical Site Health Audit',
      'Competitor Keyword & Backlink Analysis',
      'Organic Traffic Growth Roadmap',
      'Quality Authority Link Building',
      'Quarterly Content Strategy Plan',
      'Local SEO Optimization',
      'Core Web Vitals Performance Optimization'
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs/SEMrush', 'Screaming Frog'],
    useCases: ['Local Businesses', 'E-commerce Sites', 'Service Providers', 'Corporate Brands'],
    color: 'orange',
    serviceSlugs: ['seo', 'local-seo']
  },
  {
    id: 6,
    title: 'Social Media Brand Management',
    category: 'smm',
    description: 'Multi-channel creative content production and audience community management',
    duration: 'Ongoing Retainer',
    iconName: 'Instagram',
    features: [
      'Monthly Content Calendar Planning',
      'Creative Graphic & Video Asset Production',
      'Community Interaction & Management',
      'Brand Narrative & Visual Consistency',
      'High-Engagement Social Creative Design',
      'Audience Interaction Protocols',
      'Hashtag & Discovery Strategy',
      'Monthly Performance Analytics',
      'Instagram & Facebook Management',
      'LinkedIn Corporate Page Optimization',
      'Audience Growth Monitoring'
    ],
    technologies: ['Meta Business Suite', 'Buffer', 'Canva', 'Analytics Tools'],
    useCases: ['Consumer Brands', 'Influencers', 'Local Businesses', 'Emerging Startups'],
    color: 'pink',
    serviceSlugs: ['social-media', 'branding']
  },
  {
    id: 7,
    title: 'Google Business Profile Optimization',
    category: 'business',
    description: 'Local search engine dominance to drive calls, direction requests, and in-store visits',
    duration: 'Ongoing Local Retainer',
    iconName: 'MapPin',
    features: [
      'Complete Profile Verification & Setup',
      'Weekly Geotagged Visual Updates',
      'Review Management & Reputation Response',
      'Local 3-Pack Map Optimization',
      'Rich Photo & Video Media Posts',
      'Real-Time Call & Direction Insights Tracking',
      'Active Q&A Management',
      'Local Search Citation Synchronization',
      'Business Category Tuning',
      'Service Area Precision Setup'
    ],
    technologies: ['Google My Business', 'Local SEO Tools', 'Review Management', 'Analytics'],
    useCases: ['Local Services', 'Restaurants', 'Retail Stores', 'Healthcare Clinics'],
    color: 'green',
    serviceSlugs: ['local-seo', 'seo']
  },
  {
    id: 8,
    title: 'Complete Business Digital Setup',
    category: 'business',
    description: 'End-to-end business digital foundation covering branding, responsive web, and acquisition',
    delivery: '45-60 Days',
    iconName: 'Users',
    features: [
      'Custom Business Website Portal',
      'Complete Social Media Channels Setup',
      'Market Entry Strategy Guidance',
      'Assigned Senior Consultant Lead',
      'Brand Identity Guidelines',
      'Inbound Lead Generation Infrastructure',
      'CRM Setup Consultation',
      'Complimentary Post-Launch Support',
      'Google Business Profile Setup',
      'Corporate Email Configuration',
      'Search Engine Indexation',
      'Performance Analytics Dashboard'
    ],
    technologies: ['React', 'Social Platforms', 'CRM Integrations', 'Email Setup', 'Analytics'],
    useCases: ['New Ventures', 'Enterprise Expansion', 'Digital Transformation', 'Family Businesses'],
    color: 'purple',
    serviceSlugs: ['web-development', 'digital-marketing', 'branding', 'lead-generation']
  },
  {
    id: 9,
    title: 'Meta Ads Performance Management',
    category: 'seo',
    description: 'Targeted Facebook & Instagram paid campaigns designed for maximum return on ad spend',
    duration: 'Campaign-Based / Monthly',
    iconName: 'Zap',
    features: [
      'Ad Account & Pixel Setup',
      'Demographic & Lookalike Audience Targeting',
      'High-Converting Ad Creative Development',
      'Systematic A/B Split Testing',
      'Conversion Tracking & Attribution',
      'ROAS Optimization & Budget Pacing',
      'Weekly Performance Review Reports',
      'Campaign Budget Management',
      'Full-Funnel Remarketing Campaigns',
      'High-Intent Lead Generation Funnels'
    ],
    technologies: ['Meta Ads Manager', 'Pixel Setup', 'Audience Insights', 'Analytics'],
    useCases: ['E-commerce', 'Service Providers', 'Event Promotion', 'Direct Response Brands'],
    color: 'blue',
    serviceSlugs: ['paid-marketing', 'lead-generation']
  },
  {
    id: 10,
    title: 'Business WhatsApp System Setup',
    category: 'business',
    description: 'Professional Business WhatsApp with catalog management and automated inquiry workflows',
    delivery: '2-3 Days',
    iconName: 'MessageCircle',
    features: [
      'Business WhatsApp Profile Configuration',
      'Complete Verified Business Details',
      'Product & Service Catalog Listings',
      'Quick Reply Templates Setup',
      'Automated Away & Greeting Messages',
      'Operating Hours Configuration',
      'Customer Support Routing Workflow',
      'Label Organization System',
      'Analytics Integration'
    ],
    technologies: ['WhatsApp Business API', 'Catalog Tools', 'Automation Flows'],
    useCases: ['Customer Support', 'Sales Teams', 'Local Service Businesses', 'D2C Brands'],
    color: 'green',
    serviceSlugs: ['lead-generation']
  }
] as const;

export function getAllCommercialPackages(): readonly CommercialPackage[] {
  return commercialPackages;
}

export function getCommercialPackageById(id: number): CommercialPackage | undefined {
  return commercialPackages.find(p => p.id === id);
}

export function getCommercialPackagesByCategory(category: string): readonly CommercialPackage[] {
  if (category === 'all') return commercialPackages;
  return commercialPackages.filter(p => p.category === category);
}

export function getCommercialPackagesForService(serviceSlug: string): readonly CommercialPackage[] {
  return commercialPackages.filter(p => p.serviceSlugs.includes(serviceSlug));
}
