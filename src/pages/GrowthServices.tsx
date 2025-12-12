import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
  Instagram,
  Facebook,
  Linkedin,
  Globe as WebsiteIcon,
  Link as LinkIcon,
  FileText,
  TrendingUp,
  BarChart,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
  AlertCircle,
  ShieldCheck,
  Zap as Lightning
} from "lucide-react";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Service {
  id: string;
  name: string;
  price: number;
  min: number;
  max: number;
  description: string;
  features: string[];
  icon: JSX.Element;
  category: string;
  deliveryTime: string;
}

const GrowthServices: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessFormOpen, setIsSuccessFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [timeLeft, setTimeLeft] = useState(300);
  const [flashSaleTime, setFlashSaleTime] = useState(45);
  const [isSpecialPrice, setIsSpecialPrice] = useState(true);
  const [isFlashSale, setIsFlashSale] = useState(true);
  const [hasFlashSaleOccurred, setHasFlashSaleOccurred] = useState(false);
  const [offerExpired, setOfferExpired] = useState(false);
  const [activeCategory, setActiveCategory] = useState("backlinks");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [successFormData, setSuccessFormData] = useState({
    name: "",
    email: "",
    utr: "",
    service: "",
    amount: "",
    quantity: "",
    link: ""
  });

  const [paymentService, setPaymentService] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);

  // ✅ Environment variables
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const WHATSAPP_NUMBER = "9341436937";

  // Backlink Services
  const backlinkServices: Service[] = [
    {
      id: "basic-backlinks",
      name: "Basic Backlinks Package",
      price: 3, // Per backlink
      min: 100,
      max: 10000,
      description: "High-quality basic backlinks for improved SEO",
      features: [
        "High DA/PA Sites (20-40)",
        "Dofollow Links",
        "Natural Anchor Text",
        "Manual Submission",
        "Indexing Report"
      ],
      icon: <LinkIcon className="h-6 w-6" />,
      category: "backlinks",
      deliveryTime: "3-7 days"
    },
    {
      id: "hot-deal-backlinks",
      name: "HOT DEAL: 300 Backlinks",
      price: 699, // Package price for 300 backlinks
      min: 1,
      max: 1,
      description: "Premium backlinks package for instant SEO boost",
      features: [
        "300 High-Quality Backlinks",
        "DA 30-50 Sites",
        "Mix of Dofollow & Nofollow",
        "Anchor Text Diversity",
        "Weekly Indexing Report",
        "Free SEO Audit"
      ],
      icon: <Zap className="h-6 w-6" />,
      category: "backlinks",
      deliveryTime: "5-10 days"
    },
    {
      id: "moj-da-backlinks",
      name: "MOJ DA 30+ Backlinks",
      price: 1299,
      min: 1,
      max: 1,
      description: "High authority backlinks from DA 30+ sites",
      features: [
        "DA 30+ Quality Sites",
        "High Authority Links",
        "Contextual Placement",
        "Permanent Backlinks",
        "Traffic Referral",
        "Priority Support"
      ],
      icon: <TrendingUp className="h-6 w-6" />,
      category: "backlinks",
      deliveryTime: "7-14 days"
    },
    {
      id: "premium-backlinks",
      name: "Premium DA 50+ Backlinks",
      price: 1999,
      min: 1,
      max: 1,
      description: "Ultra premium backlinks from high authority sites",
      features: [
        "DA 50+ Premium Sites",
        "Editorial Context Links",
        "Guaranteed Indexing",
        "Competitor Analysis",
        "Monthly Performance Report",
        "Dedicated Account Manager"
      ],
      icon: <Award className="h-6 w-6" />,
      category: "backlinks",
      deliveryTime: "10-15 days"
    }
  ];

  // GMB Services
  const gmbServices: Service[] = [
    {
      id: "gmb-reviews",
      name: "Google My Business Reviews",
      price: 200, // Per review
      min: 5,
      max: 100,
      description: "Authentic Google reviews for your business",
      features: [
        "Real User Reviews",
        "Verified Google Accounts",
        "Natural Review Text",
        "Review Images",
        "Rating Management",
        "Response Management"
      ],
      icon: <Star className="h-6 w-6" />,
      category: "gmb",
      deliveryTime: "2-5 days"
    },
    {
      id: "gmb-optimization",
      name: "GMB Complete Optimization",
      price: 2499,
      min: 1,
      max: 1,
      description: "Full GMB profile optimization and setup",
      features: [
        "Profile Creation & Verification",
        "Complete Business Info",
        "Photos & Videos Upload",
        "Posts & Updates Setup",
        "Category Optimization",
        "Local SEO Keywords"
      ],
      icon: <Globe className="h-6 w-6" />,
      category: "gmb",
      deliveryTime: "3-5 days"
    },
    {
      id: "gmb-posts",
      name: "Monthly GMB Posts Service",
      price: 999,
      min: 1,
      max: 12,
      description: "Regular Google posts to keep your business active",
      features: [
        "8 Posts Per Month",
        "Professional Content",
        "Call-to-Action Buttons",
        "Image Optimization",
        "Event Announcements",
        "Offer Posts"
      ],
      icon: <FileText className="h-6 w-6" />,
      category: "gmb",
      deliveryTime: "Monthly"
    }
  ];

  // SEO Services
  const seoServices: Service[] = [
    {
      id: "seo-audit",
      name: "Comprehensive SEO Audit",
      price: 499,
      min: 1,
      max: 1,
      description: "Detailed website SEO audit with action plan",
      features: [
        "Technical SEO Analysis",
        "On-Page Optimization",
        "Competitor Analysis",
        "Keyword Research",
        "Backlink Profile Check",
        "Actionable Report"
      ],
      icon: <Search className="h-6 w-6" />,
      category: "seo",
      deliveryTime: "2-3 days"
    },
    {
      id: "local-seo",
      name: "Local SEO Package",
      price: 2999,
      min: 1,
      max: 1,
      description: "Complete local SEO for brick-and-mortar businesses",
      features: [
        "Local Citation Building",
        "Google Maps Optimization",
        "NAP Consistency Check",
        "Local Directory Submission",
        "Review Management",
        "Local Schema Markup"
      ],
      icon: <MapPin className="h-6 w-6" />,
      category: "seo",
      deliveryTime: "15-30 days"
    }
  ];

  // All services combined
  const allServices = [
    ...backlinkServices,
    ...gmbServices,
    ...seoServices
  ];

  // Category-wise services
  const categoryServices = {
    backlinks: backlinkServices,
    gmb: gmbServices,
    seo: seoServices
  };

  // Initialize timers from localStorage
  useEffect(() => {
    const savedTime = localStorage.getItem('specialOfferTime');
    const savedFlashSale = localStorage.getItem('flashSaleOccurred');
    const savedOfferExpired = localStorage.getItem('offerExpired');
    
    if (savedTime) {
      const remainingTime = parseInt(savedTime);
      setTimeLeft(remainingTime);
      if (remainingTime <= 0) {
        setOfferExpired(true);
        setIsSpecialPrice(false);
      }
    }
    
    if (savedFlashSale === 'true') {
      setHasFlashSaleOccurred(true);
      setIsFlashSale(false);
    }

    if (savedOfferExpired === 'true') {
      setOfferExpired(true);
      setIsSpecialPrice(false);
    }
  }, []);

  // Main Timer Effect - 5 minutes
  useEffect(() => {
    if (timeLeft <= 0) {
      setOfferExpired(true);
      setIsSpecialPrice(false);
      localStorage.setItem('offerExpired', 'true');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        localStorage.setItem('specialOfferTime', newTime.toString());
        
        if (newTime <= 0) {
          setOfferExpired(true);
          setIsSpecialPrice(false);
          localStorage.setItem('offerExpired', 'true');
          return 0;
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Flash Sale Timer - 45 seconds with 25% discount
  useEffect(() => {
    if (flashSaleTime <= 0 || hasFlashSaleOccurred) {
      setIsFlashSale(false);
      setHasFlashSaleOccurred(true);
      localStorage.setItem('flashSaleOccurred', 'true');
      return;
    }

    const flashTimerId = setInterval(() => {
      setFlashSaleTime(prev => {
        if (prev <= 1) {
          setIsFlashSale(false);
          setHasFlashSaleOccurred(true);
          localStorage.setItem('flashSaleOccurred', 'true');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(flashTimerId);
  }, [flashSaleTime, hasFlashSaleOccurred]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const calculatePrice = (service: Service, qty: number) => {
    let total = 0;
    
    if (service.category === "backlinks") {
      if (service.id === "basic-backlinks") {
        total = service.price * qty;
      } else {
        total = service.price * qty; // Package price
      }
    } else {
      total = service.price * qty;
    }
    
    // Apply flash sale discount
    if (isFlashSale && !offerExpired) {
      total = total * 0.75; // 25% off
    }
    
    return Math.round(total);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSuccessFormData({
      ...successFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🎯 SEO & GMB Services Inquiry 🎯\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleSuccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `✅ SEO & GMB Services Payment Success 🎯\n\nPayment Details:\nName: ${successFormData.name}\nEmail: ${successFormData.email}\nUTR Number: ${successFormData.utr}\nService: ${successFormData.service}\nQuantity: ${successFormData.quantity}\nAmount Paid: ₹${successFormData.amount}\nLink: ${successFormData.link}\n\nPlease verify my payment and start the service!`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setIsSuccessFormOpen(false);
    setSuccessFormData({ name: "", email: "", utr: "", service: "", amount: "", quantity: "", link: "" });
    alert("Thank you! We'll verify your payment and start your service within 24 hours. 🎉");
  };

  const openQuickForm = (serviceName: string) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
    setIsFormOpen(true);
  };

  const openPaymentModal = (service: Service) => {
    setSelectedService(service);
    setQuantity(service.min);
    const calculatedAmount = calculatePrice(service, service.min);
    setPaymentAmount(calculatedAmount);
    setOriginalAmount(service.price * service.min);
    setPaymentService(service.name);
    setIsPaymentOpen(true);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (selectedService) {
      const clampedQuantity = Math.max(selectedService.min, Math.min(selectedService.max, newQuantity));
      setQuantity(clampedQuantity);
      const calculatedAmount = calculatePrice(selectedService, clampedQuantity);
      setPaymentAmount(calculatedAmount);
      setOriginalAmount(selectedService.price * clampedQuantity);
    }
  };

  const initiateRazorpayPayment = async () => {
    try {
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: paymentAmount * 100,
        currency: 'INR',
        name: 'SEO & GMB Services',
        description: `${selectedService?.name} - Quantity: ${quantity}`,
        image: '/logo.png',
        handler: function (response: any) {
          // Open success form after payment
          setIsSuccessFormOpen(true);
          setSuccessFormData(prev => ({
            ...prev,
            service: paymentService,
            amount: paymentAmount.toString(),
            quantity: quantity.toString()
          }));
          setIsPaymentOpen(false);
          
          // Mark flash sale as used
          if (isFlashSale) {
            setHasFlashSaleOccurred(true);
            localStorage.setItem('flashSaleOccurred', 'true');
          }
        },
        prefill: {
          name: formData.name || 'Customer',
          email: formData.email || 'customer@example.com',
          contact: formData.phone || ''
        },
        notes: {
          service: paymentService,
          quantity: quantity.toString(),
          type: 'SEO & GMB Service'
        },
        theme: {
          color: '#10B981'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again or contact us on WhatsApp.');
    }
  };

  // Sparkles Component
  const SparklesEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping text-green-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );

  // Reset everything (for testing)
  const resetAll = () => {
    localStorage.removeItem('specialOfferTime');
    localStorage.removeItem('flashSaleOccurred');
    localStorage.removeItem('offerExpired');
    setTimeLeft(300);
    setFlashSaleTime(45);
    setIsSpecialPrice(true);
    setIsFlashSale(true);
    setHasFlashSaleOccurred(false);
    setOfferExpired(false);
    window.location.reload();
  };

  const categories = [
    { 
      id: "backlinks", 
      name: "Backlinks", 
      icon: <LinkIcon className="h-5 w-5" />, 
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      description: "Quality backlinks for better rankings"
    },
    { 
      id: "gmb", 
      name: "Google My Business", 
      icon: <Globe className="h-5 w-5" />, 
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      description: "GMB reviews and optimization"
    },
    { 
      id: "seo", 
      name: "SEO Services", 
      icon: <Search className="h-5 w-5" />, 
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: "Complete SEO solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-emerald-50">
      <Helmet>
        <title>SEO & GMB Growth Services - Backlinks, Google Reviews, SEO Solutions</title>
        <meta name="description" content="Premium SEO growth services: Backlinks from ₹3, Google My Business reviews, Complete SEO solutions. Improve your website ranking and online presence!" />
      </Helmet>

      {/* Developer Reset Button (Hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={resetAll}
          className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-3 py-2 rounded-lg text-xs opacity-50 hover:opacity-100"
        >
          Reset All
        </button>
      )}

      {/* Flash Sale Banner */}
      {isFlashSale && !offerExpired && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 text-center animate-pulse">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <Lightning className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
            <span className="font-bold">FLASH SALE: 25% OFF - Ends in {flashSaleTime}s!</span>
            <Lightning className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
          </div>
        </div>
      )}

      {/* Floating Timer */}
      <div className="fixed top-4 right-4 z-40">
        <div className={`bg-gradient-to-r ${offerExpired ? 'from-gray-500 to-gray-700' : isSpecialPrice ? 'from-emerald-500 to-green-500' : 'from-red-500 to-pink-500'} text-white px-4 py-2 rounded-full shadow-2xl animate-pulse border-2 border-green-300`}>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 animate-spin" />
            <div className="text-center">
              <div className="text-xs font-semibold">
                {offerExpired ? '❌ OFFER EXPIRED' : isSpecialPrice ? '⏰ ENDS IN' : '⏰ ENDED'}
              </div>
              <div className={`text-sm font-bold ${offerExpired && 'line-through'}`}>
                {offerExpired ? '00:00' : formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 text-white pt-16 pb-12 md:py-20 overflow-hidden">
        <SparklesEffect />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {!offerExpired && (
            <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-2xl ${isSpecialPrice ? 'bg-emerald-500/20 border border-emerald-300' : 'bg-red-500/20 border border-red-300'} backdrop-blur-sm`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 animate-pulse" />
                  <span className="text-sm md:text-lg font-bold">{isSpecialPrice ? '⏰ SPECIAL OFFER ENDS IN:' : '❌ OFFER EXPIRED'}</span>
                </div>
                <div className={`text-xl md:text-2xl font-bold ${isSpecialPrice ? 'text-emerald-300' : 'text-red-300'} font-mono`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          )}

          {isFlashSale && !offerExpired && (
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold inline-block mb-4 md:mb-6 animate-pulse border-2 border-emerald-300">
              ⚡ FLASH SALE: 25% OFF - {flashSaleTime}s LEFT!
            </div>
          )}
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {offerExpired ? (
              <>
                Premium <span className="text-white">SEO & GMB</span><br />
                <span className="text-emerald-300">Growth Services</span>
              </>
            ) : (
              <>
                Premium <span className="text-white">SEO & GMB</span><br />
                <span className="text-emerald-300">Growth Services</span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-4xl mx-auto font-medium">
            {offerExpired ? (
              "Get the best SEO backlinks, Google My Business reviews, and complete SEO solutions!"
            ) : (
              "Boost your website ranking and online presence with our premium SEO & GMB services at unbeatable prices!"
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button onClick={scrollToServices} className="bg-white hover:bg-gray-100 text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center">
              <Rocket className="h-4 w-4 md:h-5 md:w-5" />
              View SEO Services
            </button>
            <button onClick={() => setIsFormOpen(true)} className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center">
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              Get Free SEO Audit
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">₹3</div>
              <div className="text-xs md:text-sm text-blue-100">Per Backlink</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">₹200</div>
              <div className="text-xs md:text-sm text-blue-100">Per GMB Review</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">3-7</div>
              <div className="text-xs md:text-sm text-blue-100">Days Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs md:text-sm text-blue-100">Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-500">SEO & GMB Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Professional services to improve your search rankings and online presence
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="mb-1">
                  {category.icon}
                </div>
                <span>{category.name}</span>
                <span className="text-xs opacity-80 mt-1">{category.description}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categoryServices[activeCategory as keyof typeof categoryServices]?.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-white to-gray-50 border-2 border-emerald-200 rounded-2xl p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                {!offerExpired && isFlashSale && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    ⚡ 25% OFF
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  {service.id === "basic-backlinks" ? (
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      ₹{service.price} / backlink
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      ₹{service.price}
                    </div>
                  )}
                  {!offerExpired && isFlashSale && (
                    <div className="text-green-600 font-semibold text-sm">
                      Flash Sale: ₹{Math.round(service.price * 0.75)}
                    </div>
                  )}
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Delivery: {service.deliveryTime}
                  </div>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-gray-700">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button 
                    onClick={() => openPaymentModal(service)} 
                    className={`w-full py-3 rounded-xl font-bold transition-all hover:scale-105 text-center ${
                      offerExpired 
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                        : isFlashSale
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                          : 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white'
                    }`}
                  >
                    {offerExpired 
                      ? 'Order Now' 
                      : isFlashSale 
                        ? '⚡ Grab 25% OFF Now!' 
                        : 'Order Now'
                    }
                  </button>
                  <button 
                    onClick={() => openQuickForm(service.name)} 
                    className="w-full py-2 rounded-xl font-bold transition-all hover:scale-105 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm"
                  >
                    💬 Get Detailed Info
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Package Comparison */}
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Backlinks Package Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: "Basic Package", price: "₹3 per link", links: "100+", features: ["DA 20-40", "Manual Submission", "Indexing Report"] },
                { name: "Hot Deal", price: "₹699", links: "300 Backlinks", features: ["DA 30-50", "Anchor Diversity", "Free SEO Audit"] },
                { name: "MOJ DA 30+", price: "₹1299", links: "DA 30+ Links", features: ["High Authority", "Contextual", "Priority Support"] },
                { name: "Premium Package", price: "₹1999", links: "DA 50+ Links", features: ["Editorial Links", "Guaranteed Indexing", "Dedicated Manager"] }
              ].map((pkg, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">{pkg.price}</div>
                  <div className="text-sm text-gray-600 mb-3">{pkg.links}</div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1 justify-center">
                        <Check className="h-3 w-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our SEO Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Fast Delivery", desc: "Backlinks in 3-7 days, GMB services in 2-5 days" },
              { icon: "🛡️", title: "Quality Guaranteed", desc: "High DA sites, real GMB reviews, permanent links" },
              { icon: "📈", title: "Ranking Improvement", desc: "Proven results in search engine rankings" },
              { icon: "💬", title: "24/7 Support", desc: "Dedicated support via WhatsApp & email" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-500 to-green-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Boost Your SEO Rankings?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Contact us now and get the best SEO & GMB services!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button 
              onClick={() => window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              WhatsApp Now
            </button>
            <button 
              onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call: +91 {WHATSAPP_NUMBER}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-emerald-400">SEO & GMB Services</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Your trusted partner for SEO growth and online presence success.
              </p>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm md:text-base text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 {WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@growthservice.in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, '_blank')}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button 
                  onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 SEO & GMB Growth Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-emerald-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-emerald-500" />
                  Order {selectedService.name}
                </h3>
                <p className="text-emerald-600 font-semibold text-sm mt-1">{selectedService.description}</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleQuantityChange(quantity - (selectedService.id === "basic-backlinks" ? 10 : 1))}
                    disabled={quantity <= selectedService.min}
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || selectedService.min)}
                    min={selectedService.min}
                    max={selectedService.max}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-center"
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + (selectedService.id === "basic-backlinks" ? 10 : 1))}
                    disabled={quantity >= selectedService.max}
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  Min: {selectedService.min} - Max: {selectedService.max.toLocaleString()}
                </div>
              </div>

              {/* Price Display */}
              <div className={`p-4 rounded-xl border-2 ${
                isFlashSale && !offerExpired ? 'bg-green-50 border-green-200' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isFlashSale && !offerExpired ? 'text-green-600' : 'text-emerald-600'
                  }`}>
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className="font-semibold text-sm md:text-base">
                    {isFlashSale && !offerExpired ? 'Flash Sale 25% OFF!' : 'Total Amount'}
                  </div>
                  {isFlashSale && !offerExpired && (
                    <div className="text-gray-500 text-sm line-through mt-1">
                      Original: ₹{originalAmount.toLocaleString()}
                    </div>
                  )}
                  <div className="text-gray-600 text-sm mt-1">
                    {selectedService.id === "basic-backlinks" 
                      ? `${quantity.toLocaleString()} Backlinks`
                      : `${quantity} Package${quantity > 1 ? 's' : ''}`
                    }
                  </div>
                  <div className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Delivery: {selectedService.deliveryTime}
                  </div>
                </div>
              </div>

              <button 
                onClick={initiateRazorpayPayment}
                className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg ${
                  isFlashSale && !offerExpired
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                    : 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white'
                }`}
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                Pay ₹{paymentAmount.toLocaleString()} Now
              </button>

              <button 
                onClick={() => {setIsPaymentOpen(false); setIsFormOpen(true);}}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block border-2 border-blue-300 text-sm md:text-base"
              >
                💬 Contact First Instead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Form Modal - Opens after payment */}
      {isSuccessFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-green-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                  Payment Successful! 🎉
                </h3>
                <p className="text-green-600 font-semibold text-sm mt-1">Complete your details to start service</p>
              </div>
              <button onClick={() => setIsSuccessFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSuccessSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={successFormData.name} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={successFormData.email} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UTR Number *</label>
                <input 
                  type="text" 
                  name="utr" 
                  required 
                  value={successFormData.utr} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="Enter UTR number from payment" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website/Profile Link *</label>
                <input 
                  type="text" 
                  name="link" 
                  required 
                  value={successFormData.link} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="Enter your website or GMB profile link" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <input 
                    type="text" 
                    name="service" 
                    required 
                    value={successFormData.service} 
                    onChange={handleSuccessFormChange} 
                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50" 
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input 
                    type="text" 
                    name="quantity" 
                    required 
                    value={successFormData.quantity} 
                    onChange={handleSuccessFormChange} 
                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50" 
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid</label>
                <input 
                  type="text" 
                  name="amount" 
                  required 
                  value={successFormData.amount} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50" 
                  readOnly
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                Submit & Start Service
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-emerald-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Get Free SEO Consultation
                </h3>
                <p className="text-emerald-600 font-semibold text-sm mt-1">We'll help you choose the right SEO service</p>
              </div>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
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
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
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
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
                  placeholder="Enter your WhatsApp number" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select a SEO service</option>
                  {allServices.map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name} - ₹{service.price}
                      {service.id === "basic-backlinks" ? "/backlink" : ""}
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
                  className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
                  placeholder="Tell us about your SEO requirements..." 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-2 border-emerald-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                Send SEO Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowthServices;
