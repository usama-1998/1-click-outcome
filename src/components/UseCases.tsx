import React from 'react';
import { Icon } from '@iconify/react';

interface UseCaseData {
  title: string;
  outcome: string;
  description: string;
  visual: React.ReactNode;
}

const UseCaseCard: React.FC<UseCaseData> = ({ title, outcome, description, visual }) => {
  return (
    <div className="flex flex-col gap-6 text-left group cursor-pointer">
      <div className="relative w-full aspect-square rounded-2xl bg-[#0d1614] flex items-center justify-center overflow-hidden border border-white/[0.04] shadow-lg">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Bespoke Visual Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
          {visual}
        </div>
        
        {/* Subtle hover glow */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-2xl pointer-events-none"></div>
      </div>
      <div className="pr-4 flex flex-col items-start">
        {/* Outcome Badge (Above Title) */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 w-fit">
          <Icon icon="lucide:trending-up" className="text-primary text-[12px] shrink-0" />
          <span className="text-[11.5px] font-bold text-primary tracking-wide leading-tight">
            {outcome}
          </span>
        </div>
        <h3 className="font-mono text-[13px] uppercase font-semibold text-white/90 mb-3 leading-relaxed tracking-widest group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-[15px] text-white/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const UseCases: React.FC = () => {
  const cases: UseCaseData[] = [
    {
      title: "24/7 AI Receptionist",
      outcome: "18% Revenue Boost",
      description: "Our AI ensures no inbound call or inquiry ever goes unanswered. It engages, qualifies, and books appointments while you sleep.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors"></div>
          {/* Phone Frame */}
          <div className="relative w-20 h-32 border-2 border-white/20 rounded-[20px] bg-background/50 backdrop-blur-sm p-1.5 flex flex-col items-center">
            <div className="w-6 h-1 rounded-full bg-white/20 mb-2 mt-1"></div>
            {/* Chat bubbles */}
            <div className="w-full flex flex-col gap-2 mt-1 px-1">
               <div className="w-[80%] h-3 bg-white/10 rounded-r-lg rounded-bl-lg self-start"></div>
               <div className="w-[70%] h-3 bg-primary/30 rounded-l-lg rounded-br-lg self-end relative">
                 <Icon icon="lucide:bot" className="absolute -left-3 -bottom-1 text-[8px] text-primary" />
               </div>
               <div className="w-[60%] h-3 bg-primary/30 rounded-l-lg rounded-br-lg self-end mt-1"></div>
            </div>
            {/* Call button */}
            <div className="absolute bottom-3 w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center group-hover:scale-110 transition-transform">
               <Icon icon="lucide:phone-incoming" className="text-green-400 text-sm animate-pulse" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Intelligent Lead Reactivation",
      outcome: "30% More Appointments",
      description: "We deploy automated campaigns to wake up your dormant contacts, turning cold lists and old leads into instant, measurable revenue.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/30 transition-colors"></div>
          {/* Database Stack */}
          <div className="relative flex flex-col gap-1.5 items-center w-24">
             <div className="w-full h-6 border-2 border-white/10 bg-white/5 rounded-[50%] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
             <div className="w-full h-6 border-2 border-white/10 bg-white/5 rounded-[50%] relative -mt-4 flex items-center justify-center z-10 overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity delay-75"></div>
             </div>
             <div className="w-full h-6 border-2 border-orange-500/50 bg-orange-500/10 rounded-[50%] relative -mt-4 flex items-center justify-center z-20">
                <Icon icon="lucide:zap" className="absolute -top-6 text-orange-400 text-3xl drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-500" fill="currentColor" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Referral Automation",
      outcome: "5+ Weekly 5-Star Reviews",
      description: "Engage satisfied customers automatically. Our systems prompt happy clients to refer others, driving consistent organic growth.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/30 transition-colors"></div>
          {/* Nodes */}
          <div className="relative w-32 h-32">
             {/* Center Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center z-10 backdrop-blur-sm">
                <Icon icon="lucide:star" className="text-yellow-400 text-xl group-hover:rotate-[72deg] transition-transform duration-700" fill="currentColor" />
             </div>
             {/* Branch Nodes */}
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Icon icon="lucide:user" className="text-white/50 text-xs" />
             </div>
             <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Icon icon="lucide:user" className="text-white/50 text-xs" />
             </div>
             <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Icon icon="lucide:user" className="text-white/50 text-xs" />
             </div>
             {/* Connecting Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/20 group-hover:stroke-yellow-400/50 transition-colors" fill="none" strokeWidth="1.5">
                <path d="M 64 36 L 64 64" strokeDasharray="4 4" className="group-hover:animate-[dash_1s_linear_infinite]" />
                <path d="M 36 84 L 64 64" strokeDasharray="4 4" className="group-hover:animate-[dash_1s_linear_infinite]" />
                <path d="M 92 84 L 64 64" strokeDasharray="4 4" className="group-hover:animate-[dash_1s_linear_infinite]" />
             </svg>
          </div>
        </div>
      )
    },
    {
      title: "Custom Backend Automations",
      outcome: "15+ Hours Saved/Week",
      description: "Say goodbye to manual data entry and task juggling. We integrate cutting-edge AI into your CRM to put operations on autopilot.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/30 transition-colors"></div>
          {/* Cogs & Window */}
          <div className="relative">
            <div className="w-24 h-16 border border-white/20 bg-background/80 backdrop-blur-sm rounded-lg p-2 shadow-lg z-10 relative group-hover:-translate-y-1 transition-transform">
               <div className="flex items-center gap-1 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
               </div>
               <div className="w-full h-1 bg-white/10 rounded-full mb-1"></div>
               <div className="w-2/3 h-1 bg-white/10 rounded-full mb-2"></div>
               <div className="flex gap-1 mt-3">
                 <div className="w-1/3 h-3 bg-blue-500/20 rounded-sm"></div>
                 <div className="w-1/3 h-3 bg-purple-500/20 rounded-sm"></div>
               </div>
            </div>
            {/* Spinning Cogs */}
            <Icon icon="lucide:settings" className="absolute -top-4 -right-4 text-blue-400/50 text-3xl group-hover:animate-[spin_4s_linear_infinite] -z-0" />
            <Icon icon="lucide:settings" className="absolute -bottom-3 -left-3 text-purple-400/50 text-2xl group-hover:animate-[spin_4s_linear_reverse_infinite] z-20" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="use-cases" className="py-24 border-b border-white/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-20">
          <div className="max-w-2xl">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-widest text-white/60 mb-4 lg:mb-6">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] text-white tracking-tight">
              Fully Managed Ecosystem<br/>
              Built For Scale.
            </h2>
          </div>
          <div className="lg:w-[480px] lg:pt-14">
            <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed">
              We handle the complex backend automations so you can focus entirely on closing deals and driving revenue. From missed calls to dormant leads, we turn gaps into growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, idx) => (
            <UseCaseCard key={idx} title={c.title} outcome={c.outcome} description={c.description} visual={c.visual} />
          ))}
        </div>

        <div className="flex items-center justify-between mt-16 pt-2">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#0d1614] border border-white/[0.04] hover:bg-[#15231f] flex items-center justify-center transition-colors cursor-pointer">
              <Icon icon="lucide:chevron-left" className="text-white/70 text-lg" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#0d1614] border border-white/[0.04] hover:bg-[#15231f] flex items-center justify-center transition-colors cursor-pointer">
              <Icon icon="lucide:chevron-right" className="text-white/70 text-lg" />
            </button>
          </div>
          <a href="#all-use-cases" className="flex items-center gap-2 text-[14px] font-semibold text-white hover:text-white/80 transition-colors group">
            View all services
            <Icon icon="lucide:arrow-up-right" className="text-[16px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
