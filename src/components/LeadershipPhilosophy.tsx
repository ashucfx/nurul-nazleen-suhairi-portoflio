import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/portfolioData';
import { Compass, Eye, Gauge, Users, RefreshCw } from 'lucide-react';

export const LeadershipPhilosophy: React.FC = () => {
  const getPillarIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Compass className="w-5 h-5 text-signal-cyan" />;
      case '02':
        return <Eye className="w-5 h-5 text-signal-amber" />;
      case '03':
        return <Gauge className="w-5 h-5 text-emerald-400" />;
      case '04':
        return <Users className="w-5 h-5 text-signal-cyanLight" />;
      case '05':
        return <RefreshCw className="w-5 h-5 text-signal-gold" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="philosophy" className="relative py-24 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-3">
            <span>SECTION 05 • EXECUTIVE MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            How I Think
          </h2>
          <p className="mt-4 text-base sm:text-lg text-steel-400 leading-relaxed font-sans">
            Principles honed through 19+ years of decision-making in capital-intensive, high-consequence petrochemical and fertilizer environments.
          </p>
        </div>

        {/* 5 Distinct Pillars Layout */}
        <div className="space-y-6">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Number and Title Lockup */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-signal-cyan">
                      {pillar.number}
                    </span>
                    <div className="p-2 rounded-lg bg-obsidian-800 border border-white/10">
                      {getPillarIcon(pillar.number)}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-signal-amber font-medium">
                    {pillar.headline}
                  </div>
                </div>

                {/* Right: Detailed Discipline and Axiom */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-steel-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                  <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-steel-400 italic">
                    <span className="text-signal-cyan not-italic">Governing Axiom:</span>
                    <span>"{pillar.quote}"</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
