import React from 'react';
import { Icon } from '@iconify/react';

export const WorkflowSteps: React.FC = () => {
  return (
    <section className="py-24 border-b border-border bg-[#101b19]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black mb-6">
            <Icon icon="lucide:flame" className="text-sm fill-black" />
            <span className="text-[11px] font-bold uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Operations in 3 Steps
          </h2>
          <p className="text-lg text-white/70">
            Whether it's deploying a call intercept system for missed calls, or setting up complex CRM syncs, the workflow is always straightforward. Audit, Build, Scale.
          </p>
        </div>

        <div className="flex flex-col gap-12 relative">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
            {/* Text Side */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-[#101b19] flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">We find where you're leaking money</h3>
              </div>
              <p className="text-[17px] text-white/70 leading-relaxed md:ml-14">
                We map out your current sales process, CRM setup, and lead flow to identify where you're losing money and wasting time. Our experts pinpoint the exact systems that will yield the highest ROI for your specific agency model.
              </p>
            </div>
            {/* Visual Side */}
            <div className="flex-1 w-full max-w-md bg-[#162522] border border-white/5 rounded-2xl p-8 flex items-center justify-center relative shadow-2xl">
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-sm"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-sm"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-sm"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-sm"></div>
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-32 bg-white/10 rounded-lg flex flex-col justify-between p-3 border border-white/10">
                   <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                   <Icon icon="lucide:search" className="text-4xl text-white/50 mx-auto" />
                   <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                </div>
                <Icon icon="lucide:arrow-right" className="text-3xl text-white" />
                <div className="w-28 h-36 bg-[#1a2d29] rounded-lg border border-[#4ade80]/30 p-4 shadow-[0_0_20px_rgba(74,222,128,0.1)] flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle-2" className="text-[#4ade80] text-sm" />
                    <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle-2" className="text-[#4ade80] text-sm" />
                    <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle-2" className="text-[#4ade80] text-sm" />
                    <div className="w-3/4 h-1.5 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle-2" className="text-white/20 text-sm" />
                    <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dotted Divider */}
          <div className="w-full border-t border-dashed border-white/10 my-4 hidden md:block"></div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 relative z-10">
            {/* Text Side */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-[#101b19] flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">We fix it — you do nothing</h3>
              </div>
              <p className="text-[17px] text-white/70 leading-relaxed md:ml-14">
                We deploy our elite AI operations seamlessly into your ecosystem. Setting up your call intercept, reactivation sequences, and deep CRM integrations requires zero technical effort on your end. 
              </p>
            </div>
            {/* Visual Side */}
            <div className="flex-1 w-full max-w-md bg-[#162522] border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative shadow-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Icon icon="lucide:zap" className="text-[#4ade80] text-xl" />
                <span className="text-sm font-semibold text-white">System Deployment</span>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600"><Icon icon="lucide:phone" /></div>
                    <div>
                      <p className="text-xs font-bold text-black">Call Intercept</p>
                      <p className="text-[10px] text-gray-500">Missed Call Intercept Active</p>
                    </div>
                  </div>
                  <Icon icon="lucide:check-circle-2" className="text-[#4ade80] text-xl" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg opacity-80 scale-[0.98]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600"><Icon icon="lucide:mail" /></div>
                    <div>
                      <p className="text-xs font-bold text-black">Reactivation Sequence</p>
                      <p className="text-[10px] text-gray-500">Syncing with CRM Database...</p>
                    </div>
                  </div>
                  <Icon icon="lucide:loader-2" className="text-gray-400 text-xl animate-spin" />
                </div>
              </div>
            </div>
          </div>

          {/* Dotted Divider */}
          <div className="w-full border-t border-dashed border-white/10 my-4 hidden md:block"></div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
            {/* Text Side */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#4ade80] text-[#101b19] flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(74,222,128,0.3)]">3</div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Your calendar fills itself</h3>
              </div>
              <p className="text-[17px] text-white/70 leading-relaxed md:ml-14">
                Watch your calendar fill up with qualified appointments. You and your team just focus on what you do best: closing deals. We handle the follow-ups, the objections, and the busywork.
              </p>
            </div>
            {/* Visual Side */}
            <div className="flex-1 w-full max-w-md bg-[#162522] border border-white/5 rounded-2xl p-8 flex flex-col justify-center relative shadow-2xl overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#4ade80]/10 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-mono mb-1">Total Bookings</p>
                  <p className="text-4xl font-bold text-white">142</p>
                </div>
                <div className="flex items-center gap-1 text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded text-xs font-bold">
                  <Icon icon="lucide:trending-up" /> +24%
                </div>
              </div>

              <div className="flex items-end gap-2 h-24">
                <div className="w-1/6 bg-white/10 rounded-t h-[40%]"></div>
                <div className="w-1/6 bg-white/10 rounded-t h-[60%]"></div>
                <div className="w-1/6 bg-white/10 rounded-t h-[50%]"></div>
                <div className="w-1/6 bg-white/10 rounded-t h-[80%]"></div>
                <div className="w-1/6 bg-white/10 rounded-t h-[70%]"></div>
                <div className="w-1/6 bg-[#4ade80] rounded-t h-[100%] shadow-[0_0_15px_rgba(74,222,128,0.4)] relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">Today</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
