import React from "react";
export function Avatar({ src, alt, size = 48 }: { src: string; alt: string; size?: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover border-2 border-primary shadow"
      style={{ width: size, height: size }}
    />
  );
}
