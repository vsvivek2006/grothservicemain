import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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

  // Office Locations
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

  // Hero Slides with Office Locations
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

  // Service Categories with Paths for Internal Linking
  const serviceCategories: ServiceCategory[] = [
    {
      title: "SEO Services",
      icon: "🔍",
      services: ["SEO Optimization", "Local SEO", "Technical SEO", "Content Strategy"],
      color: "from-blue-500 to-cyan-400",
      path: "/seo"
    },
    {
      title: "Web Development",
      icon: "💻",
      services: ["Custom Websites", "E-commerce", "React Development", "Node.js Solutions"],
      color: "from-purple-500 to-pink-400",
      path: "/web-development"
    },
    {
      title: "Performance Marketing",
      icon: "📈",
      services: ["PPC Campaigns", "Social Media Ads", "Google Ads", "Analytics"],
      color: "from-orange-500 to-yellow-400",
      path: "/paid-marketing"
    },
    {
      title: "Digital Marketing",
      icon: "📱",
      services: ["Social Media", "Content Marketing", "Email Marketing", "Brand Strategy"],
      color: "from-green-500 to-emerald-400",
      path: "/digital-marketing"
    }
  ];

  // Our Services (Detailed)
  const ourServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO services to improve your search engine rankings and drive organic traffic.",
      features: ["Keyword Research & Strategy", "On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "SEO Analytics & Reporting"],
      path: "/seo"
    },
    {
      title: "Website Development",
      description: "Custom website development using modern technologies for optimal performance and user experience.",
      features: ["Responsive Web Design", "E-commerce Development", "React & Next.js Development", "Node.js Backend", "CMS Integration", "Web Application Development"],
      path: "/web-development"
    },
    {
      title: "Performance Marketing",
      description: "Data-driven performance marketing campaigns to maximize ROI and drive conversions.",
      features: ["Google Ads Management", "Social Media Advertising", "PPC Campaigns", "Display Advertising", "Retargeting", "Conversion Optimization"],
      path: "/paid-marketing"
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy and management to build brand presence and engagement.",
      features: ["Content Strategy", "Community Management", "Social Media Advertising", "Analytics & Insights", "Brand Storytelling", "Influencer Marketing"],
      path: "/social-media"
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation to engage audiences, build authority, and drive conversions.",
      features: ["Blog Writing", "Video Content", "Infographics", "Case Studies", "Whitepapers", "Content Strategy"],
      path: "/content-marketing"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce solutions to create, manage, and grow your online store.",
      features: ["Online Store Setup", "Payment Integration", "Product Management", "Inventory Management", "Order Processing", "E-commerce Analytics"],
      path: "/ecommerce"
    }
  ];

  // Process Steps
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

  // Clients
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

  // Technologies
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

  // Testimonials
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

  // Benefits
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

  // WhatsApp Contact
  const whatsappNumber = "9779707382481";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Growth%20Service,%20I%20want%20to%20discuss%20my%20digital%20marketing%20project.`;
  const phoneNumber = "+919341436937";

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
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen overflow-hidden">
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

      {/* === HERO SECTION WITH OFFICE LOCATIONS === */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <div className="text-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'absolute inset-0 opacity-0 translate-y-8 invisible'
                }`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                    📍 {slide.location}
                  </span>
                  <span className="text-2xl">{slide.flag}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                
                <div className="text-lg sm:text-xl md:text-2xl text-blue-300 font-medium mb-6">
                  {slide.subtitle}
                </div>
                
                <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={slide.ctaLink}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all hover:scale-105 shadow-lg"
                  >
                    {slide.cta}
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all"
                  >
                    💬 Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2 z-30 relative">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === OFFICE LOCATIONS BANNER === */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-white text-sm">
            <span className="font-bold">📍 Our Offices:</span>
            {offices.map((office, index) => (
              <a 
                key={index}
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              >
                <span>{office.flag}</span>
                <span>{office.name}</span>
                <span className="text-blue-300 text-xs hidden sm:inline">{office.address.split(',')[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICE CATEGORIES === */}
      <section className="py-16 md:py-24 bg-gray-50" aria-label="Our Services Categories">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to grow your business online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <Link 
                key={index} 
                to={category.path}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 block group"
              >
                <div className={`text-4xl mb-4 w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-16 md:py-24 bg-white" aria-label="Our Process">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How We <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured process ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-0.5 bg-blue-200 transform translate-x-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TECHNOLOGY STACK === */}
      <section className="py-16 md:py-24 bg-gray-50" aria-label="Technology Stack">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-green-600">Technology</span> Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern tools and technologies for cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-bold text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DETAILED SERVICES === */}
      <section className="py-16 md:py-24 bg-white" aria-label="Detailed Services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Complete <span className="text-orange-600">Digital Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.path}
                className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:bg-white group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                  View Details →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === CLIENTS === */}
      <section className="py-16 md:py-24 bg-gray-50" aria-label="Our Clients">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Trusted Clients</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              500+ businesses trust us for their digital growth
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105">
                <div className="text-3xl mb-4">{client.logo}</div>
                <h3 className="font-bold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white" aria-label="Why Choose Us">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose <span className="text-blue-300">Growth Service</span>
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              We combine expertise with dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 md:py-24 bg-white" aria-label="Client Testimonials">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Client <span className="text-purple-600">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from our valued clients
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                <p className="text-purple-600 font-medium">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white" aria-label="Contact Call to Action">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your digital needs. We serve clients from Jaipur, Vrindavan, Nepal, and globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>📞</span>
              <span>Call +91 93414 36937</span>
            </a>

            <Link
              to="/contact"
              className="border-2 border-purple-400 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all hover:scale-105"
            >
              📝 Contact Form
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-6">📍 Our Office Locations</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-300">
              {offices.map((office, index) => (
                <a 
                  key={index}
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <span>{office.flag}</span>
                  <span>{office.name}</span>
                </a>
              ))}
              <span className="text-blue-400">|</span>
              <span className="flex items-center gap-2">
                <span>⏰</span>
                <span>24/7 Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === FLOATING WHATSAPP BUTTON === */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform inline-block">💬</span>
        <span className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Home;