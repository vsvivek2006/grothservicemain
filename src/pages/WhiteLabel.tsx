import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Zap, 
  Clock, 
  DollarSign, 
  Globe,
  BarChart,
  MessageCircle,
  Headphones,
  Award,
  Check,
  ArrowRight,
  Mail,
  Smartphone,
  Target,
  Lock,
  Briefcase
} from 'lucide-react';

const WhiteLabel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agency: '',
    services: '',
    clients: ''
  });

  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Website Development',
      description: 'Custom websites, e-commerce stores, web applications',
      pricing: '₹8,000 - ₹25,000 per project',
      margin: '40-60%',
      features: ['React.js Development', 'MERN Stack', 'Responsive Design', 'SEO Ready']
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: 'SEO Services',
      description: 'Complete SEO optimization and ranking services',
      pricing: '₹5,000 - ₹15,000/month',
      margin: '50-70%',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Ranking Reports']
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: 'Social Media Management',
      description: 'Complete social media marketing and management',
      pricing: '₹3,500 - ₹10,000/month',
      margin: '50-75%',
      features: ['Content Creation', 'Community Management', 'Performance Analytics', 'Video Production']
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: 'Digital Advertising',
      description: 'Meta, Google, and LinkedIn ad campaigns',
      pricing: '₹7,000 - ₹20,000/month',
      margin: '40-60%',
      features: ['Campaign Strategy', 'Ad Creation', 'A/B Testing', 'ROI Optimization']
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: 'Analytics & Reporting',
      description: 'Custom dashboards and performance tracking',
      pricing: '₹2,500 - ₹8,000/month',
      margin: '60-80%',
      features: ['Custom Dashboards', 'Performance Reports', 'Competitor Analysis', 'ROI Tracking']
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: 'Support & Maintenance',
      description: 'Ongoing technical support and maintenance',
      pricing: '₹1,500 - ₹5,000/month',
      margin: '70-85%',
      features: ['24/7 Support', 'Security Updates', 'Performance Monitoring', 'Backup Management']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: '100% White Label',
      description: 'No branding from our side. Everything delivered under your brand name'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'High Profit Margins',
      description: 'Earn 40-85% margins on all services you resell'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Quick Turnaround',
      description: 'Website delivery in 7-15 days, reports within 24 hours'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Dedicated Account Manager',
      description: 'Single point of contact for all your white label needs'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Secure Communication',
      description: 'Secure client portals and encrypted file sharing'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'All work undergoes rigorous quality checks before delivery'
    }
  ];

  const pricingModels = [
    {
      name: 'Project-Based',
      description: 'Perfect for one-time projects and new agencies',
      price: '30-40%',
      features: [
        'Pay per project',
        'No minimum commitment',
        'Flexible scheduling',
        'Ideal for websites and one-time campaigns'
      ]
    },
    {
      name: 'Monthly Retainer',
      description: 'Best for ongoing services and established agencies',
      price: '50-60%',
      features: [
        'Fixed monthly rate',
        'Priority support',
        'Volume discounts',
        'Dedicated resources'
      ]
    },
    {
      name: 'Enterprise Partnership',
      description: 'For large agencies with high volume requirements',
      price: '60-85%',
      features: [
        'Custom pricing',
        'White label portal',
        'API integration',
        '24/7 dedicated team'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Show success message or redirect
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>White Label Partner Program | Grworth Services</title>
        <meta
          name="description"
          content="White label digital marketing, website development, and SEO services for agencies. Resell our services under your brand with 40-85% profit margins."
        />
        <meta
          name="keywords"
          content="white label services, digital marketing white label, website development white label, SEO white label, agency partnership, reseller program"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Briefcase className="h-5 w-5 mr-2" />
                <span className="text-lg font-semibold">PARTNER PROGRAM</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                White Label <span className="text-cyan-300">Partner Program</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                Scale your agency with our professional digital services. Resell website development, 
                SEO, and marketing services under your brand with high profit margins and zero overhead.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('partnership')}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
                >
                  Apply for Partnership
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
                >
                  View Services
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>40-85% Profit Margins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>100% White Label - No Branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>7-15 Days Website Delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>Dedicated Account Managers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>24/7 Support & Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'pricing'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Pricing & Margins
            </button>
            <button
              onClick={() => setActiveTab('partnership')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'partnership'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              Apply for Partnership
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scale Your Agency Without Limits</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our White Label Partner Program enables digital agencies to offer comprehensive services 
                without the overhead of hiring specialized teams. Focus on client acquisition while we handle 
                the execution under your brand.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partner Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4 shadow-lg">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Client Onboarding</h4>
                  <p className="text-gray-600 text-sm">You onboard client under your brand</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4 shadow-lg">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Project Handover</h4>
                  <p className="text-gray-600 text-sm">Share requirements with our team</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4 shadow-lg">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">We Deliver</h4>
                  <p className="text-gray-600 text-sm">We complete work under your brand</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4 shadow-lg">
                    4
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">You Invoice</h4>
                  <p className="text-gray-600 text-sm">You invoice client and earn margin</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">White Label Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete suite of digital services available for white label reselling. 
                All services delivered 100% under your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="p-8">
                    <div className="text-blue-600 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">White Label Pricing:</span>
                        <span className="font-bold text-blue-600">{service.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Your Margin:</span>
                        <span className="font-bold text-green-600">{service.margin}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Includes:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Models & Margins</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your agency's needs and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingModels.map((model, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl border-2 ${
                  index === 1 ? 'border-blue-500 transform scale-105' : 'border-gray-200'
                } overflow-hidden`}>
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                      <div className="text-4xl font-bold text-blue-600 mb-2">{model.price}</div>
                      <div className="text-gray-500">Profit Margin</div>
                    </div>

                    <div className="space-y-4">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveTab('partnership')}
                      className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        index === 1 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105'
                          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Additional Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>No setup fees or hidden charges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>Volume discounts available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>30-day payment terms for established partners</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>White label reporting dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>Direct communication with project teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-300" />
                    <span>Quarterly strategy review meetings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Application Tab */}
        {activeTab === 'partnership' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for White Label Partnership</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to start your journey as a Grworth Services White Label Partner.
                We'll contact you within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@agency.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agency Name *
                    </label>
                    <input
                      type="text"
                      name="agency"
                      value={formData.agency}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Agency Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Interested In *
                  </label>
                  <input
                    type="text"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Website Development, SEO, Social Media, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Current Clients (Optional)
                  </label>
                  <input
                    type="number"
                    name="clients"
                    value={formData.clients}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="5"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
                >
                  Apply for Partnership
                  <ArrowRight className="h-5 w-5 inline ml-2" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By applying, you agree to our partnership terms. We'll contact you within 24 hours.
                </p>
              </form>
            </div>

            {/* Quick Apply */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Apply Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/9779707382481?text=Interested%20in%20White%20Label%20Partnership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-800 p-6 rounded-xl text-center transition-all duration-200 hover:scale-105 border border-gray-200"
                >
                  <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-sm text-gray-600">Quick chat</div>
                </a>
                <a
                  href="tel:+9779707382481"
                  className="bg-white hover:bg-gray-50 text-gray-800 p-6 rounded-xl text-center transition-all duration-200 hover:scale-105 border border-gray-200"
                >
                  <Smartphone className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <div className="font-bold">Call Now</div>
                  <div className="text-sm text-gray-600">+9779707382481</div>
                </a>
                <a
                  href="mailto:partners@grworth.com"
                  className="bg-white hover:bg-gray-50 text-gray-800 p-6 rounded-xl text-center transition-all duration-200 hover:scale-105 border border-gray-200"
                >
                  <Mail className="h-8 w-8 text-red-500 mx-auto mb-3" />
                  <div className="font-bold">Email</div>
                  <div className="text-sm text-gray-600">partners@grworth.com</div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Agency?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 50+ agencies already growing with our white label services
          </p>
          <button
            onClick={() => setActiveTab('partnership')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
          >
            Apply for Partnership Today
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabel;
