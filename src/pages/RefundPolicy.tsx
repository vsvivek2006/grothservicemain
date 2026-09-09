import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  DollarSign, ShieldCheck, Clock, AlertCircle, FileText, CheckCircle, Mail, Phone, ArrowRight 
} from 'lucide-react';
import { Container } from '../components/ui';
import Breadcrumb from '../components/ui/Breadcrumb';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { getBusinessEmail } from '../selectors';
import { getMailtoHref } from '../services';

export const RefundPolicy: React.FC = () => {
  const primaryEmail = getBusinessEmail();
  const lastUpdated = "September 2026";

  const policies = [
    {
      id: 1,
      title: "1. Overview & General Policy",
      content: `At Growth Service ("we," "us," or "our"), we strive to provide high-quality digital marketing, search engine optimization (SEO), and web development services. Due to the bespoke, consultative, and labor-intensive nature of digital marketing and software engineering, refunds are handled in accordance with the specific service category and project milestone stage.`
    },
    {
      id: 2,
      title: "2. Web Development & Engineering Projects",
      content: `For fixed-scope web development, UI/UX design, and software engineering projects:
• Discovery & Milestone Deposits: Initial project kickoff deposits cover technical scoping, UI/UX architecture, and sprint planning and are generally non-refundable once project work has commenced.
• Milestone Approvals: Project fees are billed in milestones. Once a milestone (e.g., wireframe approval, frontend design freeze, beta deployment) is approved by the client in writing, fees for that milestone are non-refundable.
• Pre-Commencement Cancellation: If a project is cancelled prior to any technical work, design drafts, or server provisioning taking place, a full refund less any payment processor transaction fees will be issued.`
    },
    {
      id: 3,
      title: "3. Monthly Retainer Services (SEO, PPC & Social Media)",
      content: `For recurring monthly retainer packages:
• Cancellation Notice: Monthly marketing retainers require a 30-day written notice prior to the start of the next billing cycle.
• Active Billing Cycle: Fees paid for the current billing cycle during which campaigns, audits, link-building, or content creation are actively executing are non-refundable.
• Pre-Paid Multi-Month Packages: For quarterly or annual pre-paid service packages cancelled early with valid 30-day notice, unutilized full calendar months will be refunded on a pro-rata basis.`
    },
    {
      id: 4,
      title: "4. Third-Party & Pass-Through Expenses (Non-Refundable)",
      content: `The following third-party expenses paid through or managed by Growth Service are strictly non-refundable:
• Advertising media spend paid directly or indirectly to ad networks (Google Ads, Meta Ads, LinkedIn Ads).
• Domain name registrations, DNS renewals, and SSL certificates.
• Third-party software licenses, commercial plugins, API subscriptions, or hosting servers purchased on the client's behalf.`
    },
    {
      id: 5,
      title: "5. Refund Request Process & Timeline",
      content: `To request a refund or review of account billing:
1. Submit a formal request in writing to info@growthservice.in with your invoice number, project title, and detailed reason for the request.
2. Our finance and project management teams will review the delivered milestones, timesheets, and signed agreements within 5 business days.
3. If approved, refunds are processed back to the original method of payment (official bank transfer) within 7 to 10 business days.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Refund & Cancellation Policy | Growth Service</title>
        <meta 
          name="description" 
          content="Review the Growth Service Refund and Cancellation Policy for web development, SEO retainers, and digital marketing services." 
        />
        <link rel="canonical" href="https://www.growthservice.in/refund" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Refund & Cancellation Policy - Growth Service",
            "url": "https://www.growthservice.in/refund",
            "description": "Official refund policy and cancellation terms for Growth Service.",
            "publisher": {
              "@type": "Organization",
              "name": businessConfig.name,
              "url": businessConfig.domain
            }
          })}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: 'Refund Policy' }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <DollarSign className="w-4 h-4 text-yellow-400" />
              <span>Transparent Commercial Terms</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Refund & Cancellation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Policy</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Clear, fair, and transparent cancellation terms governing our digital marketing retainers, web engineering milestones, and commercial agreements.
            </p>
            <div className="mt-4 text-xs text-purple-300">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {policies.map((p) => (
              <div 
                key={p.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>{p.title}</span>
                </h2>
                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-2">
                  {p.content}
                </div>
              </div>
            ))}

            {/* Contact & Support Channels */}
            <div className="bg-gradient-to-r from-purple-900 via-purple-950 to-indigo-950 text-white rounded-2xl p-8 border border-purple-800 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">
                  Billing & Account Assistance
                </div>
                <h3 className="text-2xl font-bold">Have Questions About Your Billing or Agreement?</h3>
                <p className="text-sm text-purple-200 leading-relaxed max-w-2xl">
                  Our accounts desk is available to assist with milestone reviews, invoice clarification, or billing requests across all offices in Jaipur, Vrindavan, and Nepal.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={getMailtoHref(primaryEmail, 'Refund or Billing Inquiry')}
                    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Accounts ({primaryEmail})</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Contact Support</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RefundPolicy;
