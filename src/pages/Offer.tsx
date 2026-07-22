import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Check, 
  Star, 
  Rocket, 
  Clock, 
  Users, 
  MessageCircle, 
  Phone, 
  X, 
  Send, 
  CreditCard, 
  Shield,
  Search,
  Globe,
  ShoppingCart,
  ThumbsUp,
  Eye,
  Target,
  Sparkles,
  Gift,
  Award,
  Heart,
  Quote,
  ChevronDown,
  MapPin,
  Mail,
  Zap,
  Building,
  TrendingUp,
  BarChart,
  Megaphone,
  Laptop,
  Smartphone,
  Briefcase
} from "lucide-react";

const Offer: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [timeLeft, setTimeLeft] = useState(604800); // 7 days in seconds
  const [offerExpired, setOfferExpired] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const WHATSAPP_NUMBER = "9779707382481"; // Nepal Head Office
  const INDIA_PHONE = "919341436937";

  // Initialize timer from localStorage
  useEffect(() => {
    const savedTime = localStorage.getItem('growthServiceOfferTime');
    const savedExpired = localStorage.getItem('growthServiceOfferExpired');
    
    if (savedExpired === 'true') {
      setOfferExpired(true);
      return;
    }
    
    if (savedTime) {
      const remainingTime = parseInt(savedTime);
      setTimeLeft(remainingTime);
      if (remainingTime <= 0) {
        setOfferExpired(true);
        localStorage.setItem('growthServiceOfferExpired', 'true');
      }
    }
  }, []);

  // Main Timer Effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setOfferExpired(true);
      localStorage.setItem('growthServiceOfferExpired', 'true');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        localStorage.setItem('growthServiceOfferTime', newTime.toString());
        
        if (newTime <= 0) {
          setOfferExpired(true);
          localStorage.setItem('growthServiceOfferExpired', 'true');
          return 0;
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`;
    }
    return `${hours}h ${minutes}m ${secs}s`;
  };

  // Services Data with Office Locations
  const services = [
    {
      id: "seo",
      title: "SEO Services",
      icon: <Search className="h-6 w-6" />,
      price: "₹8,999",
      originalPrice: "₹14,999",
      discount: "40% OFF",
      features: [
        "Complete SEO Audit",
        "On-Page & Off-Page SEO",
        "50+ Keyword Research",
        "Google Business Optimization",
        "Monthly Ranking Reports",
        "Technical SEO Fixes"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: "smm",
      title: "Social Media Marketing",
      icon: <Megaphone className="h-6 w-6" />,
      price: "₹4,999",
      originalPrice: "₹9,999",
      discount: "50% OFF",
      features: [
        "3 Social Media Platforms",
        "15 Creative Posts/Month",
        "Content Strategy & Calendar",
        "Hashtag Research",
        "Engagement Management",
        "Monthly Analytics"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: "web",
      title: "Website Development",
      icon: <Laptop className="h-6 w-6" />,
      price: "₹12,000",
      originalPrice: "₹25,000",
      discount: "52% OFF",
      features: [
        "5 Page Responsive Website",
        "Mobile-First Design",
        "SEO Optimized Structure",
        "Contact/Lead Forms",
        "1 Year Free Hosting",
        "3 Months Free Support"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      icon: <ShoppingCart className="h-6 w-6" />,
      price: "₹5,999",
      originalPrice: "₹12,999",
      discount: "54% OFF",
      features: [
        "Platform Account Creation",
        "Amazon • Flipkart • Meesho",
        "Product Listing Support",
        "Catalog Management",
        "Sales Optimization",
        "Inventory Management"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "gmb",
      title: "Google Business Profile",
      icon: <MapPin className="h-6 w-6" />,
      price: "₹999",
      originalPrice: "₹2,999",
      discount: "67% OFF",
      features: [
        "Google Business Setup",
        "Google Map Listing",
        "Business WhatsApp Integration",
        "10 Free Product Listings",
        "YouTube Channel Creation",
        "Basic SEO Setup"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      id: "consultation",
      title: "Expert Consultation",
      icon: <Briefcase className="h-6 w-6" />,
      price: "₹1",
      originalPrice: "₹999",
      discount: "99% OFF",
      features: [
        "30-Minute Strategy Session",
        "Complete Digital Audit",
        "Custom Growth Plan",
        "Competitor Analysis",
        "ROI Optimization Tips",
        "Priority Support Access"
      ],
      locations: ["Jaipur", "Vrindavan", "Nepal"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  // Office Locations
  const offices = [
    {
      name: "Jaipur Office",
      address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 62073 00553",
      flag: "🇮🇳",
      city: "Jaipur"
    },
    {
      name: "Vrindavan Office",
      address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, UP 281121",
      phone: "+91 93414 36937",
      flag: "🇮🇳",
      city: "Vrindavan"
    },
    {
      name: "Nepal Office - Head Office",
      address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal",
      phone: "+977 970-7382481",
      flag: "🇳🇵",
      city: "Nepal",
      isHeadOffice: true
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
    
    const selectedOffice = offices.find(o => o.city === formData.location) || offices[2];
    
    const whatsappMessage = `🎯 Growth Service Special Offer Request 🎯

📋 Client Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location} ${selectedOffice.flag}

💼 Service Interested: ${formData.service}

📝 Requirements:
${formData.message || 'No additional information provided'}

📍 Contact Office: ${selectedOffice.name}
📞 Phone: ${selectedOffice.phone}

I would like to avail the special offer. Please contact me.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Send to Nepal Head Office WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", location: "", message: "" });
  };

  const openQuickForm = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, service: serviceTitle }));
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>Special Offers - Digital Marketing Services in Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Avail special offers on SEO, Social Media Marketing, Website Development & more. Expert consultation at ₹1. Offices in Jaipur, Vrindavan & Nepal." 
        />
        <meta 
          name="keywords" 
          content="digital marketing offers Jaipur, SEO special offer Vrindavan, website development Nepal, social media marketing deals, growth service offers"
        />
        <link rel="canonical" href="https://growthservice.in/offers" />
        
        <meta property="og:title" content="Special Offers - Digital Marketing Services | Growth Service" />
        <meta property="og:description" content="Avail special offers on SEO, Social Media Marketing, Website Development & more. Expert consultation at ₹1." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthservice.in/offers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* Office Locations Badge */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className={`bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm ${
                  office.isHeadOffice ? 'border-2 border-yellow-400' : ''
                }`}
              >
                <span>{office.flag}</span>
                <span>{office.city}</span>
                {office.isHeadOffice && (
                  <span className="bg-yellow-400 text-gray-900 text-[8px] px-1.5 py-0.5 rounded-full font-bold">HQ</span>
                )}
              </div>
            ))}
          </div>

          {/* Timer */}
          {!offerExpired && (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 max-w-md mx-auto mb-6 border border-white/30">
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-5 w-5 animate-pulse text-yellow-300" />
                <span className="text-sm font-semibold">Special Offer Ends In:</span>
                <span className="text-lg md:text-xl font-bold text-yellow-300 font-mono">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          )}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Special <span className="text-yellow-300">Digital Growth</span> Offers
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 text-purple-100 max-w-3xl mx-auto">
            Expert Consultation at <span className="text-yellow-300 font-bold">₹1</span> + 
            Up to <span className="text-yellow-300 font-bold">67% OFF</span> on Digital Services
          </p>

          <p className="text-sm md:text-base text-purple-200 mb-8 max-w-2xl mx-auto">
            Services available at our offices in <strong className="text-white">Jaipur</strong>, 
            <strong className="text-white"> Vrindavan</strong> & <strong className="text-yellow-300"> Nepal (Head Office)</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2 justify-center"
            >
              <Gift className="h-5 w-5" />
              Avail Special Offer
            </button>
            <Link
              to="/contact"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 backdrop-blur-sm border border-white/30 flex items-center gap-2 justify-center"
            >
              <MapPin className="h-5 w-5" />
              Visit Our Offices
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Special Offers</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our premium digital services at unbeatable prices. 
              Available across our <strong className="text-purple-600">3 office locations</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-purple-100 hover:border-purple-300"
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold">
                      {service.discount}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-purple-600">
                      {service.price}
                    </div>
                    <div className="text-gray-400 line-through text-sm">
                      {service.originalPrice}
                    </div>
                    <div className="text-xs text-green-600 font-semibold mt-1">
                      Save {service.discount}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.locations.map((loc) => (
                      <span key={loc} className="bg-purple-50 text-purple-700 text-[10px] px-2 py-0.5 rounded-full">
                        {loc}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openQuickForm(service.title)}
                    className={`w-full py-2.5 rounded-xl font-bold transition-all hover:scale-105 text-center text-sm md:text-base bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl`}
                  >
                    Avail Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Office Locations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our 3 locations for personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 ${
                  office.isHeadOffice 
                    ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-400' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{office.name}</h3>
                    {office.isHeadOffice && (
                      <span className="bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                        ★ HEAD OFFICE
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{office.address}</p>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-purple-600 font-semibold text-sm hover:underline">
                  📞 {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-purple-600">Growth Service</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional digital solutions with a personal touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">300+ Happy Clients</h3>
              <p className="text-gray-600 text-sm">Trusted by businesses across India and Nepal</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">3 Office Locations</h3>
              <p className="text-gray-600 text-sm">Jaipur • Vrindavan • Nepal (Head Office)</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance across all timezones</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-6 text-purple-100">
            Contact us today and avail our special offers. Expert consultation at just ₹1!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Gift className="h-5 w-5" />
              Avail Special Offer
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp (Nepal HQ)
            </a>
            <a
              href={`tel:${INDIA_PHONE}`}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 backdrop-blur-sm border border-white/30 flex items-center gap-2 justify-center"
            >
              <Phone className="h-5 w-5" />
              Call India Office
            </a>
          </div>

          <div className="mt-6 text-sm text-purple-200">
            <span className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              Jaipur • Vrindavan • Nepal (Head Office)
            </span>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-purple-300 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-purple-600" />
                  Avail Special Offer
                </h3>
                {selectedService && (
                  <p className="text-purple-600 font-semibold text-sm mt-1">{selectedService}</p>
                )}
              </div>
              <button 
                onClick={() => setIsFormOpen(false)} 
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your phone number" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Office Location</label>
                <select 
                  name="location" 
                  value={formData.location} 
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select your preferred office</option>
                  {offices.map((office) => (
                    <option key={office.city} value={office.city}>
                      {office.flag} {office.name} {office.isHeadOffice ? '(Head Office)' : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title} - {service.price}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..." 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-2 border-purple-300 shadow-lg"
              >
                <Send className="h-5 w-5" />
                Send Request via WhatsApp
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Your request will be sent to our Nepal Head Office for quick response
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;