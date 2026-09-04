// Type-Safe LocalStorage Manager

import { AppStats } from '../types/state.js';
import { ExamResultRecord } from '../types/korean.js';

const STORAGE_KEYS = {
  STATS: 'mk_quiz_stats',
  BOOKMARKS: 'mk_quiz_bookmarks',
  WRONG_ANSWERS: 'mk_quiz_wrong_answers',
  HISTORY: 'mk_quiz_history',
  THEME: 'mk_quiz_theme',
  USER_HISTORY: 'mk_quiz_user_history'
};

export interface ExtendedStats extends AppStats {
  incorrectCount?: number;
  history?: Record<number, { correct: number; incorrect: number }>;
}

export const Storage = {
  getTheme(): string {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  },

  setTheme(theme: string): void {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  getStats(): AppStats {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.STATS);
      return raw ? JSON.parse(raw) : { totalSolved: 0, totalCorrect: 0, streak: 0, maxStreak: 0 };
    } catch {
      return { totalSolved: 0, totalCorrect: 0, streak: 0, maxStreak: 0 };
    }
  },

  getUserStats(): ExtendedStats {
    const base = this.getStats();
    const wrong = this.getWrongAnswers();
    let userHist: Record<number, { correct: number; incorrect: number }> = {};
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_HISTORY);
      if (raw) userHist = JSON.parse(raw);
    } catch {}

    return {
      ...base,
      incorrectCount: wrong.length,
      history: userHist
    };
  },

  updateStats(isCorrect: boolean): AppStats {
    const stats = this.getStats();
    stats.totalSolved += 1;
    if (isCorrect) {
      stats.totalCorrect += 1;
      stats.streak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
    } else {
      stats.streak = 0;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch {
      // Storage quota or privacy mode error handling
    }
    return stats;
  },

  recordAnswer(questionId: number, isCorrect: boolean): void {
    this.updateStats(isCorrect);
    if (!isCorrect) {
      this.recordWrongAnswer(questionId);
    } else {
      this.removeWrongAnswer(questionId);
    }

    try {
      let userHist: Record<number, { correct: number; incorrect: number }> = {};
      const raw = localStorage.getItem(STORAGE_KEYS.USER_HISTORY);
      if (raw) userHist = JSON.parse(raw);
      if (!userHist[questionId]) userHist[questionId] = { correct: 0, incorrect: 0 };
      if (isCorrect) userHist[questionId].correct += 1;
      else userHist[questionId].incorrect += 1;
      localStorage.setItem(STORAGE_KEYS.USER_HISTORY, JSON.stringify(userHist));
    } catch {}
  },

  getBookmarks(): number[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark(questionId: number): boolean {
    const bookmarks = this.getBookmarks();
    const idx = bookmarks.indexOf(questionId);
    if (idx > -1) {
      bookmarks.splice(idx, 1);
    } else {
      bookmarks.push(questionId);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch {
      // Ignore
    }
    return bookmarks.includes(questionId);
  },

  isBookmarked(questionId: number): boolean {
    return this.getBookmarks().includes(questionId);
  },

  getWrongAnswers(): number[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  recordWrongAnswer(questionId: number): void {
    const list = this.getWrongAnswers();
    if (!list.includes(questionId)) {
      list.push(questionId);
      try {
        localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(list));
      } catch {
        // Ignore
      }
    }
  },

  removeWrongAnswer(questionId: number): void {
    const list = this.getWrongAnswers();
    const idx = list.indexOf(questionId);
    if (idx > -1) {
      list.splice(idx, 1);
      try {
        localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(list));
      } catch {
        // Ignore
      }
    }
  },

  saveExamResult(result: ExamResultRecord): void {
    try {
      const history = this.getExamHistory();
      history.unshift(result);
      if (history.length > 50) history.pop();
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    } catch {
      // Ignore
    }
  },

  getExamHistory(): ExamResultRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  getExamResults(): ExamResultRecord[] {
    return this.getExamHistory();
  },

  clearUserData(): void {
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.WRONG_ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.USER_HISTORY);
  }
};
