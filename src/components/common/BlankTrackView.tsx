import React from 'react';
import { useAppStore } from '../../stores/useAppStore.js';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface BlankTrackProps {
  title: string;
  desc: string;
}

export const BlankTrackView: React.FC<BlankTrackProps> = ({ title, desc }) => {
  const { setRoute } = useAppStore();

  return (
    <div className="view-container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <div
        style={{
          width: 56,
          height: 56,
          margin: '0 auto 1.5rem',
          borderRadius: 16,
          background: 'rgba(99, 102, 241, 0.1)',
          color: '#6366f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Sparkles size={28} />
      </div>

      <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
        {title}
      </h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.6 }}>
        {desc}
      </p>

      <button
        className="btn-primary"
        onClick={() => setRoute('dashboard')}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
      >
        <ArrowLeft size={16} />
        <span>국어학 평가원 홈으로 돌아가기</span>
      </button>
    </div>
  );
};
