import React from 'react';
import { useAppStore } from '../../stores/useAppStore.js';

export const InfoHomeView: React.FC = () => {
  const { setRoute } = useAppStore();

  return (
    <div
      className="app-container"
      style={{
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
        maxWidth: 'var(--max-width-app)',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      {/* Section Title */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
          프로그래밍 언어 배우기
        </h2>
      </div>

      {/* Course Card Grid (3 Cards per row on PC/Tablet, nicely scaled on Mobile) */}
      <div
        className="info-course-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
      >
        <div
          className="info-course-card"
          data-action="python-learn"
          onClick={() => setRoute('python-learn')}
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'transform 160ms ease, box-shadow 160ms ease',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Dark Rich Gradient Thumbnail with Official Python Logo */}
          <div
            className="info-card-thumb"
            style={{
              width: '100%',
              aspectRatio: '16 / 10',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {/* Subtle glowing ambient spotlight */}
            <div
              style={{
                position: 'absolute',
                width: '170px',
                height: '170px',
                background:
                  'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(250, 204, 21, 0.1) 50%, transparent 70%)',
                filter: 'blur(18px)',
                pointerEvents: 'none',
              }}
            />

            {/* Official Python Vector Logo */}
            <svg
              viewBox="0 0 24 24"
              width="96"
              height="96"
              style={{
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.45))',
              }}
            >
              <defs>
                <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
              {/* Blue Snake Top Half */}
              <path
                fill="url(#py-blue)"
                d="M11.93 0C6.01 0 6.38 2.57 6.38 2.57l-.01 2.66h5.65v.8H3.95S0 5.57 0 11.51c0 5.94 3.45 5.74 3.45 5.74h2.05v-2.88s-.11-3.45 3.39-3.45h5.84s3.28 0 3.28-3.23V3.28S18.36 0 11.93 0zm-3.07 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"
              />
              {/* Yellow Snake Bottom Half */}
              <path
                fill="url(#py-yellow)"
                d="M12.07 24c5.92 0 5.55-2.57 5.55-2.57l.01-2.66h-5.65v-.8h8.07S24 18.43 24 12.49c0-5.94-3.45-5.74-3.45-5.74h-2.05v2.88s.11 3.45-3.39 3.45H9.27s-3.28 0-3.28 3.23v4.39S5.64 24 12.07 24zm3.07-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"
              />
            </svg>
          </div>

          {/* Card Body */}
          <div
            style={{
              padding: '1.25rem 1.1rem 1.25rem 1.1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              minHeight: '120px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.45,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                Python 배우기
              </h3>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '0.8rem' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#475569',
                  letterSpacing: '-0.01em',
                }}
              >
                기초 코스
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
