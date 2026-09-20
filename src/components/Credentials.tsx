import React, { useState } from 'react';
import { CREDENTIALS_LIST } from '../data/portfolioData';
import { Award, GraduationCap, ShieldCheck, CheckCircle2, BookmarkCheck } from 'lucide-react';

export const Credentials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'statutory' | 'education' | 'technical' | 'affiliation'>('all');

  const filteredCredentials = activeTab === 'all' 
    ? CREDENTIALS_LIST 
    : CREDENTIALS_LIST.filter(item => item.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-signal-cyan" />;
      case 'statutory':
        return <ShieldCheck className="w-4 h-4 text-signal-amber" />;
      case 'technical':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'affiliation':
        return <BookmarkCheck className="w-4 h-4 text-signal-cyanLight" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  return (
    <section id="credentials" className="relative py-24 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>SECTION 07 • INSTITUTIONAL PEDIGREE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Education & Credentials
            </h2>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-obsidian-900 border border-white/10">
            {[
              { id: 'all', label: 'ALL CREDENTIALS' },
              { id: 'statutory', label: 'STATUTORY' },
              { id: 'education', label: 'EDUCATION' },
              { id: 'technical', label: 'TECHNICAL' },
              { id: 'affiliation', label: 'AFFILIATIONS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1 text-xs font-mono tracking-wider rounded transition-colors ${
                  activeTab === tab.id
                    ? 'bg-steel-100 text-obsidian-950 font-semibold'
                    : 'text-steel-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCredentials.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 rounded-xl border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-obsidian-800 border border-white/10">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-steel-400 uppercase">
                      {item.category}
                    </span>
                  </div>
                  {item.year && (
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-obsidian-800 text-signal-amber border border-white/10">
                      {item.year}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-signal-cyan mt-1">
                    {item.institution}
                  </div>
                </div>

                {item.description && (
                  <p className="text-xs text-steel-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                )}
              </div>

              {item.badge && (
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-steel-400 uppercase px-2 py-0.5 rounded bg-obsidian-900 border border-white/5">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
