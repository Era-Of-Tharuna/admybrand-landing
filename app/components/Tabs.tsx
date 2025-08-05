import React, { useState } from "react";
export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex gap-4 mb-4">
        {tabs.map((tab, i) => (
          <button key={i} className={`px-4 py-2 rounded-t-lg font-semibold ${active === i ? "bg-primary text-white" : "bg-gray-100 text-gray-700"}`} onClick={() => setActive(i)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b-lg shadow">{tabs[active].content}</div>
    </div>
  );
}
