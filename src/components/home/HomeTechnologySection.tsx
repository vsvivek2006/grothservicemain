import React from "react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiTypescript, SiGraphql
} from 'react-icons/si';
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../animations";

export const HomeTechnologySection: React.FC = () => {
  const technologies = [
    { name: "React.js",    type: "Frontend",  Icon: SiReact,      color: "text-sky-500" },
    { name: "Next.js",     type: "Frontend",  Icon: SiNextdotjs,  color: "text-slate-900" },
    { name: "Node.js",     type: "Backend",   Icon: SiNodedotjs,  color: "text-emerald-600" },
    { name: "Express.js",  type: "Backend",   Icon: SiExpress,    color: "text-slate-700" },
    { name: "MongoDB",     type: "Database",  Icon: SiMongodb,    color: "text-emerald-500" },
    { name: "Tailwind CSS",type: "Styling",   Icon: SiTailwindcss,color: "text-sky-400" },
    { name: "TypeScript",  type: "Language",  Icon: SiTypescript, color: "text-blue-600" },
    { name: "GraphQL",     type: "API",       Icon: SiGraphql,    color: "text-pink-600" },
  ];

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
            <StaggerItem key={index} index={index}>
              <div className="bg-white rounded-xl p-4 text-center border border-slate-200/80 hover:border-purple-300/80 hover:shadow-card-hover card-lift-sm transition-all duration-200 group">
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
