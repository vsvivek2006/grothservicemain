import React from 'react';
import { Helmet } from 'react-helmet';
import { ShieldCheck, AlertTriangle, CheckCircle, Mail, Phone, ExternalLink, HelpCircle, XCircle } from 'lucide-react';
import { Container } from '../components/ui';
import Breadcrumb from '../components/ui/Breadcrumb';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { businessConfig } from '../config/business';

const TrustVerification: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Trust, Verification & Scam Alert | Growth Service</title>
        <meta 
          name="description" 
          content="Official verification portal for Growth Service. Verify official representatives, payment channels, and report impersonation or fraud attempts." 
        />
        <link rel="canonical" href="https://www.growthservice.in/verify" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: 'Security & Verification' }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <span>Official Verification & Security Center</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Verify Authenticity & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-300">Scam Alert</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Protect yourself from impersonators and unauthorized solicitors. Use this official page to confirm representative credentials, official payment gateways, and report suspicious activities.
            </p>
          </div>
        </Container>
      </section>

      {/* Verification Directives */}
      <section className="py-16 bg-white">
        <Container variant="narrow" className="text-gray-700 space-y-12">
          {/* Official Domain & Contact Box */}
          <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
              Authoritative Official Channels
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Growth Service operates <strong>exclusively</strong> through the following domain and communications:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                <div className="text-xs uppercase text-gray-400 font-bold mb-1">Official Website Domain</div>
                <div className="font-mono font-bold text-purple-700 text-base">growthservice.in</div>
                <div className="text-xs text-gray-500 mt-1">Check the URL bar for HTTPS and exact spelling.</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                <div className="text-xs uppercase text-gray-400 font-bold mb-1">Official Email Addresses</div>
                <div className="font-mono font-bold text-purple-700 text-base">@growthservice.in</div>
                <div className="text-xs text-gray-500 mt-1">We never send official agreements from personal Gmail accounts.</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                <div className="text-xs uppercase text-gray-400 font-bold mb-1">Official Primary Phones</div>
                <div className="font-bold text-gray-900">{businessConfig.phones.indiaPrimary}</div>
                <div className="font-bold text-gray-900">{businessConfig.phones.indiaJaipur}</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                <div className="text-xs uppercase text-gray-400 font-bold mb-1">Verified Offices</div>
                <div className="font-semibold text-gray-800">Jaipur, Rajasthan (India)</div>
                <div className="font-semibold text-gray-800">Vrindavan, Uttar Pradesh (India)</div>
                <div className="font-semibold text-gray-800">Bariyarpatti, Siraha (Nepal)</div>
              </div>
            </div>
          </div>

          {/* Scam Alert Warnings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
              Recognize Common Impersonation Scams
            </h2>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                <div className="font-bold text-red-900 mb-1 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Paid Task / Telegram Part-Time Job Scams</span>
                </div>
                <p className="text-red-800">
                  Scammers frequently impersonate digital agencies offering "daily YouTube like tasks" or "Google review jobs" on Telegram or WhatsApp requiring advance deposits. <strong>Growth Service NEVER operates such schemes or requests money from job applicants.</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <div className="font-bold text-amber-900 mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Personal Bank Account Payment Requests</span>
                </div>
                <p className="text-amber-800">
                  All official invoices and payments for Growth Service are issued via official corporate invoices in the registered name of <strong>Growth Service</strong>. Never transfer funds to personal bank accounts or random UPI QR codes claiming to represent us.
                </p>
              </div>
            </div>
          </div>

          {/* Action: Verify or Report */}
          <div className="border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Take Action
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${businessConfig.emails.primary}?subject=Verification%20Request%20-%20Employee%20or%20Proposal`}
                className="p-6 rounded-2xl border border-purple-200 bg-purple-50/70 hover:bg-purple-100/70 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-1">Verify Staff Member</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Send the name, phone number, and proposal you received to our compliance team for rapid authentication.
                  </p>
                </div>
                <span className="text-sm font-bold text-purple-700 flex items-center gap-1">
                  <span>Send Verification Request</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>

              <a
                href={`mailto:${businessConfig.emails.primary}?subject=Scam%20Report%20-%20Impersonation%20Notice`}
                className="p-6 rounded-2xl border border-red-200 bg-red-50/70 hover:bg-red-100/70 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center mb-3">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-1">Report Suspicious Fraud</div>
                  <p className="text-sm text-gray-600 mb-4">
                    Report unauthorized messages, fake telegram groups, or fraudulent invoices falsely using our brand name.
                  </p>
                </div>
                <span className="text-sm font-bold text-red-700 flex items-center gap-1">
                  <span>Submit Fraud Report</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TrustVerification;
