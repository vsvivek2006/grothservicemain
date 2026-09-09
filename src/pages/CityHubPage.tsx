import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, Phone, MessageCircle, ArrowRight, 
  ChevronRight, HelpCircle
} from 'lucide-react';
import { getCityBySlug, getCitiesByRegion } from '../data/locations';
import { getOfficeById } from '../data/offices';
import { getServiceBySlug } from '../data/services';
import { teamMembers } from '../data/team';
import { 
  getCityPhone, 
  getCityEmail, 
  getCityAddress, 
  getOfficeForCity 
} from '../selectors';
import { buildWhatsAppUrl } from '../config';
import { Container, Section, Button } from '../components/ui';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import NotFound from './NotFound';

export const CityHubPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();

  if (!citySlug) {
    return <NotFound />;
  }

  const city = getCityBySlug(citySlug);

  // Flat architecture: only approved individual service locations exist as pages.
  // Invalid locations or state slugs return 404.
  if (!city) {
    return <NotFound />;
  }

  const assignedTeam = teamMembers.slice(0, 3);
  const office = getOfficeForCity(city);
  const cityPhone = getCityPhone(city);
  const cityEmail = getCityEmail(city);
  const cityAddress = getCityAddress(city);
  const relatedCities = getCitiesByRegion(city.regionSlug).filter(c => c.slug !== city.slug);

  const whatsappUrl = buildWhatsAppUrl(
    cityPhone,
    `Hello Growth Service, I am looking for digital marketing services in ${city.name}.`
  );

  const pageTitle = `Digital Marketing, SEO & Web Development in ${city.name}, ${city.state} | Growth Service`;
  const pageDescription = city.isPhysicalOffice 
    ? `Growth Service has a physical office in ${city.name}. ${city.description} Web development, SEO, and digital marketing services.` 
    : `Growth Service provides digital marketing, SEO, and web development services to businesses in ${city.name}, ${city.state}.`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://www.growthservice.in/locations/${city.slug}`} />

        {/* Service Schema - Organization provider (LocalBusiness is reserved only for physical offices) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Digital Marketing, SEO & Web Development in ${city.name}`,
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": city.state
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Growth Service",
              "url": "https://growthservice.in",
              "telephone": cityPhone,
              "email": cityEmail
            },
            "description": city.description
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-10 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

        <Container className="relative z-10">
          <FadeIn direction="up" delay={50}>
            <Breadcrumb
              items={[
                { label: 'Locations', path: '/locations' },
                { label: city.name }
              ]}
              className="text-purple-300 mb-6"
            />

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
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
                Digital Marketing, SEO & Web Development in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">{city.name}</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                {city.isPhysicalOffice 
                  ? `Growth Service has a physical office in ${city.name}. ${city.description}`
                  : `Growth Service provides digital marketing services to businesses in ${city.name}. ${city.description}`
                }
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Discuss {city.name} Project
                </Button>

                <Button
                  href={`tel:${cityPhone.replace(/\s+/g, '')}`}
                  variant="white"
                  size="lg"
                  icon={<Phone className="w-5 h-5 text-slate-800" />}
                >
                  Call {cityPhone}
                </Button>

                {city.isPhysicalOffice && office && (
                  <Button
                    to={`/offices/${office.slug}`}
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
                    icon={<Building2 className="w-5 h-5" />}
                  >
                    View Physical Office
                  </Button>
                )}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Services Available in this City */}
      <Section variant="transparent" spacing="none" className="py-16 md:py-24">
        <Container>
          <SectionHeader
            badge="Specialized Capabilities"
            title="Digital Services Available in"
            titleHighlight={city.name}
            description={`Comprehensive digital growth services tailored to the competitive search and marketing landscape of ${city.name}, ${city.state}.`}
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={80}>
            {city.servicesAvailable.map((serviceSlug, idx) => {
              const srv = getServiceBySlug(serviceSlug);
              if (!srv) return null;
              return (
                <StaggerItem key={srv.slug} index={idx} className="h-full">
                  <Card
                    className="flex flex-col h-full bg-white border border-slate-200/80 shadow-card hover:border-purple-300 hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                      {srv.shortDesc}
                    </p>

                    <ul className="space-y-2 text-xs text-slate-600 mb-6 pt-3 border-t border-slate-100">
                      {srv.features.slice(0, 3).map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/${city.slug}/${srv.slug}`}
                      className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-purple-600 group-hover:translate-x-1 transition-all mt-auto"
                    >
                      <span>{srv.title} in {city.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Local Areas / Commercial Zones Served */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
              <div className="max-w-3xl mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Hyper-Local Coverage
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 mb-1">
                  Commercial Districts & Local Areas Served in {city.name}
                </h3>
                <p className="text-sm text-slate-600">
                  We execute localized Google My Business rankings, area-specific keywords, and paid audience targeting across:
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {city.localAreas.map((area, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-slate-200/80 hover:border-purple-200 transition-colors">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Industry Relevance in City */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Priority Industries in {city.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Our search optimization and web architecture strategies are calibrated for {city.name}'s key commercial pillars:
              </p>
              <div className="flex flex-wrap gap-2">
                {city.keyIndustries.map((ind, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-100/80 transition-colors">
                    ✓ {ind}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Office & Team Connection */}
          <div className="mb-16">
            <FadeIn direction="up" delay={100}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50/60 rounded-3xl p-8 border border-purple-100 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                      {city.isPhysicalOffice ? 'Official Company Office' : 'Dedicated Service Area'}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
                      {city.isPhysicalOffice 
                        ? `Growth Service Office in ${city.name}` 
                        : `Growth Service Team Serving ${city.name}`}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                      {city.isPhysicalOffice 
                        ? `Growth Service operates an active physical office in ${city.name} at ${cityAddress}. In-person visits and consultations are welcome.`
                        : `Growth Service provides digital marketing, SEO, and web development services to businesses in ${city.name}. All projects are managed by our core team with direct communication.`}
                    </p>
                  </div>

                  {city.isPhysicalOffice && office ? (
                    <Link
                      to={`/offices/${office.slug}`}
                      className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition-all shrink-0 shadow-md inline-flex items-center gap-2 hover:shadow-lg active:scale-[0.98]"
                    >
                      <span>View Office Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <Link
                      to="/offices"
                      className="px-6 py-3 rounded-xl bg-white text-purple-700 font-bold text-sm hover:bg-purple-50 border border-purple-200 transition-all shrink-0 shadow-sm inline-flex items-center gap-2 hover:shadow-md active:scale-[0.98]"
                    >
                      <span>Our 3 Company Offices</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Growth Service Team
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Our core digital team delivers strategy, SEO, web development, and performance marketing across all client locations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100}>
              {assignedTeam.slice(0, 3).map((member, idx) => (
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

          {/* Localized FAQs */}
          {city.faqs && city.faqs.length > 0 && (
            <FadeIn direction="up" delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  <span>Frequently Asked Questions — {city.name}</span>
                </h3>

                <div className="space-y-4">
                  {city.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
                      <h4 className="font-bold text-slate-900 text-base mb-1.5">{faq.q}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Related Cities in this Region */}
          {relatedCities.length > 0 && (
            <FadeIn direction="up" delay={100}>
              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Other Locations in {city.state}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {relatedCities.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/locations/${c.slug}`}
                      className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-purple-600 group"
                    >
                      <span className="truncate">{c.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title={`Ready to Scale Your Business in ${city.name}?`}
        description={`Connect with Growth Service today for high-performing SEO, performance marketing, or custom web development in ${city.name}.`}
        whatsappUrl={whatsappUrl}
        phoneNumber={cityPhone}
      />
    </div>
  );
};

export default CityHubPage;
