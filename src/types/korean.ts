// Korean Linguistic & Exam Type Definitions

export interface Question {
  id: number;
  category: string;
  subcategory?: string;
  type?: string;
  difficulty?: string;
  passage?: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  _searchTokens?: string;
}

export interface QuestionCategory {
  id: string;
  name: string;
  description?: string;
  count?: number;
}

export interface QuestionsData {
  title: string;
  version?: string;
  total_questions: number;
  categories: string[] | QuestionCategory[];
  questions: Question[];
}

export interface CorpusEntry {
  hanja: string;
  dongguk: string;
  modern: string;
  rule: string;
}

export interface CorpusSection {
  id: string;
  title: string;
  authentic_unspaced_middle_korean?: string;
  phonetic_spaced_korean?: string;
  modern_korean?: string;
  linguistic_notes?: Record<string, string>;
  entries?: CorpusEntry[];
}

export interface CorpusData {
  corpus_name: string;
  version: string;
  created_at: string;
  sections: CorpusSection[];
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  question: Question;
}

export interface ExamResultRecord {
  date: string;
  mode?: string;
  category?: string;
  total: number;
  correctCount?: number;
  correct: number;
  score: number;
  percentage?: number;
  elapsedSeconds?: number;
  timeSpent: number;
  categories?: Record<string, { total: number; correct: number }>;
}
