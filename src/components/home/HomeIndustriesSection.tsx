import React from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import IndustryCard from "../ui/IndustryCard";
import { StaggerContainer, StaggerItem } from "../animations";
import { getAllIndustries } from "../../selectors";

export const HomeIndustriesSection: React.FC = () => {
  const industriesData = getAllIndustries();

  return (
    <Section variant="default" aria-label="Industries We Serve">
      <Container>
        <SectionHeader
          badge="Sector Expertise"
          title="Industries We"
          titleHighlight="Serve"
          description="Tailored digital marketing funnels, search authority, and custom web platforms built for high-growth sectors."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={90}>
          {industriesData.map((industry, idx) => (
            <StaggerItem key={industry.id} index={idx} className="h-full">
              <IndustryCard
                name={industry.name}
                iconName={industry.iconName}
                shortDesc={industry.shortDesc}
                keySolutions={industry.keySolutions}
                metricsHighlight={industry.metricsHighlight}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default HomeIndustriesSection;
