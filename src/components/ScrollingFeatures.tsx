import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export const ScrollingFeatures: React.FC<{ onActionClick: () => void }> = ({ onActionClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      badgeIcon: "lucide:phone-call",
      badgeText: "Never Miss a Call Again",
      title: "Never Miss Another Opportunity",
      description: "When you miss a call, you miss revenue. Our 24/7 system instantly texts back missed calls, engages the prospect in natural conversation, and books them directly onto your calendar.",
      ctaText: "See How It Works",
      ctaHref: "#receptionist",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Phone Mockup */}
          <div className="w-full max-w-[260px] aspect-[9/19] bg-black rounded-[36px] border-4 border-gray-800 p-3 shadow-2xl relative flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-gray-800 rounded-b-xl z-20"></div>
            {/* Header */}
            <div className="text-center pb-2 border-b border-white/10 mt-4">
               <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-1">
                 <Icon icon="lucide:bot" className="text-primary text-xl" />
               </div>
               <p className="text-[10px] font-semibold text-white">AI Assistant</p>
            </div>
            {/* Chat Body */}
            <div className="flex-1 overflow-hidden pt-4 flex flex-col gap-3">
               <div className="bg-gray-800 text-white text-[11px] p-2.5 rounded-2xl rounded-tl-sm max-w-[85%] self-start leading-relaxed shadow-sm">
                 Hi! You reached 1 Click Outcome. Sorry we missed your call, how can I help you today?
               </div>
               <div className="bg-primary text-black font-medium text-[11px] p-2.5 rounded-2xl rounded-tr-sm max-w-[85%] self-end shadow-sm">
                 I need to book a consultation.
               </div>
               <div className="bg-gray-800 text-white text-[11px] p-2.5 rounded-2xl rounded-tl-sm max-w-[85%] self-start leading-relaxed shadow-sm">
                 I can help with that. Are you available Tuesday at 2:00 PM EST?
               </div>
               <div className="bg-primary text-black font-medium text-[11px] p-2.5 rounded-2xl rounded-tr-sm max-w-[85%] self-end shadow-sm">
                 Yes, that works perfectly.
               </div>
               <div className="bg-gray-800 text-white text-[11px] p-2.5 rounded-2xl rounded-tl-sm max-w-[85%] self-start flex items-center gap-2 shadow-sm">
                 <Icon icon="lucide:calendar-check" className="text-primary text-lg shrink-0" />
                 Great! You're booked.
               </div>
            </div>
            {/* Keyboard hint */}
            <div className="h-10 border-t border-white/10 mt-auto flex items-center justify-center opacity-30">
               <div className="w-1/2 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 bg-white text-black text-xs font-bold px-3 py-2 rounded-xl shadow-xl flex items-center gap-2 transform rotate-6 animate-bounce">
            <Icon icon="lucide:calendar-clock" className="text-primary" /> Booked!
          </div>
        </div>
      )
    },
    {
      badgeIcon: "lucide:refresh-cw",
      badgeText: "Turn Old Leads Into New Money",
      title: "Wake Up Your Dormant Contacts",
      description: "Stop letting old leads gather dust. We deploy intelligent, conversational SMS and Email campaigns to re-engage past prospects, turning cold lists into warm appointments.",
      ctaText: "Reactivate Leads",
      ctaHref: "#reactivation",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* CRM Mockup */}
          <div className="w-full max-w-[320px] bg-[#16211e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            {/* CRM Header */}
            <div className="bg-black/40 p-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <p className="text-[10px] font-mono text-white/50">Lead Pipeline View</p>
            </div>
            {/* CRM Body */}
            <div className="p-4 flex gap-4 overflow-hidden relative">
              {/* Column 1 */}
              <div className="flex-1 space-y-3 opacity-50">
                <div className="text-[10px] font-bold text-white/60 mb-2">Cold Leads</div>
                <div className="bg-white/5 border border-white/10 p-2 rounded">
                  <div className="w-3/4 h-2 bg-white/20 rounded mb-1"></div>
                  <div className="w-1/2 h-1.5 bg-white/10 rounded"></div>
                </div>
                <div className="bg-white/5 border border-white/10 p-2 rounded">
                  <div className="w-3/4 h-2 bg-white/20 rounded mb-1"></div>
                  <div className="w-1/2 h-1.5 bg-white/10 rounded"></div>
                </div>
              </div>
              
              {/* Animated Arrow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                 <Icon icon="lucide:arrow-right" className="text-black text-lg" />
              </div>

              {/* Column 2 */}
              <div className="flex-1 space-y-3">
                <div className="text-[10px] font-bold text-primary mb-2 flex items-center gap-1">
                  Re-engaged <Icon icon="lucide:flame" />
                </div>
                <div className="bg-primary/10 border border-primary/30 p-2 rounded relative transform -translate-y-1 shadow-lg">
                  <div className="w-3/4 h-2 bg-primary rounded mb-1"></div>
                  <div className="w-1/2 h-1.5 bg-primary/60 rounded"></div>
                  <Icon icon="lucide:message-circle" className="absolute top-2 right-2 text-primary/50 text-xs" />
                </div>
                <div className="bg-primary/10 border border-primary/30 p-2 rounded relative transform -translate-y-1 shadow-lg delay-100">
                  <div className="w-3/4 h-2 bg-primary rounded mb-1"></div>
                  <div className="w-1/2 h-1.5 bg-primary/60 rounded"></div>
                  <Icon icon="lucide:calendar" className="absolute top-2 right-2 text-primary/50 text-xs" />
                </div>
              </div>
            </div>
            {/* Footer Stat */}
            <div className="bg-primary/5 p-3 border-t border-primary/20 flex items-center justify-between">
              <span className="text-[11px] text-white/70">Campaign ROI</span>
              <span className="text-[12px] font-bold text-primary">+$45,200</span>
            </div>
          </div>
        </div>
      )
    },
    {
      badgeIcon: "lucide:users",
      badgeText: "Get Reviews & Referrals on Autopilot",
      title: "Turn Happy Clients Into Growth Engines",
      description: "We automatically follow up with your satisfied customers to request reviews and referrals. Build a self-sustaining organic growth engine without any manual follow-up from your team.",
      ctaText: "Automate Referrals",
      ctaHref: "#referrals",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Review Mockup Stack */}
          <div className="relative w-full max-w-[280px]">
             {/* Background Card */}
             <div className="absolute top-4 left-4 right-[-1rem] bg-white/5 border border-white/10 rounded-xl p-5 shadow-2xl opacity-40 transform scale-95 z-0">
               <div className="flex gap-1 mb-3"><Icon icon="lucide:star" className="text-yellow-500 fill-yellow-500" /></div>
               <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
               <div className="w-2/3 h-2 bg-white/20 rounded"></div>
             </div>
             {/* Foreground Card */}
             <div className="relative bg-white rounded-xl p-6 shadow-2xl z-10 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">JD</div>
                    <div>
                      <p className="text-sm font-bold text-black leading-tight">John Davis</p>
                      <p className="text-[10px] text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <Icon icon="logos:google-icon" className="text-xl" />
                </div>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Icon key={i} icon="lucide:star" className="text-yellow-400 fill-yellow-400 text-sm" />)}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  "Absolutely incredible experience. They handled everything perfectly and saved us so much time. Highly recommend to anyone looking to scale!"
                </p>
             </div>
             
             {/* Celebration Emojis */}
             <div className="absolute -top-4 -right-4 text-3xl animate-bounce">🎉</div>
             <div className="absolute -bottom-2 -left-4 text-2xl animate-pulse">🔥</div>
          </div>
        </div>
      )
    },
    {
      badgeIcon: "lucide:workflow",
      badgeText: "We Handle the Behind-the-Scenes Work",
      title: "Seamless Systems Integration",
      description: "We connect your CRM, calendar, marketing tools, and billing platforms into one unified, intelligent ecosystem. Let AI handle the data entry so you can focus on selling.",
      ctaText: "Explore Integrations",
      ctaHref: "#integrations",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Node Graph Mockup */}
          <div className="relative w-full max-w-[320px] aspect-video flex items-center justify-center">
             {/* Central Hub */}
             <div className="w-20 h-20 rounded-2xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center z-20 border-2 border-gray-100">
               <div className="bg-[#4ade80] text-[#14221F] w-8 h-8 rounded flex items-center justify-center font-black text-xl">1</div>
             </div>
             
             {/* Peripheral Nodes */}
             <div className="absolute top-0 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-100 animate-pulse">
               <Icon icon="logos:stripe" className="text-2xl" />
             </div>
             <div className="absolute bottom-0 left-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-100">
               <Icon icon="logos:hubspot" className="text-2xl" />
             </div>
             <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-100">
               <Icon icon="logos:calendly-icon" className="text-2xl" />
             </div>
             <div className="absolute bottom-4 right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-100 animate-pulse">
               <Icon icon="logos:zapier-icon" className="text-2xl" />
             </div>

             {/* Connection Lines (SVG) */}
             <svg className="absolute inset-0 w-full h-full -z-10 opacity-50" fill="none" stroke="currentColor">
               <path d="M 40 40 L 160 90" className="stroke-white stroke-[2px]" strokeDasharray="4 4" />
               <path d="M 64 160 L 160 90" className="stroke-white stroke-[2px]" strokeDasharray="4 4" />
               <path d="M 280 56 L 160 90" className="stroke-white stroke-[2px]" strokeDasharray="4 4" />
               <path d="M 256 144 L 160 90" className="stroke-white stroke-[2px]" strokeDasharray="4 4" />
               
               {/* Animated data packets */}
               <circle cx="40" cy="40" r="3" className="fill-primary">
                 <animateMotion dur="2s" repeatCount="indefinite" path="M 40 40 L 160 90" />
               </circle>
               <circle cx="280" cy="56" r="3" className="fill-primary">
                 <animateMotion dur="1.5s" repeatCount="indefinite" path="M 280 56 L 160 90" />
               </circle>
             </svg>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, features.length]);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % features.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + features.length) % features.length);
  };

  const active = features[activeIndex] || features[0];

  return (
    <section className="bg-background relative border-b border-border py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-16">
          <div>
            <p className="font-mono text-[13px] font-semibold uppercase tracking-widest text-primary mb-3">Core Solutions</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Automated Growth Engines
            </h2>
          </div>
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-colors cursor-pointer"
            >
              <Icon icon="lucide:arrow-left" className="text-foreground text-xl" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-colors cursor-pointer"
            >
              <Icon icon="lucide:arrow-right" className="text-foreground text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div 
          className="relative bg-card border border-border/50 rounded-[24px] lg:rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden min-h-[650px] flex flex-col justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10 w-full">
            {/* Left Text */}
            <div className="w-full lg:w-1/2">
              <div key={`text-${activeIndex}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background mb-4 lg:mb-6">
                  <Icon icon={active.badgeIcon} className="text-primary text-sm" />
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{active.badgeText}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4 lg:mb-6">
                  {active.title}
                </h3>
                <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-8 lg:mb-10">
                  {active.description}
                </p>
                <button onClick={onActionClick} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer text-[14px] sm:text-[15px]">
                  {active.ctaText}
                  <Icon icon="lucide:arrow-right" className="text-lg" />
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-1/2">
              <div key={`visual-${activeIndex}`} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-2xl bg-[#0d1614] border border-border/50 shadow-xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                {active.visual}

              </div>
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-12 relative z-10">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-border/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
