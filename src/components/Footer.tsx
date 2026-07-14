import React from 'react';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border pt-[160px] pb-12 px-6 -mt-[40px] relative z-0 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-16 mb-16">
          <h2 className="font-heading text-3xl md:text-[42px] font-bold text-foreground text-center lg:text-left tracking-tight">
            Experience effortless scaling with elite AI operations.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <a href="#strategy" className="bg-white hover:bg-gray-100 text-black font-semibold px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2 text-[15px]">
              Book Strategy Call
              <span className="text-[10px] ml-1">▶</span>
            </a>
            <a href="#demo" className="border border-white/10 hover:bg-white/5 text-foreground font-semibold px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2.5 text-[15px]">
              <Icon icon="lucide:play-circle" className="text-lg opacity-80" />
              Watch Demo
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          {/* Left Column: Brand & Copyright */}
          <div className="flex flex-col items-start gap-8 lg:w-1/3">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ade80] to-[#22c55e] rounded-[6px] transform rotate-6 opacity-40"></div>
                <div className="bg-gradient-to-br from-[#4ade80] to-[#16a34a] text-[#0d1614] w-[22px] h-[22px] rounded-[5px] flex items-center justify-center font-black text-sm shadow-[0_0_10px_rgba(74,222,128,0.3)] relative z-10 border border-[#4ade80]/50">1</div>
                <Icon icon="lucide:mouse-pointer-2" className="absolute -bottom-1 -left-1 text-foreground text-[12px] z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform -scale-x-100" strokeWidth="2.5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading font-black text-foreground text-[16px] tracking-tight leading-none mb-1">Click Outcome</span>
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground">
              © 2026 1 Click Outcome Agency · All rights reserved.
            </p>
            <a href="#audit" className="border border-white/10 hover:bg-white/5 text-foreground font-medium px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-2 text-[13px]">
              Get Free Systems Audit
              <Icon icon="lucide:arrow-up-right" className="text-[15px] opacity-70" />
            </a>
            <div className="flex items-center gap-6 text-muted-foreground mt-2">
              <a href="#" className="hover:text-foreground transition-colors"><Icon icon="lucide:twitter" className="text-[18px]" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Icon icon="lucide:linkedin" className="text-[18px]" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Icon icon="lucide:instagram" className="text-[18px]" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Icon icon="lucide:youtube" className="text-[18px]" /></a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8 max-w-3xl">
            <div>
              <h4 className="text-foreground font-bold text-[12px] mb-6 tracking-wider uppercase">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">AI Receptionist</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Lead Reactivation</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Referral Automation</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">CRM Integration</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Custom Build-outs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-bold text-[12px] mb-6 tracking-wider uppercase">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-bold text-[12px] mb-6 tracking-wider uppercase">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Automation ROI Calculator</a></li>
                <li><a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Free Guides</a></li>
                <li className="pt-2">
                  <a href="#" className="text-[14px] text-foreground hover:text-white transition-colors inline-flex items-center gap-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#42c181] shadow-[0_0_8px_rgba(66,193,129,0.8)]"></span>
                    Systems Operational
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Watermark */}
      <div 
        className="absolute -bottom-[2vw] left-0 right-0 w-full flex justify-center text-[10vw] font-heading font-black text-transparent select-none pointer-events-none tracking-tight whitespace-nowrap z-0 opacity-40" 
        style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)' }}
      >
        1 Click Outcome
      </div>
    </footer>
  );
};
