import { OfficeId, physicalOfficesById } from './offices';

export type RegionSlug =
  | 'delhi-ncr'
  | 'rajasthan'
  | 'uttar-pradesh'
  | 'bihar'
  | 'punjab-chandigarh'
  | 'goa'
  | 'maharashtra'
  | 'karnataka'
  | 'nepal';

export interface RegionData {
  readonly slug: RegionSlug;
  readonly name: string;
  readonly state: string;
  readonly country: string;
  readonly flag: string;
  readonly description: string;
  readonly citySlugs: readonly string[];
}

export interface LocationData {
  readonly slug: string;
  readonly name: string;
  readonly regionSlug: RegionSlug;
  readonly regionName: string;
  readonly state: string;
  readonly country: string;
  readonly flag: string;
  readonly isPhysicalOffice: boolean;
  readonly officeId?: OfficeId;
  readonly servingOfficeId?: OfficeId;
  readonly localAreas: readonly string[];
  readonly keyIndustries: readonly string[];
  readonly servicesAvailable: readonly string[];
  readonly description: string;
  readonly faqs: readonly { readonly q: string; readonly a: string }[];
}

export type CityData = LocationData;

export const regionsData: readonly RegionData[] = [
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    state: "National Capital Region",
    country: "India",
    flag: "🇮🇳",
    description: "North India's largest economic powerhouse, comprising high-growth enterprise, corporate SaaS, retail, and tech startup hubs.",
    citySlugs: ["delhi", "gurgaon", "noida"]
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    description: "Home to our Jaipur office, serving premier handicrafts, tourism, gems, and real estate enterprises.",
    citySlugs: ["jaipur", "jodhpur", "udaipur", "kota", "ajmer"]
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    description: "Home to Growth Service Vrindavan office, driving digital growth for heritage hospitality, retail, and industries.",
    citySlugs: ["vrindavan", "mathura", "agra", "lucknow"]
  },
  {
    slug: "bihar",
    name: "Bihar",
    state: "Bihar",
    country: "India",
    flag: "🇮🇳",
    description: "A fast-emerging consumer market with booming education, healthcare, retail, and local professional services seeking digital visibility.",
    citySlugs: ["patna", "gaya", "muzaffarpur"]
  },
  {
    slug: "punjab-chandigarh",
    name: "Punjab & Chandigarh",
    state: "Punjab / Chandigarh",
    country: "India",
    flag: "🇮🇳",
    description: "Prominent northern commercial zone with thriving manufacturing, agricultural technology, export trade, and educational centers.",
    citySlugs: ["chandigarh", "ludhiana"]
  },
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    country: "India",
    flag: "🇮🇳",
    description: "India's tourism and hospitality capital, featuring boutique luxury resorts, international dining, real estate, and lifestyle brands.",
    citySlugs: ["goa", "panaji"]
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    state: "Maharashtra",
    country: "India",
    flag: "🇮🇳",
    description: "India's financial and industrial capital, featuring intense competition across fintech, e-commerce, media, and B2B services.",
    citySlugs: ["mumbai", "pune"]
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    state: "Karnataka",
    country: "India",
    flag: "🇮🇳",
    description: "The technology capital of India, with deep demand for high-performance React web engineering, data-driven SEO, and paid media.",
    citySlugs: ["bangalore"]
  },
  {
    slug: "nepal",
    name: "Nepal",
    state: "Nepal",
    country: "Nepal",
    flag: "🇳🇵",
    description: "Home to our Bariyarpatti Office, empowering cross-border Himalayan commerce, regional businesses, and international startups.",
    citySlugs: ["bariyarpatti", "kathmandu"]
  }
] as const;

export const citiesData: readonly CityData[] = [
  // --- RAJASTHAN ---
  {
    slug: "jaipur",
    name: "Jaipur",
    regionSlug: "rajasthan",
    regionName: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: true,
    officeId: "jaipur",
    servingOfficeId: "jaipur",
    localAreas: ["Jagatpura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "C-Scheme", "Sitapura", "Tonk Road", "Raja Park", "Bani Park", "Ajmer Road"],
    keyIndustries: ["Gems & Jewellery", "Handicrafts & Textiles", "Hospitality & Tourism", "Real Estate", "Higher Education"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "social-media", "content-marketing", "ecommerce"],
    description: "Growth Service operates a physical office in Jaipur, delivering web development, SEO, and digital marketing services to businesses across Jaipur and Rajasthan.",
    faqs: [
      { q: "Where is the Growth Service office located in Jaipur?", a: `Our physical office is located at ${physicalOfficesById.jaipur.address}.` },
      { q: "Can I meet the technical and marketing team in Jaipur?", a: "Yes, our team is available at our Jaipur office for in-person consultations from Monday to Saturday." },
      { q: "Do you offer localized SEO for Jaipur businesses?", a: "Yes, we specialize in local GMB map-pack optimization, Hindi/English content strategies, and commercial area targeting (e.g. Sitapura, Mansarovar, C-Scheme)." }
    ]
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    regionSlug: "rajasthan",
    regionName: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "jaipur",
    localAreas: ["Ratanada", "Shastri Nagar", "Sardarpura", "Pal Road", "Basni"],
    keyIndustries: ["Wooden Handicrafts", "Heritage Hospitality", "Export Trade", "Textiles"],
    servicesAvailable: ["seo", "web-development", "ecommerce", "paid-marketing"],
    description: "Growth Service powers export e-commerce websites and global SEO visibility for handicraft manufacturers and luxury heritage hotels across Jodhpur.",
    faqs: [
      { q: "How does Growth Service support Jodhpur exporters?", a: "We build international e-commerce platforms with global payment gateways and execute B2B export SEO strategies." }
    ]
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    regionSlug: "rajasthan",
    regionName: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "jaipur",
    localAreas: ["Fatehpura", "Hiran Magri", "Panchwati", "Sukher", "Lake Pichola Area"],
    keyIndustries: ["Destination Weddings", "Luxury Hospitality", "Mineral Mining", "Artisan Crafts"],
    servicesAvailable: ["web-development", "seo", "social-media", "paid-marketing"],
    description: "We provide bespoke direct booking platforms, wedding venue marketing, and premium social media campaigns for Udaipur's premier hospitality sector.",
    faqs: [
      { q: "Do you build direct booking engines for Udaipur luxury hotels?", a: "Yes, we build fast React/Next.js portals with commission-free direct booking integrations." }
    ]
  },
  {
    slug: "kota",
    name: "Kota",
    regionSlug: "rajasthan",
    regionName: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "jaipur",
    localAreas: ["Vigyan Nagar", "Talwandi", "Indra Vihar", "Rajeev Gandhi Nagar", "Dadabari"],
    keyIndustries: ["EdTech & Coaching", "Hostel & Housing", "Local Retail"],
    servicesAvailable: ["seo", "paid-marketing", "web-development", "lead-generation"],
    description: "Helping premier coaching institutes and student housing networks in Kota dominate student admissions with high-ROI Google and Meta Ads.",
    faqs: [
      { q: "Can you generate qualified admission inquiries in Kota?", a: "Yes, our performance marketing funnels generate verified student and parent leads across northern India." }
    ]
  },
  {
    slug: "ajmer",
    name: "Ajmer",
    regionSlug: "rajasthan",
    regionName: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "jaipur",
    localAreas: ["Vaishali Nagar", "Civil Lines", "Adarsh Nagar", "Pushkar Road"],
    keyIndustries: ["Pilgrimage Tourism", "Education", "Food & Confectionery"],
    servicesAvailable: ["seo", "local-seo", "web-development"],
    description: "Local SEO, Google My Business management, and multilingual web development for hotels, travel operators, and heritage businesses in Ajmer.",
    faqs: [
      { q: "How do you help hotels near Ajmer Dargah and Pushkar?", a: "We optimize local search visibility so visiting pilgrims find and book your properties directly." }
    ]
  },

  // --- UTTAR PRADESH ---
  {
    slug: "vrindavan",
    name: "Vrindavan",
    regionSlug: "uttar-pradesh",
    regionName: "Uttar Pradesh",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: true,
    officeId: "vrindavan",
    servingOfficeId: "vrindavan",
    localAreas: ["Kailash Nagar", "Raman Reti", "Chhatikara Road", "Parikrama Marg", "Vidyapeeth Chauraha", "Sunrakh Road", "Prem Mandir Road"],
    keyIndustries: ["Guest Houses & Hotels", "Pilgrimage Tourism", "Religious Services", "Handicrafts & Puja Essentials"],
    servicesAvailable: ["seo", "web-development", "social-media", "paid-marketing", "content-marketing"],
    description: "Growth Service operates its company office in Vrindavan, providing comprehensive digital marketing, web development, and SEO services to businesses locally and globally.",
    faqs: [
      { q: "Where is the Vrindavan office of Growth Service located?", a: `Our Vrindavan office is located at ${physicalOfficesById.vrindavan.address}.` },
      { q: "What services are available from the Vrindavan office?", a: "Web development, SEO auditing, social media management, and performance marketing are available to clients through our Vrindavan office." }
    ]
  },
  {
    slug: "mathura",
    name: "Mathura",
    regionSlug: "uttar-pradesh",
    regionName: "Uttar Pradesh",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Krishna Nagar", "Civil Lines", "Dampier Nagar", "Highway City", "Refinery Township"],
    keyIndustries: ["Hotels & Restaurants", "Silver & Brass Artisans", "Dairy & Confectionery"],
    servicesAvailable: ["seo", "web-development", "local-seo", "paid-marketing"],
    description: "Comprehensive digital growth for Mathura's hospitality, traditional sweets merchants, and local retail stores seeking pan-India sales.",
    faqs: [
      { q: "Which office serves clients in Mathura?", a: "Mathura clients are supported directly in-person by our adjacent Vrindavan Head Office team." }
    ]
  },
  {
    slug: "agra",
    name: "Agra",
    regionSlug: "uttar-pradesh",
    regionName: "Uttar Pradesh",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Sanjay Place", "Tajganj", "Dayalbagh", "Kamla Nagar", "Sikandra"],
    keyIndustries: ["Leather & Footwear", "Marble Inlay Crafts", "Tourism & Hotels", "Handicrafts Export"],
    servicesAvailable: ["seo", "web-development", "ecommerce", "paid-marketing"],
    description: "Enabling Agra exporters and hospitality brands to reach global travelers and B2B buyers with multilingual SEO and fast e-commerce portals.",
    faqs: [
      { q: "How can Agra footwear manufacturers benefit from Growth Service?", a: "We design custom B2B wholesale portals and run targeted lead generation for domestic and export buyers." }
    ]
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    regionSlug: "uttar-pradesh",
    regionName: "Uttar Pradesh",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Vibhuti Khand"],
    keyIndustries: ["Chikan & Textiles", "Healthcare", "Real Estate", "Education"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "social-media"],
    description: "High-impact digital marketing, Google Search Ads, and custom responsive web development for businesses in Uttar Pradesh's capital city.",
    faqs: [
      { q: "Do you handle healthcare and clinic SEO in Lucknow?", a: "Yes, we optimize doctors, specialized clinics, and multi-specialty hospitals for top local search rankings." }
    ]
  },

  // --- DELHI NCR ---
  {
    slug: "delhi",
    name: "Delhi",
    regionSlug: "delhi-ncr",
    regionName: "Delhi NCR",
    state: "Delhi",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Connaught Place", "Saket", "South Extension", "Nehru Place", "Dwarka", "Rohini", "Lajpat Nagar", "Pitampura", "Karol Bagh", "Okhla Industrial Area"],
    keyIndustries: ["Corporate Services", "E-commerce & D2C", "Retail Chains", "Legal & Financial", "Healthcare"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "social-media", "content-marketing", "ecommerce"],
    description: "Growth Service delivers enterprise-grade SEO, custom React web development, and ROAS-focused performance ads for businesses across Delhi.",
    faqs: [
      { q: "Does Growth Service have team coverage for Delhi clients?", a: "Yes, our executive team supports Delhi businesses remotely and through scheduled in-person meetings from our nearby North India offices." },
      { q: "What digital marketing services are most popular in Delhi?", a: "Enterprise SEO, Google Ads management, high-volume lead generation funnels, and modern TypeScript/React web development." }
    ]
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    regionSlug: "delhi-ncr",
    regionName: "Delhi NCR",
    state: "Haryana",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Cyber City", "Golf Course Road", "DLF Phase 1-5", "Sohna Road", "Udyog Vihar", "Sector 29", "Golf Course Extension"],
    keyIndustries: ["Fintech & SaaS", "Corporate Real Estate", "B2B Professional Services", "Luxury Retail"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "branding", "lead-generation"],
    description: "Growth engineering, modern web applications, and hyper-targeted B2B digital marketing for Cyber City and Millennium City enterprises.",
    faqs: [
      { q: "How do you assist B2B SaaS and corporate firms in Gurgaon?", a: "We run high-intent Google Search campaigns, LinkedIn account-based marketing, and technical SEO designed for long sales cycles." }
    ]
  },
  {
    slug: "noida",
    name: "Noida",
    regionSlug: "delhi-ncr",
    regionName: "Delhi NCR",
    state: "Uttar Pradesh",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Sector 62", "Sector 18", "Sector 135", "Noida Expressway", "Sector 16", "Greater Noida", "Pari Chowk"],
    keyIndustries: ["IT & Software", "Media & Entertainment", "Real Estate Development", "Manufacturing"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "social-media"],
    description: "Comprehensive SEO, lead generation for real estate, and scalable React websites for Noida's commercial and tech corridors.",
    faqs: [
      { q: "Can Growth Service handle high-volume real estate campaigns in Noida?", a: "Yes, our team creates verified lead forms and automated WhatsApp nurturing funnels for property developers." }
    ]
  },

  // --- BIHAR ---
  {
    slug: "patna",
    name: "Patna",
    regionSlug: "bihar",
    regionName: "Bihar",
    state: "Bihar",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Boring Road", "Kankarbagh", "Bailey Road", "Fraser Road", "Rajendra Nagar", "Patliputra Colony", "Danapur", "Anisabad"],
    keyIndustries: ["Education & Test Prep", "Healthcare & Clinics", "Automobile Dealerships", "Retail Showrooms"],
    servicesAvailable: ["seo", "local-seo", "web-development", "social-media", "paid-marketing"],
    description: "Helping Patna businesses dominate local search rankings, generate verified student and patient leads, and launch modern websites.",
    faqs: [
      { q: "How do you help local coaching institutes in Patna?", a: "We run hyper-targeted Meta/Google ad funnels and local SEO to generate student admissions during enrollment seasons." },
      { q: "Which Growth Service office oversees Bihar campaigns?", a: "Campaigns for Bihar are coordinated through our Vrindavan head office and Nepal office." }
    ]
  },
  {
    slug: "gaya",
    name: "Gaya",
    regionSlug: "bihar",
    regionName: "Bihar",
    state: "Bihar",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Bodh Gaya", "Civil Lines", "AP Colony", "Rampur", "Tekari Road"],
    keyIndustries: ["Buddhist Tourism & Hospitality", "Pilgrimage Travel", "Local Retail"],
    servicesAvailable: ["seo", "web-development", "local-seo"],
    description: "Specialized direct-booking hotel websites and multi-language international SEO for Bodh Gaya hotels and international travel agencies.",
    faqs: [
      { q: "Do you support hotels in Bodh Gaya?", a: "Yes, we build international traveler booking engines and optimize for tourists visiting from Southeast Asia and Europe." }
    ]
  },
  {
    slug: "muzaffarpur",
    name: "Muzaffarpur",
    regionSlug: "bihar",
    regionName: "Bihar",
    state: "Bihar",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Mithanpura", "Motijheel", "Jawahar Lal Road", "Ahiyapur", "Bela Industrial Area"],
    keyIndustries: ["Agriculture & Litchi Trade", "Textile Wholesalers", "Medical Services"],
    servicesAvailable: ["seo", "web-development", "ecommerce"],
    description: "Empowering Muzaffarpur businesses and agricultural traders with high-performance e-commerce and local customer acquisition.",
    faqs: [
      { q: "Can you build e-commerce stores for North Bihar traders?", a: "Yes, we create mobile-friendly online stores with integrated payment systems and local courier tracking." }
    ]
  },

  // --- PUNJAB / CHANDIGARH ---
  {
    slug: "chandigarh",
    name: "Chandigarh",
    regionSlug: "punjab-chandigarh",
    regionName: "Punjab & Chandigarh",
    state: "Chandigarh",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Sector 17", "Sector 35", "Sector 8", "IT Park", "Phase 8 Mohali", "Panchkula Sector 5"],
    keyIndustries: ["IT & Technology", "Immigration & Visa Consultants", "Education", "Healthcare"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "lead-generation"],
    description: "High-converting lead generation funnels, fast React websites, and search engine optimization for Tricity businesses.",
    faqs: [
      { q: "Do you provide lead generation for Chandigarh consultants?", a: "Yes, we run highly compliant and qualified inquiry campaigns for overseas education and immigration consultancies." }
    ]
  },
  {
    slug: "ludhiana",
    name: "Ludhiana",
    regionSlug: "punjab-chandigarh",
    regionName: "Punjab & Chandigarh",
    state: "Punjab",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Model Town", "Ferozepur Road", "Focal Point", "Civil Lines", "Sarabha Nagar"],
    keyIndustries: ["Hosiery & Apparel", "Bicycle & Parts Manufacturing", "Textile Machinery", "Auto Components"],
    servicesAvailable: ["web-development", "seo", "ecommerce", "paid-marketing"],
    description: "B2B web catalogs, export lead funnels, and domestic brand building for Ludhiana's prominent manufacturing sector.",
    faqs: [
      { q: "Can you help Ludhiana manufacturers generate B2B inquiries?", a: "Yes, we optimize industrial websites for product keywords and run targeted Google Search campaigns." }
    ]
  },

  // --- GOA ---
  {
    slug: "panaji",
    name: "Panaji",
    regionSlug: "goa",
    regionName: "Goa",
    state: "Goa",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Fontainhas", "Miramar", "Campal", "Dona Paula", "Patto Plaza"],
    keyIndustries: ["Luxury Resorts", "Water Sports & Tours", "Gastronomy & Dining", "Boutique Real Estate"],
    servicesAvailable: ["web-development", "seo", "social-media", "paid-marketing"],
    description: "Luxury visual web design, local SEO, and influencer-ready social media strategies for Goa's hospitality and lifestyle entrepreneurs.",
    faqs: [
      { q: "How do you help Goa restaurants and resorts gain online bookings?", a: "We run localized Google Maps optimization, high-engagement Instagram reels, and frictionless direct booking websites." }
    ]
  },
  {
    slug: "goa",
    name: "Goa",
    regionSlug: "goa",
    regionName: "Goa",
    state: "Goa",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Panaji", "Margao", "Calangute", "Candolim", "Vasco da Gama", "Fontainhas", "Anjuna", "Baga"],
    keyIndustries: ["Hospitality & Tourism", "Luxury Resorts & Villas", "Water Sports", "Dining & Nightlife", "Boutique Real Estate"],
    servicesAvailable: ["web-development", "seo", "social-media", "paid-marketing"],
    description: "Growth Service provides digital marketing, luxury hospitality web design, local SEO, and paid media for resorts, restaurants, and businesses across Goa.",
    faqs: [
      { q: "Do you offer digital marketing for resorts and villas in Goa?", a: "Yes, we specialize in high-converting booking websites, local SEO, and Instagram marketing for luxury villas, boutique hotels, and restaurants in Goa." }
    ]
  },

  // --- MAHARASHTRA ---
  {
    slug: "mumbai",
    name: "Mumbai",
    regionSlug: "maharashtra",
    regionName: "Maharashtra",
    state: "Maharashtra",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Bandra Kurla Complex (BKC)", "Andheri East & West", "Nariman Point", "Lower Parel", "Powai", "Juhu", "Malad", "Thane", "Navi Mumbai"],
    keyIndustries: ["Financial Services", "Entertainment & Media", "D2C Brands", "Luxury Real Estate"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "social-media", "content-marketing", "ecommerce"],
    description: "Enterprise digital marketing, technical search authority, and scalable full-stack web platforms for Mumbai's competitive commercial landscape.",
    faqs: [
      { q: "How does Growth Service compete in Mumbai's market?", a: "We deliver measurable ROI through transparent reporting, fast React/Next.js engineering, and proven ranking improvements." }
    ]
  },
  {
    slug: "pune",
    name: "Pune",
    regionSlug: "maharashtra",
    regionName: "Maharashtra",
    state: "Maharashtra",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Hinjawadi IT Park", "Kothrud", "Viman Nagar", "Kalyani Nagar", "Baner", "Kharadi", "Aundh"],
    keyIndustries: ["IT & SaaS Startups", "Automobile & Manufacturing", "Higher Education"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "content-marketing"],
    description: "Performance marketing, technical SEO audits, and custom software portals for tech innovators and educational centers in Pune.",
    faqs: [
      { q: "Can you assist tech startups in Hinjawadi and Kharadi?", a: "Yes, we specialize in high-converting SaaS landing pages and organic keyword acquisition." }
    ]
  },

  // --- KARNATAKA ---
  {
    slug: "bangalore",
    name: "Bangalore",
    regionSlug: "karnataka",
    regionName: "Karnataka",
    state: "Karnataka",
    country: "India",
    flag: "🇮🇳",
    isPhysicalOffice: false,
    servingOfficeId: "vrindavan",
    localAreas: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield", "Electronic City", "JP Nagar", "Marathahalli", "Bellandur"],
    keyIndustries: ["SaaS & DeepTech", "E-Commerce & D2C", "Fintech", "HealthTech"],
    servicesAvailable: ["seo", "web-development", "paid-marketing", "social-media", "ecommerce"],
    description: "Engineering-grade web development in React and Next.js, combined with technical SEO and performance ads for Bangalore's tech ecosystem.",
    faqs: [
      { q: "What tech stack do you recommend for Bangalore startups?", a: "We build on React 18, TypeScript, Tailwind CSS, and Node.js with headless CMS or microservices backend." }
    ]
  },

  // --- NEPAL ---
  {
    slug: "bariyarpatti",
    name: "Bariyarpatti",
    regionSlug: "nepal",
    regionName: "Nepal",
    state: "Siraha",
    country: "Nepal",
    flag: "🇳🇵",
    isPhysicalOffice: true,
    officeId: "nepal",
    servingOfficeId: "nepal",
    localAreas: ["Main Road", "Bariyarpatti Bazaar", "Lahan Corridor", "Siraha Town"],
    keyIndustries: ["Cross-Border Trade", "Regional Commerce", "Agriculture & Retail"],
    servicesAvailable: ["web-development", "seo", "ecommerce"],
    description: "Growth Service operates a physical office in Bariyarpatti (Siraha), delivering web development, SEO, and digital marketing services across Nepal.",
    faqs: [
      { q: "Is the Nepal office a physical office?", a: `Yes, our team operates from our office at ${physicalOfficesById.nepal.address}.` }
    ]
  },
  {
    slug: "kathmandu",
    name: "Kathmandu",
    regionSlug: "nepal",
    regionName: "Nepal",
    state: "Bagmati",
    country: "Nepal",
    flag: "🇳🇵",
    isPhysicalOffice: false,
    servingOfficeId: "nepal",
    localAreas: ["Thamel", "Durbar Marg", "Patan (Lalitpur)", "Baneshwor", "Jhamsikhel", "Lazimpat"],
    keyIndustries: ["Himalayan Tourism & Trekking", "Hospitality", "Handicrafts & Pashmina Export", "IT Services"],
    servicesAvailable: ["web-development", "seo", "paid-marketing", "social-media"],
    description: "International trekking booking systems, hotel marketing, and export SEO for Kathmandu's tourism and artisan businesses.",
    faqs: [
      { q: "Do you support trekking and mountaineering agencies in Kathmandu?", a: "Yes, we create multi-currency adventure booking platforms and international travel SEO." }
    ]
  }
] as const;

// Backward-compatibility and convenience exports
export function getAllRegions(): readonly RegionData[] {
  return regionsData;
}

export function getRegionBySlug(slug: string): RegionData | undefined {
  return regionsData.find(r => r.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllCities(): readonly CityData[] {
  return citiesData;
}

export function getAllLocations(): readonly LocationData[] {
  return citiesData;
}

export const locationsData = citiesData;

export function getCityBySlug(slug: string): CityData | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === 'panaji') {
    return citiesData.find(c => c.slug === 'goa');
  }
  return citiesData.find(c => c.slug.toLowerCase() === normalized);
}

export function getCitiesByRegion(regionSlug: string): readonly CityData[] {
  return citiesData.filter(c => c.regionSlug.toLowerCase() === regionSlug.toLowerCase());
}

export function getLocationBySlug(slug: string): LocationData | undefined {
  return getCityBySlug(slug);
}

export const officeLocations = citiesData.filter(c => c.isPhysicalOffice);
export const expansionLocations = citiesData.filter(c => !c.isPhysicalOffice);
