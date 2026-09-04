// Application Global Navigation & Layout Store (Zustand)

import { create } from 'zustand';

export type AppView =
  | 'dashboard'
  | 'korean-home'
  | 'quiz'
  | 'result'
  | 'catalog'
  | 'combiner'
  | 'corpus'
  | 'wrong'
  | 'info-home'
  | 'python-learn'
  | 'social-home'
  | 'english-home';

export interface ToastState {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface AppStore {
  activeView: AppView;
  activeNavTab: 'exam' | 'social' | 'english' | 'info';
  headerCollapsed: boolean;
  mobileDrawerOpen: boolean;
  mobileActiveTab: string;
  toast: ToastState | null;
  catalogCategory: string;
  catalogQuery: string;
  catalogDifficulty: string;
  catalogExamType: string;

  setRoute: (view: AppView, syncHash?: boolean) => void;
  setActiveNavTab: (tab: 'exam' | 'social' | 'english' | 'info') => void;
  toggleHeaderCollapsed: () => void;
  setMobileDrawerOpen: (open: boolean) => void;
  setMobileActiveTab: (tab: string) => void;
  setCatalogFilter: (category?: string, query?: string, difficulty?: string, examType?: string) => void;
  showToast: (message: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
  closeToast: () => void;
}

let toastTimer: number | null = null;

export const useAppStore = create<AppStore>((set, get) => ({
  activeView: 'dashboard',
  activeNavTab: 'exam',
  headerCollapsed: false,
  mobileDrawerOpen: false,
  mobileActiveTab: 'm-cat-korean',
  toast: null,
  catalogCategory: 'all',
  catalogQuery: '',
  catalogDifficulty: 'all',
  catalogExamType: 'all',

  setRoute: (view, syncHash = true) => {
    let tab: 'exam' | 'social' | 'english' | 'info' = 'exam';
    if (view === 'info-home' || view === 'python-learn') tab = 'info';
    else if (view === 'social-home') tab = 'social';
    else if (view === 'english-home') tab = 'english';

    set({ activeView: view, activeNavTab: tab, mobileDrawerOpen: false });

    if (syncHash && typeof window !== 'undefined') {
      window.location.hash = '#' + view;
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  },

  setActiveNavTab: (tab) => set({ activeNavTab: tab }),

  toggleHeaderCollapsed: () => {
    const next = !get().headerCollapsed;
    set({ headerCollapsed: next });
    try {
      localStorage.setItem('site_header_collapsed', String(next));
    } catch {}
  },

  setMobileDrawerOpen: (open) => set({ mobileDrawerOpen: open }),
  setMobileActiveTab: (tab) => set({ mobileActiveTab: tab }),

  setCatalogFilter: (category, query, difficulty, examType) => {
    set((state) => ({
      catalogCategory: category !== undefined ? category : state.catalogCategory,
      catalogQuery: query !== undefined ? query : state.catalogQuery,
      catalogDifficulty: difficulty !== undefined ? difficulty : state.catalogDifficulty,
      catalogExamType: examType !== undefined ? examType : state.catalogExamType,
    }));
  },

  showToast: (message, type = 'info') => {
    if (toastTimer) clearTimeout(toastTimer);
    const newToast: ToastState = { id: Date.now(), message, type };
    set({ toast: newToast });
    toastTimer = window.setTimeout(() => {
      set({ toast: null });
    }, 2800);
  },

  closeToast: () => {
    if (toastTimer) clearTimeout(toastTimer);
    set({ toast: null });
  },
}));
