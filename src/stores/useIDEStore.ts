// Python 3.14 Interactive IDE & Educational Workspace Store (Zustand)

import { create } from 'zustand';
import { IDEFileSystem, IDEFileMap } from '../services/ide_filesystem.js';
import { DiagnosticProblem, lintPythonCode } from '../services/python_linter.js';
import { PyodideRunner } from '../services/pyodide_runner.js';
import { PYTHON_TUTORIAL_DATA } from '../data/python_curriculum.js';

interface IDEStore {
  files: IDEFileMap;
  folders: string[];
  activeFile: string | null;
  openTabs: string[];
  dirtyFiles: Record<string, boolean>;

  // Drawer & Sidebar State
  activeDrawerTab: 'problems' | 'output' | 'terminal';
  isTerminalDrawerClosed: boolean;
  isTerminalMaximized: boolean;
  isTerminalSplit: boolean;
  isTerminalMenuOpen: boolean;
  isTerminalMoreMenuOpen: boolean;
  isSecondarySidebarOpen: boolean;
  isLearnFolderCollapsed: boolean;
  selectedExplorerFolder: string | null;
  collapsedFolders: Record<string, boolean>;

  // Widths & Heights
  explorerWidth: number;
  secondarySidebarWidth: number;
  terminalDrawerHeight: number;

  // Terminal & REPL State
  terminalSessions: string[];
  activeTerminalId: string;
  terminalOutputs: Record<string, string>;
  outputLogs: string;

  // Diagnostics & IntelliSense
  ideProblems: DiagnosticProblem[];

  // Tutorial / Curriculum Gates
  currentTutorialStep: number;
  chapterScrolled: Record<number, boolean>;
  chapterExecuted: Record<number, boolean>;
  completedChapters: Record<number, boolean>;

  // Actions
  initIDE: () => void;
  openFile: (path: string) => void;
  closeTab: (path: string) => void;
  reorderTabs: (sourceIndex: number, targetIndex: number) => void;
  createFile: (filePath: string, content?: string) => void;
  deleteFile: (filePath: string) => void;
  saveFileContent: (filePath: string, content: string) => void;
  createFolder: (folderPath: string) => void;
  deleteFolder: (folderPath: string) => void;
  setFileDirty: (filePath: string, isDirty: boolean) => void;

  // UI Toggles
  setActiveDrawerTab: (tab: 'problems' | 'output' | 'terminal') => void;
  toggleTerminalDrawer: () => void;
  toggleTerminalMaximized: () => void;
  toggleTerminalSplit: () => void;
  toggleSecondarySidebar: () => void;
  toggleLearnFolder: () => void;
  toggleFolderCollapse: (folder: string) => void;
  setSelectedFolder: (folder: string | null) => void;

  // Terminal Actions
  addTerminalSession: () => void;
  switchTerminalSession: (sessionId: string) => void;
  deleteTerminalSession: (sessionId: string) => void;
  clearTerminalOutput: (sessionId?: string) => void;
  appendTerminalOutput: (sessionId: string, text: string) => void;

  // Tutorial Actions
  setTutorialStep: (step: number) => void;
  setChapterScrolled: (step: number) => void;
  setChapterExecuted: (step: number) => void;
  completeChapter: (step: number) => void;

  // Code Execution & Linting
  runCurrentCode: () => Promise<void>;
  lintCode: (code: string, filePath: string) => void;
}

export const useIDEStore = create<IDEStore>((set, get) => ({
  files: IDEFileSystem.getFiles(),
  folders: IDEFileSystem.getFolders(),
  activeFile: 'main.py',
  openTabs: ['main.py'],
  dirtyFiles: {},

  activeDrawerTab: 'terminal',
  isTerminalDrawerClosed: false,
  isTerminalMaximized: false,
  isTerminalSplit: false,
  isTerminalMenuOpen: false,
  isTerminalMoreMenuOpen: false,
  isSecondarySidebarOpen: true,
  isLearnFolderCollapsed: false,
  selectedExplorerFolder: null,
  collapsedFolders: {},

  explorerWidth: 240,
  secondarySidebarWidth: 460,
  terminalDrawerHeight: 220,

  terminalSessions: ['1: pwsh'],
  activeTerminalId: '1: pwsh',
  terminalOutputs: {},
  outputLogs: '',

  ideProblems: [],

  currentTutorialStep: (() => {
    try {
      const saved = sessionStorage.getItem('python_tutorial_step');
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  })(),
  chapterScrolled: {},
  chapterExecuted: {},
  completedChapters: {},

  initIDE: () => {
    const files = IDEFileSystem.getFiles();
    const folders = IDEFileSystem.getFolders();
    const active = files['main.py'] ? 'main.py' : Object.keys(files)[0] || 'main.py';
    set({ files, folders, activeFile: active, openTabs: [active] });

    // Pre-warm Pyodide runtime asynchronously
    PyodideRunner.init().catch(() => {});
  },

  openFile: (path) => {
    const { openTabs, files } = get();
    if (!files[path] && files[path] !== '') return;
    const newTabs = openTabs.includes(path) ? openTabs : [...openTabs, path];
    set({ activeFile: path, openTabs: newTabs });
    IDEFileSystem.saveOpenTabs(newTabs);
  },

  closeTab: (path) => {
    const { openTabs, activeFile } = get();
    const nextTabs = openTabs.filter((t) => t !== path);
    let nextActive = activeFile;
    if (activeFile === path) {
      nextActive = nextTabs[nextTabs.length - 1] || null;
    }
    set({ openTabs: nextTabs, activeFile: nextActive });
    IDEFileSystem.saveOpenTabs(nextTabs);
  },

  reorderTabs: (sourceIndex: number, targetIndex: number) => {
    const { openTabs } = get();
    if (
      sourceIndex < 0 ||
      sourceIndex >= openTabs.length ||
      targetIndex < 0 ||
      targetIndex >= openTabs.length ||
      sourceIndex === targetIndex
    ) {
      return;
    }
    const nextTabs = [...openTabs];
    const [moved] = nextTabs.splice(sourceIndex, 1);
    if (moved) {
      nextTabs.splice(targetIndex, 0, moved);
      set({ openTabs: nextTabs });
      IDEFileSystem.saveOpenTabs(nextTabs);
    }
  },

  createFile: (filePath, content = '') => {
    const { files, openTabs } = get();
    const cleanPath = filePath.trim().replace(/^\/+/, '');
    if (!cleanPath) return;

    const nextFiles = { ...files, [cleanPath]: content };
    IDEFileSystem.saveFiles(nextFiles);
    const nextTabs = openTabs.includes(cleanPath) ? openTabs : [...openTabs, cleanPath];
    IDEFileSystem.saveOpenTabs(nextTabs);

    set({ files: nextFiles, activeFile: cleanPath, openTabs: nextTabs });
  },

  deleteFile: (filePath) => {
    const { files, openTabs, activeFile } = get();
    const nextFiles = { ...files };
    delete nextFiles[filePath];
    IDEFileSystem.saveFiles(nextFiles);

    const nextTabs = openTabs.filter((t) => t !== filePath);
    let nextActive = activeFile;
    if (activeFile === filePath) {
      nextActive = nextTabs[nextTabs.length - 1] || Object.keys(nextFiles)[0] || null;
    }

    set({ files: nextFiles, openTabs: nextTabs, activeFile: nextActive });
    IDEFileSystem.saveOpenTabs(nextTabs);
  },

  saveFileContent: (filePath, content) => {
    const { files, dirtyFiles } = get();
    const nextFiles = { ...files, [filePath]: content };
    IDEFileSystem.saveFiles(nextFiles);

    const nextDirty = { ...dirtyFiles };
    delete nextDirty[filePath];

    set({ files: nextFiles, dirtyFiles: nextDirty });
  },

  createFolder: (folderPath) => {
    const { folders } = get();
    const clean = folderPath.trim().replace(/^\/+/, '').replace(/\/+$/, '');
    if (!clean || folders.includes(clean)) return;

    const nextFolders = [...folders, clean];
    IDEFileSystem.saveFolders(nextFolders);
    set({ folders: nextFolders });
  },

  deleteFolder: (folderPath) => {
    const { folders, files, openTabs, activeFile } = get();
    const prefix = folderPath.endsWith('/') ? folderPath : folderPath + '/';
    const nextFolders = folders.filter((f) => f !== folderPath && !f.startsWith(prefix));
    IDEFileSystem.saveFolders(nextFolders);

    const nextFiles = { ...files };
    Object.keys(nextFiles).forEach((k) => {
      if (k.startsWith(prefix)) delete nextFiles[k];
    });
    IDEFileSystem.saveFiles(nextFiles);

    const nextTabs = openTabs.filter((t) => !t.startsWith(prefix));
    let nextActive = activeFile;
    if (activeFile && activeFile.startsWith(prefix)) {
      nextActive = nextTabs[0] || Object.keys(nextFiles)[0] || null;
    }

    set({ folders: nextFolders, files: nextFiles, openTabs: nextTabs, activeFile: nextActive });
  },

  setFileDirty: (filePath, isDirty) => {
    set((s) => {
      const nextDirty = { ...s.dirtyFiles };
      if (isDirty) nextDirty[filePath] = true;
      else delete nextDirty[filePath];
      return { dirtyFiles: nextDirty };
    });
  },

  setActiveDrawerTab: (tab) => set({ activeDrawerTab: tab, isTerminalDrawerClosed: false }),
  toggleTerminalDrawer: () => set((s) => ({ isTerminalDrawerClosed: !s.isTerminalDrawerClosed })),
  toggleTerminalMaximized: () => set((s) => ({ isTerminalMaximized: !s.isTerminalMaximized })),
  toggleTerminalSplit: () => set((s) => ({ isTerminalSplit: !s.isTerminalSplit })),
  toggleSecondarySidebar: () => set((s) => ({ isSecondarySidebarOpen: !s.isSecondarySidebarOpen })),
  toggleLearnFolder: () => set((s) => ({ isLearnFolderCollapsed: !s.isLearnFolderCollapsed })),
  toggleFolderCollapse: (folder) =>
    set((s) => ({
      collapsedFolders: { ...s.collapsedFolders, [folder]: !s.collapsedFolders[folder] },
    })),
  setSelectedFolder: (folder) => set({ selectedExplorerFolder: folder }),

  addTerminalSession: () => {
    const { terminalSessions } = get();
    const maxNum = terminalSessions.reduce((max, s) => {
      const num = parseInt(s.split(':')[0] || '1', 10);
      return !isNaN(num) && num > max ? num : max;
    }, 0);
    const nextSession = `${maxNum + 1}: pwsh`;
    set({
      terminalSessions: [...terminalSessions, nextSession],
      activeTerminalId: nextSession,
      isTerminalMenuOpen: false,
    });
  },

  switchTerminalSession: (sessionId) => {
    set({ activeTerminalId: sessionId, isTerminalMenuOpen: false });
  },

  deleteTerminalSession: (sessionId) => {
    const { terminalSessions, activeTerminalId } = get();
    if (terminalSessions.length <= 1) return;

    const next = terminalSessions.filter((s) => s !== sessionId);
    const nextActive = activeTerminalId === sessionId ? next[0] : activeTerminalId;
    set({ terminalSessions: next, activeTerminalId: nextActive });
  },

  clearTerminalOutput: (sessionId) => {
    const target = sessionId || get().activeTerminalId;
    set((s) => ({
      terminalOutputs: { ...s.terminalOutputs, [target]: '' },
    }));
  },

  appendTerminalOutput: (sessionId, text) => {
    set((s) => ({
      terminalOutputs: {
        ...s.terminalOutputs,
        [sessionId]: (s.terminalOutputs[sessionId] || '') + text,
      },
    }));
  },

  setTutorialStep: (step) => {
    try {
      sessionStorage.setItem('python_tutorial_step', String(step));
    } catch {}
    set({ currentTutorialStep: step });
  },

  setChapterScrolled: (step) => {
    set((s) => ({
      chapterScrolled: { ...s.chapterScrolled, [step]: true },
    }));
    get().completeChapter(step);
  },

  setChapterExecuted: (step) => {
    set((s) => ({
      chapterExecuted: { ...s.chapterExecuted, [step]: true },
    }));
    get().completeChapter(step);
  },

  completeChapter: (step) => {
    const { chapterScrolled, chapterExecuted, completedChapters } = get();
    if (chapterScrolled[step] && chapterExecuted[step] && !completedChapters[step]) {
      set({
        completedChapters: { ...completedChapters, [step]: true },
      });
    }
  },

  lintCode: (code, filePath) => {
    const problems = lintPythonCode(code, filePath);
    set({ ideProblems: problems });
  },

  runCurrentCode: async () => {
    const { activeFile, files, activeTerminalId, appendTerminalOutput, currentTutorialStep, setChapterExecuted } = get();
    if (!activeFile) return;

    const code = files[activeFile] || '';
    set({ activeDrawerTab: 'terminal', isTerminalDrawerClosed: false });

    appendTerminalOutput(activeTerminalId, `\n\x1b[38;2;86;156;214m>>> python3 ${activeFile}\x1b[0m\n`);

    try {
      const runner = PyodideRunner;
      const res = await runner.runCode(code);
      if (res.stdout) {
        appendTerminalOutput(activeTerminalId, res.stdout);
      }
      if (res.stderr) {
        appendTerminalOutput(activeTerminalId, `\x1b[38;2;241;76;76m${res.stderr}\x1b[0m\n`);
      }

      setChapterExecuted(currentTutorialStep);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      appendTerminalOutput(activeTerminalId, `\x1b[38;2;241;76;76mTraceback (most recent call last):\n${msg}\x1b[0m\n`);
    }
  },
}));
