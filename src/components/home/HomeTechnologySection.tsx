import { getFeaturedTechnologies } from "../../data/technologies";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../animations";

export const HomeTechnologySection: React.FC = () => {
  const technologies = getFeaturedTechnologies();

  return (
    <Section variant="default" aria-label="Technology Stack">
      <Container>
        <SectionHeader
          badge="Modern Architecture"
          title="Our"
          titleHighlight="Technology"
          highlightColor="text-emerald-600"
          description="Modern tools and technologies for cutting-edge solutions"
        />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4" staggerDelay={50}>
          {technologies.map((tech, index) => (
            <StaggerItem key={tech.id} index={index}>
              <div className="bg-gradient-to-b from-white to-purple-50/60 rounded-xl p-4 text-center border border-purple-200/70 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-100 hover:from-purple-50 hover:to-indigo-50/60 card-lift-sm transition-all duration-200 group">
                <div className={`flex justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${tech.color}`}>
                  <tech.Icon size={32} />
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{tech.name}</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{tech.type}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default HomeTechnologySection;
