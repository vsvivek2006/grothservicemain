import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Info, Building, BookOpen, FileText, Sparkles, Phone } from "lucide-react";

export const DesktopNavigation: React.FC = () => {
  const mainNavItems = [
    { name: "ABOUT", href: "/about", icon: <Info className="h-3.5 w-3.5" /> },
    { name: "SOLUTIONS", href: "/packages", icon: <Building className="h-3.5 w-3.5" /> },
    { name: "BLOG", href: "/blog", icon: <BookOpen className="h-3.5 w-3.5" /> },
    { name: "RESOURCES", href: "/resources", icon: <FileText className="h-3.5 w-3.5" /> },
    { name: "FREE AUDIT", href: "/free-audit", highlight: true, icon: <Sparkles className="h-3.5 w-3.5" /> }
  ];

  return (
    <div className="hidden lg:flex items-center gap-1">
      {mainNavItems.map((item) => (
        <NavLink 
          key={item.name} 
          to={item.href} 
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg font-bold text-xs transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
              item.highlight 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm hover:shadow' 
                : isActive
                  ? 'bg-purple-100 text-purple-700 font-semibold'
                  : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
            }`
          }
        >
          {item.icon}
          {item.name}
        </NavLink>
      ))}

      {/* Primary Action CTA */}
      <Link
        to="/book-call"
        className="ml-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
      >
        <Phone className="h-3.5 w-3.5" />
        <span>Book Call</span>
      </Link>
    </div>
  );
};

export default DesktopNavigation;
