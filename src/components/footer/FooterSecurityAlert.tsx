import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { getBusinessEmail } from "../../selectors";
import { getMailtoHref } from "../../services";

export const FooterSecurityAlert: React.FC = () => {
  const businessEmail = getBusinessEmail();

  return (
    <div className="my-8 p-5 bg-gradient-to-r from-yellow-950/40 via-purple-950/40 to-yellow-950/40 border border-yellow-600/40 rounded-xl backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-yellow-400" />
              Official Authenticity & Scam Alert Warning
            </p>
            <p className="text-gray-300 text-xs mt-1 leading-relaxed">
              Growth Service does <span className="font-semibold text-white">NOT</span> recruit via Telegram, offer paid review tasks, or request advance deposits to personal accounts. Always verify communications through our official security portal.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          <Link 
            to="/verify" 
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Verify Official Domain & Staff
          </Link>
          <a 
            href={getMailtoHref(businessEmail, "Report Fraud")} 
            className="border border-yellow-500/60 hover:bg-yellow-500/10 text-yellow-300 font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5"
          >
            Report Fraud
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSecurityAlert;
