import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div
        className="footer-bottom"
        style={{
          borderTop: 'none',
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>
          Copyright &copy; 2026 유성고등학교 THISCODE. All rights reserved.
        </p>
        <p style={{ marginTop: '0.35rem', fontSize: '0.8rem', color: '#94a3b8' }}>
          Licensed under the THISCODE Software License. Developed by Yuseong High School THISCODE Club.
        </p>
      </div>
    </footer>
  );
};
