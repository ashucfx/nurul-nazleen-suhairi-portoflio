import React from 'react';
import { Shield, Layers, Award, Target, CheckCircle2, Factory, Activity } from 'lucide-react';

export const ExecutiveProfile: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-signal-cyan" />,
      title: "Asset Performance & OEE Expansion",
      description: "Proven capability translating complex maintenance workflows and statutory inspection regimes into unified Asset Performance Management (APM) systems—directly delivering a verified 12% improvement in Overall Equipment Effectiveness (OEE) within six months at Brunei Fertilizer Industries."
    },
    {
      icon: <Shield className="w-5 h-5 text-signal-amber" />,
      title: "High-Consequence Loss Prevention",
      description: "Over 16 years leading process safety governance across PETRONAS operating units. Architected barrier prevention frameworks that secured zero major fire incidents over a multi-year tenure and steered the enterprise Process Safety Incident Database (PSID) to institutionalize group-wide learning."
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Technical Authority & Engineering Assurance",
      description: "Definitive Technical Authority for critical engineering modifications, Management of Change (MOC) evaluations, operational risk dispensations, and ALARP demonstrations. Accredited Major Hazards Competent Person (DOSH Malaysia) and PETRONAS Staff Engineer."
    },
    {
      icon: <Award className="w-5 h-5 text-signal-cyanLight" />,
      title: "Strategic Talent & Industry Influence",
      description: "Co-Chairman for the Loss Prevention Asia Conference 2025. Established Organisational HSE Culture Maturity Measurement benchmarked against global energy leaders, while directly mentoring at least three engineers to achieve statutory CIMAH Competent Person status with DOSH Malaysia."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-3">
            <span>SECTION 01 • STRATEGIC PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Engineering Leadership at Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-steel-400 leading-relaxed font-sans">
            In capital-intensive petrochemical, fertilizer, and energy complexes, world-class asset integrity is never merely a compliance checkpoint—it is the foundational prerequisite for operational uptime, capital preservation, and enterprise resilience.
          </p>
        </div>

        {/* Real Sector Panorama Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl group">
          <img
            src="/petrochemical_facility.jpg"
            alt="Petrochemical and Energy Processing Infrastructure"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/70 via-transparent to-obsidian-950/70" />
          
          {/* Telemetry Overlays on Image */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-obsidian-950/80 border border-white/15 text-[10px] font-mono tracking-widest text-steel-200 uppercase backdrop-blur-md flex items-center gap-1.5">
              <Factory className="w-3.5 h-3.5 text-signal-cyan" />
              PETROCHEMICAL & GAS PROCESSING CORRIDOR
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="text-white font-semibold">
              Operational Scope: High-Hazard Synthesis Loops • Reforming • Natural Gas Fractionation
            </div>
            <div className="flex items-center gap-2 text-signal-amber font-semibold bg-obsidian-950/80 px-3 py-1 rounded border border-white/10">
              <Activity className="w-3.5 h-3.5 text-signal-amber" />
              <span>BARRIER HEALTH: ALARP</span>
            </div>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl space-y-5 border border-white/10">
              <h3 className="text-lg font-bold text-white uppercase font-mono tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-cyan" />
                The Sovereign Executive Mandate
              </h3>
              
              <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-sans">
                With more than 19 years of dedicated practice across Southeast Asia’s premier industrial complexes, <strong className="text-white">Nurul Nazleen Suhairi</strong> bridges the gap between deep quantitative physical chemistry and C-suite risk governance. Currently serving as <span className="text-signal-amber font-medium">Senior Manager, Asset Integrity at Brunei Fertilizer Industries (BFI)</span> and having built an extensive career spanning PETRONAS, ASEAN Bintulu Fertilizer, and PETRONAS Gas Berhad, she operates as an authoritative advisor to executive leadership and boards on high-consequence risk, plant availability, and asset lifecycle monetization.
              </p>

              <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-sans">
                Her leadership model systematically overcomes operational silos: synchronizing mechanical integrity, statutory DOSH regulations, Management of Change, and frontline digital safety telemetry into unified operational excellence frameworks.
              </p>

              {/* Fast Facts Checklist */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-xs font-mono text-steel-300">
                  <CheckCircle2 className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
                  <span>Master of Process Safety & Loss Prevention (UPM)</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-steel-300">
                  <CheckCircle2 className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
                  <span>B.Eng Chemical Engineering (Queensland, Australia)</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-steel-300">
                  <CheckCircle2 className="w-4 h-4 text-signal-amber shrink-0 mt-0.5" />
                  <span>DOSH Major Hazards Competent Person</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-steel-300">
                  <CheckCircle2 className="w-4 h-4 text-signal-amber shrink-0 mt-0.5" />
                  <span>AMIChemE & Board of Engineers Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-xl border border-white/5 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-obsidian-900 border border-white/10 shrink-0">
                    {pillar.icon}
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-steel-100 uppercase">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-steel-400 leading-relaxed font-sans pl-11">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
