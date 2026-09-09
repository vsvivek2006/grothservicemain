import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, MapPin, Phone, Clock, ExternalLink, 
  CheckCircle, ArrowRight, Navigation 
} from 'lucide-react';
import { getOfficeBySlug, physicalOffices } from '../data/offices';
import { teamMembers, getTeamMembersByOffice } from '../data/team';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TeamCard from '../components/ui/TeamCard';
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
  const coreTeam = officeTeam.length > 0 ? officeTeam : teamMembers.slice(0, 3);
  const whatsappUrl = `https://wa.me/${office.phone.replace(/[^0-9]/g, '') || '9779707382481'}?text=Hello%20Growth%20Service,%20I%20am%20inquiring%20about%20your%20services%20from%20the%20${encodeURIComponent(office.name)}.`;

  const pageTitle = `${office.name} — ${office.city}, ${office.state} | Growth Service`;
  const pageDescription = `${office.name} of Growth Service located at ${office.address}. Contact: ${office.phone}. Services available to clients in this region include ${office.servicesOffered.slice(0, 3).join(', ')}.`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://www.growthservice.in/offices/${office.slug}`} />

        {/* LocalBusiness Schema for this physical office */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Growth Service - ${office.name}`,
            "image": "https://www.growthservice.in/logo.png",
            "url": `https://www.growthservice.in/offices/${office.slug}`,
            "telephone": office.phone,
            "email": office.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": office.address,
              "addressLocality": office.city,
              "addressRegion": office.state,
              "postalCode": office.postalCode,
              "addressCountry": office.country
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": office.coordinates.lat,
              "longitude": office.coordinates.lng
            },
            "openingHours": office.timings,
            "areaServed": office.areasServed
          })}
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

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl" role="img" aria-label="Flag">{office.flag}</span>
                <div className="inline-flex items-center gap-2 bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                  <Building2 className="w-4 h-4 text-yellow-400" />
                  <span>{office.city}, {office.state} • {office.country}</span>
                </div>
                <Badge variant="purple" size="sm">
                  Company Office
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                {office.name}
              </h1>

              <p className="text-lg sm:text-xl text-purple-200 font-medium mb-6">
                {office.tagline}
              </p>

              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                {office.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="whatsapp"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                >
                  Chat on WhatsApp
                </Button>

                <Button
                  href={`tel:${office.phone.replace(/\s+/g, '')}`}
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
                  <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-purple-600 transition-colors">
                    {office.phone}
                  </a>
                </p>
                <p className="text-xs text-slate-500 mb-1">Email:</p>
                <p className="text-slate-900 font-bold text-sm mb-4">
                  <a href={`mailto:${office.email}`} className="hover:text-purple-600 transition-colors">
                    {office.email}
                  </a>
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ✓ Verified Contact Line
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

          {/* Team Section */}
          <div className="mb-16">
            <FadeIn direction="up">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
                <div>
                  <div className="mb-2">
                    <Badge variant="purple" size="sm">
                      Company Team
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Growth Service <span className="text-purple-600">Team</span>
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Our core multidisciplinary team supporting our clients and digital campaigns.
                  </p>
                </div>
                <Link to="/team" className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700 group">
                  <span>View All Team Members</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={120}>
              {coreTeam.map((member, idx) => (
                <StaggerItem key={member.id} index={idx}>
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    department={member.department}
                    image={member.image}
                    bio={member.bio}
                    expertise={member.expertise}
                    linkedinUrl={member.socialLinks?.linkedin}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

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
                  <span key={idx} className="bg-purple-50 text-purple-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-100/80 transition-colors">
                    📍 {area}
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
                {physicalOffices
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
