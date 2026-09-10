import React from "react";
import { Menu, X } from "lucide-react";

interface HeaderActionsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center lg:hidden">
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
