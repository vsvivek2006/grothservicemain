import React from "react";
import { Star, Users, Award } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { getTrustSignals } from "../../selectors";

export const FooterTrustSection: React.FC = () => {
  const trustSignals = getTrustSignals();

  return (
    <FadeIn direction="up" className="text-center mb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
      <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-0.5" />
            ))}
          </div>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm">
            {trustSignals.displayString}
          </span>
          <span className="text-gray-300 text-sm flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {trustSignals.reviewCount}+ Reviews
          </span>
        </div>
        <p className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-2">
          Trusted by 500+ Businesses Worldwide
        </p>
        <p className="text-gray-300 text-sm">
          ⭐ Rated 4.8/5 average across Google, Facebook & Trustpilot
        </p>
        <div className="flex justify-center gap-6 mt-3 text-xs text-gray-400">
          <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Google Partner</span>
          <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Meta Business Partner</span>
          <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Trustpilot 4.7</span>
        </div>
      </div>
    </FadeIn>
  );
};

export default FooterTrustSection;
