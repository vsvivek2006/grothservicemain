import React from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { StaggerContainer, StaggerItem } from "../animations";
import { getPhysicalOffices } from "../../selectors";

export const HomeTrustSection: React.FC = () => {
  const offices = getPhysicalOffices();

  return (
    <Section padding="sm" className="bg-white border-b border-slate-200/80">
      <Container>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-slate-200/80 gap-6 md:gap-0 text-center" staggerDelay={70}>
          <StaggerItem index={0} className="px-4">
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                500+
              </div>
              <div className="text-sm font-bold text-slate-900">Businesses Scaled</div>
              <div className="text-xs text-slate-500 mt-0.5">India & Global Delivery</div>
            </div>
          </StaggerItem>
          <StaggerItem index={1} className="px-4">
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                300+
              </div>
              <div className="text-sm font-bold text-slate-900">Happy Clients</div>
              <div className="text-xs text-slate-500 mt-0.5">Across Diverse Sectors</div>
            </div>
          </StaggerItem>
          <StaggerItem index={2} className="px-4">
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                {offices.length} Offices
              </div>
              <div className="text-sm font-bold text-slate-900">Physical Facilities</div>
              <div className="text-xs text-slate-500 mt-0.5">
                {offices.map(o => o.city).join(' • ')}
              </div>
            </div>
          </StaggerItem>
          <StaggerItem index={3} className="px-4">
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-200">
                24/7
              </div>
              <div className="text-sm font-bold text-slate-900">Dedicated Support</div>
              <div className="text-xs text-slate-500 mt-0.5">Direct WhatsApp Helpline</div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default HomeTrustSection;
