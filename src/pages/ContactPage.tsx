import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowLeft, Factory, FileText, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactPageProps {
  onNavigateHome: () => void;
  onOpenCVModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onOpenCVModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: 'Technical Authority / Risk Governance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen text-steel-200">
      
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono text-signal-cyan hover:text-white transition-colors bg-obsidian-900/80 px-4 py-2 rounded-lg border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO MAIN PORTFOLIO</span>
        </button>
      </div>

      {/* Hero Header with Authentic Sector Photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-obsidian-900 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/coastal_jetty.jpg"
              alt="Coastal export jetty and marine gas terminal facilities"
              className="w-full h-full object-cover object-center opacity-35 filter brightness-70 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-cyan/20 border border-signal-cyan/40 text-signal-cyanLight font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT EXECUTIVE ENGAGEMENT</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-4">
              Executive Consultation & Advisory
            </h1>
            
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed mb-6 font-sans">
              Available for high-consequence asset integrity reviews, C-Suite risk governance advisory, board-level process safety audits, and keynote speaking engagements across Southeast Asia and global energy hubs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-steel-300">
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-signal-amber" />
                <span>Brunei Fertilizer Industries Sdn Bhd</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-signal-cyan" />
                <span>SPARK, Sungai Liang, Brunei & Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Contact Form & Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-obsidian-900/90 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
              Direct Executive Communication Channel
            </h2>
            <p className="text-xs sm:text-sm text-steel-400 mb-8 font-sans">
              Direct confidential transmission to Nurul Nazleen Suhairi. All messages are prioritized for corporate advisory, technical authority engagements, and institutional inquiries.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Transmitted Successfully</h3>
                <p className="text-xs text-steel-300 max-w-md mx-auto">
                  Thank you for reaching out. Nurul Nazleen Suhairi's office will review your transmission and respond within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-obsidian-800 text-xs font-mono text-steel-300 hover:text-white border border-white/10"
                >
                  TRANSMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-steel-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ir. Ahmad Razali"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-steel-600 text-sm focus:outline-none focus:border-signal-cyan transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-steel-400">
                      Enterprise / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Energy Authority / Petrochemical Corp"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-steel-600 text-sm focus:outline-none focus:border-signal-cyan transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-steel-400">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ahmad.razali@petronas.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-steel-600 text-sm focus:outline-none focus:border-signal-cyan transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-steel-400">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white text-sm focus:outline-none focus:border-signal-cyan transition-colors font-sans"
                    >
                      <option>Technical Authority / Risk Governance</option>
                      <option>Asset Performance & OEE Advisory</option>
                      <option>Keynote Speaking / Loss Prevention Asia</option>
                      <option>Turnaround (TA) / Major Overhaul Review</option>
                      <option>Board Advisory / Executive Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-steel-400">
                    Transmission Brief / Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide a concise description of your facility, operational context, or advisory requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-steel-600 text-sm focus:outline-none focus:border-signal-cyan transition-colors font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-steel-100 hover:bg-white text-obsidian-950 text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-signal-cyan" />
                  <span>TRANSMIT CONFIDENTIAL INQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Official Channels */}
            <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-white/10 shadow-xl space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-obsidian-950/80 border border-white/5 hover:border-signal-cyan/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-obsidian-800 flex items-center justify-center text-signal-cyan group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-steel-400 uppercase">Executive Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-signal-cyan transition-colors font-mono">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-obsidian-950/80 border border-white/5 hover:border-signal-amber/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-obsidian-800 flex items-center justify-center text-signal-amber group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-steel-400 uppercase">Direct Mobile & WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-signal-amber transition-colors font-mono">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-obsidian-950/80 border border-white/5 hover:border-emerald-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-obsidian-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-steel-400 uppercase">LinkedIn Verified Network</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      in/nurul-nazleen-suhairi
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenCVModal}
                  className="w-full py-3 rounded-xl bg-obsidian-800 hover:bg-obsidian-700 text-steel-200 text-xs font-mono tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-signal-cyan" />
                  <span>VIEW / DOWNLOAD COMPLETE CV</span>
                </button>
              </div>
            </div>

            {/* Operational Coordinates Card */}
            <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-white/10 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Active Operational Hubs
              </h3>
              <div className="space-y-3 text-xs text-steel-300 leading-relaxed font-sans">
                <div className="flex items-start gap-2.5">
                  <Factory className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Brunei Fertilizer Industries (BFI):</strong>
                    <div className="text-steel-400">Sungai Liang Industrial Park (SPARK), Belait District, Brunei Darussalam.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-signal-amber shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Malaysia Operations Hub:</strong>
                    <div className="text-steel-400">Kuala Lumpur & Bintulu Petrochemical Corridor, Sarawak, Malaysia.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
