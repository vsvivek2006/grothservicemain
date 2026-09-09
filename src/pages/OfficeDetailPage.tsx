import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, MapPin, Phone, Clock, ExternalLink, 
  CheckCircle, ArrowRight, Navigation, Trophy
} from 'lucide-react';
import { 
  getOfficeBySlug, 
  getPhysicalOffices, 
  getTeamMembersByOffice, 
  getBusinessName, 
  getCanonicalOrigin 
} from '../selectors';
import { 
  getOfficeWhatsAppUrl, 
  getTelHref, 
  getMailtoHref 
} from '../services';
import { buildOfficePath, buildCanonicalUrl } from '../routing';
import { buildLocalBusinessSchema } from '../seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import EmployeeCard from '../components/team/EmployeeCard';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { Container, Section } from '../components/ui';
import NotFound from './NotFound';

export const OfficeDetailPage: React.FC = () => {
  const { officeSlug } = useParams<{ officeSlug: string }>();

  if (!officeSlug) {
    return <NotFound />;
  }

  const office = getOfficeBySlug(officeSlug);

  if (!office) {
    return <NotFound />;
  }

  const officeTeam = getTeamMembersByOffice(office.id);
  const whatsappUrl = getOfficeWhatsAppUrl(
    office.id,
    `Hello ${getBusinessName()}, I am inquiring about your services from the ${office.name}.`
  );

  const pageTitle = `${office.name} — ${office.city}, ${office.state} | Growth Service`;
  const pageDescription = `${office.name} of Growth Service located at ${office.address}. Contact: ${office.phone}. Services available to clients in this region include ${office.servicesOffered.slice(0, 3).join(', ')}.`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={buildCanonicalUrl(buildOfficePath(office.slug))} />

        {/* LocalBusiness Schema for this physical office */}
        <script type="application/ld+json">
          {JSON.stringify(buildLocalBusinessSchema(office))}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-10 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

        <Container className="relative z-10">
          <FadeIn direction="up" delay={50}>
            <Breadcrumb
              items={[
                { label: 'Offices', path: '/offices' },
                { label: office.name }
              ]}
              className="text-purple-300 mb-6"
            />

            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="text-3xl" role="img" aria-label="Flag">{office.flag}</span>
                <div className="inline-flex items-center gap-2 bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                  <Building2 className="w-4 h-4 text-yellow-400" />
                  <span>{office.city}, {office.state} • {office.country}</span>
                </div>
                {office.isHeadOffice ? (
                  <Badge variant="gold" size="sm">
                    <Trophy className="w-3 h-3 mr-1 inline" />
                    🏆 International Head Office
                  </Badge>
                ) : (
                  <Badge variant="purple" size="sm">
                    Company Office
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                {office.name}
              </h1>

              <p className="text-lg sm:text-xl text-purple-200 font-medium mb-6 max-w-2xl">
                {office.tagline}
              </p>

              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {office.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="whatsapp"
                  size="lg"
                  icon={<WhatsAppIcon className="w-5 h-5" />}
                >
                  Chat on WhatsApp
                </Button>

                <Button
                  href={getTelHref(office.phone)}
                  variant="white"
                  size="lg"
                  icon={<Phone className="w-5 h-5 text-slate-800" />}
                >
                  Call {office.phone}
                </Button>

                <Button
                  href={office.mapLink}
                  isExternal
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
                  icon={<Navigation className="w-5 h-5" />}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Office Information & Address Grid */}
      <Section variant="transparent" spacing="none" className="py-16">
        <Container>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" staggerDelay={120}>
            {/* Card 1: Official Address */}
            <StaggerItem index={0} className="h-full">
              <Card className="bg-white border border-slate-200/80 shadow-card h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Street Address</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">{office.address}</p>
                {office.landmark && (
                  <p className="text-xs text-purple-700 font-medium bg-purple-50 p-2 rounded-lg border border-purple-100 mb-4">
                    Landmark: {office.landmark}
                  </p>
                )}
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors mt-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Card>
            </StaggerItem>

            {/* Card 2: Contact Info */}
            <StaggerItem index={1} className="h-full">
              <Card className="bg-white border border-slate-200/80 shadow-card h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Contact</h3>
                <p className="text-xs text-slate-500 mb-1">Telephone:</p>
                <p className="text-slate-900 font-bold text-sm mb-3">
                  <a href={getTelHref(office.phone)} className="hover:text-purple-600 transition-colors">
                    {office.phone}
                  </a>
                </p>
                <p className="text-xs text-slate-500 mb-1">Email:</p>
                <p className="text-slate-900 font-bold text-sm mb-4">
                  <a href={getMailtoHref(office.email)} className="hover:text-purple-600 transition-colors">
                    {office.email}
                  </a>
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Contact Line</span>
                </span>
              </Card>
            </StaggerItem>

            {/* Card 3: Hours & Support */}
            <StaggerItem index={2} className="h-full">
              <Card className="bg-white border border-slate-200/80 shadow-card h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Office Timings</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">{office.timings}</p>
                <p className="text-xs text-slate-500 mb-4">
                  Consultation visits are welcome during operational hours. In-person and virtual consultations available.
                </p>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                  In-Person & Virtual Appointments
                </span>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Services Available to Clients in this Region */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
              <div className="max-w-3xl mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Services Available to Clients in this Region
                </h3>
                <p className="text-slate-600 text-sm">
                  Our digital services available to clients in this region include:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {office.servicesOffered.map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-purple-50/40 transition-all">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* SEO Content Block */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Why Choose Growth Service in {office.city}?
              </h2>
              <div className="prose prose-sm max-w-none text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Growth Service's {office.name} is a full-service digital marketing and web development agency serving businesses across {office.city}, {office.state}, and {office.country}. Whether you're a startup looking to establish an online presence or an established brand aiming for aggressive digital growth, our {office.city} team delivers measurable results through a data-driven approach tailored to your local market.
                </p>
                <p>
                  Located at {office.address}, our {office.city} office operates as a dedicated hub for strategic planning, client servicing, and campaign execution. We serve clients across {office.areasServed.slice(0, 5).join(', ')}, and beyond — giving your business hyper-local authority while also building broader regional visibility.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">
                  Digital Marketing Services in {office.city}
                </h3>
                <p>
                  Our {office.city} team specialises in {office.servicesOffered.join(', ')}. Every campaign is built from scratch around your specific business goals, target audience, and competitive landscape in {office.city} and the {office.state} region.
                </p>
                <p>
                  We conduct a comprehensive digital audit before any engagement. This covers your website's technical health, existing Google rankings for key terms in {office.city}, competitor benchmarking, and current social media performance. This audit-first model ensures our interventions are targeted, efficient, and directly tied to business outcomes.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">
                  SEO &amp; Search Visibility for {office.city} Businesses
                </h3>
                <p>
                  Search engine optimisation remains the most sustainable channel for organic lead generation in {office.city}. Our SEO team at the {office.name} works on on-page optimisation, local citation building, Google Business Profile management, structured data markup, and authority link acquisition — all calibrated to how businesses are searched in {office.city} and {office.state}.
                </p>
                <p>
                  Businesses in {office.city} that rank on the first page of Google for their primary service keywords see dramatically higher inquiries without spending on paid ads. Our SEO strategies are built for longevity — not short-term tricks — so your rankings compound over time.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">
                  Web Development from Our {office.city} Office
                </h3>
                <p>
                  Our {office.city} development team builds fast, conversion-optimised websites using modern technologies including React, Next.js, WordPress, and custom CMS platforms. We prioritise Core Web Vitals scores, mobile responsiveness, and accessibility — all critical ranking signals for Google Search in {office.state} and nationally.
                </p>
                <p>
                  Whether you need a new business website, an e-commerce store, a landing page, or a complete web application, our {office.city} developers deliver production-grade code with ongoing support and maintenance.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">
                  Transparent Reporting &amp; Direct Communication
                </h3>
                <p>
                  Every client at Growth Service {office.city} receives a dedicated point of contact, monthly performance reports with clear KPIs, and direct WhatsApp access to the team. We believe digital marketing must be accountable — you should always know exactly what work was done, what results it generated, and what is planned next.
                </p>
                <p>
                  Reach our {office.city} office at {office.phone} or {office.email}. We're available {office.timings} and respond to WhatsApp inquiries within a few hours. Schedule a free consultation to understand how Growth Service can accelerate your business growth in {office.city} and across {office.state}.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Team Section */}
          {officeTeam.length > 0 && (
            <div className="mb-16">
              <FadeIn direction="up">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
                  <div>
                    <div className="mb-2">
                      <Badge variant="purple" size="sm">
                        {office.name} Team
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      {office.city} <span className="text-purple-600">Office Team</span>
                    </h2>
                    <p className="text-slate-600 text-sm mt-1">
                      Meet the team based at our {office.city} office who serve clients in {office.state} and the region.
                    </p>
                  </div>
                  <Link to="/team" className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700 group">
                    <span>View Full Team Directory</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={120}>
                {officeTeam.map((member, idx) => (
                  <StaggerItem key={member.id} index={idx}>
                    <EmployeeCard member={member} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}

          {/* Areas & Cities Served */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Areas Served
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Growth Service provides digital marketing, web development, and SEO services across the following areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {office.areasServed.map((area, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-100/80 transition-colors inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-purple-600 shrink-0" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Other Physical Offices Link */}
          <FadeIn direction="up" delay={100}>
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Other Physical Growth Service Offices
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {getPhysicalOffices()
                  .filter(o => o.id !== office.id)
                  .map(otherOffice => (
                    <Link
                      key={otherOffice.id}
                      to={`/offices/${otherOffice.slug}`}
                      className="bg-white p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl transition-transform group-hover:scale-110">{otherOffice.flag}</span>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm group-hover:text-purple-600 transition-colors">
                            {otherOffice.name}
                          </h4>
                          <p className="text-xs text-slate-500">{otherOffice.city}, {otherOffice.state}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title={`Connect with Growth Service`}
        description={`Schedule a consultation or discuss your digital growth goals with our team over WhatsApp.`}
        whatsappUrl={whatsappUrl}
        phoneNumber={office.phone}
      />
    </div>
  );
};

export default OfficeDetailPage;
