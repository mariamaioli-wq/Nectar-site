"use client";

import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full",
        {
          "px-7 py-3.5 text-sm bg-white text-[#07050E] hover:shadow-[0_0_30px_rgba(225,29,116,0.4)]":
            variant === "primary",
          "px-7 py-3.5 text-sm border border-white/20 text-[#FAFAF7] hover:border-white/40 hover:bg-white/5":
            variant === "ghost",
          "px-7 py-3.5 text-sm text-white hover:shadow-[0_0_30px_rgba(225,29,116,0.5)]":
            variant === "gradient",
          "px-5 py-2.5 text-xs": size === "sm",
          "px-7 py-3.5 text-sm": size === "md",
          "px-8 py-4 text-base": size === "lg",
        },
        variant === "gradient" && {
          background: "linear-gradient(135deg, #7C3AED 0%, #E11D74 50%, #F97316 100%)",
        },
        className
      )}
      style={
        variant === "gradient"
          ? { background: "linear-gradient(135deg, #7C3AED 0%, #E11D74 50%, #F97316 100%)" }
          : undefined
      }
      {...props}
    >
      {children}
    </button>
  );
}
