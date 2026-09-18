"use client";

import React from "react";
import Link from "next/link";
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  CreditCard,
  AlertTriangle,
  Mail,
  Phone,
  Globe,
  FileText,
} from "lucide-react";
import { Container, Breadcrumb, DecorativeGrid } from "@/components/ui";

export const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Refund & Cancellation Policy" }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <RotateCcw className="w-4 h-4 text-yellow-400" />
              <span>Commercial Terms &amp; Conditions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Refund &amp; Cancellation Policy — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Growth Service Digital Solutions</span>
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
                This policy explains how Growth Service Digital Solutions (&quot;Growth Service,&quot; &quot;we,&quot; &quot;us&quot;) handles cancellations and refunds for our services — performance SEO, web/app development, performance marketing (PPC), social media marketing, e-commerce solutions, and white-label fulfillment (collectively, &quot;Services&quot;).
              </p>
              <p>
                As our Services are customized and largely service/labor-based (not physical products), refunds are handled differently from typical e-commerce purchases, as detailed below.
              </p>
            </div>

            {/* 1. Payment Confirmation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-600 shrink-0" />
                <span>1. Payment Confirmation</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Once a payment is successfully made through our website (processed via PhonePe), you&apos;ll receive a confirmation email/invoice. Please retain this for reference.
              </p>
            </div>

            {/* 2. Cancellation Policy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-purple-600 shrink-0" />
                <span>2. Cancellation Policy</span>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong>Before work begins:</strong> If you cancel before we&apos;ve started any work, you&apos;re eligible for a full refund, minus any payment gateway/transaction charges already incurred.
                </li>
                <li>
                  <strong>After work has begun:</strong> If work has already commenced, you may cancel the remaining scope. Charges for work completed, hours spent, or resources already deployed (e.g., ad spend, third-party tool/license fees, domain/hosting costs) up to the cancellation date will be deducted, and only the remaining unused balance (if any) will be refunded.
                </li>
                <li>
                  Cancellation requests must be sent in writing to{" "}
                  <a
                    href="mailto:info@growthservice.in"
                    className="text-purple-700 font-semibold underline hover:text-purple-900"
                  >
                    info@growthservice.in
                  </a>
                  .
                </li>
              </ul>
            </div>

            {/* 3. Refund Eligibility */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>3. Refund Eligibility</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You may be eligible for a refund if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>A duplicate payment was made in error for the same service</li>
                <li>Payment was charged but the Service was never initiated or delivered</li>
                <li>A technical error resulted in an incorrect/failed transaction where the amount was debited but not reflected on our end</li>
                <li>The service was cancelled before commencement, as per Section 2</li>
              </ul>
            </div>

            {/* 4. Non-Refundable Situations */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>4. Non-Refundable Situations</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Refunds are generally <strong>not</strong> provided for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Services already delivered/completed as per the agreed scope</li>
                <li>Advertising spend already paid to third-party platforms (Google Ads, Meta Ads, etc.)</li>
                <li>Domain names, hosting, software licenses, or other third-party costs already purchased on your behalf</li>
                <li>Change of mind after work has substantially progressed</li>
                <li>
                  Dissatisfaction with results where the agreed scope was delivered as specified (see &quot;No Guarantee of Results&quot; in our{" "}
                  <Link href="/terms" className="text-purple-700 underline hover:text-purple-900 font-semibold">
                    Terms &amp; Conditions
                  </Link>
                  )
                </li>
              </ul>
            </div>

            {/* 5. How to Request a Refund */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600 shrink-0" />
                <span>5. How to Request a Refund</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Email us at{" "}
                <a
                  href="mailto:info@growthservice.in"
                  className="text-purple-700 font-semibold underline hover:text-purple-900"
                >
                  info@growthservice.in
                </a>{" "}
                with your transaction ID/invoice number and reason for the request. We aim to acknowledge all requests within [2] business days.
              </p>
            </div>

            {/* 6. Refund Timeline & Mode */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600 shrink-0" />
                <span>6. Refund Timeline &amp; Mode</span>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Approved refunds are processed within [5–7] business days of approval.</li>
                <li>Refunds are issued to the original payment method used at checkout, via PhonePe, and may take an additional [3–5] business days to reflect in your account depending on your bank/UPI provider.</li>
              </ul>
            </div>

            {/* 7. Failed or Pending Transactions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>7. Failed or Pending Transactions</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                If an amount is debited but the transaction shows as failed or pending on our website, please wait 24–48 hours — such amounts are usually auto-reversed by the bank/PhonePe. If unresolved after that, contact us with your transaction reference number.
              </p>
            </div>

            {/* 8. Contact Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600 shrink-0" />
                <span>8. Contact Us</span>
              </h2>
              <div className="space-y-2 text-gray-800 text-sm sm:text-base">
                <p className="font-semibold text-gray-900">Growth Service Digital Solutions</p>
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
                href="/terms"
                className="text-purple-700 font-semibold hover:text-purple-900 underline"
              >
                View Terms &amp; Conditions →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RefundPolicy;
