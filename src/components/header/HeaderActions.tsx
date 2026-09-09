import React from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { getNepalWhatsAppUrl } from "../../services";

interface HeaderActionsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center space-x-2 lg:hidden">
      <a
        href={getNepalWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#25D366] text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-sm flex items-center justify-center"
        aria-label="Chat with Growth Service on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-all min-h-[44px] min-w-[44px]"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default HeaderActions;
