// app/components/Grid.tsx
"use client";
import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

const GRID_SPACING = 120; // فاصله خطوط
const RADIUS = 120; // شعاع تاثیر موس
const BASE_OPACITY = 0.008;
const ACTIVE_OPACITY = 0.213;
const TRANSITION_TIME = 313; // ms

const Grid = ({ zIndex }: { zIndex: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState<Point | null>(null);
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  // گرفتن سایز صفحه برای ریسپانسیو بودن
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // رسم Grid با توجه به موس
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(21, 22, 22," + BASE_OPACITY + ")";
    ctx.lineWidth = 0.5;

    // رسم خطوط
    for (let x = 0; x <= canvas.width; x += GRID_SPACING) {
      for (let y = 0; y <= canvas.height; y += GRID_SPACING) {
        const isVertical = true;
        const isHorizontal = true;

        let opacity = BASE_OPACITY;
        if (mouse) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < RADIUS) {
            opacity =
              ACTIVE_OPACITY -
              (distance / RADIUS) * (ACTIVE_OPACITY - BASE_OPACITY);
          }
        }

        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  }, [mouse, windowSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 transition-opacity duration-[100ms]"
      style={{
        zIndex: zIndex,
      }}
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setMouse(null)}
    />
  );
};

export default Grid;
