// Quiz Session View Renderer

import { Storage } from '../../services/storage.js';
import { State } from '../../state/app_state.js';
import { UICore } from '../ui_core.js';
import { renderDashboard } from './dashboard.js';

export function renderQuiz(): void {
  const root = UICore.getRoot();
  if (!root) return;
  const q = State.getCurrentQuestion();
  if (!q) {
    renderDashboard();
    return;
  }

  const totalInSession = State.sessionQuestions.length;
  const currentNum = State.currentIndex + 1;
  const progressPercent = Math.round((currentNum / totalInSession) * 100);
  const isBookmarked = Storage.isBookmarked(q.id);

  let diffBadge = '<span class="badge badge-level-1">Lv.1 초급</span>';
  if (q.difficulty === '중급') diffBadge = '<span class="badge badge-level-2">Lv.2 중급</span>';
  if (q.difficulty === '고급') diffBadge = '<span class="badge badge-level-3">Lv.3 고급</span>';

  // Build dynamic contextual breadcrumb hierarchy
  const routeTitle = State.routeSource || '실전 모의고사 (20제)';
  let routeHtml = '';
  if (State.mode === 'single') {
    routeHtml = `
      <a href="#" class="crumb-link crumb-route" data-crumb="catalog">문제 검색</a>
      <span class="crumb-sep">&rsaquo;</span>
      <a href="#" class="crumb-link crumb-category" data-crumb="category" data-cat="${q.category}">${q.category}</a>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb-current">${q.subcategory || ''} (${q.id}번 문항)</span>
    `;
  } else if (State.mode === 'category') {
    routeHtml = `
      <a href="#" class="crumb-link crumb-category" data-crumb="category" data-cat="${q.category}">${q.category}</a>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb-current">${q.subcategory || ''}</span>
    `;
  } else if (State.mode === 'review') {
    routeHtml = `
      <a href="#" class="crumb-link crumb-route" data-crumb="review">오답노트</a>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb-current">${q.category} &middot; ${q.subcategory || ''}</span>
    `;
  } else {
    routeHtml = `
      <span class="crumb-route-badge">${routeTitle}</span>
      <span class="crumb-sep">&rsaquo;</span>
      <a href="#" class="crumb-link crumb-category" data-crumb="category" data-cat="${q.category}">${q.category}</a>
      <span class="crumb-sep">&rsaquo;</span>
      <span class="crumb-current">${q.subcategory || ''}</span>
    `;
  }

  root.innerHTML = `
    <div class="quiz-session-header">
      <nav class="quiz-nav-breadcrumbs" aria-label="문항 위치">
        <a href="#" class="crumb-link crumb-home" data-crumb="dashboard">
          <svg class="crumb-home-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span>홈</span>
        </a>
        <span class="crumb-sep">&rsaquo;</span>
        ${routeHtml}
      </nav>
      <div class="quiz-session-controls">
        <div class="quiz-timer-pill" id="session-timer">00:00</div>
        <button class="btn btn-outline btn-sm" id="btn-toggle-bookmark" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;">
          ${isBookmarked ? '북마크 해제' : '북마크'}
        </button>
        <button class="btn btn-outline btn-sm" id="btn-back-to-catalog" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;">
          종료
        </button>
      </div>
    </div>

    <div class="quiz-progress-track">
      <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
    </div>

    <div class="quiz-split-layout">
      <!-- Left Column: Academic Passage & Problem Thesis -->
      <div class="quiz-left-pane">
        <div class="quiz-meta-strip">
          <span class="quiz-question-number">문항 ${currentNum} / ${totalInSession}</span>
          <span class="badge badge-category">${q.category}</span>
          ${diffBadge}
        </div>

        <h2 class="quiz-question-title">${q.question}</h2>

        <div class="quiz-context-bar">
          <span class="context-tag-label">문헌 출처</span>
          <span class="context-tag-value">국립국어원 표준 문헌 DB &middot; KS X 1026-1</span>
          <span class="context-sep">/</span>
          <span class="context-tag-label">평가 영역</span>
          <span class="context-tag-value">${q.subcategory || ''}</span>
        </div>
      </div>

      <!-- Right Column: Unified Options & Academic Commentary -->
      <div class="quiz-right-pane">
        <!-- Unified Option Group -->
        <div class="quiz-unified-options" id="options-container">
          ${q.options
            .map((opt, idx) => {
              let stateClass = '';
              let tagBadge = '';
              if (State.isAnswered) {
                if (idx === q.answer) {
                  stateClass = 'option-correct';
                  tagBadge = '<span class="option-status-tag tag-correct">정답</span>';
                } else if (idx === State.selectedOption) {
                  stateClass = 'option-incorrect';
                  tagBadge = '<span class="option-status-tag tag-incorrect">선택 오답</span>';
                } else {
                  stateClass = 'option-dimmed';
                }
              }
              const numLabel = ['①', '②', '③', '④', '⑤'][idx] || String(idx + 1);
              return `
                <button class="quiz-option-row ${stateClass}" data-index="${idx}" ${State.isAnswered ? 'disabled' : ''}>
                  <span class="option-circle-num">${numLabel}</span>
                  <span class="option-row-text">${opt}</span>
                  ${tagBadge}
                </button>
              `;
            })
            .join('')}
        </div>

        ${
          State.isAnswered
            ? `
            <!-- Clean Unboxed Editorial Commentary Strip -->
            <div class="quiz-feedback-strip">
              <div class="feedback-header-line">
                <div class="feedback-verdict-group">
                  <span class="feedback-verdict-pill ${State.selectedOption === q.answer ? 'pill-correct' : 'pill-incorrect'}">
                    ${State.selectedOption === q.answer ? '정답입니다' : '오답입니다'}
                  </span>
                  ${
                    State.selectedOption !== q.answer
                      ? `<span class="feedback-correct-cue">정답: <strong>${['①', '②', '③', '④', '⑤'][q.answer] || String(q.answer + 1)}번</strong></span>`
                      : ''
                  }
                </div>
                ${
                  currentNum < totalInSession
                    ? `<button class="btn btn-primary" id="btn-next-question" style="padding: 0.5rem 1.15rem; font-size: 0.88rem;">다음 문항 풀기 <kbd class="kbd-inline">Enter ↵</kbd></button>`
                    : `<button class="btn btn-primary" id="btn-finish-quiz" style="padding: 0.5rem 1.15rem; font-size: 0.88rem;">평가 결과 리포트 확인 <kbd class="kbd-inline">Enter ↵</kbd></button>`
                }
              </div>
              <div class="feedback-commentary-body">${q.explanation}</div>
            </div>
          `
            : ''
        }
      </div>
    </div>
  `;
}
