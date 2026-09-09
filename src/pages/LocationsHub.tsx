import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Globe, MapPin, Search, ArrowRight, Building, 
  Sparkles, CheckCircle, ChevronRight, Layers 
} from 'lucide-react';
import { regionsData, citiesData, getAllRegions, getCitiesByRegion } from '../data/locations';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';

export const LocationsHub: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCities = citiesData.filter((city) => {
    const matchesRegion = selectedRegion === 'all' || city.regionSlug === selectedRegion;
    const matchesSearch = searchQuery.trim() === '' || 
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.localAreas.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Locations We Serve — Regional Digital Marketing & SEO | Growth Service</title>
        <meta 
          name="description" 
          content="Explore Growth Service digital marketing, SEO, and web development services across Delhi NCR, Rajasthan, Uttar Pradesh, Bihar, Punjab, Goa, Maharashtra, Karnataka, and Nepal." 
        />
        <link rel="canonical" href="https://growthservice.in/locations" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1b0834] to-slate-900 text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumb
            items={[{ label: 'Locations We Serve' }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span>National & International Service Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Locations & Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Hubs We Serve</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              Explore localized digital solutions structured by state and metropolitan territory. From physical offices in Jaipur, Vrindavan, and Nepal to dedicated client delivery across major commerce hubs.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search city, state, or locality (e.g., Gurgaon, Patna, Mansarovar)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-300 bg-white/10 px-2 py-1 rounded hover:bg-white/20"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Region Filter Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Regions ({citiesData.length} Cities)
            </button>
            {regionsData.map((reg) => (
              <button
                key={reg.slug}
                onClick={() => setSelectedRegion(reg.slug)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedRegion === reg.slug
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{reg.flag}</span>
                <span>{reg.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Directory Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        {/* Cities Directory: Grouped by Region when 'all' & no search, or filtered grid */}
        {filteredCities.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-lg font-bold text-slate-700 mb-2">No locations found matching "{searchQuery}"</p>
            <p className="text-sm text-slate-500 mb-4">Try clearing your search query or selecting another region.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedRegion('all'); }}
              className="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : selectedRegion === 'all' && !searchQuery.trim() ? (
          <div className="space-y-16">
            {regionsData.map((region) => {
              const regionCities = getCitiesByRegion(region.slug);
              if (regionCities.length === 0) return null;
              return (
                <div key={region.slug} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                  {/* Region Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{region.flag}</span>
                        <h2 className="text-2xl font-bold text-slate-900">{region.name}</h2>
                        <span className="text-xs bg-purple-50 text-purple-700 font-semibold px-2.5 py-0.5 rounded-full border border-purple-100">
                          {regionCities.length} Cities
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 max-w-2xl">{region.description}</p>
                    </div>
                    <Link
                      to={`/locations/${region.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline shrink-0"
                    >
                      <span>Explore {region.name} Region Hub</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Cities in Region */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionCities.map((city) => (
                      <Card
                        key={city.slug}
                        className="flex flex-col h-full bg-slate-50/50 border border-slate-200/70 shadow-sm hover:border-purple-300 hover:shadow-card hover:bg-white transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl" role="img" aria-label="Flag">{city.flag}</span>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                {city.name}
                              </h3>
                              <p className="text-xs text-slate-500">{city.state}</p>
                            </div>
                          </div>
                          {city.isPhysicalOffice && (
                            <Badge variant="purple" size="sm">
                              Office
                            </Badge>
                          )}
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-2">
                          {city.description}
                        </p>

                        <div className="mb-4">
                          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                            Areas Served
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {city.localAreas.slice(0, 3).map((area, idx) => (
                              <span key={idx} className="text-[11px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200/70 font-medium">
                                {area}
                              </span>
                            ))}
                            {city.localAreas.length > 3 && (
                              <span className="text-[11px] bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-200/70">
                                +{city.localAreas.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs mt-auto">
                          <span className="text-slate-500 font-medium">
                            {city.servicesAvailable.length} Core Services
                          </span>
                          <Link
                            to={`/locations/${city.slug}`}
                            className="inline-flex items-center gap-1 font-bold text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1 transition-all"
                          >
                            <span>Explore City</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCities.map((city) => (
              <Card
                key={city.slug}
                className="flex flex-col h-full bg-white border border-slate-200/80 shadow-card hover:border-purple-300 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label="Flag">{city.flag}</span>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                        {city.name}
                      </h2>
                      <p className="text-xs text-slate-500">{city.state} • {city.regionName}</p>
                    </div>
                  </div>
                  {city.isPhysicalOffice && (
                    <Badge variant="purple" size="sm">
                      Physical Office
                    </Badge>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-2">
                  {city.description}
                </p>

                {/* Key Local Areas */}
                <div className="mb-4">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                    Areas Served
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {city.localAreas.slice(0, 4).map((area, idx) => (
                      <span key={idx} className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100 font-medium">
                        {area}
                      </span>
                    ))}
                    {city.localAreas.length > 4 && (
                      <span className="text-xs bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded border border-slate-100">
                        +{city.localAreas.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Primary Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm mt-auto">
                  <span className="text-slate-500 font-medium">
                    {city.servicesAvailable.length} Core Services
                  </span>
                  <Link
                    to={`/locations/${city.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore City Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Real Offices Callout */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
              Corporate Headquarters & Hubs
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 mb-1">
              Looking for Our Verified Physical Offices?
            </h3>
            <p className="text-sm text-slate-600">
              Meet our team in person at our Jaipur, Vrindavan, and Nepal offices.
            </p>
          </div>
          <Link
            to="/offices"
            className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition-colors shrink-0 shadow-md inline-flex items-center gap-2"
          >
            <span>View 3 Company Offices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Start Your Digital Growth Project Anywhere in India or Nepal"
        description="Whether you're based in Delhi NCR, Rajasthan, Bihar, or internationally, our specialized digital teams are ready to scale your business."
        whatsappUrl="https://wa.me/9779707382481?text=Hello%20Growth%20Service,%20I%20would%20like%20to%20discuss%20services%20in%20my%20city."
        phoneNumber="+91 93414 36937"
      />
    </div>
  );
};

export default LocationsHub;
