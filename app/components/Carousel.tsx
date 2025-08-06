import React, { useState } from "react";
export function Carousel({ items }: { items: { avatar: string; name: string; company: string; quote: string }[] }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === items.length - 1 ? 0 : i + 1));
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 mb-4 overflow-hidden">
        {items[idx].avatar ? (
          <img src={items[idx].avatar} alt={items[idx].name} className="w-full h-full object-cover" />
        ) : null}
      </div>
      <p className="italic mb-2">"{items[idx].quote}"</p>
      <div className="font-semibold">{items[idx].name}</div>
      <div className="text-sm text-gray-500">{items[idx].company}</div>
      <div className="flex gap-4 mt-4">
        <button onClick={prev} className="px-3 py-1 rounded bg-gray-100 hover:bg-primary hover:text-white transition">&#8592;</button>
        <button onClick={next} className="px-3 py-1 rounded bg-gray-100 hover:bg-primary hover:text-white transition">&#8594;</button>
      </div>
    </div>
  );
}
