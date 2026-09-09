import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Globe, Code, Smartphone, Search, MapPin, MessageSquare, TrendingUp, Shield, Clock, Users, Award, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { Container, Section, WhatsAppIcon } from '../components/ui';
import { getNepalWhatsAppUrl } from '../services';

const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'seo' | 'smm' | 'gmb' | 'business'>('web');

  const webDevelopmentPackages = [
    {
      id: 1,
      name: "Custom Business Website",
      description: "Professional responsive website tailored for corporate branding and lead acquisition",
      deliveryTime: "7-10 Days",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      features: [
        "Custom Home Page Architecture",
        "About Us Company Narrative",
        "Services & Offerings Grid",
        "Lead Capture & Contact System",
        "WhatsApp Live Integration",
        "Mobile-First Responsive Layout",
        "SEO-Optimized Structure",
        "Basic Performance & Speed Tuning"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      name: "Tour & Travel Platform",
      description: "Comprehensive travel booking platform with dynamic tour itineraries and inquiry workflows",
      deliveryTime: "10-15 Days",
      icon: <MapPin className="h-8 w-8 text-emerald-600" />,
      features: [
        "Dynamic Tour Itinerary Showcase",
        "Upcoming Departure Modules",
        "Tour Detail & Pricing Architecture",
        "Interactive Booking Inquiry Engine",
        "Payment Gateway Integration Ready",
        "Administrative Management Portal",
        "Media Gallery & Photo Showcase",
        "Verified Client Reviews & Testimonials"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Hospitality & Guest House Portal",
      description: "Dedicated portal for hotels and guest houses with room showcase and reservation inquiries",
      deliveryTime: "12-18 Days",
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      features: [
        "Engaging Hero & Room Showcase",
        "Detailed Accommodation Listings",
        "Direct Reservation System",
        "Secure Payment Integration",
        "Administrative Control Dashboard",
        "Guest Feedback & Ratings System",
        "Amenities & Facility Breakdown",
        "Location Directions & Map Integration"
      ],
      technologies: ["MERN Stack", "Payment Gateway / Stripe", "JWT Auth"],
      color: "from-purple-600 to-pink-600"
    }
  ];

  const seoPackage = {
    name: "Professional SEO Retainer",
    description: "Holistic search engine optimization program engineered for organic domain dominance",
    duration: "3-6 Months Retainer",
    icon: <Search className="h-8 w-8 text-amber-600" />,
    features: [
      "Monthly 4 In-Depth Performance Reports",
      "4 Structured SEO Content Articles",
      "High-Intent Keyword Cluster Optimization",
      "Technical On-Page Code & Meta Optimization",
      "Off-Page Link Acquisition Strategy",
      "Comprehensive Technical Site Health Audit",
      "Competitor Keyword & Backlink Analysis",
      "Long-Term Organic Traffic Roadmap"
    ],
    deliverables: [
      "Target Keyword Analysis Dossier",
      "Complete Technical SEO Health Audit",
      "Monthly Ranking & Organic Impression Audit",
      "Backlink Profile & Toxic Link Audit",
      "Quarterly Content Strategy Specification"
    ],
    color: "from-amber-500 to-orange-600"
  };

  const gmbPackage = {
    name: "Google Business Profile Dominance",
    description: "Local search presence optimization to capture nearby customer searches and inquiries",
    duration: "Ongoing Local Visibility",
    icon: <MapPin className="h-8 w-8 text-blue-600" />,
    features: [
      "Complete GMB Profile Setup & Verification",
      "Weekly 4-5 Geotagged Visual Updates",
      "Reputation & Review Response System",
      "Local Map 3-Pack SEO Optimization",
      "Rich Photo & Video Content Integration",
      "Real-Time Call & Direction Insights Tracking",
      "Active Q&A Monitoring & Engagement",
      "Local Citation & Directory Synchronization"
    ],
    benefits: [
      "Increase Local High-Intent Search Visibility",
      "Drive Direct Phone Calls & Directions",
      "Strengthen Credibility with Verified Reviews",
      "Boost Foot Traffic & Store Visits",
      "Gain Actionable Local Search Intelligence"
    ],
    color: "from-blue-600 to-indigo-700"
  };

  const smmPackage = {
    name: "Social Media Growth Retainer",
    description: "Multi-channel creative content production and audience community management",
    duration: "Monthly Engagement",
    icon: <MessageSquare className="h-8 w-8 text-pink-600" />,
    features: [
      "Comprehensive Monthly Content Calendar",
      "Creative Graphic & Reel Asset Creation",
      "Active Comment & DM Community Engagement",
      "Brand Narrative & Consistency Strategy",
      "High-Engagement Visual Post Design",
      "Trend & Industry Hashtag Research",
      "Monthly Audience Growth Analytics"
    ],
    platforms: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
    color: "from-pink-600 to-rose-600"
  };

  const metaAdsPackage = {
    name: "Meta Ads Performance Campaign",
    description: "Targeted Facebook & Instagram paid campaigns designed for maximum return on ad spend",
    duration: "Campaign-Based / Monthly",
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    features: [
      "Conversion Pixel & Event Tracking Setup",
      "Demographic & Lookalike Audience Building",
      "High-Converting Creative Ad Copy & Design",
      "Systematic Multi-Variant A/B Testing",
      "Lead Quality Scoring & CRM Synchronization",
      "ROAS Optimization & Budget Pacing",
      "Bi-Weekly Performance Reviews",
      "Dynamic Retargeting Funnel Setup"
    ],
    adTypes: ["Lead Generation", "Website Traffic", "Sales Conversions", "Brand Awareness"],
    color: "from-blue-600 to-purple-700"
  };

  const businessSetupPackage = {
    name: "Complete Business Digital Setup",
    description: "End-to-end digital foundation unifying identity, web architecture, and acquisition channels",
    duration: "45-60 Days Implementation",
    icon: <Award className="h-8 w-8 text-emerald-600" />,
    features: [
      "Custom 5-Page Responsive Business Portal",
      "Cohesive Social Media Profiles Architecture",
      "Digital Market Entry & Channel Strategy",
      "Assigned Senior Technical & Growth Consultant",
      "Brand Identity & Asset Guidelines",
      "Inbound Lead Generation Infrastructure",
      "CRM & Sales Workflow Consultation",
      "Post-Launch Support & Training"
    ],
    inclusions: [
      "Custom Web Development",
      "Social Media Setup",
      "Content Strategy Document",
      "Growth Roadmap",
      "Dedicated Consultant Support"
    ],
    color: "from-emerald-600 to-teal-700"
  };

  type ServiceTab = 'web' | 'seo' | 'smm' | 'gmb' | 'business';

  const allServices: { id: ServiceTab; name: string; icon: React.ReactNode }[] = [
    { id: 'web', name: 'Website Development', icon: <Code className="h-5 w-5" /> },
    { id: 'seo', name: 'SEO Services', icon: <Search className="h-5 w-5" /> },
    { id: 'gmb', name: 'GMB Optimization', icon: <MapPin className="h-5 w-5" /> },
    { id: 'smm', name: 'Social Media & Ads', icon: <MessageSquare className="h-5 w-5" /> },
    { id: 'business', name: 'Business Setup', icon: <Users className="h-5 w-5" /> }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Fast Turnaround",
      description: "Structured sprint milestones with predictable delivery schedules"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "100% Custom Architecture",
      description: "No fragile templates — robust code using React, Node.js, and TypeScript"
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-600" />,
      title: "Dedicated Agency Team",
      description: "Direct collaboration with senior engineers across Jaipur, Vrindavan, and Nepal"
    }
  ];

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `🚀 *Growth Service - Engagement Scope Inquiry*\n\n*Service:* ${serviceName}\n\nHi, I would like to discuss our project scope and request a consultation.`;
    window.open(getNepalWhatsAppUrl(message), '_blank');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'web':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopmentPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                      <div className="text-xs text-purple-600 font-semibold flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" /> {pkg.deliveryTime}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{pkg.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Included Capabilities:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-0 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <button 
                      onClick={() => handleWhatsAppClick(pkg.name)}
                      className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:opacity-95 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Inquire
                    </button>
                    <Link
                      to="/book-call"
                      className="border border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600 py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:bg-purple-50 flex items-center justify-center"
                    >
                      Discuss Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'seo':
        return (
          <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-center">
                    {seoPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{seoPackage.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{seoPackage.description}</p>
                    <span className="inline-block mt-2 bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold">
                      {seoPackage.duration}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">Strategy Inclusions:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {seoPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Formal Deliverables:</h4>
                  <ul className="space-y-3">
                    {seoPackage.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => handleWhatsAppClick(seoPackage.name)}
                    className="flex-1 bg-[#25D366] hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Discuss on WhatsApp
                  </button>
                  <Link
                    to="/book-call"
                    className="flex-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    Book SEO Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );

      case 'gmb':
        return (
          <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl border border-blue-200 flex items-center justify-center">
                    {gmbPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{gmbPackage.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{gmbPackage.description}</p>
                    <span className="inline-block mt-2 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
                      {gmbPackage.duration}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">Optimization Protocol:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gmbPackage.features.map((feature, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-6 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Business Outcomes:</h4>
                  <ul className="space-y-3">
                    {gmbPackage.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => handleWhatsAppClick(gmbPackage.name)}
                    className="flex-1 bg-[#25D366] hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Inquire on WhatsApp
                  </button>
                  <Link
                    to="/book-call"
                    className="flex-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    Consult With Strategist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );

      case 'smm':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SMM Card */}
            <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-pink-50 rounded-2xl border border-pink-200 flex items-center justify-center">
                    {smmPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{smmPackage.name}</h3>
                    <p className="text-xs text-slate-600 mt-1">{smmPackage.description}</p>
                    <span className="inline-block mt-2 bg-pink-50 text-pink-700 border border-pink-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {smmPackage.duration}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Scope Inclusions:</h4>
                <ul className="space-y-2 mb-6">
                  {smmPackage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">Supported Platforms:</h4>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {smmPackage.platforms.map((p, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleWhatsAppClick(smmPackage.name)}
                  className="bg-[#25D366] hover:bg-emerald-600 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </button>
                <Link
                  to="/book-call"
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="h-4 w-4" />
                  Consultation
                </Link>
              </div>
            </div>

            {/* Meta Ads Card */}
            <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl border border-purple-200 flex items-center justify-center">
                    {metaAdsPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{metaAdsPackage.name}</h3>
                    <p className="text-xs text-slate-600 mt-1">{metaAdsPackage.description}</p>
                    <span className="inline-block mt-2 bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {metaAdsPackage.duration}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Campaign Execution:</h4>
                <ul className="space-y-2 mb-6">
                  {metaAdsPackage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">Campaign Types:</h4>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {metaAdsPackage.adTypes.map((type, idx) => (
                    <span key={idx} className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded text-xs font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleWhatsAppClick(metaAdsPackage.name)}
                  className="bg-[#25D366] hover:bg-emerald-600 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </button>
                <Link
                  to="/book-call"
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="h-4 w-4" />
                  Consultation
                </Link>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-center">
                    {businessSetupPackage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{businessSetupPackage.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{businessSetupPackage.description}</p>
                    <span className="inline-block mt-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
                      {businessSetupPackage.duration}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">Scope Deliverables:</h4>
                <div className="space-y-2.5">
                  {businessSetupPackage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100 p-6 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Complete Inclusions:</h4>
                  <ul className="space-y-2.5">
                    {businessSetupPackage.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => handleWhatsAppClick(businessSetupPackage.name)}
                    className="flex-1 bg-[#25D366] hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Inquire on WhatsApp
                  </button>
                  <Link
                    to="/book-call"
                    className="flex-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    Discuss Business Setup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Engagement Models & Solutions | Growth Service</title>
        <meta
          name="description"
          content="Explore structured engagement models and service solutions across web development, SEO, social media, and digital marketing tailored to your business needs."
        />
        <meta 
          name="keywords" 
          content="digital marketing solutions, custom web development scope, SEO retainers, social media management, Growth Service India Nepal"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/15">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-semibold tracking-wide text-yellow-300 uppercase">
              Transparent Frameworks & Custom Scope
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Service Solutions & <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Engagement Models
            </span>
          </h1>
          <p className="text-base md:text-xl mb-10 max-w-3xl mx-auto text-slate-200 leading-relaxed">
            We provide structured engagement models engineered for real business growth. Review our capability architectures and connect with our team to formulate a personalized scope.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-left">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                  {b.icon}
                </div>
                <h4 className="font-bold text-white text-base mb-1">{b.title}</h4>
                <p className="text-xs text-purple-200 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Navigation Tabs */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <Container>
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {allServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === service.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {service.icon}
                {service.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Content Area */}
      <Section className="py-16">
        <Container>
          {renderContent()}
        </Container>
      </Section>

      {/* Consultation CTA Banner */}
      <Section className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Engagement Model?
          </h2>
          <p className="text-base md:text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Our team works with founders and marketing heads to design multi-quarter roadmaps, dedicated development teams, and performance marketing programs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-call"
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Schedule a Project Discussion
            </Link>
            
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Direct WhatsApp Inquiry
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Packages;
