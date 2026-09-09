import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, MapPin, Phone, Clock, 
  ArrowRight, ShieldCheck, CheckCircle 
} from 'lucide-react';
import { getPhysicalOffices } from '../selectors';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { Container, Section } from '../components/ui';

export const OfficesHub: React.FC = () => {
  const offices = getPhysicalOffices();

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Our 3 Company Offices — Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Explore Growth Service physical offices in Jaipur (Rajasthan), Vrindavan (Uttar Pradesh), and Bariyarpatti (Nepal). Verified addresses, direct contacts, and business hours." 
        />
        <link rel="canonical" href="https://www.growthservice.in/offices" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Growth Service",
            "url": "https://www.growthservice.in",
            "department": offices.map(o => ({
              "@type": "LocalBusiness",
              "name": `Growth Service - ${o.name}`,
              "telephone": o.phone,
              "email": o.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": o.address,
                "addressLocality": o.city,
                "addressRegion": o.state,
                "postalCode": o.postalCode,
                "addressCountry": o.country
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>
        <Container className="relative z-10">
          <FadeIn direction="up" delay={50}>
            <Breadcrumb
              items={[{ label: 'Our Offices' }]}
              className="text-purple-300 mb-6"
            />

            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Building2 className="w-4 h-4 text-yellow-400" />
                <span>Verified Company Presence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Our 3 Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Offices</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Growth Service operates 3 active physical offices across India and Nepal. Our team collaborates to deliver transparent, high-ROI digital solutions.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Real Offices Grid */}
      <Section variant="transparent" spacing="none" className="py-16 md:py-24">
        <Container>
          <SectionHeader
            badge="Company Locations"
            title="Growth Service"
            titleHighlight="Office Locations"
            description="Physical office locations with verified addresses, direct communication channels, and local operational hours."
          />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" staggerDelay={120}>
            {offices.map((office, idx) => (
              <StaggerItem key={office.id} index={idx} className="h-full">
                <Card 
                  className="flex flex-col h-full bg-white border border-slate-200/80 shadow-card hover:border-purple-300 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Top Subtle Gradient Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Office Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110 inline-block" role="img" aria-label="Country flag">{office.flag}</span>
                        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                          {office.name}
                        </h2>
                      </div>
                      <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                        {office.city}, {office.state}
                      </p>
                    </div>
                    {office.isHeadOffice && (
                      <Badge variant="gold" size="sm">
                        Global HQ
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm font-medium text-slate-700 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {office.tagline}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3.5 text-sm text-slate-600 mb-6 flex-grow">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-1 transition-transform group-hover:scale-110" />
                      <p className="leading-relaxed text-xs sm:text-sm">{office.address}</p>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{office.timings}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Verified Physical Office</span>
                    </div>
                  </div>

                  {/* Services Pills */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Services Available
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {office.servicesOffered.slice(0, 3).map((srv, idx) => (
                        <span key={idx} className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-medium group-hover:bg-purple-100/80 transition-colors">
                          {srv.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 font-bold text-sm text-slate-800 hover:text-purple-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-purple-600" />
                      <span>{office.phone}</span>
                    </a>

                    <Link
                      to={`/offices/${office.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>Office Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Global Transparency Banner */}
          <FadeIn direction="up" delay={150}>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 text-slate-800 relative overflow-hidden">
              <div className="max-w-3xl relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-600" />
                  <span>Authentic Office Standards</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  Unlike agencies that list virtual postal mailboxes as physical offices, Growth Service only designates a location as an office where we have actual physical premises. For all other cities, our digital marketing, web development, and SEO services are provided with direct team communication.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link to="/locations" className="text-sm font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1.5 group">
                    <span>View All Locations We Serve</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link to="/team" className="text-sm font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1.5 group">
                    <span>Meet Our Team</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Schedule a Visit or Consultation at Any Office"
        description="Connect directly with our team in Jaipur, Vrindavan, or Nepal to discuss your next web application or search marketing campaign."
        whatsappUrl={buildWhatsAppUrl('nepal', 'Hello Growth Service, I would like to schedule an office consultation.')}
        phoneNumber={businessConfig.phones.indiaPrimary}
      />
    </div>
  );
};

export default OfficesHub;
