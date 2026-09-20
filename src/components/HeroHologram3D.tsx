import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, RotateCw, Award, Zap } from 'lucide-react';

interface HeroHologram3DProps {
  portraitUrl?: string;
  onOpenCVModal: () => void;
}

export const HeroHologram3D: React.FC<HeroHologram3DProps> = ({
  portraitUrl = '/profile.png',
  onOpenCVModal
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoSpin, setIsAutoSpin] = useState(false);
  const [spinAngle, setSpinAngle] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const currentRotationY = useRef(0);

  // Background Ambient Particles Canvas (Floating Energy / Telemetry Sparkles)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#06b6d4', '#f59e0b', '#38bdf8', '#10b981'];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.6 + 0.2),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto 360 Spin Loop
  useEffect(() => {
    if (!isAutoSpin) return;
    let animId: number;
    const spin = () => {
      setSpinAngle((prev) => (prev + 0.8) % 360);
      animId = requestAnimationFrame(spin);
    };
    animId = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(animId);
  }, [isAutoSpin]);

  // Mouse Move Tilt & Lighting
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAutoSpin || isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -16;
    const rY = ((x - centerX) / centerX) * 16;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.45,
    });
  };

  const handleMouseLeave = () => {
    if (isAutoSpin || isDragging) return;
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  // Drag 360 Interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoSpin(false);
    dragStartX.current = e.clientX;
    currentRotationY.current = rotateY;
  };

  const handleMouseMoveGlobal = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    setRotateY(currentRotationY.current + deltaX * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const effectiveRotationY = isAutoSpin ? spinAngle : (isFlipped ? rotateY + 180 : rotateY);

  return (
    <div 
      className="relative w-full max-w-lg aspect-[4/5] sm:h-[560px] flex items-center justify-center select-none"
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMoveGlobal}
    >
      {/* Background Ambient Particles Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 3D Rotating Industrial Background Rings (Layer BEHIND Nurul) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        {/* Large Outer Glowing Gear Ring */}
        <div 
          className="w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full border border-signal-cyan/20 border-dashed animate-spin-slow"
          style={{ transform: `rotate(${spinAngle * 0.3}deg)` }}
        />
        {/* Secondary Amber Ring */}
        <div 
          className="w-80 h-80 sm:w-[400px] sm:h-[400px] rounded-full border border-signal-amber/20 border-dotted animate-pulse-slow"
          style={{ transform: `rotate(${-spinAngle * 0.2}deg)` }}
        />
        {/* Glowing Center Radial Halo */}
        <div className="absolute w-72 h-72 rounded-full bg-signal-cyan/15 blur-3xl" />
      </div>

      {/* 3D Perspective Stage Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        style={{
          perspective: '1400px',
        }}
        className="relative z-10 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Main 3D Card with preserve-3d */}
        <div
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${effectiveRotationY}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging || isAutoSpin ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-[88%] h-[92%] rounded-3xl transition-shadow duration-300 shadow-2xl shadow-black/80"
        >
          {/* ======================================================== */}
          {/* FRONT FACE: NURUL'S EXECUTIVE PORTRAIT WITH 3D DEPTH     */}
          {/* ======================================================== */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'translateZ(1px)',
            }}
            className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border-2 border-white/20 shadow-2xl bg-obsidian-950 flex flex-col justify-between"
          >
            {/* Full Portrait Image */}
            <div className="relative w-full h-full">
              <img
                src={portraitUrl}
                alt="Nurul Nazleen Suhairi — Senior Engineering Leader"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                draggable={false}
              />
              
              {/* Dynamic Glare Overlay reacting to mouse tilt */}
              <div
                className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-200 mix-blend-overlay"
                style={{
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
                }}
              />

              {/* Natural dark vignette preserving her facial clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/25 to-transparent pointer-events-none" />
            </div>

            {/* Corner Engineering Framing Reticles */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-signal-cyan pointer-events-none z-20" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-signal-cyan pointer-events-none z-20" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-signal-amber pointer-events-none z-20" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-signal-amber pointer-events-none z-20" />

            {/* Top HUD Telemetry Ribbon */}
            <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1 rounded-full bg-obsidian-950/90 border border-emerald-500/40 backdrop-blur-md flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[10px] tracking-wider text-emerald-300 font-bold uppercase">
                  ACTIVE AUTHORITY
                </span>
              </div>

              <div className="px-3 py-1 rounded-full bg-obsidian-950/90 border border-signal-amber/40 backdrop-blur-md text-[10px] font-mono text-signal-amber font-semibold shadow-lg">
                AMIChemE • BEM
              </div>
            </div>

            {/* Bottom Floating Executive Identity Block */}
            <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-obsidian-950/90 backdrop-blur-xl border border-white/15 shadow-2xl space-y-1.5 pointer-events-none">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                    Nurul Nazleen Suhairi
                  </h3>
                  <div className="text-xs font-mono text-signal-amber font-semibold">
                    Senior Manager, Asset Integrity
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-signal-cyan font-bold bg-obsidian-900 px-2.5 py-1 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-signal-cyan" />
                  <span>19+ YRS</span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-steel-400 flex items-center gap-2 pt-1 border-t border-white/10">
                <span className="text-steel-200">Brunei Fertilizer Industries</span>
                <span>•</span>
                <span>Ex-PETRONAS</span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BACK FACE: VERIFIED EXECUTIVE CREDENTIAL MONOLITH        */}
          {/* ======================================================== */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(1px)',
            }}
            className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border-2 border-signal-cyan/40 shadow-2xl bg-obsidian-950 p-6 sm:p-7 flex flex-col justify-between"
          >
            {/* Top Back Header */}
            <div className="space-y-1 border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-signal-cyan tracking-widest uppercase font-bold">
                  VERIFIED CREDENTIAL DOSSIER
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  STATUTORY SIGN-OFF
                </span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight font-mono">
                Nurul Nazleen Suhairi
              </h3>
              <div className="text-xs font-mono text-signal-amber">
                Brunei Fertilizer Industries Sdn Bhd
              </div>
            </div>

            {/* Core Verified Highlights */}
            <div className="space-y-3 py-2">
              <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/5 space-y-0.5">
                <div className="text-[10px] font-mono text-steel-400 uppercase">Operational Track Record</div>
                <div className="text-xs font-semibold text-white">19+ Years across Energy, Petrochemical & Fertilizer</div>
              </div>

              <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/5 space-y-0.5">
                <div className="text-[10px] font-mono text-signal-amber uppercase font-semibold">Measurable Impact</div>
                <div className="text-xs font-semibold text-signal-amber">+12% OEE Gain within 6 Months • Zero Major Fires</div>
              </div>

              <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/5 space-y-0.5">
                <div className="text-[10px] font-mono text-steel-400 uppercase">Statutory Licensing</div>
                <div className="text-xs font-semibold text-white">Major Hazards Competent Person (DOSH Malaysia)</div>
              </div>

              <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-white/5 space-y-0.5">
                <div className="text-[10px] font-mono text-steel-400 uppercase">Academic Credentials</div>
                <div className="text-xs font-semibold text-steel-200">M.Eng Process Safety (UPM) • B.Eng Chemical (UQ)</div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCVModal();
                }}
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold text-obsidian-950 bg-steel-100 hover:bg-white transition-all flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-signal-cyan" />
                <span>DOWNLOAD FULL CV</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="text-xs font-mono text-signal-cyan hover:underline"
              >
                FLIP TO PHOTO →
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FOREGROUND 3D LAYER (FLOATS PHYSICALLY IN FRONT: Z+40px) */}
          {/* ======================================================== */}
          <div
            style={{
              transform: 'translateZ(45px)',
            }}
            className="absolute -top-3 -right-3 z-30 pointer-events-auto"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(!isFlipped);
              }}
              className="px-3 py-1.5 rounded-xl bg-obsidian-900/95 hover:bg-obsidian-800 border-2 border-signal-cyan/50 text-xs font-mono text-steel-100 hover:text-white shadow-2xl backdrop-blur-md flex items-center gap-1.5 active:scale-95 transition-all"
              title="Click to flip 3D card"
            >
              <RotateCw className="w-3.5 h-3.5 text-signal-cyan" />
              <span>{isFlipped ? 'FRONT' : '3D FLIP'}</span>
            </button>
          </div>

          <div
            style={{
              transform: 'translateZ(45px)',
            }}
            className="absolute -bottom-3 -left-3 z-30 pointer-events-auto"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoSpin(!isAutoSpin);
              }}
              className={`px-3 py-1.5 rounded-xl border-2 text-xs font-mono shadow-2xl backdrop-blur-md flex items-center gap-1.5 active:scale-95 transition-all ${
                isAutoSpin
                  ? 'bg-signal-cyan text-obsidian-950 border-signal-cyan font-bold'
                  : 'bg-obsidian-900/95 border-white/20 text-steel-200 hover:text-white'
              }`}
              title="Toggle 360-degree automatic spin"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{isAutoSpin ? 'AUTO SPINNING' : '360° ORBIT'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Interactive Controls Bar Below */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 whitespace-nowrap">
        <span className="text-[11px] font-mono text-steel-400 bg-obsidian-950/90 px-3 py-1 rounded-full border border-white/10 shadow-lg">
          ↔ DRAG TO ROTATE IN 3D SPACE
        </span>
      </div>
    </div>
  );
};
