import React, { useMemo } from 'react';
import { useAppStore } from '../../stores/useAppStore.js';
import { useQuizStore } from '../../stores/useQuizStore.js';
import { DataManager, EnrichedQuestion } from '../../services/data_manager.js';
import { QuestionCategory } from '../../types/korean.js';

export const CatalogView: React.FC = () => {
  const {
    catalogCategory,
    catalogQuery,
    catalogDifficulty,
    catalogExamType,
    setCatalogFilter,
  } = useAppStore();

  const { startSession } = useQuizStore();

  const categories = useMemo(() => DataManager.getCategories(), []);

  const filteredQuestions: EnrichedQuestion[] = useMemo(() => {
    return DataManager.filterQuestions(
      catalogCategory,
      catalogQuery,
      catalogDifficulty,
      catalogExamType
    );
  }, [catalogCategory, catalogQuery, catalogDifficulty, catalogExamType]);

  const handleSolveSingle = (q: EnrichedQuestion) => {
    startSession('single', [q]);
  };

  return (
    <div className="app-container" style={{ paddingTop: '2rem', paddingBottom: '5rem', maxWidth: '1080px' }}>
      {/* Programmers Top Problem Search Bar */}
      <div className="pg-search-container">
        <div className="pg-search-input-wrap">
          <input
            type="search"
            id="catalog-search-input"
            value={catalogQuery}
            onChange={(e) => setCatalogFilter(undefined, e.target.value)}
            placeholder="풀고 싶은 문제 제목, 기출문제 검색"
            className="pg-search-input"
          />
          <button className="pg-search-btn" id="btn-search-trigger" aria-label="검색">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Programmers Dropdown Filter Pills */}
        <div className="pg-filter-dropdowns">
          <div className="pg-filter-select-wrap">
            <select
              className="pg-filter-select"
              id="filter-difficulty"
              value={catalogDifficulty}
              onChange={(e) => setCatalogFilter(undefined, undefined, e.target.value)}
            >
              <option value="all">난이도 전체</option>
              <option value="Lv. 1">Lv. 1 (초급)</option>
              <option value="Lv. 2">Lv. 2 (중급)</option>
              <option value="Lv. 3">Lv. 3 (고급)</option>
            </select>
            <svg className="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          <div className="pg-filter-select-wrap">
            <select
              className="pg-filter-select"
              id="filter-category-select"
              value={catalogCategory}
              onChange={(e) => setCatalogFilter(e.target.value)}
            >
              <option value="all">영역 (전체)</option>
              {categories.map((c) => {
                const catName = typeof c === 'string' ? c : (c as QuestionCategory).name || (c as QuestionCategory).id;
                return (
                  <option key={catName} value={catName}>
                    {catName}
                  </option>
                );
              })}
            </select>
            <svg className="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          <div className="pg-filter-select-wrap">
            <select
              className="pg-filter-select"
              id="filter-type"
              value={catalogExamType}
              onChange={(e) => setCatalogFilter(undefined, undefined, undefined, e.target.value)}
            >
              <option value="all">기출문제 모음</option>
              <option value="1차">2025 훈민정음 평가원 1차</option>
              <option value="2차">2025 훈민정음 평가원 2차</option>
              <option value="3차">2025 훈민정음 평가원 3차</option>
            </select>
            <svg className="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Problem List Header Counter & Sorter */}
      <div className="pg-list-header">
        <div className="pg-list-count">
          <strong>{filteredQuestions.length}</strong> 문제
        </div>
        <div className="pg-list-sort">
          <span>최신순</span>
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Programmers Flat Minimal Table List */}
      <div className="pg-table-card">
        <div className="pg-table-head">
          <div className="col-status">상태</div>
          <div className="col-title">제목</div>
          <div className="col-level">난이도</div>
          <div className="col-solvers">완료한 사람</div>
          <div className="col-accuracy">정답률</div>
        </div>

        <div className="pg-table-body">
          {filteredQuestions.map((q) => {
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
            const mockSource = q._mockSource || `2025 훈민정음 평가원 하반기 ${(q.id % 3) + 1}차`;

            return (
              <div key={q.id} className="pg-table-row" data-id={q.id}>
                <div className="col-status">
                  <span className="status-dot"></span>
                </div>
                <div className="col-title">
                  <div className="pg-title-row">
                    <a
                      href="#quiz"
                      className="pg-problem-title btn-solve-single"
                      data-id={q.id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSolveSingle(q);
                      }}
                    >
                      {q.question}
                    </a>
                    <span className="pg-level-badge" style={{ color: levelColor }}>
                      {levelText}
                    </span>
                  </div>
                  <span className="pg-problem-sub">
                    {mockSource} &middot; {q.category}
                  </span>
                  <div className="pg-mobile-stats-row">
                    <span className="pg-stat-solvers">{solvers}명</span>
                    <span className="pg-stat-accuracy">정답률 {accuracy}%</span>
                  </div>
                </div>
                <div className="col-level" style={{ color: levelColor }}>
                  {levelText}
                </div>
                <div className="col-solvers">{solvers}명</div>
                <div className="col-accuracy">{accuracy}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
