import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroHologram3D } from './HeroHologram3D';
import { ShieldCheck, Activity, ArrowRight, FileText, Globe, Factory, Radio, Clock, ChevronRight, Zap } from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
  onNavigatePage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onNavigatePage }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [telemetryPulse, setTelemetryPulse] = useState<number>(99.82);

  // Live GMT+8 Real-Time Brunei / Malaysia Standard Time Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // GMT+8 offset
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const bstDate = new Date(utc + (3600000 * 8));
      const hours = String(bstDate.getHours()).padStart(2, '0');
      const minutes = String(bstDate.getMinutes()).padStart(2, '0');
      const seconds = String(bstDate.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Subtle live telemetry pulse fluctuation (99.80% - 99.85%)
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setTelemetryPulse(+(99.80 + Math.random() * 0.05).toFixed(2));
    }, 4000);
    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden">
      
      {/* Real Sector Background: Ammonia & Fertilizer Complex with dark executive gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/fertilizer_complex.jpg"
          alt="Ammonia and Fertilizer Manufacturing Complex"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-50 contrast-125 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/95 to-obsidian-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/90" />
      </div>

      {/* Ambient Radial Highlights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-signal-cyan/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-signal-amber/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Live Facility Telemetry Sentinel Ribbon */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-obsidian-900/90 border border-white/10 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              LIVE TELEMETRY: NORMAL OPERATING ENVELOPE (NOE)
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline font-mono text-xs text-steel-400">
              BRUNEI FERTILIZER INDUSTRIES & EX-PETRONAS
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-steel-300">
            <div className="flex items-center gap-1.5 text-signal-cyan">
              <Clock className="w-3.5 h-3.5 text-signal-cyan" />
              <span className="font-bold tracking-widest">{currentTime || '08:00:00'}</span>
              <span className="text-[10px] text-steel-400">GMT+8</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-signal-amber">
              <Activity className="w-3.5 h-3.5" />
              <span>OEE UPTIME: <strong className="text-white">{telemetryPulse}%</strong></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Executive Narrative & Authority Lockup */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            
            {/* Sector Experience & Authority Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-signal-cyan/10 border border-signal-cyan/30 text-signal-cyanLight font-mono text-[11px] font-semibold tracking-wider uppercase">
                <Radio className="w-3 h-3 text-signal-cyan animate-pulse" />
                <span>ASSET INTEGRITY LEADER</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-signal-amber/10 border border-signal-amber/30 text-signal-goldLight font-mono text-[11px] font-semibold tracking-wider uppercase">
                <Zap className="w-3 h-3 text-signal-gold" />
                <span>19+ YEARS GOVERNANCE</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-steel-300 font-mono text-[11px] tracking-wider uppercase">
                <span>SE ASIA REGIONAL AUTHORITY</span>
              </div>
            </div>

            {/* Principal Name & Title Lockup */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
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

            {/* Pillar Descriptor Banner with Direct Page Anchors */}
            <div className="py-2 border-y border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono tracking-wider text-steel-300 uppercase">
              <button 
                onClick={() => onNavigatePage('asset-integrity')}
                className="text-signal-cyan hover:text-white transition-colors flex items-center gap-1 font-semibold group"
              >
                <span>Asset Integrity</span>
                <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-steel-600">•</span>
              <button 
                onClick={() => onNavigatePage('process-safety')}
                className="text-steel-100 hover:text-signal-cyan transition-colors flex items-center gap-1 font-semibold group"
              >
                <span>Process Safety</span>
                <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-steel-600">•</span>
              <button 
                onClick={() => onNavigatePage('digital-risk')}
                className="text-signal-amber hover:text-white transition-colors flex items-center gap-1 font-semibold group"
              >
                <span>Digital Risk & APM</span>
                <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-steel-600">•</span>
              <span className="text-steel-400">Technical Authority</span>
            </div>

            {/* Hero Headline & Lead */}
            <div className="space-y-2.5">
              <p className="text-lg sm:text-xl lg:text-[1.5rem] font-medium text-steel-100 leading-snug">
                "{PERSONAL_INFO.heroHeadline}"
              </p>
              <p className="text-xs sm:text-sm text-steel-300 leading-relaxed max-w-2xl font-sans">
                {PERSONAL_INFO.narrativeLead}
              </p>
            </div>

            {/* Real-time Sector Verification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div 
                onClick={() => onNavigatePage('process-safety')}
                className="p-3 rounded-xl bg-obsidian-900/85 border border-white/10 hover:border-signal-cyan/40 cursor-pointer transition-all shadow-md group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-signal-cyan shrink-0" />
                  <span className="text-[10px] font-mono text-steel-400 uppercase">Statutory License</span>
                </div>
                <div className="text-xs font-semibold text-steel-100 group-hover:text-signal-cyan transition-colors">
                  DOSH Major Hazards
                </div>
              </div>

              <div 
                onClick={() => onNavigatePage('asset-integrity')}
                className="p-3 rounded-xl bg-obsidian-900/85 border border-white/10 hover:border-signal-amber/40 cursor-pointer transition-all shadow-md group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-signal-amber shrink-0" />
                  <span className="text-[10px] font-mono text-steel-400 uppercase">Verified Outcome</span>
                </div>
                <div className="text-xs font-semibold text-steel-100 group-hover:text-signal-amber transition-colors">
                  +12% OEE via APM
                </div>
              </div>

              <div 
                onClick={() => onNavigatePage('credentials')}
                className="p-3 rounded-xl bg-obsidian-900/85 border border-white/10 hover:border-emerald-400/40 cursor-pointer transition-all shadow-md col-span-2 sm:col-span-1 group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[10px] font-mono text-steel-400 uppercase">Regional Footprint</span>
                </div>
                <div className="text-xs font-semibold text-steel-100 group-hover:text-emerald-300 transition-colors">
                  Brunei & Malaysia
                </div>
              </div>
            </div>

            {/* Executive Call to Action Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigatePage('asset-integrity')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-steel-100 hover:bg-white transition-all shadow-xl hover:shadow-cyan-500/15 active:scale-98"
              >
                <span>EXPLORE SPECIALIZED DOSSIERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono tracking-wider text-steel-200 bg-obsidian-800/90 hover:bg-obsidian-700/90 border border-white/15 hover:border-white/30 transition-all shadow-md active:scale-98"
              >
                <FileText className="w-4 h-4 text-signal-cyan" />
                <span>OFFICIAL VERIFIED CV</span>
              </button>

              <button
                onClick={() => onNavigatePage('contact')}
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-mono tracking-wider text-steel-400 hover:text-white transition-colors"
              >
                EXECUTIVE INQUIRY →
              </button>
            </div>

            {/* Sector Tags */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] font-mono text-steel-400 uppercase tracking-widest">
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

            {/* Sector Operational Complex Stamp */}
            <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-steel-300 bg-obsidian-900/90 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <Factory className="w-3.5 h-3.5 text-signal-amber" />
              <span>Active Complex: Brunei Fertilizer Industries</span>
              <span>•</span>
              <span className="text-signal-cyan font-semibold">SPARK, Brunei</span>
            </div>
          </div>

        </div>

        {/* Dynamic Telemetry Live Ticker */}
        <div className="mt-8 pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-2.5 rounded-lg bg-obsidian-900/50 border border-white/5">
            <div className="text-[10px] font-mono text-steel-400 uppercase">Track Record</div>
            <div className="text-sm font-bold text-white font-mono">0 MAJOR FIRES / 19+ YRS</div>
          </div>
          <div className="p-2.5 rounded-lg bg-obsidian-900/50 border border-white/5">
            <div className="text-[10px] font-mono text-steel-400 uppercase">Operational Gain</div>
            <div className="text-sm font-bold text-signal-amber font-mono">+12% OEE IMPROVEMENT</div>
          </div>
          <div className="p-2.5 rounded-lg bg-obsidian-900/50 border border-white/5">
            <div className="text-[10px] font-mono text-steel-400 uppercase">Statutory Dossiers</div>
            <div className="text-sm font-bold text-signal-cyan font-mono">3+ MAJOR HAZARDS CIMAH</div>
          </div>
          <div className="p-2.5 rounded-lg bg-obsidian-900/50 border border-white/5">
            <div className="text-[10px] font-mono text-steel-400 uppercase">Regional Leadership</div>
            <div className="text-sm font-bold text-emerald-400 font-mono">LPA 2025 CO-CHAIR</div>
          </div>
        </div>

      </div>
    </section>
  );
};
