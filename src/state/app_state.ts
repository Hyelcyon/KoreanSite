// Application State Machine

import { AppView, ExamMode } from '../types/state.js';
import { Question, UserAnswerRecord, ExamResultRecord } from '../types/korean.js';
import { Storage } from '../services/storage.js';
import { DataManager, EnrichedQuestion } from '../services/data_manager.js';

export interface CombinerState {
  cho: string;
  jung: string;
  jong: string;
}

export interface StoredSessionPayload {
  mode: ExamMode;
  activeCategory: string;
  routeSource?: string;
  questionIds: number[];
  currentIndex: number;
  userAnswers: UserAnswerRecord[];
  isAnswered: boolean;
  selectedOption: number | null;
  elapsedSeconds: number;
}

export class AppStateManager {
  view: AppView = 'dashboard';
  mode: ExamMode = 'exam';
  activeCategory = 'all';
  routeSource = '실전 모의고사 (20제)';
  sessionQuestions: (Question | EnrichedQuestion)[] = [];
  currentIndex = 0;
  userAnswers: UserAnswerRecord[] = [];
  isAnswered = false;
  selectedOption: number | null = null;
  startTime: number | null = null;
  timerInterval: number | null = null;
  elapsedSeconds = 0;
  currentHeroSlide = 0;

  combiner: CombinerState = {
    cho: 'ᄫ',
    jung: 'ᅵ',
    jong: ''
  };

  saveSessionToStorage(): void {
    try {
      const payload: StoredSessionPayload = {
        mode: this.mode,
        activeCategory: this.activeCategory,
        routeSource: this.routeSource,
        questionIds: this.sessionQuestions.map((q) => q.id),
        currentIndex: this.currentIndex,
        userAnswers: this.userAnswers,
        isAnswered: this.isAnswered,
        selectedOption: this.selectedOption,
        elapsedSeconds: this.elapsedSeconds
      };
      sessionStorage.setItem('alphagh_active_quiz_session', JSON.stringify(payload));
    } catch (err) {
      console.error('Session save error', err);
    }
  }

  restoreSessionFromStorage(): boolean {
    try {
      const raw = sessionStorage.getItem('alphagh_active_quiz_session');
      if (!raw) return false;
      const payload: StoredSessionPayload = JSON.parse(raw);
      if (!payload || !payload.questionIds || payload.questionIds.length === 0) return false;

      const questions = payload.questionIds
        .map((id) => DataManager.getQuestionById(id))
        .filter((q): q is EnrichedQuestion => Boolean(q));

      if (questions.length === 0) return false;

      this.mode = payload.mode || 'exam';
      this.activeCategory = payload.activeCategory || 'all';
      this.routeSource = payload.routeSource || '실전 모의고사 (20제)';
      this.sessionQuestions = questions;
      this.currentIndex = Math.min(payload.currentIndex || 0, questions.length - 1);
      this.userAnswers = payload.userAnswers || [];
      this.isAnswered = payload.isAnswered || false;
      this.selectedOption = payload.selectedOption ?? null;
      this.elapsedSeconds = payload.elapsedSeconds || 0;
      this.view = 'quiz';
      this.startTimer();
      return true;
    } catch (err) {
      console.error('Session restore error', err);
      return false;
    }
  }

  clearSessionStorage(): void {
    sessionStorage.removeItem('alphagh_active_quiz_session');
  }

  startSession(
    mode: ExamMode,
    questions: (Question | EnrichedQuestion)[],
    category = 'all',
    routeSource: string | null = null
  ): void {
    this.mode = mode;
    this.activeCategory = category;
    this.sessionQuestions = questions;
    this.routeSource =
      routeSource ||
      {
        exam: '실전 모의고사 (20제)',
        infinite: '전체 문항 챌린지',
        review: '오답노트 & 복습',
        single: '문항 검색 & 색인',
        category: category !== 'all' ? category : '영역별 학습'
      }[mode] ||
      '국어 평가';
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;
    this.selectedOption = null;
    this.view = 'quiz';
    this.elapsedSeconds = 0;
    this.startTimer();
    this.saveSessionToStorage();
    sessionStorage.setItem('alphagh_current_view', 'quiz');
    window.location.hash = '#quiz';
  }

  startTimer(): void {
    this.stopTimer();
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      if (this.startTime) {
        this.elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
      }
      const timerEl = document.getElementById('session-timer');
      if (timerEl) {
        const mins = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, '0');
        const secs = String(this.elapsedSeconds % 60).padStart(2, '0');
        timerEl.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getCurrentQuestion(): (Question | EnrichedQuestion) | null {
    return this.sessionQuestions[this.currentIndex] || null;
  }

  answerCurrentQuestion(optionIndex: number): boolean | undefined {
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
      question: currentQ
    });

    Storage.updateStats(isCorrect);
    if (!isCorrect) {
      Storage.recordWrongAnswer(currentQ.id);
    } else {
      Storage.removeWrongAnswer(currentQ.id);
    }
    this.saveSessionToStorage();
    return isCorrect;
  }

  nextQuestion(): boolean {
    if (this.currentIndex + 1 < this.sessionQuestions.length) {
      this.currentIndex += 1;
      this.isAnswered = false;
      this.selectedOption = null;
      this.saveSessionToStorage();
      return true;
    }
    return false;
  }

  finishSession(): ExamResultRecord {
    this.stopTimer();
    this.clearSessionStorage();
    this.view = 'result';

    const total = this.userAnswers.length;
    const correctCount = this.userAnswers.filter((a) => a.isCorrect).length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    const record: ExamResultRecord = {
      date: new Date().toISOString(),
      mode: this.mode,
      category: this.activeCategory,
      total,
      correctCount,
      correct: correctCount,
      score: percentage,
      percentage,
      elapsedSeconds: this.elapsedSeconds,
      timeSpent: this.elapsedSeconds
    };

    Storage.saveExamResult(record);
    return record;
  }
}

export const State = new AppStateManager();
