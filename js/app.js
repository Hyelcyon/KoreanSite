// Main application controller & event router

import { dataManager } from './data.js';
import { appState } from './state.js';
import { UI } from './ui.js';
import { Storage } from './storage.js';

class App {
  async init() {
    // 1. Initialize Theme
    const savedTheme = Storage.getTheme();
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.textContent = savedTheme === 'dark' ? '라이트 모드' : '다크 모드';
    }

    // 2. Load Linguistic Data
    await dataManager.init();

    // 3. Bind Global Listeners
    this.bindEvents();
    this.bindKeyboardShortcuts();

    // 4. Initial Render
    UI.renderDashboard();
  }

  bindEvents() {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        Storage.setTheme(next);
        themeBtn.textContent = next === 'dark' ? '라이트 모드' : '다크 모드';
      });
    }

    // Nav Tabs
    document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Delegated click handling on document
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Nav Tab Button Click
      const navBtn = target.closest('.nav-tab-btn');
      if (navBtn) {
        const tab = navBtn.getAttribute('data-tab');
        this.switchTab(tab);
        return;
      }

      // Start Exam
      if (target.closest('#btn-start-exam') || target.closest('#card-exam')) {
        const sample = dataManager.getRandomSample(20);
        appState.startSession('exam', sample);
        UI.renderQuiz();
        return;
      }

      // Start Infinite Mode
      if (target.closest('#btn-start-infinite')) {
        const allShuffled = dataManager.getRandomSample(500);
        appState.startSession('infinite', allShuffled);
        UI.renderQuiz();
        return;
      }

      // View Corpus
      if (target.closest('#btn-view-corpus')) {
        this.switchTab('corpus');
        return;
      }

      // Category Drill Card
      if (target.closest('#card-category')) {
        this.switchTab('catalog');
        return;
      }

      // Review Note Card
      if (target.closest('#card-review') || target.closest('#btn-review-wrong')) {
        this.startReviewSession();
        return;
      }

      // Option Selection in Quiz
      const optionBtn = target.closest('.option-item');
      if (optionBtn && !appState.isAnswered) {
        const index = parseInt(optionBtn.getAttribute('data-index'), 10);
        appState.answerCurrentQuestion(index);
        UI.renderQuiz();
        return;
      }

      // Next Question
      if (target.closest('#btn-next-question')) {
        appState.nextQuestion();
        UI.renderQuiz();
        return;
      }

      // Finish Quiz
      if (target.closest('#btn-finish-quiz')) {
        const record = appState.finishSession();
        UI.renderResult(record);
        return;
      }

      // Retry Exam
      if (target.closest('#btn-retry-exam')) {
        const sample = dataManager.getRandomSample(20);
        appState.startSession('exam', sample);
        UI.renderQuiz();
        return;
      }

      // Go Home
      if (target.closest('#btn-go-home') || target.closest('#btn-quit-quiz')) {
        appState.stopTimer();
        appState.view = 'dashboard';
        this.switchTab('dashboard');
        return;
      }

      // Toggle Bookmark in Quiz
      if (target.closest('#btn-toggle-bookmark')) {
        const q = appState.getCurrentQuestion();
        if (q) {
          Storage.toggleBookmark(q.id);
          UI.renderQuiz();
        }
        return;
      }

      // Solve Single Question from Catalog
      const solveBtn = target.closest('.btn-solve-single');
      if (solveBtn) {
        const qId = parseInt(solveBtn.getAttribute('data-id'), 10);
        const q = dataManager.getQuestionById(qId);
        if (q) {
          appState.startSession('single', [q]);
          UI.renderQuiz();
        }
        return;
      }

      // Category filter buttons in Catalog
      const catBtn = target.closest('.cat-btn');
      if (catBtn) {
        const cat = catBtn.getAttribute('data-cat');
        const input = document.getElementById('catalog-search-input');
        const query = input ? input.value : '';
        UI.renderCatalog(cat, query);
        return;
      }

      // Virtual Keyboard Click in Catalog
      const vkKey = target.closest('.vk-key');
      if (vkKey) {
        const char = vkKey.getAttribute('data-char');
        const input = document.getElementById('catalog-search-input');
        if (input) {
          input.value += char;
          input.focus();
          const activeCatBtn = document.querySelector('.cat-btn.active');
          const currentCat = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';
          UI.renderCatalog(currentCat, input.value);
        }
        return;
      }
    });

    // Catalog live search input
    document.addEventListener('input', (e) => {
      if (e.target.id === 'catalog-search-input') {
        const query = e.target.value;
        const activeCatBtn = document.querySelector('.cat-btn.active');
        const currentCat = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';
        UI.renderCatalog(currentCat, query);
      }
    });
  }

  switchTab(tab) {
    document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    appState.stopTimer();

    if (tab === 'dashboard') {
      appState.view = 'dashboard';
      UI.renderDashboard();
    } else if (tab === 'exam') {
      const sample = dataManager.getRandomSample(20);
      appState.startSession('exam', sample);
      UI.renderQuiz();
    } else if (tab === 'catalog') {
      appState.view = 'catalog';
      UI.renderCatalog('all', '');
    } else if (tab === 'corpus') {
      appState.view = 'corpus';
      UI.renderCorpus();
    }
  }

  startReviewSession() {
    const wrongIds = Storage.getWrongAnswers();
    const bookmarkIds = Storage.getBookmarks();
    const combinedIds = Array.from(new Set([...wrongIds, ...bookmarkIds]));

    if (combinedIds.length === 0) {
      alert('현재 저장된 오답 또는 북마크 문항이 없습니다. 먼저 문제를 풀어보세요.');
      return;
    }

    const reviewQuestions = combinedIds
      .map((id) => dataManager.getQuestionById(id))
      .filter(Boolean);

    appState.startSession('review', reviewQuestions);
    UI.renderQuiz();
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ignore if user is focused inside a search input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (appState.view === 'quiz') {
        // Option selection (1-4)
        if (['1', '2', '3', '4'].includes(e.key) && !appState.isAnswered) {
          const index = parseInt(e.key, 10) - 1;
          appState.answerCurrentQuestion(index);
          UI.renderQuiz();
          return;
        }

        // Enter or Space for Next Question
        if (['Enter', ' '].includes(e.key) && appState.isAnswered) {
          e.preventDefault();
          const currentNum = appState.currentIndex + 1;
          const total = appState.sessionQuestions.length;
          if (currentNum < total) {
            appState.nextQuestion();
            UI.renderQuiz();
          } else {
            const record = appState.finishSession();
            UI.renderResult(record);
          }
          return;
        }

        // 'b' or 'B' to toggle bookmark
        if (e.key.toLowerCase() === 'b') {
          const q = appState.getCurrentQuestion();
          if (q) {
            Storage.toggleBookmark(q.id);
            UI.renderQuiz();
          }
          return;
        }

        // 'Escape' to quit quiz
        if (e.key === 'Escape') {
          appState.stopTimer();
          appState.view = 'dashboard';
          this.switchTab('dashboard');
          return;
        }
      }
    });
  }
}

const app = new App();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

