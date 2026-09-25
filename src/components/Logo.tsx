import React from "react";
import styles from "./Logo.module.css";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 34, className = "" }: LogoProps) {
  return (
    <span
      className={className ? `${styles.mark} ${className}` : styles.mark}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="dcBadge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="55%" stopColor="#0F9488" />
            <stop offset="100%" stopColor="#0B6F66" />
          </linearGradient>
          <linearGradient id="dcSheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="dcClip">
            <rect x="1" y="1" width="46" height="46" rx="14" />
          </clipPath>
        </defs>

        <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#dcBadge)" />
        <g clipPath="url(#dcClip)">
          <path d="M1 15 Q1 1 15 1 H33 Q17 9 12 27 Q9 36 1 41 Z" fill="url(#dcSheen)" />
        </g>
        <rect
          x="1.75"
          y="1.75"
          width="44.5"
          height="44.5"
          rx="13.25"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.2"
          strokeWidth="1.5"
        />

        <text
          x="24"
          y="23.5"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-heading)"
          fontSize="21"
          fontWeight="800"
          letterSpacing="-1"
        >
          <tspan fill="#ffffff">D</tspan>
          <tspan fill="#E0A930">C</tspan>
        </text>

        <rect x="17" y="38.5" width="14" height="3" rx="1.5" fill="#E0A930" />
      </svg>
    </span>
  );
}
