import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="https://res.cloudinary.com/dcmt06mac/image/upload/v1780998283/aotms_logo-2_v8fs1e.jpg"
        alt="Academy of Tech Masters Logo"
        className="h-22 w-auto object-contain"
        style={{ maxWidth: "350px" }}
      />
    </div>
  );
}