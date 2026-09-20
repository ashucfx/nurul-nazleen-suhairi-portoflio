import React, { useState } from 'react';
import { CAREER_ROLES } from '../data/portfolioData';
import { MapPin, ChevronDown, ChevronUp, CheckCircle, Building2, Factory } from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  // Track expanded cards (first two expanded by default)
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'bfi-sr-manager': true,
    'bfi-tech-manager': true,
  });

  const toggleRole = (id: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getRoleSectorImage = (id: string) => {
    if (id.startsWith('bfi')) {
      return {
        src: '/fertilizer_complex.jpg',
        label: 'Mega-Scale Ammonia & Urea Fertilizer Complex (SPARK, Brunei)'
      };
    } else if (id.startsWith('petronas')) {
      return {
        src: '/petrochemical_facility.jpg',
        label: 'Global Energy & Petrochemical Operations (Malaysia)'
      };
    } else if (id.startsWith('abf')) {
      return {
        src: '/fertilizer_complex.jpg',
        label: 'Ammonia Synthesis & Chemical Operations (Bintulu, Sarawak)'
      };
    } else {
      return {
        src: '/control_room.jpg',
        label: 'Gas Processing & Commissioning Turnaround (Kerteh, Terengganu)'
      };
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="telemetry-tag bg-obsidian-800 text-steel-400 border border-white/10 mb-2">
              <span>SECTION 03 • TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Vertical Career Journey
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            19+ years of progressive leadership across oil & gas, petrochemical, and world-scale fertilizer operations.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-signal-cyan before:via-white/20 before:to-steel-700">
          
          {CAREER_ROLES.map((role) => {
            const isExpanded = !!expandedRoles[role.id];
            const isCurrent = role.endYear === 'Present';
            const sectorMedia = getRoleSectorImage(role.id);

            return (
              <div key={role.id} className="relative group">
                
                {/* Timeline Node Point */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isCurrent
                      ? 'bg-obsidian-950 border-signal-cyan shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                      : 'bg-obsidian-900 border-white/20 group-hover:border-signal-amber'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? 'bg-signal-cyan animate-pulse' : 'bg-steel-400 group-hover:bg-signal-amber'
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div
                  className={`glass-panel rounded-xl border transition-all duration-200 overflow-hidden ${
                    isCurrent
                      ? 'border-signal-cyan/40 bg-obsidian-900/90'
                      : 'border-white/10 hover:border-white/20 bg-obsidian-900/60'
                  }`}
                >
                  {/* Card Header (Always Visible, Clickable) */}
                  <div
                    onClick={() => toggleRole(role.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-white/[0.02]"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-obsidian-800 border border-white/10 text-signal-amber">
                          {role.period}
                        </span>
                        {isCurrent && (
                          <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-600/30 text-emerald-400 font-bold">
                            CURRENT MANDATE
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {role.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-steel-400">
                        <span className="flex items-center gap-1.5 text-steel-200 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-signal-cyan" />
                          {role.company}
                        </span>
                        <span className="flex items-center gap-1 text-steel-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                      <span className="text-xs font-mono text-steel-400">
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      <div className="p-1.5 rounded-lg bg-obsidian-800 border border-white/10 text-steel-300">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Drawer with Sector Photography & Detailed Impact Points */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-5 text-left">
                      
                      {/* Sector Photography Strip for this role */}
                      <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-white/10">
                        <img
                          src={sectorMedia.src}
                          alt={role.company}
                          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-steel-200 bg-obsidian-950/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                          <span className="flex items-center gap-1.5 truncate">
                            <Factory className="w-3 h-3 text-signal-amber" />
                            {sectorMedia.label}
                          </span>
                          <span className="text-signal-cyan shrink-0 font-semibold">VERIFIED</span>
                        </div>
                      </div>

                      {/* Mandate */}
                      <div className="p-3.5 rounded-lg bg-obsidian-950/80 border border-white/5 text-xs text-steel-300 leading-relaxed font-sans">
                        <span className="font-mono text-steel-400 uppercase font-semibold block mb-1">
                          Executive Mandate:
                        </span>
                        {role.mandate}
                      </div>

                      {/* Verified Impact Points */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono tracking-wider text-steel-400 uppercase font-semibold">
                          Documented Contributions & Milestones:
                        </div>
                        <ul className="space-y-2">
                          {role.impactPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-steel-300 font-sans leading-relaxed">
                              <CheckCircle className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies / Systems pill tags */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        {role.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-800 text-steel-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
