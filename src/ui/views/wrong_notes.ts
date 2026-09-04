// Wrong Notes and Bookmarks View Renderer

import { Storage } from '../../services/storage.js';
import { DataManager, EnrichedQuestion } from '../../services/data_manager.js';
import { UICore } from '../ui_core.js';

export function renderWrongNotes(): void {
  const root = UICore.getRoot();
  if (!root) return;

  const wrongIds = Storage.getWrongAnswers();
  const bookmarkIds = Storage.getBookmarks();
  const allIds = Array.from(new Set([...wrongIds, ...bookmarkIds]));
  const wrongQuestions = allIds
    .map((id) => DataManager.getQuestionById(id))
    .filter((q): q is EnrichedQuestion => Boolean(q));

  root.innerHTML = `
    <div class="app-container" style="padding-top: 2rem; padding-bottom: 5rem; max-width: 1080px;">
      <div class="wrong-notes-header">
        <div>
          <span class="badge badge-level-3">취약점 완벽 클리닉</span>
          <h2 style="font-size: 1.85rem; font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.03em; color: #191f28;">
            나의 오답노트 & 북마크
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 0.25rem;">
            실전 문제 풀이에서 틀렸거나 북마크한 문항들을 한눈에 모아보고 즉시 집중 복습할 수 있습니다.
          </p>
        </div>
        ${
          wrongQuestions.length > 0
            ? `
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <button class="btn btn-primary" id="btn-start-all-review" style="font-size: 0.88rem; padding: 0.6rem 1.25rem;">
                전체 오답 다시 풀기 (${wrongQuestions.length}제)
              </button>
              <button class="btn btn-outline" id="btn-clear-wrong-history" style="font-size: 0.82rem; padding: 0.6rem 0.95rem;">
                오답 기록 비우기
              </button>
            </div>
          `
            : ''
        }
      </div>

      <!-- Problem List Header Counter -->
      <div class="pg-list-header" style="margin-top: 1.5rem;">
        <div class="pg-list-count">
          <strong>${wrongQuestions.length}</strong> 오답 문항
        </div>
      </div>

      <!-- Programmers Flat Minimal Table List -->
      <div class="pg-table-card">
        ${
          wrongQuestions.length === 0
            ? `
            <div style="padding: 4rem 2rem; text-align: center;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; color: var(--accent-primary);">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 800; color: #191f28; margin-bottom: 0.5rem;">현재 오답노트가 비어 있습니다</h4>
              <p style="font-size: 0.88rem; color: #8b95a1; margin-bottom: 1.5rem;">실전 모의고사나 500제 문제 풀이를 진행하면 틀린 문항이 여기에 자동으로 기록됩니다.</p>
              <button class="btn btn-primary" id="btn-goto-exam-from-empty">실전 문제 풀러 가기</button>
            </div>
          `
            : `
            <div class="pg-table-head">
              <div class="col-status">유형</div>
              <div class="col-title">제목</div>
              <div class="col-level">난이도</div>
              <div class="col-solvers">영역</div>
              <div class="col-accuracy">다시 풀기</div>
            </div>

            <div class="pg-table-body">
              ${wrongQuestions
                .map((q) => {
                  let levelText = 'Lv. 1';
                  let levelColor = '#10b981';
                  if (q.difficulty === '중급') {
                    levelText = 'Lv. 2';
                    levelColor = '#10b981';
                  } else if (q.difficulty === '고급') {
                    levelText = 'Lv. 3';
                    levelColor = '#f59e0b';
                  }

                  const isBookmark = bookmarkIds.includes(q.id);
                  const typeLabel = isBookmark ? '북마크' : '오답';

                  return `
                    <div class="pg-table-row" data-id="${q.id}">
                      <div class="col-status">
                        <span class="badge ${isBookmark ? 'badge-blue' : 'badge-level-3'}" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${typeLabel}</span>
                      </div>
                      <div class="col-title">
                        <div class="pg-title-row">
                          <a href="#" class="pg-problem-title btn-solve-single" data-id="${q.id}">
                            ${q.question}
                          </a>
                          <span class="pg-level-badge" style="color: ${levelColor};">${levelText}</span>
                        </div>
                        <span class="pg-problem-sub">${q.category} &middot; ${q.subcategory || ''}</span>
                        <div class="pg-mobile-stats-row">
                          <span class="badge ${isBookmark ? 'badge-blue' : 'badge-level-3'}" style="font-size: 0.68rem; padding: 0.1rem 0.35rem;">${typeLabel}</span>
                          <span style="font-weight: 700; color: var(--accent-primary);">단독 재풀이 &gt;</span>
                        </div>
                      </div>
                      <div class="col-level" style="color: ${levelColor};">
                        ${levelText}
                      </div>
                      <div class="col-solvers" style="font-size: 0.82rem; color: #4e5968;">
                        ${q.category}
                      </div>
                      <div class="col-accuracy">
                        <button class="btn btn-primary btn-solve-single" data-id="${q.id}" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
                          풀기
                        </button>
                      </div>
                    </div>
                  `;
                })
                .join('')}
            </div>
          `
        }
      </div>
    </div>
  `;
}
