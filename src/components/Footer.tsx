import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Left Brand Lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-800 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white">
                NNS
              </div>
              <span className="font-extrabold text-base tracking-wide text-white uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="font-mono text-xs text-steel-400">
              Senior Manager, Asset Integrity • Brunei Fertilizer Industries Sdn Bhd
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-steel-400">
              <span className="text-signal-cyan">Asset Integrity</span>
              <span>•</span>
              <span className="text-steel-200">Process Safety</span>
              <span>•</span>
              <span className="text-signal-amber">Operational Excellence</span>
              <span>•</span>
              <span>Technical Governance</span>
            </div>
          </div>

          {/* Center: Geographic Focus */}
          <div className="space-y-1 md:text-right">
            <div className="text-xs font-mono font-semibold tracking-wider text-steel-300 uppercase">
              Geographic & Market Relevance
            </div>
            <div className="text-xs font-mono text-steel-400">
              Malaysia • Brunei • Southeast Asia
            </div>
            <div className="pt-2 flex flex-wrap items-center md:justify-end gap-4 text-xs font-mono">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-400 hover:text-signal-cyan transition-colors"
              >
                LinkedIn Profile
              </a>
              <span className="text-steel-600">|</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-steel-400 hover:text-white transition-colors"
              >
                Direct Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-steel-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-signal-cyan" />
            <span>© 2026 {PERSONAL_INFO.name}. All verified credentials recorded.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900 border border-white/10 hover:border-white/20 text-steel-300 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
