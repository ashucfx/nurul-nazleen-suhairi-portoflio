import React from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const currentFile = PERSONAL_INFO.cvDownloadLink;
  const currentTitle = 'Official Executive Curriculum Vitae (CV)';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-5xl h-[90vh] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-obsidian-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-obsidian-800 border border-white/10 text-signal-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight font-mono">
                  {currentTitle}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED EXECUTIVE DOSSIER
                </span>
              </div>
              <div className="text-[11px] font-mono text-steel-400">
                Nurul Nazleen Suhairi • Senior Manager, Asset Integrity • Brunei Fertilizer Industries
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Download Button */}
            <a
              href={currentFile}
              download="Nurul_Nazleen_Suhairi_CV.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-steel-100 hover:bg-white transition-all shadow-sm active:scale-98"
              title="Download Executive CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD EXECUTIVE CV</span>
            </a>

            {/* Open in new tab */}
            <a
              href={currentFile}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-obsidian-800 border border-white/10 text-steel-400 hover:text-white transition-colors"
              title="Open PDF in new browser tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-obsidian-800 border border-white/10 text-steel-400 hover:text-white transition-colors"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-header Ribbon */}
        <div className="px-5 py-2 bg-obsidian-950 border-b border-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-signal-cyan font-bold">
            <span>OFFICIAL EXECUTIVE CURRICULUM VITAE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-steel-400">
            <Shield className="w-3.5 h-3.5 text-signal-amber" />
            <span>ORIGINAL SOURCE-OF-TRUTH DOCUMENT</span>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="flex-1 bg-obsidian-950 relative">
          <iframe
            src={`${currentFile}#toolbar=1&navpanes=0`}
            title={currentTitle}
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="p-3 bg-obsidian-900 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-steel-400 shrink-0">
          <span>Official career documentation — Nurul Nazleen Suhairi</span>
          <span className="text-steel-300">Format: Standard Adobe PDF</span>
        </div>
      </div>
    </div>
  );
};
