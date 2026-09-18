"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  Mail,
  Phone,
  MapPin,
  UserCheck,
  CreditCard,
  Globe,
  Cookie,
  AlertCircle,
} from "lucide-react";
import { Container, Breadcrumb, DecorativeGrid } from "@/components/ui";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Privacy Policy" }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Lock className="w-4 h-4 text-yellow-400" />
              <span>Official Privacy Policy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Privacy Policy — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Growth Service Digital Solutions</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-purple-200 mt-2">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-yellow-400" />
                <strong>Website:</strong>{" "}
                <a
                  href="https://growthservice.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  https://growthservice.in
                </a>
              </span>
              <span className="hidden sm:inline text-purple-400">•</span>
              <span>
                <strong>Last Updated:</strong> September 18, 2026
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Legal Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Preamble */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm leading-relaxed text-gray-700 space-y-4">
              <p>
                Growth Service Digital Solutions (&quot;Growth Service,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of visitors to our website and clients who use our services — including performance SEO, web and app development, performance marketing (PPC), social media marketing, e-commerce solutions, and white-label fulfillment (collectively, the &quot;Services&quot;). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
              </p>
              <p className="font-medium text-gray-900">
                By using our website or Services, you agree to the collection and use of information as described in this policy.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                <span>1. Information We Collect</span>
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">a) Information you provide to us</h3>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base">
                    <li>Name, email address, phone number, and company details submitted through contact forms, quote requests, or during client onboarding</li>
                    <li>Billing and invoicing details</li>
                    <li>Any content, credentials, or access you share with us to deliver Services (e.g., website/CMS access, ad account access)</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-gray-900 mb-2">b) Information collected automatically</h3>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base">
                    <li>IP address, browser type, device information, pages visited, and time spent on our site, collected via cookies and analytics tools (e.g., Google Analytics)</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>c) Payment information</span>
                  </h3>
                  <p className="text-sm sm:text-base">
                    We do not store your card, UPI, or net-banking details on our servers. All payments made through our website are processed by our payment gateway partner, PhonePe, which handles and secures your payment data in accordance with its own privacy policy and applicable RBI guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                <span>2. How We Use Your Information</span>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Provide, operate, and improve our Services</li>
                <li>Respond to inquiries and provide client support</li>
                <li>Process payments and send invoices/receipts</li>
                <li>Send updates about your project, service, or account</li>
                <li>Send marketing communications (only where you&apos;ve opted in; you can opt out anytime)</li>
                <li>Comply with legal obligations and enforce our Terms &amp; Conditions</li>
              </ul>
            </div>

            {/* 3. How We Share Your Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                <span>3. How We Share Your Information</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We do not sell your personal information. We may share it with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong>Payment processors</strong> (PhonePe) to complete transactions
                </li>
                <li>
                  <strong>Third-party tools/platforms</strong> used to deliver Services (e.g., Google Ads, Meta Ads, hosting providers, analytics tools), strictly as needed
                </li>
                <li>
                  <strong>Government or regulatory authorities</strong>, where required by law
                </li>
              </ul>
            </div>

            {/* 4. Cookies */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-purple-600 shrink-0" />
                <span>4. Cookies</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our website uses cookies and similar technologies to improve browsing experience and analyze traffic. You can control cookies via your browser settings; disabling them may affect some site functions.
              </p>
            </div>

            {/* 5. Data Security */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-600 shrink-0" />
                <span>5. Data Security</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We use reasonable technical and organizational safeguards to protect your information against unauthorized access, alteration, or disclosure. No method of transmission over the internet is 100% secure.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                <span>6. Data Retention</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We retain personal information only as long as necessary for the purposes described here or as required by law.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-600 shrink-0" />
                <span>7. Your Rights</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You may request access to, correction of, or deletion of your personal information by contacting us at{" "}
                <a
                  href="mailto:info@growthservice.in"
                  className="text-purple-700 font-semibold underline hover:text-purple-900"
                >
                  info@growthservice.in
                </a>
                . We will respond within a reasonable timeframe as required under applicable Indian law.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600 shrink-0" />
                <span>8. Third-Party Links</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our website may link to third-party sites. We are not responsible for their privacy practices.
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-600 shrink-0" />
                <span>9. Children&apos;s Privacy</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our Services are not directed at individuals under 18. We do not knowingly collect information from minors.
              </p>
            </div>

            {/* 10. Grievance Officer */}
            <div className="bg-purple-50/60 rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-700 shrink-0" />
                <span>10. Grievance Officer</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                In accordance with the Information Technology Act, 2000 and rules made thereunder:
              </p>
              <div className="space-y-1.5 text-sm sm:text-base text-gray-800 font-medium pt-1">
                <p>
                  <strong>Name:</strong> Aashish Kumar Singh
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@growthservice.in"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    info@growthservice.in
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> JTM Mall, Jagatpura, Jaipur, 302017
                </p>
              </div>
            </div>

            {/* 11. Changes to This Policy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                <span>11. Changes to This Policy</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted here with a revised &quot;Last Updated&quot; date.
              </p>
            </div>

            {/* 12. Contact Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600 shrink-0" />
                <span>12. Contact Us</span>
              </h2>
              <div className="space-y-2 text-gray-800 text-sm sm:text-base">
                <p className="font-semibold text-gray-900">Growth Service Digital Solutions</p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                  <span>JTM Mall, Jagatpura, Jaipur, 302017</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:info@growthservice.in"
                      className="text-purple-700 font-semibold underline hover:text-purple-900"
                    >
                      info@growthservice.in
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>
                    Phone:{" "}
                    <a
                      href="tel:+916207300553"
                      className="text-purple-700 font-semibold underline hover:text-purple-900"
                    >
                      +91 6207300553
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Navigation links to other policies */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 text-sm">
              <Link
                href="/terms"
                className="text-purple-700 font-semibold hover:text-purple-900 underline"
              >
                ← View Terms &amp; Conditions
              </Link>
              <Link
                href="/refund"
                className="text-purple-700 font-semibold hover:text-purple-900 underline"
              >
                View Refund &amp; Cancellation Policy →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Privacy;