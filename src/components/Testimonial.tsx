import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  quote: string;
  seed: string;
  stat1Value: string;
  stat1Label: string;
  stat1Icon: string;
  stat2Value: string;
  stat2Label: string;
  stat2Icon: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 0,
    name: "Mark R.",
    role: "Agency Owner",
    quote: "Before 1 Click Outcome, we were missing calls and letting old leads slip through the cracks. Once they deployed the AI Receptionist and Reactivation campaigns, we saw an immediate spike in appointments. Our revenue increased by 40% in just two months without hiring anyone new.",
    seed: "Mark",
    stat1Value: "+112 Appointments",
    stat1Label: "Booked via AI Reactivation",
    stat1Icon: "lucide:calendar-check",
    stat2Value: "$45k New Revenue",
    stat2Label: "Generated in first 60 days",
    stat2Icon: "lucide:trending-up"
  },
  {
    id: 1,
    name: "Sarah L.",
    role: "Real Estate Broker",
    quote: "As a busy broker, I'm always on the road. Missing a call used to mean losing a commission. Since integrating the Missed Call Text Back, the AI instantly engages leads for me. It's literally a full-time assistant that never sleeps.",
    seed: "Sarah",
    stat1Value: "24/7 Response",
    stat1Label: "Zero missed opportunities",
    stat1Icon: "lucide:clock",
    stat2Value: "18 Listings",
    stat2Label: "Secured entirely via AI chat",
    stat2Icon: "lucide:home"
  },
  {
    id: 2,
    name: "Jason T.",
    role: "Marketing Consultant",
    quote: "The Referral Automation is insane. I used to hate begging clients for reviews. Now, the system just asks them automatically after a win. My Google Business Profile went from 12 reviews to 85 in less than four months.",
    seed: "Jason",
    stat1Value: "85 Reviews",
    stat1Label: "Achieved on autopilot",
    stat1Icon: "lucide:star",
    stat2Value: "3x Organic",
    stat2Label: "Increase in organic inbound",
    stat2Icon: "lucide:bar-chart-2"
  },
  {
    id: 3,
    name: "Emily W.",
    role: "SaaS Founder",
    quote: "Onboarding used to be our biggest bottleneck. 1 Click Outcome completely overhauled our CRM sync. Now, the moment a client pays via Stripe, their entire project workspace and onboarding sequence is generated instantly.",
    seed: "Emily",
    stat1Value: "100% Automated",
    stat1Label: "Zero manual data entry",
    stat1Icon: "lucide:cpu",
    stat2Value: "15 Hours/Wk",
    stat2Label: "Saved across the entire team",
    stat2Icon: "lucide:timer"
  },
  {
    id: 4,
    name: "David K.",
    role: "Law Firm Partner",
    quote: "We were skeptical about AI handling our clients, but the natural language processing is incredible. The AI Receptionist qualifies our legal leads perfectly and routes them to the right attorney's calendar without a hitch.",
    seed: "David",
    stat1Value: "$120k Retained",
    stat1Label: "In first-quarter billables",
    stat1Icon: "lucide:briefcase",
    stat2Value: "98% Accuracy",
    stat2Label: "In lead qualification routing",
    stat2Icon: "lucide:check-circle"
  }
];

export const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="py-24 border-b border-border bg-background transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black mb-6">
            <Icon icon="lucide:message-circle" className="text-sm fill-black" />
            <span className="text-[11px] font-bold uppercase tracking-widest">Client Success</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Real Results from Real Agencies
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start justify-center mt-20 min-h-[400px]">
          
          {/* Left Column: Author */}
          <div className="flex flex-col items-center md:items-start shrink-0">
            {/* Active Avatar Box */}
            <div className="w-28 h-28 rounded-[24px] bg-[#e6e8e8] border border-white/10 flex items-center justify-center overflow-hidden mb-4 shadow-lg transition-all duration-300">
               <img 
                 key={active.seed}
                 src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${active.seed}&style=circle&backgroundColor=e6e8e8`} 
                 alt={active.name} 
                 className="w-[120%] h-[120%] object-cover object-top mt-4 animate-in fade-in zoom-in duration-500" 
               />
            </div>
            
            <h4 className="font-heading font-bold text-foreground text-lg text-center md:text-left">{active.name}</h4>
            <p className="text-sm text-muted-foreground mb-12 text-center md:text-left">{active.role}</p>

            {/* Thumbnail Row */}
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-[20px] border border-white/5">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-8 h-8 rounded-[12px] overflow-hidden flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    activeIndex === idx 
                      ? 'bg-[#e6e8e8] opacity-100 scale-110 shadow-md ring-1 ring-primary/50' 
                      : 'bg-[#31403E] opacity-30 grayscale hover:opacity-70 hover:grayscale-0'
                  }`}
                >
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}${activeIndex === idx ? '&backgroundColor=e6e8e8' : ''}`} 
                    className={`w-full h-full object-cover ${activeIndex === idx ? 'w-[120%] h-[120%] object-top mt-1' : ''}`} 
                    alt={t.name}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Quote & Stats */}
          <div className="flex-1 max-w-2xl md:pt-4">
            <p 
              key={`quote-${activeIndex}`}
              className="font-serif text-xl md:text-[21px] leading-[1.7] text-foreground/90 mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              “{active.quote}”
            </p>

            {/* Blueprint Stats Box */}
            <div 
              key={`stats-${activeIndex}`}
              className="relative border border-[#31403E] py-8 px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center animate-in fade-in duration-700"
            >
              
              {/* Corner crosshairs */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[#5a6d6a] text-lg font-light leading-none pointer-events-none">+</div>
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[#5a6d6a] text-lg font-light leading-none pointer-events-none">+</div>
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-[#5a6d6a] text-lg font-light leading-none pointer-events-none">+</div>
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-[#5a6d6a] text-lg font-light leading-none pointer-events-none">+</div>

              {/* Left Stat */}
              <div className="text-center relative">
                <div className="flex items-center justify-center gap-1.5 mb-3 text-foreground">
                  <Icon icon={active.stat1Icon} className="text-primary w-6 h-6" />
                </div>
                <p className="text-[14px] font-bold text-foreground max-w-[200px] mx-auto mb-1">
                  {active.stat1Value}
                </p>
                <p className="text-[12px] text-muted-foreground font-medium max-w-[200px] mx-auto">
                  {active.stat1Label}
                </p>
                {/* Vertical divider */}
                <div className="hidden sm:block absolute right-[-1rem] top-1 bottom-1 w-px bg-[#31403E]"></div>
              </div>

              {/* Right Stat */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-3 text-foreground">
                  <Icon icon={active.stat2Icon} className="text-primary w-6 h-6" />
                </div>
                <p className="text-[14px] font-bold text-foreground max-w-[200px] mx-auto mb-1">
                  {active.stat2Value}
                </p>
                <p className="text-[12px] text-muted-foreground font-medium max-w-[240px] mx-auto">
                  {active.stat2Label}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
