import React from 'react';
import { IMPACT_CARDS } from '../data/portfolioData';
import { ShieldAlert, TrendingUp, MonitorCheck, FileCheck2, GraduationCap, ArrowUpRight } from 'lucide-react';

export const ProofOfImpact: React.FC = () => {
  const getCardIcon = (id: string) => {
    switch (id) {
      case 'impact-oee':
        return <TrendingUp className="w-6 h-6 text-signal-cyan" />;
      case 'impact-fires':
        return <ShieldAlert className="w-6 h-6 text-signal-amber" />;
      case 'impact-dashboards':
        return <MonitorCheck className="w-6 h-6 text-signal-cyanLight" />;
      case 'impact-authority':
        return <FileCheck2 className="w-6 h-6 text-emerald-400" />;
      case 'impact-mentorship':
        return <GraduationCap className="w-6 h-6 text-signal-gold" />;
      default:
        return <TrendingUp className="w-6 h-6" />;
    }
  };

  const getCardSectorBg = (id: string) => {
    switch (id) {
      case 'impact-oee':
        return '/fertilizer_complex.jpg';
      case 'impact-fires':
        return '/petrochemical_facility.jpg';
      case 'impact-dashboards':
        return '/control_room.jpg';
      default:
        return null;
    }
  };

  return (
    <section id="impact" className="relative py-24 bg-obsidian-900/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>SECTION 04 • EVIDENCE BASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Proof of Impact
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            Rigorous operational proof points establishing double-digit OEE expansion, major hazard prevention, and institutional capability in energy and fertilizer operations.
          </p>
        </div>

        {/* 5 Editorial Impact Cards with authentic sector imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_CARDS.map((card, idx) => {
            const bgImage = getCardSectorBg(card.id);
            return (
              <div
                key={card.id}
                className={`glass-panel glass-panel-hover p-7 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Sector Background Image if available */}
                {bgImage && (
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <img
                      src={bgImage}
                      alt={card.title}
                      className="w-full h-full object-cover object-center opacity-15 filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-obsidian-950/80" />
                  </div>
                )}

                {/* Subtle accent corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-signal-cyan/5 rounded-bl-full group-hover:bg-signal-cyan/10 transition-colors pointer-events-none z-10" />

                <div className="relative z-10">
                  {/* Category & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-steel-400 uppercase font-semibold">
                      {card.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-signal-cyan bg-signal-cyan/10 border border-signal-cyan/20 font-medium">
                      {card.tag}
                    </span>
                  </div>

                  {/* Big Stat / Impact Lockup */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-signal-cyanLight transition-colors">
                      {card.metric}
                    </span>
                    <div className="p-1.5 rounded-lg bg-obsidian-800 border border-white/10">
                      {getCardIcon(card.id)}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight uppercase mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-steel-300 leading-relaxed font-sans mb-4">
                    {card.narrative}
                  </p>

                  {/* Operational Context Box */}
                  <div className="p-3.5 rounded-lg bg-obsidian-950/85 border border-white/5 space-y-1 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-signal-amber font-semibold uppercase">
                      Documented Operational Context:
                    </div>
                    <div className="text-xs text-steel-300 font-sans leading-relaxed">
                      {card.context}
                    </div>
                  </div>
                </div>

                {/* Scope Footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-steel-400">
                  <span>{card.scope}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-steel-400 group-hover:text-signal-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
