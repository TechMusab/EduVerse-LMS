import React from "react";

export default function Toast({ message, type = "info", onClose }) {
  if (!message) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 24,
      right: 24,
      background: type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#334155',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      zIndex: 1000,
      minWidth: 200,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
      <span>{message}</span>
      <button onClick={onClose} style={{
        background: 'transparent',
        border: 'none',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 8,
        cursor: 'pointer'
      }}>×</button>
    </div>
  );
} 