export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'seo' | 'development' | 'marketing' | 'design';
  path: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Comprehensive SEO services to improve your search engine rankings and drive organic traffic.",
    fullDesc: "Data-driven SEO strategies encompassing in-depth keyword analysis, on-page optimization, technical performance audits, high-authority link building, and local Google Business Profile dominance.",
    category: "seo",
    path: "/seo",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "SEO Analytics & Reporting"
    ],
    deliverables: [
      "Technical Health & Core Web Vitals Audit",
      "Targeted Keyword Mapping (High-intent queries)",
      "Schema Markup & Structured Data Implementation",
      "Monthly Ranking & Organic Traffic Reports"
    ],
    technologies: ["Google Search Console", "Google Analytics 4", "SEMrush", "Ahrefs", "Screaming Frog"]
  },
  {
    slug: "web-development",
    title: "Website Development",
    shortDesc: "Custom website development using modern technologies for optimal performance and user experience.",
    fullDesc: "Modern, responsive, blazing-fast websites and web applications built using React, TypeScript, Tailwind CSS, and scalable backend architectures designed for high conversion.",
    category: "development",
    path: "/web-development",
    features: [
      "Responsive Web Design",
      "E-commerce Development",
      "React & Next.js Development",
      "Node.js Backend",
      "CMS Integration",
      "Web Application Development"
    ],
    deliverables: [
      "Mobile-First Responsive Layouts",
      "Blazing Fast Page Speeds (Sub-2s Load Time)",
      "Secure Payment Gateway Integrations (Razorpay/Stripe)",
      "Clean TypeScript & React Architecture"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"]
  },
  {
    slug: "paid-marketing",
    title: "Performance Marketing",
    shortDesc: "Data-driven performance marketing campaigns to maximize ROI and drive conversions.",
    fullDesc: "High-ROI paid advertising across Google Search, Display, YouTube, Meta (Facebook & Instagram), and remarketing funnels engineered for qualified lead generation.",
    category: "marketing",
    path: "/paid-marketing",
    features: [
      "Google Ads Management",
      "Social Media Advertising",
      "PPC Campaigns",
      "Display Advertising",
      "Retargeting",
      "Conversion Optimization"
    ],
    deliverables: [
      "Target Audience Segmentation & Persona Mapping",
      "Ad Creative & Copywriting Variants",
      "Conversion Tracking & Event Pixel Setup",
      "Transparent Weekly ROAS & Cost-Per-Acquisition Reporting"
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Looker Studio"]
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    shortDesc: "Complete social media strategy and management to build brand presence and engagement.",
    fullDesc: "End-to-end social media content curation, graphic design, community engagement, brand storytelling, and influencer outreach to build an active, engaged audience.",
    category: "marketing",
    path: "/social-media",
    features: [
      "Content Strategy",
      "Community Management",
      "Social Media Advertising",
      "Analytics & Insights",
      "Brand Storytelling",
      "Influencer Marketing"
    ],
    deliverables: [
      "Monthly Content Calendar",
      "Custom Graphic & Video Post Assets",
      "Daily Audience Engagement & Monitoring",
      "Growth Analytics & Reach Reports"
    ],
    technologies: ["Meta Business Suite", "Canva", "Adobe Creative Suite", "Sprout Social"]
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortDesc: "Strategic content creation to engage audiences, build authority, and drive conversions.",
    fullDesc: "Authoritative, search-optimized articles, whitepapers, case studies, and conversion copywriting crafted to establish topical authority and nurture prospects into paying customers.",
    category: "marketing",
    path: "/content-marketing",
    features: [
      "Blog Writing",
      "Video Content",
      "Infographics",
      "Case Studies",
      "Whitepapers",
      "Content Strategy"
    ],
    deliverables: [
      "SEO-Driven Topical Authority Clusters",
      "Well-Researched Long-Form Articles",
      "Lead Magnet Guides & Checklists",
      "Content Distribution Plan"
    ],
    technologies: ["SurferSEO", "Grammarly", "WordPress", "Notion"]
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    shortDesc: "Complete e-commerce solutions to create, manage, and grow your online store.",
    fullDesc: "Robust online store development with frictionless product management, secure one-click checkout, automated order management, and conversion-optimized product pages.",
    category: "development",
    path: "/ecommerce",
    features: [
      "Online Store Setup",
      "Payment Integration",
      "Product Management",
      "Inventory Management",
      "Order Processing",
      "E-commerce Analytics"
    ],
    deliverables: [
      "Complete Store Setup & Design",
      "Razorpay/Stripe/UPI Gateway Integration",
      "Cart Abandonment Recovery Workflows",
      "Mobile-Optimized Checkout Flow"
    ],
    technologies: ["Shopify", "WooCommerce", "Razorpay", "Stripe", "Next.js"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Services",
    shortDesc: "Comprehensive digital marketing solutions to scale your business online with measurable results.",
    fullDesc: "Integrated digital marketing strategies encompassing SEO, performance marketing, social media engagement, and lead generation to drive qualified traffic and business growth.",
    category: "marketing",
    path: "/digital-marketing",
    features: [
      "Digital Marketing Strategy",
      "Search Engine Optimization (SEO)",
      "Performance Marketing (PPC)",
      "Social Media Management",
      "Conversion Optimization",
      "Lead Generation"
    ],
    deliverables: [
      "Digital Growth Strategy Roadmap",
      "Multi-Channel Campaign Management",
      "Lead Generation & Acquisition Funnels",
      "Transparent Performance Analytics & Reporting"
    ],
    technologies: ["Google Analytics 4", "Meta Ads Manager", "Google Ads", "Google Search Console", "SEMrush"]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
