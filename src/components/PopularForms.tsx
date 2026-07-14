import React from 'react';
import { Icon } from '@iconify/react';

export const PopularForms: React.FC = () => {
  return (
    <>
      <style>{`
        .popular-clip-bottom {
          --pattern-w: 30px;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 40px),
            calc(100% - var(--pattern-w)) calc(100% - 40px), 
            calc(100% - var(--pattern-w) - 40px) 100%, 
            calc(var(--pattern-w) + 40px) 100%, 
            var(--pattern-w) calc(100% - 40px), 
            0 calc(100% - 40px)
          );
        }
        @media (min-width: 768px) { .popular-clip-bottom { --pattern-w: 38px; } }
        @media (min-width: 1024px) { .popular-clip-bottom { --pattern-w: 52px; } }
        @media (min-width: 1280px) { .popular-clip-bottom { --pattern-w: 68px; } }
      `}</style>
      <section className="relative z-50 bg-[#FFFFFF] pt-12 pb-[140px] popular-clip-bottom font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#202b29] text-white mb-6">
                <Icon icon="lucide:cpu" className="text-sm fill-current" />
                <span className="text-[11px] font-bold uppercase tracking-widest">Core Capabilities</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-[#101b19] tracking-tight">
                AI Automations Ready for Deployment
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
              We specialize in high-ROI automations that plug directly into your business. From handling inbound traffic to re-engaging old leads, we build the systems that drive your revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-[#101b19] mb-6 flex items-center gap-2.5">
                <Icon icon="lucide:phone-forwarded" className="text-xl text-primary" />Inbound Systems
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Missed Call Text Back (AI Driven)</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Website Chatbot to Calendar Booking</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Social Media DM Automation (IG/FB)</a></li>
              </ul>
            </div>
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-[#101b19] mb-6 flex items-center gap-2.5">
                <Icon icon="lucide:flame" className="text-xl text-primary" />Lead Generation
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Dormant Database Reactivation</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Post-Webinar Follow-Up Sequences</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Automated Referral Generation</a></li>
              </ul>
            </div>
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-[#101b19] mb-6 flex items-center gap-2.5">
                <Icon icon="lucide:cog" className="text-xl text-primary" />Operations & CRM
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">New Client Onboarding Flow</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Stripe / Billing Automation Sync</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 hover:text-primary transition-colors block">Contract/Proposal Generation (DocuSign)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
