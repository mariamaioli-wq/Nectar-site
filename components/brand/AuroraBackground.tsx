"use client";

import { cn } from "@/lib/cn";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[#07050E]", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 15% 35%, rgba(225, 29, 116, 0.85), transparent 70%),
            radial-gradient(ellipse 55% 50% at 85% 65%, rgba(124, 58, 237, 0.85), transparent 70%),
            radial-gradient(ellipse 40% 35% at 50% 50%, rgba(249, 115, 22, 0.55), transparent 70%)
          `,
        }}
      />
      {children}
    </div>
  );
}
