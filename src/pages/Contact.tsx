import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Linkedin, Facebook, Building } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Growth Service Team!

*New Contact Form Submission*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interested:* ${formData.service}
*Message:* ${formData.message}

I would like to discuss my project with you. Please provide more details.`;

    const whatsappUrl = `https://wa.me/97797073824881?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    'Custom Project',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 93414 36937',
      link: 'tel:+919341436937'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'info@growthservice.in',
      link: 'mailto:info@growthservice.in'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      content: '+977 97073824881',
      link: 'https://wa.me/97797073824881'
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Office Address',
      content: 'Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121',
      link: '#'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      content: '24/7 Support Available',
      link: '#'
    }
  ];

  return (
    <div>
      {/* ✅ SEO Component */}
      <Helmet>
        <title>Contact Us | Growth Service - Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Contact Growth Service for professional web development, SEO, and digital marketing services. Get in touch for custom solutions tailored to your business needs."
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
              Ready to grow your business with professional web development and digital marketing? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/97797073824881"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+919341436937"
                className="bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send Your Project Details
              </h2>
              <p className="text-gray-600 mb-6">
                Share your project requirements and we'll get back to you with a customized solution. For instant response, message us directly on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project, timeline, budget, and specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send via WhatsApp</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Your message will be sent via WhatsApp for instant response. We'll get back to you within 1 hour.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Connect with us through any of these channels. We're here to help you build amazing digital solutions for your business.
              </p>

              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
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

              {/* Social Media Links */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Follow Our Work</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://wa.me/97797073824881"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/growth_servces"
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

              {/* Response Time */}
              <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center text-sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Quick Response Time
                </h3>
                <ul className="text-green-700 text-xs space-y-1">
                  <li className="flex items-center">
                    <span className="mr-2">⚡</span>
                    WhatsApp: Instant response
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📧</span>
                    Email: Within 2-4 hours
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📞</span>
                    Phone: 24/7 for urgent queries
                  </li>
                </ul>
              </div>

              {/* Free Consultation */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center text-sm">
                  🚀 Free Strategy Call
                </h3>
                <ul className="text-purple-700 text-xs space-y-1">
                  <li className="flex items-center">
                    <span className="mr-2">💡</span>
                    30-minute project discussion
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🎯</span>
                    Technical consultation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📊</span>
                    Custom solution proposal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our web development and digital marketing services
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">What technologies do you use for web development?</h3>
              <p className="text-gray-600 text-sm">We specialize in modern web technologies including React, TypeScript, Node.js, MongoDB, and Next.js for building fast, scalable applications.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">How long does website development take?</h3>
              <p className="text-gray-600 text-sm">Typical website projects take 7-10 days for basic sites and 2-3 weeks for complex applications. We provide exact timelines after project analysis.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Do you provide post-development support?</h3>
              <p className="text-gray-600 text-sm">Yes, we offer 1 month of free support after project completion. Extended support and maintenance plans are available.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">What's your process for starting a new project?</h3>
              <p className="text-gray-600 text-sm">We start with a free consultation, followed by requirement analysis, proposal, development, testing, and deployment with regular updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6 text-purple-100">
            Let's discuss your requirements and build something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+919341436937"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call +91 93414 36937</span>
            </a>
          </div>
          <p className="text-purple-200 mt-3 text-sm">
            💻 Web Development • 🔍 SEO • 📱 Digital Marketing • 🚀 Growth Solutions
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
