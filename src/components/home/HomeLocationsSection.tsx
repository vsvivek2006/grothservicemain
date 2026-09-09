import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import LocationCard from "../ui/LocationCard";
import { StaggerContainer, StaggerItem, FadeIn } from "../animations";
import { getPhysicalOffices, getAllCities } from "../../selectors";

export const HomeLocationsSection: React.FC = () => {
  const offices = getPhysicalOffices();
  const allCities = getAllCities();
  const expansionLocations = allCities.filter(c => !c.isPhysicalOffice).slice(0, 10);

  return (
    <Section variant="subtle" aria-label="Locations We Serve">
      <Container>
        <SectionHeader
          badge="Physical & Regional Presence"
          title="Locations We"
          titleHighlight="Serve"
          description={`Operating ${offices.length} company offices in ${offices.map(o => o.city).join(', ')}, with digital growth campaigns delivered across major regions.`}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Our {offices.length} Company Offices</h3>
            <p className="text-sm text-slate-500">Visit our active operational facilities in India & Nepal</p>
          </div>
          <Link
            to="/offices"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline"
          >
            <span>View All {offices.length} Company Offices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12" staggerDelay={90}>
          {offices.map((loc, idx) => (
            <StaggerItem key={loc.slug} index={idx} className="h-full">
              <LocationCard
                name={loc.name}
                state={loc.state}
                country={loc.country}
                flag={loc.flag}
                address={loc.address}
                phone={loc.phone}
                mapLink={loc.mapLink}
                timings={loc.timings}
                isHeadOffice={loc.slug === 'vrindavan'}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Regional Hub Expansion Links */}
        <FadeIn direction="up" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                <span>Expanding Regional Service Coverage</span>
              </h3>
              <p className="text-sm text-slate-600">
                Connect directly with our digital marketing specialists for localized campaigns in key metropolitan areas:
              </p>
            </div>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md shrink-0 group"
            >
              <span>All Locations Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {expansionLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl border border-slate-200 hover:border-purple-300 transition-all flex items-center gap-1.5 group"
              >
                <span>{loc.flag}</span>
                <span>{loc.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default HomeLocationsSection;
