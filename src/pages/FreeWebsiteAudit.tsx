import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  CheckCircle, AlertTriangle, ArrowRight, Download, 
  Search, Globe, Clock, Shield, Zap, Smartphone, 
  ShoppingBag, FileText, ExternalLink, TrendingUp, 
  Target, Monitor, BarChart, Lock, Users, MessageCircle
} from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const FreeWebsiteAudit: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [auditType, setAuditType] = useState('basic');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Free audit types
  const freeAuditTypes = [
    {
      id: 'basic',
      name: 'Basic SEO Audit',
      icon: '🔍',
      description: 'Essential SEO analysis',
      price: 'FREE',
      color: 'from-blue-50 to-blue-100',
      features: [
        'Basic SEO score',
        'Mobile optimization check',
        'Page speed analysis',
        'Meta tags review',
        'Free summary report'
      ],
      missingFeatures: [
        'Competitor analysis',
        'Detailed technical audit',
        'Security vulnerabilities',
        'Conversion rate analysis',
        'Complete PDF report'
      ]
    }
  ];

  // Advanced paid audit types
  const advancedAuditTypes = [
    {
      id: 'pro',
      name: 'Professional Audit',
      icon: '📊',
      description: 'Complete website analysis',
      price: '₹499',
      color: 'from-purple-50 to-purple-100',
      features: [
        'Complete SEO audit (50+ metrics)',
        'Competitor analysis (3 competitors)',
        'Technical audit report',
        'Security vulnerabilities check',
        'Detailed PDF report (15+ pages)',
        '30-minute consultation call',
        'Priority support'
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Pro Audit',
      icon: '🛒',
      description: 'Online store optimization',
      price: '₹899',
      color: 'from-green-50 to-green-100',
      features: [
        'Complete e-commerce audit',
        'Conversion rate optimization',
        'Checkout process analysis',
        'Product SEO optimization',
        'Shopping cart analysis',
        'Detailed competitor analysis',
        '60-minute consultation'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Audit',
      icon: '🏢',
      description: 'Business website comprehensive',
      price: '₹1,499',
      color: 'from-orange-50 to-orange-100',
      features: [
        'Complete website audit',
        'Advanced competitor analysis (5+)',
        'UX/UI analysis',
        'Performance optimization',
        'Security penetration testing',
        'Detailed action plan',
        '90-minute strategy session'
      ]
    }
  ];

  // Initialize Razorpay
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFreeAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*Free Basic Website Audit Request - Growth Service*

🌐 Website URL: ${websiteUrl}
📧 Email: ${email}
🏢 Business Type: ${businessType || 'Not specified'}

*Requesting:* Basic SEO Audit (Free)

*Please provide:*
1. Basic SEO score
2. Mobile optimization check
3. Page speed analysis
4. Meta tags review
5. Free summary report

Looking forward to the free audit report!`;

    window.open(`https://wa.me/97797073824881?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setIsSubmitted(true);
  };

  const handlePayment = async (audit: any) => {
    // In production, you would generate order_id from your backend
    const orderId = `GS-AUDIT-${Date.now()}`;
    
    const options = {
      key: 'rzp_test_YOUR_KEY_ID', // Replace with your Razorpay key
      amount: audit.id === 'pro' ? 49900 : audit.id === 'ecommerce' ? 89900 : 149900, // Amount in paise
      currency: 'INR',
      name: 'Growth Service',
      description: `${audit.name} - Professional Website Audit`,
      order_id: orderId,
      handler: function(response: any) {
        // Payment success handler
        const paymentDetails = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          auditType: audit.name,
          amount: audit.price,
          websiteUrl,
          email,
          businessType
        };

        console.log('Payment successful:', paymentDetails);
        setPaymentComplete(true);

        // Send WhatsApp confirmation
        const whatsappMessage = `*✅ Payment Confirmed - ${audit.name} - Growth Service*

💰 Payment ID: ${response.razorpay_payment_id}
📋 Order ID: ${response.razorpay_order_id}
💸 Amount Paid: ${audit.price}
🎯 Audit Type: ${audit.name}

📝 Client Details:
🌐 Website: ${websiteUrl}
📧 Email: ${email}
🏢 Business: ${businessType || 'Not specified'}

*Audit Includes:*
${audit.features.map((feature: string) => `• ${feature}`).join('\n')}

*Next Steps:*
1. Our team will start audit within 2 hours
2. Complete report delivered in 24-48 hours
3. Schedule consultation call

Thank you for your payment!`;

        window.open(`https://wa.me/97797073824881?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      },
      prefill: {
        name: 'Client',
        email: email,
        contact: ''
      },
      notes: {
        website: websiteUrl,
        audit_type: audit.name
      },
      theme: {
        color: '#4F46E5'
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleDownloadSample = () => {
    const pdfContent = `
      GROWTH SERVICE - PROFESSIONAL WEBSITE AUDIT REPORT
      =================================================
      
      OVERALL SCORE: 78/100
      
      EXECUTIVE SUMMARY:
      - SEO Score: 72/100 (Needs Improvement)
      - Performance: 65/100 (Poor)
      - Security: 85/100 (Good)
      - User Experience: 82/100 (Good)
      - Mobile Optimization: 45/100 (Poor)
      
      PRIORITY ISSUES:
      🔴 CRITICAL (Fix within 1 week):
      1. Mobile Responsiveness - Score: 45/100
      2. Page Speed - Score: 32/100
      3. Image Optimization - 15MB of unoptimized images
      
      🟡 MEDIUM (Fix within 2 weeks):
      1. Missing Meta Descriptions - 25 pages affected
      2. Broken Links - 8 links found
      3. SSL Configuration - Minor issues
      
      🟢 LOW PRIORITY (Fix within 1 month):
      1. Schema Markup - Not implemented
      2. Social Media Tags - Missing
      3. XML Sitemap - Could be improved
      
      DETAILED FINDINGS:
      
      1. SEO ANALYSIS:
      - Meta Titles: 65/100 (12 pages missing)
      - Meta Descriptions: 40/100 (25 pages missing)
      - Header Tags: 75/100 (Good structure)
      - Keyword Optimization: 60/100 (Needs work)
      
      2. PERFORMANCE:
      - Page Load Time: 4.8 seconds (Target: <3s)
      - First Contentful Paint: 2.9s
      - Largest Contentful Paint: 5.2s
      - Cumulative Layout Shift: 0.25
      
      3. MOBILE OPTIMIZATION:
      - Mobile Viewport: ✅ Correct
      - Font Sizes: ⚠️ Some text too small
      - Touch Targets: ⚠️ Some buttons too close
      - Mobile Speed: 32/100 (Poor)
      
      RECOMMENDATIONS:
      
      IMMEDIATE ACTIONS (Week 1):
      1. Compress all images using WebP format
      2. Implement lazy loading for images
      3. Fix mobile responsive issues
      4. Add missing meta descriptions
      
      SHORT-TERM IMPROVEMENTS (Week 2-4):
      1. Implement caching strategy
      2. Minify CSS and JavaScript
      3. Set up CDN
      4. Fix broken links
      
      LONG-TERM STRATEGY (Month 2-3):
      1. Implement AMP for mobile
      2. Set up detailed analytics
      3. Create content strategy
      4. Regular SEO monitoring
      
      This is a sample report. Your actual report will be more detailed.
      
      Contact Growth Service for professional audit:
      📱 WhatsApp: +977 97073824881
      📧 Email: info@growthservice.in
      🌐 Website: growthservice.in
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Growth-Service-Sample-Audit-Report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (isSubmitted && !paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <Helmet>
          <title>Free Audit Request Sent - Growth Service</title>
          <meta name="description" content="Your free website audit request has been sent. We'll send you a basic SEO analysis report." />
        </Helmet>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Free Audit Request Sent</h1>
              <p className="text-gray-600 mb-6">
                We've opened WhatsApp with your basic audit request details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What You'll Get (Free)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Basic SEO score
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile optimization check
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Page speed analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Meta tags review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Free summary report
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-4">Upgrade to Professional Audit</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get detailed insights with our Professional Audit starting at ₹499
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 text-purple-500 mr-2" />
                    Complete SEO audit (50+ metrics)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 text-purple-500 mr-2" />
                    Competitor analysis
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 text-purple-500 mr-2" />
                    Detailed PDF report
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-3 w-3 text-purple-500 mr-2" />
                    Consultation call
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 max-w-sm mx-auto">
              <button
                onClick={() => setShowAdvancedOptions(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <BarChart className="h-5 w-5" />
                Upgrade to Professional Audit
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full border border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Request Another Free Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
        <Helmet>
          <title>Payment Confirmed - Growth Service</title>
          <meta name="description" content="Your payment for professional website audit is confirmed. We'll start the audit immediately." />
        </Helmet>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful! 🎉</h1>
            <p className="text-xl text-gray-600 mb-6">
              Professional Audit Payment Confirmed
            </p>
            
            <div className="bg-green-100 border border-green-200 rounded-xl p-6 mb-8 max-w-lg mx-auto">
              <h3 className="font-semibold text-green-900 mb-3">✅ Payment Received</h3>
              <p className="text-green-700 mb-2">WhatsApp confirmation has been sent</p>
              <p className="text-sm text-green-600">
                Our team will start your audit within 2 hours
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-2xl mb-2">⏱️</div>
                <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
                <p className="text-sm text-gray-600">Report in 24-48 hours</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-gray-900 mb-1">Delivery</h4>
                <p className="text-sm text-gray-600">PDF report to your email</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-gray-900 mb-1">Support</h4>
                <p className="text-sm text-gray-600">Consultation call included</p>
              </div>
            </div>

            <div className="space-y-3 max-w-sm mx-auto">
              <a
                href="https://wa.me/97797073824881"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              
              <a
                href="/"
                className="block text-gray-600 hover:text-purple-600 py-2 text-sm transition-colors"
              >
                ← Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Helmet>
        <title>Free Website Audit & Professional Analysis | Growth Service</title>
        <meta 
          name="description" 
          content="Get free basic SEO audit or upgrade to professional audit starting at ₹499. Comprehensive website analysis with detailed PDF report." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Audit Service</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Free basic audit or professional analysis starting at ₹499
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-sm">Basic Audit</h3>
              <p className="text-blue-200 text-xs">Free</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-sm">Professional</h3>
              <p className="text-blue-200 text-xs">₹499</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">🛒</div>
              <h3 className="font-semibold text-sm">E-commerce</h3>
              <p className="text-blue-200 text-xs">₹899</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">🏢</div>
              <h3 className="font-semibold text-sm">Enterprise</h3>
              <p className="text-blue-200 text-xs">₹1,499</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Free Audit Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Free Basic Audit</h2>
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  ₹0 FREE
                </span>
              </div>
              
              <form onSubmit={handleFreeAuditSubmit} className="space-y-6">
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <input
                      type="text"
                      id="businessType"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      placeholder="E-commerce, Service, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-blue-900 mb-2">Free Audit Includes:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    {freeAuditTypes[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Request Free Audit via WhatsApp
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center gap-1 mx-auto"
                  >
                    {showAdvancedOptions ? 'Hide Professional Options' : 'View Professional Audit Options'}
                    <ArrowRight className={`h-4 w-4 transition-transform ${showAdvancedOptions ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </form>
            </div>

            {/* Professional Audit Options (Conditional) */}
            {showAdvancedOptions && (
              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Audit Options</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {advancedAuditTypes.map((audit) => (
                    <div key={audit.id} className={`bg-gradient-to-br ${audit.color} border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
                      <div className="text-center mb-4">
                        <div className="text-3xl mb-2">{audit.icon}</div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{audit.name}</h4>
                        <div className="text-2xl font-bold text-gray-900 mb-2">{audit.price}</div>
                        <p className="text-gray-600 text-sm">{audit.description}</p>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {audit.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button
                        onClick={() => handlePayment(audit)}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                      >
                        Get {audit.name}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-white rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-600">
                    ✅ Secure payment via Razorpay • 💰 GST invoice provided • 🔒 100% secure
                  </p>
                </div>
              </div>
            )}

            {/* Download Sample */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">View Sample Professional Report</h3>
                  <p className="text-gray-600 text-sm">See what you'll receive in detailed audit</p>
                </div>
                <button
                  onClick={handleDownloadSample}
                  className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                >
                  <Download className="h-4 w-4" />
                  Download Sample PDF
                </button>
              </div>
            </div>
          </div>

          {/* Audit Details & Benefits */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Get Professional Audit?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: '💰',
                    title: 'ROI Focused',
                    description: 'Identify issues affecting your revenue and conversions',
                    color: 'text-green-600'
                  },
                  {
                    icon: '📈',
                    title: 'Competitive Edge',
                    description: 'See how you compare against competitors and industry benchmarks',
                    color: 'text-blue-600'
                  },
                  {
                    icon: '⚡',
                    title: 'Performance Boost',
                    description: 'Fix speed and performance issues affecting user experience',
                    color: 'text-purple-600'
                  },
                  {
                    icon: '🔒',
                    title: 'Security Check',
                    description: 'Identify vulnerabilities and protect your website',
                    color: 'text-red-600'
                  },
                  {
                    icon: '📱',
                    title: 'Mobile Optimization',
                    description: 'Ensure perfect experience on all mobile devices',
                    color: 'text-indigo-600'
                  },
                  {
                    icon: '🎯',
                    title: 'Actionable Plan',
                    description: 'Get step-by-step implementation guide',
                    color: 'text-orange-600'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${item.color} bg-opacity-10`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free vs Professional Comparison */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-center">Free vs Professional Audit</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Feature</div>
                  <div className="font-medium text-center">Free</div>
                  <div className="font-medium text-center">Professional</div>
                </div>
                
                {[
                  ['SEO Score', '✅', '✅'],
                  ['50+ Metrics Analysis', '❌', '✅'],
                  ['Competitor Analysis', '❌', '✅ (3 competitors)'],
                  ['PDF Report', 'Basic', 'Detailed (15+ pages)'],
                  ['Consultation Call', '❌', '✅ 30-90 minutes'],
                  ['Priority Support', '❌', '✅'],
                  ['Implementation Plan', '❌', '✅ Step-by-step'],
                  ['Security Audit', '❌', '✅ Complete']
                ].map(([feature, free, pro], index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 text-sm items-center border-b border-white/20 pb-2">
                    <div>{feature}</div>
                    <div className="text-center">{free}</div>
                    <div className="text-center">{pro}</div>
                  </div>
                ))}
                
                <div className="grid grid-cols-3 gap-4 text-sm font-medium pt-4">
                  <div>Price</div>
                  <div className="text-center">₹0 FREE</div>
                  <div className="text-center">Starting ₹499</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Chat with our experts on WhatsApp for personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            
            <button
              onClick={() => setShowAdvancedOptions(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <BarChart className="h-5 w-5" />
              View Professional Options
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Payment Methods</div>
              <div className="font-semibold text-gray-900">UPI/Cards</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Turnaround Time</div>
              <div className="font-semibold text-gray-900">24-48 Hours</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Support</div>
              <div className="font-semibold text-gray-900">WhatsApp/Email</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Money-back</div>
              <div className="font-semibold text-gray-900">7 Days*</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeWebsiteAudit;
