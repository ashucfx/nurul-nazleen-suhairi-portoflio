import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigatePage: (page: string) => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigatePage,
  onOpenCVModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'OVERVIEW' },
    { id: 'asset-integrity', label: 'ASSET INTEGRITY' },
    { id: 'process-safety', label: 'PROCESS SAFETY' },
    { id: 'digital-risk', label: 'DIGITAL RISK' },
    { id: 'credentials', label: 'CREDENTIALS' },
    { id: 'contact', label: 'ADVISORY' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-obsidian-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-4 bg-obsidian-950/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <button
          onClick={() => {
            onNavigatePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none text-left"
        >
          {/* Executive Shield Icon with Capital N in site palette */}
          <div className="w-9 h-9 rounded-lg bg-obsidian-900 border border-signal-cyan/40 flex items-center justify-center text-steel-100 font-mono text-sm font-bold tracking-wider group-hover:border-signal-cyan transition-colors shadow-inner relative overflow-hidden">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-steel-100 via-signal-cyanLight to-signal-cyan font-extrabold">
              N
            </span>
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-signal-gold" />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm tracking-wide text-steel-100 group-hover:text-white transition-colors">
              NURUL NAZLEEN SUHAIRI
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-steel-400 uppercase">
              Senior Manager • Asset Integrity
            </span>
          </div>
        </button>

        {/* Desktop Multi-Page Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-obsidian-900/70 p-1 rounded-xl border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigatePage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wider transition-all relative ${
                  isActive
                    ? 'text-white bg-obsidian-800 border border-signal-cyan/30 shadow-sm'
                    : 'text-steel-400 hover:text-steel-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-signal-cyan rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Executive Action Cluster */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider text-steel-200 bg-obsidian-900/90 hover:bg-obsidian-800 border border-white/15 hover:border-white/30 transition-all shadow-sm active:scale-98"
            aria-label="View verified Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-signal-cyan" />
            <span>VIEW CV</span>
          </button>
          
          <button
            onClick={() => {
              onNavigatePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-steel-100 hover:bg-white transition-all shadow-sm hover:shadow-cyan-500/10 active:scale-98"
          >
            <span>ADVISORY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenCVModal}
            className="p-2 rounded-lg text-steel-300 bg-obsidian-900 border border-white/10"
            aria-label="Open CV"
          >
            <FileText className="w-4 h-4 text-signal-cyan" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-steel-300 hover:text-white bg-obsidian-900 border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-obsidian-950/98 backdrop-blur-2xl border-b border-white/10 mt-2 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigatePage(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-2.5 text-xs font-mono tracking-wider text-left rounded-lg border transition-all ${
                    isActive
                      ? 'text-white bg-obsidian-800 border-signal-cyan/50 font-bold'
                      : 'text-steel-300 hover:text-white bg-obsidian-900/70 border-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono text-steel-200 bg-obsidian-900 border border-white/15"
            >
              <FileText className="w-4 h-4 text-signal-cyan" />
              <span>DOWNLOAD VERIFIED CV</span>
            </button>
            <button
              onClick={() => {
                onNavigatePage('contact');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-semibold text-obsidian-950 bg-steel-100"
            >
              <span>DIRECT ADVISORY INQUIRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
