import React from 'react';
import { EXECUTIVE_METRICS } from '../data/portfolioData';
import { ShieldCheck, Activity, Flame, Users, ArrowUpRight } from 'lucide-react';

export const ExecutiveMetrics: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'metric-years':
        return <ShieldCheck className="w-5 h-5 text-signal-cyan" />;
      case 'metric-oee':
        return <Activity className="w-5 h-5 text-signal-amber" />;
      case 'metric-fires':
        return <Flame className="w-5 h-5 text-signal-cyan" />;
      case 'metric-mentees':
        return <Users className="w-5 h-5 text-emerald-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="metrics" className="relative py-16 border-y border-white/10 bg-obsidian-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>EXECUTIVE PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Quantifiable Industry Impact
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            All metrics reflect documented operational outcomes from PETRONAS, Brunei Fertilizer Industries, and statutory bodies.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXECUTIVE_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="glass-panel glass-panel-hover p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-signal-cyan/5 rounded-bl-full group-hover:bg-signal-cyan/10 transition-colors pointer-events-none" />

              <div>
                {/* Header with Icon and Label */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-obsidian-800/90 border border-white/10">
                    {getIcon(metric.id)}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-steel-400 uppercase">
                    VERIFIED
                  </span>
                </div>

                {/* Big Stat Value */}
                <div className="mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-white group-hover:text-signal-cyanLight transition-colors">
                    {metric.value}
                  </span>
                </div>

                {/* Primary Metric Name */}
                <h3 className="text-sm font-bold tracking-wider text-steel-100 uppercase mb-2">
                  {metric.label}
                </h3>

                {/* Secondary Descriptor */}
                <div className="text-xs font-medium text-signal-amber mb-3 font-mono">
                  {metric.descriptor}
                </div>

                {/* Contextual Footnote */}
                <p className="text-xs text-steel-400 leading-relaxed font-sans">
                  {metric.context}
                </p>
              </div>

              {/* Bottom Reference Source */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-steel-400">
                <span className="truncate max-w-[200px]" title={metric.sourceRef}>
                  {metric.sourceRef}
                </span>
                <ArrowUpRight className="w-3 h-3 text-steel-400 group-hover:text-signal-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
