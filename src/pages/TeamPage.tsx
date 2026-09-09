import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Users, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { teamMembers, getTeamMembersByDepartment } from '../data/team';
import Breadcrumb from '../components/ui/Breadcrumb';
import TeamCard from '../components/ui/TeamCard';
import CTABanner from '../components/ui/CTABanner';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';
import DecorativeGrid from '../components/ui/DecorativeGrid';
import { Container, Section } from '../components/ui';
import { businessConfig } from '../config/business';

export const TeamPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredMembers = getTeamMembersByDepartment(selectedDept);

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Meet Our Team | Growth Service</title>
        <meta 
          name="description" 
          content="Meet the leadership, developers, SEO executives, and marketers behind Growth Service. Delivering web development, SEO, and digital marketing across India and Nepal." 
        />
        <link rel="canonical" href="https://www.growthservice.in/team" />

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
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 overflow-hidden">
        <DecorativeGrid pattern="dots" opacity={0.12} className="text-purple-400" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

        <Container className="relative z-10">
          <FadeIn direction="up" delay={50}>
            <Breadcrumb
              items={[{ label: 'Our Team' }]}
              className="text-purple-300 mb-6"
            />

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Users className="w-4 h-4 text-yellow-400" />
                <span>Growth Service Core Team</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Team</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Our multidisciplinary team collaborates across our company offices in Jaipur, Vrindavan, and Nepal to deliver transparent, results-driven digital marketing and web development.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Department Filter Controls */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm py-4">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 mr-2 hidden sm:inline">
              Department:
            </span>
            {['all', 'Leadership', 'Development', 'Marketing', 'Operations'].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedDept.toLowerCase() === dept.toLowerCase()
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept === 'all' ? `All Members (${teamMembers.length})` : dept}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <Section variant="transparent" spacing="none" className="py-16 md:py-24">
        <Container>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={70}>
            {filteredMembers.map((member, idx) => (
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

          {/* Office Collaboration Standards */}
          <FadeIn direction="up" delay={120}>
            <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                <span>Cross-Office Team Collaboration</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our team collaborates across our physical offices in Jaipur, Vrindavan, and Nepal. When you partner with Growth Service, you get direct access to seasoned professionals who specialize in technical SEO, modern web engineering, and digital marketing.
              </p>
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <Link to="/offices" className="text-sm font-bold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1.5 group">
                  <span>Explore Our 3 Company Offices</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Careers & Openings */}
          <FadeIn direction="up" delay={150}>
            <div id="careers" className="mt-8 bg-gradient-to-r from-purple-900 via-indigo-950 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  🚀 Join Growth Service
                </div>
                <h3 className="text-2xl font-bold mb-2">Build the Future of Digital Growth With Us</h3>
                <p className="text-sm text-purple-200 leading-relaxed mb-6 max-w-2xl">
                  We are always looking for ambitious SEO strategists, full-stack React/Node.js engineers, and performance marketing specialists across Jaipur, Vrindavan, and remote locations.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href={`mailto:${businessConfig.emails.primary}?subject=Career%20Application%20at%20Growth%20Service`}
                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-950 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors inline-flex items-center gap-2"
                  >
                    <span>Send Your Resume / Portfolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-purple-300">
                    Apply via email: {businessConfig.emails.primary}
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
        whatsappUrl={businessConfig.whatsapp.defaultUrl}
        phoneNumber={businessConfig.phones.indiaPrimary}
      />
    </div>
  );
};

export default TeamPage;
