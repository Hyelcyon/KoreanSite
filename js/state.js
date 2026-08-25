// Application state management

import { Storage } from './storage.js';

export class AppState {
  constructor() {
    this.view = 'dashboard'; // 'dashboard' | 'quiz' | 'result' | 'catalog' | 'review' | 'corpus'
    this.mode = 'exam'; // 'exam' (20 Qs) | 'infinite' | 'category' | 'single'
    this.activeCategory = 'all';

    // Quiz Session
    this.sessionQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = []; // array of { questionId, selectedOption, isCorrect, timeSpent }
    this.isAnswered = false;
    this.selectedOption = null;

    // Timer
    this.startTime = null;
    this.timerInterval = null;
    this.elapsedSeconds = 0;

    // Stats cache
    this.stats = Storage.getStats();
  }

  startSession(mode, questions, category = 'all') {
    this.mode = mode;
    this.activeCategory = category;
    this.sessionQuestions = questions;
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    this.selectedOption = null;
    this.view = 'quiz';
    this.elapsedSeconds = 0;
    this.startTimer();
  }

  startTimer() {
    this.stopTimer();
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
      const timerEl = document.getElementById('session-timer');
      if (timerEl) {
        const mins = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, '0');
        const secs = String(this.elapsedSeconds % 60).padStart(2, '0');
        timerEl.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getCurrentQuestion() {
    return this.sessionQuestions[this.currentIndex] || null;
  }

  answerCurrentQuestion(optionIndex) {
    if (this.isAnswered) return;
    const currentQ = this.getCurrentQuestion();
    if (!currentQ) return;

    this.isAnswered = true;
    this.selectedOption = optionIndex;
    const isCorrect = optionIndex === currentQ.answer;

    this.userAnswers.push({
      questionId: currentQ.id,
      selectedOption: optionIndex,
      isCorrect,
      question: currentQ,
    });

    // Update persistent stats
    this.stats = Storage.updateStats(isCorrect);

    if (!isCorrect) {
      Storage.recordWrongAnswer(currentQ.id);
    } else {
      Storage.removeWrongAnswer(currentQ.id);
    }

    return isCorrect;
  }

  nextQuestion() {
    if (this.currentIndex + 1 < this.sessionQuestions.length) {
      this.currentIndex += 1;
      this.isAnswered = false;
      this.selectedOption = null;
      return true;
    }
    return false;
  }

  finishSession() {
    this.stopTimer();
    this.view = 'result';

    // Calculate score
    const total = this.userAnswers.length;
    const correctCount = this.userAnswers.filter((a) => a.isCorrect).length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    const resultRecord = {
      date: new Date().toISOString(),
      mode: this.mode,
      category: this.activeCategory,
      total,
      correctCount,
      percentage,
      elapsedSeconds: this.elapsedSeconds,
    };

    Storage.saveExamResult(resultRecord);
    return resultRecord;
  }
}

export const appState = new AppState();
