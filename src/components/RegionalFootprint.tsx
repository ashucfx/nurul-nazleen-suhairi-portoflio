import React, { useState } from 'react';
import { REGIONAL_NODES } from '../data/portfolioData';
import { MapPin, Navigation, Factory } from 'lucide-react';

export const RegionalFootprint: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(REGIONAL_NODES[0].id);

  const activeNode = REGIONAL_NODES.find(n => n.id === selectedNodeId) || REGIONAL_NODES[0];

  const getNodeSectorImage = (id: string) => {
    switch (id) {
      case 'brunei-bfi':
        return {
          src: '/coastal_jetty.jpg',
          caption: 'Sungai Liang Industrial Park (SPARK) — Mega-Scale Fertilizer Port & Infrastructure'
        };
      case 'malaysia-kl':
        return {
          src: '/control_room.jpg',
          caption: 'PETRONAS Enterprise Governance & Group Process Safety Culture'
        };
      case 'malaysia-bintulu':
        return {
          src: '/synthesis_loop.jpg',
          caption: 'ASEAN Bintulu Fertilizer — Ammonia Synthesis Loops & Environmental Management'
        };
      case 'malaysia-kerteh':
        return {
          src: '/pipe_rack.jpg',
          caption: 'PETRONAS Gas Berhad — Joint Integrity Turnaround QA/QC Flange Management'
        };
      default:
        return {
          src: '/fertilizer_complex.jpg',
          caption: 'Regional Industrial Infrastructure'
        };
    }
  };

  const activeNodeImage = getNodeSectorImage(activeNode.id);

  return (
    <section id="regional" className="relative py-24 bg-obsidian-900/60 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>SECTION 08 • REGIONAL FOOTPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Malaysia, Brunei & Southeast Asia
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            Established engineering authority spanning major petrochemical centers, gas processing terminals, and world-scale fertilizer assets across the region.
          </p>
        </div>

        {/* Regional Grid: Interactive Map Visual & Node Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Stylized Industrial Topology Map */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-signal-cyan/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar with Map Meta */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] font-mono text-steel-400">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-signal-cyan" />
                SOUTHEAST ASIA INDUSTRIAL CORRIDOR
              </span>
              <span>COORDINATES: LAT 4.5° N • LON 114.5° E</span>
            </div>

            {/* Interactive Schematic Radar Map Area */}
            <div className="relative w-full h-64 sm:h-80 my-4 bg-obsidian-950/70 rounded-xl border border-white/5 p-4 flex items-center justify-center">
              
              {/* Radar Rings */}
              <div className="absolute w-44 h-44 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute w-full h-[1px] bg-white/5 pointer-events-none" />
              <div className="absolute h-full w-[1px] bg-white/5 pointer-events-none" />

              {/* Schematic Map Geometry for SE Asia / Borneo / Peninsular Malaysia */}
              <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 24 55 Q 28 65 30 75 Q 32 80 35 78 Q 33 65 30 55 Z" fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="1 1" />
                <path d="M 60 45 Q 75 35 85 45 Q 88 65 75 75 Q 60 70 58 55 Z" fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="1 1" />
              </svg>

              {/* Node Hotspots */}
              {REGIONAL_NODES.map((node) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group focus:outline-none z-10"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isSelected
                          ? 'bg-signal-cyan border-white scale-125 shadow-[0_0_15px_rgba(6,182,212,0.9)]'
                          : 'bg-obsidian-900 border-white/30 hover:border-signal-amber'
                      }`}
                    >
                      <MapPin
                        className={`w-3 h-3 ${
                          isSelected ? 'text-obsidian-950 font-bold' : 'text-steel-300 group-hover:text-signal-amber'
                        }`}
                      />
                    </div>
                    <span
                      className={`mt-1 font-mono text-[9px] px-1.5 py-0.5 rounded tracking-wider uppercase transition-colors whitespace-nowrap ${
                        isSelected
                          ? 'bg-obsidian-950 text-signal-cyan border border-signal-cyan/40 font-bold'
                          : 'bg-obsidian-950/80 text-steel-400 border border-white/5 group-hover:text-white'
                      }`}
                    >
                      {node.name.split('(')[0].trim()}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-steel-400">
              <span className="flex items-center gap-1.5 text-steel-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE INDUSTRIAL OPERATIONS
              </span>
              <span>CLICK ANY NODE TO INSPECT MANDATE</span>
            </div>

          </div>

          {/* Right Column: Node Details with Authentic Sector Photo */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Node Detail Card */}
            <div className="glass-panel p-6 rounded-2xl border border-signal-cyan/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-signal-cyan uppercase font-bold">
                  {activeNode.type}
                </span>
                {activeNode.active && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                    CURRENT MANDATE
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  {activeNode.name}
                </h3>
                <div className="text-xs font-mono text-steel-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3 h-3 text-signal-amber" />
                  <span>{activeNode.location}</span>
                </div>
              </div>

              {/* Node Sector Photo */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden border border-white/10 shadow-md group">
                <img
                  src={activeNodeImage.src}
                  alt={activeNode.name}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-steel-300 bg-obsidian-950/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm truncate">
                  {activeNodeImage.caption}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-steel-300 leading-relaxed font-sans">
                {activeNode.description}
              </p>
            </div>

            {/* Malaysia & Regional Market Positioning Statement */}
            <div className="p-5 rounded-2xl bg-obsidian-950/90 border border-white/10 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-steel-300 uppercase flex items-center gap-2">
                <Factory className="w-4 h-4 text-signal-cyan" />
                Regional Industry Relevance & Leadership
              </h4>
              <p className="text-xs text-steel-400 leading-relaxed font-sans">
                Recognized throughout Malaysia, Brunei, and the ASEAN energy ecosystem for commanding high-hazard process safety and structural asset integrity. Trusted advisor on statutory DOSH regulations, Major Hazard compliance, Technical Authority sign-offs, and double-digit OEE acceleration.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Asset Integrity Malaysia",
                  "Process Safety Malaysia",
                  "Technical Authority",
                  "Operational Excellence",
                  "Major Hazards (DOSH)",
                  "Energy Leadership"
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-800 text-steel-300 border border-white/5"
                  >
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
