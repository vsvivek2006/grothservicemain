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
    image: "/team/vikash_singh.webp",
    bio: "Founder and CEO driving strategic digital transformation, corporate vision, and client growth partnerships across Growth Service's offices in India and Nepal.",
    expertise: ["Business Strategy", "Digital Leadership", "Corporate Growth", "Global Operations"],
    email: "info@growthservice.in"
  },
  {
    id: 7,
    name: "Pinki Kumari",
    role: "HR Head",
    department: "Operations",
    officeId: "nepal",
    employeeCode: "GS-NPL-02",
    image: "/team/pinki_kumari.webp",
    bio: "Human resources head fostering a high-performance culture, talent development, transparent recruitment, and team excellence across all office branches in Nepal and India.",
    expertise: ["Talent Acquisition", "Employee Relations", "Organizational Culture", "HR Operations"]
  },

  // === VRINDAVAN OFFICE ===
  {
    id: 14,
    name: "Rahul Kumawat",
    role: "FullStack Developer",
    department: "Development",
    officeId: "vrindavan",
    employeeCode: "GS-VRN-01",
    image: "/team/rahul_kumawat.webp",
    bio: "Full-stack developer building robust, scalable web applications and enterprise portals using React, Node.js, and modern cloud architecture.",
    expertise: ["Full-Stack Development", "React.js", "Node.js", "API Engineering", "Database Architecture"]
  },
  {
    id: 15,
    name: "Ashu",
    role: "Frontend Developer",
    department: "Development",
    officeId: "vrindavan",
    employeeCode: "GS-VRN-02",
    image: "/team/ashu.webp",
    bio: "Frontend developer specializing in building modern, responsive, and intuitive web interfaces with clean component architectures and high aesthetic standards.",
    expertise: ["Frontend Development", "React.js", "UI/UX Implementation", "Responsive Design"]
  },
  {
    id: 8,
    name: "Praveen Kumar",
    role: "Sales Head",
    department: "Sales",
    officeId: "vrindavan",
    employeeCode: "GS-VRN-03",
    image: "",
    bio: "Sales head spearheading regional business development, client consultative partnerships, and enterprise digital solutions across India and Nepal.",
    expertise: ["Enterprise Sales", "Client Acquisition", "Growth Consultation", "Market Expansion"],
    email: "info@growthservice.in"
  },

  // === JAIPUR OFFICE ===
  {
    id: 4,
    name: "Vivek Singh",
    role: "Digital Marketing Manager",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-01",
    image: "/team/vivek_singh.webp",
    bio: "Digital marketing manager leading multi-channel growth campaigns, search engine visibility, and client ROI performance across India and international markets.",
    expertise: ["Digital Strategy", "SEO & Performance Marketing", "Meta Ads", "Brand Scaling"],
    email: "info@growthservice.in"
  },
  {
    id: 2,
    name: "Nupur",
    role: "Tech Manager",
    department: "Development",
    officeId: "jaipur",
    employeeCode: "GS-JPR-02",
    image: "/team/nupur.webp",
    bio: "Technology manager overseeing development architecture, web performance, modern React/Node.js solutions, and end-to-end technical delivery.",
    expertise: ["Technical Architecture", "Web Engineering", "Full-Stack Development", "System Delivery"]
  },
  {
    id: 5,
    name: "Nutan Mishra",
    role: "SEO Executive & Team Leader",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-03",
    image: "/team/nutan.webp",
    bio: "SEO team leader driving organic search performance, technical audit execution, on-page optimization, and SERP rankings for enterprise and local clients.",
    expertise: ["Technical SEO", "On-Page Optimization", "Search Analytics", "Keyword Strategy"]
  },
  {
    id: 13,
    name: "Kishan Kumar",
    role: "Frontend Developer",
    department: "Development",
    officeId: "jaipur",
    employeeCode: "GS-JPR-04",
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
    id: 9,
    name: "Rana Praveen",
    role: "Sales Executive",
    department: "Sales",
    officeId: "jaipur",
    employeeCode: "GS-JPR-05",
    image: "/team/rana_praveen.webp",
    bio: "Sales executive connecting businesses with tailored digital marketing and web development packages to achieve measurable revenue expansion.",
    expertise: ["Client Onboarding", "Consultative Selling", "Account Management", "Service Inquiries"]
  },
  {
    id: 6,
    name: "Tripti Sharma",
    role: "SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-06",
    image: "/team/tripty.webp",
    bio: "SEO executive specializing in in-depth keyword analysis, on-page content optimization, competitive auditing, and sustainable organic traffic growth.",
    expertise: ["Keyword Research", "On-Page SEO", "Link Building", "Content Optimization"]
  },
  {
    id: 12,
    name: "Lalan Kumar",
    role: "Junior SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-07",
    image: "",
    bio: "Junior SEO executive executing local SEO strategies, Google Business Profile management, and content-led optimization to boost regional search visibility.",
    expertise: ["Local SEO", "Google Business Profile", "Content Strategy", "Rank Tracking"]
  },
  {
    id: 10,
    name: "Saurav Singh",
    role: "Junior SEO Executive",
    department: "Marketing",
    officeId: "jaipur",
    employeeCode: "GS-JPR-08",
    image: "/team/saurav_singh.webp",
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
    image: "/team/nitish_kumar.webp",
    bio: "Junior SEO executive focused on technical SEO implementation, backlink analysis, and supporting campaigns to improve client search rankings.",
    expertise: ["Technical SEO", "Link Analysis", "SERP Tracking", "Audit Support"]
  },
  {
    id: 3,
    name: "Ashish",
    role: "Admin",
    department: "Operations",
    officeId: "jaipur",
    employeeCode: "GS-JPR-10",
    image: "/team/aashish.webp",
    bio: "Administrative coordinator managing operational logistics, client communication coordination, and smooth day-to-day workflow across our corporate facilities.",
    expertise: ["Office Operations", "Client Support", "Workflow Coordination", "Administrative Management"]
  },
] as const;

/**
 * Role hierarchy:
 * CEO -> Vivek Singh (Digital Marketing Manager) -> Tech Manager / Lead -> SEO Executive & Team Leader -> HR Head -> FullStack -> Frontend Developer -> Sales -> SEO Executives -> Lalan Kumar -> Junior SEO -> Admin
 */
export function getRolePriority(role: string, name?: string): number {
  const r = role.toLowerCase();
  const n = (name || '').toLowerCase();

  // 1. CEO & Founders
  if (r.includes('ceo') || r.includes('founder')) return 1;

  // 2. Vivek Singh / Digital Marketing Manager (first after CEO)
  if (n.includes('vivek') || r.includes('digital marketing manager')) return 2;

  // 3. Tech Manager / Tech Lead
  if (r.includes('tech manager') || r.includes('technology manager') || r.includes('tech lead')) return 3;

  // 4. SEO Executive & Team Leader (comes right after tech manager/lead)
  if (r.includes('seo') && (r.includes('leader') || r.includes('lead') || r.includes('team lead'))) return 4;

  // 5. HR Head / Operations Leadership
  if (r.includes('hr') || r.includes('human resources')) return 5;

  // 6. FullStack Developer
  if (r.includes('fullstack') || r.includes('full-stack') || r.includes('full stack')) return 6;

  // 7. Frontend Developer
  if (r.includes('frontend') || r.includes('front-end') || r.includes('front end')) return 7;

  // Fallback for general developer
  if (r.includes('developer') || r.includes('engineer')) return 8;

  // 8. Sales (Sales Head -> Sales Executive)
  if (r.includes('sales head')) return 9;
  if (r.includes('sales')) return 10;

  // 9. SEO (Executives -> Lalan -> Other Junior SEO)
  if (r.includes('seo') && !r.includes('junior')) return 11;
  if (n.includes('lalan')) return 12;
  if (r.includes('seo') || r.includes('junior')) return 13;

  // 10. Admin / Office Operations
  if (r.includes('admin')) return 14;

  return 99;
}

export function sortByRolePriority<T extends { role: string; name?: string }>(members: readonly T[]): T[] {
  return [...members].sort((a, b) => getRolePriority(a.role, a.name) - getRolePriority(b.role, b.name));
}

export function getAllTeamMembers(): readonly TeamMember[] {
  return sortByRolePriority(teamMembers);
}

export function getAllTeamMembersSorted(): TeamMember[] {
  return sortByRolePriority(teamMembers);
}

export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find(m => m.id === id);
}

export function getTeamMembersByOffice(officeId: string): readonly TeamMember[] {
  if (!officeId || officeId === 'all') return sortByRolePriority(teamMembers);
  return sortByRolePriority(teamMembers.filter(m => m.officeId.toLowerCase() === officeId.toLowerCase()));
}
