import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Search, TrendingUp, Users, Target, BarChart, 
  MessageCircle, Video, Mail, ShoppingBag, Globe,
  CheckCircle, ArrowRight, Shield, Zap, PieChart,
  Hash, Camera, PenTool, DollarSign, Megaphone,
  Monitor, Smartphone, Cloud, Headphones, RefreshCw, Award, Rocket, Phone
} from 'lucide-react';
import { 
  FaFacebook, FaInstagram, FaGoogle, FaYoutube, 
  FaLinkedin, FaTwitter, FaPinterest, FaTiktok 
} from 'react-icons/fa';
import { getPrimaryPhone } from '../selectors';
import { getNepalWhatsAppUrl, getTelHref } from '../services';
import { WhatsAppIcon } from '../components/ui';

const DigitalMarketing: React.FC = () => {
  // Main Services
  const mainServices = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Services",
      description: "Search Engine Optimization to improve your website's visibility and organic traffic",
      features: [
        "On-Page SEO Optimization",
        "Off-Page SEO & Link Building",
        "Technical SEO Audit",
        "Keyword Research & Analysis",
        "Local SEO Optimization",
        "Monthly Performance Reports"
      ],
      deliverables: [
        "4 Detailed Reports Monthly",
        "4 SEO Optimized Blogs",
        "5-10 Keywords Optimization",
        "Competitor Analysis",
        "Traffic Analysis",
        "Ranking Improvement"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Complete social media strategy and management across all major platforms",
      features: [
        "Content Strategy & Planning",
        "Social Media Calendar",
        "Content Creation & Design",
        "Community Management",
        "Performance Analytics",
        "Brand Monitoring"
      ],
      deliverables: [
        "Daily Posts & Engagement",
        "Weekly Content Calendar",
        "Monthly Strategy Reports",
        "Audience Growth Management",
        "Viral Content Creation",
        "Hashtag Research"
      ]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Meta Ads Management",
      description: "Professional Facebook & Instagram advertising campaigns for maximum ROI",
      features: [
        "Campaign Strategy & Planning",
        "Audience Targeting & Segmentation",
        "Ad Creative Design",
        "Budget Optimization",
        "A/B Testing",
        "Conversion Tracking"
      ],
      deliverables: [
        "Ad Account Setup",
        "Daily Campaign Monitoring",
        "Weekly Performance Reports",
        "Audience Analysis",
        "Creative Testing",
        "ROI Optimization"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Google My Business",
      description: "Complete Google Business Profile setup and optimization for local SEO",
      features: [
        "Profile Creation & Verification",
        "Local SEO Optimization",
        "Review Management",
        "Google Maps Ranking",
        "Photo & Video Optimization",
        "Post Management"
      ],
      deliverables: [
        "Profile Setup",
        "Weekly Google Posts",
        "Review Response Management",
        "Local Keywords Optimization",
        "Photo Gallery Setup",
        "Performance Tracking"
      ]
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Lead Generation",
      description: "Targeted campaigns to generate quality business leads and conversions",
      features: [
        "Lead Generation Strategy",
        "Target Audience Identification",
        "Landing Page Optimization",
        "Lead Qualification System",
        "Follow-up Automation",
        "CRM Integration"
      ],
      deliverables: [
        "Targeted Campaign Setup",
        "Lead Database Management",
        "Monthly Lead Reports",
        "Conversion Tracking",
        "Lead Nurturing System",
        "Performance Analytics"
      ]
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing",
      description: "Strategic email campaigns for customer engagement and retention",
      features: [
        "Email Campaign Strategy",
        "List Segmentation",
        "Template Design",
        "Automation Workflows",
        "A/B Testing",
        "Performance Analytics"
      ],
      deliverables: [
        "Weekly Email Campaigns",
        "Newsletter Design",
        "Automation Setup",
        "Open & Click Rate Reports",
        "List Growth Management",
        "Conversion Tracking"
      ]
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Video Marketing",
      description: "Professional video production and marketing strategies",
      points: [
        "Promotional Videos",
        "Social Media Reels",
        "YouTube SEO",
        "Video Ads Creation",
        "Live Streaming"
      ]
    },
    {
      icon: <PenTool className="h-8 w-8 text-purple-600" />,
      title: "Content Marketing",
      description: "Strategic content creation for brand authority and engagement",
      points: [
        "Blog Writing & SEO",
        "Case Studies",
        "Whitepapers",
        "Infographics",
        "Content Strategy"
      ]
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
      title: "E-commerce Marketing",
      description: "Complete marketing solutions for online stores",
      points: [
        "Product Listing Optimization",
        "Shopping Ads",
        "Amazon/Facebook Shops",
        "Cart Abandonment",
        "Customer Retention"
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-600" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights and performance tracking",
      points: [
        "Google Analytics Setup",
        "Custom Dashboards",
        "Performance Reports",
        "ROI Analysis",
        "Strategy Optimization"
      ]
    }
  ];

  // Why Choose Us
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Result-Driven Approach",
      description: "Focus on measurable outcomes and ROI"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Quick Implementation",
      description: "Start seeing results within first month"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Data-Backed Strategies",
      description: "Decisions based on analytics and insights"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-purple-600" />,
      title: "Continuous Optimization",
      description: "Regular updates and strategy improvements"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Dedicated Account Manager",
      description: "Single point of contact for all communications"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Proven Success",
      description: "100+ successful campaigns delivered"
    }
  ];

  // Platforms We Work With
  const platforms = [
    { name: "Facebook", icon: <FaFacebook className="w-6 h-6 mx-auto text-blue-600" />, color: "bg-blue-100" },
    { name: "Instagram", icon: <FaInstagram className="w-6 h-6 mx-auto text-pink-600" />, color: "bg-pink-100" },
    { name: "Google", icon: <FaGoogle className="w-6 h-6 mx-auto text-blue-600" />, color: "bg-blue-100" },
    { name: "YouTube", icon: <FaYoutube className="w-6 h-6 mx-auto text-red-600" />, color: "bg-red-100" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-6 h-6 mx-auto text-blue-700" />, color: "bg-blue-100" },
    { name: "Twitter", icon: <FaTwitter className="w-6 h-6 mx-auto text-sky-500" />, color: "bg-blue-100" },
    { name: "Pinterest", icon: <FaPinterest className="w-6 h-6 mx-auto text-red-600" />, color: "bg-red-100" },
    { name: "TikTok", icon: <FaTiktok className="w-6 h-6 mx-auto text-gray-900" />, color: "bg-gray-100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Helmet>
        <title>Digital Marketing Services | Growth Service</title>
        <meta 
          name="description" 
          content="Complete digital marketing solutions including SEO, Social Media Management, Meta Ads, Google My Business, Lead Generation, and Email Marketing." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-pink-700 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital <span className="text-pink-300">Marketing</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Comprehensive strategies to grow your business online and drive measurable results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <WhatsAppIcon className="h-5 w-5 text-white" />
                <span>Get Free Strategy Session</span>
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white to-purple-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Deliverables:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <div className="w-1 h-1 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={getNepalWhatsAppUrl(`Hello! I'm interested in ${service.title} services. Please provide details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm"
                >
                  Get Custom Strategy for {service.title}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your digital marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Manage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work across all major digital platforms to maximize your reach
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className={`${platform.color} p-4 rounded-xl text-center transition-all duration-300 hover:scale-105`}
              >
                <div className="mb-2 flex justify-center">{platform.icon}</div>
                <div className="font-medium text-sm text-gray-800">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Benefits that set us apart and ensure your marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-3">{benefit.icon}</div>
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure campaign success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "Understanding your business, goals, and target audience",
                icon: <Target className="w-8 h-8 mx-auto text-purple-600" />
              },
              {
                step: "02",
                title: "Implementation",
                description: "Setting up campaigns, content creation, and platform optimization",
                icon: <Zap className="w-8 h-8 mx-auto text-purple-600" />
              },
              {
                step: "03",
                title: "Monitoring & Analysis",
                description: "Tracking performance, analyzing data, and making adjustments",
                icon: <BarChart className="w-8 h-8 mx-auto text-purple-600" />
              },
              {
                step: "04",
                title: "Optimization & Growth",
                description: "Continuous improvement and scaling successful strategies",
                icon: <Rocket className="w-8 h-8 mx-auto text-purple-600" />
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6 text-center"
              >
                <div className="mb-3 flex justify-center">{step.icon}</div>
                <div className="text-purple-600 font-bold text-lg mb-1">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your marketing goals and create a customized strategy for success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get Free Marketing Audit</span>
            </a>
            
            <a
              href={getTelHref(getPrimaryPhone())}
              className="bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {getPrimaryPhone()}</span>
            </a>
          </div>
          
          <p className="mt-6 text-purple-200 text-sm">
            SEO • Social Media • Paid Ads • Email Marketing • Lead Generation
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
