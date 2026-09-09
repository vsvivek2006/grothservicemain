import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight, CheckCircle, Phone,
  MessageCircle, Star, Sparkles, MapPin,
  ExternalLink, Globe, Users, TrendingUp,
  Target, Headphones, Quote, Search,
  Code, BarChart3, ShoppingBag, Clock
} from "lucide-react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiTypescript, SiGraphql
} from 'react-icons/si';
import { teamMembers } from "../data/team";
import { industriesData } from "../data/industries";
import { officeLocations, expansionLocations } from "../data/locations";
import { businessConfig } from "../config/business";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceCard from "../components/ui/ServiceCard";
import TeamCard from "../components/ui/TeamCard";
import LocationCard from "../components/ui/LocationCard";
import IndustryCard from "../components/ui/IndustryCard";
import DecorativeGrid from "../components/ui/DecorativeGrid";
import ProcessTimeline from "../components/ui/ProcessTimeline";
import BentoGrid, { BentoItem } from "../components/ui/BentoGrid";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedButton } from "../components/animations";

// Types
interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  location: string;
  flag: string;
}

interface ServiceCategory {
  title: string;
  icon: string;
  services: string[];
  color: string;
  path: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface Client {
  name: string;
  industry: string;
  logo: string;
}



interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}



interface OfficeLocation {
  name: string;
  address: string;
  phone: string;
  flag: string;
  mapLink: string;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Office Locations from single source of truth
  const offices: OfficeLocation[] = businessConfig.offices.map(o => ({
    name: o.name,
    address: o.address,
    phone: o.phone,
    flag: o.flag,
    mapLink: o.mapLink
  }));

  // Hero Slides with Office Locations (Verbatim text from existing)
  const heroSlides: HeroSlide[] = [
    {
      title: `Digital Growth Solutions ${offices[0].flag}`,
      subtitle: "Transform Your Business with Expert Digital Marketing & Web Development",
      description: `Leading digital marketing agency serving clients from ${offices[0].name}, ${offices[1].name}, and ${offices[2].name}. We deliver SEO, web development, performance marketing, and comprehensive digital solutions to grow your business online.`,
      cta: "Start Your Digital Journey",
      ctaLink: "/contact",
      location: offices[0].name,
      flag: offices[0].flag
    },
    {
      title: `SEO & Performance Marketing ${offices[1].flag}`,
      subtitle: "Drive Traffic, Generate Leads, and Boost Conversions",
      description: `Expert SEO services, social media marketing, PPC campaigns, and performance marketing strategies from our ${offices[1].name} and ${offices[0].name} offices. We help businesses rank higher and attract more customers.`,
      cta: "Get Free SEO Audit",
      ctaLink: "/free-audit",
      location: offices[1].name,
      flag: offices[1].flag
    },
    {
      title: `Web Development & Digital Transformation ${offices[2].flag}`,
      subtitle: "Modern Websites, E-commerce Solutions & Digital Excellence",
      description: `Custom website development, e-commerce solutions, and digital transformation services available across India and Nepal. Our ${offices[2].name}, ${offices[0].name}, and ${offices[1].name} teams deliver cutting-edge digital solutions.`,
      cta: "View Our Services",
      ctaLink: "/services",
      location: offices[2].name,
      flag: offices[2].flag
    }
  ];

  // Service Categories (Verbatim text from existing)
  const serviceCategories: ServiceCategory[] = [
    {
      title: "SEO Services",
      icon: "🔍",
      services: ["SEO Optimization", "Local SEO", "Technical SEO", "Content Strategy"],
      color: "from-blue-500 to-cyan-500",
      path: "/seo"
    },
    {
      title: "Web Development",
      icon: "💻",
      services: ["Custom Websites", "E-commerce", "React Development", "Node.js Solutions"],
      color: "from-purple-600 to-pink-500",
      path: "/web-development"
    },
    {
      title: "Performance Marketing",
      icon: "📈",
      services: ["PPC Campaigns", "Social Media Ads", "Google Ads", "Analytics"],
      color: "from-amber-500 to-yellow-400",
      path: "/paid-marketing"
    },
    {
      title: "Digital Marketing",
      icon: "📱",
      services: ["Social Media", "Content Marketing", "Email Marketing", "Brand Strategy"],
      color: "from-emerald-500 to-teal-400",
      path: "/digital-marketing"
    }
  ];

  // Our Services Detailed (Verbatim text from existing)
  const ourServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO services to improve your search engine rankings and drive organic traffic.",
      features: ["Keyword Research & Strategy", "On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "SEO Analytics & Reporting"],
      path: "/seo",
      color: "from-blue-600 to-cyan-600",
      icon: "🔍"
    },
    {
      title: "Website Development",
      description: "Custom website development using modern technologies for optimal performance and user experience.",
      features: ["Responsive Web Design", "E-commerce Development", "React & Next.js Development", "Node.js Backend", "CMS Integration", "Web Application Development"],
      path: "/web-development",
      color: "from-purple-600 to-pink-600",
      icon: "💻"
    },
    {
      title: "Performance Marketing",
      description: "Data-driven performance marketing campaigns to maximize ROI and drive conversions.",
      features: ["Google Ads Management", "Social Media Advertising", "PPC Campaigns", "Display Advertising", "Retargeting", "Conversion Optimization"],
      path: "/paid-marketing",
      color: "from-amber-500 to-orange-500",
      icon: "📈"
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy and management to build brand presence and engagement.",
      features: ["Content Strategy", "Community Management", "Social Media Advertising", "Analytics & Insights", "Brand Storytelling", "Influencer Marketing"],
      path: "/social-media",
      color: "from-indigo-600 to-purple-600",
      icon: "📱"
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation to engage audiences, build authority, and drive conversions.",
      features: ["Blog Writing", "Video Content", "Infographics", "Case Studies", "Whitepapers", "Content Strategy"],
      path: "/content-marketing",
      color: "from-emerald-600 to-teal-600",
      icon: "✍️"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce solutions to create, manage, and grow your online store.",
      features: ["Online Store Setup", "Payment Integration", "Product Management", "Inventory Management", "Order Processing", "E-commerce Analytics"],
      path: "/ecommerce",
      color: "from-rose-600 to-pink-600",
      icon: "🛒"
    }
  ];

  // Process Steps (Verbatim text from existing)
  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We understand your business goals, target audience, and market landscape.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Create customized digital strategies with clear objectives and timelines.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Execution & Development",
      description: "Our expert team implements solutions with precision and quality.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring, analysis, and optimization for maximum results.",
      icon: "📊"
    }
  ];

  // Clients (Verbatim names & industries from existing)
  const clients: Client[] = [
    { name: "Fragsook", industry: "E-commerce", logo: "🛒" },
    { name: "Digimarcy", industry: "Digital Marketing", logo: "📱" },
    { name: "pujahelp.in", industry: "Religious Services", logo: "🕉️" },
    { name: "Radhikasadan Guest House", industry: "Hospitality", logo: "🏨" },
    { name: "360Egaleweb", industry: "Web Development", logo: "🌐" },
    { name: "Dizigrow", industry: "Digital Agency", logo: "🚀" },
    { name: "ceclift", industry: "Construction", logo: "🏗️" },
    { name: "TechCorp Solutions", industry: "Technology", logo: "💻" },
    { name: "HealthPlus Clinic", industry: "Healthcare", logo: "🏥" },
    { name: "EduSmart Academy", industry: "Education", logo: "🎓" },
    { name: "Foodie's Delight", industry: "Restaurant", logo: "🍽️" },
    { name: "StyleHub Fashion", industry: "Retail", logo: "👗" }
  ];

  // Technologies (Verbatim from existing) — icons replaced with react-icons/si
  const technologies = [
    { name: "React.js",    type: "Frontend",  Icon: SiReact,      color: "text-sky-500" },
    { name: "Next.js",     type: "Frontend",  Icon: SiNextdotjs,  color: "text-slate-900" },
    { name: "Node.js",     type: "Backend",   Icon: SiNodedotjs,  color: "text-emerald-600" },
    { name: "Express.js",  type: "Backend",   Icon: SiExpress,    color: "text-slate-700" },
    { name: "MongoDB",     type: "Database",  Icon: SiMongodb,    color: "text-emerald-500" },
    { name: "Tailwind CSS",type: "Styling",   Icon: SiTailwindcss,color: "text-sky-400" },
    { name: "TypeScript",  type: "Language",  Icon: SiTypescript, color: "text-blue-600" },
    { name: "GraphQL",     type: "API",       Icon: SiGraphql,    color: "text-pink-600" },
  ];

  // Testimonials (Verbatim quotes & authors from existing)
  const testimonials: Testimonial[] = [
    {
      text: "Growth Service's SEO strategies helped us rank on the first page of Google. Our organic traffic increased by 300% in just 3 months. Highly recommended!",
      author: "Rajesh Kumar",
      role: "Business Owner",
      company: "HealthPlus Clinic"
    },
    {
      text: "The team at Growth Service delivered a stunning e-commerce website that exceeded our expectations. Professional, responsive, and excellent support.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions"
    },
    {
      text: "Our social media engagement doubled within weeks of implementing their strategy. Growth Service truly understands digital marketing.",
      author: "Priya Sharma",
      role: "Brand Manager",
      company: "StyleHub Fashion"
    }
  ];

  // Benefits (Verbatim text — icons upgraded to Lucide)
  const benefits = [
    {
      title: "Expert Digital Team",
      description: "Certified professionals specializing in SEO, web development, and performance marketing",
      Icon: Users,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-300",
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable growth and ROI for 500+ businesses",
      Icon: TrendingUp,
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-300",
    },
    {
      title: "Customized Solutions",
      description: "Tailored digital strategies aligned with your unique business goals",
      Icon: Target,
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-300",
    },
    {
      title: "24/7 Support",
      description: "Ongoing support and maintenance from our offices in India and Nepal",
      Icon: Headphones,
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-300",
    },
  ];

  // Verified Case Studies from existing portfolio
  const featuredCases = [
    {
      title: "Tour & Travel Portal",
      category: "Website Development",
      result: "500% increase in online bookings",
      client: "Travel Agency",
      tags: ["React.js", "Node.js", "Payment Gateway"],
      path: "/case-studies"
    },
    {
      title: "SEO Optimization for Hotel Chain",
      category: "SEO Services",
      result: "300% Organic Traffic Growth",
      client: "Radhe Krishna Guest House",
      tags: ["Local SEO", "GMB", "Content Strategy"],
      path: "/case-studies"
    },
    {
      title: "E-commerce Store - Fashion",
      category: "Website Development",
      result: "300% sales growth in 3 months",
      client: "Fashion Brand",
      tags: ["MERN Stack", "Razorpay", "Inventory"],
      path: "/case-studies"
    }
  ];

  // WhatsApp Contact (Verbatim credentials)
  const whatsappNumber = "9779707382481";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Growth%20Service,%20I%20want%20to%20discuss%20my%20digital%20marketing%20project.`;
  const phoneNumber = "+91 93414 36937";

  // Hero Bento Grid Metric Showcase Items (Exclusively Verified Facts)
  const heroBentoItems: BentoItem[] = [
    {
      colSpan: 2,
      className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/12 via-white/8 to-purple-600/15 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-purple-400/40 transition-all duration-300",
      children: (
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Track Record
            </div>
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tracking-tight">
            500+
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            Projects Completed & Businesses Scaled
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-yellow-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Across India, Nepal & International
            </span>
            <span className="text-purple-200 font-medium">Jaipur • Vrindavan • Nepal</span>
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-purple-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 mb-3 group-hover:scale-110 transition-transform">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            300+
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Happy Clients
          </div>
          <div className="text-[11px] text-purple-300/80 mt-1">
            Multi-Industry Growth
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-yellow-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-3 group-hover:scale-110 transition-transform">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            4.9 / 5
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Client Rating
          </div>
          <div className="text-[11px] text-amber-300/80 mt-1 flex items-center gap-1">
            <span>★★★★★</span>
            <span>Verified Feedback</span>
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-emerald-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
              <Headphones className="w-4 h-4" />
            </div>
            <span className="flex items-center gap-1 text-[11px] text-emerald-300 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            24/7
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Dedicated Support
          </div>
          <div className="text-[11px] text-emerald-300/80 mt-1">
            Direct WhatsApp line
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-indigo-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3 group-hover:scale-110 transition-transform">
            <Globe className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            3 Offices
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Company Locations
          </div>
          <div className="text-[11px] text-purple-300/80 mt-1 truncate">
            Jaipur • Vrindavan • Nepal
          </div>
        </div>
      )
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto testimonial change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden selection:bg-purple-600 selection:text-white">
      <Helmet>
        <title>Growth Service - Best Digital Marketing & Web Development Agency</title>
        <meta 
          name="description" 
          content="Growth Service is a leading digital marketing agency offering SEO, web development, performance marketing, and social media management. Offices in Jaipur, Vrindavan, and Nepal. 500+ happy clients." 
        />
        <meta 
          name="keywords" 
          content="digital marketing agency, SEO services, web development, performance marketing, social media management, e-commerce solutions, digital marketing India, SEO India, web development India, growth service" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://growthservice.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Growth Service - Digital Marketing & Web Development Agency" />
        <meta property="og:description" content="Expert SEO, web development, and digital marketing services. Offices in Jaipur, Vrindavan, and Nepal. Transform your business with Growth Service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthservice.in" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Growth Service Digital Solutions Pvt Ltd",
            "url": "https://growthservice.in",
            "logo": "https://growthservice.in/logo.png",
            "description": "Leading digital marketing and web development agency with offices in Jaipur, Vrindavan, and Nepal.",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302017",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Vrindavan",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "281121",
                "addressCountry": "India"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-93414-36937",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://facebook.com/growthservices",
              "https://instagram.com/growth_servces",
              "https://linkedin.com/company/growthservice",
              "https://youtube.com/@growthservice"
            ]
          })}
        </script>
      </Helmet>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH ENHANCED VISUAL DEPTH & AMBIENT MESH               */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Ambient backdrop glow layers & grid */}
        <DecorativeGrid variant="dots" dark />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle"></div>
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-purple-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" style={{ animationDelay: '4s' }}></div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text & Dynamic Slides */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="relative min-h-[440px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col justify-center">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      index === currentSlide 
                        ? 'opacity-100 translate-y-0 relative z-10' 
                        : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none z-0'
                    }`}
                  >
                    {/* Location Pill */}
                    <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 shadow-inner transition-colors">
                      <span className="text-base">{slide.flag}</span>
                      <span className="text-purple-200 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                        <span>{slide.location}</span>
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>

                    {/* Main Hero Headline (Verbatim) */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 sm:mb-5 leading-[1.15] text-white">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle (Verbatim) */}
                    <div className="text-base sm:text-xl text-purple-200 font-medium mb-4 sm:mb-5 leading-relaxed max-w-2xl">
                      {slide.subtitle}
                    </div>
                    
                    {/* Description (Verbatim) */}
                    <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
                      {slide.description}
                    </p>
                    
                    {/* Dual CTAs (Verbatim text) */}
                    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                      <AnimatedButton
                        to={slide.ctaLink}
                        variant="primary"
                        size="lg"
                        icon={<Sparkles className="w-5 h-5 text-yellow-300" />}
                      >
                        {slide.cta}
                      </AnimatedButton>

                      <AnimatedButton
                        href={whatsappUrl}
                        isExternal
                        variant="white"
                        size="lg"
                        icon={<MessageCircle className="w-5 h-5 text-emerald-600" />}
                      >
                        Free Consultation
                      </AnimatedButton>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators with Interactive Switching */}
              <div className="flex items-center gap-3 mt-6 sm:mt-8 z-20 relative pt-2" aria-label="Hero Slide Navigation">
                {heroSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white ${
                      index === currentSlide 
                        ? 'bg-yellow-400 w-10 shadow-glow' 
                        : 'bg-white/30 hover:bg-white/60 w-3'
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slide.location}`}
                  />
                ))}
                <span className="text-xs text-purple-300/80 font-medium ml-2">
                  {currentSlide + 1} / {heroSlides.length} • {heroSlides[currentSlide].location}
                </span>
              </div>
            </div>

            {/* Right Column: High-Impact Agency Bento Showcase */}
            <div className="lg:col-span-5 w-full">
              <BentoGrid columns={2} items={heroBentoItems} />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. OFFICE LOCATIONS INTERACTIVE RIBBON (Jaipur, Vrindavan, Nepal HQ)      */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 border-y border-purple-700/50 py-3.5 text-white shadow-md relative z-20">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <span className="font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>Our Offices:</span>
            </span>
            {offices.map((office, index) => (
              <a 
                key={index}
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/10 transition-all hover:scale-102"
              >
                <span>{office.flag}</span>
                <span className="font-semibold text-white">{office.name}</span>
                <span className="text-purple-200 text-xs hidden md:inline border-l border-white/20 pl-2">
                  {office.address.split(',')[0]}
                </span>
                <ExternalLink className="w-3 h-3 text-purple-300" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRUST & SOCIAL PROOF STRIP (500+ Projects, 300+ Clients, Verified)    */}
      {/* ========================================================================= */}
      <Section padding="sm" className="bg-white border-b border-slate-200/80">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-slate-200/80 gap-6 md:gap-0 text-center" staggerDelay={70}>
            <StaggerItem index={0} className="px-4">
              <div className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                  500+
                </div>
                <div className="text-sm font-bold text-slate-900">Businesses Scaled</div>
                <div className="text-xs text-slate-500 mt-0.5">India & Global Delivery</div>
              </div>
            </StaggerItem>
            <StaggerItem index={1} className="px-4">
              <div className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                  300+
                </div>
                <div className="text-sm font-bold text-slate-900">Happy Clients</div>
                <div className="text-xs text-slate-500 mt-0.5">Across Diverse Sectors</div>
              </div>
            </StaggerItem>
            <StaggerItem index={2} className="px-4">
              <div className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                  3 Offices
                </div>
                <div className="text-sm font-bold text-slate-900">Physical Facilities</div>
                <div className="text-xs text-slate-500 mt-0.5">Jaipur • Vrindavan • Nepal</div>
              </div>
            </StaggerItem>
            <StaggerItem index={3} className="px-4">
              <div className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                  24/7
                </div>
                <div className="text-sm font-bold text-slate-900">Dedicated Support</div>
                <div className="text-xs text-slate-500 mt-0.5">Direct WhatsApp Helpline</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 4. SERVICE CATEGORIES OVERVIEW (Verbatim copy)                           */}
      {/* ========================================================================= */}
      <Section variant="subtle" aria-label="Our Services Categories">
        <Container>
          <SectionHeader
            badge="Digital Solutions"
            title="Our"
            titleHighlight="Services"
            description="Comprehensive digital solutions to grow your business online"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={90}>
            {serviceCategories.map((category, index) => (
              <StaggerItem key={index} index={index} className="h-full">
                <Link 
                  to={category.path}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col group h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury mb-5`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2.5 mb-6 flex-grow text-sm text-slate-600">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-purple-600 group-hover:translate-x-1.5 transition-transform duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 5. HOW WE WORK (Connected Process Timeline — Verbatim copy)               */}
      {/* ========================================================================= */}
      <Section variant="default" aria-label="Our Process">
        <Container>
          <SectionHeader
            badge="Execution Framework"
            title="How We"
            titleHighlight="Work"
            highlightColor="text-blue-600"
            description="Our structured process ensures successful project delivery"
          />
          <FadeIn direction="up" distance={24} duration={600}>
            <ProcessTimeline steps={process} />
          </FadeIn>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 6. COMPLETE DIGITAL SERVICES (Detailed Services - Verbatim copy)         */}
      {/* ========================================================================= */}
      <Section variant="subtle" aria-label="Detailed Services">
        <Container>
          <SectionHeader
            badge="Full-Funnel Capabilities"
            title="Complete"
            titleHighlight="Digital Services"
            highlightColor="text-purple-600"
            description="Everything you need to succeed in the digital landscape"
          />

          {/* Bento Architecture: Featured Anchor + Supporting Grid + Full-Width E-commerce */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* 1. Anchor Service: SEO (Large 7-col Bento Card) */}
            <div className="lg:col-span-7 h-full">
              <Link
                to={ourServices[0].path}
                className="group h-full bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury shadow-sm">
                    <Search className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                    Core Growth Engine
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                  {ourServices[0].title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {ourServices[0].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 flex-grow">
                  {ourServices[0].features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 font-bold text-sm text-purple-600 group-hover:translate-x-1.5 transition-transform duration-200 mt-auto">
                  <span>Explore SEO Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* 2. Service 2: Website Development (5-col Bento Card) */}
            <div className="lg:col-span-5 h-full">
              <Link
                to={ourServices[1].path}
                className="group h-full bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury shadow-sm">
                    <Code className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                    Full-Stack
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                  {ourServices[1].title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {ourServices[1].description}
                </p>
                <div className="space-y-2 mb-6 flex-grow">
                  {ourServices[1].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 font-bold text-sm text-purple-600 group-hover:translate-x-1.5 transition-transform duration-200 mt-auto">
                  <span>View Development Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* 3. Performance Marketing (4-col) */}
            <div className="lg:col-span-4 h-full">
              <Link
                to={ourServices[2].path}
                className="group h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                  {ourServices[2].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {ourServices[2].description}
                </p>
                <div className="space-y-2 mb-5 flex-grow">
                  {ourServices[2].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:translate-x-1 transition-transform mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* 4. Social Media Management (4-col) */}
            <div className="lg:col-span-4 h-full">
              <Link
                to={ourServices[3].path}
                className="group h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                  {ourServices[3].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {ourServices[3].description}
                </p>
                <div className="space-y-2 mb-5 flex-grow">
                  {ourServices[3].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:translate-x-1 transition-transform mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* 5. Content Marketing (4-col) */}
            <div className="lg:col-span-4 h-full">
              <Link
                to={ourServices[4].path}
                className="group h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600" />
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                  {ourServices[4].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {ourServices[4].description}
                </p>
                <div className="space-y-2 mb-5 flex-grow">
                  {ourServices[4].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:translate-x-1 transition-transform mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* 6. Service 6: E-commerce Solutions (Full-Width 12-col Bento Banner) */}
            <div className="lg:col-span-12">
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4 shadow-sm">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {ourServices[5].title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {ourServices[5].description}
                    </p>
                    <Link
                      to={ourServices[5].path}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md group/btn"
                    >
                      <span>Explore E-commerce Solutions</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50/80 p-5 sm:p-6 rounded-xl border border-slate-100">
                    {ourServices[5].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 7. NEW: OUR WORK / CASE STUDIES HIGHLIGHT (From Verified Portfolio)      */}
      {/* ========================================================================= */}
      <Section variant="default" aria-label="Our Work">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="mb-3">
                <Badge variant="purple" size="md">
                  Proven Case Studies
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Measurable Impact & <span className="text-purple-600">Client Results</span>
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl">
                Real outcomes delivered for businesses across tourism, e-commerce, and healthcare.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={100}>
            {featuredCases.map((item, idx) => (
              <StaggerItem key={idx} index={idx} className="h-full">
                <Card className="flex flex-col h-full bg-slate-50/70 border border-slate-200 card-lift group hover:border-purple-300/80 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold text-purple-600">
                    <span>{item.category}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[11px] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">Client: {item.client}</p>

                  <div className="bg-purple-100/60 p-3 rounded-xl border border-purple-200/50 mb-5 group-hover:bg-purple-100 transition-colors">
                    <div className="text-xs uppercase tracking-wider text-purple-700 font-bold">Outcome</div>
                    <div className="text-base font-extrabold text-purple-900">{item.result}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-200/60">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs bg-white text-slate-600 px-2.5 py-1 rounded border border-slate-200 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 8. NEW: MEET OUR TEAM (Authentic Real Staff from About.tsx)                */}
      {/* ========================================================================= */}
      <Section variant="subtle" aria-label="Our Team">
        <Container>
          <SectionHeader
            badge="Leadership & Specialists"
            title="Meet Our"
            titleHighlight="Team"
            description="Experienced strategists, full-stack developers, and marketers operating across Jaipur, Vrindavan, and Nepal."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" staggerDelay={90}>
            {teamMembers.slice(0, 4).map((member, idx) => (
              <StaggerItem key={member.id} index={idx} className="h-full">
                <TeamCard
                  name={member.name}
                  role={member.role}
                  department={member.department}
                  image={member.image}
                  bio={member.bio}
                  expertise={member.expertise}
                  linkedinUrl={member.socialLinks?.linkedin}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 9. NEW: INDUSTRIES WE SERVE (Scalable Business Verticals)                 */}
      {/* ========================================================================= */}
      <Section variant="default" aria-label="Industries We Serve">
        <Container>
          <SectionHeader
            badge="Sector Expertise"
            title="Industries We"
            titleHighlight="Serve"
            description="Tailored digital marketing funnels, search authority, and custom web platforms built for high-growth sectors."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={90}>
            {industriesData.map((industry, idx) => (
              <StaggerItem key={industry.id} index={idx} className="h-full">
                <IndustryCard
                  name={industry.name}
                  iconName={industry.iconName}
                  shortDesc={industry.shortDesc}
                  keySolutions={industry.keySolutions}
                  metricsHighlight={industry.metricsHighlight}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 10. NEW: LOCATIONS DIRECTORY (Programmatic SEO Foundation)                 */}
      {/* ========================================================================= */}
      <Section variant="subtle" aria-label="Locations We Serve">
        <Container>
          <SectionHeader
            badge="Physical & Regional Presence"
            title="Locations We"
            titleHighlight="Serve"
            description="Operating 3 company offices in Jaipur, Vrindavan, and Nepal, with digital growth campaigns delivered across major regions."
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Our 3 Company Offices</h3>
              <p className="text-sm text-slate-500">Visit our active operational facilities in India & Nepal</p>
            </div>
            <Link
              to="/offices"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline"
            >
              <span>View All 3 Company Offices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12" staggerDelay={90}>
            {officeLocations.map((loc, idx) => (
              <StaggerItem key={loc.slug} index={idx} className="h-full">
                <LocationCard
                  name={loc.name}
                  state={loc.state}
                  country={loc.country}
                  flag={loc.flag}
                  address={loc.address}
                  phone={loc.phone}
                  mapLink={loc.mapLink}
                  timings={loc.timings}
                  isHeadOffice={loc.slug === 'vrindavan'}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Regional Hub Expansion Links */}
          <FadeIn direction="up" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span>Expanding Regional Service Coverage</span>
                </h3>
                <p className="text-sm text-slate-600">
                  Connect directly with our digital marketing specialists for localized campaigns in key metropolitan areas:
                </p>
              </div>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md shrink-0 group"
              >
                <span>All Locations Directory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {expansionLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl border border-slate-200 hover:border-purple-300 transition-all flex items-center gap-1.5 group"
                >
                  <span>{loc.flag}</span>
                  <span>{loc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 11. TECHNOLOGY STACK (react-icons/si — Verbatim copy)                     */}
      {/* ========================================================================= */}
      <Section variant="default" aria-label="Technology Stack">
        <Container>
          <SectionHeader
            badge="Modern Architecture"
            title="Our"
            titleHighlight="Technology"
            highlightColor="text-emerald-600"
            description="Modern tools and technologies for cutting-edge solutions"
          />

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4" staggerDelay={50}>
            {technologies.map((tech, index) => (
              <StaggerItem key={index} index={index}>
                <div className="bg-white rounded-xl p-4 text-center border border-slate-200/80 hover:border-purple-300/80 hover:shadow-card-hover card-lift-sm transition-all duration-200 group">
                  <div className={`flex justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${tech.color}`}>
                    <tech.Icon size={32} />
                  </div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{tech.name}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{tech.type}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 12. CLIENTS (Trusted Businesses - Verbatim copy)                          */}
      {/* ========================================================================= */}
      <Section variant="subtle" aria-label="Our Clients">
        <Container>
          <SectionHeader
            badge="Portfolio Proof"
            title="Our"
            titleHighlight="Trusted Clients"
            description="500+ businesses trust us for their digital growth"
          />

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6" staggerDelay={60}>
            {clients.map((client, index) => (
              <StaggerItem key={index} index={index}>
                <div 
                  className="bg-white rounded-xl p-5 text-center border border-slate-200/80 hover:border-purple-300 hover:shadow-card card-lift-sm transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ease-luxury">
                    {client.logo}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm truncate">{client.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{client.industry}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 13. BENEFITS (Why Choose Us — Lucide icons, upgraded glass cards)          */}
      {/* ========================================================================= */}
      <Section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden" aria-label="Why Choose Us">
        <DecorativeGrid variant="dots" dark />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[100px] animate-pulse-subtle"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[100px] animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        </div>

        <Container className="relative z-10">
          <SectionHeader
            badge="The Growth Service Advantage"
            title="Why Choose"
            titleHighlight="Growth Service"
            highlightColor="text-yellow-400"
            description="We combine expertise with dedication to deliver exceptional results"
            dark
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={90}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index} index={index} className="h-full">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 hover:border-purple-400/50 card-lift transition-all duration-300 group h-full flex flex-col items-center">
                  {/* Lucide icon in coloured ring */}
                  <div className={`w-14 h-14 rounded-2xl ${benefit.iconBg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}>
                    <benefit.Icon className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 14. TESTIMONIALS — Spotlight layout with large quote mark                 */}
      {/* ========================================================================= */}
      <Section variant="subtle" aria-label="Client Testimonials">
        <Container size="narrow">
          <SectionHeader
            badge="Verified Client Reviews"
            title="Client"
            titleHighlight="Testimonials"
            description="Real feedback from our valued clients"
          />

          <FadeIn direction="up">
            <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-card-hover overflow-hidden">
              {/* Decorative large quote */}
              <div className="absolute top-6 left-6 opacity-[0.06] pointer-events-none select-none" aria-hidden="true">
                <Quote className="w-32 h-32 text-purple-600" />
              </div>

              <div className="relative z-10 p-8 sm:p-12">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Review</span>
                </div>

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-slate-500">{testimonials[currentTestimonial].role} · <span className="text-purple-600 font-semibold">{testimonials[currentTestimonial].company}</span></p>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex items-center gap-3 px-8 sm:px-12 pb-8" aria-label="Testimonial Navigation">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 ${
                      index === currentTestimonial
                        ? 'bg-purple-600 w-8'
                        : 'bg-slate-300 hover:bg-slate-400 w-2'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========================================================================= */}
      {/* 15. FINAL CALL TO ACTION (Verbatim copy)                                  */}
      {/* ========================================================================= */}
      <Section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden" aria-label="Contact Call to Action">
        <DecorativeGrid variant="dots" dark />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[140px] animate-pulse-subtle"></div>
        </div>

        <Container size="narrow" className="text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your digital needs. We serve clients from Jaipur, Vrindavan, Nepal, and globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                href={whatsappUrl}
                isExternal
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Chat on WhatsApp
              </AnimatedButton>
              
              <AnimatedButton
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                variant="white"
                size="lg"
                icon={<Phone className="w-5 h-5 text-slate-800" />}
              >
                Call +91 93414 36937
              </AnimatedButton>

              <AnimatedButton
                to="/contact"
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
              >
                Contact Form
              </AnimatedButton>
            </div>
            
            <div className="mt-14 pt-8 border-t border-white/10">
              <p className="text-purple-300 text-sm font-medium mb-4 flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Our Office Locations</span>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-purple-200">
                {offices.map((office, index) => (
                  <a 
                    key={index}
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                  >
                    <span>{office.flag}</span>
                    <span className="font-semibold text-white">{office.name}</span>
                  </a>
                ))}
                <span className="text-purple-500 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 text-emerald-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-white">24/7 Support</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
};

export default Home;