// Quiz & Middle Korean Assessment Store (Zustand)

import { create } from 'zustand';
import { DataManager, EnrichedQuestion } from '../services/data_manager.js';
import { Storage } from '../services/storage.js';
import { ExamResultRecord, Question } from '../types/korean.js';
import { useAppStore } from './useAppStore.js';

export type QuizMode = 'all' | 'random10' | 'random20' | 'mockExam' | 'single' | 'wrongReview';

interface QuizStore {
  mode: QuizMode;
  questions: EnrichedQuestion[];
  currentIndex: number;
  userAnswers: Record<number, number>;
  isAnswered: boolean;
  selectedOption: number | null;
  timerSeconds: number;
  timerActive: boolean;
  lastExamResult: ExamResultRecord | null;

  startSession: (mode: QuizMode, customQuestions?: (EnrichedQuestion | Question)[]) => void;
  answerQuestion: (optionIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  finishQuiz: () => void;
  finishSession: () => void;
  tickTimer: () => void;
  resetSession: () => void;
  toggleBookmark: (qId: number) => void;
}

let timerInterval: number | null = null;

export const useQuizStore = create<QuizStore>((set, get) => ({
  mode: 'all',
  questions: [],
  currentIndex: 0,
  userAnswers: {},
  isAnswered: false,
  selectedOption: null,
  timerSeconds: 0,
  timerActive: false,
  lastExamResult: null,

  startSession: (mode, customQuestions) => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    let questionsList: EnrichedQuestion[] = [];
    if (customQuestions && customQuestions.length > 0) {
      questionsList = customQuestions.map((q, idx) => ({
        ...q,
        _searchTokens: (q as EnrichedQuestion)._searchTokens || `${q.question} ${q.category}`.toLowerCase(),
        _mockSource: (q as EnrichedQuestion)._mockSource || `2025 훈민정음 평가원 하반기 ${(q.id % 3) + 1}차`,
        _originalIndex: (q as EnrichedQuestion)._originalIndex ?? idx,
      }));
    } else {
      switch (mode) {
        case 'random10':
          questionsList = DataManager.getRandomQuestions(10);
          break;
        case 'random20':
          questionsList = DataManager.getRandomQuestions(20);
          break;
        case 'mockExam':
          questionsList = DataManager.getMockExam(20);
          break;
        case 'all':
        default:
          questionsList = DataManager.getAllQuestions();
          break;
      }
    }

    set({
      mode,
      questions: questionsList,
      currentIndex: 0,
      userAnswers: {},
      isAnswered: false,
      selectedOption: null,
      timerSeconds: 0,
      timerActive: true,
      lastExamResult: null,
    });

    timerInterval = window.setInterval(() => {
      get().tickTimer();
    }, 1000);

    useAppStore.getState().setRoute('quiz');
  },

  tickTimer: () => {
    if (get().timerActive) {
      set((s) => ({ timerSeconds: s.timerSeconds + 1 }));
    }
  },

  answerQuestion: (optionIndex) => {
    const { questions, currentIndex, isAnswered, userAnswers } = get();
    if (isAnswered) return;

    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    const isCorrect = optionIndex === currentQ.answer;
    const nextAnswers = { ...userAnswers, [currentQ.id]: optionIndex };

    Storage.recordAnswer(currentQ.id, isCorrect);

    set({
      userAnswers: nextAnswers,
      isAnswered: true,
      selectedOption: optionIndex,
    });
  },

  nextQuestion: () => {
    const { currentIndex, questions, finishQuiz } = get();
    if (currentIndex + 1 < questions.length) {
      const nextIdx = currentIndex + 1;
      const nextQ = questions[nextIdx];
      const prevAnswer = get().userAnswers[nextQ?.id ?? -1];

      set({
        currentIndex: nextIdx,
        isAnswered: prevAnswer !== undefined,
        selectedOption: prevAnswer !== undefined ? prevAnswer : null,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      finishQuiz();
    }
  },

  prevQuestion: () => {
    const { currentIndex, questions } = get();
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      const prevQ = questions[prevIdx];
      const prevAnswer = get().userAnswers[prevQ?.id ?? -1];

      set({
        currentIndex: prevIdx,
        isAnswered: prevAnswer !== undefined,
        selectedOption: prevAnswer !== undefined ? prevAnswer : null,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  jumpToQuestion: (index) => {
    const { questions } = get();
    if (index >= 0 && index < questions.length) {
      const targetQ = questions[index];
      const prevAnswer = get().userAnswers[targetQ?.id ?? -1];

      set({
        currentIndex: index,
        isAnswered: prevAnswer !== undefined,
        selectedOption: prevAnswer !== undefined ? prevAnswer : null,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  finishQuiz: () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    const { questions, userAnswers, timerSeconds, mode } = get();
    let correctCount = 0;
    const catMap: Record<string, { total: number; correct: number }> = {};

    questions.forEach((q) => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.answer;
      if (isCorrect) correctCount += 1;

      if (!catMap[q.category]) catMap[q.category] = { total: 0, correct: 0 };
      catMap[q.category].total += 1;
      if (isCorrect) catMap[q.category].correct += 1;
    });

    const total = questions.length;
    const score = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    const resultRecord: ExamResultRecord = {
      date: new Date().toISOString(),
      mode,
      category: 'all',
      total,
      correctCount,
      correct: correctCount,
      score,
      percentage: score,
      elapsedSeconds: timerSeconds,
      timeSpent: timerSeconds,
      categories: catMap,
    };

    Storage.saveExamResult(resultRecord);

    set({
      timerActive: false,
      lastExamResult: resultRecord,
    });

    useAppStore.getState().setRoute('result');
  },

  finishSession: () => {
    get().finishQuiz();
  },

  resetSession: () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    set({
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      isAnswered: false,
      selectedOption: null,
      timerSeconds: 0,
      timerActive: false,
      lastExamResult: null,
    });
  },

  toggleBookmark: (qId) => {
    Storage.toggleBookmark(qId);
    set((s) => ({ ...s })); // trigger reactivity
  },
}));
