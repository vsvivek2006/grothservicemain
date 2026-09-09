import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Users, Building2, ShieldCheck, MapPin, ArrowRight, Sparkles 
} from 'lucide-react';
import { teamMembers, TeamMember } from '../data/team';
import { physicalOffices } from '../data/offices';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import TeamCard from '../components/ui/TeamCard';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';

export const TeamPage: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<string>('all');
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredMembers = teamMembers.filter((member) => {
    const matchesOffice = selectedOffice === 'all' || member.officeIds.includes(selectedOffice);
    const matchesDept = selectedDept === 'all' || member.department.toLowerCase() === selectedDept.toLowerCase();
    return matchesOffice && matchesDept;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Meet Our Team — Jaipur, Vrindavan & Nepal Personnel | Growth Service</title>
        <meta 
          name="description" 
          content="Meet the authentic leadership, full-stack developers, certified SEO executives, and marketers behind Growth Service across Jaipur, Vrindavan, and Nepal." 
        />
        <link rel="canonical" href="https://growthservice.in/team" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Growth Service",
              "employee": teamMembers.map(m => ({
                "@type": "Person",
                "name": m.name,
                "jobTitle": m.role,
                "description": m.bio,
                "knowsAbout": m.expertise
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#1b0834] to-slate-900 text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumb
            items={[{ label: 'Our Team' }]}
            className="text-purple-300 mb-6"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Users className="w-4 h-4 text-yellow-400" />
              <span>Authentic Company Personnel</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Meet Our Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Team Members</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Real specialists driving real business growth. Our multidisciplinary staff operates across our physical hubs in Jaipur, Vrindavan, and Nepal with zero outsourced guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Office & Department Filter Controls */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Office Filter */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Office:
              </span>
              <button
                onClick={() => setSelectedOffice('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedOffice === 'all'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Offices ({teamMembers.length})
              </button>
              {physicalOffices.map((off) => (
                <button
                  key={off.id}
                  onClick={() => setSelectedOffice(off.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedOffice === off.id
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{off.flag}</span>
                  <span>{off.city} Office</span>
                </button>
              ))}
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Role:
              </span>
              {['all', 'Leadership', 'Development', 'Marketing', 'Operations'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedDept.toLowerCase() === dept.toLowerCase()
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {dept === 'all' ? 'All Roles' : dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-lg font-bold text-slate-700 mb-2">No team members match the selected filter combination.</p>
            <button
              onClick={() => { setSelectedOffice('all'); setSelectedDept('all'); }}
              className="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm font-semibold mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
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
        )}

        {/* Office Assignment Explainer */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <span>Our Cross-Office Collaboration Standards</span>
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Our engineering team in Jaipur coordinates closely with executive strategists in Vrindavan and regional search analysts in Nepal. When you partner with Growth Service, you get direct access to seasoned professionals who specialize in technical SEO, modern web engineering, and ROI-driven marketing.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link to="/offices" className="text-sm font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1.5">
              <span>Explore Our 3 Physical Offices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Work with Our Dedicated Specialists?"
        description="Partner directly with experienced leaders and technical developers who take complete ownership of your digital metrics."
        whatsappUrl="https://wa.me/9779707382481?text=Hello%20Growth%20Service,%20I%20want%20to%20consult%20with%20your%20team."
        phoneNumber="+91 93414 36937"
      />
    </div>
  );
};

export default TeamPage;
