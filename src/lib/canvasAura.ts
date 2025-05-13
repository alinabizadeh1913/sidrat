// utils/initAuraCanvas.ts

import { AuraSettings } from "@/types/auraConfig";

const defaultConfig: AuraSettings = {
  particleCount: 45,
  particleColor: "rgba(255, 240, 200, 0.6)",
  minSpeed: 0.2,
  maxSpeed: 0.8,
  minSize: 1.5,
  maxSize: 4,
  glowIntensity: 15,
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

function getResponsiveParticleCount(baseCount: number): number {
  const width = window.innerWidth;

  if (width < 480) return 15;
  if (width < 768) return 20;
  if (width < 1024) return 25;
  if (width < 1280) return 35;
  if (width < 1536) return 35;
  return baseCount;
}

export function initAuraCanvas(
  canvas: HTMLCanvasElement,
  userConfig: Partial<AuraSettings>
) {
  const config = { ...defaultConfig, ...userConfig };
  const ctx = canvas.getContext("2d")!;
  let animationFrameId: number;

  const particles: Particle[] = [];
  let width = window.innerWidth;
  let height = window.innerHeight;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles(); // ✅ اضافه‌شده برای تنظیم دوباره‌ی پارتیکل‌ها
  }

  function initParticles() {
    particles.length = 0;

    const responsiveCount = getResponsiveParticleCount(config.particleCount);

    for (let i = 0; i < responsiveCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx:
          (Math.random() * (config.maxSpeed - config.minSpeed) +
            config.minSpeed) *
          (Math.random() < 0.5 ? -1 : 1),
        vy:
          (Math.random() * (config.maxSpeed - config.minSpeed) +
            config.minSpeed) *
          (Math.random() < 0.5 ? -1 : 1),
        size:
          Math.random() * (config.maxSize - config.minSize) + config.minSize,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = config.particleColor;
    ctx.shadowBlur = config.glowIntensity;
    ctx.shadowColor = config.particleColor;

    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function updateParticles() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
  }

  function animate() {
    updateParticles();
    drawParticles();
    animationFrameId = requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resize);
  };
}
