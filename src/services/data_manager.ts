// Korean Linguistic Data Query and Search Utilities

import { Question, QuestionCategory, CorpusData } from '../types/korean.js';
import { DATA_QUESTIONS, DATA_CORPUS } from '../data/korean_data.js';

export interface EnrichedQuestion extends Question {
  _searchTokens: string;
  _mockSource: string;
  _originalIndex?: number;
}

export const DataManager = {
  questions: (DATA_QUESTIONS.questions || []).map((q, idx) => {
    const enriched: EnrichedQuestion = {
      ...q,
      _originalIndex: idx,
      _searchTokens: [
        q.question,
        q.explanation,
        q.subcategory || '',
        q.category,
        ...(q.options || [])
      ].join(' ').toLowerCase(),
      _mockSource: '2025 훈민정음 평가원 하반기 ' + ((q.id % 3) + 1) + '차'
    };
    return enriched;
  }),

  categories: (DATA_QUESTIONS.categories || []) as (string | QuestionCategory)[],
  corpus: (DATA_CORPUS || null) as CorpusData | null,

  getAllQuestions(): EnrichedQuestion[] {
    return this.questions;
  },

  getQuestionById(id: number): EnrichedQuestion | undefined {
    return this.questions.find((q) => q.id === id);
  },

  getCategories(): (string | QuestionCategory)[] {
    return this.categories;
  },

  getByCategory(category: string): EnrichedQuestion[] {
    if (!category || category === 'all') return this.questions;
    return this.questions.filter((q) => q.category === category);
  },

  getRandomSample(count = 20, category: string | null = null): EnrichedQuestion[] {
    const pool = category ? this.getByCategory(category) : [...this.questions];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },

  getRandomQuestions(count = 10, category: string | null = null): EnrichedQuestion[] {
    return this.getRandomSample(count, category);
  },

  getMockExam(count = 20): EnrichedQuestion[] {
    return this.getRandomSample(count);
  },

  filterQuestions(
    category = 'all',
    query = '',
    difficulty = 'all',
    examType = 'all'
  ): EnrichedQuestion[] {
    return this.searchQuestions(query, category, difficulty, examType);
  },

  searchQuestions(
    query = '',
    category = 'all',
    difficulty = 'all',
    examType = 'all'
  ): EnrichedQuestion[] {
    let pool = this.questions;

    if (category && category !== 'all') {
      pool = pool.filter((q) => q.category === category);
    }

    if (difficulty && difficulty !== 'all') {
      const diffMap: Record<string, string> = {
        'Lv. 1': '초급',
        '초급': '초급',
        'Lv. 2': '중급',
        '중급': '중급',
        'Lv. 3': '고급',
        '고급': '고급'
      };
      const targetDiff = diffMap[difficulty];
      if (targetDiff) pool = pool.filter((q) => q.difficulty === targetDiff);
    }

    if (examType && examType !== 'all') {
      pool = pool.filter((q) => q._mockSource.includes(examType));
    }

    if (!query || !query.trim()) return pool;
    const qText = query.trim().toLowerCase();
    return pool.filter((item) => item._searchTokens.includes(qText));
  },

  getCorpus(): CorpusData | null {
    return this.corpus;
  }
};
