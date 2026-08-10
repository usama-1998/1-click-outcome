import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export const ScrollingFeatures: React.FC<{ onActionClick: () => void }> = ({ onActionClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      badgeIcon: "lucide:phone-call",
      badgeText: "Grace: Voice Agent",
      title: "Re-engage Quiz Leads",
      description: "Grace proactively calls women who took the menopause quiz but didn't book. She engages them in natural conversation and gets them on Dr. Rebecca's calendar.",
      ctaText: "See Voice Agent",
      ctaHref: "#receptionist",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden group">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-1000 blur-3xl"></div>
          
          {/* Active Voice Call Mockup */}
          <div className="h-[90%] max-h-[480px] w-auto aspect-[9/19] bg-[#101b19] rounded-[36px] border-4 border-[#1a2b28] p-4 shadow-2xl relative flex flex-col items-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#1a2b28] rounded-b-xl z-20"></div>
            
            {/* Caller Info */}
            <div className="mt-8 flex flex-col items-center text-center">
               <div className="relative w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(66,193,129,0.2)]">
                 <Icon icon="lucide:mic" className="text-primary text-2xl" />
                 {/* Ripple effect */}
                 <div className="absolute inset-0 rounded-full border border-primary/50 animate-[ping_2s_infinite]"></div>
               </div>
               <h3 className="text-white text-lg font-semibold tracking-wide">Grace</h3>
               <p className="text-primary text-xs font-mono mt-1 animate-pulse">00:04:12</p>
            </div>

            {/* Dynamic Equalizer */}
            <div className="flex-1 w-full flex items-center justify-center gap-1 mt-6 px-2">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-gradient-to-t from-primary/40 to-primary rounded-full origin-bottom" 
                  style={{
                    height: '20px',
                    animation: `equalizer ${Math.random() * 0.5 + 0.5}s ease-in-out infinite alternate`,
                    animationDelay: `${Math.random() * -1}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Floating Transcript Bubbles */}
            <div className="absolute top-1/2 -left-12 -right-12 h-32 pointer-events-none flex flex-col gap-2 z-20">
              <div className="self-start bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1.5 rounded-2xl rounded-tl-none shadow-lg transform -translate-x-4 opacity-0 group-hover:animate-[slideInLeft_0.5s_ease-out_forwards_0.2s]">
                Hi, this is Grace from Osteopathic Midlife Health!
              </div>
              <div className="self-end bg-primary/20 backdrop-blur-md border border-primary/30 text-white text-[10px] px-3 py-1.5 rounded-2xl rounded-tr-none shadow-lg transform translate-x-4 opacity-0 group-hover:animate-[slideInRight_0.5s_ease-out_forwards_1.5s]">
                I'm still interested in that consult.
              </div>
              <div className="self-start bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1.5 rounded-2xl rounded-tl-none shadow-lg transform -translate-x-4 opacity-0 group-hover:animate-[slideInLeft_0.5s_ease-out_forwards_2.8s]">
                Perfect. How is Tuesday at 2 PM?
              </div>
            </div>

            {/* Call Controls */}
            <div className="w-full flex justify-between px-6 mb-2 mt-auto relative z-30">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"><Icon icon="lucide:mic-off" className="text-white/70" /></div>
               <div className="w-12 h-12 rounded-full bg-red-500/90 hover:bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/20 cursor-pointer transition-colors"><Icon icon="lucide:phone-off" className="text-white" /></div>
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"><Icon icon="lucide:volume-2" className="text-white/70" /></div>
            </div>
            
            <div className="h-1 w-1/2 bg-white/20 rounded-full mt-2 mb-1"></div>
          </div>
        </div>
      )
    },
    {
      badgeIcon: "lucide:message-square",
      badgeText: "Automated SMS Follow-up",
      title: "Texting When They Can't Talk",
      description: "If a patient can't pick up the phone, Grace follows up instantly via SMS to answer their questions about telehealth or HRT and secure the consultation.",
      ctaText: "See SMS Agent",
      ctaHref: "#sms-agent",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8 perspective-[1000px] group">
          
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-1000 blur-3xl"></div>

          {/* Split Screen SMS Interface */}
          <div className="h-[90%] max-h-[480px] w-auto aspect-[1/1.2] bg-[#101b19] rounded-[24px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform group-hover:rotateY(-10deg) group-hover:rotateX(5deg) transition-transform duration-700 [transform-style:preserve-3d]">
            
            {/* Header */}
            <div className="bg-black/60 p-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                   <Icon icon="lucide:message-square" className="text-blue-400 text-lg" />
                   <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Grace</h4>
                  <p className="text-[10px] text-white/50">AI SMS Agent</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                 <Icon icon="lucide:phone" className="text-white/40 text-sm" />
                 <Icon icon="lucide:more-vertical" className="text-white/40 text-sm" />
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative z-10 bg-gradient-to-b from-[#101b19] to-[#1a2b28]">
               <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
               
               <div className="bg-blue-600/90 text-white text-[12px] p-3 rounded-2xl rounded-tr-sm max-w-[85%] self-end shadow-md border border-blue-500/30 transform group-hover:-translate-y-1 transition-transform duration-500">
                 Hi! This is Grace from Osteopathic Midlife Health. Just left a voicemail!
               </div>
               
               <div className="bg-[#1e293b]/80 text-white text-[12px] p-3 rounded-2xl rounded-tl-sm max-w-[85%] self-start shadow-md border border-white/5 transform group-hover:-translate-y-1 transition-transform duration-500 delay-75 relative">
                 Hey Grace, I'm still interested in a menopause consult.
                 <div className="absolute -left-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500">
                    <Icon icon="lucide:check-circle-2" className="text-blue-400 bg-[#0c141d] rounded-full text-xs" />
                 </div>
               </div>
               
               <div className="bg-blue-600/90 text-white text-[12px] p-3 rounded-2xl rounded-tr-sm max-w-[85%] self-end shadow-md border border-blue-500/30 transform group-hover:-translate-y-1 transition-transform duration-500 delay-150">
                 Awesome. Let's get you on the calendar!
               </div>

               {/* Typing Indicator */}
               <div className="bg-[#1e293b]/80 text-white p-3 rounded-2xl rounded-tl-sm self-start shadow-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-1000 mt-2 w-14">
                 <div className="flex gap-1 justify-center items-center h-full">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                 </div>
               </div>
               
            </div>
            
            {/* Input Area */}
            <div className="p-3 bg-black/40 border-t border-white/10 z-20">
               <div className="w-full bg-[#1e293b] rounded-full h-8 border border-white/10 flex items-center px-3">
                 <span className="text-white/30 text-[10px]">Reply to Grace...</span>
                 <Icon icon="lucide:send" className="text-white/20 ml-auto text-xs" />
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      badgeIcon: "lucide:settings",
      badgeText: "Done-For-You Setup",
      title: "We Build It, You Treat Patients",
      description: "Don't spend weeks learning a new tool. We build your entire AI agent infrastructure, train them on your clinic's services, and launch them in days.",
      ctaText: "See Pricing",
      ctaHref: "#pricing",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8 group overflow-hidden">
          {/* Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
             <div className="absolute w-[120%] h-[120%] border border-primary/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute w-[100%] h-[100%] border border-dashed border-primary/20 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
             <div className="absolute w-[80%] h-[80%] border border-primary/10 rounded-full animate-[spin_6s_linear_infinite]"></div>
          </div>

          {/* Setup Progress Graphic */}
          <div className="w-full max-w-[340px] bg-[#101b19]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col relative z-10 transform group-hover:scale-105 transition-transform duration-700">
             
             {/* Header */}
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                     <Icon icon="lucide:rocket" className="text-primary text-xl relative z-10" />
                     <div className="absolute inset-0 bg-primary/20 blur-md"></div>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm tracking-wide">Launch Sequence</h4>
                     <p className="text-primary/70 text-[10px] font-mono uppercase tracking-widest mt-0.5">Initializing</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#1a2b28] rounded-full flex items-center justify-center border border-primary/20 relative">
                   <span className="text-primary font-mono text-sm font-bold relative z-10">99<span className="text-[10px]">%</span></span>
                   <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/10" />
                      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" strokeDasharray="138" strokeDashoffset="2" />
                   </svg>
                </div>
             </div>
             
             <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-4 group/step">
                   <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.5)]">
                     <Icon icon="lucide:check" className="text-primary text-[12px] font-bold" strokeWidth="4" />
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between mb-1.5 text-xs">
                       <span className="text-white/90 font-medium">Model Fine-Tuning</span>
                       <span className="text-primary font-mono text-[10px]">DONE</span>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-full bg-primary rounded-full"></div></div>
                   </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-center gap-4 group/step">
                   <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.5)]">
                     <Icon icon="lucide:check" className="text-primary text-[12px] font-bold" strokeWidth="4" />
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between mb-1.5 text-xs">
                       <span className="text-white/90 font-medium">CRM Webhooks Connected</span>
                       <span className="text-primary font-mono text-[10px]">DONE</span>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-full bg-primary rounded-full"></div></div>
                   </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-center gap-4 group/step">
                   <div className="relative w-6 h-6 flex items-center justify-center">
                     <Icon icon="lucide:loader-2" className="text-primary text-[16px] animate-spin absolute" />
                     <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between mb-1.5 text-xs">
                       <span className="text-white font-medium">Activating Agents</span>
                       <span className="text-primary font-mono text-[10px] animate-pulse">PROCESSING</span>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                        <div className="h-full w-[80%] bg-gradient-to-r from-primary to-yellow-300 rounded-full"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-[30%] animate-[shimmer_1.5s_infinite]"></div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      badgeIcon: "lucide:layers",
      badgeText: "CRM Integration",
      title: "Syncs Seamlessly",
      description: "Grace connects directly to your medical CRM. Every call transcript and booked appointment is logged automatically for Dr. Rebecca to review.",
      ctaText: "Explore Integrations",
      ctaHref: "#integrations",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-8 group">
          {/* Detailed Node Graph */}
          <div className="relative w-full max-w-[340px] aspect-video flex items-center justify-center">
             
             {/* Joopi Core */}
             <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-yellow-500 rounded-full shadow-[0_0_40px_rgba(66,193,129,0.4)] flex items-center justify-center z-20 group-hover:shadow-[0_0_60px_rgba(66,193,129,0.7)] group-hover:scale-110 transition-all duration-500">
               <Icon icon="lucide:mic" className="text-[#101b19] text-4xl relative z-10" />
               {/* Pulse rings */}
               <div className="absolute inset-[-4px] border border-primary/50 rounded-full opacity-0 group-hover:opacity-100 animate-[ping_2s_infinite]"></div>
               <div className="absolute inset-[-4px] border border-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-[ping_2.5s_infinite]"></div>
             </div>
             
             {/* Integrations */}
             <div className="absolute top-0 left-4 w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center z-10 border border-white/20 transform group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-700">
               <Icon icon="logos:hubspot" className="text-3xl" />
             </div>
             <div className="absolute bottom-0 left-2 w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center z-10 border border-white/20 transform group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:scale-110 transition-all duration-700">
               <Icon icon="logos:salesforce" className="text-3xl" />
             </div>
             <div className="absolute top-2 right-4 w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center z-10 border border-white/20 transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-700">
               <Icon icon="logos:calendly-icon" className="text-3xl" />
             </div>
             <div className="absolute bottom-2 right-2 w-14 h-14 bg-[#1e293b] rounded-xl shadow-xl flex items-center justify-center z-10 border border-white/20 transform group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-110 transition-all duration-700">
               <Icon icon="lucide:webhook" className="text-primary text-2xl" />
               <span className="absolute -bottom-6 text-[9px] text-white/50 font-mono bg-background px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">REST API</span>
             </div>

             {/* Connection Lines (SVG) */}
             <svg className="absolute inset-[-20px] w-[calc(100%+40px)] h-[calc(100%+40px)] -z-10 pointer-events-none" fill="none" stroke="currentColor">
               <path d="M 68 56 C 100 56, 120 106, 170 106" className="stroke-white/10 stroke-[2px]" />
               <path d="M 60 166 C 100 166, 120 106, 170 106" className="stroke-white/10 stroke-[2px]" />
               <path d="M 312 56 C 260 56, 220 106, 170 106" className="stroke-white/10 stroke-[2px]" />
               <path d="M 304 166 C 260 166, 220 106, 170 106" className="stroke-white/10 stroke-[2px]" />
               
               {/* Animated Gradient Data Streams (Hover only) */}
               <path d="M 170 106 C 120 106, 100 56, 68 56" className="stroke-primary stroke-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeDasharray="1000" strokeDashoffset="1000">
                  <animate attributeName="stroke-dashoffset" values="1000;0" dur="2s" repeatCount="indefinite" />
               </path>
               <path d="M 170 106 C 120 106, 100 166, 60 166" className="stroke-[#00a1e0] stroke-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeDasharray="1000" strokeDashoffset="1000">
                  <animate attributeName="stroke-dashoffset" values="1000;0" dur="2.5s" repeatCount="indefinite" />
               </path>
               <path d="M 170 106 C 220 106, 260 56, 312 56" className="stroke-blue-500 stroke-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeDasharray="1000" strokeDashoffset="1000">
                  <animate attributeName="stroke-dashoffset" values="1000;0" dur="1.8s" repeatCount="indefinite" />
               </path>
               <path d="M 170 106 C 220 106, 260 166, 304 166" className="stroke-purple-500 stroke-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeDasharray="1000" strokeDashoffset="1000">
                  <animate attributeName="stroke-dashoffset" values="1000;0" dur="2.2s" repeatCount="indefinite" />
               </path>
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
              <div key={`visual-${activeIndex}`} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-2xl bg-[#050505] border border-border/50 shadow-xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700 fill-mode-both flex items-center justify-center">
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
