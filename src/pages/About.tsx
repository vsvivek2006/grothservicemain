import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Users, Clock, Building2, Globe, Laptop, Lock, MessageCircle, Phone,
  MapPin, Smile, Rocket, TrendingUp, Star, Mail, ArrowRight
} from 'lucide-react';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import { Container, Section } from '../components/ui';
import { getPhysicalOffices, getPrimaryPhone, getCanonicalOrigin } from '../selectors';
import { getTelHref, getNepalWhatsAppUrl } from '../services';

// Types
interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  expertise: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface OfficeLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  flag: string;
  mapLink: string;
  image: string;
  city: string;
  country: string;
  services: string[];
  landmark: string;
  timings: string;
  isHeadOffice?: boolean;
}

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  location: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
  delay: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay: string;
  location: string;
}

interface Certificate {
  id: number;
  title: string;
  description: string;
  number: string;
  validity: string;
  bgColor: string;
}

interface TechStack {
  icon: string;
  name: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  delay: string;
}

interface Region {
  region: string;
  icon: string;
  clients: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  location: string;
  delay: string;
  image: string;
}

interface WhyChooseUs {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Office Locations with Images derived from single source of truth
  const offices: OfficeLocation[] = getPhysicalOffices().map((o, idx) => ({
    id: idx + 1,
    name: `${o.name} - ${o.state}`,
    address: o.address,
    phone: o.phone,
    email: o.email,
    flag: o.flag,
    mapLink: o.mapLink,
    image: idx === 0 ? "/images/jaipur-office.jpg" : idx === 1 ? "/images/vrindavan-office.jpg" : "/images/nepal-office.jpg",
    city: o.city,
    country: o.country,
    landmark: o.landmark || '',
    timings: o.timings,
    isHeadOffice: o.isHeadOffice,
    services: [...o.servicesOffered]
  }));

  // Hero Slides with Office Locations
  const heroSlides: HeroSlide[] = [
    {
      title: "Digital Solutions from Jaipur, Vrindavan & Nepal",
      subtitle: "Serving Worldwide from Our 3 Strategic Locations",
      description: "Growth Service operates from Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Bariyarpatti (Nepal). We deliver cutting-edge web development, SEO, and digital marketing services to clients across India and globally.",
      cta: "Start Your Project",
      ctaLink: "/contact",
      location: "🇮🇳 Jaipur • 🇮🇳 Vrindavan • 🇳🇵 Nepal"
    },
    {
      title: "Expert Digital Services from Jaipur Office",
      subtitle: "Web Development & SEO Services in Rajasthan",
      description: "Our Jaipur office specializes in web development, SEO, and digital marketing services. Serving clients across Jaipur, Rajasthan, and beyond with world-class digital solutions.",
      cta: "Contact Jaipur Office",
      ctaLink: "/contact",
      location: "📍 Jaipur, Rajasthan"
    },
    {
      title: "Innovative Solutions from Vrindavan Office",
      subtitle: "Digital Excellence from Uttar Pradesh",
      description: "Our Vrindavan head office delivers comprehensive digital solutions including web development, SEO, and performance marketing to clients worldwide.",
      cta: "Visit Vrindavan Office",
      ctaLink: "/contact",
      location: "📍 Vrindavan, Uttar Pradesh"
    }
  ];

  // ============================================================
  // UPDATED TEAM MEMBERS - Complete List
  // ============================================================
  const teamMembers: TeamMember[] = [
    // === LEADERSHIP TEAM ===
    {
      id: 1,
      name: "Vikash Singh",
      role: "Founder & CEO",
      department: "Leadership",
      image: "/images/ceo.jpg",
      bio: "Visionary leader with 10+ years of experience in digital transformation. Passionate about helping businesses grow through innovative technology solutions across Jaipur, Vrindavan, and Nepal.",
      expertise: ["Business Strategy", "Digital Transformation", "Leadership", "Global Operations"],
      socialLinks: {
        linkedin: "#",
        twitter: "#"
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
        linkedin: "#"
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
        linkedin: "#"
      }
    },

    // === DEVELOPMENT TEAM ===
    {
      id: 4,
      name: "Rahul Kumar",
      role: "Team Lead - Developer",
      department: "Development",
      image: "/images/developer-lead.jpg",
      bio: "Expert full-stack developer and team lead specializing in React, TypeScript, and Node.js. Leading development teams across all office locations to deliver high-performance web applications.",
      expertise: ["React.js", "TypeScript", "Node.js", "Team Leadership", "MongoDB"],
      socialLinks: {
        linkedin: "#"
      }
    },

    // === MARKETING & SEO TEAM ===
    {
      id: 5,
      name: "Nutan Mishra",
      role: "SEO Executive",
      department: "Marketing",
      image: "/images/seo-executive.jpg",
      bio: "Results-driven SEO professional with expertise in on-page and off-page optimization. Helping businesses rank higher on search engines and drive organic traffic.",
      expertise: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research"],
      socialLinks: {
        linkedin: "#"
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
        linkedin: "#"
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
        linkedin: "#"
      }
    },

    // === OPERATIONS TEAM ===
    {
      id: 8,
      name: "Ashish Singh",
      role: "Admin",
      department: "Operations",
      image: "/images/admin.jpg",
      bio: "Dedicated administrative professional managing office operations across all locations. Ensuring smooth day-to-day functioning, client support, and operational excellence.",
      expertise: ["Office Administration", "Client Support", "Operations", "Coordination"],
      socialLinks: {
        linkedin: "#"
      }
    }
  ];

  // Company stats
  const stats: Stat[] = [
    { number: "300+", label: "Happy Clients", icon: "😊", delay: "0s" },
    { number: "500+", label: "Projects Completed", icon: "🚀", delay: "0.1s" },
    { number: "3", label: "Office Locations", icon: "🏢", delay: "0.2s" },
    { number: "24/7", label: "Global Support", icon: "⏰", delay: "0.3s" },
  ];

  // Core values
  const values: Value[] = [
    {
      icon: "🏢",
      title: "3 Strategic Locations",
      description: "Operating from Jaipur, Vrindavan, and Nepal to serve clients across India and globally with localized expertise.",
      delay: "0s"
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      description: "Round-the-clock services from our India and Nepal offices to accommodate different timezones across the globe.",
      delay: "0.1s"
    },
    {
      icon: "💡",
      title: "Technology Excellence",
      description: "Expertise in all modern web technologies and frameworks for cutting-edge solutions from all our locations.",
      delay: "0.2s"
    },
    {
      icon: "🤝",
      title: "Reliable Partnership",
      description: "Building long-term relationships with clients across India, Nepal, and international markets.",
      delay: "0.3s"
    },
  ];

  // Our Services with Location Tags
  const services: Service[] = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom website development from our Jaipur, Vrindavan, and Nepal offices using modern technologies.",
      features: [
        "React.js & Next.js Development",
        "E-commerce Solutions",
        "Responsive Design",
        "CMS Integration"
      ],
      delay: "0s",
      location: "📍 Jaipur • Vrindavan • Nepal"
    },
    {
      icon: "🔍",
      title: "SEO Services",
      description: "Comprehensive SEO services from all our locations to improve your search rankings and drive organic traffic.",
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "Local SEO"
      ],
      delay: "0.1s",
      location: "📍 Jaipur • Vrindavan • Nepal"
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns from our India and Nepal offices to grow your business online.",
      features: [
        "Social Media Marketing",
        "PPC Campaigns",
        "Content Marketing",
        "Email Marketing"
      ],
      delay: "0.2s",
      location: "📍 Jaipur • Vrindavan • Nepal"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete e-commerce solutions from our offices with multi-currency and global payment gateways.",
      features: [
        "Online Store Setup",
        "Payment Integration",
        "Inventory Management",
        "Order Processing"
      ],
      delay: "0.3s",
      location: "📍 Jaipur • Vrindavan • Nepal"
    },
    {
      icon: "📊",
      title: "Performance Marketing",
      description: "Data-driven performance marketing from our locations to maximize ROI and drive conversions.",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display Advertising",
        "Retargeting"
      ],
      delay: "0.4s",
      location: "📍 Jaipur • Vrindavan • Nepal"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure from our offices for global applications and websites.",
      features: [
        "Global Hosting",
        "CDN Integration",
        "Cloud Security",
        "Scalable Architecture"
      ],
      delay: "0.5s",
      location: "📍 Jaipur • Vrindavan • Nepal"
    }
  ];

  // Certificates
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "GST Registration",
      description: "Registered under Goods and Services Tax Act for pan-India services",
      number: "GSTIN: 09AA******1Z5",
      validity: "Valid Till: Permanent",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "MSME Registered",
      description: "Registered under Ministry of Micro, Small & Medium Enterprises",
      number: "UDYAM-UP-09-****-****",
      validity: "Valid Till: Permanent",
      bgColor: "from-green-50 to-green-100"
    },
    {
      id: 3,
      title: "Startup India Recognition",
      description: "Government of India recognized startup for technology services",
      number: "DIPP: ****-**-****",
      validity: "Valid Till: 2027",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      title: "Professional Tax Registration",
      description: "Registered under Uttar Pradesh Professional Tax Act",
      number: "PTEC: ********",
      validity: "Valid Till: Renewal Required",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  // Technology Stack
  const techStack: TechStack[] = [
    { icon: "⚛️", name: "React", description: "Frontend framework" },
    { icon: "📘", name: "TypeScript", description: "Type-safe JavaScript" },
    { icon: "🟢", name: "Node.js", description: "Backend runtime" },
    { icon: "🍃", name: "MongoDB", description: "NoSQL database" },
    { icon: "▲", name: "Next.js", description: "React framework" },
    { icon: "🚂", name: "Express.js", description: "Node.js framework" },
    { icon: "🎨", name: "Tailwind CSS", description: "Utility-first CSS" },
    { icon: "📊", name: "GraphQL", description: "API query language" },
    { icon: "🐘", name: "PostgreSQL", description: "SQL database" },
    { icon: "🔥", name: "Firebase", description: "Google platform" },
    { icon: "☁️", name: "AWS", description: "Cloud services" },
    { icon: "📱", name: "React Native", description: "Mobile apps" }
  ];

  // Work process
  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "Understanding your business needs across our offices in Jaipur, Vrindavan, and Nepal.",
      icon: "🔍",
      delay: "0s"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Creating customized digital strategies with clear objectives and timelines from all locations.",
      icon: "📋",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "Development & Execution",
      description: "Our expert teams in India and Nepal implement solutions with precision and quality.",
      icon: "🚀",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring and optimization from all our offices for maximum results.",
      icon: "📊",
      delay: "0.6s"
    }
  ];

  // Global Reach with Office Locations
  const globalReach: Region[] = [
    { region: "Jaipur", icon: "🏛️", clients: "120+" },
    { region: "Vrindavan", icon: "🕉️", clients: "100+" },
    { region: "Nepal", icon: "🇳🇵", clients: "80+" },
    { region: "USA", icon: "🇺🇸", clients: "25+" },
    { region: "UK", icon: "🇬🇧", clients: "15+" },
    { region: "UAE", icon: "🇦🇪", clients: "20+" }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      text: "Growth Service delivered an excellent website for our Jaipur-based business. Their team understood our needs perfectly.",
      author: "Rajesh Sharma",
      role: "Business Owner",
      location: "Jaipur, Rajasthan",
      delay: "0s",
      image: "/images/testimonial-1.jpg"
    },
    {
      text: "The Vrindavan office team provided outstanding SEO services. Our organic traffic increased by 250% in just 4 months.",
      author: "Priya Singh",
      role: "Marketing Director",
      location: "Vrindavan, UP",
      delay: "0.1s",
      image: "/images/testimonial-2.jpg"
    },
    {
      text: "Working with Growth Service from our Nepal office has been seamless. Their digital marketing strategies are top-notch.",
      author: "Suresh Nepali",
      role: "CEO, Nepal Business",
      location: "Bariyarpatti, Nepal",
      delay: "0.2s",
      image: "/images/testimonial-3.jpg"
    }
  ];

  // Why choose us
  const whyChooseUs: WhyChooseUs[] = [
    {
      icon: "🏢",
      title: "3 Office Locations",
      description: "Operating from Jaipur, Vrindavan, and Nepal to serve you better with localized expertise.",
      delay: "0s"
    },
    {
      icon: "⏰",
      title: "24/7 Service",
      description: "Round-the-clock support from our India and Nepal offices across all timezones.",
      delay: "0.1s"
    },
    {
      icon: "🌍",
      title: "Global Experience",
      description: "Experience working with clients from 20+ countries from our offices in India and Nepal.",
      delay: "0.2s"
    },
    {
      icon: "💻",
      title: "Full Tech Stack",
      description: "Expertise in all modern technologies - from React to AWS, available across all locations.",
      delay: "0.3s"
    },
    {
      icon: "🏢",
      title: "Registered Company",
      description: "Fully registered and compliant with all necessary certifications across India and Nepal.",
      delay: "0.4s"
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description: "GDPR compliant solutions with international security standards from all offices.",
      delay: "0.5s"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Group team members by department
  const teamByDepartment = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Growth Service | Digital Agency with Offices in Jaipur, Vrindavan & Nepal</title>
        <meta
          name="description"
          content="Growth Service is a leading digital marketing agency with offices in Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Nepal. We provide web development, SEO, and digital marketing services globally."
        />
        <meta 
          name="keywords" 
          content="digital marketing agency Jaipur, web development company Vrindavan, SEO services Nepal, digital agency India, growth service, digital marketing Rajasthan, web development Uttar Pradesh, SEO Nepal, digital solutions India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${getCanonicalOrigin()}/about`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Growth Service - Digital Agency in Jaipur, Vrindavan & Nepal" />
        <meta property="og:description" content="Leading digital marketing agency with 3 offices in India and Nepal. Web development, SEO, and digital marketing services worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${getCanonicalOrigin()}/about`} />
      </Helmet>

      {/* === HERO SECTION WITH OFFICE LOCATIONS === */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-600/30 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-indigo-600/25 rounded-full blur-[60px] pointer-events-none"></div>
        
        <Container className="relative">
          {/* Office Location Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {offices.map((office) => (
              <div key={office.id} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <span>{office.flag}</span>
                <span>{office.city}</span>
                {office.isHeadOffice && (
                  <span className="bg-yellow-400 text-gray-900 text-[8px] px-2 py-0.5 rounded-full font-bold">HEAD</span>
                )}
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : 'absolute inset-0 opacity-0 translate-x-full'
                }`}
              >
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">
                        {slide.location}
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <div className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-4">
                      {slide.subtitle}
                    </div>
                    <p className="text-base sm:text-lg text-blue-100 mb-6 md:mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={slide.ctaLink}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg text-center"
                      >
                        {slide.cta}
                      </Link>
                      <a
                        href={getNepalWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                      >
                        <span className="text-lg">💬</span>
                        <span>WhatsApp Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* === OUR OFFICE LOCATIONS === */}
      <Section variant="subtle">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Office Locations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Operating from 3 strategic locations in India and Nepal to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  office.isHeadOffice ? 'border-2 border-yellow-400' : ''
                }`}
              >
                {/* Office Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  {office.isHeadOffice && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ HEAD OFFICE
                    </div>
                  )}
                  <div className="text-6xl">{office.flag}</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <div className="text-white font-bold text-lg">{office.name}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{office.address}</p>
                      {office.landmark && (
                        <p className="text-gray-500 text-xs mt-1">{office.landmark}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-purple-600">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-purple-600">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                      <span className="text-gray-700">{office.timings}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Services at this location:</p>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, idx) => (
                        <span key={idx} className="bg-purple-50 text-purple-700 text-[10px] px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-indigo-800 transition-all shadow-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Office Locations Map Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We serve clients from our offices in Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Nepal, 
              providing digital solutions across India and globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {offices.map((office) => (
                <div key={office.id} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-2xl">{office.flag}</div>
                  <div className="font-bold">{office.city}</div>
                  <div className="text-sm text-blue-200">{office.country}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* === GLOBAL STATS === */}
      <Section variant="default" spacing="sm" className="border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Smile className="w-5 h-5" />, number: '300+', label: 'Happy Clients', color: 'from-yellow-400 to-orange-400' },
              { icon: <Rocket className="w-5 h-5" />, number: '500+', label: 'Projects Completed', color: 'from-blue-500 to-indigo-500' },
              { icon: <Building2 className="w-5 h-5" />, number: '3', label: 'Office Locations', color: 'from-purple-500 to-pink-500' },
              { icon: <Clock className="w-5 h-5" />, number: '24/7', label: 'Global Support', color: 'from-emerald-500 to-teal-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-card card-lift-sm hover:border-purple-300/60 transition-all"
              >
                <div className={`w-10 h-10 bg-gradient-to-tr ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === OUR STORY === */}
      <Section variant="subtle">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  From <span className="text-blue-600">Vrindavan</span> to <span className="text-indigo-600">Jaipur</span> & <span className="text-green-600">Nepal</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Growth Service began in the spiritual city of Vrindavan with a vision to provide 
                  world-class digital solutions. Today, we proudly operate from three strategic locations: 
                  Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Bariyarpatti (Nepal).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Jaipur office serves clients across Rajasthan and western India, while our Vrindavan 
                  headquarters manages operations for northern India and global clients. Our Nepal office 
                  extends our reach to international markets with 24/7 support across timezones.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This multi-location presence allows us to combine the dedication of a local agency with 
                  the capabilities of a global technology partner, serving clients in over 20 countries.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-3">
                {offices.map((office) => (
                  <div key={office.id} className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-2xl">{office.flag}</div>
                    <div className="text-xs font-semibold text-gray-700">{office.city}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {globalReach.slice(0, 4).map((region, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-3">{region.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{region.region}</h3>
                  <div className="text-blue-600 text-xs">{region.clients} Clients</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================
          UPDATED TEAM SECTION - Complete Team Display
          ============================================================ */}
      <Section variant="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals across our Jaipur, Vrindavan, and Nepal offices
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Leadership Team</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teamMembers.filter(m => m.department === "Leadership").map((member) => (
                <div key={member.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                      <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {member.expertise.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Development Team</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teamMembers.filter(m => m.department === "Development").map((member) => (
                <div key={member.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      {member.name.charAt(0)}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                    <p className="text-purple-600 font-semibold text-sm">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-3">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing & SEO Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">Marketing & SEO Team</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.filter(m => m.department === "Marketing").map((member) => (
                <div key={member.id} className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      {member.name.charAt(0)}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                    <p className="text-green-600 font-semibold text-sm">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-3">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operations Team */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Operations Team</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teamMembers.filter(m => m.department === "Operations").map((member) => (
                <div key={member.id} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      {member.name.charAt(0)}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                    <p className="text-orange-600 font-semibold text-sm">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-3">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">{teamMembers.length}</div>
                <div className="text-sm text-blue-200">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-blue-200">Departments</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-blue-200">Office Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-blue-200">Countries Served</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* === SERVICES WITH LOCATION TAGS === */}
      <Section variant="subtle">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span> Across Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions from our offices in Jaipur, Vrindavan, and Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group"
                style={{animationDelay: service.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-blue-600 font-medium">{service.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === CERTIFICATES === */}
      <Section variant="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Registrations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fully registered and compliant company for operations in India and Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className={`bg-gradient-to-br ${cert.bgColor} border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-2xl">📜</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                    <div className="space-y-2">
                      <div className="bg-white/50 p-2 rounded">
                        <div className="text-xs text-gray-500">Certificate Number</div>
                        <div className="font-mono text-sm font-semibold text-gray-800">{cert.number}</div>
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <div className="text-xs text-gray-500">Validity</div>
                        <div className="text-sm font-semibold text-green-600">{cert.validity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === TECHNOLOGY STACK === */}
      <Section variant="subtle">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Technology</span> Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mastery in all modern web technologies across all our locations
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:bg-blue-50"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-gray-500 text-xs mt-1">{tech.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === PROCESS === */}
      <Section variant="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-purple-600">Process</span> Across Locations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              How we work across our Jaipur, Vrindavan, and Nepal offices
            </p>
          </div>

          <ProcessTimeline steps={[
            { step: '01', title: 'Discovery & Consultation', description: 'Understanding your business needs across our offices in Jaipur, Vrindavan, and Nepal.', icon: '' },
            { step: '02', title: 'Strategy & Planning', description: 'Creating customized digital strategies with clear objectives and timelines from all locations.', icon: '' },
            { step: '03', title: 'Development & Execution', description: 'Our expert teams in India and Nepal implement solutions with precision and quality.', icon: '' },
            { step: '04', title: 'Optimization & Growth', description: 'Continuous monitoring and optimization from all our offices for maximum results.', icon: '' },
          ]} />
        </Container>
      </Section>

      {/* === WHY CHOOSE US === */}
      <Section variant="subtle">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-purple-600">Growth Service</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Advantages of working with our team across 3 locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: Building2, color: 'from-blue-500 to-indigo-500', title: '3 Office Locations', description: 'Operating from Jaipur, Vrindavan, and Nepal to serve you better with localized expertise.' },
              { Icon: Clock, color: 'from-emerald-500 to-teal-500', title: '24/7 Service', description: 'Round-the-clock support from our India and Nepal offices across all timezones.' },
              { Icon: Globe, color: 'from-purple-500 to-pink-500', title: 'Global Experience', description: 'Experience working with clients from 20+ countries from our offices in India and Nepal.' },
              { Icon: Laptop, color: 'from-cyan-500 to-blue-500', title: 'Full Tech Stack', description: 'Expertise in all modern technologies - from React to AWS, available across all locations.' },
              { Icon: Building2, color: 'from-orange-500 to-amber-500', title: 'Registered Company', description: 'Fully registered and compliant with all necessary certifications across India and Nepal.' },
              { Icon: Lock, color: 'from-slate-600 to-slate-800', title: 'Secure & Compliant', description: 'GDPR compliant solutions with international security standards from all offices.' },
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-card border border-slate-200/80 hover:shadow-card-hover hover:border-purple-300/60 card-lift transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 bg-gradient-to-tr ${point.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    <point.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{point.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === TESTIMONIALS === */}
      <Section variant="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from clients across our office locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                style={{animationDelay: testimonial.delay}}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <span className="mr-1">📍</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === CTA === */}
      <Section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white" spacing="lg">
        <Container size="narrow" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Our <span className="text-cyan-300">Offices</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're here to help! Visit us at any of our 3 locations in Jaipur, Vrindavan, or Nepal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {offices.map((office) => (
              <div key={office.id} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl">{office.flag}</div>
                <div className="font-bold text-sm">{office.city}</div>
                <div className="text-blue-200 text-xs">{office.country}</div>
                <a 
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-cyan-300 text-sm hover:text-cyan-200"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              Chat on WhatsApp
            </a>

            <a
              href={getTelHref(getPrimaryPhone())}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call: {getPrimaryPhone()}
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
