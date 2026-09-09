import React, { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { FadeIn } from "../animations";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}

export const HomeTestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Growth Service's SEO strategies helped us rank on the first page of Google. Our organic traffic increased by 300% in just 3 months. Highly recommended!",
      author: "Rajesh Kumar",
      role: "Business Owner",
      company: "HealthPlus Clinic"
    },
    {
      text: "The team at Growth Service delivered a stunning e-commerce website that exceeded our expectations. Professional, responsive, and excellent support.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions"
    },
    {
      text: "Our social media engagement doubled within weeks of implementing their strategy. Growth Service truly understands digital marketing.",
      author: "Priya Sharma",
      role: "Brand Manager",
      company: "StyleHub Fashion"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Section variant="subtle" aria-label="Client Testimonials">
      <Container size="narrow">
        <SectionHeader
          badge="Verified Client Reviews"
          title="Client"
          titleHighlight="Testimonials"
          description="Real feedback from our valued clients"
        />

        <FadeIn direction="up">
          <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-card-hover overflow-hidden">
            {/* Decorative large quote */}
            <div className="absolute top-6 left-6 opacity-[0.06] pointer-events-none select-none" aria-hidden="true">
              <Quote className="w-32 h-32 text-purple-600" />
            </div>

            <div className="relative z-10 p-8 sm:p-12">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Review</span>
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {testimonials[currentTestimonial].author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-slate-500">
                    {testimonials[currentTestimonial].role} · <span className="text-purple-600 font-semibold">{testimonials[currentTestimonial].company}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 px-8 sm:px-12 pb-8" aria-label="Testimonial Navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 ${
                    index === currentTestimonial
                      ? 'bg-purple-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default HomeTestimonialsSection;
