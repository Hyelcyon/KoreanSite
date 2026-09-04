import React from 'react';
import { useAppStore } from '../../stores/useAppStore.js';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, closeToast } = useAppStore();

  if (!toast) return null;

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success':
        return '#10b981';
      case 'warning':
        return '#f59e0b';
      case 'info':
      default:
        return '#3b82f6';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle size={16} color="#10b981" />;
      case 'warning':
        return <AlertCircle size={16} color="#f59e0b" />;
      case 'info':
      default:
        return <Info size={16} color="#3b82f6" />;
    }
  };

  return (
    <div
      className="ide-safety-toast show"
      id="safety-toast"
      style={{ borderLeftColor: getBorderColor() }}
    >
      {getIcon()}
      <span style={{ marginLeft: 6, marginRight: 6 }}>{toast.message}</span>
      <button
        onClick={closeToast}
        style={{
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          padding: 2,
          display: 'flex',
        }}
        aria-label="닫기"
      >
        <X size={14} />
      </button>
    </div>
  );
};
