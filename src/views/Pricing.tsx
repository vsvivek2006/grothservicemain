import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, Shield, Clock, MessageCircle, Code, Award, 
  Calendar, Sparkles, Globe, Search, Share2, MapPin, Rocket, X 
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Container, Section, WhatsAppIcon } from '../components/ui';
import { getNepalWhatsAppUrl } from '../services';

interface ServiceItem {
  id: number;
  name: string;
  category: string;
  description: string;
  delivery?: string;
  duration?: string;
  features: string[];
  deliverables?: string[];
  platforms?: string[];
  technologies?: string[];
  color: string;
}

const Pricing: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Tabs for filtering
  const tabs = [
    { id: 'all', name: 'All Services', Icon: Sparkles },
    { id: 'web', name: 'Website', Icon: Globe },
    { id: 'seo', name: 'SEO', Icon: Search },
    { id: 'smm', name: 'Social Media', Icon: Share2 },
    { id: 'gmb', name: 'Google Business', Icon: MapPin },
    { id: 'combo', name: 'Integrated Solutions', Icon: Rocket }
  ];

  // Website Development Services
  const websiteServices: ServiceItem[] = [
    { 
      id: 1,
      name: 'Custom Business Website (5 Pages)', 
      category: 'web',
      description: 'Professional responsive website tailored to your brand identity with WhatsApp integration',
      delivery: '7-10 Days',
      features: [
        'Home Page Design',
        'About Us Page',
        'Services Page',
        'Contact Us with Form',
        'WhatsApp Integration',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        '1 Year Technical Support',
        'SSL Certificate Setup',
        'Social Media Integration'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      color: 'blue'
    },
    { 
      id: 2,
      name: 'Tour & Travel Booking Platform', 
      category: 'web',
      description: 'Complete travel booking platform with dynamic tour itineraries and inquiry management',
      delivery: '10-15 Days',
      features: [
        'Dynamic Home Page',
        'Upcoming Tours Section',
        'Tour Packages Pages',
        'Booking Inquiry System',
        'Payment Gateway Ready',
        'Admin Dashboard',
        'Gallery Section',
        'Client Testimonials',
        'SEO Optimized Architecture',
        'Mobile App Ready Structure'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      color: 'green'
    },
    { 
      id: 3,
      name: 'Hospitality & Guest House Website', 
      category: 'web',
      description: 'Hotel and accommodation portal with room showcase and direct reservation inquiries',
      delivery: '12-18 Days',
      features: [
        'Homepage with Hero Slider',
        'Room Listings & Showcase',
        'Direct Booking Inquiries',
        'Admin Control Panel',
        'Customer Review System',
        'Amenities Showcase',
        'Interactive Location Map',
        'Photo Gallery',
        'Booking Calendar Sync',
        'Email Notifications'
      ],
      technologies: ['MERN Stack', 'Payment Gateway / Stripe', 'JWT Auth'],
      color: 'purple'
    },
    { 
      id: 4,
      name: 'E-commerce Architecture', 
      category: 'web',
      description: 'Full-featured online store with inventory tracking, payment gateways, and order control',
      delivery: '20-25 Days',
      features: [
        'Product Catalog Management',
        'Secure Shopping Cart',
        'Payment Gateway Integration',
        'User Authentication',
        'Admin Management Dashboard',
        'Order Processing System',
        'Inventory Tracking',
        'Customer Reviews & Ratings',
        'Coupon & Promo Engine',
        'Analytics Dashboard'
      ],
      technologies: ['MERN Stack', 'Redux', 'Stripe', 'AWS'],
      color: 'pink'
    }
  ];

  // SEO Services
  const seoServices: ServiceItem[] = [
    { 
      id: 5,
      name: 'Professional SEO Engagement', 
      category: 'seo',
      description: 'Comprehensive search optimization strategy to improve organic Google rankings and domain authority',
      duration: '3-6 Months Retainer',
      features: [
        'Monthly Performance Reports',
        'Content Optimization & Articles',
        'High-Intent Keyword Targeting',
        'On-Page Optimization',
        'Off-Page Authority Building',
        'Technical SEO Audit & Fixes',
        'Competitor Ranking Analysis',
        'Organic Traffic Strategy',
        'Quality Backlink Profile Development',
        'Comprehensive Content Strategy'
      ],
      deliverables: [
        'Keyword Research Dossier',
        'Technical SEO Audit Report',
        'Monthly Ranking Progression Reports',
        'Backlink Profile Analysis',
        'Quarterly Content Strategy Plan'
      ],
      color: 'orange'
    }
  ];

  // SMM Services
  const smmServices: ServiceItem[] = [
    { 
      id: 6,
      name: 'Social Media Management', 
      category: 'smm',
      description: 'Strategic social brand growth and multi-channel creative storytelling across platforms',
      duration: 'Ongoing Engagement',
      features: [
        'Content Calendar Planning',
        'Creative Post Production',
        'Active Community Management',
        'Brand Narrative & Storytelling',
        'Visual Design & Graphic Assets',
        'Audience Interaction & Engagement',
        'Hashtag & Discovery Strategy',
        'Monthly Performance Analytics',
        'Instagram & Facebook Coverage',
        'LinkedIn & Twitter Optimization'
      ],
      platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
      color: 'pink'
    },
    { 
      id: 7,
      name: 'Meta Ads Performance Management', 
      category: 'smm',
      description: 'High-conversion paid acquisition campaigns across Facebook and Instagram networks',
      duration: 'Campaign-Based / Monthly',
      features: [
        'Ad Account & Pixel Setup',
        'Precision Audience Targeting',
        'High-Converting Ad Creatives',
        'Systematic A/B Testing',
        'Conversion Tracking & Attribution',
        'ROAS & Cost-Per-Acquisition Optimization',
        'Transparent Weekly Performance Reports',
        'Campaign Budget Allocation',
        'Full-Funnel Remarketing Setup',
        'High-Intent Lead Generation'
      ],
      platforms: ['Meta Ads Manager', 'Instagram', 'Facebook'],
      color: 'blue'
    }
  ];

  // GMB Services
  const gmbServices: ServiceItem[] = [
    { 
      id: 8,
      name: 'Google Business Profile Optimization', 
      category: 'gmb',
      description: 'Local search engine dominance to drive calls, direction requests, and in-store foot traffic',
      duration: 'Ongoing Local Visibility',
      features: [
        'Complete Profile Verification & Setup',
        'Regular Updates & Offer Posts',
        'Review Management & Response Protocol',
        'Local 3-Pack Map Optimization',
        'Geotagged Photo & Video Assets',
        'Performance Insights & Tracking',
        'Google Q&A Management',
        'Local Citation Building',
        'Category & Attribute Optimization',
        'Competitor Proximity Analysis'
      ],
      color: 'green'
    }
  ];

  // Business Setup Services
  const businessServices: ServiceItem[] = [
    { 
      id: 9,
      name: 'Complete Business Digital Setup', 
      category: 'business',
      description: 'Turnkey online foundation covering branding, responsive web presence, and acquisition channels',
      delivery: '45-60 Days',
      features: [
        'Custom Business Web Portal',
        'Complete Social Channels Setup',
        'Market Entry & Channel Guidance',
        'Assigned Lead Strategy Consultant',
        'Brand Identity Guidelines',
        'Inbound Lead Generation Infrastructure',
        'CRM Onboarding Consultation',
        'Dedicated Post-Launch Support',
        'Google Business Profile Setup',
        'Corporate Email Setup'
      ],
      color: 'purple'
    }
  ];

  // Integrated Solutions
  const comboPackages: ServiceItem[] = [
    {
      id: 10,
      name: 'Integrated Web + SEO + Social Growth',
      category: 'combo',
      description: 'Holistic digital presence unifying modern web architecture with organic search and brand visibility',
      duration: '3-Month Comprehensive Sprint',
      features: [
        'Custom Business Website (5 Pages)',
        'Quarterly Search Engine Optimization',
        'Active Multi-Platform Social Management',
        'Google Business Profile Setup & Optimization',
        'Meta Paid Advertising Campaign Setup',
        'Mobile-First Responsive Design',
        'Tailored Creative Content Calendar',
        'Dedicated Technical & Account Support',
        'Live Growth Analytics Dashboard'
      ],
      color: 'gradient'
    },
    {
      id: 11,
      name: 'Enterprise Digital Transformation Suite',
      category: 'combo',
      description: 'Full-stack agency partnership providing end-to-end technical engineering and digital marketing',
      duration: '6-Month Strategic Engagement',
      features: [
        'Bespoke Web Application Development',
        'Comprehensive Multi-Channel SEO Program',
        'Full Social Media Brand Management',
        'Local Search Dominance Protocol',
        'Meta & Google Performance Ads Execution',
        'Automated Email Acquisition Funnels',
        'CRM Integration & Sales Workflow',
        'Dedicated Fractional Account Lead',
        'Priority Technical Support & SLAs'
      ],
      color: 'premium'
    }
  ];

  const allServices = [
    ...websiteServices,
    ...seoServices,
    ...smmServices,
    ...gmbServices,
    ...businessServices,
    ...comboPackages
  ];

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `🚀 *Growth Service - Consultation Inquiry*\n\n*Service:* ${serviceName}\n\nHi, I would like to request a custom quote and project scope for this service. Please share details on consultation availability.`;
    window.open(getNepalWhatsAppUrl(message), '_blank');
  };

  const filteredServices = selectedTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedTab);

  const stats = [
    { number: '300+', label: 'Delivered Engagements' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: 'Jaipur • Vrindavan • Nepal', label: 'Physical Agency Offices' },
    { number: 'Custom Scoping', label: 'Milestone-Based Agility' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Custom Quotes & Solutions | Growth Service</title>
        <meta
          name="description"
          content="Request custom quotes and scope consultations for website development, SEO, social media management, and digital transformation tailored to your business."
        />
        <meta 
          name="keywords" 
          content="digital services quote, custom website development, SEO consultation, social media marketing agency, business growth solutions India Nepal"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/15">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-semibold tracking-wide text-yellow-300 uppercase">
              Bespoke Solutions & Transparent Scoping
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Tailored Digital Solutions <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Built For Measurable Growth
            </span>
          </h1>
          <p className="text-base md:text-xl mb-10 max-w-3xl mx-auto text-slate-200 leading-relaxed">
            Every business has unique market dynamics and objectives. We scope every engagement around your specific requirements, technical architecture, and milestones.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-purple-200 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <Container>
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                <tab.Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our <span className="text-purple-600">Service Capabilities</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Select a domain to inspect scope inclusions, technologies, and delivery frameworks. Connect with our team for a tailored proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="inline-block text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3">
                      {service.category.toUpperCase()}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{service.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Timeline / Duration Badge */}
                  <div className="mb-6 bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <Clock className="h-4 w-4 text-purple-600 shrink-0" />
                    <span>{service.delivery ? `Estimated Timeline: ${service.delivery}` : `Engagement Model: ${service.duration}`}</span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 text-sm mb-3">Key Capabilities Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.features.length > 5 && (
                      <div className="mt-2 text-xs font-semibold text-purple-600">
                        + {service.features.length - 5} more inclusions
                      </div>
                    )}
                  </div>

                  {/* Technologies if present */}
                  {service.technologies && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 text-xs mb-2">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="p-6 md:p-8 pt-0 border-t border-slate-100 bg-white">
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <button
                      onClick={() => handleWhatsAppClick(service.name)}
                      className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:opacity-95 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Get Quote
                    </button>
                    
                    <button
                      onClick={() => setSelectedService(service)}
                      className="border border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600 py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:bg-purple-50 flex items-center justify-center"
                    >
                      Scope Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engagement Process */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              A transparent, milestone-driven partnership from initial consultation to continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery Call</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We review your business goals, target audience, competitors, and technical requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tailored Scope</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We prepare an exact scope of work, architecture plan, milestones, and deliverable commitments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agile Execution</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated developers and growth specialists execute according to weekly sprints with transparent updates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Launch & Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rigorous QA verification, deployment to production, and ongoing post-launch technical assistance.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With Growth Service
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Engineered for high performance, business reliability, and measurable client outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-yellow-300 mb-6 border border-white/10">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clean, Scalable Architecture</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                We craft custom codebases using modern frameworks like React, TypeScript, Node.js, and MongoDB for long-term scalability and speed.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-yellow-300 mb-6 border border-white/10">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support & SLAs</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Every project includes direct communication with senior engineers and strategists across our Jaipur, Vrindavan, and Nepal offices.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-yellow-300 mb-6 border border-white/10">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Trusted by 300+ businesses across local retail, healthcare, hospitality, e-commerce, and professional service sectors.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Clear answers regarding our scoping process, engagements, and support.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How do you determine the project quote and timeline?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Quotes are formulated based on your exact business requirements, scope of features, third-party integrations, and technical architecture after a structured discovery call.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How long does an SEO engagement take to show results?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                SEO is a sustainable compounding growth channel. Technical improvements and indexation updates typically reflect within 30-60 days, with substantial ranking and lead growth developing over a 3-6 month window.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you provide ongoing maintenance after project delivery?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. All custom development projects include complimentary warranty support covering bug fixes and adjustments, with flexible ongoing retainer agreements available.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final Consultation CTA */}
      <Section className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Project Requirements?
          </h2>
          <p className="text-lg text-purple-200 mb-10 max-w-2xl mx-auto">
            Book a complimentary strategy call with our senior consultants or reach out directly to our offices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-call"
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book a Strategy Call
            </Link>
            
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </Container>
      </Section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {selectedService.category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">{selectedService.name}</h3>
                  <p className="text-slate-600 mt-1 text-sm">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Timeline */}
              <div className="mb-6 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-2 text-sm text-slate-700 font-medium">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>{selectedService.delivery ? `Estimated Timeline: ${selectedService.delivery}` : `Engagement Scope: ${selectedService.duration}`}</span>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Scope Inclusions & Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              {selectedService.technologies && (
                <div className="mb-8 bg-blue-50/60 border border-blue-100 p-4 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs mb-2">Technology Framework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-white text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    handleWhatsAppClick(selectedService.name);
                    setSelectedService(null);
                  }}
                  className="flex-1 bg-[#25D366] hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Request Scope via WhatsApp
                </button>
                
                <Link
                  to="/book-call"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
