import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const Navigation: React.FC<{
  selectedLanguage: string;
  onLanguageChange: () => void;
}> = ({ selectedLanguage, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .header-px {
          padding-left: calc(var(--pattern-w, 6px) + 1.2rem);
          padding-right: calc(var(--pattern-w, 6px) + 1.2rem);
        }
        .header-line-l { left: 6px; }
        .header-line-r { right: 6px; }
        
        @media (min-width: 768px) { 
          .header-px { --pattern-w: 38px; padding-left: calc(var(--pattern-w) + 2rem); padding-right: calc(var(--pattern-w) + 2rem); }
          .header-line-l { left: 38px; } 
          .header-line-r { right: 38px; } 
        }
        @media (min-width: 1024px) { 
          .header-px { --pattern-w: 52px; }
          .header-line-l { left: 52px; } 
          .header-line-r { right: 52px; } 
        }
        @media (min-width: 1280px) { 
          .header-px { --pattern-w: 68px; }
          .header-line-l { left: 68px; } 
          .header-line-r { right: 68px; } 
        }
      `}</style>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#14221F] border-b border-[#31403E] w-full font-sans">
        {/* Side boundary lines */}
        <div className="absolute top-0 bottom-0 w-px bg-[#31403E] header-line-l pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 w-px bg-[#31403E] header-line-r pointer-events-none"></div>
        
        <div className="flex h-full w-full items-center justify-between header-px mx-auto max-w-[1920px]">
          
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ade80] to-[#22c55e] rounded-[10px] transform rotate-6 opacity-40"></div>
                <div className="bg-gradient-to-br from-[#4ade80] to-[#16a34a] text-[#0d1614] w-[30px] h-[30px] rounded-[8px] flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(74,222,128,0.3)] relative z-10 border border-[#4ade80]/50">1</div>
                <Icon icon="lucide:mouse-pointer-2" className="absolute -bottom-2 -right-2 text-white text-[15px] z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-float-smooth" strokeWidth="2.5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading font-black text-white text-[16px] tracking-tight leading-none mb-1">Click Outcome</span>
                <span className="text-[8px] font-mono text-[#4ade80] uppercase tracking-[0.25em] leading-none opacity-90">AI Operations</span>
              </div>
            </a>
            
            {/* Divider */}
            <div className="hidden lg:block w-px h-5 bg-[#31403E] mx-8"></div>
            
            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              <a href="#services" className="text-[13.5px] font-bold text-white hover:text-white/80 transition-colors">Services</a>
              <a href="#case-studies" className="text-[13.5px] font-bold text-white hover:text-white/80 transition-colors">Case Studies</a>
              <a href="#pricing" className="text-[13.5px] font-bold text-white hover:text-white/80 transition-colors">Pricing</a>
              <a href="#contact" className="text-[13.5px] font-bold text-white hover:text-white/80 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Language */}
            <button 
              onClick={onLanguageChange}
              className="hidden sm:flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                alt={`${selectedLanguage} Flag`} 
                className="h-4 w-4 rounded-full object-cover" 
                src="https://simplicity.ai/_next/static/media/uk.5ddfd53d.svg" 
              />
              <span className="text-[13.5px] font-bold text-white tracking-wide">{selectedLanguage}</span>
            </button>
            
            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-[#31403E] mx-7"></div>
            
            {/* Auth Buttons */}
            <a href="#login" className="hidden md:block text-[13.5px] font-bold text-white hover:text-white/80 transition-colors mr-7">Client Login</a>
            <a href="#demo" className="bg-white text-black hover:bg-gray-100 text-[13.5px] font-bold px-5 py-2.5 rounded-full transition-all hidden sm:flex items-center gap-1">
              Book Strategy Call <span className="text-[9px] ml-0.5">▶</span>
            </a>
            <a href="#demo" className="bg-white text-black hover:bg-gray-100 text-[12px] font-bold px-4 py-2 rounded-full transition-all sm:hidden flex items-center gap-1 ml-4">
              Book Call
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden ml-4 text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} className="text-2xl" />
            </button>
          </div>
          
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-[#14221F] border-b border-[#31403E] px-6 py-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-white hover:text-[#4ade80] transition-colors py-2 border-b border-white/5">Services</a>
            <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-white hover:text-[#4ade80] transition-colors py-2 border-b border-white/5">Case Studies</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-white hover:text-[#4ade80] transition-colors py-2 border-b border-white/5">Pricing</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-white hover:text-[#4ade80] transition-colors py-2 border-b border-white/5">Contact</a>
            <a href="#login" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-white hover:text-[#4ade80] transition-colors py-2 md:hidden">Client Login</a>
          </div>
        )}
      </nav>
      <div className="h-[72px] w-full"></div>
    </>
  );
};
