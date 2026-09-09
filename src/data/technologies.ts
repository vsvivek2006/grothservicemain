import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiWordpress,
  SiWoocommerce,
  SiShopify,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiVercel,
  SiCloudflare,
  SiFigma,
  SiCanva,
  SiNotion,
  SiZapier,
  SiHubspot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
} from 'react-icons/si';
import {
  Search,
  Globe,
  BarChart3,
  Megaphone,
  Share2,
  Code,
  Shield,
  Layers,
  Database,
  Cpu,
} from 'lucide-react';

export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'mobile'
  | 'cms'
  | 'cloud'
  | 'marketing'
  | 'design'
  | 'analytics';

export interface Technology {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly category: TechCategory;
  readonly type: string;
  readonly color: string;
  readonly Icon: React.ComponentType<{ className?: string; size?: number | string }>;
  readonly description?: string;
  readonly isFeatured?: boolean;
}

export const TECHNOLOGIES: readonly Technology[] = [
  // Frontend
  {
    id: 'react',
    slug: 'react',
    name: 'React.js',
    category: 'frontend',
    type: 'Frontend',
    color: 'text-sky-500',
    Icon: SiReact,
    description: 'Component-driven UI architecture for high-performance web apps',
    isFeatured: true,
  },
  {
    id: 'nextjs',
    slug: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    type: 'Full-Stack Framework',
    color: 'text-slate-900',
    Icon: SiNextdotjs,
    description: 'Server-rendered React framework optimized for search indexing and speed',
    isFeatured: true,
  },
  {
    id: 'typescript',
    slug: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    type: 'Language',
    color: 'text-blue-600',
    Icon: SiTypescript,
    description: 'Strict type safety ensuring maintainable enterprise codebases',
    isFeatured: true,
  },
  {
    id: 'tailwindcss',
    slug: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    type: 'Styling',
    color: 'text-sky-400',
    Icon: SiTailwindcss,
    description: 'Utility-first CSS framework for custom responsive design systems',
    isFeatured: true,
  },
  {
    id: 'javascript',
    slug: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    type: 'Language',
    color: 'text-yellow-500',
    Icon: SiJavascript,
  },
  {
    id: 'html5',
    slug: 'html5',
    name: 'HTML5',
    category: 'frontend',
    type: 'Markup',
    color: 'text-orange-500',
    Icon: SiHtml5,
  },
  {
    id: 'css3',
    slug: 'css3',
    name: 'CSS3',
    category: 'frontend',
    type: 'Styling',
    color: 'text-blue-500',
    Icon: SiCss3,
  },
  {
    id: 'redux',
    slug: 'redux',
    name: 'Redux',
    category: 'frontend',
    type: 'State Management',
    color: 'text-purple-600',
    Icon: SiRedux,
  },

  // Backend & APIs
  {
    id: 'nodejs',
    slug: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    type: 'Runtime',
    color: 'text-emerald-600',
    Icon: SiNodedotjs,
    description: 'High-throughput event-driven backend services and REST APIs',
    isFeatured: true,
  },
  {
    id: 'express',
    slug: 'express',
    name: 'Express.js',
    category: 'backend',
    type: 'Backend',
    color: 'text-slate-700',
    Icon: SiExpress,
    description: 'Minimalist web API framework for scalable microservices',
    isFeatured: true,
  },
  {
    id: 'graphql',
    slug: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    type: 'API Query',
    color: 'text-pink-600',
    Icon: SiGraphql,
    description: 'Declarative data fetching preventing over-fetching across clients',
    isFeatured: true,
  },

  // Databases
  {
    id: 'mongodb',
    slug: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    type: 'NoSQL Database',
    color: 'text-emerald-500',
    Icon: SiMongodb,
    description: 'Scalable document database for modern web applications',
    isFeatured: true,
  },
  {
    id: 'postgresql',
    slug: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    type: 'SQL Database',
    color: 'text-blue-700',
    Icon: SiPostgresql,
    description: 'Advanced relational database with strict data consistency',
  },
  {
    id: 'mysql',
    slug: 'mysql',
    name: 'MySQL',
    category: 'database',
    type: 'SQL Database',
    color: 'text-blue-600',
    Icon: SiMysql,
  },
  {
    id: 'firebase',
    slug: 'firebase',
    name: 'Firebase',
    category: 'database',
    type: 'Cloud Platform',
    color: 'text-amber-500',
    Icon: SiFirebase,
  },

  // CMS & Ecommerce
  {
    id: 'wordpress',
    slug: 'wordpress',
    name: 'WordPress',
    category: 'cms',
    type: 'CMS Platform',
    color: 'text-sky-700',
    Icon: SiWordpress,
    description: 'World standard content management customized with speed architecture',
  },
  {
    id: 'woocommerce',
    slug: 'woocommerce',
    name: 'WooCommerce',
    category: 'cms',
    type: 'E-commerce Engine',
    color: 'text-purple-600',
    Icon: SiWoocommerce,
    description: 'Customizable shopping experience integrated with WordPress',
  },
  {
    id: 'shopify',
    slug: 'shopify',
    name: 'Shopify',
    category: 'cms',
    type: 'E-commerce SaaS',
    color: 'text-emerald-600',
    Icon: SiShopify,
    description: 'High-converting online store setup and theme customization',
  },

  // Mobile
  {
    id: 'react-native',
    slug: 'react-native',
    name: 'React Native',
    category: 'mobile',
    type: 'Cross-Platform',
    color: 'text-cyan-500',
    Icon: SiReact,
    description: 'Native iOS and Android mobile apps from a unified codebase',
  },
  {
    id: 'flutter',
    slug: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    type: 'Cross-Platform',
    color: 'text-sky-500',
    Icon: SiFlutter,
  },

  // Cloud & DevOps
  {
    id: 'vercel',
    slug: 'vercel',
    name: 'Vercel',
    category: 'cloud',
    type: 'Edge Hosting',
    color: 'text-slate-900',
    Icon: SiVercel,
    description: 'Global edge network delivery with instant CI/CD deployment',
  },
  {
    id: 'cloudflare',
    slug: 'cloudflare',
    name: 'Cloudflare',
    category: 'cloud',
    type: 'CDN & Security',
    color: 'text-orange-500',
    Icon: SiCloudflare,
    description: 'DDoS mitigation, SSL encryption, and edge asset caching',
  },

  // Design
  {
    id: 'figma',
    slug: 'figma',
    name: 'Figma',
    category: 'design',
    type: 'UI/UX Design',
    color: 'text-purple-500',
    Icon: SiFigma,
    description: 'Interactive wireframing, high-fidelity prototypes, and design systems',
  },
  {
    id: 'canva',
    slug: 'canva',
    name: 'Canva Pro',
    category: 'design',
    type: 'Creative Design',
    color: 'text-teal-500',
    Icon: SiCanva,
  },

  // Marketing & Automation
  {
    id: 'google-ads',
    slug: 'google-ads',
    name: 'Google Ads',
    category: 'marketing',
    type: 'PPC Network',
    color: 'text-blue-500',
    Icon: Megaphone,
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    name: 'Meta Ads Manager',
    category: 'marketing',
    type: 'Social Ads',
    color: 'text-blue-600',
    Icon: Share2,
  },
  {
    id: 'google-analytics',
    slug: 'google-analytics',
    name: 'Google Analytics 4',
    category: 'analytics',
    type: 'Telemetry',
    color: 'text-amber-600',
    Icon: BarChart3,
  },
  {
    id: 'search-console',
    slug: 'search-console',
    name: 'Google Search Console',
    category: 'analytics',
    type: 'SEO Telemetry',
    color: 'text-blue-500',
    Icon: Search,
  },
  {
    id: 'zapier',
    slug: 'zapier',
    name: 'Zapier',
    category: 'marketing',
    type: 'Automation',
    color: 'text-orange-500',
    Icon: SiZapier,
  },
  {
    id: 'hubspot',
    slug: 'hubspot',
    name: 'HubSpot',
    category: 'marketing',
    type: 'CRM Platform',
    color: 'text-orange-600',
    Icon: SiHubspot,
  },
  {
    id: 'notion',
    slug: 'notion',
    name: 'Notion',
    category: 'marketing',
    type: 'Documentation',
    color: 'text-slate-800',
    Icon: SiNotion,
  },
];

/**
 * Returns all featured technologies (typically shown in Home showcase).
 */
export function getFeaturedTechnologies(): readonly Technology[] {
  return TECHNOLOGIES.filter((t) => t.isFeatured);
}

/**
 * Returns technologies matching a specific category.
 */
export function getTechnologiesByCategory(category: TechCategory): readonly Technology[] {
  return TECHNOLOGIES.filter((t) => t.category === category);
}

/**
 * Finds a technology by its case-insensitive name or slug.
 */
export function getTechnologyByName(name: string): Technology | undefined {
  const norm = name.toLowerCase().trim();
  return TECHNOLOGIES.find(
    (t) =>
      t.name.toLowerCase() === norm ||
      t.slug.toLowerCase() === norm ||
      norm.includes(t.name.toLowerCase()) ||
      t.name.toLowerCase().includes(norm)
  );
}

/**
 * Fallback icon for unrecognized technologies.
 */
export const DefaultTechIcon: React.FC<{ className?: string; size?: number | string }> = ({
  className = 'w-5 h-5',
}) => React.createElement(Cpu, { className });
