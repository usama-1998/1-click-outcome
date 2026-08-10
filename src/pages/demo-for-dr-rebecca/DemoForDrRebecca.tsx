import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import type { FormField } from '../../types';
import { Navigation } from '../../components/Navigation';
import { HeroSection } from './HeroSection';
import { UseCases } from './UseCases';
import { WorkflowSteps } from './WorkflowSteps';
import { FAQAccordion } from './FAQAccordion';
import { Footer } from '../../components/Footer';

const DemoForDrRebecca: React.FC = () => {
  // State Variables
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Event Handlers
  const handleLanguageChange = () => {
    setSelectedLanguage(prev => prev === "EN" ? "ES" : "EN");
  };

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(prev => prev === index ? null : index);
  };

  const scrollToWorkspace = () => {
    const element = document.getElementById('workspace-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col relative font-sans overflow-hidden">
      {/* Decorative Line Patterns (Full Page) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[6px] md:w-[38px] lg:w-[52px] xl:w-[68px] border-r border-[#31403e] bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_8px,#31403e_8px,#31403e_9px)] bg-[#14221f] z-40"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[6px] md:w-[38px] lg:w-[52px] xl:w-[68px] border-l border-[#31403e] bg-[repeating-linear-gradient(-135deg,transparent_0px,transparent_8px,#31403e_8px,#31403e_9px)] bg-[#14221f] z-40"></div>

      <Navigation 
        selectedLanguage={selectedLanguage} 
        onLanguageChange={handleLanguageChange} 
      />

      <header className="relative border-b border-border bg-card px-6 pt-6 lg:pt-8 pb-16 overflow-hidden">
        {/* Local decorative patterns moved to root */}

        <HeroSection onTryFreeClick={scrollToWorkspace} />
      </header>

      <UseCases />

      <WorkflowSteps />

      {/* Feature Grid Section */}
      <section className="py-20 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:refresh-cw" className="text-primary" />Cycle Renewals
              </h3>
              <p className="text-sm text-muted-foreground">Automatically re-engage patients finishing their BPC-157 or CJC cycles to ensure ongoing protocol adherence.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:activity" className="text-primary" />Consultation Booking
              </h3>
              <p className="text-sm text-muted-foreground">Revive cold leads who inquired about longevity, qualifying them and securing the AED 300 deposit for DHA-registered physicians.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:shield-check" className="text-primary" />Clinical Authority
              </h3>
              <p className="text-sm text-muted-foreground">Our AI agents are trained on your specific pharmaceutical-grade offerings, answering basic questions accurately before booking.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:trending-up" className="text-primary" />Upsell Subscriptions
              </h3>
              <p className="text-sm text-muted-foreground">Reactivate dormant patients and introduce them to Hero or Committed subscription tiers to maximize LTV on autopilot.</p>
            </div>
          </div>
          <div className="text-center pt-8">
              <button 
                onClick={scrollToWorkspace}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Start Reactivating Patients Today
                <Icon icon="lucide:arrow-right" className="text-lg" />
              </button>
          </div>
        </div>
      </section>

      <FAQAccordion activeFaqIndex={activeFaqIndex} onToggleFaq={toggleFaq} />

      <Footer />
    </div>
  );
};

export default DemoForDrRebecca;
