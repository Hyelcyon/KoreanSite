// App State & Storage Type Definitions

import { Question, UserAnswerRecord } from './korean.js';

export type AppView =
  | 'dashboard'
  | 'korean-home'
  | 'exam'
  | 'quiz'
  | 'result'
  | 'catalog'
  | 'combiner'
  | 'corpus'
  | 'wrong'
  | 'info'
  | 'info-home'
  | 'python-learn'
  | 'social'
  | 'english';

export type ExamMode = 'exam' | 'infinite' | 'category' | 'single' | 'review';

export interface AppStats {
  totalSolved: number;
  totalCorrect: number;
  streak: number;
  maxStreak: number;
}

export interface SessionStats {
  mode: ExamMode;
  questions: Question[];
  currentIndex: number;
  answers: UserAnswerRecord[];
  isAnswered: boolean;
  selectedOption: number | null;
  elapsedSeconds: number;
}
