import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, ShoppingCart, Video, Mail, MessageCircle, CreditCard, Heart, Globe, Code, Smartphone, Search, Target, Award } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedService, setSelectedService] = useState("");

  // Tabs for filtering
  const tabs = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'web', name: 'Website', icon: '🌐' },
    { id: 'seo', name: 'SEO', icon: '🔍' },
    { id: 'smm', name: 'SMM', icon: '📱' },
    { id: 'gmb', name: 'GMB', icon: '📍' },
    { id: 'combo', name: 'Combo', icon: '🎁' }
  ];

  // Website Development Services
  const websiteServices = [
    { 
      id: 1,
      name: 'Basic Website (5 Pages)', 
      category: 'web',
      price: '₹9,999', 
      originalPrice: '₹29,999',
      description: 'Professional 5-page responsive website with WhatsApp integration',
      delivery: '7-10 Days',
      popular: true,
      badge: 'BEST DEAL',
      features: [
        'Home Page Design',
        'About Us Page',
        'Services Page',
        'Contact Us with Form',
        'WhatsApp Integration',
        'Mobile Responsive',
        'Basic SEO Setup',
        '1 Year Free Support',
        'Free SSL Certificate',
        'Social Media Integration'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      color: 'blue'
    },
    { 
      id: 2,
      name: 'Tour & Travel Website', 
      category: 'web',
      price: '₹14,999', 
      originalPrice: '₹24,999',
      description: 'Complete travel booking platform with dynamic content',
      delivery: '10-15 Days',
      popular: false,
      badge: 'HOT',
      features: [
        'Dynamic Home Page',
        'Upcoming Tours Section',
        'Tour Packages Pages',
        'Booking Inquiry System',
        'Payment Gateway Ready',
        'Admin Dashboard',
        'Gallery Section',
        'Testimonials',
        'SEO Optimized',
        'Mobile App Ready'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      color: 'green'
    },
    { 
      id: 3,
      name: 'Guest House Website', 
      category: 'web',
      price: '₹12,999', 
      originalPrice: '₹19,999',
      description: 'Hotel/Guest house website with payment gateway',
      delivery: '12-18 Days',
      popular: false,
      badge: 'POPULAR',
      features: [
        'Homepage with Hero Slider',
        'Room Listings & Booking',
        'Payment Gateway Integration',
        'Admin Control Panel',
        'Customer Review System',
        'Amenities Showcase',
        'Location Map',
        'Photo Gallery',
        'Booking Calendar',
        'Email Notifications'
      ],
      technologies: ['MERN Stack', 'Razorpay/Stripe', 'JWT Auth'],
      color: 'purple'
    },
    { 
      id: 4,
      name: 'E-commerce Website', 
      category: 'web',
      price: '₹24,999', 
      originalPrice: '₹49,999',
      description: 'Complete e-commerce solution with admin panel',
      delivery: '20-25 Days',
      popular: true,
      badge: 'PREMIUM',
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Gateway',
        'User Authentication',
        'Admin Dashboard',
        'Order Management',
        'Inventory Tracking',
        'Customer Reviews',
        'Discount Coupons',
        'Analytics Dashboard'
      ],
      technologies: ['MERN', 'Redux', 'Stripe', 'AWS'],
      color: 'pink'
    }
  ];

  // SEO Services
  const seoServices = [
    { 
      id: 5,
      name: 'Professional SEO', 
      category: 'seo',
      price: '₹7,779/month', 
      originalPrice: '₹24,999',
      description: 'Complete SEO optimization for better rankings',
      duration: '3-6 Months',
      popular: true,
      badge: 'LIMITED OFFER',
      features: [
        'Monthly 4 Performance Reports',
        '4 Blog Posts (500+ words)',
        '5-10 Keyword Optimization',
        'On-Page SEO Optimization',
        'Off-Page SEO Activities',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Traffic Growth Strategy',
        'Backlink Building',
        'Content Strategy'
      ],
      deliverables: [
        'Keyword Research Report',
        'SEO Audit Report',
        'Monthly Ranking Report',
        'Backlink Analysis',
        'Content Strategy Document'
      ],
      color: 'orange'
    }
  ];

  // SMM Services
  const smmServices = [
    { 
      id: 6,
      name: 'Social Media Management', 
      category: 'smm',
      price: '₹4,449/month', 
      originalPrice: '₹24,999',
      description: 'Complete social media marketing solution',
      duration: 'Minimum 3 Months',
      popular: true,
      badge: 'MOST POPULAR',
      features: [
        'Content Calendar Planning',
        'Daily Post Creation',
        'Community Management',
        'Brand Storytelling',
        'Visual Content Creation',
        'Audience Engagement',
        'Hashtag Strategy',
        'Performance Analytics',
        'Instagram & Facebook',
        'Twitter & LinkedIn'
      ],
      platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
      color: 'pink'
    },
    { 
      id: 7,
      name: 'Meta Ads Management', 
      category: 'smm',
      price: '₹9,999/month', 
      originalPrice: '₹19,999',
      description: 'Professional Facebook & Instagram advertising',
      duration: 'Minimum 3 Months',
      popular: false,
      badge: 'HIGH ROI',
      features: [
        'Ad Account Setup',
        'Audience Targeting',
        'Ad Creative Development',
        'A/B Testing Setup',
        'Conversion Tracking',
        'ROI Optimization',
        'Monthly Reports',
        'Budget Management',
        'Remarketing Campaigns',
        'Lead Generation'
      ],
      adTypes: ['Lead Generation', 'Traffic', 'Sales', 'Awareness'],
      color: 'blue'
    }
  ];

  // GMB Services
  const gmbServices = [
    { 
      id: 8,
      name: 'Google My Business', 
      category: 'gmb',
      price: '₹2,499/month', 
      originalPrice: '₹12,499',
      description: 'Complete local business presence setup',
      duration: 'Ongoing',
      popular: true,
      badge: 'BEST VALUE',
      features: [
        'GMB Profile Complete Setup',
        'Weekly 4-5 Posts',
        'Review Management System',
        'Local SEO Optimization',
        'Photo & Video Posts',
        'Performance Tracking',
        'Q&A Management',
        'Insights & Analytics',
        'Google Map Ranking',
        'Local Citations'
      ],
      benefits: [
        'Increase Local Visibility',
        'Generate More Calls',
        'Improve Customer Trust',
        'Boost Website Traffic',
        'Competitive Edge'
      ],
      color: 'green'
    }
  ];

  // Business Setup Services
  const businessServices = [
    { 
      id: 9,
      name: 'Complete Business Setup', 
      category: 'business',
      price: '₹24,999', 
      originalPrice: '₹39,999',
      description: 'End-to-end business digital presence',
      delivery: '45-60 Days',
      popular: true,
      badge: 'COMPLETE SOLUTION',
      features: [
        'Professional Business Website',
        'Complete Social Media Setup',
        'Market Strategy Guidance',
        'Assigned Industry Expert',
        'Brand Identity Development',
        'Lead Generation System',
        'CRM Setup Consultation',
        '3 Months Free Support',
        'Google Business Profile',
        'Email Marketing Setup'
      ],
      inclusions: [
        'Website Development',
        'Social Media Profiles',
        'Content Strategy',
        'Marketing Plan',
        'Ongoing Support'
      ],
      color: 'purple'
    }
  ];

  // Combo Packages
  const comboPackages = [
    {
      id: 10,
      name: 'Website + SEO + SMM',
      category: 'combo',
      price: '₹44,999',
      originalPrice: '₹90,000',
      description: 'Complete digital package for 3 months',
      duration: '3 Months Service',
      popular: true,
      badge: 'BEST SELLER',
      features: [
        'Professional Website (5 pages)',
        '3 Months SEO Service',
        '3 Months Social Media Management',
        'Google Business Profile Setup',
        'Meta Ads Setup',
        'Mobile Responsive Design',
        '45 Creative Posts Included',
        '12 Blog Posts',
        '12 Months Technical Support',
        'Performance Analytics Dashboard'
      ],
      savings: '₹45,001',
      color: 'gradient'
    },
    {
      id: 11,
      name: 'Business Digital Package',
      category: 'combo',
      price: '₹64,999',
      originalPrice: '₹1,20,000',
      description: 'Everything you need for digital presence',
      duration: '6 Months Service',
      popular: false,
      badge: 'ENTERPRISE',
      features: [
        'Custom Website Development',
        '6 Months SEO Service',
        '6 Months Social Media Management',
        'Google Business Profile',
        'Meta Ads Management',
        'Email Marketing Setup',
        'CRM Consultation',
        'Brand Identity',
        'Dedicated Account Manager',
        '24/7 Priority Support'
      ],
      savings: '₹55,001',
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

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 to-cyan-500',
        light: 'bg-blue-50 border-blue-200',
        text: 'text-blue-600',
        border: 'border-blue-300'
      },
      green: {
        gradient: 'from-green-500 to-emerald-500',
        light: 'bg-green-50 border-green-200',
        text: 'text-green-600',
        border: 'border-green-300'
      },
      purple: {
        gradient: 'from-purple-500 to-indigo-500',
        light: 'bg-purple-50 border-purple-200',
        text: 'text-purple-600',
        border: 'border-purple-300'
      },
      pink: {
        gradient: 'from-pink-500 to-rose-500',
        light: 'bg-pink-50 border-pink-200',
        text: 'text-pink-600',
        border: 'border-pink-300'
      },
      orange: {
        gradient: 'from-orange-500 to-yellow-500',
        light: 'bg-orange-50 border-orange-200',
        text: 'text-orange-600',
        border: 'border-orange-300'
      },
      gradient: {
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        light: 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50',
        text: 'text-blue-600',
        border: 'border-blue-300'
      },
      premium: {
        gradient: 'from-gray-800 to-gray-900',
        light: 'bg-gray-50 border-gray-200',
        text: 'text-gray-600',
        border: 'border-gray-300'
      }
    };
    return colors[color] || colors.blue;
  };

  const calculateDiscount = (currentPrice, originalPrice) => {
    const current = parseInt(currentPrice.replace(/[^0-9]/g, ''));
    const original = parseInt(originalPrice.replace(/[^0-9]/g, ''));
    return Math.round((1 - current / original) * 100);
  };

  const handleWhatsAppClick = (serviceName, price, category = 'service') => {
    const message = `🚀 *Grworth Services - Service Inquiry*\n\n*Service:* ${serviceName}\n*Price:* ${price}\n*Category:* ${category}\n\nHi, I'm interested in this service. Please share more details and the next steps.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9779707382481?text=${encodedMessage}`, '_blank');
  };

  const filteredServices = selectedTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedTab);

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: '✅' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '7-15 Days', label: 'Average Delivery', icon: '⚡' },
    { number: '24/7', label: 'Support Available', icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Pricing - Website ₹9,999, SEO ₹7,779, Social Media ₹4,449 | Grworth Services</title>
        <meta
          name="description"
          content="Affordable pricing for professional services: Website Development from ₹9,999, SEO from ₹7,779/month, Social Media from ₹4,449/month. Special discounts available."
        />
        <meta 
          name="keywords" 
          content="website development price, SEO service cost, social media management pricing, Google My Business setup, digital marketing packages India"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="text-lg font-semibold">🔥 LIMITED TIME OFFERS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transparent <span className="text-cyan-300">Pricing</span><br />
            For Your <span className="text-cyan-300">Success</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Professional digital solutions at affordable rates. No hidden costs, just honest pricing for quality services.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Service Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional services. All packages include free support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const color = getColorClasses(service.color);
              const discount = calculateDiscount(service.price, service.originalPrice);
              
              return (
                <div 
                  key={service.id}
                  className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
                    service.popular ? 'border-blue-300 transform hover:-translate-y-2' : 'border-gray-200'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 right-6">
                      <div className={`bg-gradient-to-r ${color.gradient} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}>
                        {service.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Service Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      
                      {/* Pricing */}
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-gray-400 line-through">{service.originalPrice}</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          {discount}% OFF
                        </span>
                      </div>
                      
                      {/* Duration/Delivery */}
                      <div className="text-sm text-gray-500 mb-4">
                        {service.delivery ? `📅 Delivery: ${service.delivery}` : `⏱️ Duration: ${service.duration}`}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.features.length > 5 && (
                        <div className="mt-2 text-sm text-blue-600">
                          + {service.features.length - 5} more features
                        </div>
                      )}
                    </div>

                    {/* Technologies (if any) */}
                    {service.technologies && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Savings (for combos) */}
                    {service.savings && (
                      <div className="mb-6 bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-green-700">Total Savings:</span>
                          <span className="font-bold text-green-700">{service.savings}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleWhatsAppClick(service.name, service.price, service.category)}
                        className={`bg-gradient-to-r ${color.gradient} hover:scale-105 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Get Quote
                      </button>
                      
                      <button
                        onClick={() => setSelectedService(service)}
                        className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-semibold transition-all duration-200"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Grworth Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Custom Code</h3>
              <p className="text-gray-600">
                No WordPress templates. We write clean, scalable code using React, Node.js, and MongoDB for optimal performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Support</h3>
              <p className="text-gray-600">
                30 days free support on all projects. Ongoing maintenance packages available at affordable rates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Basic websites in 7-10 days, complex projects in 15-20 days. We respect deadlines and deliver quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Q: What's included in the website development package?</h3>
              <p className="text-gray-600">
                Our ₹9,999 package includes 5 pages (Home, About, Services, Contact), WhatsApp integration, mobile responsive design, basic SEO setup, and 1 year free support.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Q: How long does SEO take to show results?</h3>
              <p className="text-gray-600">
                SEO is a long-term strategy. Initial improvements appear in 1-2 months, but significant results typically take 3-6 months of consistent optimization.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Q: Is hosting included in website packages?</h3>
              <p className="text-gray-600">
                Yes! All website packages include 1 year of premium hosting and free SSL certificate. Renewal charges apply after the first year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="text-lg font-semibold">🎯 SPECIAL OFFER</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Get professional digital solutions at unbeatable prices. Contact us today for a free consultation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a
              href="https://wa.me/9779707382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col items-center gap-2"
            >
              <div className="text-2xl">💬</div>
              <div>
                <div className="font-bold">WhatsApp</div>
                <div className="text-sm text-gray-600">Instant Response</div>
              </div>
            </a>
            
            <a
              href="tel:+9779707382481"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col items-center gap-2"
            >
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-bold">Call Now</div>
                <div className="text-sm text-gray-600">+9779707382481</div>
              </div>
            </a>
            
            <a
              href="mailto:contact@grworth.com"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col items-center gap-2"
            >
              <div className="text-2xl">✉️</div>
              <div>
                <div className="font-bold">Email Us</div>
                <div className="text-sm text-gray-600">contact@grworth.com</div>
              </div>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-blue-200">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹25Cr+</div>
              <div className="text-blue-200">Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
                  <p className="text-gray-600 mt-2">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Package Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="font-bold text-xl text-gray-900">{selectedService.price}</p>
                        <p className="text-sm text-gray-400 line-through">{selectedService.originalPrice}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{selectedService.delivery ? 'Delivery' : 'Duration'}</p>
                        <p className="font-bold text-gray-900">{selectedService.delivery || selectedService.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">All Features:</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Ready to Get Started?</h4>
                    <p className="text-gray-600 mb-4">
                      Contact us now to discuss your project requirements and get started.
                    </p>
                    
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          handleWhatsAppClick(selectedService.name, selectedService.price, selectedService.category);
                          setSelectedService(null);
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Contact on WhatsApp
                      </button>
                      
                      <button
                        onClick={() => setSelectedService(null)}
                        className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-semibold transition-all duration-200"
                      >
                        Back to Services
                      </button>
                    </div>
                  </div>
                  
                  {selectedService.technologies && (
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
