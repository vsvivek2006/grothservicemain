/**
 * Single source of truth for Growth Service business details,
 * official contact numbers, email addresses, and physical office locations.
 */

export interface OfficeContact {
  id: 'jaipur' | 'vrindavan' | 'nepal';
  slug: string;
  name: string;
  city: string;
  state: string;
  country: string;
  flag: string;
  address: string;
  phone: string;
  email: string;
  landmark?: string;
  postalCode: string;
  mapLink: string;
  timings: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const businessConfig = {
  name: "Growth Service",
  legalName: "Growth Service",
  tagline: "Digital Growth Partner",
  domain: "https://www.growthservice.in",
  canonicalOrigin: "https://www.growthservice.in",
  
  emails: {
    primary: "info@growthservice.in",
    support: "info@growthservice.in",
    jaipur: "jaipur@growthservice.in",
    vrindavan: "info@growthservice.in",
    nepal: "nepal@growthservice.in",
  },

  phones: {
    indiaPrimary: "+91 93414 36937",
    indiaJaipur: "+91 62073 00553",
    nepalPrimary: "+977 970-7382481",
    supportDesk: "+91 95212 81509",
  },

  whatsapp: {
    number: "919521281509",
    nepalNumber: "9779707382481",
    defaultUrl: "https://wa.me/919521281509?text=Hello%20Growth%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20digital%20growth%20services.",
  },

  social: {
    facebook: "https://facebook.com/growthservices",
    instagram: "https://instagram.com/growth_servces",
    linkedin: "https://linkedin.com/company/growthservice",
    youtube: "https://youtube.com/@growthservice",
  },

  offices: [
    {
      id: "jaipur",
      slug: "jaipur",
      name: "Jaipur Office",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      flag: "🇮🇳",
      address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 62073 00553",
      email: "jaipur@growthservice.in",
      landmark: "Near Jagatpura Flyover",
      postalCode: "302017",
      mapLink: "https://maps.google.com/?q=138A+Vivek+Vihar+Mayapuri+Jagatpura+Jaipur",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
      coordinates: { lat: 26.8289, lng: 75.8656 },
    },
    {
      id: "vrindavan",
      slug: "vrindavan",
      name: "Vrindavan Office",
      city: "Vrindavan",
      state: "Uttar Pradesh",
      country: "India",
      flag: "🇮🇳",
      address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121",
      phone: "+91 93414 36937",
      email: "info@growthservice.in",
      landmark: "Near Pushpa Garden, Kailash Nagar",
      postalCode: "281121",
      mapLink: "https://maps.google.com/?q=Radhika+Sadan+Pushpa+Garden+Kailash+Nagar+Vrindavan",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
      coordinates: { lat: 27.5818, lng: 77.7006 },
    },
    {
      id: "nepal",
      slug: "nepal",
      name: "Nepal Office",
      city: "Bariyarpatti",
      state: "Siraha",
      country: "Nepal",
      flag: "🇳🇵",
      address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal",
      phone: "+977 970-7382481",
      email: "nepal@growthservice.in",
      landmark: "Near Bariyarpatti Main Road",
      postalCode: "56500",
      mapLink: "https://maps.google.com/?q=Bariyarpatti+Rd+Bariyarpatti+56500+Nepal",
      timings: "Sun-Fri: 10:00 AM - 6:00 PM",
      coordinates: { lat: 26.6500, lng: 86.4000 },
    },
  ] as OfficeContact[],
} as const;
