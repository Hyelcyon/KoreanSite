// LocalStorage persistence for user stats, wrong answers, and bookmarks

const STORAGE_KEYS = {
  THEME: 'mk_quiz_theme',
  STATS: 'mk_quiz_stats',
  BOOKMARKS: 'mk_quiz_bookmarks',
  WRONG_ANSWERS: 'mk_quiz_wrong_answers',
  HISTORY: 'mk_quiz_history',
};

export const Storage = {
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  },

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  getStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.STATS);
      return raw ? JSON.parse(raw) : { totalSolved: 0, totalCorrect: 0, streak: 0, maxStreak: 0 };
    } catch {
      return { totalSolved: 0, totalCorrect: 0, streak: 0, maxStreak: 0 };
    }
  },

  updateStats(isCorrect) {
    const stats = this.getStats();
    stats.totalSolved += 1;
    if (isCorrect) {
      stats.totalCorrect += 1;
      stats.streak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
    } else {
      stats.streak = 0;
    }
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    return stats;
  },

  getBookmarks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark(questionId) {
    const bookmarks = this.getBookmarks();
    const index = bookmarks.indexOf(questionId);
    if (index > -1) {
      bookmarks.splice(index, 1);
    } else {
      bookmarks.push(questionId);
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return bookmarks.includes(questionId);
  },

  isBookmarked(questionId) {
    return this.getBookmarks().includes(questionId);
  },

  getWrongAnswers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  recordWrongAnswer(questionId) {
    const list = this.getWrongAnswers();
    if (!list.includes(questionId)) {
      list.push(questionId);
      localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(list));
    }
  },

  removeWrongAnswer(questionId) {
    const list = this.getWrongAnswers();
    const index = list.indexOf(questionId);
    if (index > -1) {
      list.splice(index, 1);
      localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(list));
    }
  },

  saveExamResult(result) {
    try {
      const history = this.getExamHistory();
      history.unshift(result);
      if (history.length > 50) history.pop();
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    } catch {
      // Ignore storage errors
    }
  },

  getExamHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },
};
