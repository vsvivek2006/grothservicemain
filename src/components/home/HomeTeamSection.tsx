import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import TeamCard from "../ui/TeamCard";
import { StaggerContainer, StaggerItem } from "../animations";
import { getAllTeamMembers } from "../../selectors";

export const HomeTeamSection: React.FC = () => {
  const teamMembers = getAllTeamMembers();

  return (
    <Section variant="subtle" aria-label="Our Team">
      <Container>
        <SectionHeader
          badge="Leadership & Specialists"
          title="Meet Our"
          titleHighlight="Team"
          description="Experienced strategists, full-stack developers, and marketers operating across Jaipur, Vrindavan, and Nepal."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" staggerDelay={90}>
          {teamMembers.slice(0, 4).map((member, idx) => (
            <StaggerItem key={member.id} index={idx} className="h-full">
              <TeamCard
                name={member.name}
                role={member.role}
                department={member.department}
                image={member.image}
                bio={member.bio}
                expertise={[...member.expertise]}
                linkedinUrl={member.socialLinks?.linkedin}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <span>Meet the Full Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default HomeTeamSection;
