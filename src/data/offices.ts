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
    tagline: "Web Development & SEO Services in Rajasthan",
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
      "Social Media Management"
    ],
    areasServed: [
      "Jagatpura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", 
      "C-Scheme", "Sitapura", "Tonk Road", "Ajmer Road", 
      "Raja Park", "Bani Park"
    ],
    teamMemberIds: [1, 2, 3],
    description: "Our Jaipur office provides web development, SEO, and digital marketing services to clients in Jaipur, Rajasthan, and across India."
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
    tagline: "Digital Marketing, Web Development & SEO Solutions",
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
      "Content Creation"
    ],
    areasServed: [
      "Vrindavan", "Mathura", "Agra", "Aligarh", "Lucknow", 
      "Kanpur", "Noida", "Delhi NCR"
    ],
    teamMemberIds: [4, 5, 6, 7],
    description: "Our Vrindavan office provides digital marketing, web development, SEO, and strategic consulting to businesses in India and internationally."
  },
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal Office",
    city: "Bariyarpatti",
    state: "Siraha",
    country: "Nepal",
    flag: "🇳🇵",
    isHeadOffice: false,
    tagline: "Nepal Digital Solutions Office",
    address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal",
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
      "E-commerce Solutions"
    ],
    areasServed: [
      "Bariyarpatti", "Lahan", "Siraha", "Janakpur", 
      "Biratnagar", "Kathmandu"
    ],
    teamMemberIds: [8, 9],
    description: "Our Nepal office in Bariyarpatti (Siraha) delivers web development, SEO, and e-commerce solutions for businesses across Nepal."
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
