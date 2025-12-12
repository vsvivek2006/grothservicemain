import React from "react";
import { 
  FileText, CheckCircle, Clock, Shield, 
  DollarSign, TrendingUp, MessageCircle, 
  Users, Target, Zap, AlertCircle, Download,
  Building, Globe, Smartphone, CreditCard,
  Mail, Phone, ExternalLink
} from "lucide-react";

const OnboardingAgreement: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownloadPDF = () => {
    // This would generate/download PDF in production
    alert("PDF agreement would be downloaded. In production, this would generate a PDF.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Service Onboarding Agreement
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              Clear guidelines for successful collaboration on your digital projects
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                📅 Last Updated: {currentDate}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                🏢 Growth Service Agency
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                📱 +91 93414 36937
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={handleDownloadPDF}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF Version
          </button>
          <a
            href="tel:+919341436937"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call for Questions
          </a>
          <a
            href="mailto:info@growthservice.in"
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email Queries
          </a>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Building className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to Growth Service</h2>
              <p className="text-gray-600">
                This Onboarding Agreement outlines our working relationship, responsibilities, 
                and processes to ensure successful project delivery and ongoing collaboration.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <p className="text-sm text-blue-800">
                This agreement supplements your specific Service Proposal. In case of any discrepancy, 
                the signed Proposal and Terms of Service take precedence.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="h-6 w-6 mr-2 text-blue-600" />
            Services Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Website Development",
                price: "₹9,999+",
                features: ["7-10 days delivery", "React/TypeScript", "Mobile responsive", "SEO optimized"]
              },
              {
                title: "SEO Services",
                price: "₹7,779/month",
                features: ["4 monthly reports", "4 blog articles", "Keyword optimization", "Performance tracking"]
              },
              {
                title: "Social Media Management",
                price: "₹4,449/month",
                features: ["Content calendar", "Daily posts", "Engagement management", "Analytics reports"]
              },
              {
                title: "Google Business Profile",
                price: "₹2,499",
                features: ["Profile setup", "Review management", "Local SEO", "Photo optimization"]
              },
              {
                title: "Meta Ads Management",
                price: "₹9,999/month",
                features: ["Campaign strategy", "Ad creative", "Audience targeting", "ROI tracking"]
              },
              {
                title: "Lead Generation",
                price: "₹6,000/month",
                features: ["Lead strategy", "Campaign setup", "CRM integration", "Conversion tracking"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-2 py-1 rounded">
                    {service.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Agreement Sections */}
        <div className="space-y-8">
          {/* Section 1: Client Responsibilities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">1. Client Responsibilities</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Required Assets & Access</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Brand assets (logo, colors, fonts, guidelines)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Business information and target audience details
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Access to necessary accounts (CMS, social media, analytics)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Content and copy materials
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Timely feedback and approvals (within 2-3 business days)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Project Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">2. Project Timeline & Milestones</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { phase: "Discovery & Planning", duration: "2-3 days", tasks: ["Requirements analysis", "Strategy development"] },
                  { phase: "Design & Development", duration: "7-10 days", tasks: ["UI/UX design", "Development"] },
                  { phase: "Review & Testing", duration: "3-4 days", tasks: ["Client review", "Testing & QA"] },
                  { phase: "Launch & Support", duration: "1-2 days", tasks: ["Deployment", "Post-launch support"] }
                ].map((phase, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="text-sm font-semibold text-blue-600 mb-1">Phase {index + 1}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <div className="text-xs text-gray-500 mb-3">{phase.duration}</div>
                    <ul className="space-y-1">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="text-xs text-gray-600">• {task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Timelines are estimates. Delays in asset delivery or approvals may extend project duration.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Payment Terms */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">3. Payment Terms</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Project-Based</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>50% advance to commence work</li>
                    <li>50% upon completion before launch</li>
                    <li>Additional milestones for larger projects</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Monthly Retainers</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Pre-paid monthly billing</li>
                    <li>Auto-renew unless cancelled</li>
                    <li>7-day notice for cancellation</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>UPI payments</li>
                    <li>Bank transfer</li>
                    <li>Credit/Debit cards</li>
                    <li>Online payment gateways</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Communication & Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">4. Communication & Support</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Primary Channels</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
                      WhatsApp: +977 97073824881
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-500 mr-2" />
                      Email: info@growthservice.in
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-4 w-4 text-purple-500 mr-2" />
                      Phone: +91 93414 36937
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Times</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Standard queries: 24-48 business hours</li>
                    <li>Urgent issues: 4-6 hours response</li>
                    <li>Critical emergencies: Immediate attention</li>
                    <li>Regular sync calls: Weekly/Bi-weekly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Scope & Changes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">5. Scope Management</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Change Request Process</h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Submit change request in writing</li>
                  <li>2. We assess impact on timeline & cost</li>
                  <li>3. Provide revised quote & timeline</li>
                  <li>4. Approval & implementation</li>
                </ol>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-blue-800">
                  Additional work outside original scope will be quoted separately. 
                  All changes require written approval before implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Deliverables & Approval */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">6. Deliverables & Approval Process</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review & Approval</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Up to 2 revision rounds per deliverable</li>
                    <li>48-hour review period for each submission</li>
                    <li>Final approval required in writing</li>
                    <li>Delayed approvals may impact timelines</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Post-Launch Support</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>14-day warranty period for fixes</li>
                    <li>Documentation & training provided</li>
                    <li>Handover of all assets & credentials</li>
                    <li>Optional maintenance packages available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Confidentiality */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">7. Confidentiality & Data Protection</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    All client information treated as confidential
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Data used only for project purposes
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Secure storage and access protocols
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    Compliance with applicable data protection laws
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Acceptance Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance & Next Steps</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              By proceeding with our services, you acknowledge and agree to the terms outlined in this 
              Onboarding Agreement along with our Terms of Service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownloadPDF}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download & Sign Agreement
              </button>
              
              <a
                href="https://wa.me/97797073824881"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp for Questions
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Need clarification? Contact us at <a href="tel:+919341436937" className="text-blue-600">+91 93414 36937</a> or <a href="mailto:info@growthservice.in" className="text-blue-600">info@growthservice.in</a>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Growth Service | Vrindavan, Mathura | GSTIN: 09AA******1Z5 | MSME Registered
          </p>
          <p className="text-xs text-gray-400 mt-2">
            This document is for informational purposes and does not constitute legal advice.
            Please consult with legal counsel for specific legal guidance.
          </p>
        </div>
      </div>

      {/* Mobile Optimizations */}
      <style jsx>{`
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
          }
          
          .grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default OnboardingAgreement;
