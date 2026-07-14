import React from 'react';

export const LogoCloud: React.FC = () => {
  return (
    <section className="py-16 border-b border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Discover how hundreds of businesses scale with 1 Click Outcome
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-75">
          {/* We keep the same logos as requested "don't create remove any new design elements" */}
          <img alt="AskyourPdf" className="h-8 w-auto object-contain" src="https://simplicity.ai/_next/static/media/askyourpdf.90bf5499.svg" />
          <img alt="Xara" className="h-8 w-auto object-contain" src="https://simplicity.ai/_next/static/media/xara.df1b6ede.svg" />
          <img alt="CoWriter" className="h-8 w-auto object-contain" src="https://simplicity.ai/_next/static/media/cowriter.bbd0be90.svg" />
          <img alt="DigitalPurse" className="h-8 w-auto object-contain" src="https://simplicity.ai/_next/static/media/digital-purse.cb49c9cc.svg" />
          <img alt="LegitWriter" className="h-8 w-auto object-contain" src="https://simplicity.ai/_next/static/media/legit-writer.95d586d9.svg" />
          <img alt="DetectAIML" className="h-8 w-auto object-contain" src="https://simplicity.ai/_next/static/media/detect.895428fe.svg" />
        </div>
      </div>
    </section>
  );
};
