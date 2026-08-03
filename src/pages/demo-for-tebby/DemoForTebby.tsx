import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import type { FormField } from '../../types';
import { Navigation } from '../../components/Navigation';
import { HeroSection } from './HeroSection';
import { UseCases } from './UseCases';
import { WorkflowSteps } from './WorkflowSteps';
import { FAQAccordion } from './FAQAccordion';
import { Footer } from '../../components/Footer';

const DemoForTebby: React.FC = () => {
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
                <Icon icon="lucide:database" className="text-primary" />Database Reactivation
              </h3>
              <p className="text-sm text-muted-foreground">We get old leads and turn them into paying customers again, reviving your existing database.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:banknote" className="text-primary" />Pay Per Appointment
              </h3>
              <p className="text-sm text-muted-foreground">No money up front. We get paid when you get paid—purely on a pay-per-booked-appointment basis.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:layers" className="text-primary" />Seamless CRM Sync
              </h3>
              <p className="text-sm text-muted-foreground">Deep integrations with existing tools. Leads, appointments, and transcripts sync directly to the CRM.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:trending-up" className="text-primary" />Increase Sales, Decrease Headcount
              </h3>
              <p className="text-sm text-muted-foreground">We help reactivate old leads on autopilot, increasing your sales while decreasing the need for front desk headcount.</p>
            </div>
          </div>
          <div className="text-center pt-8">
              <button 
                onClick={scrollToWorkspace}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Start Reactivating Leads Today
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

export default DemoForTebby;
