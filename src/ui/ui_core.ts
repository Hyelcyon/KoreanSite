// UI Core DOM Utilities, Toasts, and Shared Renderers

import { DiagnosticProblem } from '../services/python_linter.js';
import { HERO_SLIDES } from '../data/carousel_data.js';
import { State } from '../state/app_state.js';

export const UICore = {
  getRoot(): HTMLElement | null {
    return document.getElementById('app-root');
  },

  escapeHtml(str: string): string {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  showSafetyToast(message: string, type: 'info' | 'success' | 'warning' = 'info'): void {
    const existing = document.querySelector('.ide-safety-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'ide-safety-toast';
    toast.style.cssText =
      'position: fixed !important; bottom: 28px !important; right: 20px !important; background: #252526 !important; color: #cccccc !important; border: 1px solid #3c3c3c !important; border-left: 1px solid #3c3c3c !important; border-radius: 4px !important; padding: 8px 12px !important; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.55) !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, Roboto, sans-serif !important; font-size: 12px !important; z-index: 10000 !important; display: flex !important; align-items: center !important; gap: 8px !important; animation: slideInToast 160ms cubic-bezier(0.16, 1, 0.3, 1) !important;';

    const isSuccess = type === 'success' || message.includes('일치합니다') || message.includes('완료');
    const iconSvg = isSuccess
      ? `<svg viewBox="0 0 16 16" width="14" height="14" fill="#4ec9b0" style="flex-shrink: 0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>`
      : `<svg viewBox="0 0 16 16" width="14" height="14" fill="#3794ff" style="flex-shrink: 0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-2.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0v-.5zm0 2.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-4z"/></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span style="font-size: 12px; color: #cccccc; line-height: 1.4;">${this.escapeHtml(message)}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 160ms ease, transform 160ms ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      setTimeout(() => toast.remove(), 180);
    }, 2600);
  },

  getFileIconSvg(fileName: string): string {
    if (fileName && fileName.endsWith('.py')) {
      return `<svg viewBox="0 0 24 24" width="14" height="14" style="flex-shrink: 0; display: inline-block; vertical-align: middle;"><path fill="#387eb8" d="M11.93 0C6.01 0 6.38 2.57 6.38 2.57l-.01 2.66h5.65v.8H3.95S0 5.57 0 11.51c0 5.94 3.45 5.74 3.45 5.74h2.05v-2.88s-.11-3.45 3.39-3.45h5.84s3.28 0 3.28-3.23V3.28S18.36 0 11.93 0zm-3.07 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"/><path fill="#ffe052" d="M12.07 24c5.92 0 5.55-2.57 5.55-2.57l.01-2.66h-5.65v-.8h8.07S24 18.43 24 12.49c0-5.94-3.45-5.74-3.45-5.74h-2.05v2.88s.11 3.45-3.39 3.45H9.27s-3.28 0-3.28 3.23v4.39S5.64 24 12.07 24zm3.07-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/></svg>`;
    }
    return `<svg viewBox="0 0 16 16" width="14" height="14" fill="#858585" style="flex-shrink: 0; display: inline-block; vertical-align: middle;"><path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5L9 1zm3 13H4V2h4v4h4v8z"/></svg>`;
  },

  renderLineNumbersHtml(lineCount: number, problems: DiagnosticProblem[] = []): string {
    return this.renderVirtualizedLineNumbersHtml(0, lineCount, problems);
  },

  renderVirtualizedLineNumbersHtml(
    startLine: number,
    endLine: number,
    problems: DiagnosticProblem[] | Map<number, DiagnosticProblem[]> = []
  ): string {
    let probMap: Map<number, DiagnosticProblem[]>;
    if (problems instanceof Map) {
      probMap = problems;
    } else {
      probMap = new Map<number, DiagnosticProblem[]>();
      for (let i = 0; i < problems.length; i++) {
        const p = problems[i];
        if (!p) continue;
        const list = probMap.get(p.line);
        if (list) list.push(p);
        else probMap.set(p.line, [p]);
      }
    }

    const lines: string[] = [];
    for (let lineNum = startLine + 1; lineNum <= endLine; lineNum++) {
      const pList = probMap.get(lineNum);
      const p = pList && pList[0];
      if (p) {
        const markerClass = p.severity === 'warning' ? 'ide-line-warning-marker' : 'ide-line-error-marker';
        lines.push(`<span class="${markerClass}" title="${this.escapeHtml(p.message)}"></span>${lineNum}`);
      } else {
        lines.push(`${lineNum}`);
      }
    }
    return lines.join('<br>');
  },

  transitionHeroSlide(targetIndex: number, renderDashboardCallback: () => void): void {
    const section = document.getElementById('hero-banner-section');
    const content = document.querySelector('.pg-hero-content');
    const graphic = document.querySelector('.pg-hero-graphic');
    if (!section || !content || !graphic) {
      State.currentHeroSlide = targetIndex;
      renderDashboardCallback();
      return;
    }

    content.classList.remove('fade-in', 'enter-prep');
    graphic.classList.remove('fade-in', 'enter-prep');
    content.classList.add('fade-out');
    graphic.classList.add('fade-out');

    setTimeout(() => {
      State.currentHeroSlide = targetIndex;
      const slide = HERO_SLIDES[targetIndex];
      if (!slide) return;

      section.className = `pg-hero-section ${slide.theme}`;

      const badgeEl = document.getElementById('hero-badge');
      const titleEl = document.getElementById('hero-title');
      const descEl = document.getElementById('hero-desc');
      const counterEl = document.querySelector('.pagination-current');

      if (badgeEl) badgeEl.innerHTML = `<span>${slide.badge}</span>`;
      if (titleEl) titleEl.innerHTML = slide.title;
      if (descEl) descEl.innerHTML = slide.desc;
      if (counterEl) counterEl.textContent = String(targetIndex + 1);

      content.classList.remove('fade-out');
      graphic.classList.remove('fade-out');
      content.classList.add('enter-prep');
      graphic.classList.add('enter-prep');

      void (content as HTMLElement).offsetHeight;

      content.classList.remove('enter-prep');
      graphic.classList.remove('enter-prep');
      content.classList.add('fade-in');
      graphic.classList.add('fade-in');

      setTimeout(() => {
        content.classList.remove('fade-in');
        graphic.classList.remove('fade-in');
      }, 420);
    }, 200);
  },

  renderBlankPage(pageTitle = ''): void {
    const root = this.getRoot();
    if (!root) return;
    root.innerHTML = `
      <div style="min-height: calc(100vh - 180px); background: #ffffff; display: flex; align-items: center; justify-content: center; padding: 4rem 1.5rem;">
        ${pageTitle ? `<div style="text-align: center; color: #94a3b8; font-size: 1.1rem; font-weight: 500;">${pageTitle}</div>` : ''}
      </div>
    `;
  }
};
