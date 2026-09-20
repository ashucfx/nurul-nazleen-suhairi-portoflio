import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, FileText, Check, Copy, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ExecutiveContactProps {
  onOpenCVModal: () => void;
}

export const ExecutiveContact: React.FC<ExecutiveContactProps> = ({ onOpenCVModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-28 bg-obsidian-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-signal-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-signal-amber/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 shadow-2xl relative">
          
          {/* Header Badge */}
          <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
            <span>EXECUTIVE DIALOGUE & INQUIRIES</span>
          </div>

          {/* Lead Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase leading-snug">
            Let's talk about industrial performance, risk & resilience.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-steel-400 leading-relaxed font-sans max-w-2xl">
            For executive conversations, board risk advisory, technical leadership, industry collaboration, and strategic operational excellence opportunities across Malaysia, Brunei, and Southeast Asia.
          </p>

          {/* Direct Communication Channels Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-obsidian-900/80 border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-obsidian-800 border border-white/10 text-signal-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-steel-400 uppercase">
                    DIRECT EMAIL
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-signal-cyan transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-steel-400 hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy Email to clipboard"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Telephone Card */}
            <div className="p-5 rounded-xl bg-obsidian-900/80 border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-obsidian-800 border border-white/10 text-signal-amber">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-steel-400 uppercase">
                    OFFICIAL TELEPHONE
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-signal-amber transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-steel-400 hover:text-white transition-colors"
                title="Copy Phone"
                aria-label="Copy phone number to clipboard"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-xl bg-obsidian-900/80 border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-obsidian-800 border border-white/10 text-signal-cyanLight">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-steel-400 uppercase">
                    EXECUTIVE PROFILE
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-white hover:text-signal-cyan transition-colors"
                  >
                    {PERSONAL_INFO.linkedinDisplay}
                  </a>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-steel-400 hover:text-white transition-colors"
                aria-label="Visit LinkedIn profile"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Download Verified CV Card */}
            <div className="p-5 rounded-xl bg-obsidian-900/80 border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-obsidian-800 border border-white/10 text-emerald-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-steel-400 uppercase">
                    OFFICIAL DOSSIER
                  </div>
                  <button
                    onClick={onOpenCVModal}
                    className="text-xs sm:text-sm font-mono text-white hover:text-emerald-400 transition-colors text-left"
                  >
                    Review Curriculum Vitae (PDF)
                  </button>
                </div>
              </div>

              <button
                onClick={onOpenCVModal}
                className="p-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-steel-400 hover:text-white transition-colors"
                aria-label="Inspect verified curriculum vitae"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Action Row */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-steel-400">
              <ShieldCheck className="w-4 h-4 text-signal-cyan" />
              <span>CONFIDENTIAL EXECUTIVE & TECHNICAL ADVISORY</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Executive%20Inquiry%20%E2%80%94%20Nurul%20Nazleen%20Suhairi`}
                className="px-6 py-2.5 rounded-lg text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-steel-100 hover:bg-white transition-all shadow-md active:scale-98"
              >
                SEND EMAIL INQUIRY
              </a>
              <button
                onClick={onOpenCVModal}
                className="px-4 py-2.5 rounded-lg text-xs font-mono tracking-wider text-steel-200 bg-obsidian-800 border border-white/10 hover:border-white/20 transition-all"
              >
                VIEW CV
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
