import React, { useState } from 'react';
import { ShieldCheck, User } from 'lucide-react';

interface EmployeeAvatarProps {
  name: string;
  image?: string;
  department: string;
  size?: 'md' | 'lg';
}

export const EmployeeAvatar: React.FC<EmployeeAvatarProps> = ({
  name,
  image,
  size = 'lg',
}) => {
  const [imageError, setImageError] = useState(!image);

  const initials = name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const isLg = size === 'lg';

  return (
    <div className="relative mx-auto flex items-center justify-center">
      {/* Outer Card Portrait Container */}
      <div 
        className={`relative overflow-hidden rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950 shadow-md ${
          isLg ? 'w-32 h-36 sm:w-36 sm:h-40' : 'w-20 h-24'
        }`}
      >
        {/* Subtle geometric dot pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/20 rounded-full blur-xl pointer-events-none" />

        {!imageError && image ? (
          <img
            src={image}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center relative z-10 transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative z-10 p-2 text-center select-none">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-1.5 backdrop-blur-sm shadow-inner">
              {initials ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-200 to-pink-300 font-extrabold text-lg tracking-wider">
                  {initials}
                </span>
              ) : (
                <User className="w-6 h-6 text-purple-300" />
              )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-200/90">
              Staff Member
            </span>
          </div>
        )}

        {/* Verified Corner Hologram */}
        <div 
          className="absolute top-2 right-2 z-20 bg-emerald-500/90 text-white p-1 rounded-full shadow-sm backdrop-blur-xs flex items-center justify-center"
          title="Verified Growth Service Staff"
        >
          <ShieldCheck className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeAvatar;
