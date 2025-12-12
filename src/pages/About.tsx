import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slides
  const heroSlides = [
    {
      title: "Global Web Development & Digital Solutions",
      subtitle: "Serving Worldwide from Vrindavan",
      description: "Professional digital services for global clients. From Vrindavan to worldwide, we deliver cutting-edge technology solutions across all timezones.",
      cta: "Start Your Project"
    },
    {
      title: "Technology Experts for Global Businesses",
      subtitle: "Modern Tech Solutions Across Timezones",
      description: "24/7 services for international clients. Expert in React, Node.js, TypeScript, and all modern web technologies.",
      cta: "View Services"
    },
    {
      title: "Worldwide Digital Marketing Agency",
      subtitle: "Global Reach with Local Expertise",
      description: "Serving clients across India and worldwide with comprehensive digital marketing and web development solutions.",
      cta: "Get Free Consultation"
    }
  ];

  // Company stats
  const stats = [
    { number: "100+", label: "Global Clients", icon: "🌍", delay: "0s" },
    { number: "200+", label: "Projects Worldwide", icon: "🚀", delay: "0.1s" },
    { number: "24/7", label: "Support All Timezones", icon: "⏰", delay: "0.2s" },
    { number: "50+", label: "Technologies Used", icon: "💻", delay: "0.3s" },
  ];

  // Core values
  const values = [
    {
      icon: "🌍",
      title: "Global Perspective",
      description: "Serving clients worldwide with understanding of international market trends and requirements.",
      delay: "0s"
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      description: "Round-the-clock services to accommodate different timezones across the globe.",
      delay: "0.1s"
    },
    {
      icon: "💡",
      title: "Technology Excellence",
      description: "Expertise in all modern web technologies and frameworks for cutting-edge solutions.",
      delay: "0.2s"
    },
    {
      icon: "🤝",
      title: "Reliable Partnership",
      description: "Building long-term relationships with clients across different countries and cultures.",
      delay: "0.3s"
    },
  ];

  // Our Services
  const services = [
    {
      icon: "🌐",
      title: "Global Website Development",
      description: "International-standard websites with multi-language support and global hosting solutions.",
      features: [
        "Multi-language Support",
        "International SEO",
        "Global CDN",
        "Timezone Handling"
      ],
      delay: "0s"
    },
    {
      icon: "📱",
      title: "Cross-Platform Apps",
      description: "Mobile and web applications that work seamlessly across different regions and devices.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Native Mobile Apps",
        "Cross-Browser Support"
      ],
      delay: "0.1s"
    },
    {
      icon: "🔍",
      title: "International SEO",
      description: "Global search engine optimization targeting multiple countries and languages.",
      features: [
        "Multi-region SEO",
        "Localization Strategy",
        "International Keywords",
        "Global Analytics"
      ],
      delay: "0.2s"
    },
    {
      icon: "📊",
      title: "Global Digital Marketing",
      description: "Worldwide digital marketing campaigns with targeted regional strategies.",
      features: [
        "International PPC",
        "Global Social Media",
        "Cross-border Marketing",
        "Multicultural Content"
      ],
      delay: "0.3s"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "International e-commerce platforms with multi-currency and global payment gateways.",
      features: [
        "Multi-currency Support",
        "Global Payment Gateways",
        "International Shipping",
        "Tax Calculation"
      ],
      delay: "0.4s"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for global applications and websites.",
      features: [
        "Global Hosting",
        "CDN Integration",
        "Cloud Security",
        "Scalable Architecture"
      ],
      delay: "0.5s"
    }
  ];

  // Certificates & Registrations with masked numbers
  const certificates = [
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

  // Technology Stack (All modern technologies)
  const techStack = [
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

  // Work process for global clients
  const process = [
    {
      step: "01",
      title: "Global Requirement Analysis",
      description: "Understanding your business needs across different regions and timezones.",
      icon: "🌍",
      delay: "0s"
    },
    {
      step: "02",
      title: "Technology Strategy",
      description: "Selecting appropriate tech stack for global scalability and performance.",
      icon: "💻",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "24/7 Development",
      description: "Continuous development cycle accommodating different timezones.",
      icon: "⚡",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Global Deployment",
      description: "Worldwide deployment with CDN and multi-region hosting.",
      icon: "🚀",
      delay: "0.6s"
    }
  ];

  // Global Reach
  const globalReach = [
    { region: "India", icon: "🇮🇳", clients: "80+" },
    { region: "USA", icon: "🇺🇸", clients: "15+" },
    { region: "UK", icon: "🇬🇧", clients: "10+" },
    { region: "Australia", icon: "🇦🇺", clients: "8+" },
    { region: "UAE", icon: "🇦🇪", clients: "12+" },
    { region: "Singapore", icon: "🇸🇬", clients: "5+" }
  ];

  // Testimonials from global clients
  const testimonials = [
    {
      text: "Working with Growth Service from USA has been seamless. Their 24/7 support accommodates our timezone perfectly.",
      author: "John Smith",
      role: "CEO, TechGlobal Inc.",
      location: "New York, USA",
      delay: "0s"
    },
    {
      text: "Excellent website development for our UK-based business. The team understands international requirements very well.",
      author: "Emma Wilson",
      role: "Marketing Director",
      location: "London, UK",
      delay: "0.1s"
    },
    {
      text: "Best digital marketing agency we've worked with. They handle our Middle East and India campaigns perfectly.",
      author: "Ahmed Khan",
      role: "Business Owner",
      location: "Dubai, UAE",
      delay: "0.2s"
    }
  ];

  // Why choose us for global services
  const whyChooseUs = [
    {
      icon: "⏰",
      title: "24/7 Service",
      description: "Round-the-clock support for clients across all timezones worldwide.",
      delay: "0s"
    },
    {
      icon: "🌍",
      title: "Global Experience",
      description: "Experience working with clients from 20+ countries across 6 continents.",
      delay: "0.1s"
    },
    {
      icon: "💻",
      title: "Full Tech Stack",
      description: "Expertise in all modern technologies - from React to AWS, MongoDB to Firebase.",
      delay: "0.2s"
    },
    {
      icon: "🏢",
      title: "Registered Company",
      description: "Fully registered and compliant with all necessary certifications and licenses.",
      delay: "0.3s"
    },
    {
      icon: "📞",
      title: "Multiple Timezone Support",
      description: "Dedicated teams for different timezones ensuring 24/7 availability.",
      delay: "0.4s"
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description: "GDPR compliant solutions with international security standards.",
      delay: "0.5s"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Growth Service | Global Web Development Agency from Vrindavan</title>
        <meta
          name="description"
          content="Growth Service: Global web development & digital marketing agency based in Vrindavan. Serving clients worldwide with 24/7 support across all timezones."
        />
        <meta 
          name="keywords" 
          content="global web development, international digital agency, 24/7 web services, worldwide digital marketing, React development, Node.js experts, TypeScript developers, international SEO"
        />
      </Helmet>

      {/* === HERO SECTION WITH SLIDER === */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rotate-45 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
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
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg text-center"
                      >
                        {slide.cta}
                      </Link>
                      <a
                        href="https://wa.me/97797073824881"
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* === GLOBAL STATS === */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-gray-700 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Global Journey</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  From <span className="text-blue-600">Vrindavan</span> to the <span className="text-indigo-600">World</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded in the spiritual city of Vrindavan, Growth Service began with a vision to 
                  provide world-class digital solutions to businesses everywhere. While our roots are 
                  local, our expertise has always been global.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We started by serving local businesses but quickly expanded to serve clients across 
                  India and worldwide. Our unique position allows us to combine the dedication and 
                  attention to detail of a local agency with the capabilities and perspective of a 
                  global technology partner.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve clients in over 20 countries, working across different timezones 
                  with 24/7 support. Our team is proficient in all modern web technologies, ensuring 
                  we can handle any project, from any location, at any time.
                </p>
              </div>
              
              <div className="mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">📍 Our Registered Office</h4>
                  <p className="text-gray-600 text-sm">
                    Radhika Sadan, Pushpa Garden<br />
                    Kailash Nagar, Vrindavan<br />
                    Uttar Pradesh 281121<br />
                    (Radhika Sadan ki Bassinet me)
                  </p>
                </div>
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
        </div>
      </section>

      {/* === CERTIFICATES & REGISTRATIONS === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Registrations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fully registered and compliant company for global operations
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
          
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Operations from Vrindavan</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Operating globally from our registered office in Vrindavan. We maintain international 
              standards while keeping our local values and commitment to quality.
            </p>
            <div className="inline-block bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-700 font-semibold">Registered Office:</div>
              <div className="text-gray-600 text-sm">
                Radhika Sadan, Pushpa Garden<br />
                Kailash Nagar, Vrindavan, Uttar Pradesh 281121
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPLETE TECHNOLOGY STACK === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="text-purple-600">Technology</span> Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mastery in all modern web technologies for comprehensive solutions
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
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Plus expertise in: Redux, Jest, Docker, Kubernetes, Redis, Elasticsearch, 
              WebRTC, Socket.io, Stripe, PayPal, and many more...
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
              <span className="mr-2">💻</span>
              <span>Full Stack Development Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* === GLOBAL SERVICES === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Global</span> Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions for international businesses
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GLOBAL REACH === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Reach</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Serving clients across continents with 24/7 support for all timezones
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {globalReach.map((region, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{region.icon}</div>
                <div className="font-semibold text-lg mb-1">{region.region}</div>
                <div className="text-blue-200 text-sm">{region.clients} Clients</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <span className="text-2xl mr-3">⏰</span>
              <div className="text-left">
                <div className="font-bold">24/7 Support Across Timezones</div>
                <div className="text-sm text-blue-200">Working hours adapted to client locations worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 24/7 WORK PROCESS === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 <span className="text-blue-600">Global</span> Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Round-the-clock workflow for international client collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group h-full">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">{step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-blue-200 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-indigo-600">Global</span> Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles that define our worldwide operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 text-center group"
                style={{animationDelay: value.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US FOR GLOBAL SERVICES === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for <span className="text-blue-600">Global</span> Projects?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advantages of partnering with us for international digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group"
                style={{animationDelay: point.delay}}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform">{point.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GLOBAL TESTIMONIALS === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-blue-600">Global</span> Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from our international clientele across different timezones
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
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for <span className="text-cyan-300">Global</span> Digital Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us for world-class web development and digital marketing, 
            available 24/7 across all timezones
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
            >
              <span>💬</span>
              <span>Chat on WhatsApp (24/7)</span>
            </a>
            
            <a
              href="tel:+919341436937"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
            >
              <span>📞</span>
              <span>Call: +91 93414 36937</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="inline-block bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-blue-200 mb-2">📍 Registered Office Address:</p>
              <p className="text-white text-sm">
                Radhika Sadan, Pushpa Garden<br />
                Kailash Nagar, Vrindavan, Uttar Pradesh 281121
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-300">
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span>Global Services</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💻</span>
                <span>Full Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏢</span>
                <span>Registered Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default About;
