import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Check, 
  MessageCircle, 
  X, 
  Search, 
  Globe, 
  Award, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  Link as LinkIcon
} from "lucide-react";
import { Container, Section } from "../components/ui";

interface GrowthServiceItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  category: string;
  deliveryTime: string;
}

const GrowthServices: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<GrowthServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("backlinks");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    website: "",
    message: ""
  });

  const WHATSAPP_NUMBER = "9779707382481"; // Nepal Office

  // Specialized Backlink & Outreach Capabilities
  const backlinkServices: GrowthServiceItem[] = [
    {
      id: "contextual-backlinks",
      name: "Contextual Authority Backlink Outreach",
      description: "High-authority editorial backlinks embedded in contextually relevant niche content",
      features: [
        "High DA/PA Domains (DA 30-50+)",
        "100% Dofollow Editorial Placements",
        "Natural Branded Anchor Text Distribution",
        "Manual Editorial Blogger Outreach",
        "Transparent Indexation & Placement Reports"
      ],
      icon: <LinkIcon className="h-6 w-6 text-blue-600" />,
      category: "backlinks",
      deliveryTime: "7-14 Days"
    },
    {
      id: "editorial-backlinks",
      name: "High DA 50+ Enterprise Placements",
      description: "Premium editorial mentions and guest articles on established industry publications",
      features: [
        "Tier-1 Authority Domains (DA 50+ / DR 60+)",
        "Contextual In-Content Editorial Links",
        "Guaranteed Search Engine Indexing",
        "Competitor Backlink Profile Gap Targeting",
        "Dedicated SEO Account Strategist"
      ],
      icon: <Award className="h-6 w-6 text-purple-600" />,
      category: "backlinks",
      deliveryTime: "10-20 Days"
    }
  ];

  // Local & Google Business Dominance
  const gmbServices: GrowthServiceItem[] = [
    {
      id: "gmb-optimization",
      name: "Google Business Profile Optimization",
      description: "Complete local profile audit, setup, verification, and 3-pack search ranking strategy",
      features: [
        "Profile Verification & Category Optimization",
        "Geotagged Photo & Media Architecture",
        "Local Map 3-Pack Proximity Tuning",
        "Active Q&A Management & FAQs",
        "Local Citation & NAP Synchronization",
        "Real-Time Insights & Call Tracking"
      ],
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      category: "gmb",
      deliveryTime: "5-10 Days"
    },
    {
      id: "gmb-posts",
      name: "Ongoing Local GMB Management",
      description: "Consistent weekly updates, offer showcases, and reputation monitoring",
      features: [
        "Weekly High-Quality Local Posts",
        "Professional Graphic Content Production",
        "Strategic Call-to-Action Buttons",
        "Customer Review Response Protocol",
        "Seasonal Event Announcements",
        "Monthly Discovery Insights Report"
      ],
      icon: <TrendingUp className="h-6 w-6 text-teal-600" />,
      category: "gmb",
      deliveryTime: "Monthly Retainer"
    }
  ];

  // Specialized SEO Audits
  const seoServices: GrowthServiceItem[] = [
    {
      id: "seo-audit",
      name: "Comprehensive Technical SEO Audit",
      description: "Full crawl inspection identifying indexation bottlenecks, toxic links, and UX friction",
      features: [
        "Technical Crawl & Server Response Analysis",
        "Core Web Vitals & Page Experience Review",
        "Competitor Search Footprint Analysis",
        "High-Intent Keyword Gap Discovery",
        "Actionable Priority Fixes Roadmap"
      ],
      icon: <Search className="h-6 w-6 text-amber-600" />,
      category: "seo",
      deliveryTime: "3-5 Days"
    },
    {
      id: "local-seo",
      name: "Local Search & Citation Strategy",
      description: "Multi-directory authority building for multi-location or regional enterprises",
      features: [
        "High-Authority Local Directory Inclusions",
        "Google Maps & Proximity Alignment",
        "Consistent Name-Address-Phone (NAP) Footprint",
        "Regional Geo-Targeted Content Pages",
        "Local Competitor Benchmarking"
      ],
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      category: "seo",
      deliveryTime: "15-30 Days"
    }
  ];

  const categories = [
    { id: "backlinks", name: "Authority Backlinks", icon: <LinkIcon className="h-4 w-4" /> },
    { id: "gmb", name: "Google Business", icon: <Globe className="h-4 w-4" /> },
    { id: "seo", name: "SEO & Audits", icon: <Search className="h-4 w-4" /> }
  ];

  const getCurrentServices = () => {
    switch(activeCategory) {
      case "backlinks": return backlinkServices;
      case "gmb": return gmbServices;
      case "seo": return seoServices;
      default: return backlinkServices;
    }
  };

  const handleInquiry = (service: GrowthServiceItem) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service: service.name }));
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🚀 *Growth Service - Growth Solutions Inquiry*

📋 *Client Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website || 'Not provided'}

💼 *Service:* ${formData.service}
📝 *Project Scope:*
${formData.message || 'I would like to discuss our requirements and scope a custom engagement.'}

Hi, I am reaching out to discuss this growth service. Please share details on scheduling a discovery call.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", website: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Specialized SEO & Organic Growth Solutions | Growth Service</title>
        <meta 
          name="description" 
          content="Accelerate organic traffic and local brand visibility with specialized authority backlink outreach, Google Business Profile optimization, and technical audits." 
        />
        <meta 
          name="keywords" 
          content="authority backlinks, Google Business Profile optimization, technical SEO audit, local SEO agency Jaipur Nepal"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <Container className="relative text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/15 text-yellow-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            Specialized Organic Search & Visibility Engineering
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            High-Impact SEO & <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Organic Growth Capabilities
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Gain sustainable search visibility with curated authority outreach, local map optimization, and comprehensive technical audits. Scoped transparently for your specific vertical.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-call"
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Schedule Strategy Discussion
            </Link>
            <a
              href="https://wa.me/9779707382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Direct WhatsApp Inquiry
            </a>
          </div>
        </Container>
      </section>

      {/* Domain Tabs */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <Container>
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {getCurrentServices().map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                      <div className="text-xs text-purple-600 font-semibold mt-0.5">
                        Cadence / Timeline: {service.deliveryTime}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">
                    Deliverable Inclusions:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleInquiry(service)}
                    className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:opacity-95 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Request Scope
                  </button>
                  <Link
                    to="/book-call"
                    className="border border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600 py-2.5 px-3 rounded-xl font-semibold text-xs transition-all hover:bg-purple-50 flex items-center justify-center"
                  >
                    Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Safety & Quality Assurance */}
      <Section className="bg-white border-t border-slate-200">
        <Container className="max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              White-Hat Standards & Methodology
            </h2>
            <p className="text-slate-600 text-sm">
              We adhere strictly to search engine webmaster guidelines and sustainable organic growth practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <ShieldCheck className="h-6 w-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">Manual Outreach</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero automated link farms or PBN networks. Real relationships with authoritative domain owners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <CheckCircle className="h-6 w-6 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">Transparent Reporting</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live dashboard updates and comprehensive Excel/PDF audit dossiers for all executed activities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <Sparkles className="h-6 w-6 text-purple-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">Dedicated Strategist</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct communication with certified SEO consultants across our Jaipur, Vrindavan, and Nepal offices.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inquiry Dialog */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl p-1"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full">
                Custom Scope Discussion
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Discuss Project Requirements
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Selected Domain: <span className="font-semibold text-purple-700">{selectedService?.name}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Verma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@brand.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Website URL</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Key Objectives or Questions</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your current domain authority, primary target keywords, or local area..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="h-5 w-5" />
                Submit Scope Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowthServices;
