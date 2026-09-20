import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Impact', href: '#impact' },
    { label: 'Insights', href: '#insights' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-obsidian-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-lg bg-obsidian-800 border border-white/15 flex items-center justify-center text-steel-100 font-mono text-xs font-bold tracking-wider group-hover:border-signal-cyan/50 transition-colors shadow-inner">
            NNS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-wide text-steel-100 group-hover:text-white transition-colors">
              NURUL NAZLEEN SUHAIRI
            </span>
            <span className="font-mono text-[10px] tracking-widest text-steel-400 uppercase">
              Senior Manager • Asset Integrity
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-steel-400 hover:text-white transition-colors tracking-wider uppercase font-mono relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-signal-cyan hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Executive Action Cluster */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono tracking-wider text-steel-200 bg-obsidian-800/80 hover:bg-obsidian-700 border border-white/10 hover:border-white/20 transition-all shadow-sm"
            aria-label="View verified Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-signal-cyan" />
            <span>VIEW CV</span>
          </button>
          
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-steel-100 hover:bg-white transition-all shadow-sm hover:shadow-cyan-500/10"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCVModal}
            className="p-2 rounded-md text-steel-300 bg-obsidian-800 border border-white/10"
            aria-label="Open CV"
          >
            <FileText className="w-4 h-4 text-signal-cyan" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-steel-300 hover:text-white bg-obsidian-800 border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-4 pb-6 bg-obsidian-950/95 backdrop-blur-xl border-b border-white/10 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono tracking-wider text-steel-300 hover:text-white bg-obsidian-900/60 rounded border border-white/5 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs font-mono text-steel-200 bg-obsidian-800 border border-white/10"
            >
              <FileText className="w-4 h-4 text-signal-cyan" />
              <span>DOWNLOAD VERIFIED CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs font-mono font-semibold text-obsidian-950 bg-steel-100"
            >
              <span>DIRECT INQUIRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
