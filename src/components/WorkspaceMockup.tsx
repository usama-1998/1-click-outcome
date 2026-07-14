import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import type { FormField } from '../types';

export const WorkspaceMockup: React.FC<{
  uploadedFile: File | null;
  isUploading: boolean;
  mappedFields: FormField[];
  userProfile: { fullName: string; email: string; companyName: string; taxId: string };
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAutoFill: () => void;
  onFieldChange: (id: string, value: string) => void;
  onExport: () => void;
}> = ({
  uploadedFile,
  isUploading,
  mappedFields,
  userProfile,
  onFileUpload,
  onAutoFill,
  onFieldChange,
  onExport,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const event = {
        target: { files: [file] }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onFileUpload(event);
    }
  };

  return (
    <div id="workspace-section" className="relative rounded-2xl border border-border bg-background p-4 shadow-2xl max-w-5xl mx-auto overflow-hidden text-left">
      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          <span className="text-xs text-muted-foreground ml-2 font-mono">1_click_outcome_dashboard_v3</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-secondary text-primary px-2 py-1 rounded border border-border flex items-center gap-1">
            <Icon icon="lucide:activity" className="text-xs" /> System Active
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Input Data */}
        <div className="lg:col-span-4 border-r border-border pr-4 space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-card/50"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={onFileUpload} 
              accept=".csv,.xlsx" 
              className="hidden" 
            />
            <Icon icon="lucide:database" className="text-3xl text-primary mx-auto mb-2" />
            <h4 className="text-sm font-semibold">
              {uploadedFile ? uploadedFile.name : "Drop dormant leads CSV"}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {uploadedFile ? `${(uploadedFile.size / 1024).toFixed(1)} KB` : "AI Reactivation Campaign"}
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-4 border border-border">
            <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Live Agency Stats</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-border/30">
                <span className="text-muted-foreground">Inbound Calls Handled</span>
                <span className="font-medium text-foreground">142 (Last 24h)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/30">
                <span className="text-muted-foreground">Appointments Booked</span>
                <span className="font-medium text-foreground">28 (+14%)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/30">
                <span className="text-muted-foreground">Reactivation Response</span>
                <span className="font-medium text-foreground">34% Rate</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-muted-foreground">Referral Engagements</span>
                <span className="font-medium text-foreground">56 Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Action Stream */}
        <div className="lg:col-span-8 flex flex-col justify-between min-h-[350px]">
          <div className="bg-card/40 rounded-xl p-4 border border-border flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:bot" className="text-primary" />
                <span className="text-xs font-semibold">
                  {uploadedFile ? `Processing ${uploadedFile.name}...` : "Live AI Operations Stream"}
                </span>
              </div>
              <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono">
                Status: Monitoring
              </span>
            </div>
            
            {isUploading ? (
              <div className="flex flex-col items-center justify-center h-48 space-y-3">
                <Icon icon="lucide:loader-2" className="text-3xl text-primary animate-spin" />
                <p className="text-sm text-muted-foreground">AI is executing backend automations...</p>
              </div>
            ) : (
              <div className="space-y-3 opacity-95 max-h-[280px] overflow-y-auto pr-1">
                <div className="p-3 bg-background rounded border border-border flex gap-3 items-center">
                  <Icon icon="lucide:phone-call" className="text-green-500 text-lg" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Missed Call Intercepted</p>
                    <p className="text-[10px] text-muted-foreground">AI Receptionist engaged with +1 (555) 019-2831 and booked a 2pm slot.</p>
                  </div>
                </div>
                <div className="p-3 bg-background rounded border border-border flex gap-3 items-center">
                  <Icon icon="lucide:message-square" className="text-blue-500 text-lg" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Reactivation SMS Sent</p>
                    <p className="text-[10px] text-muted-foreground">"Hi Sarah, noticed you inquired 3 months ago. Are you still interested?"</p>
                  </div>
                </div>
                <div className="p-3 bg-background rounded border border-border flex gap-3 items-center">
                  <Icon icon="lucide:star" className="text-yellow-500 text-lg" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Review Request Automated</p>
                    <p className="text-[10px] text-muted-foreground">Sent automated Google Review link to John D. after successful closing.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Icon icon="lucide:circle-check" className="text-primary" /> 
              {uploadedFile ? "AI Automations running flawlessly." : "Waiting for inbound triggers or lead upload."}
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                onClick={onAutoFill}
                disabled={isUploading}
                className="flex-1 sm:flex-none bg-secondary hover:bg-secondary/80 text-primary border border-primary/30 text-xs font-bold px-4 py-2.5 rounded flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Icon icon="lucide:zap" className="text-sm" /> Run Campaign
              </button>
              <button 
                onClick={onExport}
                className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold px-4 py-2.5 rounded flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Icon icon="lucide:line-chart" className="text-sm" /> View ROI Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
