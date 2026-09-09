export interface IndustryData {
  id: string;
  name: string;
  iconName: string;
  shortDesc: string;
  keySolutions: string[];
  metricsHighlight: string;
}

export const industriesData: IndustryData[] = [
  {
    id: "ecommerce-retail",
    name: "E-Commerce & Retail",
    iconName: "ShoppingCart",
    shortDesc: "Scalable online storefronts, ROAS-optimized Meta/Google ad funnels, and retention systems.",
    keySolutions: ["Shopify & Custom Stores", "Product Catalog SEO", "Dynamic Remarketing Ads"],
    metricsHighlight: "300% Average Sales Growth"
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality & Tourism",
    iconName: "Hotel",
    shortDesc: "Direct hotel/guest house booking engines, local GMB dominance, and high-converting tour portals.",
    keySolutions: ["Direct Booking Websites", "Local Map Pack Ranking", "TripAdvisor & Review Boost"],
    metricsHighlight: "500% Increase in Bookings"
  },
  {
    id: "healthcare-wellness",
    name: "Healthcare & Clinics",
    iconName: "Activity",
    shortDesc: "HIPAA-conscious appointment scheduling, doctor profile visibility, and hyper-local SEO.",
    keySolutions: ["Clinic Landing Pages", "Google Local Services Ads", "Patient Reputation Management"],
    metricsHighlight: "Top 3 Local Search Positions"
  },
  {
    id: "real-estate-construction",
    name: "Real Estate & Builders",
    iconName: "Building2",
    shortDesc: "High-intent lead generation funnels, immersive property showcase pages, and CRM integration.",
    keySolutions: ["Project Showcase Sites", "High-Volume Meta Lead Forms", "Virtual Tour Integration"],
    metricsHighlight: "4x Lower Cost Per Qualified Lead"
  },
  {
    id: "education-edtech",
    name: "Education & Coaching",
    iconName: "GraduationCap",
    shortDesc: "Student enrollment funnels, course landing pages, and regional brand awareness campaigns.",
    keySolutions: ["Admission Lead Campaigns", "Fast LMS Integration", "Regional Video Ads"],
    metricsHighlight: "250% Growth in Student Inquiries"
  },
  {
    id: "professional-services",
    name: "B2B & Professional Services",
    iconName: "Briefcase",
    shortDesc: "Authority-building content strategies, LinkedIn B2B outreach, and polished corporate web portals.",
    keySolutions: ["Corporate Web Redesign", "B2B LinkedIn Campaigns", "Whitepaper Lead Funnels"],
    metricsHighlight: "150+ Direct B2B Inquiries/Mo"
  }
];
