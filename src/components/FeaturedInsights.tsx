import React, { useState } from 'react';
import { FEATURED_INSIGHTS } from '../data/portfolioData';
import { InsightTopic } from '../types/portfolio';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const FeaturedInsights: React.FC = () => {
  const [activeModalTopic, setActiveModalTopic] = useState<InsightTopic | null>(null);

  return (
    <section id="insights" className="relative py-24 bg-obsidian-900/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>SECTION 06 • EXECUTIVE KNOWLEDGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Featured Insights & Frameworks
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            Strategic decision models and thought leadership themes derived from enterprise asset governance, barrier integrity, and industry proceedings.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_INSIGHTS.map((topic) => (
            <div
              key={topic.id}
              className="glass-panel glass-panel-hover p-7 rounded-2xl border border-white/10 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalTopic(topic)}
            >
              <div className="space-y-4">
                {/* Header Lockup */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-signal-cyan px-2.5 py-0.5 rounded bg-obsidian-800 border border-white/10">
                    {topic.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase text-signal-amber bg-signal-amber/10 border border-signal-amber/20">
                    {topic.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase group-hover:text-signal-cyanLight transition-colors">
                    {topic.title}
                  </h3>
                  <div className="text-xs font-mono text-steel-300">
                    {topic.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-steel-400 leading-relaxed font-sans line-clamp-3">
                  {topic.description}
                </p>

                {/* Core Takeaways preview */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] font-mono text-steel-400 uppercase font-semibold">
                    Core Architectural Focus:
                  </div>
                  <ul className="space-y-1 text-xs text-steel-300">
                    {topic.takeaways.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-steel-400">{topic.status}</span>
                <span className="text-signal-cyan group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  <span>INSPECT BLUEPRINT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalTopic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-md"
          onClick={() => setActiveModalTopic(null)}
        >
          <div
            className="glass-panel w-full max-w-2xl p-8 rounded-2xl border border-white/20 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalTopic(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-obsidian-800 border border-white/10 text-steel-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-signal-cyan px-2.5 py-1 rounded bg-obsidian-800 border border-white/10">
                {activeModalTopic.code}
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-signal-amber/10 border border-signal-amber/20 text-signal-amber uppercase">
                {activeModalTopic.badge}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                {activeModalTopic.title}
              </h3>
              <div className="text-sm font-mono text-signal-amber mt-1">
                {activeModalTopic.subtitle}
              </div>
            </div>

            <p className="text-sm text-steel-300 leading-relaxed font-sans">
              {activeModalTopic.description}
            </p>

            <div className="space-y-3 pt-2 border-t border-white/10">
              <div className="text-xs font-mono font-bold tracking-wider text-steel-400 uppercase">
                Executive Methodology & Scope:
              </div>
              <ul className="space-y-2">
                {activeModalTopic.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-steel-200">
                    <CheckCircle2 className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-lg bg-obsidian-950 border border-white/10 flex items-center justify-between text-xs font-mono text-steel-400">
              <span>Status: {activeModalTopic.status}</span>
              <span className="text-steel-300">Executive Briefing Available Upon Direct Inquiry</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
