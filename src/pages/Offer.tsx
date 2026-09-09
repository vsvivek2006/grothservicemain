import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container, Section } from "../components/ui";
import { 
  Check, 
  MessageCircle, 
  Phone, 
  X, 
  Search,
  ShoppingCart,
  MapPin,
  Megaphone,
  Laptop,
  Briefcase,
  Sparkles,
  Calendar,
  Building
} from "lucide-react";

const Offer: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "Jaipur",
    message: ""
  });

  const WHATSAPP_NUMBER = "9779707382481"; // Nepal Office

  // Consultation Domains & Capabilities
  const services = [
    {
      id: "consultation",
      title: "Strategic Growth Consultation",
      icon: <Briefcase className="h-6 w-6" />,
      features: [
        "30-Minute Direct Strategy Session",
        "Competitor Market Positioning Analysis",
        "Target Audience Demographics Breakdown",
        "High-ROI Channel Recommendations",
        "Quarterly Growth Milestone Roadmap",
        "Direct Senior Consultant Access"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-purple-600 to-indigo-700"
    },
    {
      id: "seo",
      title: "Comprehensive SEO & Search Audit",
      icon: <Search className="h-6 w-6" />,
      features: [
        "Complete Technical SEO Health Audit",
        "Indexation & Core Web Vitals Analysis",
        "High-Intent Keyword Gap Discovery",
        "Google Business Profile Visibility Review",
        "Backlink Profile & Authority Inspection",
        "Actionable Priority Fixes Checklist"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "web",
      title: "Website Architecture & UX Audit",
      icon: <Laptop className="h-6 w-6" />,
      features: [
        "Mobile Responsiveness & Speed Review",
        "Conversion Funnel & Friction Analysis",
        "UI/UX Visual Hierarchy Evaluation",
        "Lead Capture & CTA Placement Review",
        "Code Maintainability & Security Check",
        "Recommended Technology Upgrades"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: "smm",
      title: "Social Brand & Media Audit",
      icon: <Megaphone className="h-6 w-6" />,
      features: [
        "Multi-Channel Profile Consistency Review",
        "Engagement Rate & Audience Analysis",
        "Content Pillar & Calendar Assessment",
        "Creative Design & Copy Benchmarking",
        "Competitor Social Strategy Intelligence",
        "Platform Optimization Action Plan"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: "ecommerce",
      title: "E-commerce & Conversion Audit",
      icon: <ShoppingCart className="h-6 w-6" />,
      features: [
        "Checkout Flow & Abandonment Analysis",
        "Product Catalog & Imagery Review",
        "Marketplace Presence (Amazon, Flipkart)",
        "Payment Gateway Reliability Assessment",
        "Customer Retention & Repeat Order Strategy",
        "Conversion Rate Optimization (CRO) Blueprint"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: "gmb",
      title: "Local Google Business Audit",
      icon: <MapPin className="h-6 w-6" />,
      features: [
        "Google 3-Pack Proximity & Ranking Check",
        "Review Velocity & Sentiment Analysis",
        "Local Citation & NAP Consistency Audit",
        "Category & Attribute Optimization Review",
        "Geotagged Content & Photo Asset Health",
        "Local Lead Capture Readiness Check"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  // 3 Factual Physical Office Locations
  const offices = [
    {
      name: "Jaipur Office (Rajasthan)",
      address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 62073 00553",
      flag: "🇮🇳",
      city: "Jaipur"
    },
    {
      name: "Vrindavan Office (Uttar Pradesh)",
      address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, UP 281121",
      phone: "+91 93414 36937",
      flag: "🇮🇳",
      city: "Vrindavan"
    },
    {
      name: "Nepal Office (Siraha)",
      address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal",
      phone: "+977 970-7382481",
      flag: "🇳🇵",
      city: "Nepal"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedOffice = offices.find(o => o.city === formData.location) || offices[0];
    
    const whatsappMessage = `🎯 *Growth Service - Strategy & Audit Session Request*

📋 *Client Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Office: ${formData.location} ${selectedOffice.flag}

💼 *Focus Area:* ${formData.service || 'General Digital Growth'}

📝 *Current Business / Website:*
${formData.message || 'No additional details provided'}

📍 *Assigned Office:* ${selectedOffice.name}
📞 *Office Phone:* ${selectedOffice.phone}

Hi, I would like to schedule a strategy consultation and digital audit. Please let me know the available time slots.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", location: "Jaipur", message: "" });
  };

  const openQuickForm = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, service: serviceTitle }));
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Free Digital Growth Strategy & Audit | Growth Service</title>
        <meta 
          name="description" 
          content="Request a complimentary 30-minute growth strategy consultation and technical digital audit with senior specialists across Jaipur, Vrindavan, and Nepal." 
        />
        <meta 
          name="keywords" 
          content="free digital audit, website audit Jaipur, SEO consultation Vrindavan, social media audit Nepal, growth strategy session"
        />
        <link rel="canonical" href="https://growthservice.in/offer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <Container className="relative text-center z-10">
          {/* Physical Office Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-purple-200 border border-white/15"
              >
                <span>{office.flag}</span>
                <span>{office.city} Office</span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/15 text-yellow-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            Complimentary 30-Minute Growth Strategy & Audit
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Accelerate Your Digital Presence With a <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Dedicated Strategy Consultation
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Gain complete clarity on your digital acquisition channels. Our senior growth consultants analyze your website architecture, SEO visibility, and advertising funnels to identify actionable opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 justify-center"
            >
              <Calendar className="h-5 w-5" />
              Request Strategy Session
            </button>
            <Link
              to="/offices"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold transition-all backdrop-blur-sm border border-white/20 flex items-center gap-2 justify-center"
            >
              <Building className="h-5 w-5" />
              Our Office Locations
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Strategic Review Areas
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Select a strategic focus area below to request an in-depth review with our specialists. Available across our Jaipur, Vrindavan, and Nepal offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200/80 overflow-hidden flex flex-col justify-between"
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-5 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/15 rounded-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Audit Scope:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.locations.map((loc) => (
                        <span key={loc} className="bg-purple-50 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          📍 {loc}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openQuickForm(service.title)}
                      className={`w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r ${service.gradient} text-white shadow-sm hover:opacity-95 transition-all flex items-center justify-center gap-2`}
                    >
                      <Calendar className="h-4 w-4" />
                      Request This Audit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Office Locations Section */}
      <Section className="bg-white border-t border-slate-200">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Connect With Our Physical Offices
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Visit us in person or schedule a video conference with our branch leadership teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{office.flag}</span>
                    <h3 className="font-bold text-slate-900 text-lg">{office.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {office.address}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-purple-600 font-semibold text-xs flex items-center gap-1 hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" /> {office.phone}
                  </a>
                  <Link
                    to={`/offices/${office.city.toLowerCase()}`}
                    className="text-slate-600 font-medium text-xs hover:text-purple-600"
                  >
                    Office Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Consultation Modal */}
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
                Consultation Request
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Book Your Strategy Session
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Selected Focus: <span className="font-semibold text-purple-700">{selectedService || "General Digital Growth"}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Office *</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-white"
                >
                  <option value="Jaipur">🇮🇳 Jaipur Office (Rajasthan)</option>
                  <option value="Vrindavan">🇮🇳 Vrindavan Office (UP)</option>
                  <option value="Nepal">🇳🇵 Nepal Office (Siraha)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Website URL or Current Challenges</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your current website link or key growth questions..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="h-5 w-5" />
                Confirm Consultation via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;