export type OfficeId = 'jaipur' | 'vrindavan' | 'nepal';

export interface OfficeData {
  readonly id: OfficeId;
  readonly slug: string;
  readonly name: string;
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly flag: string;
  readonly isHeadOffice: boolean;
  readonly tagline: string;
  readonly address: string;
  readonly phone: string;
  readonly email: string;
  readonly landmark?: string;
  readonly postalCode: string;
  readonly mapLink: string;
  readonly timings: string;
  readonly coordinates: {
    readonly lat: number;
    readonly lng: number;
  };
  readonly servicesOffered: readonly string[];
  readonly areasServed: readonly string[];
  readonly teamMemberIds?: readonly number[];
  readonly description: string;
}

export const physicalOffices: readonly OfficeData[] = [
  {
    id: "jaipur",
    slug: "jaipur",
    name: "Jaipur Office",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    isHeadOffice: false,
    tagline: "Web Development, SEO & Digital Marketing in Rajasthan",
    address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
    phone: "+91 62073 00553",
    email: "jaipur@growthservice.in",
    landmark: "Near Jagatpura Flyover",
    postalCode: "302017",
    mapLink: "https://maps.google.com/?q=138A+Vivek+Vihar+Mayapuri+Jagatpura+Jaipur",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    coordinates: { lat: 26.8289, lng: 75.8656 },
    servicesOffered: [
      "Web Development",
      "SEO Services",
      "Digital Marketing",
      "Social Media Management",
      "Google Ads & PPC",
      "E-commerce Solutions"
    ],
    areasServed: [
      "Jagatpura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", 
      "C-Scheme", "Sitapura", "Tonk Road", "Ajmer Road", 
      "Raja Park", "Bani Park", "Sanganer", "Pratap Nagar"
    ],
    teamMemberIds: [2, 3, 4, 5, 6, 9, 10, 11, 12, 13],
    description: "Our Jaipur office serves as the corporate and technology hub for Growth Service's India operations. Located in Jagatpura, Jaipur, we deliver premium web development, SEO, digital marketing, and Google Ads services to businesses across Rajasthan and pan-India clients."
  },
  {
    id: "vrindavan",
    slug: "vrindavan",
    name: "Vrindavan Office",
    city: "Vrindavan",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isHeadOffice: false,
    tagline: "Digital Marketing, Web Development & SEO Solutions in Uttar Pradesh",
    address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121",
    phone: "+91 93414 36937",
    email: "info@growthservice.in",
    landmark: "Near Pushpa Garden, Kailash Nagar",
    postalCode: "281121",
    mapLink: "https://maps.google.com/?q=Radhika+Sadan+Pushpa+Garden+Kailash+Nagar+Vrindavan",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    coordinates: { lat: 27.5818, lng: 77.7006 },
    servicesOffered: [
      "Web Development",
      "SEO Services",
      "Digital Marketing",
      "Content Creation",
      "Social Media Marketing",
      "WhatsApp Marketing"
    ],
    areasServed: [
      "Vrindavan", "Mathura", "Agra", "Aligarh", "Lucknow", 
      "Kanpur", "Noida", "Delhi NCR", "Ghaziabad", "Firozabad"
    ],
    teamMemberIds: [7, 8],
    description: "Our Vrindavan office is the digital marketing and operations hub for Growth Service. Located in the spiritual city of Vrindavan, Uttar Pradesh, we serve businesses across Mathura, Agra, Lucknow, and the entire UP region with expert SEO, social media marketing, content creation, and web development services."
  },
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal Office",
    city: "Bariyarpatti",
    state: "Siraha",
    country: "Nepal",
    flag: "🇳🇵",
    isHeadOffice: true,
    tagline: "Growth Service International Head Office — Nepal",
    address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Siraha, Nepal",
    phone: "+977 970-7382481",
    email: "nepal@growthservice.in",
    landmark: "Near Bariyarpatti Main Road",
    postalCode: "56500",
    mapLink: "https://maps.google.com/?q=Bariyarpatti+Rd+Bariyarpatti+56500+Nepal",
    timings: "Sun-Fri: 10:00 AM - 6:00 PM",
    coordinates: { lat: 26.6500, lng: 86.4000 },
    servicesOffered: [
      "Web Development",
      "SEO Services",
      "Digital Marketing",
      "E-commerce Solutions",
      "Meta Ads Management",
      "WhatsApp Marketing",
      "Business Setup Consulting"
    ],
    areasServed: [
      "Bariyarpatti", "Lahan", "Siraha", "Janakpur", 
      "Biratnagar", "Kathmandu", "Pokhara", "Birgunj", "Dharan"
    ],
    teamMemberIds: [1],
    description: "Growth Service Nepal — our international head office — is located in Bariyarpatti, Siraha district. This is our global operations headquarters, directing digital strategy, client management, and business partnerships across Nepal, India, and international markets. We provide world-class web development, SEO, Meta Ads, e-commerce, and WhatsApp marketing solutions from Nepal."
  }
] as const;

export const physicalOfficesById = Object.fromEntries(
  physicalOffices.map(o => [o.id, o])
) as Record<OfficeId, OfficeData>;

export function getOfficeBySlug(slug: string): OfficeData | undefined {
  return physicalOffices.find(o => o.slug.toLowerCase() === slug.toLowerCase());
}

export function getOfficeById(id: string): OfficeData | undefined {
  return physicalOffices.find(o => o.id.toLowerCase() === id.toLowerCase());
}
