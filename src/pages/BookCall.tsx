import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle, ExternalLink, Building, Target } from 'lucide-react';

const BookCall: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
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

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', 
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const services = [
    'Website Development',
    'SEO Services',
    'Social Media Management',
    'Google My Business Setup',
    'Meta Ads Management',
    'Tour & Travel Website',
    'Guest House Website',
    'B2B Business Setup',
    'Custom Project',
    'Other Service'
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
    
    // Generate booking ID
    const newBookingId = generateBookingId();
    setBookingId(newBookingId);
    
    // Store booking data
    const bookingDetails = { 
      bookingId: newBookingId, 
      selectedDate, 
      selectedTime, 
      ...formData 
    };
    console.log('Booking details:', bookingDetails);
    
    // Show success message
    setIsSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const confirmationMessage = `*Free Consultation Booking - Growth Service*

Booking ID: ${bookingId}
Date: ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
Time: ${selectedTime}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Service Interested: ${formData.service}

Project Requirements: ${formData.message || 'No additional information'}

I have booked a free consultation call. Please confirm the schedule.`;

    const encodedMessage = encodeURIComponent(confirmationMessage);
    window.open(`https://wa.me/97797073824881?text=${encodedMessage}`, '_blank');
  };

  const getNextWeekdays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
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
          <title>Booking Confirmed - Growth Service</title>
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
                <div className="text-xl font-bold text-blue-700 mb-2">Free Consultation Confirmed</div>
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
                Confirm on WhatsApp
              </button>
              
              <a
                href="tel:+919341436937"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Support: +91 93414 36937
              </a>
              
              <a
                href="/"
                className="block w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Book Free Consultation | Professional Digital Services - Growth Service</title>
        <meta 
          name="description" 
          content="Schedule a free 30-minute consultation with our digital experts. Discuss your website development, SEO, and digital marketing needs." 
        />
      </Helmet>

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Free Strategy Consultation</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
              Schedule a 30-minute call with our digital experts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
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
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Booking Form - Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Schedule Your Free Consultation</h2>
                <p className="text-gray-600 text-sm md:text-base">Select your preferred time and share project details</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
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
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="+91 98765 43210"
                    />
                    <p className="text-xs text-gray-500 mt-1">For booking confirmation</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Business
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="Your business name"
                    />
                  </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
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
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                    placeholder="Briefly describe your project requirements, timeline, and specific needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || !formData.phone}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 md:py-4 px-6 rounded-lg font-semibold text-sm md:text-lg transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Book Free Consultation
                </button>

                <p className="text-center text-xs md:text-sm text-gray-500">
                  No payment required. Your consultation is completely free.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar - Mobile Optimized */}
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
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 md:mb-4">Contact Information</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Phone Support</p>
                    <a href="tel:+919341436937" className="text-sm font-medium text-gray-900 hover:text-blue-600">
                      +91 93414 36937
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Email</p>
                    <a href="mailto:info@growthservice.in" className="text-sm font-medium text-gray-900 hover:text-blue-600">
                      info@growthservice.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">WhatsApp Business</p>
                    <a 
                      href="https://wa.me/97797073824881" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 hover:text-green-600"
                    >
                      +977 97073824881
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What We'll Discuss */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 md:mb-4">What We'll Discuss</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Project requirements and goals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Timeline and milestones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Budget and pricing options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implementation strategy</span>
                </li>
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 md:p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-blue-100 text-sm mb-3">Chat with us on WhatsApp for quick queries</p>
              <a
                href="https://wa.me/97797073824881"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Mobile Optimized */}
        <div className="mt-8 md:mt-12">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Why Choose Growth Service</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-xs md:text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-xs md:text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <div className="text-lg md:text-xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-friendly touch improvements */}
      <style jsx>{`
        /* Improve touch targets on mobile */
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          input, select, textarea {
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          .grid-cols-2 > * {
            font-size: 11px;
            padding: 8px;
          }
        }
        
        /* Better hover states for mobile */
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
