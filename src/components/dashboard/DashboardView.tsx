import React from 'react';
import { HeroCarousel } from './HeroCarousel.js';
import { useAppStore } from '../../stores/useAppStore.js';
import { useQuizStore } from '../../stores/useQuizStore.js';
import { Storage } from '../../services/storage.js';

export const DashboardView: React.FC = () => {
  const { setRoute } = useAppStore();
  const { startSession } = useQuizStore();

  const wrongCount = Storage.getWrongAnswers().length;

  const handleAction = (action: string) => {
    switch (action) {
      case 'exam':
        startSession('mockExam');
        break;
      case 'review':
        setRoute('wrong');
        break;
      case 'cert':
        setRoute('catalog');
        break;
    }
  };

  return (
    <div>
      {/* Programmers Rich Gradient Hero Banner */}
      <HeroCarousel />

      {/* Quick Action Standalone Rounded Square Buttons Grid */}
      <div className="quick-icons-strip">
        <div className="quick-icons-grid">
          {/* 1. Test / Code & Exam Unified */}
          <div
            className="quick-icon-item"
            data-action="exam"
            onClick={() => handleAction('exam')}
            style={{ cursor: 'pointer' }}
          >
            <div className="quick-icon-sq">
              <svg viewBox="0 0 24 24">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="quick-icon-label">국어평가</span>
          </div>

          {/* 2. Wrong Notes / Checklist */}
          <div
            className="quick-icon-item"
            data-action="review"
            onClick={() => handleAction('review')}
            style={{ cursor: 'pointer' }}
          >
            <div className="quick-icon-sq">
              <svg viewBox="0 0 24 24">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <span className="quick-icon-label">오답노트 ({wrongCount})</span>
          </div>

          {/* 3. Certification Star / Medal -> Hash Placeholder */}
          <div
            className="quick-icon-item"
            data-action="cert"
            onClick={() => handleAction('cert')}
            style={{ cursor: 'pointer' }}
          >
            <div className="quick-icon-sq">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="9" x2="20" y2="9"></line>
                <line x1="4" y1="15" x2="20" y2="15"></line>
                <line x1="10" y1="3" x2="8" y2="21"></line>
                <line x1="16" y1="3" x2="14" y2="21"></line>
              </svg>
            </div>
            <span className="quick-icon-label">문제은행</span>
          </div>
        </div>
      </div>
    </div>
  );
};
