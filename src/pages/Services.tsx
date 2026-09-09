import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Code,
  Globe,
  Search,
  Instagram,
  MessageCircle,
  MapPin,
  Users,
  Zap,
  Shield,
  Check,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Headphones,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  Building2,
  CheckCircle2,
  Star
} from 'lucide-react';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import { Container, Section } from '../components/ui';
import { getAllPackages } from '../selectors';
import { getNepalWhatsAppUrl } from '../services';

interface ServiceData {
  id: number;
  title: string;
  category: string;
  description: string;
  delivery?: string;
  duration?: string;
  icon: JSX.Element;
  features: string[];
  technologies: string[];
  useCases: string[];
  color: string;
}

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  // Service Categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', Icon: Sparkles, count: 10 },
    { id: 'web', name: 'Website Development', Icon: Globe, count: 4 },
    { id: 'seo', name: 'SEO & Marketing', Icon: Search, count: 2 },
    { id: 'smm', name: 'Social Media', Icon: Share2, count: 2 },
    { id: 'business', name: 'Business Setup', Icon: Building2, count: 2 }
  ];

  const getPackageIcon = (iconName: string): JSX.Element => {
    switch (iconName) {
      case 'Globe': return <Globe className="h-10 w-10" />;
      case 'ShoppingCart': return <ShoppingCart className="h-10 w-10" />;
      case 'Headphones': return <Headphones className="h-10 w-10" />;
      case 'Search': return <Search className="h-10 w-10" />;
      case 'Instagram': return <Instagram className="h-10 w-10" />;
      case 'MapPin': return <MapPin className="h-10 w-10" />;
      case 'Users': return <Users className="h-10 w-10" />;
      case 'Zap': return <Zap className="h-10 w-10" />;
      case 'MessageCircle': return <MessageCircle className="h-10 w-10" />;
      default: return <Globe className="h-10 w-10" />;
    }
  };

  // All Services dynamically derived from canonical commercialPackages
  const allServices: ServiceData[] = getAllPackages().map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    category: pkg.category,
    description: pkg.description,
    delivery: pkg.delivery,
    duration: pkg.duration,
    icon: getPackageIcon(pkg.iconName),
    features: [...pkg.features],
    technologies: [...pkg.technologies],
    useCases: [...pkg.useCases],
    color: pkg.color
  }));

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-600 to-indigo-600',
        light: 'bg-blue-50 border-blue-200',
        text: 'text-blue-600',
        border: 'border-blue-300'
      },
      green: {
        gradient: 'from-emerald-600 to-teal-600',
        light: 'bg-emerald-50 border-emerald-200',
        text: 'text-emerald-600',
        border: 'border-emerald-300'
      },
      purple: {
        gradient: 'from-purple-600 to-indigo-700',
        light: 'bg-purple-50 border-purple-200',
        text: 'text-purple-600',
        border: 'border-purple-300'
      },
      pink: {
        gradient: 'from-pink-600 to-rose-600',
        light: 'bg-pink-50 border-pink-200',
        text: 'text-pink-600',
        border: 'border-pink-300'
      },
      orange: {
        gradient: 'from-amber-500 to-orange-600',
        light: 'bg-orange-50 border-orange-200',
        text: 'text-orange-600',
        border: 'border-orange-300'
      },
      indigo: {
        gradient: 'from-indigo-600 to-blue-700',
        light: 'bg-indigo-50 border-indigo-200',
        text: 'text-indigo-600',
        border: 'border-indigo-300'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `🚀 *Growth Service - Service Inquiry*\n\n*Service:* ${serviceName}\n\nHi, I would like to request a consultation and discuss our requirements for this service.`;
    window.open(getNepalWhatsAppUrl(message), '_blank');
  };

  const stats = [
    { number: '300+', label: 'Projects Completed', Icon: CheckCircle2 },
    { number: '98%', label: 'Client Satisfaction', Icon: Star },
    { number: '7-15 Days', label: 'Avg. Sprint Delivery', Icon: Zap },
    { number: '3 Offices', label: 'Jaipur • Vrindavan • Nepal', Icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Professional Digital Services | Growth Service</title>
        <meta
          name="description"
          content="Explore professional digital services: Custom Website Development, SEO, Social Media Management, and Strategic Business Setup tailored to your growth goals."
        />
        <meta 
          name="keywords" 
          content="website development services, SEO agency India, social media management, business setup services, digital marketing solutions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative text-center z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/15 px-5 py-2 rounded-full mb-6 text-sm font-semibold">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            PROFESSIONAL AGENCY SERVICES
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Transform Your Business <br />
            With Our <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Expert Capabilities</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            From modern responsive web applications to search engine optimization and multi-channel marketing, we deliver end-to-end digital solutions that drive measurable business outcomes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <stat.Icon className="w-5 h-5 text-yellow-300 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-purple-200 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <Section className="py-16">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <category.Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-purple-600">Professional Services</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of digital solutions designed for business success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const color = getColorClasses(service.color);
              
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-slate-200/80 flex flex-col justify-between"
                >
                  {/* Service Header */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 ${color.light} rounded-2xl flex items-center justify-center ${color.text} shrink-0`}>
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full">
                          {service.category.toUpperCase()}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">{service.title}</h3>
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Timeline & Scope Bar */}
                    <div className="mb-6 bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium text-slate-800">
                        <Clock className="h-4 w-4 text-purple-600" />
                        {service.delivery ? `Estimated Delivery: ${service.delivery}` : `Engagement Scope: ${service.duration}`}
                      </span>
                      <span className="text-slate-500 font-medium hidden sm:inline">Technical Support Included</span>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Features */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleService(service.id)}
                        className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200/60 text-xs font-semibold text-slate-800"
                      >
                        <span>
                          {expandedService === service.id ? 'Hide Detailed Inclusions' : 'View Full Feature Inclusions'}
                        </span>
                        {expandedService === service.id ? (
                          <ChevronUp className="h-4 w-4 text-slate-600" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-600" />
                        )}
                      </button>
                      
                      {expandedService === service.id && (
                        <div className="mt-3 p-4 bg-purple-50/50 border border-purple-100 rounded-xl">
                          <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Complete Deliverables:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Use Cases */}
                    <div className="mb-2">
                      <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">Ideal For:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.useCases.map((useCase, idx) => (
                          <span key={idx} className={`${color.light} ${color.text} px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 md:p-8 pt-0 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <button
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:opacity-95 flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Get Quote
                      </button>
                      
                      <Link
                        to="/book-call"
                        className="border border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600 py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:bg-purple-50 flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="h-4 w-4" />
                        Book a Call
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <ProcessTimeline />

      {/* Why Choose Us */}
      <Section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Growth Service
            </h2>
            <p className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto">
              We deliver exceptional results through our proven engineering approach and senior strategist team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center text-yellow-300 mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">100% Custom Code</h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                No fragile WordPress templates. We write clean, scalable code using React, TypeScript, Node.js, and MongoDB.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center text-yellow-300 mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Dedicated Post-Launch Support</h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                Complimentary warranty support on all projects with ongoing retainer maintenance and SLA options.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center text-yellow-300 mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Predictable Sprint Delivery</h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                Transparent milestones with weekly updates and direct access to your assigned engineering team.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our senior consultants today to discuss your project requirements, scope of work, and delivery timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-call"
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book a Consultation
            </Link>
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Services;
