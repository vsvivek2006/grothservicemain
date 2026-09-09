import { OfficeId } from './offices';

export interface TeamMember {
  readonly id: number;
  readonly name: string;
  readonly role: string;
  readonly department: 'Leadership' | 'Development' | 'Marketing' | 'Operations' | 'Sales';
  readonly image: string;
  readonly bio: string;
  readonly expertise: readonly string[];
  readonly officeId: OfficeId;
  readonly employeeCode: string;
  readonly email?: string;
  readonly phone?: string;
  readonly socialLinks?: {
    readonly linkedin?: string;
    readonly twitter?: string;
  };
}

export const teamMembers: readonly TeamMember[] = [

  // === NEPAL HEAD OFFICE ===
  {
    id: 1,
    name: "Vikash Singh",
    role: "CEO & Founder",
    department: "Leadership",
    officeId: "nepal",
    employeeCode: "GS-NPL-01",
    image: "",
    bio: "Founder and CEO driving strategic digital transformation, corporate vision, and client growth partnerships across Growth Service's offices in India and Nepal.",
    expertise: ["Business Strategy", "Digital Leadership", "Corporate Growth", "Global Operations"],
    email: "info@growthservice.in"
  },

  // === VRINDAVAN OFFICE ===
  {
    id: 8,
    name: "Praveen Kumar",
    role: "Sales Head",
    department: "Sales",
    officeId: "vrindavan",
    employeeCode: "GS-VRN-01",
    image: "",
    bio: "Sales head spearheading regional business development, client consultative partnerships, and enterprise digital solutions across India and Nepal.",
    expertise: ["Enterprise Sales", "Client Acquisition", "Growth Consultation", "Market Expansion"],
    email: "info@growthservice.in"
  },
  {
    id: 7,
    name: "Pinki Kumari",
    role: "HR Head",
    department: "Operations",
    officeId: "vrindavan",
    employeeCode: "GS-VRN-02",
    image: "",
    bio: "Human resources head fostering a high-performance culture, talent development, transparent recruitment, and team excellence across all office branches.",
    expertise: ["Talent Acquisition", "Employee Relations", "Organizational Culture", "HR Operations"]
  },

  // === JAIPUR OFFICE ===
  {
    id: 2,
    name: "Nupur",
    role: "Tech Manager",
    department: "Development",
    officeId: "jaipur",
    employeeCode: "GS-JPR-01",
    image: "",
    bio: "Technology manager overseeing development architecture, web performance, modern React/Node.js solutions, and end-to-end technical delivery.",
    expertise: ["Technical Architecture", "Web Engineering", "Full-Stack Development", "System Delivery"]
  },
  {
    id: 4,
    name: "Vivek Singh",
    role: "Digital Marketing Manager",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-02",
    image: "",
    bio: "Digital marketing manager leading multi-channel growth campaigns, search engine visibility, and client ROI performance across India and international markets.",
    expertise: ["Digital Strategy", "SEO & Performance Marketing", "Meta Ads", "Brand Scaling"],
    email: "info@growthservice.in"
  },
  {
    id: 3,
    name: "Ashish",
    role: "Admin",
    department: "Operations",
    officeId: "jaipur",
    employeeCode: "GS-JPR-03",
    image: "",
    bio: "Administrative coordinator managing operational logistics, client communication coordination, and smooth day-to-day workflow across our corporate facilities.",
    expertise: ["Office Operations", "Client Support", "Workflow Coordination", "Administrative Management"]
  },
  {
    id: 5,
    name: "Nutan Mishra",
    role: "SEO Executive & Team Leader",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-04",
    image: "",
    bio: "SEO team leader driving organic search performance, technical audit execution, on-page optimization, and SERP rankings for enterprise and local clients.",
    expertise: ["Technical SEO", "On-Page Optimization", "Search Analytics", "Keyword Strategy"]
  },
  {
    id: 6,
    name: "Tripti Sharma",
    role: "SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-05",
    image: "",
    bio: "SEO executive specializing in in-depth keyword analysis, on-page content optimization, competitive auditing, and sustainable organic traffic growth.",
    expertise: ["Keyword Research", "On-Page SEO", "Link Building", "Content Optimization"]
  },
  {
    id: 9,
    name: "Rana Praveen",
    role: "Sales Executive",
    department: "Sales",
    officeId: "jaipur",
    employeeCode: "GS-JPR-06",
    image: "",
    bio: "Sales executive connecting businesses with tailored digital marketing and web development packages to achieve measurable revenue expansion.",
    expertise: ["Client Onboarding", "Consultative Selling", "Account Management", "Service Inquiries"]
  },
  {
    id: 13,
    name: "Kishan Kumar",
    role: "Frontend Developer",
    department: "Development",
    officeId: "jaipur",
    employeeCode: "GS-JPR-07",
    image: "/team/kishan-kumar.jpg",
    bio: "Frontend developer crafting fast, responsive, and visually polished web interfaces using React.js and modern CSS. Focused on pixel-perfect UI implementation, Core Web Vitals performance, and smooth user experiences across devices.",
    expertise: ["Web Development", "React.js", "UI/UX Implementation", "Performance Optimization"],
    email: "kishan.growthservice@gmail.com",
    phone: "+91 6203386747",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kishankr2007"
    }
  },
  {
    id: 10,
    name: "Saurav Singh",
    role: "Junior SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-08",
    image: "",
    bio: "Junior SEO executive contributing to on-page optimization, keyword research, and content strategy to drive organic growth for our clients.",
    expertise: ["On-Page SEO", "Keyword Research", "Content Optimization", "SEO Reporting"]
  },
  {
    id: 11,
    name: "Nitish Kumar",
    role: "Junior SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-09",
    image: "",
    bio: "Junior SEO executive focused on technical SEO implementation, backlink analysis, and supporting campaigns to improve client search rankings.",
    expertise: ["Technical SEO", "Link Analysis", "SERP Tracking", "Audit Support"]
  },
  {
    id: 12,
    name: "Lalan Kumar",
    role: "Junior SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-10",
    image: "",
    bio: "Junior SEO executive executing local SEO strategies, Google Business Profile management, and content-led optimization to boost regional search visibility.",
    expertise: ["Local SEO", "Google Business Profile", "Content Strategy", "Rank Tracking"]
  },
] as const;

/** Role hierarchy: lower number = higher rank.
 *  'junior' is checked explicitly before the loop to prevent "Junior SEO Executive" matching 'executive'. */
const ROLE_PRIORITY: Record<string, number> = {
  'ceo': 1,
  'founder': 1,
  'co-founder': 2,
  'cto': 3,
  'cmo': 3,
  'coo': 3,
  'director': 4,
  'head': 5,
  'manager': 6,
  'lead': 7,
  'senior': 8,
  'executive': 9,
  'junior': 10,
  'specialist': 11,
  'coordinator': 12,
  'developer': 13,
  'associate': 14,
  'admin': 15,
  'intern': 16,
};

function getRolePriority(role: string): number {
  const lower = role.toLowerCase();
  if (lower.includes('junior')) return ROLE_PRIORITY['junior'];
  for (const [key, priority] of Object.entries(ROLE_PRIORITY)) {
    if (lower.includes(key)) return priority;
  }
  return 99;
}

export function sortByRolePriority<T extends { role: string }>(members: readonly T[]): T[] {
  return [...members].sort((a, b) => getRolePriority(a.role) - getRolePriority(b.role));
}

export function getAllTeamMembers(): readonly TeamMember[] {
  return teamMembers;
}

export function getAllTeamMembersSorted(): TeamMember[] {
  return sortByRolePriority(teamMembers);
}

export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find(m => m.id === id);
}

export function getTeamMembersByOffice(officeId: string): readonly TeamMember[] {
  if (!officeId || officeId === 'all') return teamMembers;
  return teamMembers.filter(m => m.officeId.toLowerCase() === officeId.toLowerCase());
}
