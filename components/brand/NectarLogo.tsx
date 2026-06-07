"use client";

import { NectarMark } from "./NectarMark";

interface NectarLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { mark: 56, text: "text-lg" },
  md: { mark: 80, text: "text-2xl" },
  lg: { mark: 120, text: "text-4xl" },
};

export function NectarLogo({ size = "md", className }: NectarLogoProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <NectarMark size={s.mark} />
      <span
        className={`${s.text} font-medium tracking-tight text-[#FAFAF7]`}
        style={{ fontFamily: "var(--font-clash)" }}
      >
        nectar
      </span>
    </div>
  );
}
