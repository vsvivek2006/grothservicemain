import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { StaggerContainer, StaggerItem } from "../animations";

export const HomeCaseStudiesSection: React.FC = () => {
  const featuredCases = [
    {
      title: "Tour & Travel Portal",
      category: "Website Development",
      result: "500% increase in online bookings",
      client: "Travel Agency",
      tags: ["React.js", "Node.js", "Payment Gateway"],
      path: "/case-studies"
    },
    {
      title: "SEO Optimization for Hotel Chain",
      category: "SEO Services",
      result: "300% Organic Traffic Growth",
      client: "Radhe Krishna Guest House",
      tags: ["Local SEO", "GMB", "Content Strategy"],
      path: "/case-studies"
    },
    {
      title: "E-commerce Store - Fashion",
      category: "Website Development",
      result: "300% sales growth in 3 months",
      client: "Fashion Brand",
      tags: ["MERN Stack", "Payment Gateway", "Inventory"],
      path: "/case-studies"
    }
  ];

  return (
    <Section variant="default" aria-label="Our Work">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="mb-3">
              <Badge variant="purple" size="md">
                Proven Case Studies
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Measurable Impact & <span className="text-purple-600">Client Results</span>
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl">
              Real outcomes delivered for businesses across tourism, e-commerce, and healthcare.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={100}>
          {featuredCases.map((item, idx) => (
            <StaggerItem key={idx} index={idx} className="h-full">
              <Card className="flex flex-col h-full bg-slate-50/70 border border-slate-200 card-lift group hover:border-purple-300/80 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-purple-600">
                  <span>{item.category}</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[11px] font-bold">
                    VERIFIED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4">Client: {item.client}</p>

                <div className="bg-purple-100/60 p-3 rounded-xl border border-purple-200/50 mb-5 group-hover:bg-purple-100 transition-colors">
                  <div className="text-xs uppercase tracking-wider text-purple-700 font-bold">Outcome</div>
                  <div className="text-base font-extrabold text-purple-900">{item.result}</div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-200/60">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs bg-white text-slate-600 px-2.5 py-1 rounded border border-slate-200 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default HomeCaseStudiesSection;
