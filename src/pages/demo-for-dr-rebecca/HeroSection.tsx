import React from 'react';
import { Icon } from '@iconify/react';
import { openRetellWidget } from '../../components/RetellWidget';

export const HeroSection: React.FC<{ onTryFreeClick: () => void }> = ({ onTryFreeClick }) => {
  return (
    <div className="max-w-4xl mx-auto text-center relative z-10 px-4">

      <div className="flex flex-col justify-center items-center mb-4 transform scale-90 sm:scale-100">
        <div className="relative flex items-center justify-center w-36 h-36 group perspective-1000">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/30 transition-colors duration-1000"></div>
          
          {/* Outer Orbital Ring (Slow) */}
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_12s_linear_infinite] group-hover:border-primary/40 transition-colors duration-700 shadow-[inset_0_0_15px_rgba(66,193,129,0.1)]">
          </div>

          {/* Inner Orbital Ring (Fast Reverse) */}
          <div className="absolute inset-5 border-[2px] border-dashed border-primary/20 rounded-full animate-[spin_8s_linear_reverse_infinite] group-hover:border-primary/50 transition-colors duration-700">
          </div>
          
          {/* Middle Decorative Ring */}
          <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]">
            <div className="absolute top-1/2 -left-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(66,193,129,0.8)]"></div>
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </div>

          {/* Core Orb */}
          <div 
            onClick={openRetellWidget}
            className="relative w-[72px] h-[72px] bg-gradient-to-br from-[#4ade80] to-[#16a34a] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(74,222,128,0.6)] z-10 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(74,222,128,0.8)] transition-all duration-500 transform-style-3d cursor-pointer border border-[#4ade80]/50"
          >
            <div className="absolute inset-1 bg-black/20 rounded-full blur-[2px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)] rounded-full"></div>
            <Icon icon="lucide:mic" className="text-white text-3xl relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:animate-pulse" />
          </div>


        </div>


      </div>
      
      <h1 className="font-heading text-4xl sm:text-5xl md:text-[62px] leading-tight md:leading-[60px] font-bold tracking-tight mb-6 text-white">
        Database Reactivation Agent for <br className="hidden sm:block" />
        <span className="text-[#42c181]">Osteopathic Midlife Health</span>
      </h1>
      
      <p className="text-base sm:text-[18px] leading-relaxed md:leading-[28px] text-white/90 max-w-3xl mx-auto mb-6 px-2">
        Reactivate your patient database on autopilot. Listen to a live demo of our AI agent calling leads who took the "Find Out If It's Menopause" quiz but never booked their free 15-minute consultation.
      </p>

      <div className="w-full max-w-[90%] mx-auto h-[2px] mb-8 bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(255,255,255,0.3)_6px,rgba(255,255,255,0.3)_8px)]" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}></div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] sm:text-[13px] font-mono font-semibold uppercase tracking-widest text-white/90 mb-8">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-white text-background rounded-full w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]">
            <Icon icon="lucide:check" className="text-[10px] sm:text-[12px]" strokeWidth="4" />
          </div>
          <span>Pay Per Booked Appointment</span>
        </div>
        <span className="text-white/40 hidden sm:inline">/</span>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:banknote" className="text-white text-[16px] sm:text-[18px]" strokeWidth="2.5" />
          <span>No Money Up Front</span>
        </div>
        <span className="text-white/40 hidden sm:inline">/</span>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:trending-down" className="text-white text-[16px] sm:text-[18px]" strokeWidth="2.5" />
          <span>Decrease Headcount</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
        <button 
          onClick={(e) => {
            openRetellWidget();
            if (onTryFreeClick) onTryFreeClick();
          }}
          className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-white/5"
        >
          View Live Demo
          <svg width="8" height="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.13397C10.1667 5.51887 10.1667 6.48113 9.5 6.86603L1.25 11.6292C0.583333 12.0141 -4.43632e-07 11.5329 -4.09986e-07 10.7631L6.11306e-09 1.23686C3.97864e-08 0.467061 0.583333 -0.0140656 1.25 0.370834L9.5 5.13397Z" fill="black"/>
          </svg>
        </button>
        <a href="https://cal.com/michael-w/1clickoutcome-30-min-event" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2">
          <Icon icon="lucide:calendar" className="text-[18px]" />
          Book a Strategy Call
        </a>
      </div>
    </div>
  );
};
