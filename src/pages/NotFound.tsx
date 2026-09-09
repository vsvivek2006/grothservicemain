import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Code, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  MessageCircle, 
  Phone, 
  Mail, 
  ChevronRight,
  MapPin,
  Building,
  Users,
  Rocket,
  Shield,
  Award,
  Zap
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Container } from "../components/ui";
import { businessConfig } from "../config/business";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  // Office Locations from single source of truth
  const offices = businessConfig.offices.map(o => ({
    city: o.city,
    flag: o.flag,
    address: o.address,
    phone: o.phone
  }));

  // Popular Services
  const popularServices = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO Services",
      description: "Organic search ranking & technical audits",
      link: "/seo",
      tag: "Organic Growth"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Website Development",
      description: "Modern, high-performance web applications",
      link: "/web-development",
      tag: "Custom Code"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Social Media Marketing",
      description: "Content strategy & multi-channel brand reach",
      link: "/social-media",
      tag: "Engagement"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Google Business Profile",
      description: "Local SEO, map rankings & review management",
      link: "/local-seo",
      tag: "Local Maps"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Meta Ads Management",
      description: "ROI-driven conversion campaigns & creative testing",
      link: "/paid-marketing",
      tag: "Paid Media"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Consultation",
      description: "30-Minute 1-on-1 Growth Strategy Session",
      link: "/book-call",
      tag: "Strategy Call"
    }
  ];

  // Quick Links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "SEO Services", path: "/seo" },
    { name: "Web Development", path: "/web-development" },
    { name: "Social Media", path: "/social-media" },
    { name: "Meta Ads", path: "/paid-marketing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Book a Call", path: "/book-call" },
    { name: "Free Audit", path: "/free-audit" },
    { name: "Portfolio", path: "/portfolio" }
  ];

  // Popular Projects
  const projectTypes = [
    {
      type: "Business Website",
      tier: "Custom Design & CMS",
      desc: "Responsive brand architecture & lead engine",
      link: "/web-development"
    },
    {
      type: "E-commerce Store",
      tier: "High-Volume Commerce",
      desc: "Custom storefront, payments & inventory sync",
      link: "/ecommerce"
    },
    {
      type: "Tour & Travel Website",
      tier: "Booking Engine",
      desc: "Tour itineraries, booking & payment flows",
      link: "/web-development"
    },
    {
      type: "Guest House Website",
      tier: "Hospitality Portal",
      desc: "Direct reservation & guest management",
      link: "/web-development"
    },
    {
      type: "B2B Setup",
      tier: "Enterprise Digital Hub",
      desc: "Complete B2B digital infrastructure & CRM",
      link: "/web-development"
    },
    {
      type: "SEO Retainer",
      tier: "Technical & Content Scale",
      desc: "Sustained organic traffic & search dominance",
      link: "/seo"
    }
  ];

  // Technology Stack
  const techStack = [
    "React.js", "TypeScript", "Node.js", 
    "MongoDB", "Next.js", "Tailwind CSS",
    "Express.js", "GraphQL", "PostgreSQL"
  ];

  // WhatsApp Number (Nepal Head Office)
  const whatsappNumber = "9779707382481";
  const indiaPhone = "919341436937";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>404 - Page Not Found | Growth Service - Digital Agency in Jaipur, Vrindavan & Nepal</title>
        <meta
          name="description"
          content="Page not found. Explore Growth Service's professional web development & digital marketing services. Offices in Jaipur, Vrindavan & Nepal. Custom digital strategies & engineering."
        />
        <meta 
          name="keywords" 
          content="404 page, page not found, digital marketing Jaipur, web development Vrindavan, SEO Nepal, growth service, digital agency"
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://growthservice.in/404" />
      </Helmet>

      {/* Main Content */}
      <Container className="py-8 md:py-12">
        {/* 404 Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Office Location Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className={`bg-gray-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm ${
                  office.isHeadOffice ? 'border-2 border-yellow-400 bg-yellow-50' : ''
                }`}
              >
                <span>{office.flag}</span>
                <span className="font-medium">{office.city}</span>
                {office.isHeadOffice && (
                  <span className="bg-yellow-400 text-gray-900 text-[8px] px-1.5 py-0.5 rounded-full font-bold">HQ</span>
                )}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-4xl md:text-5xl font-bold text-purple-600">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            But don't worry, we're here to help you find what you need.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">📍 Jaipur</span>
            <span className="flex items-center gap-1">📍 Vrindavan</span>
            <span className="flex items-center gap-1">📍 Nepal (HQ)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions & Services */}
          <div className="lg:col-span-2">
            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-purple-600" />
                Quick Navigation
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <ArrowLeft className="h-6 w-6 text-gray-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Go Back</span>
                </button>
                <Link
                  to="/"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors group"
                >
                  <Home className="h-6 w-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Homepage</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                >
                  <MessageCircle className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Contact</span>
                </Link>
                <Link
                  to="/book-call"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                >
                  <Phone className="h-6 w-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Book Call</span>
                </Link>
              </div>
            </div>

            {/* Popular Services */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Popular Services You Might Need
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
                  >
                    <div className="flex-shrink-0 mr-4 text-purple-600">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 text-sm">
                          {service.title}
                        </h3>
                        {service.tag && (
                          <span className="bg-yellow-100 text-yellow-800 text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                            {service.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{service.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Project Types */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Popular Project Frameworks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projectTypes.map((project, index) => (
                  <Link
                    key={index}
                    to={project.link}
                    className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-shadow group"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 text-sm">
                        {project.type}
                      </h3>
                      <p className="text-xs text-gray-500">{project.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-purple-700 text-xs bg-purple-100 px-2 py-0.5 rounded-full">{project.tier}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links & Contact */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                Quick Links
              </h2>
              <div className="space-y-1 max-h-[400px] overflow-y-auto">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 group"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-purple-700">{link.name}</span>
                    <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-purple-600" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-purple-600" />
                Our Offices
              </h2>
              <div className="space-y-3">
                {offices.map((office) => (
                  <div 
                    key={office.city}
                    className={`p-3 rounded-xl ${office.isHeadOffice ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{office.flag}</span>
                      <span className="font-bold text-gray-900 text-sm">{office.city}</span>
                      {office.isHeadOffice && (
                        <span className="bg-yellow-400 text-gray-900 text-[8px] px-1.5 py-0.5 rounded-full font-bold">HQ</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-xs text-purple-600 hover:underline">
                      📞 {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-blue-600" />
                Need Immediate Help?
              </h2>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors group"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">WhatsApp (Nepal HQ)</div>
                    <div className="text-xs opacity-90">+977 {whatsappNumber}</div>
                  </div>
                </a>
                <a
                  href={`tel:${indiaPhone}`}
                  className="flex items-center gap-3 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">India Office</div>
                    <div className="text-xs opacity-90">+91 {indiaPhone}</div>
                  </div>
                </a>
                <a
                  href="mailto:info@growthservice.in"
                  className="flex items-center gap-3 p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Email Support</div>
                    <div className="text-xs opacity-90">info@growthservice.in</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                Our Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect digital solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <Home className="h-5 w-5" />
              Explore Homepage
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <MapPin className="h-5 w-5" />
              Visit Our Offices
            </Link>
          </div>
          <div className="mt-4 text-sm text-purple-200">
            <span className="flex items-center justify-center gap-2">
              📍 Jaipur • Vrindavan • Nepal
            </span>
          </div>
        </div>
      </Container>

      {/* Mobile Optimized Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          <button
            onClick={() => navigate(-1)}
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600 mb-1" />
            <span className="text-[10px] font-medium text-gray-700">Back</span>
          </button>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-purple-50"
          >
            <Home className="h-5 w-5 text-purple-600 mb-1" />
            <span className="text-[10px] font-medium text-purple-700">Home</span>
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-green-50"
          >
            <MessageCircle className="h-5 w-5 text-green-600 mb-1" />
            <span className="text-[10px] font-medium text-green-700">WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-blue-50"
          >
            <Phone className="h-5 w-5 text-blue-600 mb-1" />
            <span className="text-[10px] font-medium text-blue-700">Call</span>
          </Link>
        </div>
      </div>

      {/* Padding for mobile bottom bar */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default NotFound;