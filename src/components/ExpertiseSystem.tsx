import React, { useState } from 'react';
import { EXPERTISE_CATEGORIES } from '../data/portfolioData';
import { ExpertiseCategory } from '../types/portfolio';
import { Check, ChevronRight, Cpu, ShieldCheck, Wrench, Gauge, Database, Users2 } from 'lucide-react';

export const ExpertiseSystem: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERTISE_CATEGORIES[0].id);

  const activeCategory: ExpertiseCategory = 
    EXPERTISE_CATEGORIES.find((cat) => cat.id === selectedId) || EXPERTISE_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'asset-integrity':
        return <Wrench className="w-5 h-5" />;
      case 'process-safety':
        return <ShieldCheck className="w-5 h-5" />;
      case 'technical-governance':
        return <Cpu className="w-5 h-5" />;
      case 'operational-excellence':
        return <Gauge className="w-5 h-5" />;
      case 'digital-risk':
        return <Database className="w-5 h-5" />;
      case 'leadership':
        return <Users2 className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  // 6 unique non-repeated sector images
  const getSectorImageForDomain = (id: string) => {
    switch (id) {
      case 'asset-integrity':
        return {
          src: '/urea_towers.jpg',
          caption: 'High-Elevation Urea Prilling Towers & Mechanical Structure Inspection'
        };
      case 'process-safety':
        return {
          src: '/distillation_columns.jpg',
          caption: 'High-Temperature Hydrocarbon Fractionation & Quantitative Risk Assessment'
        };
      case 'technical-governance':
        return {
          src: '/engineer_console.jpg',
          caption: 'Senior Engineering Console — Technical Authority & MOC Verification'
        };
      case 'operational-excellence':
        return {
          src: '/synthesis_loop.jpg',
          caption: 'Ammonia Synthesis Loop Reactant Loops & Continuous OEE Acceleration'
        };
      case 'digital-risk':
        return {
          src: '/scada_monitors.jpg',
          caption: 'SCADA Dynamic Barrier Wall — Real-Time Telemetry & SCE Degradation Tracking'
        };
      case 'leadership':
        return {
          src: '/refining_zone.jpg',
          caption: 'Mega-Complex Refining Infrastructure & Multinational Engineering Mentorship'
        };
      default:
        return {
          src: '/urea_towers.jpg',
          caption: 'Industrial Energy Infrastructure'
        };
    }
  };

  const activeSectorImg = getSectorImageForDomain(activeCategory.id);

  return (
    <section id="expertise" className="relative py-24 bg-obsidian-900/60 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>SECTION 02 • TECHNICAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Interactive Expertise System
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            Select an engineering domain below to inspect institutional methodologies, deliverables, and authentic sector operations.
          </p>
        </div>

        {/* Master-Detail Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Interactive Navigation Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERTISE_CATEGORIES.map((cat) => {
              const isActive = cat.id === selectedId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-obsidian-800 border-signal-cyan shadow-lg shadow-cyan-950/20'
                      : 'bg-obsidian-900/50 border-white/5 hover:border-white/15 hover:bg-obsidian-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs transition-colors ${
                        isActive
                          ? 'bg-signal-cyan text-obsidian-950 font-bold'
                          : 'bg-obsidian-800 text-steel-400'
                      }`}
                    >
                      {cat.number}
                    </div>
                    <div>
                      <div
                        className={`text-xs font-mono font-bold tracking-wider uppercase ${
                          isActive ? 'text-white' : 'text-steel-300'
                        }`}
                      >
                        {cat.title}
                      </div>
                      <div className="text-[11px] font-sans text-steel-400 truncate max-w-[240px] sm:max-w-xs">
                        {cat.tagline}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-signal-cyan translate-x-1' : 'text-steel-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Domain Telemetry Display with Sector Imagery */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 relative overflow-hidden">
              
              {/* Background ambient accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-signal-cyan/5 rounded-bl-full pointer-events-none" />

              {/* Header Box */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-signal-cyan font-bold">
                      DOMAIN {activeCategory.number}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="font-mono text-[10px] text-steel-400 uppercase tracking-widest">
                      SYSTEM ARCHITECTURE
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs font-mono text-signal-amber">
                    {activeCategory.tagline}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-800 border border-white/10 text-signal-cyan hidden sm:flex">
                  {getCategoryIcon(activeCategory.id)}
                </div>
              </div>

              {/* Unique Sector Photo Feature for the Domain */}
              <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                <img
                  src={activeSectorImg.src}
                  alt={activeCategory.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-115 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-steel-200 bg-obsidian-950/85 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <span className="truncate">{activeSectorImg.caption}</span>
                  <span className="text-signal-cyan shrink-0 ml-2 font-semibold">AUTHENTIC SECTOR VIEW</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-steel-300 leading-relaxed font-sans">
                {activeCategory.summary}
              </p>

              {/* Competencies Taxonomy */}
              <div className="space-y-3">
                <div className="font-mono text-xs font-bold tracking-wider text-steel-400 uppercase">
                  Core Engineering Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCategory.competencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-obsidian-900/80 border border-white/5 flex items-center gap-2 text-xs text-steel-200"
                    >
                      <Check className="w-3.5 h-3.5 text-signal-cyan shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="font-mono text-xs font-bold tracking-wider text-steel-400 uppercase">
                  Institutional Deliverables & Milestones:
                </div>
                <ul className="space-y-1.5 text-xs text-steel-300">
                  {activeCategory.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-signal-amber font-mono font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulatory Standards Banner */}
              <div className="p-3 rounded-lg bg-obsidian-900/90 border border-white/10 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                <span className="text-steel-400 uppercase font-semibold">Regulatory Frameworks:</span>
                {activeCategory.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-obsidian-800 text-steel-200 border border-white/5"
                  >
                    {std}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
