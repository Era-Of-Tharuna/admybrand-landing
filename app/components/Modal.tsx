import React from "react";
export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl p-8 relative min-w-[320px] max-w-lg w-full">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}
