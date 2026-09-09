import React from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import ProcessTimeline from "../ui/ProcessTimeline";
import { FadeIn } from "../animations";

export const HomeProcessSection: React.FC = () => {
  const process = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We understand your business goals, target audience, and market landscape.",
      icon: "search"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Create customized digital strategies with clear objectives and timelines.",
      icon: "strategy"
    },
    {
      step: "03",
      title: "Execution & Development",
      description: "Our expert team implements solutions with precision and quality.",
      icon: "development"
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring, analysis, and optimization for maximum results.",
      icon: "growth"
    }
  ];

  return (
    <Section variant="default" aria-label="Our Process">
      <Container>
        <SectionHeader
          badge="Execution Framework"
          title="How We"
          titleHighlight="Work"
          highlightColor="text-blue-600"
          description="Our structured process ensures successful project delivery"
        />
        <FadeIn direction="up" distance={24} duration={600}>
          <ProcessTimeline steps={process} />
        </FadeIn>
      </Container>
    </Section>
  );
};

export default HomeProcessSection;
