"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Clock,
  Briefcase,
  Layers,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { Container, Breadcrumb, DecorativeGrid } from "@/components/ui";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Terms & Conditions" }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <FileText className="w-4 h-4 text-yellow-400" />
              <span>Legal Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Terms &amp; Conditions — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Growth Service Digital Solutions</span>
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
                These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of{" "}
                <a
                  href="https://growthservice.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 font-semibold underline hover:text-purple-900"
                >
                  https://growthservice.in
                </a>{" "}
                and the services offered by Growth Service Digital Solutions (&quot;Growth Service,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), including performance SEO, web/app development, performance marketing (PPC), social media marketing, e-commerce solutions, and white-label fulfillment (collectively, &quot;Services&quot;). By accessing our website or engaging our Services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* 1. Eligibility */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-600 shrink-0" />
                <span>1. Eligibility</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our Services are intended for businesses and individuals who are at least 18 years old and capable of entering a legally binding agreement.
              </p>
            </div>

            {/* 2. Services */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-600 shrink-0" />
                <span>2. Services</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Growth Service provides digital marketing and technology services as described on our website. Exact scope, deliverables, and timelines for any engagement will be confirmed separately in writing (email or signed proposal).
              </p>
            </div>

            {/* 3. Payments */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-600 shrink-0" />
                <span>3. Payments</span>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Fees are as quoted in the applicable proposal, invoice, or plan shown on our website.</li>
                <li>Payments made on our website are processed securely through our payment partner, PhonePe.</li>
                <li>All fees are exclusive of applicable taxes (e.g., GST) unless stated otherwise.</li>
                <li>For ongoing/retainer services, invoices are billed [monthly / as agreed] and due within the period stated on the invoice.</li>
                <li>Non-payment may result in suspension or termination of Services.</li>
              </ul>
            </div>

            {/* 4. Client Responsibilities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span>4. Client Responsibilities</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Clients agree to provide timely access, information, content, and approvals needed for us to deliver the Services. Delays caused by the client may affect delivery timelines.
              </p>
            </div>

            {/* 5. Intellectual Property */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600 shrink-0" />
                <span>5. Intellectual Property</span>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Unless otherwise agreed in writing, final deliverables (e.g., website code, creative assets) become the client&apos;s property upon full payment.</li>
                <li>Growth Service may showcase completed work in its portfolio, case studies, and marketing materials unless the client requests confidentiality in writing.</li>
                <li>Any pre-existing tools, frameworks, or proprietary processes used by Growth Service remain our property.</li>
              </ul>
            </div>

            {/* 6. Third-Party Platforms and Ad Spend */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600 shrink-0" />
                <span>6. Third-Party Platforms and Ad Spend</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Where Services involve third-party platforms (Google Ads, Meta Ads, hosting providers, domain registrars, etc.), any ad spend or third-party subscription/license fees are separate from our service fees and are non-refundable once spent or paid to the respective platform.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                <span>7. Limitation of Liability</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To the maximum extent permitted by law, Growth Service is not liable for indirect, incidental, or consequential damages, including loss of revenue, data, or business opportunities, arising from use of our website or Services. Our total liability for any claim will not exceed the amount paid by the client for the specific Service giving rise to the claim.
              </p>
            </div>

            {/* 8. No Guarantee of Results */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>8. No Guarantee of Results</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                While we apply industry best practices, digital marketing and SEO results (rankings, traffic, conversions) depend on external factors — search engine algorithms, market competition, ad platform policies — beyond our control. We do not guarantee specific results, rankings, or ROI.
              </p>
            </div>

            {/* 9. Termination */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600 shrink-0" />
                <span>9. Termination</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Either party may terminate an ongoing engagement per the notice period specified in the relevant proposal/contract, or with [X days&apos;] written notice where none is agreed. Fees for work completed up to the termination date remain payable.
              </p>
            </div>

            {/* 10. Indemnification */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-purple-600 shrink-0" />
                <span>10. Indemnification</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You agree to indemnify and hold Growth Service harmless from claims, damages, or expenses arising from your breach of these Terms or misuse of our Services.
              </p>
            </div>

            {/* 11. Governing Law & Jurisdiction */}
            <div className="bg-purple-50/60 rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-purple-700 shrink-0" />
                <span>11. Governing Law &amp; Jurisdiction</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at Jaipur, Rajasthan.
              </p>
            </div>

            {/* 12. Changes to These Terms */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                <span>12. Changes to These Terms</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We may revise these Terms periodically. Continued use of our website or Services after changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 13. Contact Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600 shrink-0" />
                <span>13. Contact Us</span>
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
                href="/privacy"
                className="text-purple-700 font-semibold hover:text-purple-900 underline"
              >
                ← View Privacy Policy
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

export default Terms;
