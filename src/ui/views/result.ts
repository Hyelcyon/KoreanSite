// Exam Result View Renderer

import { ExamResultRecord } from '../../types/korean.js';
import { State } from '../../state/app_state.js';
import { UICore } from '../ui_core.js';

export function renderResult(record: ExamResultRecord): void {
  const root = UICore.getRoot();
  if (!root) return;
  const total = record.total;
  const correct = record.correctCount ?? record.correct ?? 0;
  const pct = record.percentage ?? record.score ?? 0;
  const elapsed = record.elapsedSeconds ?? record.timeSpent ?? 0;
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  const catMap: Record<string, { total: number; correct: number }> = {};
  State.userAnswers.forEach((ans) => {
    const cat = ans.question.category;
    if (!catMap[cat]) catMap[cat] = { total: 0, correct: 0 };
    const current = catMap[cat]!;
    current.total += 1;
    if (ans.isCorrect) current.correct += 1;
  });

  root.innerHTML = `
    <div class="quiz-container">
      <div class="scorecard-hero">
        <span class="badge" style="background: rgba(255,255,255,0.2); color: #ffffff;">2026 중세국어 역량평가 리포트</span>
        <div class="score-number">${pct}점</div>
        <div class="score-label">${total}문항 중 ${correct}문항 정답 | 총 소요시간 ${mins}분 ${secs}초</div>
        <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.75rem; flex-wrap: wrap;">
          <button class="btn-promo-white" id="btn-retry-exam">새 모의고사 응시</button>
          <button class="btn btn-outline" id="btn-review-wrong" style="color: #ffffff; border-color: rgba(255,255,255,0.4);">오답노트 복습</button>
          <button class="btn btn-outline" id="btn-go-home" style="color: #ffffff; border-color: rgba(255,255,255,0.4);">홈으로 이동</button>
        </div>
      </div>

      <div style="background: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow-elevation-1);">
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-primary);">
          영역별 성취도 분석
        </h3>
        <div class="category-stats-grid">
          ${Object.entries(catMap)
            .map(([catName, stats]) => {
              const catPct = Math.round((stats.correct / stats.total) * 100);
              return `
                <div class="cat-stat-card">
                  <div class="cat-stat-header">
                    <span style="font-weight: 700;">${catName}</span>
                    <span style="font-family: var(--font-mono); color: var(--accent-primary);">${stats.correct}/${stats.total} (${catPct}%)</span>
                  </div>
                  <div class="cat-stat-bar">
                    <div class="cat-stat-bar-fill" style="width: ${catPct}%;"></div>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    </div>
  `;
}
