import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import Container from "../ui/Container";
import { getPhysicalOffices } from "../../selectors";

export const HomePresenceRibbon: React.FC = () => {
  const offices = getPhysicalOffices();

  return (
    <section className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 border-y border-purple-700/50 py-3.5 text-white shadow-md relative z-20">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <span className="font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span>Our Offices:</span>
          </span>
          {offices.map((office) => (
            <a 
              key={office.id}
              href={office.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/10 transition-all hover:scale-102"
            >
              <span>{office.flag}</span>
              <span className="font-semibold text-white">{office.name}</span>
              <span className="text-purple-200 text-xs hidden md:inline border-l border-white/20 pl-2">
                {office.address.split(',')[0]}
              </span>
              <ExternalLink className="w-3 h-3 text-purple-300" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomePresenceRibbon;
