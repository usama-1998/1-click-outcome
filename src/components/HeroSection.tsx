import React from 'react';
import { Icon } from '@iconify/react';

export const HeroSection: React.FC<{ onTryFreeClick: () => void }> = ({ onTryFreeClick }) => {
  return (
    <div className="max-w-4xl mx-auto text-center relative z-10 pt-8 px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8">
        <div className="flex -space-x-3">
          <img className="w-8 h-8 rounded-full border-2 border-[#101b19] object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
          <img className="w-8 h-8 rounded-full border-2 border-[#101b19] object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
          <img className="w-8 h-8 rounded-full border-2 border-[#101b19] object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
          <img className="w-8 h-8 rounded-full border-2 border-[#101b19] object-cover" src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client" />
          <img className="w-8 h-8 rounded-full border-2 border-[#101b19] object-cover" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Client" />
        </div>
        <span className="text-[12px] sm:text-[14px] leading-[20px] font-mono tracking-widest font-semibold uppercase text-white">Trusted by 50+ scaling businesses</span>
      </div>
      
      <h1 className="font-heading text-4xl sm:text-[44px] md:text-[54px] leading-tight md:leading-[1.1] font-bold tracking-tight mb-6 text-white">
        Wake up to booked appointments. <br className="hidden lg:block" />
        No hiring, no follow-up fatigue, <br className="hidden lg:block" />
        <span className="text-[#4ade80]">and no missed calls.</span>
      </h1>
      
      <p className="text-base sm:text-[18px] leading-relaxed md:leading-[28px] text-white/90 max-w-3xl mx-auto mb-6 px-2">
        Stop losing leads to missed calls and forgotten follow-ups. <br className="hidden md:block" /> 
        We fill your calendar with qualified appointments while you sleep.
      </p>

      <div className="w-full max-w-[90%] mx-auto h-[2px] mb-8 bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(255,255,255,0.3)_6px,rgba(255,255,255,0.3)_8px)]" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}></div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-widest text-white/90 mb-8">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-white text-background rounded-full w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]">
            <Icon icon="lucide:check" className="text-[10px] sm:text-[12px]" strokeWidth="4" />
          </div>
          <span>Never Miss a Call Again</span>
        </div>
        <span className="text-white/40 hidden md:inline">/</span>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:refresh-cw" className="text-white text-[16px] sm:text-[18px]" strokeWidth="2.5" />
          <span>Turn Old Leads Into New Money</span>
        </div>
        <span className="text-white/40 hidden md:inline">/</span>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:users" className="text-white text-[16px] sm:text-[18px]" strokeWidth="2.5" />
          <span>Get Reviews & Referrals on Autopilot</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
        <button 
          onClick={onTryFreeClick}
          className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-white/5"
        >
          View Live Demo
          <svg width="8" height="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.13397C10.1667 5.51887 10.1667 6.48113 9.5 6.86603L1.25 11.6292C0.583333 12.0141 -4.43632e-07 11.5329 -4.09986e-07 10.7631L6.11306e-09 1.23686C3.97864e-08 0.467061 0.583333 -0.0140656 1.25 0.370834L9.5 5.13397Z" fill="black"/>
          </svg>
        </button>
        <a href="#strategy" className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2">
          <Icon icon="lucide:calendar" className="text-[18px]" />
          Book a Strategy Call
        </a>
      </div>
    </div>
  );
};
