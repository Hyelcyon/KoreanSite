// Problem Catalog View Renderer

import { EnrichedQuestion, DataManager } from '../../services/data_manager.js';
import { State } from '../../state/app_state.js';
import { UICore } from '../ui_core.js';

export function renderCatalogRows(questions: EnrichedQuestion[]): string {
  return questions
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

      const solvers = (1200 - ((q.id * 2) % 950) + 150).toLocaleString();
      const accuracy = Math.max(12, Math.min(88, 92 - ((q.id * 3) % 75)));
      const mockSource = q._mockSource || '2025 훈민정음 평가원 하반기 ' + ((q.id % 3) + 1) + '차';

      return `
        <div class="pg-table-row" data-id="${q.id}">
          <div class="col-status">
            <span class="status-dot"></span>
          </div>
          <div class="col-title">
            <div class="pg-title-row">
              <a href="#" class="pg-problem-title btn-solve-single" data-id="${q.id}">
                ${q.question}
              </a>
              <span class="pg-level-badge" style="color: ${levelColor};">${levelText}</span>
            </div>
            <span class="pg-problem-sub">${mockSource} &middot; ${q.category}</span>
            <div class="pg-mobile-stats-row">
              <span class="pg-stat-solvers">${solvers}명</span>
              <span class="pg-stat-accuracy">정답률 ${accuracy}%</span>
            </div>
          </div>
          <div class="col-level" style="color: ${levelColor};">
            ${levelText}
          </div>
          <div class="col-solvers">
            ${solvers}명
          </div>
          <div class="col-accuracy">
            ${accuracy}%
          </div>
        </div>
      `;
    })
    .join('');
}

export function renderCatalog(
  category = 'all',
  searchQuery = '',
  difficulty = 'all',
  examType = 'all'
): void {
  const root = UICore.getRoot();
  if (!root) return;
  const categories = DataManager.getCategories();
  const questions = DataManager.searchQuestions(searchQuery, category, difficulty, examType);

  const tableBody = document.querySelector('.pg-table-body');
  const countEl = document.querySelector('.pg-list-count');
  const searchInput = document.getElementById('catalog-search-input');

  // Fast partial update if catalog DOM is already mounted
  if (tableBody && countEl && searchInput && State.view === 'catalog') {
    tableBody.innerHTML = renderCatalogRows(questions);
    countEl.innerHTML = `<strong>${questions.length}</strong> 문제`;
    return;
  }

  root.innerHTML = `
    <div class="app-container" style="padding-top: 2rem; padding-bottom: 5rem; max-width: 1080px;">
      <!-- Programmers Top Problem Search Bar -->
      <div class="pg-search-container">
        <div class="pg-search-input-wrap">
          <input
            type="search"
            id="catalog-search-input"
            value="${searchQuery}"
            placeholder="풀고 싶은 문제 제목, 기출문제 검색"
            class="pg-search-input"
          />
          <button class="pg-search-btn" id="btn-search-trigger" aria-label="검색">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <!-- Programmers Dropdown Filter Pills -->
        <div class="pg-filter-dropdowns">
          <div class="pg-filter-select-wrap">
            <select class="pg-filter-select" id="filter-difficulty">
              <option value="all" ${difficulty === 'all' ? 'selected' : ''}>난이도 전체</option>
              <option value="Lv. 1" ${difficulty === 'Lv. 1' ? 'selected' : ''}>Lv. 1 (초급)</option>
              <option value="Lv. 2" ${difficulty === 'Lv. 2' ? 'selected' : ''}>Lv. 2 (중급)</option>
              <option value="Lv. 3" ${difficulty === 'Lv. 3' ? 'selected' : ''}>Lv. 3 (고급)</option>
            </select>
            <svg class="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>

          <div class="pg-filter-select-wrap">
            <select class="pg-filter-select" id="filter-category-select">
              <option value="all" ${category === 'all' ? 'selected' : ''}>영역 (전체)</option>
              ${categories
                .map((c) => {
                  const catName = typeof c === 'string' ? c : c.id || c.name;
                  return `<option value="${catName}" ${category === catName ? 'selected' : ''}>${catName}</option>`;
                })
                .join('')}
            </select>
            <svg class="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>

          <div class="pg-filter-select-wrap">
            <select class="pg-filter-select" id="filter-type">
              <option value="all" ${examType === 'all' ? 'selected' : ''}>기출문제 모음</option>
              <option value="1차" ${examType === '1차' ? 'selected' : ''}>2025 훈민정음 평가원 1차</option>
              <option value="2차" ${examType === '2차' ? 'selected' : ''}>2025 훈민정음 평가원 2차</option>
              <option value="3차" ${examType === '3차' ? 'selected' : ''}>2025 훈민정음 평가원 3차</option>
            </select>
            <svg class="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </div>

      <!-- Problem List Header Counter & Sorter -->
      <div class="pg-list-header">
        <div class="pg-list-count">
          <strong>${questions.length}</strong> 문제
        </div>
        <div class="pg-list-sort">
          <span>최신순</span>
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>

      <!-- Programmers Flat Minimal Table List -->
      <div class="pg-table-card">
        <div class="pg-table-head">
          <div class="col-status">상태</div>
          <div class="col-title">제목</div>
          <div class="col-level">난이도</div>
          <div class="col-solvers">완료한 사람</div>
          <div class="col-accuracy">정답률</div>
        </div>

        <div class="pg-table-body">
          ${renderCatalogRows(questions)}
        </div>
      </div>
    </div>
  `;
}
