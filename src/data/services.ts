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
  },
  {
    slug: "local-seo",
    title: "Google Business Profile & Local SEO",
    shortDesc: "Dominate Google Maps and local 3-pack search results to capture high-intent nearby customers.",
    fullDesc: "Complete local search optimization encompassing Google Business Profile verification, citation building, localized keyword strategy, and customer review management.",
    category: "seo",
    path: "/local-seo",
    features: [
      "Google Business Profile Optimization",
      "Local 3-Pack Rankings",
      "Citation & Directory Building",
      "Review Generation Strategy",
      "Hyper-Local Content",
      "Google Maps Tracking"
    ],
    deliverables: [
      "Optimized GMB Listing with Verified Categories",
      "NAP Consistency Audit Across Top Directories",
      "Weekly Geo-Targeted Updates & Posts",
      "Monthly Local Rank Tracking Reports"
    ],
    technologies: ["Google Business Profile", "BrightLocal", "Whitespark", "Google Search Console"]
  },
  {
    slug: "lead-generation",
    title: "B2B & B2C Lead Generation",
    shortDesc: "High-converting funnel engineering and targeted outreach to generate qualified commercial leads.",
    fullDesc: "Predictable lead acquisition architectures integrating paid media funnels, landing page conversion rate optimization, automated email sequences, and CRM attribution.",
    category: "marketing",
    path: "/lead-generation",
    features: [
      "High-Converting Landing Pages",
      "Paid Traffic Funnels",
      "Automated Lead Nurturing",
      "CRM & Pipeline Integration",
      "Multi-Step Qualification Forms",
      "ROAS & CAC Attribution"
    ],
    deliverables: [
      "Custom Conversion-Engineered Landing Pages",
      "Pre-Qualified Inbound Lead Flow",
      "Automated WhatsApp & Email Follow-Ups",
      "Weekly Cost-Per-Qualified-Lead Metrics"
    ],
    technologies: ["Meta Ads Manager", "Google Ads", "Zapier", "HubSpot", "Google Tag Manager"]
  },
  {
    slug: "branding",
    title: "Brand Strategy & Identity",
    shortDesc: "Memorable brand positioning, visual identity systems, and narrative guidelines that command authority.",
    fullDesc: "End-to-end strategic branding that defines market positioning, authentic brand voice, design token palettes, typography standards, and brand collateral.",
    category: "marketing",
    path: "/branding",
    features: [
      "Brand Positioning & Narrative",
      "Visual Identity Design",
      "Color & Typography Systems",
      "Brand Guidelines Document",
      "Social & Marketing Collateral",
      "Packaging & Print Design"
    ],
    deliverables: [
      "Comprehensive Brand Style Guide (PDF)",
      "Vector Logo Variations & Asset Suite",
      "Social Media Template Kits",
      "Brand Story & Core Value Proposition"
    ],
    technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop", "Canva Pro"]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "User-centric interface and experience design engineered for maximum engagement and seamless conversion.",
    fullDesc: "Research-driven UX wireframing, high-fidelity UI design, clickable interactive prototypes, and design system creation tailored for web applications.",
    category: "design",
    path: "/ui-ux-design",
    features: [
      "User Research & Journey Mapping",
      "Wireframing & Prototyping",
      "Design System Architecture",
      "Mobile App UI Design",
      "Web Application Interfaces",
      "Usability Testing"
    ],
    deliverables: [
      "Figma Design Files with Reusable Components",
      "Interactive Clickable Prototypes",
      "Developer Handoff Tokens & Specs",
      "Responsive Mobile & Desktop Breakpoints"
    ],
    technologies: ["Figma", "FigJam", "Adobe XD", "Miro"]
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    shortDesc: "Custom WordPress websites engineered for speed, security, SEO, and effortless content management.",
    fullDesc: "Enterprise-grade WordPress engineering with bespoke block themes, WooCommerce stores, headless WP configurations, and advanced speed optimizations.",
    category: "development",
    path: "/wordpress-development",
    features: [
      "Custom Theme Development",
      "WooCommerce Integration",
      "Speed & Core Web Vitals Optimization",
      "Security Hardening",
      "Custom Plugin Development",
      "Seamless Data Migration"
    ],
    deliverables: [
      "Bespoke Gutenberg/FSE Theme Architecture",
      "Under-2-Second Load Times (90+ PageSpeed)",
      "Automated Daily Backups & Security Walls",
      "Complete Admin Training & Documentation"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "WP Rocket", "Cloudflare"]
  },
  {
    slug: "app-development",
    title: "Mobile App Development",
    shortDesc: "Cross-platform iOS and Android mobile applications crafted for blazing performance and intuitive UX.",
    fullDesc: "Modern mobile applications built with React Native and Flutter, connected to scalable cloud backends, secure payment gateways, and real-time notification services.",
    category: "development",
    path: "/app-development",
    features: [
      "Cross-Platform iOS & Android",
      "React Native & Flutter",
      "RESTful & GraphQL API Integration",
      "Push Notifications & Offline Mode",
      "In-App Purchases & Payments",
      "App Store & Play Store Publishing"
    ],
    deliverables: [
      "Production-Ready iOS & Android Builds",
      "App Store & Google Play Submission",
      "Cloud Backend API Documentation",
      "Post-Launch Performance Monitoring"
    ],
    technologies: ["React Native", "Flutter", "Node.js", "Firebase", "TypeScript"]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
