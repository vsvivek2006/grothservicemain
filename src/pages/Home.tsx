import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Phone, 
  MessageCircle, Star, Sparkles, MapPin, Building, ShieldCheck, 
  TrendingUp, Users, Clock, Award, ExternalLink, Globe, Layers
} from "lucide-react";
import { teamMembers } from "../data/team";
import { industriesData } from "../data/industries";
import { officeLocations, expansionLocations } from "../data/locations";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceCard from "../components/ui/ServiceCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import TeamCard from "../components/ui/TeamCard";
import LocationCard from "../components/ui/LocationCard";
import IndustryCard from "../components/ui/IndustryCard";

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

interface Technology {
  name: string;
  type: string;
  icon: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
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
  const [teamTab, setTeamTab] = useState<'All' | 'Leadership' | 'Development' | 'Marketing' | 'Operations'>('All');

  // Office Locations (Verbatim from existing)
  const offices: OfficeLocation[] = [
    {
      name: "Jaipur Office",
      address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 62073 00553",
      flag: "🇮🇳",
      mapLink: "https://maps.google.com/?q=138A+Vivek+Vihar+Mayapuri+Jagatpura+Jaipur"
    },
    {
      name: "Vrindavan Office",
      address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121",
      phone: "+91 93414 36937",
      flag: "🇮🇳",
      mapLink: "https://maps.google.com/?q=Radhika+Sadan+Pushpa+Garden+Kailash+Nagar+Vrindavan"
    },
    {
      name: "Nepal Office",
      address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal",
      phone: "+977 970-7382481",
      flag: "🇳🇵",
      mapLink: "https://maps.google.com/?q=Bariyarpatti+Rd+Bariyarpatti+56500+Nepal"
    }
  ];

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

  // Technologies (Verbatim from existing)
  const technologies: Technology[] = [
    { name: "React.js", type: "Frontend", icon: "⚛️" },
    { name: "Next.js", type: "Frontend", icon: "▲" },
    { name: "Node.js", type: "Backend", icon: "🟢" },
    { name: "Express.js", type: "Backend", icon: "🚂" },
    { name: "MongoDB", type: "Database", icon: "🍃" },
    { name: "Tailwind CSS", type: "Styling", icon: "🎨" },
    { name: "TypeScript", type: "Language", icon: "📘" },
    { name: "GraphQL", type: "API", icon: "📊" }
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

  // Benefits (Verbatim from existing)
  const benefits: Benefit[] = [
    {
      title: "Expert Digital Team",
      description: "Certified professionals specializing in SEO, web development, and performance marketing",
      icon: "👨‍💻"
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable growth and ROI for 500+ businesses",
      icon: "📈"
    },
    {
      title: "Customized Solutions",
      description: "Tailored digital strategies aligned with your unique business goals",
      icon: "🎯"
    },
    {
      title: "24/7 Support",
      description: "Ongoing support and maintenance from our offices in India and Nepal",
      icon: "🛠️"
    }
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

  const filteredTeam = teamTab === 'All' 
    ? teamMembers 
    : teamMembers.filter(m => m.department === teamTab);

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
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1c0836] to-slate-900 text-white pt-14 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Ambient backdrop glow layers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 relative' 
                    : 'opacity-0 translate-y-8 absolute inset-x-0 pointer-events-none'
                }`}
              >
                {/* Location Pill */}
                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-inner transition-colors">
                  <span className="text-base">{slide.flag}</span>
                  <span className="text-purple-200">📍 {slide.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>

                {/* Main Hero Headline (Verbatim) */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-white">
                  {slide.title}
                </h1>
                
                {/* Subtitle (Verbatim) */}
                <div className="text-lg sm:text-2xl text-purple-200 font-medium mb-6 leading-relaxed max-w-2xl mx-auto">
                  {slide.subtitle}
                </div>
                
                {/* Description (Verbatim) */}
                <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
                  {slide.description}
                </p>
                
                {/* Dual CTAs (Verbatim text) */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    to={slide.ctaLink}
                    variant="primary"
                    size="lg"
                    icon={<Sparkles className="w-5 h-5 text-yellow-300" />}
                  >
                    {slide.cta}
                  </Button>

                  <Button
                    href={whatsappUrl}
                    isExternal
                    variant="white"
                    size="lg"
                    icon={<MessageCircle className="w-5 h-5 text-emerald-600" />}
                  >
                    💬 Free Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators with Interactive Switching */}
          <div className="flex justify-center mt-12 space-x-2.5 z-20 relative" aria-label="Hero Slide Navigation">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white ${
                  index === currentSlide 
                    ? 'bg-yellow-400 w-10 shadow-glow' 
                    : 'bg-white/30 hover:bg-white/60 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OFFICE LOCATIONS INTERACTIVE RIBBON (Jaipur, Vrindavan, Nepal HQ)      */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 border-y border-purple-700/50 py-4 text-white shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <span className="font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>📍 Our Offices:</span>
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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRUST & SOCIAL PROOF STRIP (500+ Clients, Verified Agency)            */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1">500+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Businesses Scaled</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1">3</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Company Offices (IN & NP)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1">98%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Client Retention</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1">24/7</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICE CATEGORIES OVERVIEW (Verbatim copy)                           */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-slate-50" aria-label="Our Services Categories">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Digital Solutions"
            title="Our"
            titleHighlight="Services"
            description="Comprehensive digital solutions to grow your business online"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {serviceCategories.map((category, index) => (
              <Link 
                key={index} 
                to={category.path}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300 transition-all duration-300 flex flex-col group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-105 transition-transform duration-300 mb-5`}>
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
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-purple-600 group-hover:translate-x-1.5 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW WE WORK (Structured Process - Verbatim copy)                       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-label="Our Process">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Execution Framework"
            title="How We"
            titleHighlight="Work"
            highlightColor="text-blue-600"
            description="Our structured process ensures successful project delivery"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {process.map((item, index) => (
              <div key={index} className="relative flex flex-col">
                <Card className="bg-gradient-to-b from-slate-50 to-purple-50/40 border border-slate-200/80 text-center h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-purple-100 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded-full mb-3">
                    STEP {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPLETE DIGITAL SERVICES (Detailed Services - Verbatim copy)         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-slate-50" aria-label="Detailed Services">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Full-Funnel Capabilities"
            title="Complete"
            titleHighlight="Digital Services"
            highlightColor="text-purple-600"
            description="Everything you need to succeed in the digital landscape"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ourServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                path={service.path}
                iconEmoji={service.icon}
                highlightColor={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. NEW: OUR WORK / CASE STUDIES HIGHLIGHT (From Verified Portfolio)      */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-label="Our Work">
        <div className="max-w-7xl mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredCases.map((item, idx) => (
              <Card key={idx} className="flex flex-col h-full bg-slate-50/70 border border-slate-200">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-purple-600">
                  <span>{item.category}</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[11px] font-bold">
                    VERIFIED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4">Client: {item.client}</p>

                <div className="bg-purple-100/60 p-3 rounded-xl border border-purple-200/50 mb-5">
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
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. NEW: MEET OUR TEAM (Authentic Real Staff from About.tsx)                */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-slate-50" aria-label="Our Team">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Leadership & Specialists"
            title="Meet Our"
            titleHighlight="Team"
            description="Experienced strategists, full-stack developers, and marketers operating across Jaipur, Vrindavan, and Nepal."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                department={member.department}
                image={member.image}
                bio={member.bio}
                expertise={member.expertise}
                linkedinUrl={member.socialLinks?.linkedin}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. NEW: INDUSTRIES WE SERVE (Scalable Business Verticals)                 */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-label="Industries We Serve">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Sector Expertise"
            title="Industries We"
            titleHighlight="Serve"
            description="Tailored digital marketing funnels, search authority, and custom web platforms built for high-growth sectors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industriesData.map((industry) => (
              <IndustryCard
                key={industry.id}
                name={industry.name}
                iconName={industry.iconName}
                shortDesc={industry.shortDesc}
                keySolutions={industry.keySolutions}
                metricsHighlight={industry.metricsHighlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. NEW: LOCATIONS DIRECTORY (Programmatic SEO Foundation)                 */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-slate-50" aria-label="Locations We Serve">
        <div className="max-w-7xl mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {officeLocations.map((loc) => (
              <LocationCard
                key={loc.slug}
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
            ))}
          </div>

          {/* Regional Hub Expansion Links */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md shrink-0"
              >
                <span>All Locations Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {expansionLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl border border-slate-200 hover:border-purple-300 transition-all flex items-center gap-1.5"
                >
                  <span>{loc.flag}</span>
                  <span>{loc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TECHNOLOGY STACK (Verbatim copy)                                      */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-label="Technology Stack">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Modern Architecture"
            title="Our"
            titleHighlight="Technology"
            highlightColor="text-emerald-600"
            description="Modern tools and technologies for cutting-edge solutions"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200/80 hover:border-purple-300 hover:shadow-card transition-all duration-200 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="font-bold text-slate-900 text-sm">{tech.name}</div>
                <div className="text-xs text-slate-500">{tech.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. CLIENTS (Trusted Businesses - Verbatim copy)                          */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-slate-50" aria-label="Our Clients">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Portfolio Proof"
            title="Our"
            titleHighlight="Trusted Clients"
            description="500+ businesses trust us for their digital growth"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-5 text-center border border-slate-200/80 hover:border-purple-300 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <h3 className="font-bold text-slate-900 text-sm truncate">{client.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. BENEFITS (Why Choose Us - Verbatim copy)                              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-[#1c0836] to-slate-900 text-white relative overflow-hidden" aria-label="Why Choose Us">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader
            badge="The Growth Service Advantage"
            title="Why Choose"
            titleHighlight="Growth Service"
            highlightColor="text-yellow-400"
            description="We combine expertise with dedication to deliver exceptional results"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-purple-200 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. TESTIMONIALS (Client Testimonials - Verbatim copy)                    */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white" aria-label="Client Testimonials">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badge="Verified Client Reviews"
            title="Client"
            titleHighlight="Testimonials"
            description="Real feedback from our valued clients"
          />

          <div className="bg-gradient-to-br from-purple-50/60 to-indigo-50/60 rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-card">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xl mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-800 mb-8 italic leading-relaxed font-normal">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div>
                <p className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-sm text-slate-600">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm font-semibold text-purple-600 mt-0.5">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2.5" aria-label="Testimonial Navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. FINAL CALL TO ACTION (Verbatim copy)                                  */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-slate-950 via-[#1c0836] to-slate-900 text-white relative overflow-hidden" aria-label="Contact Call to Action">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your digital needs. We serve clients from Jaipur, Vrindavan, Nepal, and globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href={whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Chat on WhatsApp
            </Button>
            
            <Button
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              variant="white"
              size="lg"
              icon={<Phone className="w-5 h-5 text-slate-800" />}
            >
              Call +91 93414 36937
            </Button>

            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
            >
              Contact Form
            </Button>
          </div>
          
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-purple-300 text-sm font-medium mb-4 flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>📍 Our Office Locations</span>
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
                <span>⏰</span>
                <span className="font-semibold text-white">24/7 Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;