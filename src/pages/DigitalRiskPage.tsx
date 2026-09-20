import React, { useEffect } from 'react';
import { Activity, Cpu, ArrowLeft, Monitor, Server, CheckCircle2 } from 'lucide-react';

interface DigitalRiskPageProps {
  onNavigateHome: () => void;
  onOpenCVModal: () => void;
  onNavigatePage: (page: string) => void;
}

export const DigitalRiskPage: React.FC<DigitalRiskPageProps> = ({
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
              src="/operators_control_room.jpg"
              alt="Central Control Room with Process Engineers and SCADA Monitors"
              className="w-full h-full object-cover object-center opacity-35 filter brightness-70 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-cyan/20 border border-signal-cyan/40 text-signal-cyanLight font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>DIGITAL PROCESS TELEMETRY DOSSIER</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-4">
              Digital Risk, APM & Control Room Telemetry
            </h1>
            
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed mb-6 font-sans">
              Translating thousands of field instrumentation sensor feeds into real-time barrier health visibility. Steering committee leadership on Process Safety Information Digitization (PSID), SCADA alarm rationalization, and C-Suite operational risk governance.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Real-Time Barrier Health</div>
                <div className="text-xl font-bold text-signal-cyan">24/7 Telemetry</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Alarm Rationalization</div>
                <div className="text-xl font-bold text-signal-amber">&lt;1 Alarm / 10 Min</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">MOC Workflow Cycle</div>
                <div className="text-xl font-bold text-emerald-400">100% Digital Audited</div>
              </div>
              <div>
                <div className="text-steel-400 uppercase text-[10px]">Night Run-Time Uptime</div>
                <div className="text-xl font-bold text-white">99.82% OEE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Pillar 1: Dynamic Barrier Health Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-cyan uppercase tracking-wider">
              <Monitor className="w-4 h-4" />
              <span>PILLAR 01 • DYNAMIC BARRIER MANAGEMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Real-Time Barrier Impairment & Bowtie Visualization
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Traditional barrier management relies on periodic audits that only capture historical snapshots. Nurul architected live barrier health dashboards connecting maintenance work orders (SAP PM) directly to operational bowtie diagrams.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Live Safety Critical Element (SCE) Tracking</div>
                  <div className="text-xs text-steel-400">Immediate visual alerts if a relief valve or gas detector is isolated, preventing concurrent barrier impairments across identical threat lines.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Executive Risk Exposure Index</div>
                  <div className="text-xs text-steel-400">Aggregates plant-wide barrier degradation into an executive dashboard, enabling C-suite leaders to make informed operational throttle decisions.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/scada_monitors.jpg"
                alt="SCADA telemetry video wall displaying barrier health"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-signal-cyan uppercase tracking-wider font-semibold">
                  Barrier Telemetry Console
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Dynamic visual matrix correlating safety interlock status with plant operational envelopes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: SCADA & DCS Alarm Rationalization (EEMUA 191 / ISA 18.2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/engineer_console.jpg"
                alt="Process safety engineer workstation console with multi-screen telemetry"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-signal-amber uppercase tracking-wider font-semibold">
                  Human Factors & Alarm Ergonomics
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Operator console engineering designed to eradicate cognitive fatigue during transient plant disturbances.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-amber uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>PILLAR 02 • ALARM ERGONOMICS & HUMAN FACTORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              SCADA Alarm Rationalization to ISA 18.2 / EEMUA 191
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Alarm flooding is a primary contributor to major industrial disasters. Nurul led the alarm rationalization campaign across central control rooms, benchmarking against international EEMUA 191 standards to keep operator alarm rates below 1 alarm per 10 minutes in steady state.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Nuisance Alarm Elimination</div>
                  <div className="text-xs text-steel-400">Re-configured deadbands, on/off delay timers, and dynamic suppression logic for chattering process transmitters.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-signal-amber shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Actionable Operator Guidance</div>
                  <div className="text-xs text-steel-400">Coupled priority alarms with instant digital operating procedures (SOPs), empowering console engineers to execute corrective actions in seconds.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 3: Continuous 24/7 Night Operations & Digital MOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <Server className="w-4 h-4" />
              <span>PILLAR 03 • DIGITAL GOVERNANCE & 24/7 RUN-TIME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Process Safety Information Digitization (PSID) & Digital MOC
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Eliminated paper bottlenecks and outdated engineering documentation by steering the complete digitization of Process Safety Information (PSI), P&IDs, and Management of Change (MOC) authorizations.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Single Source of Engineering Truth</div>
                  <div className="text-xs text-steel-400">Centralized intelligent piping and instrumentation diagrams (iP&IDs) linked to equipment maintenance histories and design datasheets.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Technical Authority Verification Gates</div>
                  <div className="text-xs text-steel-400">Mandatory digital sign-off gates ensuring that no mechanical or process change is commissioned without prior hazard review.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src="/plant_night_operations.jpg"
                alt="Continuous 24/7 petrochemical plant operations under night illumination"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                  24/7 Continuous Operation
                </span>
                <p className="text-xs text-steel-200 mt-0.5">
                  Safe, continuous nighttime running enabled by automated safety interlocks and live telemetry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross Navigation Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Next Section: Career Journey & Statutory Credentials</h3>
            <p className="text-xs text-steel-400 mt-1">Review Nurul's chronological leadership history across Malaysia and Brunei.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigatePage('credentials')}
              className="px-5 py-2.5 rounded-xl bg-signal-cyan text-obsidian-950 text-xs font-mono font-bold tracking-wider hover:bg-signal-cyanLight transition-colors"
            >
              VIEW CREDENTIALS →
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
