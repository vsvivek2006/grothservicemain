export interface OfficeData {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  country: string;
  flag: string;
  isHeadOffice: boolean;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  landmark: string;
  postalCode: string;
  mapLink: string;
  timings: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  servicesOffered: string[];
  areasServed: string[];
  teamMemberIds: number[];
  description: string;
}

export const physicalOffices: OfficeData[] = [
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
    teamMemberIds: [1, 4, 6],
    description: "Our Jaipur office specializes in web development, SEO, and digital marketing services. Serving clients across Jaipur, Rajasthan, and beyond with world-class digital solutions."
  },
  {
    id: "vrindavan",
    slug: "vrindavan",
    name: "Vrindavan Office (Head Office)",
    city: "Vrindavan",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isHeadOffice: true,
    tagline: "Global Headquarters & Digital Solutions Center",
    address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121",
    phone: "+91 93414 36937",
    email: "info@growthservice.in",
    landmark: "Radhika Sadan ki Bassinet me",
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
    teamMemberIds: [1, 2, 3, 5, 8],
    description: "Our Vrindavan head office delivers comprehensive digital solutions including web development, SEO, and performance marketing to clients worldwide."
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
    teamMemberIds: [1, 7],
    description: "Growth Service operates from Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Bariyarpatti (Nepal). We deliver cutting-edge web development, SEO, and digital marketing services to clients across India and globally."
  }
];

export function getOfficeBySlug(slug: string): OfficeData | undefined {
  return physicalOffices.find(o => o.slug.toLowerCase() === slug.toLowerCase());
}

export function getOfficeById(id: string): OfficeData | undefined {
  return physicalOffices.find(o => o.id.toLowerCase() === id.toLowerCase());
}
