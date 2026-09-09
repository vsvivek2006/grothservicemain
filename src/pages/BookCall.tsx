import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { getPhysicalOffices, getOfficePhone, getPrimaryPhone, getBusinessEmail, getCanonicalOrigin } from '../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../services';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle, 
  Building, 
  Target,
  Globe,
  ChevronRight
} from 'lucide-react';
import { Container, Input, Textarea } from '../components/ui';
import { businessConfig } from '../config';

// Types
interface OfficeLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  flag: string;
  city: string;
  country: string;
  isHeadOffice?: boolean;
}

const BookCall: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedOffice, setSelectedOffice] = useState<number>(3); // Nepal as default
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Office Locations derived from single source of truth
  const offices: OfficeLocation[] = getPhysicalOffices().map((o, idx) => ({
    id: idx + 1,
    name: o.name,
    address: o.address,
    phone: o.phone,
    flag: o.flag,
    city: o.city,
    country: o.country,
    isHeadOffice: o.isHeadOffice
  }));

  const primaryPhone = getPrimaryPhone();
  const nepalPhone = getOfficePhone('nepal');
  const businessEmail = getBusinessEmail();

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', 
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const services = [
    'Website Development',
    'SEO Services',
    'Social Media Management',
    'Google Business Profile',
    'Meta Ads Management',
    'Lead Generation',
    'App Development',
    'Brand Strategy',
    'Digital Marketing',
    'E-commerce Solutions',
    'Performance Marketing',
    'Content Marketing',
    'Custom Project',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateBookingId = () => {
    return 'GS-' + Date.now().toString().slice(-8);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || !formData.phone) {
      alert('Please fill all required fields');
      return;
    }
    
    const newBookingId = generateBookingId();
    setBookingId(newBookingId);
    
    const bookingDetails = { 
      bookingId: newBookingId, 
      selectedDate, 
      selectedTime, 
      selectedOffice,
      ...formData 
    };
    console.log('Booking details:', bookingDetails);
    
    setIsSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const selectedOfficeData = offices.find(o => o.id === selectedOffice);
    
    const confirmationMessage = `*Free Consultation Booking - Growth Service*

Booking ID: ${bookingId}
Date: ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
Time: ${selectedTime} IST

Office Location: ${selectedOfficeData?.name} ${selectedOfficeData?.flag}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Service Interested: ${formData.service}

Project Requirements: ${formData.message || 'No additional information'}

I have booked a free consultation call. Please confirm the schedule.`;

    // Send to Nepal WhatsApp (Head Office)
    window.open(getNepalWhatsAppUrl(confirmationMessage), '_blank');
  };

  const getNextWeekdays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      
      if (nextDay.getDay() !== 0 && nextDay.getDay() !== 6) {
        days.push(nextDay.toISOString().split('T')[0]);
      }
    }
    
    return days;
  };

  // Confirmation Component
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 md:py-12">
        <Helmet>
          <title>Booking Confirmed - Growth Service | Free Consultation</title>
          <meta name="description" content="Your free consultation with Growth Service has been confirmed. Our team will contact you shortly." />
        </Helmet>
        
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Free Consultation Booked</h1>
              <p className="text-gray-600">Your consultation slot has been reserved</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-700 mb-2">✅ Consultation Confirmed</div>
                <div className="text-sm text-blue-600">No payment required - Professional strategy session</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Booking ID</div>
                    <div className="font-semibold">{bookingId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date & Time</div>
                    <div className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })} at {selectedTime} IST
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-2">Office Location</div>
                  <div className="font-semibold flex items-center gap-2">
                    <span>{offices.find(o => o.id === selectedOffice)?.flag}</span>
                    <span>{offices.find(o => o.id === selectedOffice)?.name}</span>
                    {offices.find(o => o.id === selectedOffice)?.isHeadOffice && (
                      <span className="bg-yellow-400 text-gray-900 text-[8px] px-2 py-0.5 rounded-full font-bold">HEAD</span>
                    )}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-2">Client Details</div>
                  <div className="space-y-2">
                    <div><strong>Name:</strong> {formData.name}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    {formData.company && <div><strong>Company:</strong> {formData.company}</div>}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-2">Service</div>
                  <div className="font-semibold">{formData.service}</div>
                  {formData.message && (
                    <div className="mt-2">
                      <div className="text-sm text-gray-500 mb-1">Requirements:</div>
                      <div className="text-sm text-gray-600">{formData.message}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
              <h4 className="font-semibold text-green-700 mb-2">Next Steps</h4>
              <div className="space-y-2 text-sm text-green-600">
                <div className="flex items-start">
                  <div className="mr-2 font-bold">1.</div>
                  <div>Our team will contact you within 24 hours to confirm details</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 font-bold">2.</div>
                  <div>Meeting link will be sent to your email: {formData.email}</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 font-bold">3.</div>
                  <div>Prepare your project requirements for the consultation</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Confirm on WhatsApp (Nepal HQ)
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={getTelHref(primaryPhone)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Call India
                </a>
                <a
                  href={getTelHref(nepalPhone)}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Call Nepal
                </a>
              </div>
              
              <Link
                to="/"
                className="block w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Book Free Consultation | Digital Experts in Nepal, Jaipur & Vrindavan - Growth Service</title>
        <meta 
          name="description" 
          content="Schedule a free 30-minute consultation with our digital experts at our Nepal Office, Jaipur Office, or Vrindavan Office. Discuss web development, SEO, and digital marketing." 
        />
        <meta 
          name="keywords" 
          content="free consultation, digital marketing consultation, web development consultation, SEO consultation, book call, growth service, Nepal consultation, Jaipur digital marketing, Vrindavan web development" 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/book-call`} />
        
        <meta property="og:title" content="Book Free Consultation - Growth Service Digital Agency" />
        <meta property="og:description" content="Free 30-minute strategy session with our digital experts. Offices in Nepal, Jaipur, and Vrindavan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${getCanonicalOrigin()}/book-call`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center">
            {/* Office Location Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {offices.map((office) => (
                <div 
                  key={office.id}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer hover:bg-white/30 transition-all"
                  onClick={() => setSelectedOffice(office.id)}
                >
                  <span>{office.flag}</span>
                  <span>{office.city}</span>
                </div>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Free <span className="text-cyan-300">Strategy</span> Consultation
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Schedule a 30-minute call with our digital experts at your preferred office location in 
              <span className="text-yellow-300 font-semibold"> Nepal</span>, 
              <span className="text-cyan-300 font-semibold"> Jaipur</span>, or 
              <span className="text-purple-300 font-semibold"> Vrindavan</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <Clock className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 text-white" />
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">30-Minute Call</h3>
                <p className="text-blue-200 text-xs md:text-sm">Free strategy session</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <User className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 text-white" />
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Expert Advice</h3>
                <p className="text-blue-200 text-xs md:text-sm">Professional guidance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 text-white" />
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">No Cost</h3>
                <p className="text-blue-200 text-xs md:text-sm">Completely free consultation</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Schedule Your Free Consultation</h2>
                <p className="text-gray-600 text-sm md:text-base">Select your preferred office location, date, and time</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Office Location Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Building className="h-4 w-4 inline mr-2" />
                    Select Office Location *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {offices.map((office) => (
                      <button
                        key={office.id}
                        type="button"
                        onClick={() => setSelectedOffice(office.id)}
                        className={`p-4 rounded-lg border-2 text-sm font-medium transition-all duration-200 text-left ${
                          selectedOffice === office.id
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25'
                        } ${office.isHeadOffice ? 'ring-2 ring-yellow-200' : ''}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{office.flag}</span>
                          <div>
                            <div className="font-semibold">{office.name}</div>
                            <div className="text-xs text-gray-500">{office.city}, {office.country}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Select Date (Monday to Friday)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    {getNextWeekdays().map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 md:p-4 rounded-lg border-2 text-xs md:text-sm font-medium transition-all duration-200 ${
                          selectedDate === date
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Select Time (IST - Indian Standard Time)
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 text-xs md:text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">⏰ All times are in IST (UTC+5:30)</p>
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <Input
                    label="Full Name *"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  
                  <Input
                    label="Mobile Number *"
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    helperText="For booking confirmation"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <Input
                    label="Email Address *"
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                  />
                  
                  <Input
                    label="Company / Business"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your business name"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-subtle min-h-[44px] text-sm md:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Message */}
                <Textarea
                  label="Project Requirements"
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your project requirements, timeline, and specific needs..."
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || !formData.phone}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 md:py-4 px-6 rounded-lg font-semibold text-sm md:text-lg transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Book Free Consultation
                </button>

                <p className="text-center text-xs md:text-sm text-gray-500">
                  No payment required. Your consultation is completely free.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            {/* Consultation Benefits */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 md:mb-4">Consultation Benefits</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Strategy Session</p>
                    <p className="text-xs text-gray-600">Detailed project planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cost Estimation</p>
                    <p className="text-xs text-gray-600">Transparent pricing discussion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Expert Guidance</p>
                    <p className="text-xs text-gray-600">Professional recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">3 Office Locations</p>
                    <p className="text-xs text-gray-600">Nepal • Jaipur • Vrindavan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations Quick View */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 md:mb-4">📍 Our Offices</h3>
              <div className="space-y-3">
                {offices.map((office) => (
                  <div key={office.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-all">
                    <span className="text-xl">{office.flag}</span>
                    <div>
                      <div className="font-medium text-sm flex items-center gap-2">
                        {office.name}
                        {office.isHeadOffice && (
                          <span className="bg-yellow-400 text-gray-900 text-[8px] px-2 py-0.5 rounded-full font-bold">HQ</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{office.address}</p>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-xs text-blue-600 hover:text-blue-800">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 md:mb-4">Contact Information</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Nepal Office</p>
                    <a href={getTelHref(nepalPhone)} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                      {nepalPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">India Office</p>
                    <a href={getTelHref(primaryPhone)} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                      {primaryPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Email</p>
                    <a href={getMailtoHref(businessEmail)} className="text-sm font-medium text-gray-900 hover:text-blue-600">
                      {businessEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">WhatsApp Business</p>
                    <a 
                      href={getNepalWhatsAppUrl()} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 hover:text-green-600"
                    >
                      {nepalPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Explore More</h3>
              <div className="space-y-2">
                <Link to="/about" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <Building className="h-4 w-4" />
                  About Our Offices
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Link>
                <Link to="/services" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <Target className="h-4 w-4" />
                  Our Services
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Link>
                <Link to="/contact" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Link>
                <Link to="/free-audit" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <CheckCircle className="h-4 w-4" />
                  Free Website Audit
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Link>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 md:p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-blue-100 text-sm mb-3">Chat with us on WhatsApp for quick queries</p>
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center text-sm"
              >
                <MessageCircle className="h-4 w-4 inline mr-2" />
                Chat on WhatsApp (Nepal HQ)
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 md:mt-12">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Why Choose Growth Service</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">300+</div>
                <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-xs md:text-sm text-gray-600">Projects Done</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-xs md:text-sm text-gray-600">Office Locations</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-xs md:text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile-friendly touch improvements */}
      <style jsx>{`
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          input, select, textarea {
            font-size: 16px;
          }
        }
        
        @media (hover: hover) {
          button:hover, a:hover {
            transform: translateY(-1px);
          }
        }
      `}</style>
    </div>
  );
};

export default BookCall;