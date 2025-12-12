import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Monitor, Smartphone, Palette, Code, Database, 
  Layers, Shield, Zap, Globe, Users, BarChart,
  CheckCircle, ArrowRight, Cpu, Cloud, Smartphone as Mobile,
  ShoppingCart, Briefcase, Home, Calendar, Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignDevelopment: React.FC = () => {
  // Services we offer
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Website Development",
      description: "Custom website development with modern technologies and responsive design",
      features: [
        "React.js / Next.js Development",
        "TypeScript Implementation",
        "Responsive Mobile-First Design",
        "Performance Optimization",
        "SEO-Friendly Structure",
        "Fast Loading Speed"
      ]
    },
    {
      icon: <Mobile className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android",
      features: [
        "React Native Development",
        "Native iOS & Android Apps",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "API Integration"
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Interaction Design",
        "Usability Testing",
        "Design Systems"
      ]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Development",
      description: "Complete online store solutions with secure payment integration",
      features: [
        "Product Management System",
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Order Management",
        "Inventory Tracking",
        "Customer Dashboard"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Websites",
      description: "Professional websites for businesses to establish online presence",
      features: [
        "Corporate Websites",
        "Portfolio Websites",
        "Service-Based Websites",
        "Landing Pages",
        "Brochure Websites",
        "Multi-page Sites"
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Custom Web Applications",
      description: "Tailored web applications for specific business needs",
      features: [
        "CRM Systems",
        "Dashboard Applications",
        "Admin Panels",
        "Real-time Applications",
        "API Development",
        "Database Design"
      ]
    }
  ];

  // Technology Stack
  const technologies = [
    { name: "React.js", icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Development" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Next.js", icon: "🚀", category: "Framework" },
    { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
    { name: "Express.js", icon: "⚡", category: "Backend" },
    { name: "Firebase", icon: "🔥", category: "Backend" },
    { name: "React Native", icon: "📱", category: "Mobile" },
    { name: "Figma", icon: "🎯", category: "Design" },
    { name: "Git", icon: "📦", category: "Version Control" },
    { name: "AWS", icon: "☁️", category: "Hosting" }
  ];

  // Development Process
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements, target audience, and business goals",
      icon: "🔍"
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating wireframes, prototypes, and visual designs for user experience",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Development",
      description: "Building the application with modern technologies and best practices",
      icon: "💻"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing across devices and browsers for flawless performance",
      icon: "🧪"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launching the project on secure servers with proper configuration",
      icon: "🚀"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance for long-term success",
      icon: "🛡️"
    }
  ];

  // Project Types
  const projectTypes = [
    {
      type: "Travel & Tourism Website",
      description: "Complete travel booking websites with destination guides, tour packages, and booking systems",
      pages: ["Home Page", "Destinations", "Tour Packages", "Booking System", "About Us", "Contact", "Gallery", "Blog"]
    },
    {
      type: "Guest House / Hotel Website",
      description: "Hotel websites with room booking, amenities showcase, and payment integration",
      pages: ["Home Page", "Room Types", "Booking System", "Amenities", "Gallery", "Contact", "Location", "Reviews"]
    },
    {
      type: "Business Website",
      description: "Professional business websites to showcase services and generate leads",
      pages: ["Home Page", "Services", "About", "Portfolio", "Contact", "Blog", "Team", "Testimonials"]
    },
    {
      type: "E-commerce Store",
      description: "Online shopping platforms with product management and secure payments",
      pages: ["Home Page", "Product Listing", "Product Details", "Cart", "Checkout", "User Account", "Admin Panel", "Order Tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Helmet>
        <title>Design & Development Services | Growth Service</title>
        <meta 
          name="description" 
          content="Professional website design and development services using React, TypeScript, Node.js, and modern technologies. Custom web applications, mobile apps, and UI/UX design." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Design & <span className="text-cyan-300">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We create stunning, functional websites and applications using cutting-edge technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="https://wa.me/97797073824881"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>💬</span>
                <span>Discuss Your Project</span>
              </a>
              <a
                href="#portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design & Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions from concept to deployment using modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/97797073824881?text=Hello! I'm interested in ${service.title} service. Please provide details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with modern technologies to build fast, scalable, and reliable applications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="font-semibold text-gray-900">{tech.name}</div>
                <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring quality, transparency, and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6"
              >
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Projects We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom solutions tailored to specific industries and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.type}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes Pages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.pages.map((page, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/97797073824881?text=Hello! I'm interested in ${project.type} development. Please provide details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Get Custom Quote for {project.type}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What makes us the preferred choice for web and application development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Fast Development",
                description: "Quick turnaround time without compromising on quality or performance"
              },
              {
                icon: "🎯",
                title: "Modern Technologies",
                description: "Using React, TypeScript, Node.js and latest frameworks for best results"
              },
              {
                icon: "🛡️",
                title: "Quality Assurance",
                description: "Rigorous testing across devices and browsers for flawless performance"
              },
              {
                icon: "📱",
                title: "Mobile Responsive",
                description: "All websites optimized for mobile, tablet, and desktop devices"
              },
              {
                icon: "🔧",
                title: "Ongoing Support",
                description: "Post-development support and maintenance for long-term success"
              },
              {
                icon: "🚀",
                title: "SEO Optimized",
                description: "Built with SEO best practices for better search engine visibility"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 rounded-xl"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Get Custom Quote on WhatsApp</span>
            </a>
            
            <a
              href="tel:+919341436937"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📞</span>
              <span>Call: +91 93414 36937</span>
            </a>
          </div>
          
          <p className="mt-6 text-blue-200 text-sm">
            💻 Custom Development • 📱 Mobile Apps • 🎨 UI/UX Design • 🚀 Web Applications
          </p>
        </div>
      </section>
    </div>
  );
};

export default DesignDevelopment;
