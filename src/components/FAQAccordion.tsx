import React from 'react';
import { Icon } from '@iconify/react';
import type { FAQItem } from '../types';

export const FAQAccordion: React.FC<{
  activeFaqIndex: number | null;
  onToggleFaq: (index: number) => void;
}> = ({ activeFaqIndex, onToggleFaq }) => {
  const faqs: FAQItem[] = [
    {
      question: "What exactly is 1 Click Outcome?",
      answer: "We are an elite AI operations agency that builds, deploys, and manages intelligent automation ecosystems for your business. We handle things like AI Receptionists, Lead Reactivation, and CRM integrations so you can focus on sales."
    },
    {
      question: "How does the AI Receptionist work?",
      answer: "When a prospect calls your business and you miss it, our AI instantly sends them a text. It engages them in a natural, human-like conversation to answer their questions, qualify them, and book them directly onto your calendar."
    },
    {
      question: "Do I have to build the automations myself?",
      answer: "Not at all. We are a fully managed service. Our expert team maps out your strategy, builds the automations, integrates them with your existing tools, and monitors them 24/7."
    },
    {
      question: "Will this integrate with my current CRM?",
      answer: "Yes, we integrate seamlessly with major CRMs including GoHighLevel, HubSpot, Salesforce, Pipedrive, and hundreds of other tools via Zapier and custom APIs."
    },
    {
      question: "What is Lead Reactivation?",
      answer: "Lead Reactivation is a process where we take your old, dead, or dormant leads and send them an intelligent SMS or email sequence to reignite their interest and book them for a call."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most of our clients see new appointments booked within the first 48 hours of deploying a Lead Reactivation campaign, and immediate ROI from the AI Receptionist intercepting missed calls."
    },
    {
      question: "Do you offer custom backend automations?",
      answer: "Absolutely. Whether it's complex onboarding sequences, billing reminders, or operational data flow, we can build custom AI-driven workflows tailored to your specific bottlenecks."
    },
    {
      question: "How do we get started?",
      answer: "You can start by booking a Strategy Call with our team. We'll audit your current process, identify where you're losing revenue, and outline a custom AI Operations plan for your business."
    }
  ];

  return (
    <>
      <style>{`
        .faq-clip {
          --pattern-w: 30px;
          clip-path: polygon(
            0 0, 
            var(--pattern-w) 0, 
            calc(var(--pattern-w) + 40px) 40px, 
            calc(100% - var(--pattern-w) - 40px) 40px, 
            calc(100% - var(--pattern-w)) 0, 
            100% 0, 
            100% 100%, 
            0 100%
          );
        }
        @media (min-width: 768px) { .faq-clip { --pattern-w: 38px; } }
        @media (min-width: 1024px) { .faq-clip { --pattern-w: 52px; } }
        @media (min-width: 1280px) { .faq-clip { --pattern-w: 68px; } }
      `}</style>
      <section id="faq" className="relative z-50 bg-[#fcfcfd] -mt-[40px] pt-[120px] pb-32 faq-clip font-sans">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#202b29] text-white mb-6">
              <Icon icon="lucide:message-square" className="text-sm fill-current" />
              <span className="text-[11px] font-bold uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold text-[#101b19] tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-gray-300/80 rounded-lg overflow-hidden shadow-sm">
                  <h3 
                    onClick={() => onToggleFaq(idx)}
                    className="font-semibold text-[15px] p-5 flex justify-between items-center cursor-pointer text-[#101b19] select-none hover:bg-gray-50/50 transition-colors"
                  >
                    {faq.question}
                    <Icon 
                      icon={isOpen ? "lucide:minus" : "lucide:plus"} 
                      className="text-gray-400 text-lg shrink-0" 
                    />
                  </h3>
                  {isOpen && (
                    <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-500 text-[14px] leading-[1.6]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
