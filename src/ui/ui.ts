// Unified UI Facade Layer

import { UICore } from './ui_core.js';
import { renderDashboard } from './views/dashboard.js';
import { renderQuiz } from './views/quiz.js';
import { renderResult } from './views/result.js';
import { renderCatalog, renderCatalogRows } from './views/catalog.js';
import { renderCombiner } from './views/combiner.js';
import { renderCorpus } from './views/corpus.js';
import { renderWrongNotes } from './views/wrong_notes.js';
import { renderInfoHome } from './views/info_home.js';
import { renderPythonIDE, PythonIDE } from './views/python_ide.js';
import { ExamResultRecord, Question } from '../types/korean.js';
import { EnrichedQuestion } from '../services/data_manager.js';

export const UI = {
  getRoot(): HTMLElement | null {
    return UICore.getRoot();
  },

  escapeHtml(str: string): string {
    return UICore.escapeHtml(str);
  },

  showSafetyToast(message: string, type: 'info' | 'success' | 'warning' = 'info'): void {
    UICore.showSafetyToast(message, type);
  },

  renderDashboard(): void {
    renderDashboard();
  },

  renderQuiz(): void {
    renderQuiz();
  },

  renderResult(record: ExamResultRecord): void {
    renderResult(record);
  },

  renderCatalogRows(questions: EnrichedQuestion[] | Question[]): string {
    return renderCatalogRows(questions as EnrichedQuestion[]);
  },

  renderCatalog(
    category = 'all',
    searchQuery = '',
    difficulty = 'all',
    examType = 'all'
  ): void {
    renderCatalog(category, searchQuery, difficulty, examType);
  },

  renderCombiner(): void {
    renderCombiner();
  },

  renderCorpus(): void {
    renderCorpus();
  },

  renderWrongNotes(): void {
    renderWrongNotes();
  },

  transitionHeroSlide(targetIndex: number): void {
    UICore.transitionHeroSlide(targetIndex, () => renderDashboard());
  },

  renderBlankPage(pageTitle = ''): void {
    UICore.renderBlankPage(pageTitle);
  },

  renderInfoHome(): void {
    renderInfoHome();
  },

  renderPythonIDE(): void {
    renderPythonIDE();
  },

  PythonIDE
};

export type UIManager = typeof UI;
