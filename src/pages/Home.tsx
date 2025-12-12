import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero Slides
  const heroSlides = [
    {
      title: "Transform Your Digital Presence",
      subtitle: "Professional Web & Marketing Solutions",
      description: "Custom websites, SEO optimization, and social media strategies to grow your business online.",
      cta: "Start Your Project"
    },
    {
      title: "Boost Your Online Visibility",
      subtitle: "Results-Driven Digital Marketing",
      description: "Comprehensive SEO and social media management to increase your reach and engagement.",
      cta: "Get Free Audit"
    },
    {
      title: "Modern Web Solutions",
      subtitle: "Built with Latest Technologies",
      description: "Fast, responsive websites using React, Node.js, and cutting-edge development practices.",
      cta: "View Services"
    }
  ];

  // Services Categories
  const serviceCategories = [
    {
      title: "Web Development",
      icon: "🌐",
      services: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Responsive Development",
        "Website Maintenance"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      services: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "PPC Campaigns"
      ],
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Branding",
      icon: "🎨",
      services: [
        "Logo & Identity",
        "Brand Strategy",
        "Graphic Design",
        "Marketing Materials"
      ],
      color: "from-orange-500 to-yellow-400"
    },
    {
      title: "Business Solutions",
      icon: "💼",
      services: [
        "Lead Generation",
        "CRM Setup",
        "Analytics & Reporting",
        "Consultation"
      ],
      color: "from-green-500 to-emerald-400"
    }
  ];

  // Our Services
  const ourServices = [
    {
      title: "Website Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Mobile-First Design", "Fast Loading", "SEO Optimized", "Easy CMS"]
    },
    {
      title: "SEO Services",
      description: "Improve search rankings with comprehensive on-page and off-page optimization strategies.",
      features: ["Keyword Research", "Technical SEO", "Content Creation", "Performance Tracking"]
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy and management to build your brand presence.",
      features: ["Content Planning", "Community Management", "Campaign Analysis", "Growth Strategy"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management.",
      features: ["Secure Payments", "Product Management", "Order Processing", "Analytics Dashboard"]
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation to engage your audience and drive conversions.",
      features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"]
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns to nurture leads and retain customers.",
      features: ["Automation", "Segmentation", "Analytics", "Template Design"]
    }
  ];

  // Our Process
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your business goals and target audience.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Create a customized plan with clear objectives and timeline.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Execution",
      description: "Our expert team implements the approved strategy.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and improvement for best results.",
      icon: "📊"
    }
  ];

  // Our Clients - Updated with your provided names
  const clients = [
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

  // Technology Stack
  const technologies = [
    { name: "React.js", type: "Frontend", icon: "⚛️" },
    { name: "Node.js", type: "Backend", icon: "🟢" },
    { name: "MongoDB", type: "Database", icon: "🍃" },
    { name: "Next.js", type: "Framework", icon: "▲" },
    { name: "Tailwind CSS", type: "Styling", icon: "🎨" },
    { name: "TypeScript", type: "Language", icon: "📘" },
    { name: "Express.js", type: "Backend", icon: "🚂" },
    { name: "GraphQL", type: "API", icon: "📊" }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Their team delivered exactly what we needed on time. Professional and highly skilled!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions"
    },
    {
      text: "Our website traffic increased by 300% in just 3 months. Excellent SEO work!",
      author: "Rajesh Kumar",
      role: "Business Owner",
      company: "HealthPlus Clinic"
    },
    {
      text: "The social media strategy they implemented helped us double our online engagement.",
      author: "Priya Sharma",
      role: "Brand Manager",
      company: "StyleHub Fashion"
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
      icon: "👨‍💻"
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
      icon: "⚡"
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies for your unique business needs",
      icon: "🎯"
    },
    {
      title: "Ongoing Support",
      description: "Continuous support and maintenance services",
      icon: "🛠️"
    }
  ];

  // Fixed WhatsApp Numbers
  const whatsappNumber = "9779707382481";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Growth%20Service,%20I%20want%20to%20discuss%20my%20project.`;
  const phoneNumber = "+919341436937";

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto testimonial change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Growth Service | Professional Digital Solutions Agency</title>
        <meta 
          name="description" 
          content="Professional web development and digital marketing agency. Custom websites, SEO, social media management, and complete digital solutions for business growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'absolute inset-0 opacity-0 translate-y-4'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-blue-300 font-medium mb-6">
                  {slide.subtitle}
                </div>
                <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
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
                    Schedule Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICE CATEGORIES === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className={`text-4xl mb-4 w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center h-full">
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
      <section className="py-16 md:py-24 bg-gray-50">
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

      {/* === OUR CLIENTS - Updated === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Trusted Clients</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Successfully served businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{client.logo}</div>
                <h3 className="font-bold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DETAILED SERVICES === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What We <span className="text-orange-600">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital services for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose <span className="text-blue-300">Us</span>
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              We combine expertise with dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Client <span className="text-purple-600">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-xl text-gray-700 mb-8 italic">
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
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
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
              <span>Call Us Now</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-6">We serve clients across India and globally</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-300">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Pan India Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💼</span>
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FLOATING WHATSAPP BUTTON === */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Mobile Optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
