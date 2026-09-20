import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroHologram3D } from './HeroHologram3D';
import { ShieldCheck, Activity, ArrowRight, FileText, Globe, Factory } from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center overflow-hidden">
      
      {/* Real Sector Background: Ammonia & Fertilizer Complex with dark executive gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/fertilizer_complex.jpg"
          alt="Ammonia and Fertilizer Manufacturing Complex"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-60 contrast-125 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/95 to-obsidian-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/90" />
      </div>

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-signal-cyan/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-signal-amber/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Narrative & Authority Lockup */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Institutional Sector Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-white/15 backdrop-blur-md shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider text-steel-200 uppercase font-semibold">
                BRUNEI FERTILIZER INDUSTRIES & EX-PETRONAS
              </span>
              <span className="text-white/20">•</span>
              <span className="font-mono text-[11px] tracking-wider text-signal-cyan uppercase font-bold">
                19+ YEARS
              </span>
            </div>

            {/* Principal Name & Title Lockup */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.06]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                <span className="font-mono text-sm sm:text-base font-semibold text-signal-amber tracking-wider uppercase">
                  {PERSONAL_INFO.title}
                </span>
                <span className="text-steel-600 hidden sm:inline">|</span>
                <span className="font-mono text-xs sm:text-sm text-steel-300 tracking-wide">
                  {PERSONAL_INFO.company}
                </span>
              </div>
            </div>

            {/* Pillar Descriptor Banner */}
            <div className="py-2.5 border-y border-white/10 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono tracking-wider text-steel-300 uppercase">
              <span className="text-signal-cyan font-semibold">Asset Integrity</span>
              <span className="text-steel-600">•</span>
              <span className="text-steel-100 font-semibold">Process Safety</span>
              <span className="text-steel-600">•</span>
              <span className="text-signal-amber font-semibold">Operational Excellence</span>
              <span className="text-steel-600">•</span>
              <span className="text-steel-300">Technical Governance</span>
            </div>

            {/* Hero Headline */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-steel-100 leading-snug">
                "{PERSONAL_INFO.heroHeadline}"
              </p>
              <p className="text-sm sm:text-base text-steel-300 leading-relaxed max-w-2xl font-sans">
                {PERSONAL_INFO.narrativeLead}
              </p>
            </div>

            {/* Quick Sector Verification Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-obsidian-900/85 border border-white/10 flex items-center gap-2.5 shadow-md">
                <ShieldCheck className="w-4 h-4 text-signal-cyan shrink-0" />
                <div className="leading-tight">
                  <div className="text-[10px] font-mono text-steel-400 uppercase">Statutory License</div>
                  <div className="text-xs font-semibold text-steel-100">DOSH Major Hazards</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/85 border border-white/10 flex items-center gap-2.5 shadow-md">
                <Activity className="w-4 h-4 text-signal-amber shrink-0" />
                <div className="leading-tight">
                  <div className="text-[10px] font-mono text-steel-400 uppercase">Verified Outcome</div>
                  <div className="text-xs font-semibold text-steel-100">+12% OEE via APM</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/85 border border-white/10 col-span-2 sm:col-span-1 flex items-center gap-2.5 shadow-md">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="leading-tight">
                  <div className="text-[10px] font-mono text-steel-400 uppercase">Regional Footprint</div>
                  <div className="text-xs font-semibold text-steel-100">Malaysia & Brunei</div>
                </div>
              </div>
            </div>

            {/* Executive Call to Action Cluster */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-steel-100 hover:bg-white transition-all shadow-xl hover:shadow-cyan-500/15 active:scale-98"
              >
                <span>EXPLORE TRACK RECORD</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-mono tracking-wider text-steel-200 bg-obsidian-800/90 hover:bg-obsidian-700/90 border border-white/15 hover:border-white/30 transition-all shadow-md active:scale-98"
              >
                <FileText className="w-4 h-4 text-signal-cyan" />
                <span>VIEW VERIFIED CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-3.5 text-xs font-mono tracking-wider text-steel-400 hover:text-white transition-colors"
              >
                DIRECT INQUIRY →
              </a>
            </div>

            {/* Sector Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-steel-400 uppercase tracking-widest">
              <span>ENERGY</span>
              <span>•</span>
              <span>PETROCHEMICAL</span>
              <span>•</span>
              <span>AMMONIA & FERTILIZER</span>
              <span>•</span>
              <span>GAS PROCESSING</span>
            </div>

          </div>

          {/* Right Column: 3D Dimensional Holographic Installation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <HeroHologram3D 
              portraitUrl="/profile.png" 
              onOpenCVModal={onOpenCVModal} 
            />

            {/* Sector Location Anchor */}
            <div className="mt-12 flex items-center gap-2 text-[11px] font-mono text-steel-400 bg-obsidian-950/80 px-4 py-1.5 rounded-full border border-white/10">
              <Factory className="w-3.5 h-3.5 text-signal-amber" />
              <span>Active Complex: Brunei Fertilizer Industries</span>
              <span>•</span>
              <span className="text-steel-200">SPARK, Brunei</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
