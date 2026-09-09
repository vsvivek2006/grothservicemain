export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: 'Leadership' | 'Development' | 'Marketing' | 'Operations';
  image: string;
  bio: string;
  expertise: string[];
  officeIds?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vikash Singh",
    role: "Founder & CEO",
    department: "Leadership",
    image: "/images/ceo.jpg",
    bio: "Visionary leader with 10+ years of experience in digital transformation. Passionate about helping businesses grow through innovative technology solutions across Jaipur, Vrindavan, and Nepal.",
    expertise: ["Business Strategy", "Digital Transformation", "Leadership", "Global Operations"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 2,
    name: "Vivek Singh",
    role: "Digital Marketing Expert",
    department: "Leadership",
    image: "/images/digital-marketing-expert.jpg",
    bio: "Strategic digital marketing specialist with expertise in SEO, PPC, and content marketing. Leading digital campaigns across all three office locations.",
    expertise: ["Digital Strategy", "SEO", "PPC", "Content Marketing"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 3,
    name: "Nupur Mishara",
    role: "Team Leader",
    department: "Leadership",
    image: "/images/team-leader.jpg",
    bio: "Experienced team leader managing operations across Jaipur, Vrindavan, and Nepal offices. Ensuring seamless project delivery and client satisfaction.",
    expertise: ["Team Management", "Project Coordination", "Client Relations", "Operations"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 4,
    name: "Rahul Kumar",
    role: "Team Lead - Developer",
    department: "Development",
    image: "/images/developer-lead.jpg",
    bio: "Expert full-stack developer and team lead specializing in React, TypeScript, and Node.js. Leading development teams across all office locations to deliver high-performance web applications.",
    expertise: ["React.js", "TypeScript", "Node.js", "Team Leadership", "MongoDB"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 5,
    name: "Nutan Mishra",
    role: "SEO Executive",
    department: "Marketing",
    image: "/images/seo-executive.jpg",
    bio: "Results-driven SEO professional with expertise in on-page and off-page optimization. Helping businesses rank higher on search engines and drive organic traffic.",
    expertise: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 6,
    name: "Priyansh Sharma",
    role: "Performance Marketer",
    department: "Marketing",
    image: "/images/performance-marketer.jpg",
    bio: "Performance marketing expert specializing in Google Ads, social media advertising, and conversion optimization. Driving measurable ROI for clients across all locations.",
    expertise: ["Google Ads", "Social Media Advertising", "PPC", "Conversion Optimization"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 7,
    name: "Lalan Kumar",
    role: "Junior SEO Executive",
    department: "Marketing",
    image: "/images/junior-seo.jpg",
    bio: "Passionate SEO professional with expertise in keyword research, content optimization, and local SEO. Helping businesses grow their online presence and reach new audiences.",
    expertise: ["Keyword Research", "Local SEO", "Content Optimization", "SEO Analytics"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  },
  {
    id: 8,
    name: "Ashish Singh",
    role: "Admin",
    department: "Operations",
    image: "/images/admin.jpg",
    bio: "Dedicated administrative professional managing office operations across all locations. Ensuring smooth day-to-day functioning, client support, and operational excellence.",
    expertise: ["Office Administration", "Client Support", "Operations", "Coordination"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/growthservice"
    }
  }
];

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find(m => m.id === id);
}

export function getTeamMembersByDepartment(dept: string): TeamMember[] {
  if (!dept || dept === 'all') return teamMembers;
  return teamMembers.filter(m => m.department.toLowerCase() === dept.toLowerCase());
}
