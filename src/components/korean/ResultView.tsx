import React from 'react';
import { useQuizStore } from '../../stores/useQuizStore.js';
import { useAppStore } from '../../stores/useAppStore.js';

export const ResultView: React.FC = () => {
  const { lastExamResult, startSession } = useQuizStore();
  const { setRoute } = useAppStore();

  if (!lastExamResult) {
    return (
      <div className="quiz-empty-state">
        <p>응시한 평가 결과가 없습니다.</p>
        <button className="btn btn-primary" onClick={() => setRoute('dashboard')}>
          대시보드로 이동
        </button>
      </div>
    );
  }

  const { total, correct, score, timeSpent, categories } = lastExamResult;
  const mins = Math.floor(timeSpent / 60);
  const secs = timeSpent % 60;

  return (
    <div className="quiz-container">
      <div className="scorecard-hero">
        <span
          className="badge"
          style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}
        >
          2026 중세국어 역량평가 리포트
        </span>
        <div className="score-number">{score}점</div>
        <div className="score-label">
          {total}문항 중 {correct}문항 정답 | 총 소요시간 {mins}분 {secs}초
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '1.75rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            className="btn-promo-white"
            id="btn-retry-exam"
            onClick={() => startSession('mockExam')}
          >
            새 모의고사 응시
          </button>
          <button
            className="btn btn-outline"
            id="btn-review-wrong"
            onClick={() => setRoute('wrong')}
            style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)' }}
          >
            오답노트 복습
          </button>
          <button
            className="btn btn-outline"
            id="btn-go-home"
            onClick={() => setRoute('dashboard')}
            style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)' }}
          >
            홈으로 이동
          </button>
        </div>
      </div>

      <div
        style={{
          background: 'var(--surface-1)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-elevation-1)',
        }}
      >
        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}
        >
          영역별 성취도 분석
        </h3>
        <div className="category-stats-grid">
          {categories &&
            Object.entries(categories).map(([catName, stats]: [string, { total: number; correct: number }]) => {
              const catPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
              return (
                <div key={catName} className="cat-stat-card">
                  <div className="cat-stat-header">
                    <span style={{ fontWeight: 700 }}>{catName}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {stats.correct}/{stats.total} ({catPct}%)
                    </span>
                  </div>
                  <div className="cat-stat-bar">
                    <div
                      className="cat-stat-bar-fill"
                      style={{ width: `${catPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
