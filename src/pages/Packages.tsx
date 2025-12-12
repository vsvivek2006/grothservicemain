import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Check, Star, ArrowRight, Zap, Crown, Globe, Code, Smartphone, Search, MapPin, MessageSquare, TrendingUp, Shield, Clock, Users, DollarSign, Target, Award, Headphones } from 'lucide-react';

const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'seo' | 'smm' | 'gmb' | 'business'>('web');

  const webDevelopmentPackages = [
    {
      id: 1,
      name: "Basic Website",
      originalPrice: 29999,
      offerPrice: 9999,
      description: "Professional responsive website for startups",
      deliveryTime: "7-10 days",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "1 Home Page Design",
        "About Us Page",
        "Services Page",
        "Contact Us Form",
        "WhatsApp Integration",
        "Mobile Responsive Design",
        "SEO Friendly Structure",
        "Basic Speed Optimization"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
      cta: "Order Now",
      color: "from-blue-500 to-cyan-500",
      tag: "HOT DEAL"
    },
    {
      id: 2,
      name: "Tour & Travel Website",
      originalPrice: 24999,
      offerPrice: 14999,
      description: "Complete travel booking platform",
      deliveryTime: "10-15 days",
      icon: <MapPin className="h-8 w-8" />,
      features: [
        "Dynamic Home Page",
        "Upcoming Tours Section",
        "Tour Packages Pages",
        "About Company Page",
        "Contact Us with Map",
        "Booking Inquiry Form",
        "Gallery Section",
        "Testimonials Section"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      cta: "Get Quote",
      color: "from-green-500 to-teal-500",
      tag: "POPULAR"
    },
    {
      id: 3,
      name: "Guest House Website",
      originalPrice: 19999,
      offerPrice: 12999,
      description: "Hotel/Guest house with payment integration",
      deliveryTime: "12-18 days",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "Homepage with Hero Slider",
        "Room Listings Page",
        "Booking System",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "Customer Reviews",
        "Amenities Section",
        "Location & Directions"
      ],
      technologies: ["MERN Stack", "Razorpay/Stripe", "JWT Auth"],
      cta: "Start Project",
      color: "from-purple-500 to-pink-500",
      tag: "FEATURED"
    }
  ];

  const seoPackage = {
    name: "Professional SEO Package",
    originalPrice: 24999,
    offerPrice: 7779,
    description: "Complete SEO optimization for better rankings",
    duration: "3-6 months",
    icon: <Search className="h-8 w-8" />,
    features: [
      "Monthly 4 Performance Reports",
      "4 Blog Posts (500+ words)",
      "5-10 Keyword Optimization",
      "On-Page SEO Optimization",
      "Off-Page SEO Activities",
      "Technical SEO Audit",
      "Competitor Analysis",
      "Traffic Growth Strategy"
    ],
    deliverables: [
      "Keyword Research Report",
      "SEO Audit Report",
      "Monthly Ranking Report",
      "Backlink Profile Analysis",
      "Content Strategy Document"
    ],
    cta: "Start SEO Campaign",
    color: "from-orange-500 to-red-500"
  };

  const gmbPackage = {
    name: "Google My Business Optimization",
    originalPrice: 12499,
    offerPrice: 2499,
    description: "Complete local business presence setup",
    duration: "Ongoing",
    icon: <Target className="h-8 w-8" />,
    features: [
      "GMB Profile Complete Setup",
      "Weekly 4-5 Posts",
      "Review Management System",
      "Local SEO Optimization",
      "Photo & Video Posts",
      "Performance Tracking",
      "Q&A Management",
      "Insights & Analytics"
    ],
    benefits: [
      "Increase Local Visibility",
      "Generate More Calls",
      "Improve Customer Trust",
      "Boost Website Traffic",
      "Competitive Edge"
    ],
    cta: "Optimize GMB",
    color: "from-blue-600 to-indigo-600"
  };

  const smmPackage = {
    name: "Social Media Marketing",
    originalPrice: 24999,
    offerPrice: 4449,
    description: "Complete social media management",
    duration: "Monthly",
    icon: <MessageSquare className="h-8 w-8" />,
    features: [
      "Content Calendar Planning",
      "Daily Post Creation & Scheduling",
      "Community Management",
      "Brand Storytelling",
      "Visual Content Creation",
      "Audience Engagement",
      "Hashtag Strategy",
      "Performance Analytics"
    ],
    platforms: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
    cta: "Start SMM",
    color: "from-pink-500 to-rose-500"
  };

  const metaAdsPackage = {
    name: "Meta Ads Management",
    originalPrice: 19999,
    offerPrice: 9999,
    description: "Professional Facebook & Instagram advertising",
    duration: "Monthly",
    icon: <TrendingUp className="h-8 w-8" />,
    features: [
      "Ad Account Setup & Optimization",
      "Audience Targeting Strategy",
      "Ad Creative Development",
      "A/B Testing Setup",
      "Conversion Tracking",
      "ROI Optimization",
      "Monthly Performance Report",
      "Ad Budget Management"
    ],
    adTypes: ["Lead Generation", "Website Traffic", "Sales Conversions", "Brand Awareness"],
    cta: "Launch Ads",
    color: "from-blue-500 to-purple-600"
  };

  const businessSetupPackage = {
    name: "Complete Business Setup",
    originalPrice: 39999,
    offerPrice: 24999,
    description: "End-to-end business digital presence",
    duration: "45-60 days",
    icon: <Award className="h-8 w-8" />,
    features: [
      "Professional Business Website",
      "Complete Social Media Setup",
      "Market Entry Strategy Guidance",
      "Assigned Industry Expert",
      "Brand Identity Development",
      "Lead Generation System",
      "CRM Setup Consultation",
      "3 Months Support"
    ],
    inclusions: [
      "Website Development",
      "Social Media Profiles",
      "Content Strategy",
      "Marketing Plan",
      "Ongoing Support"
    ],
    cta: "Setup Business",
    color: "from-green-600 to-emerald-600"
  };

  const allServices = [
    {
      id: 'web',
      name: 'Website Development',
      icon: <Code className="h-5 w-5" />,
      count: 3
    },
    {
      id: 'seo',
      name: 'SEO Services',
      icon: <Search className="h-5 w-5" />,
      count: 1
    },
    {
      id: 'gmb',
      name: 'GMB Optimization',
      icon: <MapPin className="h-5 w-5" />,
      count: 1
    },
    {
      id: 'smm',
      name: 'Social Media Marketing',
      icon: <MessageSquare className="h-5 w-5" />,
      count: 1
    },
    {
      id: 'business',
      name: 'Business Setup',
      icon: <Users className="h-5 w-5" />,
      count: 1
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "7-15 days average turnaround time"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Custom Code",
      description: "No WordPress, pure HTML/CSS/React"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Free Support",
      description: "30 days free support included"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "No Hidden Cost",
      description: "Transparent pricing, all-inclusive"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'web':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webDevelopmentPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {pkg.tag && (
                  <div className="absolute -top-3 right-6">
                    <div className={`bg-gradient-to-r ${pkg.color} text-white px-4 py-1 rounded-full font-bold text-xs shadow-lg`}>
                      {pkg.tag}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                      {pkg.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">₹{pkg.offerPrice.toLocaleString()}</span>
                      <span className="text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Delivery: {pkg.deliveryTime}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg text-white py-3 rounded-lg font-semibold transition-all duration-200`}>
                    {pkg.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'seo':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${seoPackage.color} rounded-2xl flex items-center justify-center text-white`}>
                    {seoPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{seoPackage.name}</h3>
                    <div className="flex items-baseline gap-3 mt-2">
                      <span className="text-4xl font-bold text-gray-900">₹{seoPackage.offerPrice.toLocaleString()}</span>
                      <span className="text-gray-500 line-through text-xl">₹{seoPackage.originalPrice.toLocaleString()}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">
                        Save {Math.round((1 - seoPackage.offerPrice/seoPackage.originalPrice) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Package Includes:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {seoPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Deliverables:</h4>
                  <ul className="space-y-3">
                    {seoPackage.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Duration: {seoPackage.duration}</h4>
                  <p className="text-gray-600 text-sm mb-4">Optimal results visible within 3-6 months</p>
                  <button className={`w-full bg-gradient-to-r ${seoPackage.color} hover:shadow-lg text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200`}>
                    {seoPackage.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'gmb':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${gmbPackage.color} rounded-2xl flex items-center justify-center text-white`}>
                      {gmbPackage.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{gmbPackage.name}</h3>
                      <div className="flex items-baseline gap-3 mt-2">
                        <span className="text-4xl font-bold text-gray-900">₹{gmbPackage.offerPrice.toLocaleString()}/month</span>
                        <span className="text-gray-500 line-through text-xl">₹{gmbPackage.originalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {gmbPackage.features.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <Check className="h-5 w-5 text-green-500 mb-2" />
                        <p className="text-sm font-medium text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {gmbPackage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                          ✓
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full bg-gradient-to-r ${gmbPackage.color} hover:shadow-lg text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3`}>
                  {gmbPackage.cta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        );

      case 'smm':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${smmPackage.color} rounded-2xl flex items-center justify-center text-white`}>
                    {smmPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{smmPackage.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">₹{smmPackage.offerPrice.toLocaleString()}/month</span>
                      <span className="text-gray-500 line-through">₹{smmPackage.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Platforms Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {smmPackage.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-pink-50 text-pink-700 px-4 py-2 rounded-full font-medium">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {smmPackage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${smmPackage.color} hover:shadow-lg text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200`}>
                {smmPackage.cta}
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${metaAdsPackage.color} rounded-2xl flex items-center justify-center text-white`}>
                    {metaAdsPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{metaAdsPackage.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">₹{metaAdsPackage.offerPrice.toLocaleString()}/month</span>
                      <span className="text-gray-500 line-through">₹{metaAdsPackage.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Ad Types:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {metaAdsPackage.adTypes.map((type, idx) => (
                      <div key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center font-medium">
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {metaAdsPackage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${metaAdsPackage.color} hover:shadow-lg text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200`}>
                {metaAdsPackage.cta}
              </button>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-10">
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-24 h-24 bg-gradient-to-r ${businessSetupPackage.color} rounded-2xl flex items-center justify-center text-white`}>
                  {businessSetupPackage.icon}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-900">{businessSetupPackage.name}</h3>
                  <div className="flex items-baseline gap-4 mt-3">
                    <span className="text-5xl font-bold text-gray-900">₹{businessSetupPackage.offerPrice.toLocaleString()}</span>
                    <span className="text-gray-500 line-through text-2xl">₹{businessSetupPackage.originalPrice.toLocaleString()}</span>
                    <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-bold">
                      Complete Business Solution
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-xl">Package Features:</h4>
                  <div className="space-y-4">
                    {businessSetupPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">What's Included:</h4>
                    <ul className="space-y-3">
                      {businessSetupPackage.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Delivery Time: {businessSetupPackage.duration}</h4>
                    <p className="text-gray-600 text-sm mb-4">Complete B2B setup with ongoing guidance</p>
                    <button className={`w-full bg-gradient-to-r ${businessSetupPackage.color} hover:shadow-xl text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3`}>
                      <Users className="h-5 w-5" />
                      {businessSetupPackage.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Digital Solutions Packages - Affordable Pricing | Grworth Services</title>
        <meta 
          name="description" 
          content="Professional website development from ₹9999, SEO services from ₹7779, SMM packages from ₹4449. Complete digital solutions for your business growth." 
        />
        <meta 
          name="keywords" 
          content="website development packages, SEO services India, social media marketing, Google My Business optimization, business setup packages" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Digital Solutions</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Affordable packages for website development, SEO, social media marketing, and business setup
          </p>
          
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-2xl p-1 mb-8">
            {allServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id as any)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === service.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                {service.icon}
                {service.name}
                <span className="bg-white/20 px-2 py-1 rounded text-xs">
                  {service.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === service.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {service.icon}
              {service.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="mb-16">
          {renderContent()}
        </div>

        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-2xl p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Limited Time Offer! 🎁</h3>
              <p className="text-red-100">Get 30% OFF on all annual packages</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30% OFF</div>
              <div className="text-sm">Valid till December 31</div>
            </div>
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105">
              Grab Offer Now
            </button>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Grworth Services?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Development</h3>
              <p className="text-gray-600">No WordPress templates. We write clean, scalable code from scratch using React, Node.js, and MongoDB.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Basic websites in 7-10 days, complex projects in 15-20 days. We respect deadlines and deliver quality.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">After-Sales Support</h3>
              <p className="text-gray-600">30 days free support on all projects. Ongoing maintenance packages available at affordable rates.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and project estimate
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/9779707382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">💬</span>
              WhatsApp Now
            </a>
            
            <a
              href="tel:+9779707382481"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +9779707382481
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7-10</div>
              <div className="text-blue-200">Days Avg. Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
