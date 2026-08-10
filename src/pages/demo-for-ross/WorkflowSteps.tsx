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
            Launch Your Outbound Agent in 3 Steps
          </h2>
          <p className="text-lg text-white/70">
            Whether it's deploying Sarah for cycle renewals, qualifying longevity patients, or syncing with your medical CRM, the workflow is always straightforward. Audit, Build, Scale.
          </p>
        </div>

        <div className="flex flex-col gap-12 relative">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
            {/* Text Side */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-[#101b19] flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Database Reactivation</h3>
              </div>
              <p className="text-[17px] text-white/70 leading-relaxed md:ml-14">
                We take your list of dormant patients who missed their cycle renewals or dropped off before their consultation and reactivate them instantly.
              </p>
            </div>
            {/* Visual Side */}
            <div className="flex-1 w-full max-w-md bg-[#141414] border border-white/5 rounded-2xl p-8 flex items-center justify-center relative shadow-2xl group overflow-hidden">
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/20 rounded-tl-sm group-hover:border-primary transition-colors duration-500"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/20 rounded-tr-sm group-hover:border-primary transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/20 rounded-bl-sm group-hover:border-primary transition-colors duration-500"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/20 rounded-br-sm group-hover:border-primary transition-colors duration-500"></div>
              
              <div className="relative w-56 h-56 rounded-full border-2 border-primary/10 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors duration-700 shadow-[0_0_30px_rgba(66,193,129,0.1)] group-hover:shadow-[0_0_50px_rgba(66,193,129,0.2)]">
                <div className="absolute inset-0 bg-primary/5 rounded-full"></div>
                
                {/* Radar Sweep */}
                <div className="absolute top-1/2 left-1/2 w-28 h-28 origin-top-left animate-[spin_3s_linear_infinite] bg-gradient-to-br from-primary/50 to-transparent"></div>
                
                {/* Grid Lines */}
                <div className="absolute inset-0 border border-primary/10 rounded-full m-6"></div>
                <div className="absolute inset-0 border border-primary/10 rounded-full m-12"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary/20"></div>
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-primary/20"></div>
                
                {/* Ping Dots */}
                <div className="absolute top-12 right-16 w-2 h-2 rounded-full bg-red-500 animate-ping group-hover:bg-primary transition-colors"></div>
                <div className="absolute bottom-14 left-12 w-2 h-2 rounded-full bg-green-500 animate-ping group-hover:bg-primary transition-colors" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(66,193,129,1)] animate-pulse"></div>
                
                {/* Center Icon */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(66,193,129,0.5)] group-hover:scale-110 transition-transform duration-500">
                  <Icon icon="lucide:scan-line" className="text-primary text-lg" />
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
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Build & Automate</h3>
              </div>
              <p className="text-[17px] text-white/70 leading-relaxed md:ml-14">
                We deploy Sarah seamlessly into your clinic's ecosystem. She integrates with your CRM to access protocol history and books patients directly onto your DHA-registered doctors' calendars.
              </p>
            </div>
            {/* Visual Side */}
            <div className="flex-1 w-full max-w-md bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative shadow-2xl group">
              {/* Glowing Data Blocks */}
              <div className="relative w-full h-56 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-1000"></div>
                
                <div className="relative flex flex-col gap-4 z-10">
                  {/* Block 1 */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 w-60 backdrop-blur-sm transform group-hover:translate-y-2 group-hover:border-blue-500/50 transition-all duration-700 z-30">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                      <Icon icon="lucide:mic" className="text-blue-400" />
                    </div>
                    <div>
                      <div className="w-24 h-2 bg-white/40 rounded-full mb-2"></div>
                      <div className="w-14 h-1.5 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Block 2 (Snapping in) */}
                  <div className="flex items-center gap-3 bg-primary/20 border border-primary/50 rounded-xl p-3 w-60 backdrop-blur-sm transform translate-x-6 group-hover:translate-x-0 group-hover:scale-105 shadow-[0_0_20px_rgba(66,193,129,0.3)] transition-all duration-700 z-20">
                    <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center relative">
                      <Icon icon="lucide:zap" className="text-primary relative z-10" />
                      <div className="absolute inset-0 bg-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div>
                      <div className="w-28 h-2 bg-primary/80 rounded-full mb-2"></div>
                      <div className="w-20 h-1.5 bg-primary/50 rounded-full"></div>
                    </div>
                  </div>

                  {/* Block 3 */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 w-60 backdrop-blur-sm transform group-hover:-translate-y-2 group-hover:border-purple-500/50 transition-all duration-700 z-10">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
                      <Icon icon="lucide:database" className="text-purple-400" />
                    </div>
                    <div>
                      <div className="w-20 h-2 bg-white/40 rounded-full mb-2"></div>
                      <div className="w-24 h-1.5 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="absolute left-[44px] top-6 bottom-6 w-1 bg-gradient-to-b from-blue-500 via-primary to-purple-500 -z-10 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(66,193,129,0.5)] transition-all duration-700"></div>
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
                <div className="w-10 h-10 rounded-full bg-[#42c181] text-[#101b19] flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(66,193,129,0.3)]">3</div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Scale & Profit</h3>
              </div>
              <p className="text-[17px] text-white/70 leading-relaxed md:ml-14">
                Watch your calendar fill up with qualified peptide protocol appointments. Your team focuses on in-clinic care, while we handle follow-ups, medical qualifications, and objections.
              </p>
            </div>
            {/* Visual Side */}
            <div className="flex-1 w-full max-w-md bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col justify-center relative shadow-2xl overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-1000"></div>
              
              {/* Interactive Calendar Grid */}
              <div className="w-full bg-background border border-white/10 rounded-xl p-5 shadow-2xl z-10 transform group-hover:scale-[1.02] transition-transform duration-700">
                <div className="flex items-center justify-between mb-5">
                   <h4 className="text-white text-sm font-bold flex items-center gap-2"><Icon icon="lucide:calendar-days" className="text-primary text-lg" /> This Week</h4>
                   <span className="text-xs text-primary bg-primary/10 px-2.5 py-1.5 rounded font-mono border border-primary/20">+24 Bookings</span>
                </div>
                
                <div className="grid grid-cols-5 gap-2.5">
                  {/* Mon */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-white/50 text-center mb-1.5 font-semibold">M</div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-500 delay-100 flex items-center justify-center"><Icon icon="lucide:check" className="text-primary text-[12px] opacity-0 group-hover:opacity-100 transition-opacity delay-300" strokeWidth="3" /></div>
                  </div>
                  {/* Tue */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-white/50 text-center mb-1.5 font-semibold">T</div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-white/5"></div>
                    <div className="h-7 rounded-md bg-primary border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(66,193,129,0.6)] animate-pulse"><Icon icon="lucide:calendar-plus" className="text-black text-[12px]" /></div>
                  </div>
                  {/* Wed */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-white/50 text-center mb-1.5 font-semibold">W</div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-500 delay-300 flex items-center justify-center"><Icon icon="lucide:check" className="text-primary text-[12px] opacity-0 group-hover:opacity-100 transition-opacity delay-500" strokeWidth="3" /></div>
                  </div>
                  {/* Thu */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-white/50 text-center mb-1.5 font-semibold">T</div>
                    <div className="h-7 rounded-md bg-white/5"></div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-primary border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(66,193,129,0.6)] animate-pulse" style={{animationDelay: '0.5s'}}><Icon icon="lucide:calendar-plus" className="text-black text-[12px]" /></div>
                  </div>
                  {/* Fri */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-white/50 text-center mb-1.5 font-semibold">F</div>
                    <div className="h-7 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_10px_rgba(66,193,129,0.2)]"><Icon icon="lucide:check" className="text-primary text-[12px]" strokeWidth="3" /></div>
                    <div className="h-7 rounded-md bg-white/5 group-hover:bg-primary border-primary group-hover:shadow-[0_0_15px_rgba(66,193,129,0.6)] transition-all duration-500 delay-500 flex items-center justify-center"><Icon icon="lucide:calendar-plus" className="text-black text-[12px] opacity-0 group-hover:opacity-100 transition-opacity delay-700" /></div>
                    <div className="h-7 rounded-md bg-white/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
