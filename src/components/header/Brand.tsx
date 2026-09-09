import React from "react";
import { Link } from "react-router-dom";
import { getBusinessName, getBusinessTagline } from "../../selectors";

export const Brand: React.FC = () => {
  const businessName = getBusinessName();
  const tagline = getBusinessTagline();

  return (
    <div className="flex items-center flex-shrink-0">
      <Link 
        to="/" 
        className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 group"
        aria-label="Home"
      >
        <div className="h-12 w-12 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all">
          <img 
            src="/logo.png" 
            alt={`${businessName} Logo`} 
            className="h-10 w-10 object-contain p-1"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'h-full w-full flex items-center justify-center text-purple-600 font-extrabold text-xl';
              fallback.textContent = 'GS';
              e.currentTarget.parentNode?.appendChild(fallback);
            }}
          />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            {businessName}
          </h1>
          <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
            {tagline}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
