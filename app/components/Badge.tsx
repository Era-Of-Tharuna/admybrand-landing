import React from "react";
const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
  gray: "bg-gray-100 text-gray-700",
};
export function Badge({ children, color = "primary" }: { children: React.ReactNode; color?: string }) {
  const colorClass = colorMap[color] || colorMap.primary;
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}>{children}</span>
  );
}
