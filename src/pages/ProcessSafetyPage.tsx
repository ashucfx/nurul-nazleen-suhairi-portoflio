import React, { useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Award, FileCheck, CheckCircle2, Users } from 'lucide-react';

interface ProcessSafetyPageProps {
  onNavigateHome: () => void;
  onOpenCVModal: () => void;
  onNavigatePage: (page: string) => void;
}

export const ProcessSafetyPage: React.FC<ProcessSafetyPageProps> = ({
  onNavigateHome,
  onOpenCVModal,
  onNavigatePage
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              src="/refinery_dawn.jpg"
              alt="High-Temperature Reaction Furnaces and Catalytic Columns at Dawn"
              className="w-full h-full object-cover object-center opacity-35 filter brightness-70 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-amber/20 border border-signal-amber/40 text-signal-goldLight font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>STATUTORY SAFETY GOVERNANCE DOSSIER</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-4">
              Process Safety & Major Hazards Governance
            </h1>
            
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed mb-6 font-sans">
              A pristine 19+ year operating record with <strong>zero major fires or catastrophic losses of containment</strong> across PETRONAS Gas, PETRONAS Chemicals, and Brunei Fertilizer Industries. DOSH Major Hazards Competent Person (CIMAH 1996) and Certified HAZOP Leader (Level 1).
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Tier 1 Process Events</div>
                <div className="text-xl font-bold text-emerald-400">0 Major Fires</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Statutory License</div>
                <div className="text-xl font-bold text-signal-cyan">DOSH Major Hazards</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">HAZOP Certification</div>
                <div className="text-xl font-bold text-signal-amber">PETRONAS Level 1</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Conference Leadership</div>
                <div className="text-xl font-bold text-white">LPA 2025 Co-Chair</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Technical Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Pillar 1: DOSH Major Hazards Competency & CIMAH Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-cyan uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>PILLAR 01 • STATUTORY AUTHORIZATION & REGULATORY COMPLIANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              DOSH Major Hazards Competency & CIMAH Safety Reports
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Licensed under the Control of Industrial Major Accident Hazards (CIMAH 1996) Regulations by the Department of Occupational Safety and Health (DOSH) Malaysia. Nurul has authored, validated, and defended statutory safety cases for 3+ major national energy installations.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Quantitative Risk Assessment (QRA) Modeling</div>
                  <div className="text-xs text-steel-400">Led complex consequence analysis, toxic vapor dispersion simulations, and thermal radiation contour mapping for ammonia storage.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Emergency Response Planning (ERP) & Mutual Aid</div>
                  <div className="text-xs text-steel-400">Integrated on-site emergency mitigation protocols with regional civil defense, maritime port authorities, and industrial mutual-aid groups.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/safety_walkthrough.jpg"
                alt="Process safety engineers conducting statutory hazard walkthrough"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-signal-cyan uppercase tracking-wider font-semibold">
                  Field Process Safety Audit
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Verification of physical barriers, deluge systems, and safety critical isolation valves during regulatory audit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Certified HAZOP Leadership & Layer of Protection Analysis (LOPA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/chemical_analysis.jpg"
                alt="Laboratory chemical testing and process verification"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-signal-amber uppercase tracking-wider font-semibold">
                  Analytical Process Verification
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Chemical composition testing to maintain operating boundaries within strict flammability and corrosion limits.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-amber uppercase tracking-wider">
              <FileCheck className="w-4 h-4" />
              <span>PILLAR 02 • HAZARD STUDY LEADERSHIP & RISK RANKING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Certified HAZOP Leadership (Level 1) & SIL Target Allocation
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              As a PETRONAS Certified HAZOP Leader (Level 1), Nurul has chaired 40+ multidisciplinary Hazard and Operability studies and LOPA sessions for brownfield debottlenecking, greenfield commissioning, and turnaround modifications.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Independent Protection Layer (IPL) Validation</div>
                  <div className="text-xs text-steel-400">Strict adherence to IEC 61511 / IEC 61508 criteria to ensure genuine independence, reliability, and auditability of safety instrumented functions.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Safety Instrumented System (SIS) Proof-Testing</div>
                  <div className="text-xs text-steel-400">Established rigorous testing intervals for emergency shutdown (ESD) valves, high-integrity pressure protection systems (HIPPS), and blowdown loops.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 3: Loss Prevention Asia (LPA 2025) & Regional Discourse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>PILLAR 03 • REGIONAL THOUGHT LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Loss Prevention Asia (LPA 2025) Conference Co-Chairmanship
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Representing Brunei Fertilizer Industries and the broader Southeast Asian chemical process industry as Co-Chair for Loss Prevention Asia 2025. Leading cross-industry dialogue on dynamic barrier health, human factors in operations, and major accident prevention.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Peer-Reviewed Technical Proceedings</div>
                  <div className="text-xs text-steel-400">Authoring technical insights on transitioning from lagging incident metrics to leading barrier impairment indicators.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Regional Industry Harmonization</div>
                  <div className="text-xs text-steel-400">Fostering collaboration between Malaysian, Bruneian, and Indonesian technical authorities on common process safety benchmarks.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/distillation_columns.jpg"
                alt="Distillation towers and absorption columns in continuous operation"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                  Fractionation Column Array
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Separation and gas sweetening infrastructure engineered with dual overpressure relief headers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross Navigation Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Next Technical Dossier: Digital Risk & APM Dashboards</h3>
            <p className="text-xs text-steel-400 mt-1">Explore real-time barrier health telemetry and SCADA control rooms.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigatePage('digital-risk')}
              className="px-5 py-2.5 rounded-xl bg-signal-amber text-obsidian-950 text-xs font-mono font-bold tracking-wider hover:bg-signal-goldLight transition-colors"
            >
              VIEW DIGITAL RISK & APM →
            </button>
            <button
              onClick={onOpenCVModal}
              className="px-5 py-2.5 rounded-xl bg-obsidian-800 border border-white/15 text-steel-200 text-xs font-mono tracking-wider hover:bg-obsidian-700 transition-colors"
            >
              DOWNLOAD OFFICIAL CV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
