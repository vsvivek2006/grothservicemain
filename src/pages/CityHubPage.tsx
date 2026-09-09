import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, Phone, MessageCircle, ArrowRight, 
  CheckCircle, ChevronRight, HelpCircle
} from 'lucide-react';
import { getCityBySlug, getRegionBySlug, getCitiesByRegion, getAllRegions } from '../data/locations';
import { getOfficeById, physicalOffices } from '../data/offices';
import { getServiceBySlug } from '../data/services';
import { teamMembers } from '../data/team';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TeamCard from '../components/ui/TeamCard';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { Container, Section } from '../components/ui';
import NotFound from './NotFound';

export const CityHubPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();

  if (!citySlug) {
    return <NotFound />;
  }

  const city = getCityBySlug(citySlug);
  const region = !city ? getRegionBySlug(citySlug) : null;

  if (!city && !region) {
    return <NotFound />;
  }

  const assignedTeam = teamMembers.slice(0, 3);

  // === RENDER REGION HUB ===
  if (region) {
    const regionCities = getCitiesByRegion(region.slug);
    const regionOffice = region.slug === 'rajasthan'
      ? getOfficeById('jaipur')
      : region.slug === 'uttar-pradesh'
        ? getOfficeById('vrindavan')
        : region.slug === 'nepal'
          ? getOfficeById('nepal')
          : null;
    const fallbackOffice = regionOffice || getOfficeById('vrindavan') || physicalOffices[0];
    const otherRegions = getAllRegions().filter(r => r.slug !== region.slug);
    const pageTitle = `${region.name} Digital Marketing, SEO & Web Development | Growth Service`;
    const pageDescription = `${region.description} Comprehensive digital growth, technical SEO, and web development across ${region.name} including ${regionCities.map(c => c.name).slice(0, 3).join(', ')}.`;

    return (
      <div className="min-h-screen bg-slate-50">
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={`https://growthservice.in/locations/${region.slug}`} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `Digital Marketing & Web Services in ${region.name}`,
              "provider": {
                "@type": "Organization",
                "name": "Growth Service",
                "url": "https://growthservice.in",
                "telephone": fallbackOffice.phone,
                "email": fallbackOffice.email
              },
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": region.name
              },
              "description": region.description
            })}
          </script>
        </Helmet>

        {/* Region Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-10 pb-20 overflow-hidden">
          <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

          <Container className="relative z-10">
            <FadeIn direction="up" delay={50}>
              <Breadcrumb
                items={[
                  { label: 'Locations', path: '/locations' },
                  { label: region.name }
                ]}
                className="text-purple-300 mb-6"
              />

              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl" role="img" aria-label="Flag">{region.flag}</span>
                  <div className="inline-flex items-center gap-2 bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                    <span>{region.name} • {region.country}</span>
                  </div>
                  {regionOffice && (
                    <Badge variant="purple" size="sm">
                      Active Physical Office In Region
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                  Digital Marketing, SEO & Web Development in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">{region.name}</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  {region.description}
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Button
                    href={`https://wa.me/9779707382481?text=Hello%20Growth%20Service,%20I%20am%20inquiring%20about%20services%20in%20${encodeURIComponent(region.name)}.`}
                    isExternal
                    variant="whatsapp"
                    size="lg"
                    icon={<MessageCircle className="w-5 h-5" />}
                  >
                    Discuss {region.name} Project
                  </Button>

                  {regionOffice ? (
                    <Button
                      to={`/offices/${regionOffice.slug}`}
                      variant="white"
                      size="lg"
                      icon={<Building2 className="w-5 h-5 text-purple-600" />}
                    >
                      View {regionOffice.name}
                    </Button>
                  ) : (
                    <Button
                      to="/contact"
                      variant="white"
                      size="lg"
                      icon={<Phone className="w-5 h-5 text-slate-800" />}
                    >
                      Contact Regional Team
                    </Button>
                  )}
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Cities in this Region Section */}
        <Section variant="transparent" spacing="none" className="py-16 md:py-24">
          <Container>
            <SectionHeader
              badge="Territory Coverage"
              title="Cities & Locations in"
              titleHighlight={region.name}
              description={`Explore local market capabilities, localized SEO services, and custom web development across ${region.name}.`}
            />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16" staggerDelay={80}>
              {regionCities.map((cityItem, idx) => (
                <StaggerItem key={cityItem.slug} index={idx} className="h-full">
                  <Card
                    className="flex flex-col h-full bg-white border border-slate-200/80 shadow-card hover:border-purple-300 hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110 inline-block" role="img" aria-label="Flag">{cityItem.flag}</span>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                            {cityItem.name}
                          </h2>
                          <p className="text-xs text-slate-500">{cityItem.state} • {cityItem.country}</p>
                        </div>
                      </div>
                      {cityItem.isPhysicalOffice && (
                        <Badge variant="purple" size="sm">
                          Physical Office
                        </Badge>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-2">
                      {cityItem.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                        Areas Served
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {cityItem.localAreas.slice(0, 4).map((area, sidx) => (
                          <span key={sidx} className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100 font-medium group-hover:border-purple-200 transition-colors">
                            {area}
                          </span>
                        ))}
                        {cityItem.localAreas.length > 4 && (
                          <span className="text-xs bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded border border-slate-100">
                            +{cityItem.localAreas.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm mt-auto">
                      <span className="text-slate-500 font-medium">
                        {cityItem.servicesAvailable.length} Core Services
                      </span>
                      <Link
                        to={`/locations/${cityItem.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1 transition-all"
                      >
                        <span>Explore City</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Regional Presence Callout */}
            <FadeIn direction="up" delay={100}>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 text-slate-800 mb-16 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Growth Service Representation in {region.name}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                      {regionOffice 
                        ? `Our physical office in ${regionOffice.name} provides direct client consultations, strategy sessions, and local project management for ${region.name}.`
                        : `Our specialized multidisciplinary team services ${region.name} remotely with regular virtual consultations, clear metrics, and enterprise-grade execution.`}
                    </p>
                  </div>
                  {regionOffice ? (
                    <Link
                      to={`/offices/${regionOffice.slug}`}
                      className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition-all shrink-0 shadow-md inline-flex items-center gap-2 hover:shadow-lg active:scale-[0.98]"
                    >
                      <span>Visit {regionOffice.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <Link
                      to="/locations"
                      className="px-6 py-3 rounded-xl bg-white text-purple-700 font-bold text-sm hover:bg-purple-50 border border-purple-200 transition-all shrink-0 shadow-sm inline-flex items-center gap-2 hover:shadow-md active:scale-[0.98]"
                    >
                      <span>View All Locations</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Other Regions Directory */}
            <FadeIn direction="up" delay={150}>
              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Explore Other Regional Territories
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {otherRegions.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/locations/${r.slug}`}
                      className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-purple-600 group"
                    >
                      <span className="truncate">{r.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* CTA Banner */}
        <CTABanner
          title={`Scale Your Enterprise Across ${region.name}`}
          description={`Connect directly with Growth Service to build modern web solutions, capture high-intent organic search volume, and drive qualified leads in ${region.name}.`}
          whatsappUrl={`https://wa.me/9779707382481?text=Hello%20Growth%20Service,%20I%20am%20inquiring%20about%20services%20in%20${encodeURIComponent(region.name)}.`}
          phoneNumber="+91 93414 36937"
        />
      </div>
    );
  }

  if (!city) {
    return <Navigate to="/locations" replace />;
  }

  // === RENDER CITY HUB ===
  const office = city!.officeId ? getOfficeById(city!.officeId) : null;
  const relatedCities = getCitiesByRegion(city!.regionSlug).filter(c => c.slug !== city!.slug);

  const whatsappUrl = `https://wa.me/${city!.phone.replace(/[^0-9]/g, '') || '9779707382481'}?text=Hello%20Growth%20Service,%20I%20am%20looking%20for%20digital%20marketing%20services%20in%20${encodeURIComponent(city!.name)}.`;

  const pageTitle = `Digital Marketing, SEO & Web Development in ${city!.name}, ${city!.state} | Growth Service`;
  const pageDescription = city!.isPhysicalOffice 
    ? `Growth Service has a physical office in ${city!.name}. ${city!.description} Web development, SEO, and digital marketing services.` 
    : `Growth Service provides digital marketing, SEO, and web development services to businesses in ${city!.name}, ${city!.state}.`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://growthservice.in/locations/${city!.slug}`} />

        {/* Service Schema - Organization provider (LocalBusiness is reserved only for physical offices) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Digital Marketing, SEO & Web Development in ${city!.name}`,
            "areaServed": {
              "@type": "City",
              "name": city!.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": city!.state
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Growth Service",
              "url": "https://growthservice.in",
              "telephone": city!.phone,
              "email": city!.email
            },
            "description": city!.description
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
                { label: city.regionName, path: `/locations/${city.regionSlug}` },
                { label: city.name }
              ]}
              className="text-purple-300 mb-6"
            />

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl" role="img" aria-label="Flag">{city.flag}</span>
                <div className="inline-flex items-center gap-2 bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                  <span>{city.name}, {city.state} • {city.regionName}</span>
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
                  href={`tel:${city.phone.replace(/\s+/g, '')}`}
                  variant="white"
                  size="lg"
                  icon={<Phone className="w-5 h-5 text-slate-800" />}
                >
                  Call {city.phone}
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
                        ? `Growth Service operates an active physical office in ${city.name} at ${city.address}. In-person visits and consultations are welcome.`
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
                  Other Cities & Areas in {city.regionName}
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
        phoneNumber={city.phone}
      />
    </div>
  );
};

export default CityHubPage;
