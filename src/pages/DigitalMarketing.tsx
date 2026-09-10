import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Search, TrendingUp, Users, Target, BarChart, 
  MessageCircle, Video, Mail, ShoppingBag, Globe,
  CheckCircle, ArrowRight, Zap,
  PenTool, Award, Rocket, Phone
} from 'lucide-react';
import { 
  FaFacebook, FaInstagram, FaGoogle, FaYoutube, 
  FaLinkedin, FaTwitter, FaPinterest, FaTiktok 
} from 'react-icons/fa';
import { getPrimaryPhone, getCanonicalOrigin } from '../selectors';
import { getNepalWhatsAppUrl, getTelHref } from '../services';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DigitalMarketing: React.FC = () => {
  // Main Services
  const mainServices = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
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
      icon: <Users className="h-8 w-8 text-blue-600" />,
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
      icon: <Target className="h-8 w-8 text-blue-600" />,
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
      icon: <Globe className="h-8 w-8 text-blue-600" />,
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
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
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
      icon: <Mail className="h-8 w-8 text-blue-600" />,
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
      icon: <BarChart className="h-8 w-8 text-purple-600" />,
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
    { name: "Facebook", icon: <FaFacebook className="w-6 h-6 mx-auto text-blue-600" />, color: "bg-blue-50/70 border-blue-100" },
    { name: "Instagram", icon: <FaInstagram className="w-6 h-6 mx-auto text-pink-600" />, color: "bg-pink-50/70 border-pink-100" },
    { name: "Google", icon: <FaGoogle className="w-6 h-6 mx-auto text-blue-600" />, color: "bg-blue-50/70 border-blue-100" },
    { name: "YouTube", icon: <FaYoutube className="w-6 h-6 mx-auto text-red-600" />, color: "bg-red-50/70 border-red-100" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-6 h-6 mx-auto text-blue-700" />, color: "bg-blue-50/70 border-blue-100" },
    { name: "Twitter", icon: <FaTwitter className="w-6 h-6 mx-auto text-sky-500" />, color: "bg-sky-50/70 border-sky-100" },
    { name: "Pinterest", icon: <FaPinterest className="w-6 h-6 mx-auto text-red-600" />, color: "bg-red-50/70 border-red-100" },
    { name: "TikTok", icon: <FaTiktok className="w-6 h-6 mx-auto text-gray-900" />, color: "bg-gray-100/70 border-gray-200" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Digital Marketing Services | Growth Service</title>
        <meta 
          name="description" 
          content="Complete digital marketing solutions including SEO, Social Media Management, Meta Ads, Google My Business, Lead Generation, and Email Marketing." 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/digital-marketing`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24 overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital <span className="text-yellow-300">Marketing</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive strategies to grow your business online and drive measurable results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as="a"
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="bg-[#25D366] hover:bg-emerald-600 text-white border-0 shadow-lg inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Get Free Strategy Session</span>
              </Button>
              <Button
                href="#services"
                variant="outline-white"
                size="lg"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Services Section */}
      <Section id="services" variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Digital Marketing Services"
            subtitle="End-to-end digital marketing solutions tailored to your business goals"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index}
                variant="interactive"
                className="p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-xs uppercase tracking-wider">Features:</h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-xs uppercase tracking-wider">Deliverables:</h4>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={getNepalWhatsAppUrl(`Hello! I'm interested in ${service.title} services. Please provide details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group"
                  >
                    <span>Get Custom Strategy for {service.title}</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Additional Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Additional Marketing Services"
            subtitle="Specialized services to complement your digital marketing strategy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card 
                key={index}
                variant="default"
                className="p-6"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-purple-500 mr-2 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Platforms Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Platforms We Manage"
            subtitle="We work across all major digital platforms to maximize your reach"
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {platforms.map((platform, index) => (
              <Card 
                key={index}
                variant="interactive"
                className={`${platform.color} p-4 rounded-xl text-center border`}
              >
                <div className="mb-2 flex justify-center">{platform.icon}</div>
                <div className="font-medium text-sm text-gray-800">{platform.name}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Why Choose Our Digital Marketing Services"
            subtitle="Benefits that set us apart and ensure your marketing success"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                variant="default"
                className="p-6"
              >
                <div className="mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Marketing Process"
            subtitle="A systematic approach to ensure campaign success"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card 
                key={index}
                variant="default"
                className="p-6 text-center bg-purple-50/40 border-purple-100"
              >
                <div className="mb-3 flex justify-center">{step.icon}</div>
                <div className="text-purple-600 font-bold text-lg mb-1">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your marketing goals and create a customized strategy for success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as="a"
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="bg-[#25D366] hover:bg-emerald-600 text-white border-0 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Get Free Marketing Audit</span>
              </Button>
              
              <Button
                as="a"
                href={getTelHref(getPrimaryPhone())}
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-gray-100 text-purple-900 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {getPrimaryPhone()}</span>
              </Button>
            </div>
            
            <p className="mt-8 text-purple-200 text-sm font-medium">
              SEO • Social Media • Paid Ads • Email Marketing • Lead Generation
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DigitalMarketing;
