import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
  'aria-label'?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
  className = "w-5 h-5", 
  size,
  'aria-label': ariaLabel 
}) => {
  return (
    <FaWhatsapp 
      className={className} 
      size={size} 
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    />
  );
};

export default WhatsAppIcon;
