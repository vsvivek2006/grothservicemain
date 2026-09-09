import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  CheckCircle, ArrowRight, Phone, MessageCircle, 
  MapPin, Star, ShieldCheck, Sparkles, Building2, ChevronRight, HelpCircle
} from 'lucide-react';
import { getCityBySlug, getCitiesByRegion } from '../data/locations';
import { physicalOffices, getOfficeById } from '../data/offices';
import { getServiceBySlug, servicesData } from '../data/services';
import { getTeamMembersByOffice } from '../data/team';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import TeamCard from '../components/ui/TeamCard';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';

// Helper to normalize URL service slugs like "seo-company" -> "seo", "digital-marketing-agency" -> "digital-marketing"
function normalizeServiceSlug(rawSlug: string): string {
  const s = rawSlug.toLowerCase();
  if (s.includes('digital-marketing') || s.includes('marketing-agency') || s.includes('marketing-company')) return 'digital-marketing';
  if (s.includes('seo')) return 'seo';
  if (s.includes('web-dev') || s.includes('website') || s.includes('web-development')) return 'web-development';
  if (s.includes('paid') || s.includes('ppc') || s.includes('ads')) return 'paid-marketing';
  if (s.includes('social') || s.includes('smm')) return 'social-media';
  if (s.includes('content')) return 'content-marketing';
  if (s.includes('ecom') || s.includes('store')) return 'ecommerce';
  return s;
}

export const LocationServicePage: React.FC = () => {
  const { city: rawCity, serviceSlug: rawServiceSlug } = useParams<{ city: string; serviceSlug: string }>();

  if (!rawCity || !rawServiceSlug) {
    return <Navigate to="/locations" replace />;
  }

  const city = getCityBySlug(rawCity);
  const normalizedSlug = normalizeServiceSlug(rawServiceSlug);
  const service = getServiceBySlug(normalizedSlug);

  if (!city || !service) {
    return <Navigate to={service ? service.path : "/locations"} replace />;
  }

  const office = city.officeId ? getOfficeById(city.officeId) : null;
  const servingOffice = office || (city.regionSlug === 'rajasthan' 
    ? getOfficeById('jaipur') 
    : city.regionSlug === 'nepal' 
      ? getOfficeById('nepal') 
      : getOfficeById('vrindavan')) || physicalOffices[0];

  const assignedTeam = getTeamMembersByOffice(servingOffice.id);
  const otherServicesInCity = servicesData.filter(s => s.slug !== service.slug);

  const whatsappUrl = `https://wa.me/${city.phone.replace(/[^0-9]/g, '') || '9779707382481'}?text=Hello%20Growth%20Service,%20I%20am%20looking%20for%20${encodeURIComponent(service.title)}%20in%20${encodeURIComponent(city.name)}.`;

  const pageTitle = `${service.title} in ${city.name}, ${city.state} | Growth Service`;
  const pageDescription = `Top-rated ${service.title.toLowerCase()} in ${city.name}, ${city.state}. Certified digital growth by Growth Service. Serving ${city.localAreas.slice(0, 3).join(', ')}. Call ${city.phone}.`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://growthservice.in/${city.slug}/${service.slug}`} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://growthservice.in/${city.slug}/${service.slug}`} />
        <meta property="og:type" content="website" />

        {/* Schema.org Service - Accurate attribution without fake physical locations */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.title} in ${city.name}`,
            "provider": city.isPhysicalOffice && office ? {
              "@type": "LocalBusiness",
              "name": `Growth Service - ${office.name}`,
              "image": "https://growthservice.in/logo.png",
              "telephone": office.phone,
              "email": office.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": office.address,
                "addressLocality": office.city,
                "addressRegion": office.state,
                "postalCode": office.postalCode,
                "addressCountry": office.country
              }
            } : {
              "@type": "Organization",
              "name": "Growth Service",
              "url": "https://growthservice.in",
              "telephone": city.phone,
              "email": city.email
            },
            "areaServed": {
              "@type": "City",
              "name": `${city.name}, ${city.state}`
            },
            "description": service.fullDesc
          })}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1b0834] to-slate-900 text-white pt-10 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Locations', path: '/locations' },
              { label: city.name, path: `/locations/${city.slug}` },
              { label: service.title }
            ]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl" role="img" aria-label="Flag">{city.flag}</span>
              <div className="inline-flex items-center gap-2 bg-purple-900/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                <span>Serving {city.name}, {city.state}</span>
              </div>
              {city.isPhysicalOffice && (
                <Badge variant="purple" size="sm">
                  Physical Office
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {service.title} in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">{city.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              {city.description} We specialize in high-converting {service.title.toLowerCase()} strategies tailored for businesses across {city.name}.
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

              <Button
                to={`/locations/${city.slug}`}
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
              >
                View {city.name} City Hub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Deliverables & Capabilities"
          title="What We Deliver in"
          titleHighlight={city.name}
          description={service.fullDesc}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border border-slate-200/80 shadow-card">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span>Core Features</span>
            </h3>
            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-white border border-slate-200/80 shadow-card">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
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
        </div>

        {/* Local Area Coverage */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {service.title} Across {city.name} Commercial Districts
          </h3>
          <p className="text-slate-600 text-sm mb-6">
            We adapt keyword strategies, localized Google My Business profiles, and paid geo-fencing for:
          </p>
          <div className="flex flex-wrap gap-2">
            {city.localAreas.map((area, idx) => (
              <span key={idx} className="bg-purple-50 text-purple-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-purple-200">
                📍 {area}
              </span>
            ))}
          </div>
        </div>

        {/* Office & Team Responsible */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50/60 rounded-3xl p-8 border border-purple-100 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              {city.isPhysicalOffice ? 'Physical Office' : 'Supervising Regional Hub'}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
              {city.isPhysicalOffice 
                ? `Stationed at Our ${city.name} Office` 
                : `Supervised by Our ${servingOffice.name} (${servingOffice.city})`}
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-4">
              {city.isPhysicalOffice 
                ? `Clients in ${city.name} can meet directly with our technical team at ${city.address}.`
                : `Your ${city.name} campaigns are managed with direct oversight from our ${servingOffice.name}, ensuring certified execution and dedicated communication.`}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                to={`/offices/${servingOffice.slug}`}
                className="text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-lg border border-purple-200 shadow-sm"
              >
                <span>View {servingOffice.name} Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Campaign Leaders Assigned to {city.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignedTeam.slice(0, 3).map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                department={member.department}
                image={member.image}
                bio={member.bio}
                expertise={member.expertise}
                linkedinUrl={member.socialLinks?.linkedin}
              />
            ))}
          </div>
        </div>

        {/* Other Services in City */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Other Digital Services in {city.name}
            </h3>
            <Link to={`/locations/${city.slug}`} className="text-sm font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
              <span>View City Hub</span>
              <ArrowRight className="w-4 h-4" />
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
      </section>

      {/* CTA Section */}
      <CTABanner
        title={`Ready to Elevate Your Business in ${city.name}?`}
        description={`Partner with Growth Service for performance-driven ${service.title.toLowerCase()}. Offices in Jaipur, Vrindavan, Nepal, and serving clients nationwide.`}
        whatsappUrl={whatsappUrl}
        phoneNumber={city.phone}
      />
    </div>
  );
};

export default LocationServicePage;
