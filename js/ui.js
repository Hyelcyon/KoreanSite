// UI Renderers, Transitions, and Component Views

import { appState } from './state.js';
import { dataManager } from './data.js';
import { Storage } from './storage.js';

export const UI = {
  get root() {
    return document.getElementById('app-root');
  },

  renderHeaderStats() {
    const stats = Storage.getStats();
    const solvedEl = document.getElementById('stat-solved');
    const accuracyEl = document.getElementById('stat-accuracy');
    const streakEl = document.getElementById('stat-streak');

    if (solvedEl) solvedEl.textContent = `${stats.totalSolved}문제 풀이`;
    if (accuracyEl) {
      const acc = stats.totalSolved > 0 ? Math.round((stats.totalCorrect / stats.totalSolved) * 100) : 0;
      accuracyEl.textContent = `정답률 ${acc}%`;
    }
    if (streakEl) streakEl.textContent = `연속 정답 ${stats.streak}회`;
  },

  renderDashboard() {
    const totalCount = dataManager.getAllQuestions().length;
    const wrongCount = Storage.getWrongAnswers().length;
    const bookmarkCount = Storage.getBookmarks().length;

    this.root.innerHTML = `
      <section class="hero-banner">
        <span class="hero-badge">15세기 국어학 정밀 연구 및 문제 은행</span>
        <h1 class="hero-title">훈민정음 해례본과 중세국어 500제 종합 평가원</h1>
        <p class="hero-desc">
          세종대왕의 훈민정음 창제 원리(상형·가획), 동국정운식 이상적 한자음 체계, 15세기 소실 문자와 중세국어 문법을 총망라한 500문항 국가 표준 국어학 평가 시스템입니다.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" id="btn-start-exam">실전 모의고사 20제 시작</button>
          <button class="btn btn-secondary" id="btn-start-infinite">무한 챌린지 모드</button>
          <button class="btn btn-outline" id="btn-view-corpus">훈민정음 원문 강독</button>
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="mode-card" id="card-exam">
          <div>
            <span class="badge badge-category">EXAM MODE</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; margin: 0.6rem 0 0.4rem 0;">
              표준 실전 모의고사
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
              500제 문제 은행에서 전 영역을 골고루 안배한 20문항을 무작위 추출하여 제한 시간 내에 실력을 진단합니다.
            </p>
          </div>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
            20문항 | 타이머 기록 | 영역별 분석
          </div>
        </div>

        <div class="mode-card" id="card-category">
          <div>
            <span class="badge badge-category">CATEGORY DRILL</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; margin: 0.6rem 0 0.4rem 0;">
              영역별 집중 심화 학습
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
              훈민정음 해례본, 동국정운, 소실 문자, 중세국어 문법, 고전문헌 등 5대 영역 중 취약한 영역만 골라 학습합니다.
            </p>
          </div>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
            5대 핵심 영역 | 난이도별 필터
          </div>
        </div>

        <div class="mode-card" id="card-review">
          <div>
            <span class="badge badge-category">REVIEW & NOTE</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; margin: 0.6rem 0 0.4rem 0;">
              오답 노트 및 북마크
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
              틀린 문제(현재 ${wrongCount}개)와 중요 표시한 북마크(현재 ${bookmarkCount}개)를 모아 완벽히 숙달할 때까지 복습합니다.
            </p>
          </div>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
            오답 ${wrongCount}건 | 북마크 ${bookmarkCount}건
          </div>
        </div>
      </section>
    `;
    this.renderHeaderStats();
  },

  renderQuiz() {
    const q = appState.getCurrentQuestion();
    if (!q) {
      this.renderDashboard();
      return;
    }

    const totalInSession = appState.sessionQuestions.length;
    const currentNum = appState.currentIndex + 1;
    const progressPercent = Math.round((currentNum / totalInSession) * 100);
    const isBookmarked = Storage.isBookmarked(q.id);

    let diffClass = 'badge-diff-easy';
    if (q.difficulty === '중급') diffClass = 'badge-diff-medium';
    if (q.difficulty === '고급') diffClass = 'badge-diff-hard';

    this.root.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="question-card">
          <div class="question-header">
            <div class="question-meta">
              <span class="question-number">문항 ${currentNum} / ${totalInSession}</span>
              <span class="badge badge-category">${q.category}</span>
              <span class="badge ${diffClass}">${q.difficulty}</span>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
                ${q.subcategory}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span id="session-timer" style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">
                00:00
              </span>
              <button class="btn btn-outline" id="btn-toggle-bookmark" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;">
                ${isBookmarked ? '북마크 해제' : '북마크 추가'}
              </button>
            </div>
          </div>

          <h2 class="question-title">${q.question}</h2>

          <div class="options-list" id="options-container">
            ${q.options
              .map((opt, idx) => {
                let stateClass = '';
                if (appState.isAnswered) {
                  if (idx === q.answer) stateClass = 'correct';
                  else if (idx === appState.selectedOption) stateClass = 'incorrect';
                }
                return `
                  <button class="option-item ${stateClass}" data-index="${idx}" ${appState.isAnswered ? 'disabled' : ''}>
                    <span class="option-key">[${idx + 1}]</span>
                    <span class="option-text">${opt}</span>
                  </button>
                `;
              })
              .join('')}
          </div>

          ${
            appState.isAnswered
              ? `
              <div class="explanation-box">
                <div class="explanation-title">
                  ${appState.selectedOption === q.answer ? '정답입니다' : '오답입니다 (정답: ' + (q.answer + 1) + '번)'}
                </div>
                <div class="explanation-text">${q.explanation}</div>
              </div>
              <div style="display: flex; justify-content: flex-end; margin-top: 1rem; gap: 0.75rem;">
                ${
                  currentNum < totalInSession
                    ? `<button class="btn btn-primary" id="btn-next-question">다음 문항 [Enter / Space]</button>`
                    : `<button class="btn btn-primary" id="btn-finish-quiz">결과 성적표 확인</button>`
                }
              </div>
            `
              : `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
                <span>키보드 1~4 번을 눌러 즉시 선택할 수 있습니다.</span>
                <button class="btn btn-outline" id="btn-quit-quiz" style="padding: 0.3rem 0.6rem;">그만두기</button>
              </div>
            `
          }
        </div>
      </div>
    `;

    this.renderHeaderStats();
  },

  renderResult(record) {
    const total = record.total;
    const correct = record.correctCount;
    const pct = record.percentage;
    const mins = Math.floor(record.elapsedSeconds / 60);
    const secs = record.elapsedSeconds % 60;

    // Calculate category breakdowns from session answers
    const catMap = {};
    appState.userAnswers.forEach((ans) => {
      const cat = ans.question.category;
      if (!catMap[cat]) catMap[cat] = { total: 0, correct: 0 };
      catMap[cat].total += 1;
      if (ans.isCorrect) catMap[cat].correct += 1;
    });

    this.root.innerHTML = `
      <div class="quiz-container">
        <div class="scorecard-hero">
          <span class="hero-badge">평가 종합 성적표</span>
          <div class="score-number">${pct}점</div>
          <div class="score-label">${total}문항 중 ${correct}문항 정답 | 총 소요시간 ${mins}분 ${secs}초</div>
          <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem;">
            <button class="btn btn-primary" id="btn-retry-exam">새 모의고사 응시</button>
            <button class="btn btn-secondary" id="btn-review-wrong">오답 및 취약점 검토</button>
            <button class="btn btn-outline" id="btn-go-home">홈으로 복귀</button>
          </div>
        </div>

        <h3 style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem;">
          영역별 성취도 분석
        </h3>
        <div class="category-stats-grid">
          ${Object.entries(catMap)
            .map(([catName, stats]) => {
              const catPct = Math.round((stats.correct / stats.total) * 100);
              return `
                <div class="cat-stat-card">
                  <div class="cat-stat-header">
                    <span>${catName}</span>
                    <span style="font-family: var(--font-mono);">${stats.correct}/${stats.total} (${catPct}%)</span>
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
    `;
  },

  renderCatalog(category = 'all', searchQuery = '') {
    const categories = dataManager.getCategories();
    const questions = dataManager.searchQuestions(searchQuery, category);

    this.root.innerHTML = `
      <div>
        <div style="margin-bottom: 1.5rem;">
          <h2 style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700;">중세국어 500제 전체 문항 색인</h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
            원하는 영역을 필터링하거나 검색어를 입력하여 특정 문항을 즉시 열람하고 풀이할 수 있습니다.
          </p>
        </div>

        <!-- Virtual Keyboard Toolbar -->
        <div class="vk-toolbar">
          <span class="vk-label">중세국어 자모 입력기:</span>
          ${['ㆍ', 'ㅸ', 'ㅿ', 'ㆁ', 'ㆆ', 'ᅟ', 'ᅠ', 'ᅀ', 'ᅌ', 'ᄠ', 'ᄡ', 'ᄣ']
            .map((k) => `<button class="vk-key" data-char="${k}">${k}</button>`)
            .join('')}
        </div>

        <div class="filter-bar">
          <div class="category-tags">
            <button class="cat-btn ${category === 'all' ? 'active' : ''}" data-cat="all">전체 (500)</button>
            ${categories
              .map((c) => {
                const count = dataManager.getByCategory(c).length;
                return `<button class="cat-btn ${category === c ? 'active' : ''}" data-cat="${c}">${c} (${count})</button>`;
              })
              .join('')}
          </div>
          <div style="display: flex; gap: 0.5rem; flex: 1; max-width: 320px;">
            <input
              type="search"
              id="catalog-search-input"
              value="${searchQuery}"
              placeholder="문항 내용 또는 해설 검색..."
              style="width: 100%; padding: 0.45rem 0.85rem; border-radius: 6px; border: 1px solid var(--border-medium); background: var(--surface-1); color: var(--text-primary); font-size: 0.85rem;"
            />
          </div>
        </div>

        <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem; font-family: var(--font-mono);">
          검색 결과: 총 ${questions.length}문항
        </div>

        <div class="catalog-table-wrapper">
          <table class="catalog-table">
            <thead>
              <tr>
                <th style="width: 70px;">번호</th>
                <th style="width: 130px;">영역</th>
                <th>문항 질문</th>
                <th style="width: 80px;">난이도</th>
                <th style="width: 90px; text-align: center;">풀이</th>
              </tr>
            </thead>
            <tbody>
              ${questions
                .slice(0, 100)
                .map((q) => {
                  return `
                    <tr data-id="${q.id}">
                      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--text-muted);">${q.id}</td>
                      <td><span class="badge badge-category">${q.category}</span></td>
                      <td style="font-weight: 600;">${q.question}</td>
                      <td>${q.difficulty}</td>
                      <td style="text-align: center;">
                        <button class="btn btn-outline btn-solve-single" data-id="${q.id}" style="padding: 0.25rem 0.55rem; font-size: 0.75rem;">
                          풀기
                        </button>
                      </td>
                    </tr>
                  `;
                })
                .join('')}
            </tbody>
          </table>
          ${
            questions.length > 100
              ? `<div style="padding: 1rem; text-align: center; font-size: 0.82rem; color: var(--text-muted);">처음 100개 문항을 표시 중입니다. 검색어로 범위를 좁혀보세요.</div>`
              : ''
          }
        </div>
      </div>
    `;
  },

  renderCorpus() {
    const corpus = dataManager.getCorpus();
    if (!corpus) {
      this.root.innerHTML = `<div style="padding: 2rem; text-align: center;">문헌 데이터를 불러올 수 없습니다.</div>`;
      return;
    }

    this.root.innerHTML = `
      <div style="max-width: var(--max-width-reading); margin: 0 auto;">
        <div style="margin-bottom: 2rem;">
          <span class="badge badge-category">국립국어원 표준 자료</span>
          <h2 style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; margin-top: 0.5rem;">
            15세기 훈민정음 및 중세국어 원문 아카이브
          </h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">
            1446년 훈민정음 해례본 어제 서문, 1448년 동국정운 한자음 표기 체계, 1459년 월인석보 훈민정음언해를 집대성한 공식 학술 원문입니다.
          </p>
        </div>

        <div style="background-color: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-elevation-1); margin-bottom: 2rem;">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; margin-bottom: 1rem; color: var(--accent-primary);">
            훈민정음 언해본 서문 (1459)
          </h3>
          <div style="font-family: var(--font-serif); font-size: 1.15rem; line-height: 1.8; padding: 1.25rem; background-color: var(--surface-2); border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
            나랏말ᄊᆞ미 中國에 달아 文字와로 서르 ᄉᆞᄆᆞᆺ디 아니ᄒᆞᆯᄊᆡ 이런 젼ᄎᆞ로 어린 百姓이 니르고져 홇 배 이셔도 ᄆᆞᄎᆞᆷ내 제 ᄠᅳ들 시러 펴디 못ᄒᆞᆯ 노미 하니라 내 이ᄅᆞᆯ 爲ᄒᆞ야 어엿비 너겨 새로 스믈여듧 字ᄅᆞᆯ ᄆᆡᇰᄀᆞ노니 사ᄅᆞᆷ마다 ᄒᆡᅇᅧ 수ᄫᅵ 니겨 날로 ᄡᅮ메 便安킈 ᄒᆞ고져 ᄒᆞᆯ ᄯᆞᄅᆞ미니라
          </div>
          <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
            <strong>현대어 풀이:</strong> 우리나라 말이 중국과 달라 문자와 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 말하고자 하는 바가 있어도 마침내 제 뜻을 능히 펴지 못하는 사람이 많으니라. 내가 이를 불쌍히 여겨 새로 스물여덟 자를 만드니, 모든 사람으로 하여금 쉽게 익혀 날마다 쓰는 데 편안하게 하고자 할 따름이니라.
          </div>
        </div>

        <div style="background-color: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-elevation-1);">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; font-weight: 700; margin-bottom: 1rem; color: var(--accent-primary);">
            동국정운식 한자음 대표 표기 대조표 (1448)
          </h3>
          <div class="catalog-table-wrapper">
            <table class="catalog-table">
              <thead>
                <tr>
                  <th>한자 (漢字)</th>
                  <th>동국정운식 표기</th>
                  <th>현대 한자음</th>
                  <th>적용 표기 규칙</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700;">世</td>
                  <td style="font-family: var(--font-serif); font-weight: 700; color: var(--accent-primary);">솅</td>
                  <td>세</td>
                  <td>형식 종성 'ㅇ' 부착 (3성 체계 완비)</td>
                </tr>
                <tr>
                  <td style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700;">國</td>
                  <td style="font-family: var(--font-serif); font-weight: 700; color: var(--accent-primary);">귁</td>
                  <td>국</td>
                  <td>중고음(홍무정운) 원음 '위' 모음 반영</td>
                </tr>
                <tr>
                  <td style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700;">月</td>
                  <td style="font-family: var(--font-serif); font-weight: 700; color: var(--accent-primary);">워ᇹ</td>
                  <td>월</td>
                  <td>이영보래 (ㄹ 받침 뒤 여린히읗 ㆆ 덧붙임)</td>
                </tr>
                <tr>
                  <td style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700;">日</td>
                  <td style="font-family: var(--font-serif); font-weight: 700; color: var(--accent-primary);">ᅀᅵᇹ</td>
                  <td>일</td>
                  <td>이영보래 + 반치음(ㅿ) 초성 반영</td>
                </tr>
                <tr>
                  <td style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700;">斗</td>
                  <td style="font-family: var(--font-serif); font-weight: 700; color: var(--accent-primary);">둉</td>
                  <td>두</td>
                  <td>형식 종성 'ㅇ' 부착</td>
                </tr>
                <tr>
                  <td style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 700;">便</td>
                  <td style="font-family: var(--font-serif); font-weight: 700; color: var(--accent-primary);">뼌</td>
                  <td>편</td>
                  <td>전탁 초성 'ㅃ' 유성음 원음 반영</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },
};
