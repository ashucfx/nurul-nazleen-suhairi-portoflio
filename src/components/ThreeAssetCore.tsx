import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, ShieldCheck, Layers } from 'lucide-react';

interface ThreeAssetCoreProps {
  className?: string;
  portraitUrl?: string;
}

export const ThreeAssetCore: React.FC<ThreeAssetCoreProps> = ({ 
  className = '',
  portraitUrl = '/profile.png'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true, 
        powerPreference: 'high-performance' 
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Root Group for interactive parallax and 360-degree rotation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Groups separated by depth:
    // A. backgroundIllustrationGroup (BEHIND Nurul: Z = -1.2 to -3.5)
    const backgroundIllustrationGroup = new THREE.Group();
    backgroundIllustrationGroup.position.z = -1.2;
    rootGroup.add(backgroundIllustrationGroup);

    // B. nurulDimensionalGroup (CENTER: Z = 0)
    const nurulDimensionalGroup = new THREE.Group();
    nurulDimensionalGroup.position.z = 0;
    rootGroup.add(nurulDimensionalGroup);

    // C. foregroundIllustrationGroup (IN FRONT OF Nurul: Z = +0.8 to +2.0)
    const foregroundIllustrationGroup = new THREE.Group();
    foregroundIllustrationGroup.position.z = 0.8;
    rootGroup.add(foregroundIllustrationGroup);

    // ----------------------------------------------------
    // LAYER 1: 3D INDUSTRIAL ILLUSTRATION BEHIND NURUL
    // ----------------------------------------------------
    // 1. Industrial Distillation Columns / Synthesis Towers in 3D
    const towerGeo = new THREE.CylinderGeometry(0.35, 0.45, 4.8, 24);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const towerLeft = new THREE.Mesh(towerGeo, towerMat);
    towerLeft.position.set(-2.6, 0.2, -1.0);
    backgroundIllustrationGroup.add(towerLeft);

    const towerRight = new THREE.Mesh(towerGeo, towerMat);
    towerRight.position.set(2.6, -0.2, -1.2);
    backgroundIllustrationGroup.add(towerRight);

    // Tower Rings (Illuminated status bands)
    const bandGeo = new THREE.TorusGeometry(0.46, 0.03, 8, 32);
    const cyanBandMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const amberBandMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

    for (let i = -1.5; i <= 1.5; i += 1.0) {
      const ringL = new THREE.Mesh(bandGeo, i > 0 ? cyanBandMat : amberBandMat);
      ringL.rotation.x = Math.PI / 2;
      ringL.position.set(-2.6, i, -1.0);
      backgroundIllustrationGroup.add(ringL);

      const ringR = new THREE.Mesh(bandGeo, i < 0 ? cyanBandMat : amberBandMat);
      ringR.rotation.x = Math.PI / 2;
      ringR.position.set(2.6, i, -1.2);
      backgroundIllustrationGroup.add(ringR);
    }

    // 2. High-Pressure Process Pipeline Lattice (Industrial Piping System behind)
    const pipePoints = [
      new THREE.Vector3(-3.0, 1.8, -1.5),
      new THREE.Vector3(-1.8, 1.8, -0.8),
      new THREE.Vector3(-1.8, 2.8, -0.8),
      new THREE.Vector3(1.8, 2.8, -0.8),
      new THREE.Vector3(1.8, 1.6, -0.8),
      new THREE.Vector3(3.0, 1.6, -1.5),
    ];
    const pipeCurve = new THREE.CatmullRomCurve3(pipePoints);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 40, 0.05, 12, false);
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.9,
      roughness: 0.15,
    });
    const pipeMesh = new THREE.Mesh(pipeGeo, pipeMat);
    backgroundIllustrationGroup.add(pipeMesh);

    // 3. 3D Rotating Radial Process Grid Disc
    const discGeo = new THREE.RingGeometry(1.8, 3.2, 48);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x0891b2,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.position.set(0, 0, -0.5);
    backgroundIllustrationGroup.add(discMesh);

    // 4. Background Ambient Sensor Nodes (Steam / Gas Telemetry)
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = -Math.random() * 2.5; // strictly behind
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    backgroundIllustrationGroup.add(particles);

    // ----------------------------------------------------
    // LAYER 2: NURUL IN 3D DIMENSIONAL SPACE (CENTER)
    // ----------------------------------------------------
    const textureLoader = new THREE.TextureLoader();
    const portraitTexture = textureLoader.load(portraitUrl);
    portraitTexture.generateMipmaps = true;

    // Nurul 3D Dimensional Rounded Slab
    const portraitPlaneGeo = new THREE.PlaneGeometry(2.7, 3.7, 32, 32);
    const portraitPlaneMat = new THREE.MeshStandardMaterial({
      map: portraitTexture,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.98,
      side: THREE.DoubleSide,
    });
    const portraitMesh = new THREE.Mesh(portraitPlaneGeo, portraitPlaneMat);
    nurulDimensionalGroup.add(portraitMesh);

    // Dimensional depth backer & bevel frame
    const backerGeo = new THREE.BoxGeometry(2.74, 3.74, 0.08);
    const backerMat = new THREE.MeshStandardMaterial({
      color: 0x0b0f19,
      metalness: 0.8,
      roughness: 0.25,
    });
    const backerMesh = new THREE.Mesh(backerGeo, backerMat);
    backerMesh.position.z = -0.05;
    nurulDimensionalGroup.add(backerMesh);

    // Golden / Titanium Beveled Edge Trim
    const wireTrimGeo = new THREE.BoxGeometry(2.78, 3.78, 0.1);
    const wireTrimMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    });
    const wireTrimMesh = new THREE.Mesh(wireTrimGeo, wireTrimMat);
    nurulDimensionalGroup.add(wireTrimMesh);

    // Soft Dimensional Halo Glow directly behind her silhouette
    const glowGeo = new THREE.PlaneGeometry(3.5, 4.5);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.position.z = -0.08;
    nurulDimensionalGroup.add(glowMesh);

    // ----------------------------------------------------
    // LAYER 3: 3D ILLUSTRATION IN FRONT OF NURUL (FOREGROUND)
    // ----------------------------------------------------
    // 1. Orbital Barrier Ring that passes physically IN FRONT of Nurul
    const frontOrbitalRingGeo = new THREE.TorusGeometry(2.35, 0.02, 16, 80);
    const frontOrbitalRingMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0891b2,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.15,
    });
    const frontOrbitalRing = new THREE.Mesh(frontOrbitalRingGeo, frontOrbitalRingMat);
    frontOrbitalRing.rotation.x = Math.PI / 2.8;
    frontOrbitalRing.rotation.y = Math.PI / 8;
    foregroundIllustrationGroup.add(frontOrbitalRing);

    // 2. Second Concentric Governance Ring in Foreground
    const frontRing2Geo = new THREE.TorusGeometry(2.65, 0.015, 16, 80);
    const frontRing2Mat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xb45309,
      emissiveIntensity: 0.3,
      metalness: 0.85,
      roughness: 0.25,
    });
    const frontRing2 = new THREE.Mesh(frontRing2Geo, frontRing2Mat);
    frontRing2.rotation.x = -Math.PI / 3;
    frontRing2.rotation.z = Math.PI / 6;
    foregroundIllustrationGroup.add(frontRing2);

    // 3. Floating 3D Telemetry Satellite Markers on the Front Rings
    const markerGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const markerMatCyan = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });
    const markerMatAmber = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });

    const frontMarkers: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const marker = new THREE.Mesh(markerGeo, i % 2 === 0 ? markerMatCyan : markerMatAmber);
      marker.position.set(Math.cos(angle) * 2.35, Math.sin(angle) * 2.35, 0);
      frontOrbitalRing.add(marker);
      frontMarkers.push(marker);
    }

    // 4. Floating 3D Holographic Reticles at the corners of foreground
    const reticleGeo = new THREE.RingGeometry(0.12, 0.15, 4);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    
    const reticleTL = new THREE.Mesh(reticleGeo, reticleMat);
    reticleTL.position.set(-1.4, 1.9, 0.3);
    foregroundIllustrationGroup.add(reticleTL);

    const reticleBR = new THREE.Mesh(reticleGeo, reticleMat);
    reticleBR.position.set(1.4, -1.9, 0.3);
    foregroundIllustrationGroup.add(reticleBR);

    // ----------------------------------------------------
    // LIGHTING SYSTEM
    // ----------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    // Key front light on Nurul
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 4, 6);
    scene.add(keyLight);

    // Cyan fill light from bottom-left
    const fillLight = new THREE.DirectionalLight(0x06b6d4, 1.6);
    fillLight.position.set(-5, -2, 4);
    scene.add(fillLight);

    // Warm amber rim light from behind to separate Nurul from industrial towers
    const rimLight = new THREE.DirectionalLight(0xf59e0b, 2.0);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // ----------------------------------------------------
    // INTERACTION & 360 ROTATION CONTROLS
    // ----------------------------------------------------
    let targetRotY = 0;
    let targetRotX = 0;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let autoSpin = true;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      autoSpin = false;
      setIsAutoRotate(false);
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.006;
        targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX));
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      } else if (!autoSpin) {
        // Subtle mouse parallax tilt when idle
        targetRotY = normX * 0.4;
        targetRotX = -normY * 0.3;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    mount.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation Loop with Multi-Layer Parallax
    let animationFrameId: number;
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(mount);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Auto rotation in 3D space
      if (autoSpin && !isDragging) {
        targetRotY += delta * 0.45;
      }

      // 1. Root group responds to user rotation
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.08;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.08;

      // 2. LAYER PARALLAX:
      // Background rotates slightly counter-phase for deep 3D sensation
      backgroundIllustrationGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.15;
      discMesh.rotation.z += delta * 0.1;
      particles.rotation.y += delta * 0.03;

      // 3. Foreground rings spin across the front of Nurul
      frontOrbitalRing.rotation.z += delta * 0.25;
      frontRing2.rotation.z -= delta * 0.2;

      // Pulse the glow halo behind Nurul
      const glowScale = 1 + Math.sin(elapsed * 2) * 0.03;
      glowMesh.scale.set(glowScale, glowScale, 1);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      mount.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      towerGeo.dispose();
      towerMat.dispose();
      bandGeo.dispose();
      cyanBandMat.dispose();
      amberBandMat.dispose();
      pipeGeo.dispose();
      pipeMat.dispose();
      discGeo.dispose();
      discMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      portraitPlaneGeo.dispose();
      portraitPlaneMat.dispose();
      backerGeo.dispose();
      backerMat.dispose();
      wireTrimGeo.dispose();
      wireTrimMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      frontOrbitalRingGeo.dispose();
      frontOrbitalRingMat.dispose();
      frontRing2Geo.dispose();
      frontRing2Mat.dispose();
      markerGeo.dispose();
      markerMatCyan.dispose();
      markerMatAmber.dispose();
      reticleGeo.dispose();
      reticleMat.dispose();
      portraitTexture.dispose();
      renderer.dispose();
    };
  }, [portraitUrl]);

  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none w-full h-full ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full h-full min-h-[460px] cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
        aria-label="3D Dimensional Portrait with Foreground and Background Illustrations"
        title="Click and drag to rotate Nurul in 360 degrees with front & back 3D illustrations"
      />

      {/* Floating 3D Telemetry HUD Cards (Visible in UI layer floating with the 3D scene) */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg bg-obsidian-950/85 border border-signal-cyan/30 backdrop-blur-md shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal-cyan animate-pulse" />
          <span className="font-mono text-[10px] text-steel-200 font-bold uppercase tracking-wider">
            3D VOLUMETRIC STAGE
          </span>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg bg-obsidian-950/85 border border-signal-amber/30 backdrop-blur-md shadow-xl flex items-center gap-1.5 text-[10px] font-mono text-signal-amber font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-signal-amber" />
          <span>ALARP VERIFIED</span>
        </div>
      </div>

      {/* Bottom Floating Control Ribbon */}
      <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        
        {/* Layer Annotation Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-950/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-steel-300">
          <Layers className="w-3 h-3 text-signal-cyan" />
          <span>FRONT: BARRIER RINGS • BACK: PROCESS TOWERS</span>
        </div>

        {/* 360 Spin Toggle Button */}
        <button
          onClick={() => setIsAutoRotate(!isAutoRotate)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all border ${
            isAutoRotate
              ? 'bg-signal-cyan text-obsidian-950 font-bold border-signal-cyan shadow-md'
              : 'bg-obsidian-900 text-steel-300 border-white/15 hover:text-white'
          }`}
          title="Toggle continuous 360-degree rotation"
        >
          <RotateCw className="w-3 h-3" />
          <span>{isAutoRotate ? 'AUTO 360° ON' : 'AUTO 360° PAUSED'}</span>
        </button>
      </div>

      {/* Center Drag Hint (Fades when user hovers or interacts) */}
      {!isHovering && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 pointer-events-none animate-pulse">
          <span className="px-3 py-1 rounded-full bg-obsidian-950/90 border border-signal-cyan/40 text-[10px] font-mono tracking-widest text-signal-cyan uppercase backdrop-blur-md shadow-lg">
            ↔ DRAG TO ROTATE 360°
          </span>
        </div>
      )}
    </div>
  );
};
