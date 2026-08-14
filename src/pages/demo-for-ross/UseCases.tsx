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
      <div className="relative w-full aspect-square rounded-2xl bg-[#050505] flex items-center justify-center overflow-hidden border border-white/[0.04] shadow-lg">
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
        <h3 className="font-mono text-[13px] uppercase font-semibold text-white/90 mb-3 leading-relaxed tracking-widest group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-[15px] text-white/60 leading-relaxed mb-4">
          {description}
        </p>
        {/* Outcome Badge (Below Description) */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 mt-1 w-fit">
          <Icon icon="lucide:trending-up" className="text-primary text-[12px] shrink-0" />
          <span className="text-[11.5px] font-bold text-primary tracking-wide leading-tight">
            {outcome}
          </span>
        </div>
      </div>
    </div>
  );
};

export const UseCases: React.FC = () => {
  const cases: UseCaseData[] = [
    {
      title: "Sarah: Clinical AI Agent",
      outcome: "Consultation Bookings",
      description: "Sarah calls dormant leads to check their interest in longevity and recovery protocols. She sounds warm, professional, and knowledgeable about peptides.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/50 group-hover:scale-150 transition-all duration-700"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-[ping_2s_infinite]"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-[ping_3s_infinite_1s]"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-[ping_1.5s_infinite_0.5s]"></div>
          </div>

          {/* Audio Waves & Mic */}
          <div className="relative flex items-center gap-2 group-hover:[transform:rotateX(10deg)_rotateY(-15deg)] transition-transform duration-700 [transform-style:preserve-3d]">
            <div className="w-1.5 h-6 bg-primary/40 rounded-full group-hover:animate-[wave_0.8s_ease-in-out_infinite] group-hover:h-12 group-hover:bg-primary transition-all duration-300"></div>
            <div className="w-1.5 h-10 bg-primary/60 rounded-full group-hover:animate-[wave_1s_ease-in-out_infinite] group-hover:h-16 group-hover:bg-primary transition-all duration-300 delay-75"></div>
            <div className="relative w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(66,193,129,0.2)] group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(66,193,129,0.6)] transition-all duration-500 group-hover:scale-110">
              <Icon icon="lucide:mic" className="text-primary text-3xl group-hover:text-white transition-colors" />
              {/* Outer rotating ring */}
              <div className="absolute inset-[-8px] border border-dashed border-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity"></div>
            </div>
            <div className="w-1.5 h-10 bg-primary/60 rounded-full group-hover:animate-[wave_0.9s_ease-in-out_infinite] group-hover:h-16 group-hover:bg-primary transition-all duration-300 delay-100"></div>
            <div className="w-1.5 h-6 bg-primary/40 rounded-full group-hover:animate-[wave_1.1s_ease-in-out_infinite] group-hover:h-12 group-hover:bg-primary transition-all duration-300 delay-150"></div>
          </div>
        </div>
      )
    },
    {
      title: "Cycle Renewals",
      outcome: "Higher Adherence",
      description: "Sarah tracks when a patient is finishing their cycle and reaches out to schedule a follow-up, ensuring they stay on their protocol.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full perspective-[800px]">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/40 group-hover:scale-150 transition-all duration-700"></div>
          
          {/* Smartphone SMS View */}
          <div className="relative w-24 h-36 border-2 border-white/20 rounded-[20px] bg-background/50 backdrop-blur-sm p-2 flex flex-col group-hover:[transform:rotateY(-15deg)_rotateX(5deg)] transition-transform duration-700 [transform-style:preserve-3d] shadow-2xl">
            <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2 mt-0.5"></div>
            
            {/* SMS Conversation */}
            <div className="w-full flex flex-col gap-2 mt-1 relative z-10">
               <div className="w-[85%] h-4 bg-blue-500/30 rounded-xl rounded-tr-sm self-end flex items-center px-1.5 overflow-hidden group-hover:bg-blue-500/60 transition-colors">
                 <div className="w-2/3 h-1 bg-white/60 rounded-full"></div>
               </div>
               <div className="w-[85%] h-4 bg-white/10 rounded-xl rounded-tl-sm self-start flex items-center px-1.5 border border-white/5">
                 <div className="w-1/2 h-1 bg-white/40 rounded-full"></div>
               </div>
               
               {/* Animated Typing Indicator (Hover only) */}
               <div className="w-[60%] h-4 bg-blue-500/30 rounded-xl rounded-tr-sm self-end flex items-center px-2 gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
               </div>
               
               {/* 3D Floating Action Button */}
               <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_5px_15px_rgba(59,130,246,0.5)] group-hover:[transform:translateZ(20px)_scale(1.2)] transition-all duration-500">
                 <Icon icon="lucide:check-check" className="text-white text-[12px]" strokeWidth="3" />
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Cross-Selling Stacks",
      outcome: "Increased LTV",
      description: "If a patient is already using TB-500, Sarah can naturally suggest exploring the Wolverine or GLOW Stack and offer to book a consult to discuss it.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/40 group-hover:scale-150 transition-all duration-700"></div>
          
          {/* Shield & Deflection */}
          <div className="relative w-32 h-32 flex items-center justify-center">
             
             {/* Dynamic Rippling Energy Field */}
             <div className="absolute inset-4 rounded-full border-2 border-yellow-500/0 group-hover:border-yellow-500/30 group-hover:animate-[ping_2s_infinite] transition-colors"></div>
             <div className="absolute inset-2 rounded-full border border-yellow-500/0 group-hover:border-yellow-500/20 group-hover:animate-[ping_2s_infinite_0.5s] transition-colors"></div>
             
             <Icon icon="lucide:shield-check" className="absolute text-yellow-500 text-5xl z-20 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(66,193,129,0.8)]" />
             
             {/* Incoming Objections */}
             <div className="absolute top-2 left-0 w-7 h-7 border border-red-500/50 bg-red-500/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:translate-x-8 group-hover:translate-y-6 group-hover:opacity-0 group-hover:scale-50 transition-all duration-700">
               <Icon icon="lucide:x" className="text-red-500 text-sm" />
             </div>
             <div className="absolute bottom-2 left-0 w-7 h-7 border border-red-500/50 bg-red-500/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:translate-x-8 group-hover:-translate-y-6 group-hover:opacity-0 group-hover:scale-50 transition-all duration-700 delay-100">
               <Icon icon="lucide:x" className="text-red-500 text-sm" />
             </div>
             
             {/* Outgoing Conversions (Now shooting outwards) */}
             <div className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 border border-yellow-500/50 bg-green-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:translate-x-12 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 delay-300">
               <Icon icon="lucide:check" className="text-yellow-500 text-xs" />
             </div>
             <div className="absolute top-1/4 right-6 w-5 h-5 border border-yellow-500/50 bg-green-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 delay-500">
               <Icon icon="lucide:check" className="text-yellow-500 text-[10px]" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Seamless Integration",
      outcome: "DHA-Compliant Sync",
      description: "Everything syncs directly to your CRM. Sarah can even answer logistical questions about next-day AED 50 delivery and temperature indicator strips.",
      visual: (
        <div className="relative flex items-center justify-center w-full h-full perspective-[800px]">
          {/* Glowing aura */}
          <div className="absolute w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/40 group-hover:scale-150 transition-all duration-700"></div>
          
          {/* CRM Pipeline */}
          <div className="relative w-40 h-32 flex items-center justify-between px-2 group-hover:[transform:rotateY(15deg)] transition-transform duration-700 [transform-style:preserve-3d]">
            
            {/* Orbital Rings */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 border border-dashed border-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[spin_6s_linear_infinite] transition-opacity"></div>
            
            {/* Joopi Node */}
            <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(66,193,129,0.3)] group-hover:scale-125 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(66,193,129,0.6)] transition-all duration-500 relative bg-[#101b19]">
              <span className="font-black text-primary text-lg font-heading">J</span>
            </div>
            
            {/* Pipeline Stream */}
            <div className="absolute left-14 right-12 h-1 bg-white/10 top-1/2 -translate-y-1/2 z-10 overflow-hidden rounded-full">
               <div className="w-full h-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite_linear]"></div>
            </div>
            
            {/* CRM Nodes */}
            <div className="flex flex-col gap-5 z-20">
              <div className="w-10 h-10 rounded-xl border border-white/20 bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:-translate-y-2 group-hover:[transform:translateZ(10px)] transition-all duration-500">
                 <Icon icon="lucide:database" className="text-white/50 group-hover:text-purple-400 text-sm transition-colors" />
              </div>
              <div className="w-10 h-10 rounded-xl border border-white/20 bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:translate-y-2 group-hover:[transform:translateZ(10px)] transition-all duration-500 delay-75">
                 <Icon icon="lucide:calendar" className="text-white/50 group-hover:text-blue-400 text-sm transition-colors" />
              </div>
            </div>
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
            <p className="font-mono text-[13px] font-semibold uppercase tracking-widest text-white/60 mb-4 lg:mb-6">Patient Reactivation</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.15] text-white tracking-tight">
              Reactivate Past Patients<br/>
              On Autopilot.
            </h2>
          </div>
          <div className="lg:w-[480px] lg:pt-14">
            <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed">
              We build specialized outbound AI agents for premium peptide clinics. They work around the clock to re-engage past patients, ensure protocol adherence, and book new consultations, allowing your staff to focus on in-clinic care.
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
            <button className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.04] hover:bg-[#15231f] flex items-center justify-center transition-colors cursor-pointer">
              <Icon icon="lucide:chevron-left" className="text-white/70 text-lg" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.04] hover:bg-[#15231f] flex items-center justify-center transition-colors cursor-pointer">
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
