import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 44 }: LogoProps) {
  // Creating the beautiful spirograph/mandala circular lace design in orange
  // with the blue <A/> code symbol in the center, matching the user image.
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* SPIROGRAPH LACE LAYER WITH 24 ROTATED THIN ELLIPSES (MATCHES MANDALA ART IN FIRST IMAGE) */}
        <g opacity="0.8">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = i * 15;
            return (
              <ellipse
                key={i}
                cx="50"
                cy="50"
                rx="39"
                ry="13"
                stroke="#FF6B00"
                strokeWidth="1.2"
                strokeOpacity="0.45"
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </g>

        {/* REINFORCING CIRCULAR GEOMETRIC BANDS */}
        <circle cx="50" cy="50" r="39" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="50" cy="50" r="41" stroke="#FF6B00" strokeWidth="1.2" strokeOpacity="0.75" strokeDasharray="3 2" />

        {/* STYLIZED <A/> EMBLEM IN DEEP BLUE IN THE CENTER */}
        <g id="center-symbol">
          {/* Left bracket: < */}
          <path
            d="M 33 36 L 21 50 L 33 64"
            stroke="#1565C0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter 'A' Left Leg */}
          <path
            d="M 40 62 L 48 38"
            stroke="#1565C0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter 'A' Right Leg, merged seamlessly with the code slash '/' */}
          <path
            d="M 48 38 L 56 62"
            stroke="#1565C0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Crossbar for A */}
          <path
            d="M 43 51.5 L 53 51.5"
            stroke="#1565C0"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Code Slash character: / passing slanted next to the A right leg */}
          <path
            d="M 62 35 L 53 65"
            stroke="#1565C0"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Right bracket: > */}
          <path
            d="M 67 36 L 79 50 L 67 64"
            stroke="#1565C0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
