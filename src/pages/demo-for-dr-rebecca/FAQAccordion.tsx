import React from 'react';
import { Icon } from '@iconify/react';
import type { FAQItem } from '../types';

export const FAQAccordion: React.FC<{
  activeFaqIndex: number | null;
  onToggleFaq: (index: number) => void;
}> = ({ activeFaqIndex, onToggleFaq }) => {
  const faqs: FAQItem[] = [
    {
      question: "What is this demo?",
      answer: "This is a demonstration of an outbound AI care coordinator designed to reactivate leads for Osteopathic Midlife Health. Grace is a specialized AI designed to call women who took the Menopause Quiz but didn't book a consult."
    },
    {
      question: "How does the AI sound on the phone?",
      answer: "She sounds like a warm, empathetic human! Her pacing is relaxed, she takes occasional pauses, and she uses conversational filler words, making her sound highly approachable."
    },
    {
      question: "What if a patient asks a complex medical question?",
      answer: "Grace is trained not to give medical advice. If asked about PMDD, PCOS, or specific HRT dosages, she politely lets the patient know that Dr. Rebecca will go over that during their 15-minute introductory call."
    },
    {
      question: "Does the AI handle telehealth licensing checks?",
      answer: "Yes, the AI knows Dr. Rebecca is only licensed for treatment in 10 specific states (like PA, NY, FL). It can effortlessly offer out-of-state patients an educational consultation instead."
    },
    {
      question: "Can it explain the direct-care model?",
      answer: "Absolutely. The AI gracefully handles questions about insurance, explaining the benefits of the cash-pay model and how it allows for longer, personalized visits with Dr. Rebecca."
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#31403e] text-white mb-6">
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
