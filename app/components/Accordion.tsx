import React, { useState } from "react";
export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 card cursor-pointer">
      <div className="font-semibold text-lg flex items-center justify-between" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && <div className="mt-2 text-gray-700">{children}</div>}
    </div>
  );
}
