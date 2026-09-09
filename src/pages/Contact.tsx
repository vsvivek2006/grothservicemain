import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Building,
  Globe,
  ChevronRight,
  Target,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Section, Input, Textarea } from '../components/ui';
import { 
  getPhysicalOffices, 
  getOfficeById, 
  getOfficePhone,
  getOfficeEmail,
  getOfficeAddress,
  getOfficeMapLink,
  getOfficeTimings,
  getPrimaryPhone, 
  getBusinessEmail, 
  getBusinessLegalName,
  getCanonicalOrigin,
  getAllServices,
  getSocialProfiles 
} from '../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../services';

// Types
interface OfficeLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  flag: string;
  mapLink: string;
  city: string;
  country: string;
  landmark: string;
  timings: string;
  isHeadOffice?: boolean;
  services: string[];
  googleMapsEmbed?: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  location?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    location: ''
  });

  const physicalOfficesList = getPhysicalOffices();
  const nepalOffice = getOfficeById('nepal');
  const jaipurOffice = getOfficeById('jaipur');
  const vrindavanOffice = getOfficeById('vrindavan');
  const primaryPhone = getPrimaryPhone();
  const businessEmail = getBusinessEmail();
  const social = getSocialProfiles();

  // Office Locations from single source of truth
  const offices: OfficeLocation[] = physicalOfficesList.map((o, idx) => ({
    id: idx + 1,
    name: o.name,
    address: o.address,
    phone: o.phone,
    email: o.email,
    flag: o.flag,
    mapLink: o.mapLink,
    city: o.city,
    country: o.country,
    landmark: o.landmark || '',
    timings: o.timings,
    isHeadOffice: o.isHeadOffice,
    services: [...o.servicesOffered]
  }));

  // Services list derived from canonical services
  const services = [
    ...getAllServices().map(s => s.title),
    'Custom Project',
    'Other'
  ];

  // Contact Information dynamically derived from canonical entities
  const contactInfo: ContactInfo[] = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Nepal Office',
      content: getOfficeAddress('nepal'),
      link: getOfficeMapLink('nepal'),
      location: '🇳🇵 Nepal'
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Jaipur Office',
      content: getOfficeAddress('jaipur'),
      link: getOfficeMapLink('jaipur'),
      location: '🇮🇳 Jaipur'
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Vrindavan Office',
      content: getOfficeAddress('vrindavan'),
      link: getOfficeMapLink('vrindavan'),
      location: '🇮🇳 Vrindavan'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone - Nepal Office',
      content: getOfficePhone('nepal'),
      link: getTelHref(getOfficePhone('nepal')),
      location: '🇳🇵 Nepal'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone - India',
      content: primaryPhone,
      link: getTelHref(primaryPhone),
      location: '🇮🇳 India'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: businessEmail,
      link: getMailtoHref(businessEmail),
      location: '🌐 Global'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp - 24/7 Support',
      content: getOfficePhone('nepal'),
      link: getNepalWhatsAppUrl(),
      location: '💬 Instant'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours - Nepal Office',
      content: getOfficeTimings('nepal'),
      link: '#',
      location: '🇳🇵 Nepal'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours - India',
      content: getOfficeTimings('jaipur'),
      link: '#',
      location: '🇮🇳 India'
    }
  ];

  // FAQ Section
  const faqs: FAQItem[] = [
    {
      question: "Where are Growth Service's offices located?",
      answer: `Our physical offices are located in ${physicalOfficesList.map(o => `${o.city} (${o.country})`).join(', ')} to serve our clients across India, Nepal, and globally.`
    },
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer comprehensive digital marketing services including SEO, Social Media Management, Meta Ads Management, Google Business Profile optimization, Lead Generation, Performance Marketing, and Content Marketing from all our office locations."
    },
    {
      question: "How long does website development take?",
      answer: "Typical website projects take 7-10 days for basic sites and 2-3 weeks for complex applications. We provide exact timelines after project analysis from our development teams in India and Nepal."
    },
    {
      question: "Do you provide support after project completion?",
      answer: "Yes, we offer 1 month of free support after project completion. Extended support and maintenance plans are available from our 24/7 support team across all offices."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We specialize in modern web technologies including React, TypeScript, Node.js, MongoDB, Next.js, and Tailwind CSS for building fast, scalable applications across all our locations."
    },
    {
      question: "How can I contact your Nepal office?",
      answer: `You can contact our Nepal office at ${getOfficePhone('nepal')} or email us at ${getOfficeEmail('nepal')}. Our office is located at ${getOfficeAddress('nepal')}.`
    }
  ];

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit - sends to Nepal WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const locationLabel = offices.find(o => o.id === parseInt(formData.location))?.name || 'Not specified';
    
    const whatsappMessage = `Hello Growth Service Team! (Nepal Office)

*📋 New Contact Form Submission*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Location:* ${locationLabel}
*Message:* ${formData.message}

I would like to discuss my project with you. Please provide more details.`;

    // Send to Nepal WhatsApp
    const whatsappUrl = getNepalWhatsAppUrl(whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Growth Service | Offices in Nepal, Jaipur & Vrindavan - Digital Marketing Agency</title>
        <meta 
          name="description" 
          content="Contact Growth Service with offices in Nepal, Jaipur (Rajasthan), and Vrindavan (Uttar Pradesh). Get professional web development, SEO, and digital marketing services." 
        />
        <meta 
          name="keywords" 
          content="contact digital marketing agency, web development company Nepal, SEO services Jaipur, digital agency Vrindavan, growth service contact, digital marketing India, web development Nepal, SEO India, contact growth service, digital agency Nepal" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://growthservice.in/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Growth Service - Offices in Nepal, Jaipur & Vrindavan" />
        <meta property="og:description" content="Connect with our team at our Nepal Office, Jaipur Office, or Vrindavan Office for web development and digital marketing services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthservice.in/contact" />
        
        {/* JSON-LD Structured Data for Multiple Offices */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": getBusinessLegalName(),
            "url": getCanonicalOrigin(),
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": getOfficePhone('nepal'),
                "contactType": "Nepal Office",
                "availableLanguage": ["English", "Hindi", "Nepali"]
              },
              {
                "@type": "ContactPoint",
                "telephone": primaryPhone,
                "contactType": "India Office",
                "availableLanguage": ["English", "Hindi"]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center">
            {/* Office Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {offices.map((office) => (
                <div 
                  key={office.id}
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                >
                  <span>{office.flag}</span>
                  <span>{office.name}</span>
                </div>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Let's Build Something <span className="text-cyan-300">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-blue-100">
              Connect with our team at our <span className="text-yellow-300 font-semibold">Nepal Office</span>, 
              <span className="text-cyan-300 font-semibold"> Jaipur Office</span>, or 
              <span className="text-purple-300 font-semibold"> Vrindavan Office</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp (Nepal)</span>
              </a>
              <a
                href={getTelHref(primaryPhone)}
                className="bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call India Office</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* === OFFICE LOCATIONS SECTION === */}
      <Section variant="subtle" className="py-12">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Office Locations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with us at our Nepal office or our India offices in Jaipur and Vrindavan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{office.flag}</span>
                      <h3 className="text-lg font-bold text-gray-900">{office.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-700">{office.address}</p>
                        {office.landmark && (
                          <p className="text-gray-500 text-xs">📌 {office.landmark}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-blue-600">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-blue-600">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{office.timings}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Services Available:</p>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Open Now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Locations Summary */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold">🇳🇵</div>
                <div className="font-bold">Nepal Office</div>
                <div className="text-sm text-blue-200">Bariyarpatti, Nepal</div>
              </div>
              <div>
                <div className="text-3xl font-bold">🇮🇳</div>
                <div className="font-bold">Jaipur Office</div>
                <div className="text-sm text-blue-200">Rajasthan, India</div>
              </div>
              <div>
                <div className="text-3xl font-bold">🇮🇳</div>
                <div className="font-bold">Vrindavan Office</div>
                <div className="text-sm text-blue-200">Uttar Pradesh, India</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 text-sm text-blue-200">
              ⏰ 24/7 Support Available • 🌍 Serving Clients Worldwide
            </div>
          </div>
        </Container>
      </Section>

      {/* === CONTACT FORM & INFO === */}
      <Section variant="default" className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send Your Project Details
              </h2>
              <p className="text-gray-600 mb-6">
                Share your project requirements with our team. We'll get back to you within 2-4 hours. 
                For instant response, message us on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name *"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email *"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />

                  <Input
                    label="Phone / WhatsApp *"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-subtle min-h-[44px]"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Office
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-subtle min-h-[44px]"
                    >
                      <option value="">Select office location</option>
                      {offices.map((office) => (
                        <option key={office.id} value={office.id}>
                          {office.flag} {office.name} {office.isHeadOffice ? '(Head Office)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Textarea
                  label="Project Requirements *"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project, timeline, budget, and specific requirements..."
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:scale-[1.01] hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send via WhatsApp</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Your message will be sent to our WhatsApp for instant response. 
                  We'll get back to you within 1 hour.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Connect with us through any of these channels. We're here to help you build amazing 
                digital solutions for your business.
              </p>

              <div className="space-y-3 mb-6 max-h-[500px] overflow-y-auto pr-2">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-all">
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                        {info.title}
                        {info.location && (
                          <span className="text-xs text-gray-500 font-normal">{info.location}</span>
                        )}
                      </h3>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-gray-600 hover:text-purple-600 transition-colors text-sm break-all"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🌐</span> Follow Our Work
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={getNepalWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                    title="WhatsApp - Nepal HQ"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/growthservice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/growthservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                  <h3 className="font-semibold text-green-800 text-sm flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </h3>
                  <p className="text-green-700 text-xs">Instant Response</p>
                  <p className="text-green-600 text-[10px]">24/7 Support</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-blue-800 text-sm flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    Email
                  </h3>
                  <p className="text-blue-700 text-xs">2-4 Hours</p>
                  <p className="text-blue-600 text-[10px]">Business Hours</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-200">
                  <h3 className="font-semibold text-purple-800 text-sm flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    Phone
                  </h3>
                  <p className="text-purple-700 text-xs">Urgent Queries</p>
                  <p className="text-purple-600 text-[10px]">24/7 Available</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-xl border border-orange-200">
                  <h3 className="font-semibold text-orange-800 text-sm flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Office Hours
                  </h3>
                  <p className="text-orange-700 text-xs">Nepal: 10AM-6PM</p>
                  <p className="text-orange-600 text-[10px]">India: 9AM-7PM</p>
                </div>
              </div>

              {/* Internal Links */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Explore More:</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/about" className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1">
                    <span>About Us</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link to="/services" className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1">
                    <span>Our Services</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link to="/blog" className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1">
                    <span>Blog</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link to="/free-audit" className="text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1">
                    <span>Free Audit</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* === FAQ SECTION === */}
      <Section variant="subtle" className="py-12">
        <Container size="narrow">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our web development and digital marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm flex items-start gap-2">
                  <span className="text-purple-600">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm pl-5">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* === FINAL CTA === */}
      <Section className="py-12 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Contact our <span className="text-yellow-300 font-semibold">Nepal Office</span> or visit our offices 
            in <span className="text-cyan-300 font-semibold">Jaipur</span> and 
            <span className="text-purple-300 font-semibold"> Vrindavan</span>.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6">
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp (Nepal)</span>
            </a>
            <a
              href={getTelHref(primaryPhone)}
              className="bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call India</span>
            </a>
            <Link
              to="/free-audit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Target className="h-5 w-5" />
              <span>Free Audit</span>
            </Link>
          </div>
          
          <p className="text-purple-200 text-sm">
            🇳🇵 Nepal: {getOfficePhone('nepal')} • 🇮🇳 India: {primaryPhone} • 💻 {businessEmail}
          </p>
          <p className="text-purple-300 text-xs mt-2">
            💻 Web Development • 🔍 SEO • 📱 Digital Marketing • 🚀 Growth Solutions • 🌍 Global Reach
          </p>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;