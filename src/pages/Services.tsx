import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Code, 
  Globe,
  Smartphone,
  Search,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  MapPin,
  Mail,
  Users,
  Zap,
  ArrowRight,
  Star,
  Shield,
  Check,
  ChevronDown,
  ChevronUp,
  Monitor,
  ShoppingCart,
  Target,
  BarChart,
  Headphones,
  Video,
  Brush,
  CreditCard,
  FileText,
  Clock
} from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  // Service Categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '🌟', count: 15 },
    { id: 'web', name: 'Website Development', icon: '🌐', count: 4 },
    { id: 'seo', name: 'SEO & Marketing', icon: '🔍', count: 4 },
    { id: 'smm', name: 'Social Media', icon: '📱', count: 3 },
    { id: 'business', name: 'Business Setup', icon: '🏢', count: 4 }
  ];

  // All Services with Detailed Information
  const allServices = [
    {
      id: 1,
      title: 'Website Development (5 Pages)',
      category: 'web',
      description: 'Professional 5-page responsive website with modern design and SEO optimization',
      price: '₹9,999',
      originalPrice: '₹29,999',
      delivery: '7-10 Days',
      icon: <Globe className="h-10 w-10" />,
      features: [
        'Home Page with Hero Section',
        'About Us Page',
        'Services/Products Page',
        'Contact Us with Form',
        'WhatsApp Integration',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        '1 Year Free Hosting',
        'Free SSL Certificate',
        'Social Media Integration',
        '6 Months Technical Support',
        'Google Analytics Setup'
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      useCases: ['Startups', 'Small Businesses', 'Portfolio Sites', 'Service Providers'],
      color: 'blue',
      popular: true,
      badge: 'BEST SELLER'
    },
    {
      id: 2,
      title: 'Tour & Travel Website',
      category: 'web',
      description: 'Complete travel booking platform with dynamic content and booking system',
      price: '₹14,999',
      originalPrice: '₹24,999',
      delivery: '10-15 Days',
      icon: <Globe className="h-10 w-10" />,
      features: [
        'Dynamic Home Page',
        'Tour Packages Pages',
        'Booking Inquiry System',
        'Payment Gateway Ready',
        'Admin Dashboard',
        'Gallery Section',
        'Customer Reviews',
        'SEO Optimized',
        'Mobile App Ready',
        'Email Notifications',
        'Calendar Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe/Razorpay'],
      useCases: ['Travel Agencies', 'Tour Operators', 'Hotel Chains', 'Adventure Companies'],
      color: 'green',
      popular: true,
      badge: 'HOT'
    },
    {
      id: 3,
      title: 'E-commerce Store',
      category: 'web',
      description: 'Complete e-commerce solution with admin panel, inventory, and payment gateway',
      price: '₹24,999',
      originalPrice: '₹49,999',
      delivery: '20-25 Days',
      icon: <ShoppingCart className="h-10 w-10" />,
      features: [
        'Product Catalog Management',
        'Shopping Cart System',
        'Secure Payment Gateway',
        'User Authentication',
        'Admin Dashboard',
        'Order Management',
        'Inventory Tracking',
        'Customer Reviews',
        'Discount Coupons',
        'Analytics Dashboard',
        'Mobile Responsive',
        '1 Year Support'
      ],
      technologies: ['MERN Stack', 'Redux', 'Stripe', 'AWS S3'],
      useCases: ['Retail Stores', 'Brand Outlets', 'Dropshipping', 'Product Businesses'],
      color: 'purple',
      popular: false,
      badge: 'PREMIUM'
    },
    {
      id: 4,
      title: 'Professional SEO Service',
      category: 'seo',
      description: 'Complete SEO optimization for better Google rankings and organic traffic',
      price: '₹7,779/month',
      originalPrice: '₹24,999',
      duration: '3-6 Months',
      icon: <Search className="h-10 w-10" />,
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
        'Content Strategy',
        'Local SEO Optimization',
        'Mobile SEO'
      ],
      technologies: ['Google Analytics', 'Search Console', 'Ahrefs/SEMrush', 'Screaming Frog'],
      useCases: ['Local Businesses', 'E-commerce Sites', 'Service Providers', 'Blogs'],
      color: 'orange',
      popular: true,
      badge: 'LIMITED OFFER'
    },
    {
      id: 5,
      title: 'Social Media Management',
      category: 'smm',
      description: 'Complete social media marketing solution across all platforms',
      price: '₹4,449/month',
      originalPrice: '₹24,999',
      duration: 'Minimum 3 Months',
      icon: <Instagram className="h-10 w-10" />,
      features: [
        'Content Calendar Planning',
        'Daily Post Creation',
        'Community Management',
        'Brand Storytelling',
        'Visual Content Creation',
        'Audience Engagement',
        'Hashtag Strategy',
        'Performance Analytics',
        'Instagram Management',
        'Facebook Management',
        'LinkedIn Optimization',
        'Twitter Management'
      ],
      technologies: ['Meta Business Suite', 'Hootsuite/Buffer', 'Canva', 'Analytics Tools'],
      useCases: ['Brands', 'Influencers', 'Local Businesses', 'Startups'],
      color: 'pink',
      popular: true,
      badge: 'MOST POPULAR'
    },
    {
      id: 6,
      title: 'Google My Business Optimization',
      category: 'business',
      description: 'Complete local business presence setup with review management',
      price: '₹2,499/month',
      originalPrice: '₹12,499',
      duration: 'Ongoing',
      icon: <MapPin className="h-10 w-10" />,
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
        'Local Citations',
        'Business Description',
        'Service Area Setup'
      ],
      technologies: ['Google My Business', 'Local SEO Tools', 'Review Management', 'Analytics'],
      useCases: ['Local Services', 'Restaurants', 'Retail Stores', 'Professional Services'],
      color: 'green',
      popular: true,
      badge: 'BEST VALUE'
    },
    {
      id: 7,
      title: 'Business Digital Setup',
      category: 'business',
      description: 'End-to-end business digital presence with complete online setup',
      price: '₹24,999',
      originalPrice: '₹39,999',
      delivery: '45-60 Days',
      icon: <Users className="h-10 w-10" />,
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
        'Email Marketing Setup',
        'Basic SEO Setup',
        'Analytics Dashboard'
      ],
      technologies: ['Website', 'Social Media', 'CRM', 'Email Marketing', 'Analytics'],
      useCases: ['New Businesses', 'Business Expansion', 'Digital Transformation', 'Startups'],
      color: 'purple',
      popular: false,
      badge: 'COMPLETE SOLUTION'
    },
    {
      id: 8,
      title: 'Meta Ads Management',
      category: 'seo',
      description: 'Professional Facebook & Instagram advertising for maximum ROI',
      price: '₹9,999/month',
      originalPrice: '₹19,999',
      duration: 'Minimum 3 Months',
      icon: <Facebook className="h-10 w-10" />,
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
        'Lead Generation',
        'Brand Awareness',
        'Sales Conversions'
      ],
      technologies: ['Meta Ads Manager', 'Pixel Setup', 'Audience Insights', 'Analytics'],
      useCases: ['E-commerce', 'Service Providers', 'Event Promotion', 'Brand Launch'],
      color: 'blue',
      popular: false,
      badge: 'HIGH ROI'
    },
    {
      id: 9,
      title: 'Business WhatsApp Setup',
      category: 'business',
      description: 'Professional Business WhatsApp with product catalog and automated responses',
      price: '₹1,499',
      originalPrice: '₹2,999',
      delivery: '2-3 Days',
      icon: <MessageCircle className="h-10 w-10" />,
      features: [
        'Business WhatsApp API Setup',
        'Complete Business Profile',
        '10 Product Catalog Listings',
        'Quick Reply Messages Setup',
        'Away Message Configuration',
        'Business Hours Setup',
        'Greeting Message Setup',
        'Customer Support System',
        'Label Organization',
        'Template Messages',
        'Analytics Integration',
        'Team Collaboration'
      ],
      technologies: ['WhatsApp Business API', 'Catalog Management', 'Automation Tools'],
      useCases: ['Customer Support', 'Sales Teams', 'Service Businesses', 'E-commerce'],
      color: 'green',
      popular: true,
      badge: 'QUICK SETUP'
    },
    {
      id: 10,
      title: 'Guest House Website',
      category: 'web',
      description: 'Hotel/Guest house website with booking system and payment gateway',
      price: '₹12,999',
      originalPrice: '₹19,999',
      delivery: '12-18 Days',
      icon: <Headphones className="h-10 w-10" />,
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
        'Email Notifications',
        'Mobile Responsive',
        'SEO Optimized'
      ],
      technologies: ['MERN Stack', 'Razorpay/Stripe', 'JWT Auth', 'Cloudinary'],
      useCases: ['Hotels', 'Guest Houses', 'Resorts', 'Vacation Rentals'],
      color: 'indigo',
      popular: false,
      badge: 'SPECIALIZED'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 to-cyan-500',
        light: 'bg-blue-50 border-blue-200',
        text: 'text-blue-600',
        border: 'border-blue-300',
        bg: 'bg-blue-500'
      },
      green: {
        gradient: 'from-green-500 to-emerald-500',
        light: 'bg-green-50 border-green-200',
        text: 'text-green-600',
        border: 'border-green-300',
        bg: 'bg-green-500'
      },
      purple: {
        gradient: 'from-purple-500 to-indigo-500',
        light: 'bg-purple-50 border-purple-200',
        text: 'text-purple-600',
        border: 'border-purple-300',
        bg: 'bg-purple-500'
      },
      pink: {
        gradient: 'from-pink-500 to-rose-500',
        light: 'bg-pink-50 border-pink-200',
        text: 'text-pink-600',
        border: 'border-pink-300',
        bg: 'bg-pink-500'
      },
      orange: {
        gradient: 'from-orange-500 to-yellow-500',
        light: 'bg-orange-50 border-orange-200',
        text: 'text-orange-600',
        border: 'border-orange-300',
        bg: 'bg-orange-500'
      },
      indigo: {
        gradient: 'from-indigo-500 to-blue-500',
        light: 'bg-indigo-50 border-indigo-200',
        text: 'text-indigo-600',
        border: 'border-indigo-300',
        bg: 'bg-indigo-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const calculateDiscount = (currentPrice: string, originalPrice: string) => {
    const current = parseInt(currentPrice.replace(/[^0-9]/g, ''));
    const original = parseInt(originalPrice.replace(/[^0-9]/g, ''));
    return Math.round((1 - current / original) * 100);
  };

  const handleWhatsAppClick = (serviceName: string, price: string) => {
    const message = `🚀 *Grworth Services - Service Inquiry*\n\n*Service:* ${serviceName}\n*Price:* ${price}\n\nHi, I'm interested in this service. Please share more details and the next steps.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9779707382481?text=${encodedMessage}`, '_blank');
  };

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '✅' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '7-15 Days', label: 'Avg. Delivery Time', icon: '⚡' },
    { number: '₹25Cr+', label: 'Revenue Generated', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Professional Services - Website, SEO, Social Media | Grworth Services</title>
        <meta
          name="description"
          content="Professional digital services: Website Development from ₹9,999, SEO from ₹7,779/month, Social Media Management ₹4,449/month. Complete business solutions for growth."
        />
        <meta 
          name="keywords" 
          content="website development services, SEO services India, social media management, business setup services, digital marketing solutions, professional services"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="text-lg font-semibold">🚀 PROFESSIONAL SERVICES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business<br />With Our <span className="text-cyan-300">Expert Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Professional digital solutions tailored to your business needs. From website development 
            to complete digital marketing – we have everything you need to grow online.
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

      {/* Services Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Professional Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of digital solutions designed for business success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  {/* Service Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 ${color.light} rounded-2xl flex items-center justify-center ${color.text}`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                        </div>
                      </div>
                      
                      {service.popular && (
                        <div className={`${color.bg} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                          {service.badge}
                        </div>
                      )}
                    </div>

                    {/* Pricing & Delivery */}
                    <div className="mb-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-baseline gap-3">
                          <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                          <span className="text-gray-400 line-through text-xl">{service.originalPrice}</span>
                        </div>
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {discount}% OFF
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {service.delivery ? (
                          <>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              Delivery: {service.delivery}
                            </span>
                            <span>•</span>
                            <span>Free Support Included</span>
                          </>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Duration: {service.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Features */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleService(service.id)}
                        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span className="font-semibold text-gray-900">
                          {expandedService === service.id ? 'Hide Features' : 'View All Features'}
                        </span>
                        {expandedService === service.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        )}
                      </button>
                      
                      {expandedService === service.id && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3">Complete Features:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, idx) => (
                          <span key={idx} className={`${color.light} ${color.text} px-3 py-1 rounded-full text-xs`}>
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleWhatsAppClick(service.title, service.price)}
                        className={`bg-gradient-to-r ${color.gradient} hover:shadow-xl text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Get Quote
                      </button>
                      
                      <button
                        onClick={() => toggleService(service.id)}
                        className="border border-gray-300 text-gray-600 hover:border-blue-300 hover:text-blue-600 py-3 px-4 rounded-xl font-semibold transition-colors duration-200 hover:bg-blue-50"
                      >
                        More Details
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our proven approach and expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Custom Code</h3>
              <p className="text-gray-600">
                No WordPress templates. We write clean, scalable code using React, Node.js, and MongoDB.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Support</h3>
              <p className="text-gray-600">
                30 days free support on all projects. Ongoing maintenance packages available at affordable rates.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Basic websites in 7-10 days, complex projects in 15-20 days. We respect deadlines and deliver quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with 5+ years experience in digital marketing and web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures project success and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-blue-200 z-0"></div>
            
            {[
              { step: 1, title: 'Consultation', desc: 'Understand your requirements', icon: '🎯' },
              { step: 2, title: 'Planning', desc: 'Create detailed project roadmap', icon: '📋' },
              { step: 3, title: 'Development', desc: 'Build with modern technologies', icon: '💻' },
              { step: 4, title: 'Delivery', desc: 'Launch with full support', icon: '🚀' }
            ].map((step, index) => (
              <div key={step.step} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg border-4 border-white">
                  {step.icon}
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-lg font-bold text-gray-900 mb-2">Step {step.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Star className="h-5 w-5 text-yellow-300 mr-2" />
            <span className="text-white font-semibold">READY TO GET STARTED?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Share your vision with us. We'll provide a custom solution and quote within 24 hours.
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
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-blue-200">Custom Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30 Days</div>
              <div className="text-blue-200">Free Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7-15 Days</div>
              <div className="text-blue-200">Delivery Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
