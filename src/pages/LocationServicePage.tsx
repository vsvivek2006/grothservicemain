import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  CheckCircle, ArrowRight, Phone, MessageCircle, 
  ShieldCheck, Sparkles, ChevronRight, MapPin
} from 'lucide-react';
import { 
  getCityBySlug, 
  getServiceBySlug, 
  getAllServices, 
  getAllTeamMembers, 
  getCityPhone, 
  getCityEmail, 
  getCityAddress, 
  getOfficeForCity,
  getBusinessName 
} from '../selectors';
import { 
  getWhatsAppUrl, 
  getTelHref 
} from '../services';
import { buildLocationServicePath, buildCanonicalUrl } from '../routing';
import { buildServiceSchema } from '../seo';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import TeamCard from '../components/ui/TeamCard';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { Container, Section, WhatsAppIcon } from '../components/ui';
import NotFound from './NotFound';

export const LocationServicePage: React.FC = () => {
  const { city: rawCity, serviceSlug: rawServiceSlug } = useParams<{ city: string; serviceSlug: string }>();

  if (!rawCity || !rawServiceSlug) {
    return <NotFound />;
  }

  const city = getCityBySlug(rawCity);
  const service = getServiceBySlug(rawServiceSlug);

  // Programmatic Matrix Enforcement: 404 if city or service does not exist
  // or if the service is not marked available for this city in central data
  if (!city || !service || !city.servicesAvailable.includes(service.slug)) {
    return <NotFound />;
  }

  const office = getOfficeForCity(city.id);
  const cityPhone = getCityPhone(city.id);
  const cityEmail = getCityEmail(city.id);
  const cityAddress = getCityAddress(city.id);
  const businessName = getBusinessName();

  const canonicalUrl = buildCanonicalUrl(buildLocationServicePath(city.slug, service.slug));
  const whatsappUrl = getWhatsAppUrl(
    city.officeId === 'nepal' ? 'nepal' : 'india',
    `Hello ${businessName}, I am inquiring about ${service.title} in ${city.name}.`
  );

  const otherServices = getAllServices()
    .filter((s) => s.slug !== service.slug && city.servicesAvailable.includes(s.slug))
    .slice(0, 3);

  const locationTeam = getAllTeamMembers().filter(
    (m) => m.officeId.toLowerCase() === (city.officeId || 'jaipur').toLowerCase()
  );

  const serviceSchema = buildServiceSchema(service, canonicalUrl, city.name);

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{`${service.title} in ${city.name}, ${city.state} | Growth Service`}</title>
        <meta
          name="description"
          content={`Professional ${service.title.toLowerCase()} in ${city.name}, ${city.state}. ${service.shortDesc} Scoped transparently by Growth Service.`}
        />
        <link rel="canonical" href={canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <FadeIn direction="up" delay={50}>
            <div className="flex justify-center">
              <Breadcrumb
                items={[
                  { label: 'Locations', path: '/locations' },
                  { label: city.name, path: `/locations/${city.slug}` },
                  { label: service.title }
                ]}
                className="text-purple-300 mb-6"
              />
            </div>

            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="text-3xl" role="img" aria-label="Flag">{city.flag}</span>
                <div className="inline-flex items-center gap-2 bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                  <span>{city.name}, {city.state}</span>
                </div>
                {city.isPhysicalOffice ? (
                  <Badge variant="purple" size="sm">
                    Company Office
                  </Badge>
                ) : (
                  <Badge variant="neutral" size="sm">
                    Service Location
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                {service.title} in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">{city.name}</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {service.shortDesc} Tailored for businesses and enterprises in {city.name}, {city.state}.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="whatsapp"
                  size="lg"
                  icon={<WhatsAppIcon className="w-5 h-5" />}
                >
                  Discuss {city.name} Project
                </Button>

                <Button
                  href={getTelHref(cityPhone)}
                  variant="white"
                  size="lg"
                  icon={<Phone className="w-5 h-5 text-slate-800" />}
                >
                  Call {cityPhone}
                </Button>

                <Button
                  to={`/locations/${city.slug}`}
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
                >
                  View {city.name} Overview
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Main Service Content */}
      <Section variant="transparent" spacing="none" className="py-16">
        <Container>
          {/* Features & Deliverables Grid */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" staggerDelay={120}>
            <StaggerItem index={0} className="h-full">
              <Card className="bg-white border border-slate-200/80 shadow-card h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Core Service Features</span>
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>

            <StaggerItem index={1} className="h-full">
              <Card className="bg-white border border-slate-200/80 shadow-card h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  <span>Measurable Deliverables</span>
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  {service.deliverables.map((d, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Local Area Coverage */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title} Across {city.name} Commercial Districts
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                We adapt search optimization, web design, and digital campaigns for businesses across:
              </p>
              <div className="flex flex-wrap gap-2">
                {city.localAreas.map((area, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-100/80 transition-colors inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-purple-600 shrink-0" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Office & Team Responsible */}
          <div className="mb-16">
            <FadeIn direction="up" delay={100}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50/60 rounded-3xl p-8 border border-purple-100 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  {city.isPhysicalOffice ? 'Company Office' : 'Service Location'}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
                  {city.isPhysicalOffice 
                    ? `Growth Service Office in ${city.name}` 
                    : `Growth Service Team Supporting ${city.name}`}
                </h3>
                <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-4">
                  {city.isPhysicalOffice 
                    ? `Clients in ${city.name} can meet directly with our team at ${cityAddress}. In-person visits and strategic consultations are available.`
                    : `Campaigns for businesses in ${city.name} are managed by our core team with dedicated project management and regular communication.`}
                </p>
                <div className="flex flex-wrap gap-3">
                  {city.isPhysicalOffice && office ? (
                    <Link 
                      to={`/offices/${office.slug}`}
                      className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-lg border border-purple-200 shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
                    >
                      <span>View Office Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link 
                      to="/offices"
                      className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-lg border border-purple-200 shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
                    >
                      <span>Our 3 Company Offices</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Growth Service Team
                </h3>
                <Link to="/team" className="text-xs sm:text-sm font-bold text-purple-600 hover:underline inline-flex items-center gap-1 group">
                  <span>Meet Full Team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
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

          {/* Other Services in City */}
          {otherServicesInCity.length > 0 && (
            <FadeIn direction="up" delay={100}>
              <div className="pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Other Digital Services in {city.name}
                  </h3>
                  <Link to={`/locations/${city.slug}`} className="text-sm font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1 group">
                    <span>View {city.name} Overview</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherServicesInCity.map(otherService => (
                    <Link
                      key={otherService.slug}
                      to={`/${city.slug}/${otherService.slug}`}
                      className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors text-sm">
                        {otherService.title} in {city.name}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <CTABanner
        title={`Scale Your Business in ${city.name}`}
        description={`Partner with Growth Service for results-driven ${service.title.toLowerCase()}. Offices in Jaipur, Vrindavan, Nepal, and serving clients nationwide.`}
        whatsappUrl={whatsappUrl}
        phoneNumber={cityPhone}
      />
    </div>
  );
};

export default LocationServicePage;
