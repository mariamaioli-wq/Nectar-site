"use client";

interface NectarMarkProps {
  size?: number;
  className?: string;
}

export function NectarMark({ size = 140, className }: NectarMarkProps) {
  const scale = size / 140;
  return (
    <svg
      viewBox="0 0 140 40"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (40 / 140)}
      className={className}
    >
      <defs>
        <linearGradient id="nectar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#E11D74" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="9" fill="url(#nectar-grad)" />
      <circle cx="70" cy="20" r="9" fill="url(#nectar-grad)" />
      <circle cx="120" cy="20" r="9" fill="url(#nectar-grad)" />
      <path
        d="M 29 20 L 61 20 M 79 20 L 111 20"
        stroke="url(#nectar-grad)"
        strokeWidth="3"
      />
    </svg>
  );
}
