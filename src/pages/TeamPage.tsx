import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Users, ShieldCheck, ArrowRight, Building2, Sparkles, Rocket 
} from 'lucide-react';
import { 
  getAllTeamMembers, 
  getTeamMembersByOffice,
  getPhysicalOffices,
  getBusinessName,
  getBusinessEmail,
  getPrimaryPhone,
  getCanonicalOrigin
} from '../selectors';
import { getMailtoHref, getPrimaryWhatsAppUrl } from '../services';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { Container, Section } from '../components/ui';
import { OfficeFilter } from '../components/team/OfficeFilter';
import { OfficeTeamSection } from '../components/team/OfficeTeamSection';

export const TeamPage: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<string>('all');
  const physicalOfficesList = getPhysicalOffices();
  const businessEmail = getBusinessEmail();
  const primaryPhone = getPrimaryPhone();
  const businessName = getBusinessName();
  const canonicalOrigin = getCanonicalOrigin();

  const allEmployees = useMemo(() => getAllTeamMembers(), []);

  // Filtered offices to display: if 'all', show all offices that exist; otherwise, show only the selected office
  const displayedOffices = useMemo(() => {
    if (selectedOffice === 'all') {
      return physicalOfficesList;
    }
    return physicalOfficesList.filter(
      (o) => o.id.toLowerCase() === selectedOffice.toLowerCase()
    );
  }, [selectedOffice, physicalOfficesList]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Meet Our Team | Growth Service Employee Directory</title>
        <meta 
          name="description" 
          content="Meet the verified leadership, developers, SEO specialists, and marketing team across Growth Service's offices in Jaipur, Vrindavan, and Nepal." 
        />
        <link rel="canonical" href="https://www.growthservice.in/team" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": `Meet Our Team - ${businessName}`,
            "description": `Official employee directory of ${businessName} across Jaipur, Vrindavan, and Nepal branches.`,
            "mainEntity": {
              "@type": "Organization",
              "name": businessName,
              "url": canonicalOrigin,
              "employee": allEmployees.map(m => ({
                "@type": "Person",
                "name": m.name,
                "jobTitle": m.role,
                "description": m.bio,
                "knowsAbout": m.expertise,
                "workLocation": {
                  "@type": "Place",
                  "name": `${m.officeId.toUpperCase()} Office, ${businessName}`
                }
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <FadeIn direction="up" delay={50}>
            <Breadcrumb
              items={[{ label: 'Our Team' }]}
              className="text-purple-300 mb-6"
            />

            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Users className="w-4 h-4 text-yellow-400" />
                <span>Verified Corporate Directory</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 font-bold">{allEmployees.length} Staff Members</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Team</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl">
                Our multidisciplinary team collaborates across our company offices in Jaipur, Vrindavan, and Nepal to deliver transparent, results-driven digital marketing and web development.
              </p>

              {/* Quick Office Anchors / Status */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {physicalOfficesList.map((office) => {
                  const count = allEmployees.filter(m => m.officeId.toLowerCase() === office.id.toLowerCase()).length;
                  return (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOffice(office.id)}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-100 transition-colors"
                    >
                      <span>{office.flag}</span>
                      <span>{office.city} Office</span>
                      <span className="bg-yellow-400/20 text-yellow-300 text-[11px] font-bold px-1.5 rounded">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Sticky Interactive Office Filter */}
      <OfficeFilter
        selectedOffice={selectedOffice}
        onSelectOffice={setSelectedOffice}
        teamMembers={[...allEmployees]}
      />

      {/* Main Office-Wise Directory Content */}
      <Section variant="transparent" spacing="none" className="py-12 md:py-20">
        <Container>
          {/* Active Filter State Announcement for Screen Readers */}
          <div className="sr-only" role="status" aria-live="polite">
            {selectedOffice === 'all' 
              ? `Showing all team members across 3 corporate locations (${allEmployees.length} members total)`
              : `Showing team members for ${selectedOffice} office (${getTeamMembersByOffice(selectedOffice).length} members)`
            }
          </div>

          {/* Render Office Sections */}
          <div className="space-y-12">
            {displayedOffices.map((office) => {
              const officeEmployees = allEmployees.filter(
                (m) => m.officeId.toLowerCase() === office.id.toLowerCase()
              );

              return (
                <OfficeTeamSection
                  key={office.id}
                  office={office}
                  employees={officeEmployees}
                />
              );
            })}
          </div>

          {/* Cross-Office Team Collaboration Banner */}
          <FadeIn direction="up" delay={100}>
            <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 shadow-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                    <span>Cross-Border Operational Synergy</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Unified Multi-Office Execution
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our team collaborates across our physical offices in Jaipur, Vrindavan, and Nepal. When you partner with Growth Service, you get direct access to seasoned professionals who specialize in technical SEO, modern web engineering, and digital marketing.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/offices" 
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Explore Our 3 Physical Offices</span>
                  </Link>

                  <Link
                    to="/verify"
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verify Authenticity</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Careers & Openings */}
          <FadeIn direction="up" delay={150}>
            <div id="careers" className="mt-8 bg-gradient-to-r from-purple-900 via-indigo-950 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <Rocket className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Join Growth Service</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Build the Future of Digital Growth With Us</h3>
                <p className="text-sm text-purple-200 leading-relaxed mb-6 max-w-2xl">
                  We are always looking for ambitious SEO strategists, full-stack React/Node.js engineers, and performance marketing specialists across Jaipur, Vrindavan, and remote locations.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href={getMailtoHref(businessEmail, `Career Application at ${businessName}`)}
                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-950 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors inline-flex items-center gap-2"
                  >
                    <span>Send Your Resume / Portfolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-purple-300">
                    Apply via email: {businessEmail}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Work with Our Dedicated Team?"
        description="Partner directly with experienced leaders and technical developers who take complete ownership of your digital metrics."
        whatsappUrl={getPrimaryWhatsAppUrl()}
        phoneNumber={primaryPhone}
      />
    </div>
  );
};

export default TeamPage;
