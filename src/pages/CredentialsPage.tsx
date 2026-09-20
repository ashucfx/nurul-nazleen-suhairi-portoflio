import React, { useEffect } from 'react';
import { Award, GraduationCap, FileCheck, ArrowLeft, Download, FileText, CheckCircle2, Briefcase, ShieldCheck } from 'lucide-react';
import { CREDENTIALS_LIST } from '../data/portfolioData';

interface CredentialsPageProps {
  onNavigateHome: () => void;
  onOpenCVModal: () => void;
  onNavigatePage: (page: string) => void;
}

export const CredentialsPage: React.FC<CredentialsPageProps> = ({
  onNavigateHome,
  onOpenCVModal,
  onNavigatePage
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const educationItems = CREDENTIALS_LIST.filter(c => c.category === 'education');
  const statutoryItems = CREDENTIALS_LIST.filter(c => c.category === 'statutory' || c.category === 'technical');
  const affiliationItems = CREDENTIALS_LIST.filter(c => c.category === 'affiliation');

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
              src="/executive_keynote.jpg"
              alt="Executive Keynote and Engineering Conference Assembly"
              className="w-full h-full object-cover object-center opacity-35 filter brightness-70 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-gold/20 border border-signal-gold/40 text-signal-goldLight font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>STATUTORY DOSSIER & VERIFIED CREDENTIALS</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-4">
              Academic Pedigree, Statutory Licenses & Credentials
            </h1>
            
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed mb-6 font-sans">
              19+ years of verified high-consequence engineering governance. Certified by statutory authorities including the Department of Occupational Safety and Health (DOSH) Malaysia, Department of Environment (DOE), Board of Engineers Malaysia (BEM), and the Institution of Chemical Engineers (AMIChemE).
            </p>

            {/* Quick Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-steel-100 text-obsidian-950 text-xs font-mono font-bold tracking-wider hover:bg-white transition-all shadow-lg"
              >
                <FileText className="w-4 h-4 text-signal-cyan" />
                <span>VIEW / DOWNLOAD VERIFIED CV</span>
              </button>
              <a
                href="/Nurul_Nazleen_Suhairi_CV.pdf"
                download="Nurul_Nazleen_Suhairi_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-obsidian-800 border border-white/15 text-steel-200 text-xs font-mono tracking-wider hover:bg-obsidian-700 transition-all"
              >
                <Download className="w-4 h-4 text-signal-amber" />
                <span>DIRECT PDF DOWNLOAD</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Statutory Licenses & Academic Degrees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Academic Foundations */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <GraduationCap className="w-5 h-5 text-signal-cyan" />
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
              Academic Pedigree
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationItems.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-obsidian-900/90 border border-white/10 hover:border-signal-cyan/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-signal-cyan font-bold tracking-wider uppercase">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-steel-400 bg-obsidian-800 px-2.5 py-0.5 rounded-full border border-white/5">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                  <div className="text-sm text-steel-300 mb-3">{item.institution}</div>
                  <p className="text-xs text-steel-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Certifications & Licenses */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <FileCheck className="w-5 h-5 text-signal-amber" />
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
              Statutory Licenses & Professional Accreditations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {statutoryItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-obsidian-900/90 border border-white/10 hover:border-signal-amber/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] text-signal-amber font-semibold uppercase">
                      {item.institution}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-steel-400">
                  <span className="text-steel-300">{item.badge}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Affiliations */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <ShieldCheck className="w-5 h-5 text-signal-cyan" />
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
              Institutional Affiliations & Committees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {affiliationItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-obsidian-900/90 border border-white/10 hover:border-signal-cyan/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] text-signal-cyan font-semibold uppercase">
                      {item.institution}
                    </span>
                    {item.year && (
                      <span className="font-mono text-xs text-signal-amber">{item.year}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-steel-400">
                  <span className="text-steel-300">{item.badge}</span>
                  <span className="text-signal-cyan font-semibold">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship & Knowledge Transfer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>CAPABILITY DEVELOPMENT & ENGINEERING MENTORSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Institutional Knowledge Transfer & Human Capital Development
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Engineering excellence is only as resilient as the people who sustain it. Over 19+ years, Nurul has structured institutional mentoring programs, training over 120+ early-career chemical, mechanical, and safety engineers across Malaysia and Brunei.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">HAZOP Leadership Masterclasses</div>
                  <div className="text-xs text-steel-400">Structured internal workshops guiding junior process engineers toward certified hazard facilitation competency.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Asset Integrity Technical Authority Path</div>
                  <div className="text-xs text-steel-400">Formal progression framework developed for BFI engineers aspiring to become certified statutory inspectors and Technical Authorities.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/engineering_mentorship.jpg"
                alt="Engineering leadership mentoring session in conference room"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                  Engineering Knowledge Transfer
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Developing next-generation technical authorities through hands-on case study analysis and safety culture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross Navigation Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Direct Executive Consultation & Advisory</h3>
            <p className="text-xs text-steel-400 mt-1">Connect directly with Nurul for board advisory, TA review, or conference keynotes.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigatePage('contact')}
              className="px-5 py-2.5 rounded-xl bg-steel-100 text-obsidian-950 text-xs font-mono font-bold tracking-wider hover:bg-white transition-colors"
            >
              CONTACT EXECUTIVE →
            </button>
            <button
              onClick={onNavigateHome}
              className="px-5 py-2.5 rounded-xl bg-obsidian-800 border border-white/15 text-steel-200 text-xs font-mono tracking-wider hover:bg-obsidian-700 transition-colors"
            >
              RETURN TO OVERVIEW
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
