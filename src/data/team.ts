export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: 'Leadership' | 'Development' | 'Marketing' | 'Operations' | 'Sales';
  image: string;
  bio: string;
  expertise: string[];
  officeId: 'jaipur' | 'vrindavan' | 'nepal';
  officeSlug: string;
  employeeCode: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  // === JAIPUR CORPORATE & TECH OFFICE ===
  {
    id: 1,
    name: "Vikash Singh",
    role: "CEO & Founder",
    department: "Leadership",
    officeId: "jaipur",
    officeSlug: "jaipur",
    employeeCode: "GS-JPR-01",
    image: "",
    bio: "Founder and CEO driving strategic digital transformation, corporate vision, and client growth partnerships across Growth Service's offices in India and Nepal.",
    expertise: ["Business Strategy", "Digital Leadership", "Corporate Growth", "Global Operations"],
    email: "info@growthservice.in"
  },
  {
    id: 2,
    name: "Nupur",
    role: "Tech Manager",
    department: "Development",
    officeId: "jaipur",
    officeSlug: "jaipur",
    employeeCode: "GS-JPR-02",
    image: "",
    bio: "Technology manager overseeing development architecture, web performance, modern React/Node.js solutions, and end-to-end technical delivery.",
    expertise: ["Technical Architecture", "Web Engineering", "Full-Stack Development", "System Delivery"]
  },
  {
    id: 3,
    name: "Ashish",
    role: "Admin",
    department: "Operations",
    officeId: "jaipur",
    officeSlug: "jaipur",
    employeeCode: "GS-JPR-03",
    image: "",
    bio: "Administrative coordinator managing operational logistics, client communication coordination, and smooth day-to-day workflow across our corporate facilities.",
    expertise: ["Office Operations", "Client Support", "Workflow Coordination", "Administrative Management"]
  },

  // === VRINDAVAN DIGITAL MARKETING & OPERATIONS OFFICE ===
  {
    id: 4,
    name: "Vivek Singh",
    role: "Digital Marketing Manager",
    department: "Marketing",
    officeId: "vrindavan",
    officeSlug: "vrindavan",
    employeeCode: "GS-VRN-01",
    image: "",
    bio: "Digital marketing manager leading multi-channel growth campaigns, search engine visibility, and client ROI performance across India and international markets.",
    expertise: ["Digital Strategy", "SEO & Performance Marketing", "Meta Ads", "Brand Scaling"],
    email: "info@growthservice.in"
  },
  {
    id: 5,
    name: "Nutan Mishra",
    role: "SEO Executive & Team Leader (SEO Team)",
    department: "Marketing",
    officeId: "vrindavan",
    officeSlug: "vrindavan",
    employeeCode: "GS-VRN-02",
    image: "",
    bio: "SEO team leader driving organic search performance, technical audit execution, on-page optimization, and SERP rankings for enterprise and local clients.",
    expertise: ["Technical SEO", "On-Page Optimization", "Search Analytics", "Keyword Strategy"]
  },
  {
    id: 6,
    name: "Tripti Sharma",
    role: "SEO Executive",
    department: "Marketing",
    officeId: "vrindavan",
    officeSlug: "vrindavan",
    employeeCode: "GS-VRN-03",
    image: "",
    bio: "SEO executive specializing in in-depth keyword analysis, on-page content optimization, competitive auditing, and sustainable organic traffic growth.",
    expertise: ["Keyword Research", "On-Page SEO", "Link Building", "Content Optimization"]
  },
  {
    id: 7,
    name: "Pinki Kumari",
    role: "HR Head",
    department: "Operations",
    officeId: "vrindavan",
    officeSlug: "vrindavan",
    employeeCode: "GS-VRN-04",
    image: "",
    bio: "Human resources head fostering a high-performance culture, talent development, transparent recruitment, and team excellence across all office branches.",
    expertise: ["Talent Acquisition", "Employee Relations", "Organizational Culture", "HR Operations"]
  },

  // === NEPAL CLIENT GROWTH & SALES OFFICE ===
  {
    id: 8,
    name: "Praveen Kumar",
    role: "Sales Head",
    department: "Sales",
    officeId: "nepal",
    officeSlug: "nepal",
    employeeCode: "GS-NPL-01",
    image: "",
    bio: "Sales head spearheading regional business development, client consultative partnerships, and enterprise digital solutions across Nepal and border regions.",
    expertise: ["Enterprise Sales", "Client Acquisition", "Growth Consultation", "Market Expansion"],
    email: "nepal@growthservice.in"
  },
  {
    id: 9,
    name: "Rana Praveen",
    role: "Sales Executive",
    department: "Sales",
    officeId: "nepal",
    officeSlug: "nepal",
    employeeCode: "GS-NPL-02",
    image: "",
    bio: "Sales executive connecting businesses with tailored digital marketing and web development packages to achieve measurable revenue expansion.",
    expertise: ["Client Onboarding", "Consultative Selling", "Account Management", "Service Inquiries"]
  }
];

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find(m => m.id === id);
}

export function getTeamMembersByOffice(officeId: string): TeamMember[] {
  if (!officeId || officeId === 'all') return teamMembers;
  return teamMembers.filter(m => m.officeId.toLowerCase() === officeId.toLowerCase());
}

export function getTeamMembersByDepartment(dept: string): TeamMember[] {
  if (!dept || dept === 'all') return teamMembers;
  return teamMembers.filter(m => m.department.toLowerCase() === dept.toLowerCase());
}
