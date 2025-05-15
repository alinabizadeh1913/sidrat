// components/AuraBackground.tsx

"use client";

import { useEffect, useRef } from "react";
import { initAuraCanvas } from "@/lib/canvasAura";
import { AuraSettings } from "@/types/auraConfig";

type MysticAuraProps = {
  config?: Partial<AuraSettings>;
  zIndex?: number;
};

const MysticAura = ({ config = {}, zIndex }: MysticAuraProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const cleanup = initAuraCanvas(canvasRef.current, config);

    // فقط بار اول اجرا میشه ✅
    return () => {
      cleanup(); // انیمیشن رو قطع می‌کنه وقتی کامپوننت حذف شد
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 right-0 left-0 bottom-0 w-full h-full pointer-events-none`}
      style={{ zIndex: zIndex ?? 80 }}
    />
  );
};

export default MysticAura;
