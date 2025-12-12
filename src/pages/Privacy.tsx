import React, { useState } from "react";

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy & Terms</h1>
          <p className="text-pink-100 text-lg md:text-xl">
            How Social Lift protects your information and our service policies.
          </p>
          <p className="text-sm text-blue-200 mt-2">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "privacy" 
                ? "bg-white text-pink-600 shadow-lg" 
                : "bg-pink-700 text-white hover:bg-pink-600"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("refund")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "refund" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Refund Policy
            </button>
            <button
              onClick={() => setActiveTab("cancellation")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "cancellation" 
                ? "bg-white text-purple-600 shadow-lg" 
                : "bg-purple-700 text-white hover:bg-purple-600"
              }`}
            >
              Cancellation Policy
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      {activeTab === "privacy" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Intro */}
            <div>
              <p>
                This Privacy Policy explains how <strong>Social Lift Digital Marketing Agency</strong> ("we", "us", "our") collects,
                uses, discloses, and safeguards personal information when you visit our website, engage
                with our digital marketing campaigns, or use our services. By using our website/services,
                you agree to this Policy. If you do not agree, please discontinue use.
              </p>
              <div className="mt-4 bg-pink-50 border border-pink-100 rounded-xl p-4 text-sm text-pink-900">
                <strong>Regulatory note:</strong> We strive to comply with applicable laws, including
                India's Digital Personal Data Protection (DPDP) Act and, where relevant, GDPR. References
                below to "lawful basis" and "data principal rights" reflect these standards.
              </div>
            </div>

            {/* What we collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Identity & Contact:</strong> name, email, phone, company, role.</li>
                <li><strong>Business & Content:</strong> project brief, brand assets you share.</li>
                <li><strong>Technical:</strong> IP address, device/browser info, pages viewed, referrer URLs, session data.</li>
                <li><strong>Usage & Analytics:</strong> interactions with pages, forms, CTAs; events/pixels (GA4, Meta, etc.).</li>
                <li><strong>Marketing:</strong> preferences, consent, campaign engagement (opens, clicks, conversions).</li>
                <li><strong>Payment/Commercial:</strong> invoices, transaction metadata (processed via third-party gateways; we do not store card data).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Sensitive personal data is not intentionally collected. Please avoid sharing it.
              </p>
            </div>

            {/* Sources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Sources of Data</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Direct:</strong> forms, emails, WhatsApp, calls, meetings.</li>
                <li><strong>Automated:</strong> cookies, tags, analytics, pixels.</li>
                <li><strong>Third-Party:</strong> ad platforms, CRM or lead gen tools you connect/provide.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Cookies & Similar Technologies</h2>
              <p className="mb-2">
                We use cookies, pixels, and tags to enable site functionality, remember preferences,
                analyze performance, and measure/optimize campaigns.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential:</strong> required for core functionality.</li>
                <li><strong>Analytics:</strong> GA4/GTM events, traffic sources, on-site behavior.</li>
                <li><strong>Marketing:</strong> remarketing/conversion pixels (e.g., Google Ads, Meta).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                You can manage cookies via your browser settings. Some features may not work without certain cookies.
              </p>
            </div>

            {/* How we use */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4) How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and improve our website and services.</li>
                <li>Respond to inquiries, proposals, and support requests.</li>
                <li>Plan, execute, and optimize campaigns; measure performance/ROI.</li>
                <li>Personalize experiences and recommend relevant services.</li>
                <li>Security, fraud prevention, troubleshooting, and diagnostics.</li>
                <li>Legal compliance and enforcement of our Terms/Agreement.</li>
              </ul>
            </div>

            {/* Lawful basis */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Legal Bases / Consent</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Consent:</strong> marketing communications, non-essential cookies.</li>
                <li><strong>Contract:</strong> to deliver services requested/paid for.</li>
                <li><strong>Legitimate Interest:</strong> analytics, security, product improvement.</li>
                <li><strong>Legal Obligation:</strong> taxation, accounting, compliance.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                You may withdraw consent at any time (see "Your Rights" below).
              </p>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6) How We Share Information</h2>
              <p className="mb-2">
                We do not sell personal data. We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Processors/Vendors:</strong> hosting, CDN, analytics (GA4/GTM), ad platforms (Google, Meta), CRM/email tools, payment gateways, project tools.</li>
                <li><strong>Partners/Sub-contractors:</strong> only as needed for agreed work, under confidentiality and DP terms.</li>
                <li><strong>Legal/Compliance:</strong> when required by law or to protect rights/safety.</li>
              </ul>
            </div>

            {/* International transfer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7) International Transfers</h2>
              <p>
                Vendors may process data in other countries. We take reasonable steps to ensure appropriate
                safeguards (e.g., contractual protections) consistent with applicable law.
              </p>
            </div>

            {/* Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Data Retention</h2>
              <p>
                We retain data only for as long as necessary for the purposes above or as required by law.
                Typical retention: marketing contacts up to 24 months of last interaction; project records
                aligned with statutory/accounting obligations.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Security</h2>
              <p>
                We use reasonable technical and organizational measures to protect data (access controls,
                encryption in transit, least-privilege practices). No system is 100% secure; please share
                credentials via secure methods (password managers).
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Children's Privacy</h2>
              <p>
                Our services are intended for business users. We do not knowingly collect data from
                children under applicable age thresholds.
              </p>
            </div>

            {/* Your rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Your Rights</h2>
              <p className="mb-2">
                Subject to law, you may have the right to: access, correct, update, delete, restrict or
                object to processing, withdraw consent, and request data portability.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access/Correction:</strong> get a copy of your data or ask us to fix inaccuracies.</li>
                <li><strong>Deletion ("Right to be Forgotten"):</strong> request erasure where legally permitted.</li>
                <li><strong>Consent Management:</strong> opt-out of marketing or withdraw cookie consent.</li>
                <li><strong>Objection/Restriction:</strong> where we rely on legitimate interests.</li>
                <li><strong>Portability:</strong> receive data in a commonly used format where feasible.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                We may verify your identity before actioning requests and may retain limited data as required by law.
              </p>
            </div>

            {/* How to exercise */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">12) How to Contact / Exercise Rights</h2>
              <p>
                Email <a className="text-pink-700 underline" href="mailto:Sociallift91@Gmail.com">Sociallift91@Gmail.com</a> or call{" "}
                <a className="text-pink-700 underline" href="tel:+917428606849">+91 7428606849</a>. We aim to respond within 7 business days.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Address: Social Lift Digital Marketing Agency, Professional Services Across India
              </p>
            </div>

            {/* Marketing choices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Marketing Preferences</h2>
              <p>
                You can unsubscribe from emails using the footer link or by contacting us. For ads
                preferences, adjust settings in Google/Meta or your device's ad settings.
              </p>
            </div>

            {/* Third-party links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">14) Third-Party Websites</h2>
              <p>
                Our site may link to external sites we do not control. Their privacy practices apply to
                their content and services.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">15) Changes to This Policy</h2>
              <p>
                We may update this Policy from time to time. Material changes will be posted here with an
                updated "Last updated" date. Continued use signifies acceptance.
              </p>
            </div>

            {/* Summary card */}
            <div className="border rounded-xl p-5 bg-pink-50 border-pink-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Summary</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>We collect contact, usage/analytics, and project data to deliver & improve services.</li>
                <li>We use cookies/pixels (GA4, Google/Meta) with consent and provide opt-outs.</li>
                <li>We don't sell personal data; we share with vetted processors/vendors as needed.</li>
                <li>You have rights to access, correct, delete, object/restrict, and withdraw consent.</li>
              </ul>
            </div>

            <p className="text-xs text-gray-500">
              Disclaimer: This template is for general guidance and not legal advice. Please review with legal counsel.
            </p>
          </div>
        </section>
      )}

      {/* Refund Policy Content */}
      {activeTab === "refund" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Policy</h2>
              <p className="text-lg text-gray-600">Our transparent refund policy for digital marketing services</p>
            </div>

            {/* General Refund Policy */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">General Refund Policy</h3>
              <p className="text-blue-800">
                At Social Lift Digital Marketing Agency, we strive to deliver exceptional results. However, 
                we understand that circumstances may require refund considerations under specific conditions.
              </p>
            </div>

            {/* Eligible for Refund */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Refunds Are Considered</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Service Not Initiated</h4>
                  <p className="text-green-700">
                    Full refund if payment is made but services haven't started and no resources have been allocated.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Technical Failure</h4>
                  <p className="text-green-700">
                    Partial or full refund if we're unable to deliver due to technical limitations on our end.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Service Cancellation Before Delivery</h4>
                  <p className="text-green-700">
                    Pro-rated refund based on work completed if cancellation occurs before project completion.
                  </p>
                </div>
              </div>
            </div>

            {/* Not Eligible for Refund */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Refunds Are Not Provided</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Services Already Rendered</h4>
                  <p className="text-red-700">
                    No refund for work already completed, including strategy sessions, content creation, 
                    or campaign setup.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Change of Mind</h4>
                  <p className="text-red-700">
                    Refunds aren't provided simply because you changed your mind after services have commenced.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Third-Party Costs</h4>
                  <p className="text-red-700">
                    Costs incurred for third-party services (ads spend, software subscriptions, stock assets) 
                    are non-refundable.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Results-Based Expectations</h4>
                  <p className="text-red-700">
                    Digital marketing results vary. Refunds aren't guaranteed based on specific ROI or 
                    performance metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <p className="font-semibold">Submit Refund Request</p>
                    <p className="text-gray-600">Email Sociallift91@Gmail.com with your request and reason</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <p className="font-semibold">Review Period</p>
                    <p className="text-gray-600">We'll review your request within 3-5 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <p className="font-semibold">Decision & Processing</p>
                    <p className="text-gray-600">If approved, refund processed within 7-10 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service-Specific Policies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service-Specific Refund Policies</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Monthly Services (Social Media, SEO, Ads)</h4>
                  <p className="text-gray-700">
                    Pro-rated refund for unused portion of the month if cancelled before the 15th. 
                    No refund for partial months after the 15th.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">One-Time Services (Website, Setup)</h4>
                  <p className="text-gray-700">
                    50% refund if cancelled before work begins. 25% refund if cancelled during development. 
                    No refund after project completion.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Package Deals</h4>
                  <p className="text-gray-700">
                    Refund calculated based on individual service rates minus work completed. 
                    Package discounts are forfeited in refund calculations.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help with Refund?</h3>
              <p className="text-gray-700 mb-4">
                Contact us for any refund-related queries or disputes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:Sociallift91@Gmail.com" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Email Us
                </a>
                <a 
                  href="https://wa.me/917428606849" 
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cancellation Policy Content */}
      {activeTab === "cancellation" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
              <p className="text-lg text-gray-600">Our transparent service cancellation and modification policies</p>
            </div>

            {/* General Cancellation Policy */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">General Cancellation Policy</h3>
              <p className="text-purple-800">
                We understand that business needs change. Our cancellation policy is designed to be fair 
                to both parties while ensuring proper resource allocation and project planning.
              </p>
            </div>

            {/* Service Cancellation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Cancellation</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Monthly Retainer Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>30-day written notice required for cancellation</li>
                    <li>Services continue until the end of the current billing cycle</li>
                    <li>No pro-rated refunds for partial months</li>
                    <li>Minimum 3-month commitment applies to all monthly services</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Project-Based Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cancellation allowed during first 25% of project timeline</li>
                    <li>Client responsible for costs incurred up to cancellation point</li>
                    <li>All project materials and work completed remain our property</li>
                    <li>50% cancellation fee if cancelled after project kickoff</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">One-Time Setup Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cancellation possible before service initiation</li>
                    <li>25% administrative fee for cancellations after payment</li>
                    <li>No cancellation after service delivery has begun</li>
                    <li>Setup fees are generally non-refundable once work commences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modification Policy */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Modification</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Service Upgrades</h4>
                  <p className="text-green-700">
                    You can upgrade your service package at any time. The new rate applies from the 
                    next billing cycle or immediately for one-time services.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Service Downgrades</h4>
                  <p className="text-yellow-700">
                    Service downgrades require 30-day notice and may be subject to re-evaluation 
                    of current project scope and deliverables.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Scope Changes</h4>
                  <p className="text-blue-700">
                    Significant changes to project scope may require contract amendment and 
                    potential price adjustment. Minor adjustments are accommodated when possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Cancellation Process */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Process</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <p className="font-semibold">Written Notice</p>
                    <p className="text-gray-600">Send cancellation request via email to Sociallift91@Gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <p className="font-semibold">Acknowledgement</p>
                    <p className="text-gray-600">We'll acknowledge receipt within 24 business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <p className="font-semibold">Final Settlement</p>
                    <p className="text-gray-600">Any final invoices or refunds processed within 10 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</div>
                  <div>
                    <p className="font-semibold">Service Termination</p>
                    <p className="text-gray-600">Services officially terminate at the end of current billing cycle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Immediate Termination</h4>
                  <p className="text-red-700">
                    We reserve the right to immediately terminate services for:
                    Non-payment, abusive behavior, illegal activities, or violation of terms of service.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Data Retention</h4>
                  <p className="text-yellow-700">
                    Upon cancellation, we retain project data for 90 days. Client is responsible for 
                    backing up any needed materials before cancellation date.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Reactivation</h4>
                  <p className="text-blue-700">
                    Reactivation of cancelled services may require new onboarding and current pricing. 
                    Previous promotional rates may not apply.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Cancellation */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Need to Cancel or Modify Services?</h3>
              <p className="text-gray-700 mb-4">
                Contact us for cancellation requests or service modifications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:Sociallift91@Gmail.com" 
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  Email Cancellation Request
                </a>
                <a 
                  href="https://wa.me/917428606849" 
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Privacy;