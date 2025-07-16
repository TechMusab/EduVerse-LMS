import React from "react";

export default function Toast({ message, type, onClose }) {
  const base =
    "fixed top-36 right-8 px-6 py-3 rounded-lg shadow-lg z-50 transition-transform duration-300";
  const color =
    type === "success"
      ? "bg-success text-surface"
      : "bg-error text-surface";

  return (
    <div className={`${base} ${color}`}>
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="font-bold">
          ×
        </button>
      </div>
    </div>
  );
}
