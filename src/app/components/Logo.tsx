'use client';

import React from 'react';

/**
 * 7Grim Studio logo component.
 * Renders inline SVG so Orbitron (loaded via Next.js fonts) is available.
 *
 * variant="full"  — scythe-7 mark + "GRIM STUDIO" wordmark (horizontal)
 * variant="mark"  — scythe-7 mark only (square, used for favicon / small spots)
 */

const MARK_PATH =
  'M 0,0 L 62,0 L 62,12 C 60,18 57,27 53,38 C 49,49 44,60 39,68 C 36,74 27,80 17,78 C 8,76 3,68 5,60 C 10,53 18,56 23,52 C 28,49 32,41 36,31 C 38,25 39,19 39,12 L 0,12 Z';

// Blade crescent accent — overlaid with purple→red gradient
const BLADE_PATH =
  'M 39,68 C 36,74 27,80 17,78 C 8,76 3,68 5,60 C 10,53 16,55 21,53 L 18,62 C 13,64 8,66 7,70 C 9,74 16,74 22,70 C 28,66 34,62 38,66 Z';

interface LogoProps {
  variant?: 'full' | 'mark';
  height?: number;
  className?: string;
}

const Logo = ({ variant = 'full', height = 44, className = '' }: LogoProps) => {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 68 86"
        height={height}
        width={Math.round(height * (68 / 86))}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="7Grim Studio mark"
      >
        <defs>
          <linearGradient id="lg-blade-m" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <g transform="translate(3, 3)">
          <path d={MARK_PATH} fill="white" />
          <path d={BLADE_PATH} fill="url(#lg-blade-m)" opacity="0.82" />
        </g>
      </svg>
    );
  }

  // Full horizontal logo: mark + wordmark
  return (
    <svg
      viewBox="0 0 308 88"
      height={height}
      width={Math.round(height * (308 / 88))}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="7Grim Studio"
    >
      <defs>
        <linearGradient id="lg-blade-f" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>

      {/* Scythe-7 mark */}
      <g transform="translate(4, 4)">
        <path d={MARK_PATH} fill="white" />
        <path d={BLADE_PATH} fill="url(#lg-blade-f)" opacity="0.82" />
      </g>

      {/* "GRIM" — Orbitron 900 */}
      <text
        x="76"
        y="68"
        fontFamily="'Orbitron', 'Courier New', monospace"
        fontSize="60"
        fontWeight="900"
        fill="white"
        letterSpacing="-1"
      >
        GRIM
      </text>

      {/* "STUDIO" — small tracked label */}
      <text
        x="78"
        y="83"
        fontFamily="'Orbitron', 'Courier New', monospace"
        fontSize="11"
        fontWeight="400"
        fill="#6b7280"
        letterSpacing="5.5"
      >
        STUDIO
      </text>
    </svg>
  );
};

export default Logo;
