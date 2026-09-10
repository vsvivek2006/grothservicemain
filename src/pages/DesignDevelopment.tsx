import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Monitor, Smartphone, Palette, Code, Database, 
  Shield, Zap, CheckCircle, ArrowRight, Cpu, Cloud,
  ShoppingCart, Briefcase, Search, Rocket, Wrench, MessageCircle, Phone
} from 'lucide-react';
import { getPrimaryPhone } from '../selectors';
import { getNepalWhatsAppUrl, getTelHref } from '../services';
import { getTechnologyByName } from '../data/technologies';
import { Container, Section, SectionHeader, WhatsAppIcon } from '../components/ui';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { Breadcrumb } from '../components/ui/Breadcrumb';

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
      icon: <Smartphone className="h-8 w-8" />,
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
    { name: "React.js", Icon: getTechnologyByName("react")?.Icon || Code, category: "Frontend" },
    { name: "TypeScript", Icon: getTechnologyByName("typescript")?.Icon || Code, category: "Language" },
    { name: "Node.js", Icon: getTechnologyByName("nodejs")?.Icon || Code, category: "Backend" },
    { name: "MongoDB", Icon: getTechnologyByName("mongodb")?.Icon || Code, category: "Database" },
    { name: "Next.js", Icon: getTechnologyByName("nextjs")?.Icon || Code, category: "Framework" },
    { name: "Tailwind CSS", Icon: getTechnologyByName("tailwindcss")?.Icon || Code, category: "Styling" },
    { name: "Express.js", Icon: getTechnologyByName("express")?.Icon || Code, category: "Backend" },
    { name: "Firebase", Icon: getTechnologyByName("firebase")?.Icon || Code, category: "Database" },
    { name: "React Native", Icon: getTechnologyByName("react-native")?.Icon || Smartphone, category: "Mobile" },
    { name: "Figma", Icon: getTechnologyByName("figma")?.Icon || Palette, category: "Design" },
    { name: "PostgreSQL", Icon: getTechnologyByName("postgresql")?.Icon || Database, category: "Database" },
    { name: "Vercel", Icon: getTechnologyByName("vercel")?.Icon || Cloud, category: "Cloud" }
  ];

  // Development Process
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements, target audience, and business goals",
      Icon: Search
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating wireframes, prototypes, and visual designs for user experience",
      Icon: Palette
    },
    {
      step: "03",
      title: "Development",
      description: "Building the application with modern technologies and best practices",
      Icon: Code
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing across devices and browsers for flawless performance",
      Icon: CheckCircle
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launching the project on secure servers with proper configuration",
      Icon: Rocket
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance for long-term success",
      Icon: Shield
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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Design & Development Services | Growth Service</title>
        <meta 
          name="description" 
          content="Professional website design and development services using React, TypeScript, Node.js, and modern technologies. Custom web applications, mobile apps, and UI/UX design." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Design & Development' }
            ]}
          />
          <div className="text-center max-w-4xl mx-auto mt-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Design & <span className="text-yellow-300">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              We create stunning, functional websites and applications using cutting-edge technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                href={getNepalWhatsAppUrl()}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 border-none text-white inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Discuss Your Project</span>
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Design & Development Services"
            subtitle="Comprehensive solutions from concept to deployment using modern technologies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                variant="interactive"
                padding="lg"
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getNepalWhatsAppUrl(`Hello! I'm interested in ${service.title} service. Please provide details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm pt-2"
                >
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technology Stack */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Technology Stack"
            subtitle="We work with modern technologies to build fast, scalable, and reliable applications"
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <Card 
                key={tech.name}
                variant="default"
                padding="default"
                className="text-center group hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  <tech.Icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Development Process */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Development Process"
            subtitle="A systematic approach ensuring quality, transparency, and timely delivery"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6"
              >
                <div className="absolute -top-3.5 -left-3.5 bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 flex items-center justify-center text-blue-600 mb-4 mt-2">
                  <step.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Project Types */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Types of Projects We Build"
            subtitle="Custom solutions tailored to specific industries and business needs"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <Card 
                key={index}
                variant="interactive"
                padding="lg"
                className="flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.type}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-xs uppercase tracking-wider">Includes Pages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.pages.map((page, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100 font-medium"
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={getNepalWhatsAppUrl(`Hello! I'm interested in ${project.type} development. Please provide details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm pt-2"
                >
                  Get Custom Quote for {project.type}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why Choose Our Development Services"
            subtitle="What makes us the preferred choice for web and application development"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Zap,
                title: "Fast Development",
                description: "Quick turnaround time without compromising on quality or performance"
              },
              {
                Icon: Cpu,
                title: "Modern Technologies",
                description: "Using React, TypeScript, Node.js and latest frameworks for best results"
              },
              {
                Icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing across devices and browsers for flawless performance"
              },
              {
                Icon: Smartphone,
                title: "Mobile Responsive",
                description: "All websites optimized for mobile, tablet, and desktop devices"
              },
              {
                Icon: Wrench,
                title: "Ongoing Support",
                description: "Post-development support and maintenance for long-term success"
              },
              {
                Icon: Rocket,
                title: "SEO Optimized",
                description: "Built with SEO best practices for better search engine visibility"
              }
            ].map((benefit, index) => (
              <Card 
                key={index}
                variant="default"
                padding="lg"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                  <benefit.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Digital Solution?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project requirements and create a custom solution for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href={getNepalWhatsAppUrl()}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 border-none text-white inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Custom Quote on WhatsApp</span>
              </Button>
              
              <Button
                href={getTelHref(getPrimaryPhone())}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {getPrimaryPhone()}</span>
              </Button>
            </div>
            
            <p className="mt-8 text-blue-200 text-sm">
              Custom Development • Mobile Apps • UI/UX Design • Web Applications
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default DesignDevelopment;
