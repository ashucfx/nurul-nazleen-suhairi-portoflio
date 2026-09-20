import React, { useEffect } from 'react';
import { ShieldCheck, Activity, CheckCircle2, ArrowLeft, Wrench, Layers } from 'lucide-react';

interface AssetIntegrityPageProps {
  onNavigateHome: () => void;
  onOpenCVModal: () => void;
  onNavigatePage: (page: string) => void;
}

export const AssetIntegrityPage: React.FC<AssetIntegrityPageProps> = ({
  onNavigateHome,
  onOpenCVModal,
  onNavigatePage
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen text-steel-200">
      
      {/* Top Breadcrumb Header */}
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
              src="/urea_towers.jpg"
              alt="High-Elevation Urea Prilling Towers and Ammonia Infrastructure"
              className="w-full h-full object-cover object-center opacity-35 filter brightness-70 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-cyan/20 border border-signal-cyan/40 text-signal-cyanLight font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SPECIALIZED ENGINEERING DOSSIER</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-4">
              Asset Integrity & Reliability Engineering
            </h1>
            
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed mb-6 font-sans">
              Comprehensive governance across static equipment, pressurized piping systems, risk-based inspection (API 580/581), joint integrity assurance, and asset performance management (APM) driving <strong>+12% OEE improvements</strong> across world-scale petrochemical facilities.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div>
                <div className="text-steel-400 uppercase text-[10px]">OEE Improvement</div>
                <div className="text-xl font-bold text-signal-amber">+12.0%</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Piping & Static Scope</div>
                <div className="text-xl font-bold text-signal-cyan">100% RBI Mapped</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Flange Joint Integrity</div>
                <div className="text-xl font-bold text-emerald-400">Zero Syngas Leaks</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Statutory Overhaul</div>
                <div className="text-xl font-bold text-white">Turnaround (TA) Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Core Technical Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Asset Performance Management (APM) & +12% OEE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-amber uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>PILLAR 01 • ASSET PERFORMANCE MANAGEMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise APM Implementation & Overall Equipment Effectiveness
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              At Brunei Fertilizer Industries (BFI), Nurul spearheaded the integration of a comprehensive Asset Performance Management (APM) strategy, converting legacy reactive maintenance paradigms into predictive, data-driven reliability workflows.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Defect Elimination Program</div>
                  <div className="text-xs text-steel-400">Systematic root cause analysis (RCA) on recurring unreliability events in high-pressure syngas compressors and urea granulation units.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Predictive Health Indexing</div>
                  <div className="text-xs text-steel-400">Deployed dynamic condition monitoring on critical static and rotating assets, reducing unplanned shutdowns and boosting plant OEE by +12%.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/engineers_onsite.jpg"
                alt="Field chemical engineers conducting on-site inspection in safety PPE"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-signal-cyan uppercase tracking-wider font-semibold">
                  Field Engineering Verification
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Cross-functional inspection team validating critical instrumentation and wall-thickness telemetry on site.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Joint Integrity & Flange Management System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/flange_inspection.jpg"
                alt="Precision joint integrity and flange torque inspection"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-signal-amber uppercase tracking-wider font-semibold">
                  Zero Loss of Containment Protocol
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Controlled bolt tensioning, gasket verification, and acoustic emission testing on toxic gas lines.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-cyan uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>PILLAR 02 • JOINT INTEGRITY & FLANGE MANAGEMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Flange Management System (FMS) for Toxic & Flammable Envelopes
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              In high-pressure ammonia and synthesis gas operations, flange integrity is the difference between safe continuous production and catastrophic Loss of Primary Containment (LOPC). Nurul established the institutional Flange Management System (FMS) ensuring complete accountability for every flanged joint.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Hydraulic Torque & Tension Registry</div>
                  <div className="text-xs text-steel-400">Strict serialization and digital sign-off of all critical joint make-ups using calibrated multi-stage tensioning tools.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Post-Startup Thermography Verification</div>
                  <div className="text-xs text-steel-400">Infrared optical gas imaging (OGI) at full operating pressure to guarantee zero micro-leakage during thermal transient cycles.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Risk-Based Inspection (RBI API 580/581) & Turnarounds */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>PILLAR 03 • RISK-BASED INSPECTION & TURNAROUND (TA)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Statutory RBI Scoping & Plant Turnaround Governance
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Transitioning from traditional time-based internal inspections to risk-informed statutory inspection plans approved by national regulatory authorities (DOSH / BFI standards).
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Damage Mechanism Identification</div>
                  <div className="text-xs text-steel-400">Comprehensive mapping of high-temperature hydrogen attack (HTHA), stress corrosion cracking (SCC), and ammonium carbamate corrosion.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Turnaround (TA) Window Optimization</div>
                  <div className="text-xs text-steel-400">Precision statutory inspection planning that curtailed shutdown duration while upholding full compliance with statutory boiler and pressure vessel regulations.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/pipeline_valve_station.jpg"
                alt="Pipeline valve station and manifold pressure testing"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                  Manifold Pressure Testing
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Hydrostatic and pneumatic proof-testing of high-integrity valves prior to unit commissioning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross Navigation Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Next Technical Dossier: Process Safety Management</h3>
            <p className="text-xs text-steel-400 mt-1">Explore Nurul's zero major fires record and DOSH Major Hazards competency.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigatePage('process-safety')}
              className="px-5 py-2.5 rounded-xl bg-signal-cyan text-obsidian-950 text-xs font-mono font-bold tracking-wider hover:bg-signal-cyanLight transition-colors"
            >
              VIEW PROCESS SAFETY →
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
