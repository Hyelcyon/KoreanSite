import React, { useEffect } from 'react';
import { useQuizStore } from '../../stores/useQuizStore.js';
import { useAppStore } from '../../stores/useAppStore.js';
import { Storage } from '../../services/storage.js';

export const QuizView: React.FC = () => {
  const {
    questions,
    currentIndex,
    userAnswers,
    isAnswered,
    selectedOption,
    timerSeconds,
    mode,
    answerQuestion,
    nextQuestion,
    finishSession,
  } = useQuizStore();

  const { setRoute, setCatalogFilter } = useAppStore();

  const totalInSession = questions.length;
  const currentQ = questions[currentIndex];
  const currentNum = currentIndex + 1;
  const progressPercent = totalInSession > 0 ? Math.round((currentNum / totalInSession) * 100) : 0;

  // Keyboard shortcut: 1..5 for options, Enter for next/finish
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentQ) return;
      if (!isAnswered) {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= currentQ.options.length) {
          answerQuestion(num - 1);
        }
      } else {
        if (e.key === 'Enter') {
          if (currentNum < totalInSession) {
            nextQuestion();
          } else {
            finishSession();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, isAnswered, currentNum, totalInSession, answerQuestion, nextQuestion, finishSession]);

  if (!currentQ) {
    return (
      <div className="quiz-empty-state">
        <p>진행 중인 퀴즈 문항이 없습니다.</p>
        <button className="btn btn-primary" onClick={() => setRoute('dashboard')}>
          대시보드로 돌아가기
        </button>
      </div>
    );
  }

  const isBookmarked = Storage.isBookmarked(currentQ.id);

  const handleToggleBookmark = () => {
    Storage.toggleBookmark(currentQ.id);
  };

  const formatTimer = (secs: number) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  let diffBadge = <span className="badge badge-level-1">Lv.1 초급</span>;
  if (currentQ.difficulty === '중급') diffBadge = <span className="badge badge-level-2">Lv.2 중급</span>;
  if (currentQ.difficulty === '고급') diffBadge = <span className="badge badge-level-3">Lv.3 고급</span>;

  const numLabels = ['①', '②', '③', '④', '⑤'];

  return (
    <div>
      {/* Breadcrumb Header and Timer Controls */}
      <div className="quiz-session-header">
        <nav className="quiz-nav-breadcrumbs" aria-label="문항 위치">
          <a
            href="#dashboard"
            className="crumb-link crumb-home"
            onClick={(e) => {
              e.preventDefault();
              setRoute('dashboard');
            }}
          >
            <svg className="crumb-home-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>홈</span>
          </a>
          <span className="crumb-sep">&rsaquo;</span>
          <span className="crumb-route-badge">
            {mode === 'mockExam' ? '실전 모의고사 (20제)' : mode === 'random10' ? '핵심 10제' : '500제 풀이'}
          </span>
          <span className="crumb-sep">&rsaquo;</span>
          <a
            href="#catalog"
            className="crumb-link crumb-category"
            onClick={(e) => {
              e.preventDefault();
              setCatalogFilter(currentQ.category);
              setRoute('catalog');
            }}
          >
            {currentQ.category}
          </a>
          <span className="crumb-sep">&rsaquo;</span>
          <span className="crumb-current">{currentQ.subcategory || `${currentQ.id}번 문항`}</span>
        </nav>

        <div className="quiz-session-controls">
          <div className="quiz-timer-pill" id="session-timer">
            {formatTimer(timerSeconds)}
          </div>
          <button
            className="btn btn-outline btn-sm"
            id="btn-toggle-bookmark"
            onClick={handleToggleBookmark}
            style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem' }}
          >
            {isBookmarked ? '북마크 해제' : '북마크'}
          </button>
          <button
            className="btn btn-outline btn-sm"
            id="btn-back-to-catalog"
            onClick={() => setRoute('catalog')}
            style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem' }}
          >
            종료
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Split Layout */}
      <div className="quiz-split-layout">
        {/* Left Column: Academic Passage & Problem Thesis */}
        <div className="quiz-left-pane">
          <div className="quiz-meta-strip">
            <span className="quiz-question-number">문항 {currentNum} / {totalInSession}</span>
            <span className="badge badge-category">{currentQ.category}</span>
            {diffBadge}
          </div>

          <h2 className="quiz-question-title">{currentQ.question}</h2>

          <div className="quiz-context-bar">
            <span className="context-tag-label">문헌 출처</span>
            <span className="context-tag-value">
              {currentQ._mockSource || '국립국어원 표준 문헌 DB · KS X 1026-1'}
            </span>
            <span className="context-sep">/</span>
            <span className="context-tag-label">평가 영역</span>
            <span className="context-tag-value">{currentQ.subcategory || currentQ.category}</span>
          </div>
        </div>

        {/* Right Column: Unified Options & Academic Commentary */}
        <div className="quiz-right-pane">
          {/* Options Group */}
          <div className="quiz-unified-options" id="options-container">
            {currentQ.options.map((opt, idx) => {
              let stateClass = '';
              let tagBadge = null;
              if (isAnswered) {
                if (idx === currentQ.answer) {
                  stateClass = 'option-correct';
                  tagBadge = <span className="option-status-tag tag-correct">정답</span>;
                } else if (idx === selectedOption) {
                  stateClass = 'option-incorrect';
                  tagBadge = <span className="option-status-tag tag-incorrect">선택 오답</span>;
                } else {
                  stateClass = 'option-dimmed';
                }
              }
              const numLabel = numLabels[idx] || String(idx + 1);

              return (
                <button
                  key={idx}
                  className={`quiz-option-row ${stateClass}`}
                  onClick={() => !isAnswered && answerQuestion(idx)}
                  disabled={isAnswered}
                >
                  <span className="option-circle-num">{numLabel}</span>
                  <span className="option-row-text">{opt}</span>
                  {tagBadge}
                </button>
              );
            })}
          </div>

          {/* Feedback & Commentary Strip */}
          {isAnswered && (
            <div className="quiz-feedback-strip">
              <div className="feedback-header-line">
                <div className="feedback-verdict-group">
                  <span
                    className={`feedback-verdict-pill ${
                      selectedOption === currentQ.answer ? 'pill-correct' : 'pill-incorrect'
                    }`}
                  >
                    {selectedOption === currentQ.answer ? '정답입니다' : '오답입니다'}
                  </span>
                  {selectedOption !== currentQ.answer && (
                    <span className="feedback-correct-cue">
                      정답: <strong>{numLabels[currentQ.answer] || String(currentQ.answer + 1)}번</strong>
                    </span>
                  )}
                </div>

                {currentNum < totalInSession ? (
                  <button
                    className="btn btn-primary"
                    id="btn-next-question"
                    onClick={nextQuestion}
                    style={{ padding: '0.5rem 1.15rem', fontSize: '0.88rem' }}
                  >
                    다음 문항 풀기 <kbd className="kbd-inline">Enter ↵</kbd>
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    id="btn-finish-quiz"
                    onClick={finishSession}
                    style={{ padding: '0.5rem 1.15rem', fontSize: '0.88rem' }}
                  >
                    평가 결과 리포트 확인 <kbd className="kbd-inline">Enter ↵</kbd>
                  </button>
                )}
              </div>

              <div className="feedback-commentary-body">{currentQ.explanation}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
