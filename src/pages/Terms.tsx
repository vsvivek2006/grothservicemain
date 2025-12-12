import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Shield, FileText, Check, AlertTriangle, Mail, Phone, MessageCircle, Download } from "lucide-react";

const Terms: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([0, 1, 2]);

  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const termsSections = [
    {
      id: 1,
      title: "Acceptance & Scope of Services",
      content: `By engaging with Grworth Services, you agree to be bound by these Terms of Service. We provide comprehensive digital solutions including Website Development, SEO Services, Social Media Management, Business Setup, and Google Business Profile Optimization. Exact project scope is defined in the individual proposal or Statement of Work (SOW).`
    },
    {
      id: 2,
      title: "Project Timeline & Delivery",
      content: `Website Development: Basic websites (5 pages) delivered in 7-10 days. Complex projects take 15-25 days. SEO Services require minimum 3-6 months for optimal results. Social Media Management shows results within 30-60 days. Client must provide required content and approvals promptly to avoid delays.`
    },
    {
      id: 3,
      title: "Payment Terms & Pricing",
      content: `All prices are in Indian Rupees (₹). Website Development: 50% advance, 50% on delivery. Monthly Services: Pre-paid, auto-renew unless cancelled with 30-day notice. Advertising spend billed directly by platforms. Late payments may incur 2% monthly interest. Advance payments receive special discounts as per our pricing page.`
    },
    {
      id: 4,
      title: "Intellectual Property Rights",
      content: `Upon full payment, ownership of final deliverables transfers to client. We retain rights to methodologies, frameworks, and pre-existing code. Client warrants all provided content is original or properly licensed. We may showcase completed work in our portfolio unless otherwise agreed.`
    },
    {
      id: 5,
      title: "Client Responsibilities",
      content: `Provide timely content, assets, and feedback. Grant necessary platform access. Maintain social media account security. Comply with third-party platform policies. Review and approve deliverables within 3 business days. Provide accurate business information for setup services.`
    },
    {
      id: 6,
      title: "Revisions & Change Requests",
      content: `Website Development includes 2 rounds of revisions. Additional revisions at ₹1,500/hour. Social Media content changes within 24 hours of posting. Major scope changes require new estimate. Monthly services include reasonable adjustments within package limits.`
    },
    {
      id: 7,
      title: "Confidentiality & Data Protection",
      content: `We treat all client information as confidential. Implement industry-standard security measures. Follow India's DPDP Act compliance. Recommend secure credential sharing. Store social media access securely. Delete client data upon request after project completion.`
    },
    {
      id: 8,
      title: "Performance & Results",
      content: `While we use best practices, specific results cannot be guaranteed. SEO rankings depend on search engine algorithms. Social media growth affected by platform changes. Website performance influenced by hosting and content quality. We provide regular performance reports and optimization.`
    },
    {
      id: 9,
      title: "Third-Party Services",
      content: `We may integrate third-party tools (Google Analytics, Meta Ads, Payment Gateways). Client responsible for third-party account compliance. Not liable for third-party platform outages or policy changes. Third-party costs (hosting, domains, ads) billed separately unless included in package.`
    },
    {
      id: 10,
      title: "Termination & Cancellation",
      content: `Monthly services: 30-day written notice required. Website projects: Cancellation fee applies based on work completed. Immediate termination for policy violations or non-payment. Upon termination, client must settle outstanding payments. Data handover available for 30 days post-termination.`
    },
    {
      id: 11,
      title: "Limitation of Liability",
      content: `Maximum liability limited to fees paid in last 3 months. Not liable for indirect, consequential, or incidental damages. Not responsible for third-party actions or platform changes. Client assumes risk of market changes and business decisions.`
    },
    {
      id: 12,
      title: "Governing Law & Disputes",
      content: `Governed by laws of India. Disputes resolved through negotiation first. Failing negotiation, subject to jurisdiction of courts in Delhi. Both parties bear own legal costs unless court decides otherwise.`
    }
  ];

  const serviceSpecificTerms = [
    {
      service: "Website Development",
      terms: [
        "5-page responsive website standard package",
        "1 year hosting and SSL included",
        "6 months technical support",
        "Additional pages: ₹2,000/page",
        "E-commerce features extra",
        "Source code delivered upon final payment"
      ]
    },
    {
      service: "SEO Services",
      terms: [
        "Minimum 3-month commitment",
        "Monthly ranking reports",
        "5-10 keyword optimization",
        "4 blog posts/month included",
        "Technical SEO audit included",
        "No guaranteed #1 rankings"
      ]
    },
    {
      service: "Social Media Management",
      terms: [
        "15 creative posts/month",
        "2 professional videos/reels",
        "4 platforms management",
        "Content calendar provided",
        "Monthly performance report",
        "Minimum 3-month commitment"
      ]
    },
    {
      service: "Business Setup",
      terms: [
        "Complete digital presence setup",
        "45-60 day delivery timeline",
        "3 months free support",
        "Includes website + social media",
        "Market strategy guidance",
        "Industry expert assigned"
      ]
    }
  ];

  const downloadTerms = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("terms-content")?.innerText || ""], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Grworth-Services-Terms-of-Service.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Terms of Service | Grworth Services - Professional Digital Solutions</title>
        <meta
          name="description"
          content="Read Grworth Services' Terms of Service for website development, SEO, social media management, and business setup services. Professional agreements and policies."
        />
        <meta
          name="keywords"
          content="terms of service, website development agreement, SEO services terms, social media management contract, business setup terms, digital solutions agreement"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Shield className="h-5 w-5 mr-2" />
            <span className="text-lg font-semibold">LEGAL TERMS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Terms of <span className="text-cyan-300">Service</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Professional agreements for our website development, SEO, and digital marketing services. 
            Clear, transparent, and designed for mutual success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={downloadTerms}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 flex items-center gap-3"
            >
              <Download className="h-5 w-5" />
              Download Terms
            </button>
            <div className="text-blue-200">
              Last updated: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700">
                These Terms of Service govern your use of Grworth Services' professional digital solutions. 
                By engaging with our services, you agree to these terms. For custom agreements, please contact us.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div id="terms-content" className="space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Terms of Service</h2>
          
          {termsSections.map((section) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold">
                    {section.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="text-gray-500">
                  {expandedSections.includes(section.id) ? '−' : '+'}
                </div>
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service-Specific Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service-Specific Terms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSpecificTerms.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.service}</h3>
                </div>
                
                <ul className="space-y-2">
                  {service.terms.map((term, termIndex) => (
                    <li key={termIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Clear pricing with no hidden fees</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Professional deliverables with ownership transfer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Timely delivery with progress updates</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Data protection and confidentiality</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Ongoing support and maintenance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Transparent communication channels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Clarification?</h2>
          <p className="text-gray-700 mb-6">
            For questions about these terms or to discuss custom agreements, contact our team:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:contact@grworth.com"
              className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-6 rounded-xl text-center transition-colors"
            >
              <div className="flex flex-col items-center gap-3">
                <Mail className="h-8 w-8" />
                <div>
                  <div className="font-bold">Email Us</div>
                  <div className="text-sm text-blue-700">contact@grworth.com</div>
                </div>
              </div>
            </a>
            
            <a
              href="https://wa.me/9779707382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 hover:bg-green-100 text-green-600 p-6 rounded-xl text-center transition-colors"
            >
              <div className="flex flex-col items-center gap-3">
                <MessageCircle className="h-8 w-8" />
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-sm text-green-700">+9779707382481</div>
                </div>
              </div>
            </a>
            
            <a
              href="tel:+9779707382481"
              className="bg-purple-50 hover:bg-purple-100 text-purple-600 p-6 rounded-xl text-center transition-colors"
            >
              <div className="flex flex-col items-center gap-3">
                <Phone className="h-8 w-8" />
                <div>
                  <div className="font-bold">Call Us</div>
                  <div className="text-sm text-purple-700">+9779707382481</div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <strong>Note:</strong> These terms are subject to change. Major updates will be communicated to active clients. 
              For legal advice, please consult with a qualified legal professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
