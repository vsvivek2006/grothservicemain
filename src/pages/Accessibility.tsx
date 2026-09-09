import React from 'react';
import { Helmet } from 'react-helmet';
import { Eye, ShieldCheck, CheckCircle, Mail, Phone } from 'lucide-react';
import { Container } from '../components/ui';
import Breadcrumb from '../components/ui/Breadcrumb';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { businessConfig } from '../config/business';

const Accessibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Accessibility Statement | Growth Service</title>
        <meta 
          name="description" 
          content="Growth Service is committed to digital accessibility. Learn about our WCAG 2.1 AA compliance, accessibility features, and support contact channels." 
        />
        <link rel="canonical" href="https://www.growthservice.in/accessibility" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: 'Accessibility Statement' }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Eye className="w-4 h-4 text-yellow-400" />
              <span>Inclusive Web Experience</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Accessibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Statement</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Growth Service is committed to ensuring that our digital agency website and client deliverables are accessible to people of all abilities, adhering to Web Content Accessibility Guidelines (WCAG 2.1 AA).
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <Container variant="narrow" className="text-gray-700 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
              Our Commitment
            </h2>
            <p className="leading-relaxed">
              We believe the internet should be available and accessible to anyone. We are continuously improving our digital platform and user experience, applying relevant accessibility standards across all viewports and assistive technologies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Accessibility Features Implemented
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Keyboard Navigation", desc: "All interactive elements, forms, and menus can be operated using standard keyboard navigation." },
                { title: "Color Contrast", desc: "Text and UI components maintain high contrast ratios exceeding WCAG AA minimums." },
                { title: "Screen Reader Support", desc: "Semantic HTML5 landmarks, ARIA labels, and image alt attributes are implemented across pages." },
                { title: "Reduced Motion", desc: "Animations respect user operating system settings for reduced motion (prefers-reduced-motion)." },
                { title: "Responsive Scaling", desc: "Layouts flex seamlessly without content truncation when text is zoomed up to 200%." },
                { title: "Clear Form Indicators", desc: "Form inputs feature visible labels, focus outlines, and descriptive error validation." }
              ].map((feat, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Feedback & Assistance
            </h2>
            <p className="leading-relaxed mb-6">
              If you experience any difficulty accessing content or navigating any part of our website, our accessibility coordinator is available to assist you and implement prompt remediation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${businessConfig.emails.primary}?subject=Accessibility%20Inquiry`}
                className="p-5 rounded-2xl border border-purple-200 bg-purple-50/50 hover:bg-purple-100/50 transition-colors flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Email Accessibility Team</div>
                  <div className="font-bold text-purple-700">{businessConfig.emails.primary}</div>
                </div>
              </a>

              <a
                href={`tel:${businessConfig.phones.indiaPrimary.replace(/[^0-9+]/g, '')}`}
                className="p-5 rounded-2xl border border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 transition-colors flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Direct Telephone Assistance</div>
                  <div className="font-bold text-blue-700">{businessConfig.phones.indiaPrimary}</div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Accessibility;
