import React from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../animations";

export const HomeClientsSection: React.FC = () => {
  const clients = [
    { name: "Fragsook", industry: "E-commerce", logo: "🛒" },
    { name: "Digimarcy", industry: "Digital Marketing", logo: "📱" },
    { name: "pujahelp.in", industry: "Religious Services", logo: "🕉️" },
    { name: "Radhikasadan Guest House", industry: "Hospitality", logo: "🏨" },
    { name: "360Egaleweb", industry: "Web Development", logo: "🌐" },
    { name: "Dizigrow", industry: "Digital Agency", logo: "🚀" },
    { name: "ceclift", industry: "Construction", logo: "🏗️" },
    { name: "TechCorp Solutions", industry: "Technology", logo: "💻" },
    { name: "HealthPlus Clinic", industry: "Healthcare", logo: "🏥" },
    { name: "EduSmart Academy", industry: "Education", logo: "🎓" },
    { name: "Foodie's Delight", industry: "Restaurant", logo: "🍽️" },
    { name: "StyleHub Fashion", industry: "Retail", logo: "👗" }
  ];

  return (
    <Section variant="subtle" aria-label="Our Clients">
      <Container>
        <SectionHeader
          badge="Portfolio Proof"
          title="Our"
          titleHighlight="Trusted Clients"
          description="500+ businesses trust us for their digital growth"
        />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6" staggerDelay={60}>
          {clients.map((client, index) => (
            <StaggerItem key={index} index={index}>
              <div 
                className="bg-white rounded-xl p-5 text-center border border-slate-200/80 hover:border-purple-300 hover:shadow-card card-lift-sm transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ease-luxury">
                  {client.logo}
                </div>
                <h3 className="font-bold text-slate-900 text-sm truncate">{client.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{client.industry}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default HomeClientsSection;
