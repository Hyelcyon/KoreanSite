// Python 3.14 Interactive IDE & Educational Workspace View

import { PYTHON_TUTORIAL_DATA } from '../../data/python_curriculum.js';
import { IDEFileSystem, IDEFileMap } from '../../services/ide_filesystem.js';
import { DiagnosticProblem, lintPythonCode, createDiagnosticMap } from '../../services/python_linter.js';
import { highlightPythonCode, highlightPythonSlice, computeIndents } from '../../services/python_highlighter.js';
import {
  SymbolItem,
  getIntelliSenseDatabase,
  extractUserSymbols,
  getCaretCoordinates
} from '../../services/intellisense.js';
import { UICore } from '../ui_core.js';

export class PythonIDEController {
  activeIDEFile: string | null = 'main.py';
  openIDETabs: string[] = ['main.py'];
  dirtyFiles: Record<string, boolean> = {};
  activeDrawerTab: 'problems' | 'output' | 'terminal' = 'terminal';
  terminalSessions: string[] = ['1: pwsh'];
  activeTerminalId = '1: pwsh';
  terminalOutputs: Record<string, string> = {};
  isLearnFolderCollapsed = false;
  currentTutorialStep = 1;
  chapterScrolled: Record<number, boolean> = {};
  chapterExecuted: Record<number, boolean> = {};
  completedChapters: Record<number, boolean> = {};
  explorerWidth = 240;
  secondarySidebarWidth = 460;
  terminalDrawerHeight = 220;
  ideProblems: DiagnosticProblem[] = [];
  outputLogs = '';
  acMatches: SymbolItem[] = [];
  acSelectedIndex = 0;
  acToken = '';
  acIsDot = false;
  acSuppress = false;
  pyodideInstance: import('../../types/pyodide.js').PyodideInterface | null = null;
  _caretMirror: HTMLDivElement | null = null;
  selectedExplorerFolder: string | null = null;
  isTerminalMenuOpen = false;
  collapsedFolders: Record<string, boolean> = {};
  isSecondarySidebarOpen = true;
  isTerminalDrawerClosed = false;
  isTerminalMaximized = false;
  isTerminalSplit = false;
  isTerminalMoreMenuOpen = false;
  inlineCreatingItem: { type: 'file' | 'folder'; parentFolder: string } | null = null;

  setFileDirty(filePath: string, isDirty: boolean): void {
    if (isDirty) {
      this.dirtyFiles[filePath] = true;
    } else {
      delete this.dirtyFiles[filePath];
    }
  }

  getRoot(): HTMLElement | null {
    return UICore.getRoot();
  }

  getIDEFiles(): IDEFileMap {
    return IDEFileSystem.getFiles();
  }

  saveIDEFiles(files: IDEFileMap): void {
    IDEFileSystem.saveFiles(files);
  }

  getIDEFolders(): string[] {
    return IDEFileSystem.getFolders();
  }

  saveIDEFolders(folders: string[]): void {
    IDEFileSystem.saveFolders(folders);
  }

  getOpenIDETabs(): string[] {
    return IDEFileSystem.getOpenTabs();
  }

  saveOpenIDETabs(tabs: string[]): void {
    IDEFileSystem.saveOpenTabs(tabs);
  }

  getActiveIDEFile(): string | null {
    return IDEFileSystem.getActiveFile();
  }

  saveActiveIDEFile(file: string | null): void {
    IDEFileSystem.saveActiveFile(file);
  }

  isFileDirty(filePath: string): boolean {
    return IDEFileSystem.isFileDirty(filePath, this.dirtyFiles);
  }

  isFolderDirty(folderPath: string): boolean {
    return IDEFileSystem.isFolderDirty(folderPath, this.dirtyFiles);
  }

  showSafetyToast(message: string, type: 'info' | 'success' | 'warning' = 'info'): void {
    UICore.showSafetyToast(message, type);
  }

  getFileIconSvg(fileName: string): string {
    return UICore.getFileIconSvg(fileName);
  }

  renderLineNumbersHtml(lineCount: number, problems: DiagnosticProblem[] = []): string {
    return UICore.renderLineNumbersHtml(lineCount, problems);
  }

  lintPythonCode(code: string, activeFile = 'main.py'): DiagnosticProblem[] {
    return lintPythonCode(code, activeFile);
  }

  highlightPythonCode(
    code: string,
    activeFile?: string,
    onDiagnostics?: (diags: DiagnosticProblem[]) => void,
    diagMap?: Map<number, DiagnosticProblem[]>,
    lineRange?: { start: number; end: number }
  ): string {
    return highlightPythonCode(
      code,
      activeFile || this.activeIDEFile || 'main.py',
      onDiagnostics,
      diagMap,
      lineRange
    );
  }

  getIntelliSenseDatabase(): SymbolItem[] {
    return getIntelliSenseDatabase();
  }

  extractUserSymbols(text: string): SymbolItem[] {
    return extractUserSymbols(text);
  }

  getCaretCoordinates(textarea: HTMLTextAreaElement, position: number) {
    return getCaretCoordinates(textarea, position);
  }

  escapeHtml(str: string): string {
    return UICore.escapeHtml(str);
  }

  renderTutorialMarkdown(content: string): string {
    if (!content) return '';
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)[ \t]*\r?\n([\s\S]*?)```[ \t]*/g;
    let result = '';
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      const textBefore = content.substring(lastIndex, match.index);
      if (textBefore.trim()) {
        result += `<div style="font-size: 13px; color: #ffffff; line-height: 1.7; opacity: 0.95; white-space: pre-line;">${this.formatInlineMarkdown(textBefore)}</div>`;
      }

      const lang = (match[1] || '').trim().toLowerCase();
      const rawCode = match[2] || '';
      const code = this.dedentCode(rawCode);

      if (lang === 'terminal' || lang === 'bash' || lang === 'sh' || lang === 'shell' || lang === 'powershell' || lang === 'pwsh') {
        result += `
          <div style="background: #181818; border: 1px solid #2b2b2b; border-radius: 4px; padding: 10px 14px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 19px; color: #ffffff; overflow-x: auto; font-variant-ligatures: none !important; font-feature-settings: 'liga' 0, 'calt' 0 !important;">
            <pre style="margin: 0; padding: 0; background: transparent; border: none; font-family: inherit; font-size: inherit; line-height: inherit; color: #ffffff; white-space: pre;">${this.highlightTerminalCode(code)}</pre>
          </div>
        `;
      } else {
        result += `
          <div style="background: #141414; border: 1px solid #282828; border-radius: 4px; overflow: hidden;">
            <pre style="margin: 0; padding: 10px 14px; background: transparent; border: none; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 19px; color: #ffffff; overflow-x: auto; white-space: pre; font-variant-ligatures: none !important; font-feature-settings: 'liga' 0, 'calt' 0 !important;">${this.highlightPythonCode(code)}</pre>
          </div>
        `;
      }

      lastIndex = match.index + match[0].length;
    }

    const textAfter = content.substring(lastIndex);
    if (textAfter.trim()) {
      result += `<div style="font-size: 13px; color: #ffffff; line-height: 1.7; opacity: 0.95; white-space: pre-line;">${this.formatInlineMarkdown(textAfter)}</div>`;
    }

    return result;
  }

  private dedentCode(code: string): string {
    const lines = code.replace(/\r\n/g, '\n').replace(/^\n+|\n+$/g, '').split('\n');
    let minIndent = Infinity;
    for (const line of lines) {
      if (line.trim().length === 0) continue;
      const leadingSpace = line.match(/^[ \t]*/)?.[0].length || 0;
      if (leadingSpace < minIndent) minIndent = leadingSpace;
    }
    if (minIndent === Infinity || minIndent === 0) return lines.join('\n');
    return lines.map(line => line.slice(minIndent)).join('\n');
  }

  private highlightTerminalCode(code: string): string {
    const lines = code.split('\n');
    const highlighted = lines.map(line => {
      const trimmed = line.trimStart();
      if (trimmed.startsWith('>>>') || trimmed.startsWith('...')) {
        const promptMatch = line.match(/^([ \t]*)(>>>|\.\.\.)([ \t]*)(.*)$/);
        if (promptMatch) {
          const [, leadSpace, prompt, midSpace, restCode] = promptMatch;
          const promptHtml = `<span style="color: #cccccc; font-weight: 600; user-select: none;">${this.escapeHtml(prompt!)}</span>`;
          const codeHtml = this.highlightPythonCode(restCode || '');
          return this.escapeHtml(leadSpace || '') + promptHtml + this.escapeHtml(midSpace || '') + codeHtml;
        }
      }
      if (trimmed.startsWith('PS ') || trimmed.startsWith('$ ') || trimmed.startsWith('> ')) {
        const psMatch = line.match(/^([ \t]*)(PS [^>]+>|\$|>)([ \t]*)(.*)$/);
        if (psMatch) {
          const [, leadSpace, prompt, midSpace, restCode] = psMatch;
          const promptHtml = `<span style="color: #858585; user-select: none;">${this.escapeHtml(prompt!)}</span>`;
          return this.escapeHtml(leadSpace || '') + promptHtml + this.escapeHtml(midSpace || '') + `<span style="color: #ffffff;">${this.escapeHtml(restCode || '')}</span>`;
        }
      }
      return `<span style="color: #cccccc;">${this.escapeHtml(line)}</span>`;
    });
    return highlighted.join('\n');
  }

  private formatInlineMarkdown(text: string): string {
    const lines = text.replace(/\r\n/g, '\n').trim().split('\n');
    const cleanedLines = lines.map(l => l.trimStart());
    const escaped = this.escapeHtml(cleanedLines.join('\n'));
    return escaped.replace(/`([^`]+)`/g, (_m, p1) => {
      return `<code style="font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; padding: 2px 5px; background: #222222; border: 1px solid #333333; border-radius: 3px; color: #ffffff;">${p1}</code>`;
    });
  }

  renderPythonIDE() {
    const root = this.getRoot();
    if (!root) return;

    // Persist active in-memory textarea buffer before replacing DOM (only if file still exists in VFS)
    const liveTextarea = (document.getElementById('ide-code-input') as HTMLTextAreaElement | null);
    const prevEditingFile = liveTextarea ? liveTextarea.getAttribute('data-file') || '' : null;
    if (liveTextarea && prevEditingFile) {
      const liveFiles = this.getIDEFiles();
      if (liveFiles[prevEditingFile] !== undefined) {
        liveFiles[prevEditingFile] = liveTextarea.value;
        this.saveIDEFiles(liveFiles);
      }
    }

    // Persist active terminal buffers before replacing DOM
    const liveStdout = document.getElementById('ide-terminal-stdout');
    if (liveStdout && this.activeTerminalId) {
      if (!this.terminalOutputs) this.terminalOutputs = {};
      this.terminalOutputs[this.activeTerminalId] = liveStdout.innerHTML;
      try {
        sessionStorage.setItem('python_ide_terminal_outputs', JSON.stringify(this.terminalOutputs));
      } catch (e: unknown) { }
    }
    const liveStdoutSplit = document.getElementById('ide-terminal-stdout-split');
    if (liveStdoutSplit && this.activeTerminalId) {
      if (!this.terminalOutputs) this.terminalOutputs = {};
      this.terminalOutputs[this.activeTerminalId + '_split'] = liveStdoutSplit.innerHTML;
      try {
        sessionStorage.setItem('python_ide_terminal_outputs', JSON.stringify(this.terminalOutputs));
      } catch (e: unknown) { }
    }

    document.body.classList.add('in-ide-mode');
    document.documentElement.classList.add('in-ide-mode');
    const footer = document.querySelector('.site-footer') as HTMLElement | null;
    if (footer) footer.style.display = 'none';

    const files = this.getIDEFiles();
    const folders = this.getIDEFolders();
    const openTabs = this.openIDETabs !== undefined ? this.openIDETabs : this.getOpenIDETabs();
    let activeFile = this.activeIDEFile !== undefined ? this.activeIDEFile : this.getActiveIDEFile();
    if (!openTabs.length) {
      activeFile = null;
    } else {
      if (!activeFile || !openTabs.includes(activeFile)) {
        activeFile = openTabs[0];
      }
    }
    this.openIDETabs = openTabs;
    this.activeIDEFile = activeFile;
    this.saveOpenIDETabs(openTabs);
    this.saveActiveIDEFile(activeFile);
    this.activeDrawerTab = this.activeDrawerTab || 'terminal';

    if (!this.terminalSessions || this.terminalSessions.length === 0) {
      this.terminalSessions = ['1: pwsh'];
    }
    if (!this.activeTerminalId || !this.terminalSessions.includes(this.activeTerminalId)) {
      this.activeTerminalId = this.terminalSessions[0];
    }
    if (!this.terminalOutputs) {
      try {
        const savedTerm = sessionStorage.getItem('python_ide_terminal_outputs');
        this.terminalOutputs = savedTerm ? JSON.parse(savedTerm) : {};
      } catch (e: unknown) {
        this.terminalOutputs = {};
      }
    }

    const isFolderCollapsed = this.isLearnFolderCollapsed || false;
    if (activeFile && files[activeFile] === undefined) {
      files[activeFile] = '';
      this.saveIDEFiles(files);
    }
    const currentCode = activeFile ? (files[activeFile] || '') : '';

    // Initialize Tutorial State
    if (!this.currentTutorialStep) {
      try {
        const savedStep = sessionStorage.getItem('python_tutorial_step');
        this.currentTutorialStep = savedStep ? parseInt(savedStep, 10) : 1;
      } catch (e: unknown) {
        this.currentTutorialStep = 1;
      }
    }
    const tutorialChapters = PYTHON_TUTORIAL_DATA.chapters;
    const currentChapter = tutorialChapters.find(c => c.id === this.currentTutorialStep) || tutorialChapters[0];
    const totalChapters = tutorialChapters.length;
    const progressPct = Math.round((this.currentTutorialStep / totalChapters) * 100);

    // Restore tutorial completion progression gates
    if (!this.chapterScrolled) {
      try {
        const savedScrolled = sessionStorage.getItem('python_tutorial_scrolled');
        this.chapterScrolled = savedScrolled ? JSON.parse(savedScrolled) : {};
      } catch (e: unknown) { this.chapterScrolled = {}; }
    }
    if (!this.chapterExecuted) {
      try {
        const savedExec = sessionStorage.getItem('python_tutorial_executed');
        this.chapterExecuted = savedExec ? JSON.parse(savedExec) : {};
      } catch (e: unknown) { this.chapterExecuted = {}; }
    }
    if (!this.completedChapters) {
      try {
        const savedComp = sessionStorage.getItem('python_tutorial_completed');
        this.completedChapters = savedComp ? JSON.parse(savedComp) : {};
      } catch (e: unknown) { this.completedChapters = {}; }
    }

    const curStep = this.currentTutorialStep || 1;
    const isCurScrolled = !!this.chapterScrolled[curStep];
    const isCurExecuted = !!this.chapterExecuted[curStep];
    const isCurCompleted = !!this.completedChapters[curStep] || (isCurScrolled && isCurExecuted);

    // Restore and clamp panel dimensions
    if (this.explorerWidth === undefined) {
      try {
        const savedExp = sessionStorage.getItem('ide_explorer_width');
        this.explorerWidth = savedExp ? Math.max(170, Math.min(500, parseInt(savedExp, 10))) : 230;
      } catch (e: unknown) {
        this.explorerWidth = 230;
      }
    }
    if (this.secondarySidebarWidth === undefined) {
      try {
        const savedSec = sessionStorage.getItem('ide_secondary_sidebar_width');
        this.secondarySidebarWidth = savedSec ? Math.max(280, Math.min(850, parseInt(savedSec, 10))) : 390;
      } catch (e: unknown) {
        this.secondarySidebarWidth = 390;
      }
    }
    if (this.terminalDrawerHeight === undefined) {
      try {
        const savedTermH = sessionStorage.getItem('ide_terminal_drawer_height');
        this.terminalDrawerHeight = savedTermH ? Math.max(90, Math.min(600, parseInt(savedTermH, 10))) : 220;
      } catch (e: unknown) {
        this.terminalDrawerHeight = 220;
      }
    }
    if (this.isSecondarySidebarOpen === undefined) {
      try {
        const savedOpen = sessionStorage.getItem('ide_secondary_sidebar_open');
        this.isSecondarySidebarOpen = savedOpen !== null ? (savedOpen === 'true') : true;
      } catch (e: unknown) {
        this.isSecondarySidebarOpen = true;
      }
    }

    root.innerHTML = `
        <style>
          .vscode-dark-shell, #ide-highlight-display, #ide-code-input, #ide-line-numbers, #ide-terminal-stdout, #ide-terminal-cli-input {
            font-variant-ligatures: none !important;
            -webkit-font-variant-ligatures: none !important;
            font-feature-settings: "liga" 0, "calt" 0 !important;
          }
          .ide-sash {
            position: absolute;
            z-index: 60;
            user-select: none;
            touch-action: none;
          }
          .ide-sash.ide-sash-vertical {
            width: 6px;
            height: 100%;
            top: 0;
            cursor: col-resize;
          }
          .ide-sash.ide-sash-vertical:hover::after, .ide-sash.ide-sash-vertical.active::after {
            content: '';
            position: absolute;
            top: 0;
            left: 2px;
            width: 2px;
            height: 100%;
            background: #ffffff;
            opacity: 0.9;
          }
          .ide-sash.ide-sash-horizontal {
            height: 6px;
            width: 100%;
            left: 0;
            cursor: row-resize;
          }
          .ide-sash.ide-sash-horizontal:hover::after, .ide-sash.ide-sash-horizontal.active::after {
            content: '';
            position: absolute;
            left: 0;
            top: 2px;
            height: 2px;
            width: 100%;
            background: #ffffff;
            opacity: 0.9;
          }
          .ide-sash-corner {
            position: absolute;
            width: 12px;
            height: 12px;
            z-index: 70;
            user-select: none;
            touch-action: none;
          }
          .ide-sash-corner.corner-left {
            cursor: nesw-resize;
          }
          .ide-sash-corner.corner-right {
            cursor: nwse-resize;
          }
          .ide-sash-corner:hover::after, .ide-sash-corner.active::after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 6px;
            height: 6px;
            background: #ffffff;
            border-radius: 1px;
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.9);
          }
        </style>
        <div class="vscode-dark-shell" style="height: 100%; flex: 1; min-height: 0; background: #181818; display: flex; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, Roboto, sans-serif; color: #cccccc; -webkit-font-smoothing: antialiased; user-select: none; overflow: hidden;">
          <!-- Main Workbench Layout (Sidebar + Center Column + Assistant Full-Height Column) -->
          <div style="display: flex; flex: 1; min-height: 0; overflow: hidden; position: relative;">

            <!-- Left-Bottom Intersection Corner Sash (2D Resize) -->
            <div id="ide-sash-corner-left" class="ide-sash-corner corner-left" style="left: ${this.explorerWidth - 6}px; bottom: ${(this.isTerminalDrawerClosed || this.isTerminalMaximized) ? '-999' : (this.terminalDrawerHeight - 6)}px; display: ${(this.isTerminalDrawerClosed || this.isTerminalMaximized) ? 'none' : 'block'};" title="2D 크기 조절 (탐색기 너비 + 터미널 높이)"></div>

            <!-- Right-Bottom Intersection Corner Sash (2D Resize) -->
            ${this.isSecondarySidebarOpen ? `
              <div id="ide-sash-corner-right" class="ide-sash-corner corner-right" style="right: ${this.secondarySidebarWidth - 6}px; bottom: ${(this.isTerminalDrawerClosed || this.isTerminalMaximized) ? '-999' : (this.terminalDrawerHeight - 6)}px; display: ${(this.isTerminalDrawerClosed || this.isTerminalMaximized) ? 'none' : 'block'};" title="2D 크기 조절 (튜토리얼 너비 + 터미널 높이)"></div>
            ` : ''}

            <!-- Primary Sidebar (Explorer Resizable) -->
            <div id="ide-left-sidebar" style="width: ${this.explorerWidth}px; min-width: 170px; max-width: 500px; background: #181818; border-right: 1px solid #2b2b2b; display: flex; flex-direction: column; font-size: 13px; position: relative; flex-shrink: 0; overflow: hidden;">
              <!-- Left Sash Splitter -->
              <div id="ide-sash-left" class="ide-sash ide-sash-vertical" style="right: -3px;" title="드래그하여 탐색기 너비 조절"></div>

              <!-- Sidebar Header (Aligned with Editor Tab Strip) -->
              <div style="height: 35px; border-bottom: 1px solid #2b2b2b; padding: 0 10px 0 16px; display: flex; align-items: center; justify-content: space-between; font-size: 11px; font-weight: 700; color: #bbbbbb; letter-spacing: 0.04em; text-transform: uppercase;">
                <span>Explorer</span>
                <div style="display: flex; align-items: center; gap: 2px; color: #cccccc;">
                  <div id="btn-ide-new-file" class="ide-ctrl-btn" title="New File..."><span class="codicon codicon-new-file"></span></div>
                  <div id="btn-ide-new-folder" class="ide-ctrl-btn" title="New Folder..."><span class="codicon codicon-new-folder"></span></div>
                  <div id="btn-ide-refresh" class="ide-ctrl-btn" title="Refresh Explorer"><span class="codicon codicon-refresh"></span></div>
                  <div id="btn-ide-collapse-all" class="ide-ctrl-btn" title="Collapse Folders in Explorer"><span class="codicon codicon-collapse-all"></span></div>
                </div>
              </div>

              <!-- Main Tree Folder: LEARN -->
              <div style="flex: 1; overflow-y: auto;">
                <div id="ide-folder-learn" class="ide-tree-row" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 8px; padding-right: 2px; font-size: 11px; font-weight: 700; color: #cccccc; cursor: pointer;" title="Root Workspace (Learn)">
                  <div style="display: flex; align-items: center; gap: 6px; overflow: hidden;">
                    <svg id="ide-folder-learn-chevron" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="transform: ${isFolderCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; transition: transform 140ms ease;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"/></svg>
                    <span>Learn</span>
                  </div>
                  <div class="ide-tree-actions">
                    <div class="btn-tree-action btn-folder-new-file" data-folder="" title="New File in Root"><span class="codicon codicon-new-file" style="font-size: 13px;"></span></div>
                    <div class="btn-tree-action btn-folder-new-subfolder" data-folder="" title="New Folder in Root"><span class="codicon codicon-new-folder" style="font-size: 13px;"></span></div>
                  </div>
                </div>

                <!-- Tree Content (Folders + Files) -->
                <div id="ide-explorer-file-list" style="display: ${isFolderCollapsed ? 'none' : 'flex'}; flex-direction: column;">
                  <!-- Inline Root Folder Input -->
                  ${this.inlineCreatingItem && this.inlineCreatingItem.type === 'folder' && !this.inlineCreatingItem.parentFolder ? `
                    <div class="ide-tree-row ide-inline-create-row" style="height: 24px; display: flex; align-items: center; gap: 6px; padding-left: 18px; padding-right: 6px; background: transparent;">
                      <span class="codicon codicon-folder" style="font-size: 14px; color: #cca700; flex-shrink: 0;"></span>
                      <input id="ide-inline-create-input" type="text" spellcheck="false" autocomplete="off" style="flex: 1; height: 22px; background: #313131; border: 1px solid #007fd4; color: #ffffff; font-family: inherit; font-size: 12.5px; padding: 0 4px; outline: none; border-radius: 2px; box-sizing: border-box;">
                    </div>
                  ` : ''}

                  <!-- Custom Folders -->
                  ${folders.filter(f => f && f !== 'Learn' && f !== 'null').map(folderName => {
      const isCollapsed = this.collapsedFolders && this.collapsedFolders[folderName];
      const folderFiles = Object.keys(files).filter(f => f && f !== 'null' && f.startsWith(folderName + '/'));
      return `
                      <div class="ide-folder-wrapper">
                        <div class="ide-tree-row ide-folder-item" data-folder="${folderName}" draggable="true" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 18px; padding-right: 2px; font-size: 13px; color: #cccccc; cursor: pointer; background: transparent;" title="${folderName}">
                          <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style="transform: ${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; transition: transform 140ms ease;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"/></svg>
                            <span>${folderName.split('/').pop()}</span>
                          </div>
                          <div class="ide-tree-actions">
                            <div class="btn-tree-action btn-folder-new-file" data-folder="${folderName}" title="New File in ${folderName}"><span class="codicon codicon-new-file" style="font-size: 13px;"></span></div>
                            <div class="btn-tree-action btn-folder-new-subfolder" data-folder="${folderName}" title="New Subfolder in ${folderName}"><span class="codicon codicon-new-folder" style="font-size: 13px;"></span></div>
                            <div class="btn-tree-action btn-tree-delete btn-folder-delete" data-folder="${folderName}" title="Delete Folder ${folderName}"><span class="codicon codicon-trash" style="font-size: 13px;"></span></div>
                          </div>
                        </div>
                        <div style="display: ${isCollapsed ? 'none' : 'flex'}; flex-direction: column;">
                          <!-- Inline Subfolder or Subfile Input -->
                          ${this.inlineCreatingItem && this.inlineCreatingItem.parentFolder === folderName ? `
                            <div class="ide-tree-row ide-inline-create-row" style="height: 24px; display: flex; align-items: center; gap: 6px; padding-left: ${this.inlineCreatingItem.type === 'folder' ? '28px' : '36px'}; padding-right: 6px; background: transparent;">
                              ${this.inlineCreatingItem.type === 'folder'
            ? '<span class="codicon codicon-folder" style="font-size: 14px; color: #cca700; flex-shrink: 0;"></span>'
            : '<span class="codicon codicon-file" style="font-size: 14px; color: #cccccc; flex-shrink: 0;"></span>'}
                              <input id="ide-inline-create-input" type="text" spellcheck="false" autocomplete="off" style="flex: 1; height: 22px; background: #313131; border: 1px solid #007fd4; color: #ffffff; font-family: inherit; font-size: 12.5px; padding: 0 4px; outline: none; border-radius: 2px; box-sizing: border-box;">
                            </div>
                          ` : ''}

                          ${folderFiles.length ? folderFiles.map(fn => {
              const shortName = fn.substring(folderName.length + 1);
              const isCurActive = fn === activeFile;
              return `
                              <div class="ide-tree-row ide-file-item ${isCurActive ? 'active' : ''}" data-file="${fn}" draggable="true" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 36px; padding-right: 2px; background: transparent; color: ${isCurActive ? '#ffffff' : '#cccccc'}; font-size: 13px; cursor: pointer;" title="${fn}">
                                <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${this.getFileIconSvg(fn)}
                                  <span>${shortName}</span>
                                </div>
                                <div class="ide-tree-actions">
                                  <div class="btn-tree-action btn-tree-delete btn-file-delete" data-file="${fn}" title="Delete File ${shortName}"><span class="codicon codicon-close" style="font-size: 12px;"></span></div>
                                </div>
                              </div>
                            `;
            }).join('') : ''}
                        </div>
                      </div>
                    `;
    }).join('')}

                  <!-- Inline Root File Input -->
                  ${this.inlineCreatingItem && this.inlineCreatingItem.type === 'file' && !this.inlineCreatingItem.parentFolder ? `
                    <div class="ide-tree-row ide-inline-create-row" style="height: 24px; display: flex; align-items: center; gap: 6px; padding-left: 22px; padding-right: 6px; background: transparent;">
                      <span class="codicon codicon-file" style="font-size: 14px; color: #cccccc; flex-shrink: 0;"></span>
                      <input id="ide-inline-create-input" type="text" spellcheck="false" autocomplete="off" style="flex: 1; height: 22px; background: #313131; border: 1px solid #007fd4; color: #ffffff; font-family: inherit; font-size: 12.5px; padding: 0 4px; outline: none; border-radius: 2px; box-sizing: border-box;">
                    </div>
                  ` : ''}

                  <!-- Root Files -->
                  ${Object.keys(files).filter(f => f && f !== 'null' && !f.includes('/')).map(fileName => {
      const isCurActive = fileName === activeFile;
      return `
                      <div class="ide-tree-row ide-file-item ${isCurActive ? 'active' : ''}" data-file="${fileName}" draggable="true" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 22px; padding-right: 2px; background: transparent; color: ${isCurActive ? '#ffffff' : '#cccccc'}; font-size: 13px; cursor: pointer;" title="${fileName}">
                        <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          ${this.getFileIconSvg(fileName)}
                          <span>${fileName}</span>
                        </div>
                        <div class="ide-tree-actions">
                          <div class="btn-tree-action btn-tree-delete btn-file-delete" data-file="${fileName}" title="Delete File ${fileName}"><span class="codicon codicon-close" style="font-size: 12px;"></span></div>
                        </div>
                      </div>
                    `;
    }).join('')}
                </div>
              </div>
            </div>

            <!-- Central Editor & Terminal Canvas (Left/Center Column) -->
            <div style="flex: 1; display: flex; flex-direction: column; background: #1e1e1e; min-width: 0; position: relative; overflow: hidden;">
              
              <!-- Tab Header Strip (Height: 35px Dark) -->
              <div style="height: 35px; background: #181818; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; justify-content: space-between;">
                <!-- Left: Open File Tabs -->
                <div id="ide-tab-strip" style="display: flex; align-items: center; height: 100%; overflow-x: auto;">
                  ${openTabs.map(tabFile => {
      const isTabActive = tabFile === activeFile;
      const isDirty = this.isFileDirty(tabFile);
      return `
                      <div class="ide-editor-tab ${isTabActive ? 'active' : ''}" data-file="${tabFile}" draggable="true" style="height: 100%; background: ${isTabActive ? '#1e1e1e' : '#181818'}; border-right: 1px solid #2b2b2b; border-top: none; padding: 0 8px 0 12px; display: flex; align-items: center; gap: 8px; font-size: 13px; color: ${isTabActive ? '#ffffff' : '#858585'}; cursor: grab; user-select: none;" title="${tabFile}">
                        ${this.getFileIconSvg(tabFile)}
                        <span>${tabFile.split('/').pop()}</span>
                        <div class="btn-close-ide-tab" data-file="${tabFile}" title="${isDirty ? 'Unsaved changes (Save: Ctrl+S)' : 'Close (Ctrl+W)'}">
                          ${isDirty ? '<span class="ide-tab-dirty-dot"></span>' : '<span class="codicon codicon-close" style="font-size: 12px;"></span>'}
                        </div>
                      </div>
                    `;
    }).join('')}
                </div>

                <!-- Right: Run Python Play Button, Split Editor, Toggle Terminal Drawer Button -->
                <div style="display: flex; align-items: center; padding-right: 12px; gap: 4px;">
                  <div id="btn-run-python" class="ide-ctrl-btn" style="width: 26px; height: 26px;" title="Run Python File (Ctrl+F5)">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.5A.5.5 0 0 1 4 2.1l9 5.5a.5.5 0 0 1 0 .8l-9 5.5A.5.5 0 0 1 3.5 13.5v-11zM4.5 3.37v9.26L12.08 8 4.5 3.37z"/></svg>
                  </div>
                  <div id="btn-ide-split-editor" class="ide-ctrl-btn ${this.isSecondarySidebarOpen ? 'active' : ''}" style="width: 26px; height: 26px; ${this.isSecondarySidebarOpen ? 'background: #313233; color: #ffffff;' : ''}" title="Toggle Python Tutorial Assistant (Ctrl+\\)">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2h-11C1.67 2 1 2.67 1 3.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM2 3h7v10H2V3zm8 10h4V3h-4v10z"/></svg>
                  </div>
                  <div id="btn-toggle-terminal-drawer" class="ide-ctrl-btn" style="width: 26px; height: 26px;" title="Toggle Terminal Panel (Ctrl+\`)">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2h-11C1.67 2 1 2.67 1 3.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM2 3h12v10H2V3zm2 2.5l2.5 2.5L4 10.5l.7.7 3.2-3.2-3.2-3.2-.7.7zm5 5h3v1H9v-1z"/></svg>
                  </div>
                </div>
              </div>

              <!-- Editor Breadcrumb Navigation Bar (Dark - only shown when file is open) -->
              ${activeFile ? `
                <div style="height: 22px; background: #1e1e1e; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; padding: 0 16px; font-size: 12px; color: #858585; gap: 6px;">
                  <span>Learn</span>
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" style="opacity: 0.7;"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 4.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L10.293 8.5 6.646 4.854a.5.5 0 0 1 0-.708z"/></svg>
                  <div style="display: inline-flex; align-items: center; gap: 6px; color: #cccccc;">
                    ${this.getFileIconSvg(activeFile)}
                    <span style="font-size: 12px;">${activeFile}</span>
                  </div>
                </div>
              ` : ''}

              <!-- Code Editor Surface (Dark #1e1e1e) -->
              <div id="ide-editor-container" style="flex: 1; display: ${this.isTerminalMaximized ? 'none' : 'flex'}; position: relative; background: #1e1e1e; min-height: 120px; overflow: hidden;">
                ${activeFile ? `
                  <!-- Left Gutter Line Numbers -->
                  <div id="ide-line-numbers-container" style="width: 44px; background: #1e1e1e; overflow: hidden; border-right: none; user-select: none; flex-shrink: 0; position: relative;">
                    <div id="ide-line-numbers" style="color: #858585; opacity: 0.65; text-align: right; padding-right: 10px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; will-change: transform; transform: translateY(12px);">${this.renderLineNumbersHtml(Math.min(100, Math.max(1, (currentCode || '').split('\n').length)), this.ideProblems)}</div>
                  </div>

                  <!-- Central Code Canvas (Single Scroll Container) -->
                  <div id="ide-editor-scroll-wrap" style="flex: 1; position: relative; overflow: hidden; background: #1e1e1e; height: 100%;">
                    <pre id="ide-highlight-display" style="margin: 0; padding: 0 10px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #d4d4d4; pointer-events: none; white-space: pre; tab-size: 4; position: absolute; top: 0; left: 0; min-width: 100%; box-sizing: border-box; will-change: transform; transform: translateY(12px);">${this.highlightPythonCode(currentCode || '', this.activeIDEFile || 'main.py', undefined, undefined, { start: 0, end: 100 })}</pre>
                    <textarea id="ide-code-input" data-file="${activeFile}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0; padding: 12px 10px; border: none; outline: none; background: transparent; color: transparent; caret-color: #ffffff; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; resize: none; white-space: pre; tab-size: 4; overflow: auto; box-sizing: border-box;">${this.escapeHtml(currentCode || '')}</textarea>
                  </div>

                  <div id="ide-autocomplete-popup" style="display: none;"></div>
                ` : `
                  <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #555555; gap: 8px; font-size: 13px; user-select: none;">
                    <svg viewBox="0 0 16 16" width="36" height="36" fill="#3c3c3c"><path d="M14 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4.5L9 3.5h4a1 1 0 0 1 1 1zM3 2v12h10V4.5H8.5L7 3H3z"/></svg>
                    <span>No open editors</span>
                  </div>
                `}
              </div>

              <!-- Bottom Terminal Drawer (Height Resizable) -->
              <div id="ide-terminal-panel" style="display: ${this.isTerminalDrawerClosed ? 'none' : 'flex'}; ${this.isTerminalMaximized ? 'flex: 1; height: 100%; border-top: none;' : `height: ${this.terminalDrawerHeight}px; min-height: 90px; max-height: 600px; border-top: 1px solid #2b2b2b;`} background: #181818; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, sans-serif; position: relative; flex-shrink: 0;">
                <!-- Bottom Sash Splitter -->
                <div id="ide-sash-bottom" class="ide-sash ide-sash-horizontal" style="top: -3px;" title="드래그하여 터미널 높이 조절"></div>
                <!-- Terminal Tabs & Controls Strip -->
                <div style="height: 35px; background: #181818; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
                  <!-- Tabs: Problems, Output, Terminal -->
                  <div style="display: flex; align-items: center; gap: 18px; font-size: 11.5px; font-weight: 500;">
                    <span id="tab-terminal-problems" class="ide-term-tab ${this.activeDrawerTab === 'problems' ? 'active' : ''}" data-tab="problems" style="cursor: pointer; color: ${this.activeDrawerTab === 'problems' ? '#ffffff' : '#858585'}; border-bottom: ${this.activeDrawerTab === 'problems' ? '1.5px solid #0078d4' : '1.5px solid transparent'}; padding: 8px 0;">Problems${this.ideProblems && this.ideProblems.length ? ` <span style="background: #e51400; color: #ffffff; border-radius: 10px; padding: 1px 6px; font-size: 10px;">${this.ideProblems.length}</span>` : ''}</span>
                    <span id="tab-terminal-output" class="ide-term-tab ${this.activeDrawerTab === 'output' ? 'active' : ''}" data-tab="output" style="cursor: pointer; color: ${this.activeDrawerTab === 'output' ? '#ffffff' : '#858585'}; border-bottom: ${this.activeDrawerTab === 'output' ? '1.5px solid #0078d4' : '1.5px solid transparent'}; padding: 8px 0;">Output</span>
                    <span id="tab-terminal-cmd" class="ide-term-tab ${this.activeDrawerTab === 'terminal' ? 'active' : ''}" data-tab="terminal" style="cursor: pointer; color: ${this.activeDrawerTab === 'terminal' ? '#ffffff' : '#858585'}; border-bottom: ${this.activeDrawerTab === 'terminal' ? '1.5px solid #0078d4' : '1.5px solid transparent'}; padding: 8px 0;">Terminal</span>
                  </div>

                  <!-- Right Terminal Controls -->
                  <div style="display: flex; align-items: center; gap: 4px; color: #cccccc; position: relative;">
                    ${this.activeDrawerTab === 'terminal' ? `
                      <div id="btn-terminal-instance-select" style="display: flex; align-items: center; gap: 5px; height: 24px; padding: 0 6px; background: transparent; border: none; border-radius: 4px; font-size: 12px; cursor: pointer; color: #cccccc; user-select: none;" title="Switch Terminal (${this.activeTerminalId || 'powershell'})">
                        <span class="codicon codicon-terminal" style="font-size: 14px; color: #cccccc;"></span>
                        <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, Roboto, sans-serif; font-size: 12px; color: #cccccc;">${(this.activeTerminalId || 'powershell').includes('cmd') ? 'cmd' : ((this.activeTerminalId || '').includes('python') ? 'python' : 'powershell')}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 1px;">
                        <div id="btn-add-terminal" class="ide-ctrl-btn" style="width: 22px; height: 22px;" title="New Terminal (Ctrl+Shift+\`)"><span class="codicon codicon-add" style="font-size: 14px;"></span></div>
                        <div id="btn-terminal-dropdown-trigger" class="ide-ctrl-btn" style="width: 14px; height: 22px;" title="Select Default Profile"><span class="codicon codicon-chevron-down" style="font-size: 11px; opacity: 0.85;"></span></div>
                      </div>
                      <div id="btn-split-terminal" class="ide-ctrl-btn ${this.isTerminalSplit ? 'active' : ''}" style="background: ${this.isTerminalSplit ? '#313233' : 'transparent'};" title="Split Terminal (Ctrl+Shift+5)"><span class="codicon codicon-split-horizontal" style="font-size: 14px;"></span></div>
                      <div id="btn-clear-terminal" class="ide-ctrl-btn" title="Kill Terminal"><span class="codicon codicon-trash" style="font-size: 14px;"></span></div>
                      <div id="btn-terminal-more" class="ide-ctrl-btn" title="More Actions..."><span class="codicon codicon-ellipsis" style="font-size: 14px;"></span></div>
                      <div style="width: 1px; height: 14px; background: #3c3c3c; margin: 0 4px;"></div>
                    ` : ''}
                    <div id="btn-toggle-terminal-size" class="ide-ctrl-btn" title="${this.isTerminalMaximized ? 'Restore Panel Size' : 'Maximize Panel Size'}"><span class="codicon ${this.isTerminalMaximized ? 'codicon-screen-normal' : 'codicon-screen-full'}" style="font-size: 14px;"></span></div>
                    <div id="btn-close-terminal-panel" class="ide-ctrl-btn" title="Close Panel"><span class="codicon codicon-close" style="font-size: 14px;"></span></div>

                    <!-- Terminal Profiles / Instance Dropdown Menu -->
                    <div id="ide-terminal-dropdown-menu" style="display: ${this.isTerminalMenuOpen ? 'block' : 'none'}; position: absolute; top: 28px; right: 100px; width: 220px; background: #252526; border: 1px solid #454545; box-shadow: 0 4px 18px rgba(0,0,0,0.5); border-radius: 5px; z-index: 1000; padding: 4px; font-size: 12px;">
                      <div style="padding: 4px 8px; font-size: 11px; font-weight: 600; color: #858585; text-transform: uppercase;">Active Sessions</div>
                      ${this.terminalSessions.map(session => `
                        <div class="terminal-menu-item ${session === this.activeTerminalId ? 'active' : ''}" data-session="${session}" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: ${session === this.activeTerminalId ? '#ffffff' : '#cccccc'}; background: ${session === this.activeTerminalId ? '#094771' : 'transparent'}; display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                          <div style="display: flex; align-items: center; gap: 6px;">
                            <span class="codicon codicon-terminal-powershell" style="font-size: 13px;"></span>
                            <span style="font-size: 12px;">${session}</span>
                          </div>
                          ${this.terminalSessions.length > 1 ? `
                            <span class="btn-delete-terminal-session codicon codicon-close" data-session="${session}" style="font-size: 11px;" title="Kill Terminal"></span>
                          ` : ''}
                        </div>
                      `).join('')}
                      <div style="height: 1px; background: #3c3c3c; margin: 4px 0;"></div>
                      <div style="padding: 4px 8px; font-size: 11px; font-weight: 600; color: #858585; text-transform: uppercase;">New Profile</div>
                      <div class="btn-create-profile-item" data-profile="PowerShell" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-terminal-powershell" style="font-size: 13px; color: #569cd6;"></span>
                        <span>PowerShell</span>
                      </div>
                      <div class="btn-create-profile-item" data-profile="Command Prompt" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-terminal" style="font-size: 13px; color: #dcdcaa;"></span>
                        <span>Command Prompt (cmd)</span>
                      </div>
                      <div class="btn-create-profile-item" data-profile="Python REPL" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-terminal" style="font-size: 13px; color: #4ec9b0;"></span>
                        <span>Python Interactive REPL</span>
                      </div>
                    </div>

                    <!-- More Actions Menu -->
                    <div id="ide-terminal-more-menu" style="display: ${this.isTerminalMoreMenuOpen ? 'block' : 'none'}; position: absolute; top: 28px; right: 50px; width: 170px; background: #252526; border: 1px solid #454545; box-shadow: 0 4px 18px rgba(0,0,0,0.5); border-radius: 5px; z-index: 1000; padding: 4px; font-size: 12px;">
                      <div id="btn-menu-clear-term" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-trash" style="font-size: 13px;"></span>
                        <span>Clear Terminal</span>
                      </div>
                      <div id="btn-menu-split-term" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-split-horizontal" style="font-size: 13px;"></span>
                        <span>Split Terminal</span>
                      </div>
                      <div id="btn-menu-kill-term" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-close" style="font-size: 13px;"></span>
                        <span>Kill Terminal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Terminal Output & Prompt -->
                <div id="ide-terminal-stdout-container" class="ide-terminal-content-pane" style="display: ${this.activeDrawerTab === 'terminal' ? 'flex' : 'none'}; flex: 1; overflow: hidden; background: #181818;">
                  <div id="ide-terminal-stdout-wrapper" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; border-right: ${this.isTerminalSplit ? '1px solid #2b2b2b' : 'none'}; cursor: text;">
                    <div id="ide-terminal-scroll-area" style="flex: 1; padding: 10px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto;">
                      <div id="ide-terminal-stdout" style="white-space: pre-wrap;">${(this.terminalOutputs && this.terminalOutputs[this.activeTerminalId]) || ''}</div>
                      <div class="ide-terminal-prompt-line" style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #cccccc; white-space: nowrap;">PS C:\\Learn&gt;</span>
                        <input id="ide-terminal-cli-input" type="text" autocomplete="off" spellcheck="false" style="flex: 1; border: none; outline: none; background: transparent; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #ffffff; padding: 0;" />
                      </div>
                    </div>
                  </div>

                  ${this.isTerminalSplit ? `
                    <div id="ide-terminal-stdout-split-wrapper" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; cursor: text;">
                      <div id="ide-terminal-scroll-area-split" style="flex: 1; padding: 10px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto;">
                        <div id="ide-terminal-stdout-split" style="white-space: pre-wrap;">${(this.terminalOutputs && this.terminalOutputs[this.activeTerminalId + '_split']) || ''}</div>
                        <div class="ide-terminal-prompt-line" style="display: flex; align-items: center; gap: 8px;">
                          <span style="color: #cccccc; white-space: nowrap;">PS C:\\Learn&gt;</span>
                          <input id="ide-terminal-cli-input-split" type="text" autocomplete="off" spellcheck="false" style="flex: 1; border: none; outline: none; background: transparent; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #ffffff; padding: 0;" />
                        </div>
                      </div>
                    </div>
                  ` : ''}
                </div>

                <div id="ide-terminal-output-pane" class="ide-terminal-content-pane" style="display: ${this.activeDrawerTab === 'output' ? 'flex' : 'none'}; flex: 1; flex-direction: column; padding: 10px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto; white-space: pre-wrap; background: #181818;">${(this.outputLogs || '[Python Extension] Python 3.14 Language Server Ready.\n[Pyodide Runtime] In-browser WebAssembly worker thread initialized.\n[Workspace] Initialized virtual filesystem.').trim()}</div>

                <div id="ide-terminal-problems-pane" class="ide-terminal-content-pane" style="display: ${this.activeDrawerTab === 'problems' ? 'flex' : 'none'}; flex: 1; flex-direction: column; padding: 12px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto; background: #181818;">
                  ${(this.ideProblems && this.ideProblems.length > 0) ? `
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                      ${this.ideProblems.map(p => `
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #cccccc;">
                          <svg viewBox="0 0 16 16" width="14" height="14" fill="#f14c4c"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.2a5.8 5.8 0 1 1 0 11.6A5.8 5.8 0 0 1 8 2.2zm-.7 3.3h1.4v4H7.3v-4zm0 5h1.4v1.4H7.3v-1.4z"/></svg>
                          <span style="color: #f14c4c; font-weight: 600;">[Error]</span>
                          <span>${this.escapeHtml(p.message)}</span>
                          <span style="color: #858585; font-size: 11.5px; margin-left: auto;">${p.file} [${p.line}, ${p.col}]</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : `
                    <div style="display: flex; align-items: center; gap: 8px; color: #858585; font-size: 12.5px; padding-top: 4px;">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="#858585"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>
                      <span>No problems have been detected in the workspace.</span>
                    </div>
                  `}
                </div>
              </div>

            </div>

            <!-- Right: Assistant Tutorial / Secondary Sidebar Window (Modern VS Code Monochrome Design) -->
            ${this.isSecondarySidebarOpen ? `
              <div id="ide-secondary-sidebar" style="width: ${this.secondarySidebarWidth}px; min-width: 280px; max-width: 850px; background: #181818; border-left: 1px solid #2b2b2b; display: flex; flex-direction: column; z-index: 10; font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Noto Sans KR', sans-serif; letter-spacing: -0.015em; height: 100%; overflow: hidden; color: #cccccc; position: relative; flex-shrink: 0;">
                <!-- Right Sash Splitter -->
                <div id="ide-sash-right" class="ide-sash ide-sash-vertical" style="left: -3px;" title="드래그하여 튜토리얼 너비 조절"></div>

                <!-- Compact Streamlined Header Strip -->
                <div style="height: 38px; background: #181818; border-bottom: 1px solid #282828; display: flex; align-items: center; justify-content: space-between; padding: 0 8px 0 12px; gap: 8px; flex-shrink: 0;">
                  <!-- Chapter Selector Dropdown -->
                  <div style="position: relative; flex: 1; display: flex; align-items: center;">
                    <select id="select-tutorial-chapter" style="width: 100%; height: 26px; background: #202020; border: 1px solid #333333; border-radius: 3px; color: #ffffff; font-size: 11.5px; font-weight: 600; padding: 0 22px 0 8px; outline: none; cursor: pointer; appearance: none; -webkit-appearance: none; font-family: inherit;">
                      ${(() => {
          return tutorialChapters.map(ch => {
            const isCur = ch.id === this.currentTutorialStep;
            const isComp = !!(this.completedChapters && this.completedChapters[ch.id]);

            let prefix = '    ';
            if (isCur) prefix = '▶ [학습 중] ';
            else if (isComp) prefix = '✓ [완료] ';

            if (isCur) {
              return `<option value="${ch.id}" selected style="background: #094771; color: #ffffff; font-weight: bold;">${prefix}${ch.title}</option>`;
            } else {
              return `<option value="${ch.id}" style="background: #202020; color: #cccccc;">${prefix}${ch.title}</option>`;
            }
          }).join('');
        })()}
                    </select>
                    <span class="codicon codicon-chevron-down" style="position: absolute; right: 6px; pointer-events: none; font-size: 11px; color: #858585;"></span>
                  </div>

                  <!-- Close Button -->
                  <div id="btn-close-secondary-sidebar" class="ide-ctrl-btn" style="width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #858585; flex-shrink: 0;" title="Close Assistant (Ctrl+\\)">
                    <span class="codicon codicon-close" style="font-size: 12px;"></span>
                  </div>
                </div>

                <!-- Tutorial Body Content (Scrollable, Clean Document Flow) -->
                <div id="ide-assistant-chat-stream" style="flex: 1; overflow-y: auto; padding: 14px 16px; background: #181818; display: flex; flex-direction: column; gap: 16px; font-size: 13px;">
                  <!-- Chapter Overview (Single Clean Title + White Text) -->
                  <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="font-size: 16px; font-weight: 700; color: #ffffff; line-height: 1.4; letter-spacing: -0.02em;">${currentChapter.title}</div>
                    ${(() => {
          if (!currentChapter.summary) return '';
          if (Array.isArray(currentChapter.summary)) {
            return currentChapter.summary.map(p => this.renderTutorialMarkdown(p.trim())).join('');
          }
          return this.renderTutorialMarkdown(currentChapter.summary.trim());
        })()}
                  </div>

                  <!-- Concepts Section (Clean Typography List) -->
                  ${(currentChapter.concepts && currentChapter.concepts.length > 0) ? `
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                      <div style="font-size: 11px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.04em;">핵심 문법 및 개념</div>
                      <div style="display: flex; flex-direction: column; gap: 12px;">
                        ${currentChapter.concepts.map(c => `
                          <div style="display: flex; flex-direction: column; gap: 4px; padding-left: 10px; border-left: 2px solid #555555;">
                            <div style="font-size: 13px; font-weight: 600; color: #ffffff; letter-spacing: -0.01em;">${c.title}</div>
                            <div style="font-size: 12.5px; color: #ffffff; line-height: 1.65; opacity: 0.9;">${c.desc}</div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}

                  <!-- Syntax Reference Code Block (Clean General Syntax, Not The Answer) -->
                  ${currentChapter.syntaxExample ? `
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                      <div style="font-size: 11px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.04em;">문법 참조 예제 (Syntax Reference)</div>
                      <pre style="margin: 0; padding: 12px 14px; background: #141414; border: 1px solid #282828; border-radius: 4px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 19px; color: #ffffff; overflow-x: auto; white-space: pre; font-variant-ligatures: none !important; font-feature-settings: 'liga' 0, 'calt' 0 !important;">${this.highlightPythonCode(currentChapter.syntaxExample)}</pre>
                    </div>
                  ` : ''}

                  <!-- Interactive Practice Task Section -->
                  ${currentChapter.taskDescription ? `
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                      <div style="font-size: 11px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.04em; display: flex; align-items: center; gap: 5px;">
                        <span class="codicon codicon-edit" style="font-size: 13px;"></span>
                        <span>실습 과제 (Coding Exercise)</span>
                      </div>
                      <div style="font-size: 12.5px; color: #ffffff; line-height: 1.65; background: #1e1e1e; border: 1px solid #333333; border-radius: 4px; padding: 12px 14px; white-space: pre-line;">${this.escapeHtml(currentChapter.taskDescription.trim())}</div>
                    </div>
                  ` : ''}

                  <!-- Expected Terminal Output Block (Exact Match with Terminal Design) -->
                  ${currentChapter.output ? `
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                      <div style="font-size: 11px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.04em; display: flex; align-items: center; gap: 5px;">
                        <span class="codicon codicon-terminal" style="font-size: 12px;"></span>
                        <span>실습 목표 실행 결과 (Target Output)</span>
                      </div>
                      <div style="background: #181818; border: 1px solid #2b2b2b; border-radius: 4px; padding: 10px 14px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 19px; color: #ffffff; overflow-x: auto; font-variant-ligatures: none !important; font-feature-settings: 'liga' 0, 'calt' 0 !important;">
                        <div style="color: #aaaaaa; font-size: 11.5px; margin-bottom: 6px; user-select: none;">PS C:\\Learn&gt; python main.py</div>
                        <pre style="margin: 0; padding: 0; background: transparent; border: none; font-family: inherit; font-size: inherit; line-height: inherit; color: #ffffff; white-space: pre;">${this.escapeHtml(currentChapter.output)}</pre>
                      </div>
                    </div>
                  ` : ''}

                  <!-- Hint and Collapsible Solution Accordion -->
                  ${currentChapter.hint ? `
                    <div style="font-size: 12px; color: #dcdcaa; background: rgba(220, 220, 170, 0.07); border: 1px solid rgba(220, 220, 170, 0.2); border-radius: 4px; padding: 9px 12px; display: flex; gap: 8px; align-items: flex-start;">
                      <span class="codicon codicon-lightbulb" style="font-size: 14px; flex-shrink: 0; margin-top: 1px; color: #dcdcaa;"></span>
                      <span style="line-height: 1.5; color: #ffffff;"><strong style="color: #ffffff;">힌트:</strong> ${this.escapeHtml(currentChapter.hint)}</span>
                    </div>
                  ` : ''}

                  ${currentChapter.solutionCode ? `
                    <details style="border: 1px solid #2d2d2d; border-radius: 4px; background: #141414; overflow: hidden;">
                      <summary style="padding: 8px 12px; font-size: 12px; font-weight: 600; color: #ffffff; cursor: pointer; user-select: none; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-chevron-right" style="font-size: 11px;"></span>
                        <span>모범 답안 (Solution Code) 확인하기</span>
                      </summary>
                      <pre style="margin: 0; padding: 10px 14px; border-top: 1px solid #222222; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 19px; color: #ffffff; overflow-x: auto; white-space: pre;">${this.highlightPythonCode(currentChapter.solutionCode)}</pre>
                    </details>
                  ` : ''}

                  <!-- Key Takeaways & Checklist -->
                  ${(currentChapter.takeaways && currentChapter.takeaways.length > 0) ? `
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                      <div style="font-size: 11px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.04em;">학습 체크포인트</div>
                      <div style="display: flex; flex-direction: column; gap: 6px;">
                        ${currentChapter.takeaways.map(t => `
                          <div style="font-size: 12.5px; color: #ffffff; line-height: 1.55; padding-left: 12px; position: relative;">
                            <span style="position: absolute; left: 2px; color: #888888;">-</span> ${t}
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                  <!-- Scroll Sentinel at bottom of content -->
                  <div id="tutorial-bottom-sentinel" style="height: 2px; width: 100%; pointer-events: none;"></div>
                </div>

                <!-- Tutorial Unified Bottom Action Strip -->
                <div style="height: 38px; padding: 0 10px; background: #141414; border-top: 1px solid #282828; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-shrink: 0;">
                  <button id="btn-tutorial-prev" ${this.currentTutorialStep <= 1 ? 'disabled style="opacity: 0.4; cursor: not-allowed;' : 'style="cursor: pointer;'} background: #202020; border: 1px solid #333333; border-radius: 3px; color: #cccccc; padding: 3px 8px; font-size: 11.5px; display: flex; align-items: center; gap: 4px;">
                    <span class="codicon codicon-arrow-left"></span>
                    <span>이전</span>
                  </button>

                  <div style="display: flex; align-items: center; gap: 10px; font-size: 11px;">
                    <span id="status-scroll" style="display: flex; align-items: center; gap: 3px; color: ${isCurScrolled ? '#4ec9b0' : '#777777'};" title="본문 끝까지 스크롤">
                      <span class="codicon ${isCurScrolled ? 'codicon-check' : 'codicon-circle-outline'}" style="font-size: 11px;"></span>
                      <span>스크롤</span>
                    </span>
                    <span id="status-run" style="display: flex; align-items: center; gap: 3px; color: ${isCurExecuted ? '#4ec9b0' : '#777777'};" title="코드 실행 및 출력 일치">
                      <span class="codicon ${isCurExecuted ? 'codicon-check' : 'codicon-circle-outline'}" style="font-size: 11px;"></span>
                      <span>실행</span>
                    </span>
                    <span style="font-family: 'JetBrains Mono', Consolas, monospace; font-size: 11px; color: #858585;">${this.currentTutorialStep}/${totalChapters}</span>
                  </div>

                  <button id="btn-tutorial-next" ${this.currentTutorialStep < totalChapters ? 'style="cursor: pointer; background: #0078d4; color: #ffffff; border: none; border-radius: 3px; padding: 3px 12px; font-size: 11.5px; font-weight: 700; display: flex; align-items: center; gap: 4px;"' : 'disabled style="opacity: 0.4; cursor: not-allowed; background: #202020; color: #777777; border: 1px solid #333333; border-radius: 3px; padding: 3px 12px; font-size: 11.5px; font-weight: 700; display: flex; align-items: center; gap: 4px;"'} title="${this.currentTutorialStep < totalChapters ? '다음 챕터로 이동' : '마지막 챕터입니다.'}">
                    <span>${this.currentTutorialStep >= totalChapters ? '완료' : '다음'}</span>
                    <span class="codicon codicon-arrow-right"></span>
                  </button>
                </div>

              </div>
            ` : ''}
          </div>
        </div>
      `;

    // Mount Real-time Python Editor & IntelliSense Controller
    this.initPythonEditor();
    this.initIdeSashes();
    this.initTutorialScrollGate();
    this.initTabDragAndDrop();
    this.initInlineCreateInput();
  }

  initIdeSashes() {
    const leftSash = document.getElementById('ide-sash-left');
    const leftSidebar = document.getElementById('ide-left-sidebar');
    const rightSash = document.getElementById('ide-sash-right');
    const rightSidebar = document.getElementById('ide-secondary-sidebar');
    const bottomSash = document.getElementById('ide-sash-bottom');
    const terminalPanel = document.getElementById('ide-terminal-panel');
    const cornerLeft = document.getElementById('ide-sash-corner-left');
    const cornerRight = document.getElementById('ide-sash-corner-right');

    let rafId: number | null = null;
    const updateCornersDirect = () => {
      if (cornerLeft && leftSidebar && terminalPanel) {
        cornerLeft.style.left = `${leftSidebar.offsetWidth - 6}px`;
        cornerLeft.style.bottom = `${terminalPanel.offsetHeight - 6}px`;
      }
      if (cornerRight && rightSidebar && terminalPanel) {
        cornerRight.style.right = `${rightSidebar.offsetWidth - 6}px`;
        cornerRight.style.bottom = `${terminalPanel.offsetHeight - 6}px`;
      }
    };

    const queueUpdate = (fn: () => void) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        fn();
        updateCornersDirect();
      });
    };

    // 1. Left Sash (Explorer Width)
    if (leftSash && leftSidebar) {
      leftSash.addEventListener('pointerdown', (e: PointerEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = leftSidebar.offsetWidth;
        leftSash.classList.add('active');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const onMove = (me: PointerEvent) => {
          const deltaX = me.clientX - startX;
          const newWidth = Math.max(170, Math.min(500, startWidth + deltaX));
          this.explorerWidth = newWidth;
          queueUpdate(() => {
            leftSidebar.style.width = `${newWidth}px`;
          });
        };

        const onUp = () => {
          leftSash.classList.remove('active');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          try {
            sessionStorage.setItem('ide_explorer_width', String(this.explorerWidth));
          } catch (err: unknown) { }
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      });
    }

    // 2. Right Sash (Tutorial / Secondary Sidebar Width)
    if (rightSash && rightSidebar) {
      rightSash.addEventListener('pointerdown', (e: PointerEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = rightSidebar.offsetWidth;
        rightSash.classList.add('active');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        const onMove = (me: PointerEvent) => {
          const deltaX = me.clientX - startX;
          const newWidth = Math.max(280, Math.min(850, startWidth - deltaX));
          this.secondarySidebarWidth = newWidth;
          queueUpdate(() => {
            rightSidebar.style.width = `${newWidth}px`;
          });
        };

        const onUp = () => {
          rightSash.classList.remove('active');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          try {
            sessionStorage.setItem('ide_secondary_sidebar_width', String(this.secondarySidebarWidth));
          } catch (err: unknown) { }
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      });
    }

    // 3. Bottom Sash (Terminal Height)
    if (bottomSash && terminalPanel) {
      bottomSash.addEventListener('pointerdown', (e: PointerEvent) => {
        e.preventDefault();
        const startY = e.clientY;
        const startHeight = terminalPanel.offsetHeight;
        bottomSash.classList.add('active');
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';

        const onMove = (me: PointerEvent) => {
          const deltaY = me.clientY - startY;
          const newHeight = Math.max(90, Math.min(600, startHeight - deltaY));
          this.terminalDrawerHeight = newHeight;
          queueUpdate(() => {
            terminalPanel.style.height = `${newHeight}px`;
          });
        };

        const onUp = () => {
          bottomSash.classList.remove('active');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          try {
            sessionStorage.setItem('ide_terminal_drawer_height', String(this.terminalDrawerHeight));
          } catch (err: unknown) { }
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      });
    }

    // 4. Corner Left Sash (2D Explorer Width + Terminal Height)
    if (cornerLeft && leftSidebar && terminalPanel) {
      cornerLeft.addEventListener('pointerdown', (e: PointerEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = leftSidebar.offsetWidth;
        const startHeight = terminalPanel.offsetHeight;
        cornerLeft.classList.add('active');
        document.body.style.cursor = 'nesw-resize';
        document.body.style.userSelect = 'none';

        const onMove = (me: PointerEvent) => {
          const deltaX = me.clientX - startX;
          const deltaY = me.clientY - startY;
          const newWidth = Math.max(170, Math.min(500, startWidth + deltaX));
          const newHeight = Math.max(90, Math.min(600, startHeight - deltaY));
          this.explorerWidth = newWidth;
          this.terminalDrawerHeight = newHeight;
          queueUpdate(() => {
            leftSidebar.style.width = `${newWidth}px`;
            terminalPanel.style.height = `${newHeight}px`;
          });
        };

        const onUp = () => {
          cornerLeft.classList.remove('active');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          try {
            sessionStorage.setItem('ide_explorer_width', String(this.explorerWidth));
            sessionStorage.setItem('ide_terminal_drawer_height', String(this.terminalDrawerHeight));
          } catch (err: unknown) { }
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      });
    }

    // 5. Corner Right Sash (2D Tutorial Width + Terminal Height)
    if (cornerRight && rightSidebar && terminalPanel) {
      cornerRight.addEventListener('pointerdown', (e: PointerEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = rightSidebar.offsetWidth;
        const startHeight = terminalPanel.offsetHeight;
        cornerRight.classList.add('active');
        document.body.style.cursor = 'nwse-resize';
        document.body.style.userSelect = 'none';

        const onMove = (me: PointerEvent) => {
          const deltaX = me.clientX - startX;
          const deltaY = me.clientY - startY;
          const newWidth = Math.max(280, Math.min(850, startWidth - deltaX));
          const newHeight = Math.max(90, Math.min(600, startHeight - deltaY));
          this.secondarySidebarWidth = newWidth;
          this.terminalDrawerHeight = newHeight;
          queueUpdate(() => {
            rightSidebar.style.width = `${newWidth}px`;
            terminalPanel.style.height = `${newHeight}px`;
          });
        };

        const onUp = () => {
          cornerRight.classList.remove('active');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          try {
            sessionStorage.setItem('ide_secondary_sidebar_width', String(this.secondarySidebarWidth));
            sessionStorage.setItem('ide_terminal_drawer_height', String(this.terminalDrawerHeight));
          } catch (err: unknown) { }
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
        };

        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
      });
    }
  }

  setTutorialStep(step: number) {
    const chapters = PYTHON_TUTORIAL_DATA.chapters;
    const targetStep = Math.max(1, Math.min(chapters.length, step));
    this.currentTutorialStep = targetStep;
    try {
      sessionStorage.setItem('python_tutorial_step', String(targetStep));
    } catch (e: unknown) { }
    this.renderPythonIDE();
  }

  insertTutorialCodeToEditor(step?: number) {
    const targetStep = step || this.currentTutorialStep || 1;
    const chapter = PYTHON_TUTORIAL_DATA.chapters.find(c => c.id === targetStep);
    if (!chapter) return;

    let files = this.getIDEFiles();
    let activeFile = this.activeIDEFile;

    if (!activeFile) {
      activeFile = 'main.py';
      this.activeIDEFile = activeFile;
      this.saveActiveIDEFile(activeFile);
      let tabs = this.getOpenIDETabs();
      if (!tabs.includes('main.py')) {
        tabs.push('main.py');
        this.openIDETabs = tabs;
        this.saveOpenIDETabs(tabs);
      }
    }

    files[activeFile] = chapter.starterCode || chapter.code || chapter.solutionCode;
    this.saveIDEFiles(files);
    this.setFileDirty(activeFile, false);
    this.renderPythonIDE();
    this.showSafetyToast(`Ch.${targetStep} 실습 코드를 '${activeFile}'에 불러왔습니다.`, 'info');
  }

  triggerAutocomplete(textarea: HTMLTextAreaElement, popup: HTMLElement | null) {
    if (!popup) return;
    if (!popup || !textarea) return;

    const val = textarea.value;
    const cursorPos = textarea.selectionStart;

    // Selection active or empty text -> immediately close
    if (textarea.selectionEnd !== cursorPos || !val) {
      popup.style.display = 'none';
      this.acMatches = [];
      return;
    }

    const textBefore = val.substring(0, cursorPos);
    const lines = textBefore.split('\n');
    const curLine = lines[lines.length - 1] || '';

    // 1. If line is empty or whitespace only -> HIDE
    if (!curLine.trim()) {
      popup.style.display = 'none';
      this.acMatches = [];
      return;
    }

    // 2. If line contains a comment # before the cursor -> HIDE
    if (curLine.includes('#')) {
      popup.style.display = 'none';
      this.acMatches = [];
      return;
    }

    // 3. If cursor is preceded by space, newline, or syntax delimiter (except dot) -> HIDE
    if (/[\s,;:()[\]{}"']$/.test(curLine)) {
      popup.style.display = 'none';
      this.acMatches = [];
      return;
    }

    // 4. Extract member dot access (requires a valid receiver before the dot) or identifier
    const dotMatch = curLine.match(/(?:[a-zA-Z0-9_\]\)"'])\.([a-zA-Z_]\w*)?$/);
    let isDot = false;
    let token = '';

    if (dotMatch) {
      isDot = true;
      token = (dotMatch[1] || '').toLowerCase();
    } else {
      // Lone dot without a valid receiver (e.g. '.', ' .', '= .', '( .') -> HIDE
      if (/\.$/.test(curLine)) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      const wordMatch = curLine.match(/([a-zA-Z_]\w*)$/);
      if (!wordMatch) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }
      token = wordMatch[1].toLowerCase();
    }

    // Require at least 1 character for identifiers
    if (!isDot && (!token || token.length === 0)) {
      popup.style.display = 'none';
      this.acMatches = [];
      return;
    }

    // 5. Query candidate symbols
    const builtinDb = this.getIntelliSenseDatabase();
    const userSymbols = this.extractUserSymbols(val);
    const combined = [...userSymbols, ...builtinDb];

    let filtered;
    if (isDot) {
      filtered = combined.filter(item => item.type === 'method' && (!token || item.name.toLowerCase().startsWith(token)));
    } else {
      filtered = combined.filter(item => item.name.toLowerCase().startsWith(token));
    }

    if (!filtered.length) {
      popup.style.display = 'none';
      this.acMatches = [];
      return;
    }

    this.acMatches = filtered.slice(0, 10);
    this.acToken = token;
    this.acIsDot = isDot;
    this.acSelectedIndex = 0;
    this.renderAutocompletePopup(popup);

    // 6. Calculate Caret Coordinates and position popup
    const coords = this.getCaretCoordinates(textarea, cursorPos);
    const parentEl = textarea.parentElement;
    const containerWidth = parentEl ? parentEl.clientWidth : 600;
    const containerHeight = parentEl ? parentEl.clientHeight : 400;
    const popupWidth = 520;
    const popupHeight = 220;

    let topPos = coords.top - textarea.scrollTop + coords.lineHeight + 16;
    if (topPos + popupHeight > containerHeight - 10 && coords.top - textarea.scrollTop > popupHeight) {
      topPos = coords.top - textarea.scrollTop - popupHeight - 4;
    }

    let leftPos = coords.left - textarea.scrollLeft + 16;
    if (leftPos + popupWidth > containerWidth - 20) {
      leftPos = Math.max(16, containerWidth - popupWidth - 20);
    }

    popup.style.top = `${Math.max(16, topPos)}px`;
    popup.style.left = `${Math.max(16, leftPos)}px`;
    popup.style.display = 'flex';
  }

  renderAutocompletePopup(popup: HTMLElement | null) {
    if (!popup) return;
    if (!popup || !this.acMatches || !this.acMatches.length) return;
    const activeItem = this.acMatches[this.acSelectedIndex] || this.acMatches[0];

    popup.innerHTML = `
        <div class="ide-ac-list">
          ${this.acMatches.map((item: SymbolItem, idx: number) => {
      const isSelected = idx === this.acSelectedIndex;
      const token = this.acToken || '';
      const matchLen = token.length;
      const name = item.name;
      const labelHtml = matchLen > 0 && name.toLowerCase().startsWith(token) ?
        `<span class="ide-ac-match">${this.escapeHtml(name.substring(0, matchLen))}</span>${this.escapeHtml(name.substring(matchLen))}` :
        this.escapeHtml(name);

      return `
              <div class="ide-ac-item ${isSelected ? 'active' : ''}" data-index="${idx}">
                <div class="ide-ac-icon">${item.icon}</div>
                <div class="ide-ac-label">${labelHtml}</div>
                <div class="ide-ac-type">${item.type}</div>
              </div>
            `;
    }).join('')}
        </div>
        ${activeItem ? `
          <div class="ide-ac-docs">
            <div class="ide-ac-doc-sig">${this.escapeHtml(activeItem.sig || activeItem.name)}</div>
            <div class="ide-ac-doc-desc">${this.escapeHtml(activeItem.desc || '')}</div>
          </div>
        ` : ''}
      `;

    popup.querySelectorAll('.ide-ac-item').forEach(el => {
      el.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        const idx = parseInt(el.getAttribute('data-index') || '0', 10);
        this.acSelectedIndex = idx;
        const textarea = (document.getElementById('ide-code-input') as HTMLTextAreaElement | null);
        if (textarea) this.acceptAutocomplete(textarea, popup);
      });
    });
  }

  navigateAutocomplete(delta: number) {
    if (!this.acMatches || !this.acMatches.length) return;
    this.acSelectedIndex = (this.acSelectedIndex + delta + this.acMatches.length) % this.acMatches.length;
    const popup = document.getElementById('ide-autocomplete-popup');
    if (popup) {
      this.renderAutocompletePopup(popup);
      const activeEl = popup.querySelector('.ide-ac-item.active');
      if (activeEl) activeEl.scrollIntoView({ block: 'nearest' });
    }
  }

  acceptAutocomplete(textarea: HTMLTextAreaElement, popup: HTMLElement | null) {
    if (!popup) return;
    if (!this.acMatches || !this.acMatches[this.acSelectedIndex]) return;
    const chosen = this.acMatches[this.acSelectedIndex];
    const cursorPos = textarea.selectionStart;
    const textBefore = textarea.value.substring(0, cursorPos);

    let tokenLen = 0;
    const dotMatch = textBefore.match(/(?:[a-zA-Z0-9_\]\)"'])\.([a-zA-Z_]\w*)$/);
    if (dotMatch) {
      tokenLen = (dotMatch[1] || '').length;
    } else {
      const wordMatch = textBefore.match(/([a-zA-Z_]\w*)$/);
      if (wordMatch) {
        tokenLen = wordMatch[1].length;
      }
    }

    const beforeToken = textBefore.substring(0, textBefore.length - tokenLen);
    const afterToken = textarea.value.substring(cursorPos);

    let insertValue = chosen.name;
    let newCursorOffset = insertValue.length;

    // Smart insert with function call parenthesis
    if (chosen.type === 'function' || chosen.type === 'method') {
      insertValue += '()';
      newCursorOffset = insertValue.length - 1; // place inside ()
    } else if (chosen.type === 'keyword' && ['def', 'class', 'if', 'elif', 'for', 'while', 'import', 'from', 'as', 'return', 'raise', 'with', 'try', 'except', 'finally', 'async', 'await', 'lambda'].includes(chosen.name)) {
      insertValue += ' ';
      newCursorOffset = insertValue.length;
    }

    textarea.value = beforeToken + insertValue + afterToken;
    textarea.selectionStart = textarea.selectionEnd = beforeToken.length + newCursorOffset;
    popup.style.display = 'none';
    this.acMatches = [];
    this.acSuppress = true;
    textarea.focus();
    textarea.dispatchEvent(new Event('input'));
  }

  checkChapterOutputMatch(userOutput: string, expectedOutput: string) {
    if (!expectedOutput) return true;
    const clean = (str: string) => (str || '')
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0)
      .join('\n');

    const uClean = clean(userOutput);
    const eClean = clean(expectedOutput);
    if (uClean === eClean) return true;

    // Match if all expected lines appear in user output in order or if user output contains the expected text
    if (uClean.includes(eClean)) return true;

    const eLines = eClean.split('\n');
    const uLines = uClean.split('\n');
    let matchCount = 0;
    let uIdx = 0;
    for (const el of eLines) {
      while (uIdx < uLines.length) {
        if (uLines[uIdx] === el || uLines[uIdx].includes(el) || el.includes(uLines[uIdx])) {
          matchCount++;
          uIdx++;
          break;
        }
        uIdx++;
      }
    }
    return matchCount >= Math.max(1, Math.floor(eLines.length * 0.7));
  }

  updateTutorialChecklistUI() {
    const curStep = this.currentTutorialStep || 1;
    this.chapterScrolled = this.chapterScrolled || {};
    this.chapterExecuted = this.chapterExecuted || {};
    this.completedChapters = this.completedChapters || {};

    const isScrolled = !!this.chapterScrolled[curStep];
    const isExecuted = !!this.chapterExecuted[curStep];
    const isCompleted = !!this.completedChapters[curStep] || (isScrolled && isExecuted);
    if (isScrolled && isExecuted && !this.completedChapters[curStep]) {
      this.completedChapters[curStep] = true;
      try {
        sessionStorage.setItem('python_tutorial_completed', JSON.stringify(this.completedChapters));
      } catch (e: unknown) { }
    }

    const badgeElem = document.getElementById('status-badge');
    if (badgeElem) {
      badgeElem.style.color = isCompleted ? '#4ec9b0' : '#858585';
      badgeElem.textContent = isCompleted ? '잠금 해제 완료' : '학습 진행 중';
    }

    const scrollElem = document.getElementById('status-scroll');
    if (scrollElem) {
      scrollElem.style.color = isScrolled ? '#4ec9b0' : '#777777';
      scrollElem.innerHTML = `<span class="codicon ${isScrolled ? 'codicon-check' : 'codicon-circle-outline'}" style="font-size: 11px; color: ${isScrolled ? '#4ec9b0' : '#777777'};"></span><span>스크롤</span>`;
    }

    const runElem = document.getElementById('status-run');
    if (runElem) {
      runElem.style.color = isExecuted ? '#4ec9b0' : '#777777';
      runElem.innerHTML = `<span class="codicon ${isExecuted ? 'codicon-check' : 'codicon-circle-outline'}" style="font-size: 11px; color: ${isExecuted ? '#4ec9b0' : '#777777'};"></span><span>실행</span>`;
    }

    const nextBtn = document.getElementById('btn-tutorial-next') as HTMLButtonElement | null;
    if (nextBtn) {
      const totalChapters = PYTHON_TUTORIAL_DATA.chapters.length;
      if (curStep >= totalChapters) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.4';
        nextBtn.style.cursor = 'not-allowed';
        nextBtn.style.background = '#252526';
        nextBtn.style.color = '#858585';
        nextBtn.style.border = '1px solid #3c3c3c';
      } else if (isCompleted) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
        nextBtn.style.background = '#ffffff';
        nextBtn.style.color = '#121212';
        nextBtn.style.border = 'none';
        nextBtn.title = '다음 챕터로 이동';
      } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '0.55';
        nextBtn.style.cursor = 'not-allowed';
        nextBtn.style.background = '#252526';
        nextBtn.style.color = '#858585';
        nextBtn.style.border = '1px solid #3c3c3c';
        nextBtn.title = '본문을 끝까지 읽고 코드를 실행하여 출력을 일치시키면 잠금이 해제됩니다.';
      }
    }
  }
  initTutorialScrollGate() {
    const chatStream = document.getElementById('ide-assistant-chat-stream');
    if (!chatStream) return;

    const triggerScrollComplete = () => {
      const curStep = this.currentTutorialStep || 1;
      this.chapterScrolled = this.chapterScrolled || {};
      if (!this.chapterScrolled[curStep]) {
        this.chapterScrolled[curStep] = true;
        try {
          sessionStorage.setItem('python_tutorial_scrolled', JSON.stringify(this.chapterScrolled));
        } catch (e: unknown) { }
        this.updateTutorialChecklistUI();
      }
    };

    const checkScroll = () => {
      // Tolerant bottom check: within 120px of bottom, or content fits within viewport
      const isBottom = (chatStream.scrollHeight - chatStream.scrollTop - chatStream.clientHeight) <= 120 || (chatStream.scrollHeight <= chatStream.clientHeight + 30);
      if (isBottom) {
        triggerScrollComplete();
      }
    };

    chatStream.addEventListener('scroll', checkScroll, { passive: true });

    // Immediate and delayed checks for layout stabilization
    checkScroll();
    setTimeout(checkScroll, 60);
    setTimeout(checkScroll, 200);
    setTimeout(checkScroll, 500);

    // IntersectionObserver on sentinel element at bottom of scrollable content
    const sentinel = document.getElementById('tutorial-bottom-sentinel');
    if (sentinel && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            triggerScrollComplete();
          }
        });
      }, {
        root: chatStream,
        threshold: 0.05
      });
      observer.observe(sentinel);
    }
  }

  initInlineCreateInput() {
    const input = document.getElementById('ide-inline-create-input') as HTMLInputElement | null;
    if (!input || !this.inlineCreatingItem) return;

    input.focus();

    let committed = false;
    const commit = () => {
      if (committed) return;
      committed = true;
      const val = input.value.trim();
      const item = this.inlineCreatingItem;
      this.inlineCreatingItem = null;

      if (!val || !item) {
        this.renderPythonIDE();
        return;
      }

      if (item.type === 'file') {
        let cleanName = val;
        if (!cleanName.includes('.')) cleanName += '.py';
        const fullPath = item.parentFolder ? `${item.parentFolder}/${cleanName}` : cleanName;
        const files = this.getIDEFiles();
        if (!files[fullPath]) {
          files[fullPath] = '';
          this.saveIDEFiles(files);
        }
        if (item.parentFolder) {
          const folders = this.getIDEFolders();
          if (!folders.includes(item.parentFolder)) {
            folders.push(item.parentFolder);
            this.saveIDEFolders(folders);
          }
          if (this.collapsedFolders) this.collapsedFolders[item.parentFolder] = false;
        }
        this.activeIDEFile = fullPath;
        const tabs = this.getOpenIDETabs();
        if (!tabs.includes(fullPath)) tabs.push(fullPath);
        this.openIDETabs = tabs;
        this.saveOpenIDETabs(tabs);
        this.saveActiveIDEFile(fullPath);
        this.selectedExplorerFolder = item.parentFolder;
      } else if (item.type === 'folder') {
        const cleanFolder = val.replace(/[\\\/]/g, '');
        if (cleanFolder) {
          const fullFolder = item.parentFolder ? `${item.parentFolder}/${cleanFolder}` : cleanFolder;
          const folders = this.getIDEFolders();
          if (!folders.includes(fullFolder)) {
            folders.push(fullFolder);
            this.saveIDEFolders(folders);
          }
          if (item.parentFolder && this.collapsedFolders) this.collapsedFolders[item.parentFolder] = false;
          this.selectedExplorerFolder = fullFolder;
        }
      }

      this.renderPythonIDE();
    };

    const cancel = () => {
      if (committed) return;
      committed = true;
      this.inlineCreatingItem = null;
      this.renderPythonIDE();
    };

    input.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        commit();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancel();
      }
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        commit();
      }, 120);
    });
  }

  initTabDragAndDrop() {
    const tabStrip = document.getElementById('ide-tab-strip');
    if (!tabStrip) return;

    // Mouse wheel horizontal scroll
    tabStrip.addEventListener('wheel', (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        tabStrip.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    let draggedFile: string | null = null;

    const clearDropIndicators = () => {
      const tabs = tabStrip.querySelectorAll('.ide-editor-tab');
      tabs.forEach((tab) => {
        const el = tab as HTMLElement;
        el.style.borderLeft = '';
        el.style.borderRight = '';
        el.style.opacity = '1';
      });
    };

    tabStrip.addEventListener('dragstart', (e: DragEvent) => {
      const target = (e.target as HTMLElement)?.closest('.ide-editor-tab') as HTMLElement | null;
      if (!target) return;
      const file = target.getAttribute('data-file');
      if (!file) return;

      draggedFile = file;
      if (e.dataTransfer) {
        e.dataTransfer.setData('text/plain', file);
        e.dataTransfer.effectAllowed = 'move';
      }
      setTimeout(() => {
        target.style.opacity = '0.4';
      }, 0);
    });

    tabStrip.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault();
      if (!draggedFile) return;
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'move';
      }

      const targetTab = (e.target as HTMLElement)?.closest('.ide-editor-tab') as HTMLElement | null;
      if (!targetTab) return;

      const targetFile = targetTab.getAttribute('data-file');
      if (!targetFile || targetFile === draggedFile) return;

      clearDropIndicators();
      const rect = targetTab.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      if (e.clientX < midX) {
        targetTab.style.borderLeft = '2px solid #0078d4';
      } else {
        targetTab.style.borderRight = '2px solid #0078d4';
      }
    });

    tabStrip.addEventListener('dragleave', (e: DragEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !tabStrip.contains(related)) {
        clearDropIndicators();
      }
    });

    tabStrip.addEventListener('drop', (e: DragEvent) => {
      e.preventDefault();
      if (!draggedFile) return;

      const targetTab = (e.target as HTMLElement)?.closest('.ide-editor-tab') as HTMLElement | null;
      if (!targetTab) {
        clearDropIndicators();
        draggedFile = null;
        return;
      }

      const targetFile = targetTab.getAttribute('data-file');
      if (!targetFile || targetFile === draggedFile) {
        clearDropIndicators();
        draggedFile = null;
        return;
      }

      const openTabs = this.openIDETabs !== undefined ? this.openIDETabs : this.getOpenIDETabs();
      const fromIndex = openTabs.indexOf(draggedFile);
      const toIndex = openTabs.indexOf(targetFile);

      if (fromIndex !== -1 && toIndex !== -1) {
        const rect = targetTab.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        const isAfter = e.clientX >= midX;
        let finalIndex = toIndex;
        if (fromIndex < toIndex && !isAfter) finalIndex = toIndex - 1;
        if (fromIndex > toIndex && isAfter) finalIndex = toIndex + 1;

        const nextTabs = [...openTabs];
        const [moved] = nextTabs.splice(fromIndex, 1);
        if (moved) {
          nextTabs.splice(Math.max(0, Math.min(nextTabs.length, finalIndex)), 0, moved);
          this.openIDETabs = nextTabs;
          this.saveOpenIDETabs(nextTabs);
          this.renderPythonIDE();
        }
      }

      clearDropIndicators();
      draggedFile = null;
    });

    tabStrip.addEventListener('dragend', () => {
      clearDropIndicators();
      draggedFile = null;
    });
  }

  initPythonEditor() {
    const textarea = (document.getElementById('ide-code-input') as HTMLTextAreaElement | null);
    const highlightDisplay = document.getElementById('ide-highlight-display');
    const lineNumbers = document.getElementById('ide-line-numbers');
    const popup = document.getElementById('ide-autocomplete-popup');
    if (!textarea || !highlightDisplay) return;

    const curEditingFile = textarea.getAttribute('data-file') || '' || this.activeIDEFile || 'main.py';
    const files = this.getIDEFiles();
    if (!textarea.value && files[curEditingFile] !== undefined) {
      textarea.value = files[curEditingFile];
    }

    let saveTimer: number | null = null;
    const debouncedSave = () => {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        const text = textarea.value;
        const curActive = textarea.getAttribute('data-file') || '' || this.activeIDEFile || 'main.py';
        const curFiles = this.getIDEFiles();
        curFiles[curActive] = text;
        this.saveIDEFiles(curFiles);
      }, 250);
    };

    const flushSave = () => {
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
      }
      const text = textarea.value;
      const curActive = textarea.getAttribute('data-file') || '' || this.activeIDEFile || 'main.py';
      const curFiles = this.getIDEFiles();
      curFiles[curActive] = text;
      this.saveIDEFiles(curFiles);
    };

    let lastRenderedText = '';
    let cachedLines: string[] = [];
    let cachedIndents: number[] = [];
    let renderedStartLine = -1;
    let renderedEndLine = -1;
    let cachedDiagMap: Map<number, DiagnosticProblem[]> = createDiagnosticMap(this.ideProblems || []);
    let lintTimer: number | null = null;
    let scrollRaf: number | null = null;

    const LINE_HEIGHT = 20;
    const PADDING_TOP = 12;
    const OVERSCAN = 20;

    const renderViewport = (force = false) => {
      const text = textarea.value;
      if (text !== lastRenderedText) {
        lastRenderedText = text;
        cachedLines = text.split('\n');
        cachedIndents = computeIndents(cachedLines);
      }

      const lines = cachedLines;
      const totalLines = Math.max(1, lines.length);

      const scrollTop = textarea.scrollTop;
      const clientHeight = textarea.clientHeight || 400;
      const scrollLeft = textarea.scrollLeft;

      const visibleStart = Math.max(0, Math.floor((scrollTop - PADDING_TOP) / LINE_HEIGHT));
      const visibleCount = Math.ceil(clientHeight / LINE_HEIGHT);

      const startLine = Math.max(0, visibleStart - OVERSCAN);
      const endLine = Math.min(totalLines, visibleStart + visibleCount + OVERSCAN);

      if (force || startLine !== renderedStartLine || endLine !== renderedEndLine) {
        renderedStartLine = startLine;
        renderedEndLine = endLine;

        highlightDisplay.innerHTML = highlightPythonSlice(lines, startLine, endLine, cachedDiagMap, cachedIndents);

        if (lineNumbers) {
          lineNumbers.innerHTML = UICore.renderVirtualizedLineNumbersHtml(startLine, endLine, cachedDiagMap);
        }
      }

      const offsetY = startLine * LINE_HEIGHT + PADDING_TOP - scrollTop;
      highlightDisplay.style.transform = `translate(${-scrollLeft}px, ${offsetY}px)`;
      if (lineNumbers) {
        lineNumbers.style.transform = `translateY(${offsetY}px)`;
      }
    };

    const renderProblemsPaneContent = (problems: DiagnosticProblem[]) => {
      const problemsTab = document.getElementById('tab-terminal-problems');
      if (problemsTab) {
        problemsTab.innerHTML = `Problems${problems.length > 0 ? ` <span style="background: #e51400; color: #ffffff; border-radius: 10px; padding: 1px 6px; font-size: 10px;">${problems.length}</span>` : ''}`;
      }

      const problemsPane = document.getElementById('ide-terminal-problems-pane');
      if (problemsPane) {
        if (problems.length > 0) {
          problemsPane.innerHTML = `
              <div style="display: flex; flex-direction: column; gap: 4px;">
                ${problems.map(p => `
                  <div class="btn-problem-item" data-file="${p.file}" data-line="${p.line}" data-col="${p.col}" style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #cccccc; cursor: pointer; padding: 4px 8px; border-radius: 3px;" title="Click to jump to line ${p.line}">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="${p.severity === 'warning' ? '#cca700' : '#f14c4c'}"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.2a5.8 5.8 0 1 1 0 11.6A5.8 5.8 0 0 1 8 2.2zm-.7 3.3h1.4v4H7.3v-4zm0 5h1.4v1.4H7.3v-1.4z"/></svg>
                    <span style="color: ${p.severity === 'warning' ? '#cca700' : '#f14c4c'}; font-weight: 600;">[${p.severity === 'warning' ? 'Warning' : 'Error'}]</span>
                    <span>${this.escapeHtml(p.message)}</span>
                    <span style="color: #858585; font-size: 11.5px; margin-left: auto; font-family: 'JetBrains Mono', Consolas, monospace;">${p.file} [${p.line}, ${p.col}]</span>
                  </div>
                `).join('')}
              </div>
            `;
        } else {
          problemsPane.innerHTML = `
              <div style="display: flex; align-items: center; gap: 8px; color: #858585; font-size: 12.5px; padding-top: 4px;">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="#858585"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>
                <span>No problems have been detected in the workspace.</span>
              </div>
            `;
        }
      }
    };

    const scheduleLint = () => {
      if (lintTimer) clearTimeout(lintTimer);
      lintTimer = setTimeout(() => {
        const text = textarea.value;
        const curActive = textarea.getAttribute('data-file') || '' || this.activeIDEFile || 'main.py';
        const problems = this.lintPythonCode(text, curActive);
        this.ideProblems = problems;
        cachedDiagMap = createDiagnosticMap(problems);

        renderViewport(true);
        renderProblemsPaneContent(problems);
      }, 180);
    };

    const updateHighlight = () => {
      debouncedSave();
      renderViewport(true);
      scheduleLint();
      if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
    };

    // Input Event: live highlight & trigger autocomplete
    textarea.addEventListener('input', () => {
      updateHighlight();
      if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
      if (this.acSuppress) {
        this.acSuppress = false;
        return;
      }
      this.triggerAutocomplete(textarea, popup);
    });

    // Synchronize Scroll across Textarea, Highlight Display, and Gutter Line Numbers
    const syncScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = null;
        renderViewport(false);
      });
    };

    // Auto-scroll viewport to follow active cursor line
    const scrollCursorIntoView = () => {
      if (!textarea) return;
      const pos = textarea.selectionStart || 0;
      const textBefore = textarea.value.substring(0, pos);
      const lineIndex = (textBefore.match(/\n/g) || []).length;

      const cursorTop = lineIndex * LINE_HEIGHT + PADDING_TOP;
      const cursorBottom = cursorTop + LINE_HEIGHT;
      const viewportTop = textarea.scrollTop;
      const viewportHeight = textarea.clientHeight;
      const viewportBottom = viewportTop + viewportHeight;

      if (cursorBottom > viewportBottom - 8) {
        textarea.scrollTop = cursorBottom - viewportHeight + 20;
        renderViewport(false);
      } else if (cursorTop < viewportTop + 8) {
        textarea.scrollTop = Math.max(0, cursorTop - 12);
        renderViewport(false);
      }
    };

    textarea.addEventListener('scroll', () => {
      if (popup) popup.style.display = 'none';
      syncScroll();
    }, { passive: true });

    // Initial viewport render
    renderViewport(true);
    scheduleLint();

    // Switch cursor to default arrow pointer when hovering over scrollbar area
    textarea.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = textarea.getBoundingClientRect();
      if (e.clientX >= rect.right - 14) {
        textarea.style.cursor = 'default';
      } else {
        textarea.style.cursor = 'text';
      }
    });
    textarea.addEventListener('mouseleave', () => {
      textarea.style.cursor = 'text';
    });

    // Keyboard Event: VS Code Smart Keybindings & Autocomplete controls
    textarea.addEventListener('keydown', (e: KeyboardEvent) => {
      // Autocomplete keyboard control
      if (popup && popup.style.display === 'flex') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.navigateAutocomplete(1);
          return;
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.navigateAutocomplete(-1);
          return;
        }
        if (e.key === 'Tab' || e.key === 'Enter') {
          e.preventDefault();
          this.acceptAutocomplete(textarea, popup);
          return;
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          popup.style.display = 'none';
          return;
        }
      }

      // Ctrl + / : Toggle Comment
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const val = textarea.value;
        const lineStart = val.lastIndexOf('\n', start - 1) + 1;
        let lineEnd = val.indexOf('\n', end);
        if (lineEnd === -1) lineEnd = val.length;

        const block = val.substring(lineStart, lineEnd);
        const lines = block.split('\n');
        const allCommented = lines.every(l => l.trim().startsWith('#') || !l.trim());
        const newLines = lines.map(l => {
          if (allCommented) {
            return l.replace(/^(\s*)#\s?/, '$1');
          } else {
            return l.replace(/^(\s*)(.*)$/, '$1# $2');
          }
        });
        const newBlock = newLines.join('\n');
        textarea.value = val.substring(0, lineStart) + newBlock + val.substring(lineEnd);
        textarea.selectionStart = lineStart;
        textarea.selectionEnd = lineStart + newBlock.length;
        updateHighlight();
        return;
      }

      // Tab / Shift + Tab : 4-space Indent / Outdent
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const val = textarea.value;

        if (start !== end && val.substring(start, end).includes('\n')) {
          const lineStart = val.lastIndexOf('\n', start - 1) + 1;
          let lineEnd = val.indexOf('\n', end);
          if (lineEnd === -1) lineEnd = val.length;
          const block = val.substring(lineStart, lineEnd);
          const lines = block.split('\n');
          const newLines = lines.map(l => {
            if (e.shiftKey) {
              return l.startsWith('    ') ? l.substring(4) : (l.startsWith('\t') ? l.substring(1) : l.replace(/^\s{1,3}/, ''));
            } else {
              return '    ' + l;
            }
          });
          const newBlock = newLines.join('\n');
          textarea.value = val.substring(0, lineStart) + newBlock + val.substring(lineEnd);
          textarea.selectionStart = lineStart;
          textarea.selectionEnd = lineStart + newBlock.length;
        } else {
          if (e.shiftKey) {
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            const curLine = val.substring(lineStart, start);
            if (curLine.startsWith('    ')) {
              textarea.value = val.substring(0, lineStart) + curLine.substring(4) + val.substring(start);
              textarea.selectionStart = textarea.selectionEnd = Math.max(lineStart, start - 4);
            }
          } else {
            textarea.value = val.substring(0, start) + '    ' + val.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 4;
          }
        }
        updateHighlight();
        return;
      }

      // Enter : Smart Indentation
      if (e.key === 'Enter') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const val = textarea.value;
        const lineStart = val.lastIndexOf('\n', start - 1) + 1;
        const currentLine = val.substring(lineStart, start);
        const indentMatch = currentLine.match(/^\s*/);
        let indent = indentMatch ? indentMatch[0] : '';
        if (currentLine.trim().endsWith(':')) {
          indent += '    ';
        }
        textarea.value = val.substring(0, start) + '\n' + indent + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1 + indent.length;
        updateHighlight();
        return;
      }

      // Auto-Closing Pairs
      const pairs: Record<string, string> = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
      if (pairs[e.key]) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const val = textarea.value;
        if (start !== end) {
          e.preventDefault();
          const selected = val.substring(start, end);
          textarea.value = val.substring(0, start) + e.key + selected + pairs[e.key] + val.substring(end);
          textarea.selectionStart = start + 1;
          textarea.selectionEnd = end + 1;
          updateHighlight();
          return;
        } else {
          if (val[start] === e.key && (e.key === '"' || e.key === "'")) {
            e.preventDefault();
            textarea.selectionStart = textarea.selectionEnd = start + 1;
            return;
          }
          e.preventDefault();
          textarea.value = val.substring(0, start) + e.key + pairs[e.key] + val.substring(start);
          textarea.selectionStart = textarea.selectionEnd = start + 1;
          updateHighlight();
          this.triggerAutocomplete(textarea, popup);
          return;
        }
      }

      // Backspace: Delete 4-space tab indent or empty pair
      if (e.key === 'Backspace') {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const val = textarea.value;

        if (start === end && start > 0) {
          const lineStart = val.lastIndexOf('\n', start - 1) + 1;
          const beforeOnLine = val.substring(lineStart, start);

          // If preceded by indent spaces on current line, delete 4 spaces (or up to tab stop)
          if (/^ +$/.test(beforeOnLine)) {
            e.preventDefault();
            const col = beforeOnLine.length;
            const deleteCount = (col % 4 === 0) ? 4 : (col % 4);
            textarea.value = val.substring(0, start - deleteCount) + val.substring(start);
            textarea.selectionStart = textarea.selectionEnd = start - deleteCount;
            updateHighlight();
            return;
          }

          // If inside empty auto-closing pair e.g. (), [], {}, "", ''
          const prevChar = val[start - 1];
          const nextChar = val[start];
          if (pairs[prevChar] === nextChar) {
            e.preventDefault();
            textarea.value = val.substring(0, start - 1) + val.substring(start + 1);
            textarea.selectionStart = textarea.selectionEnd = start - 1;
            updateHighlight();
            return;
          }
        }
      }

      // Close autocomplete on navigation keys
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(e.key)) {
        if (popup) popup.style.display = 'none';
      }
    });

    textarea.addEventListener('click', () => {
      if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
      this.triggerAutocomplete(textarea, popup);
    });

    textarea.addEventListener('keyup', (e: KeyboardEvent) => {
      if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown', 'Escape', 'Enter', 'Tab', 'Shift', 'Control', 'Alt', 'Meta', 'CapsLock'].includes(e.key)) {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === 'Tab') {
          if (popup) {
            popup.style.display = 'none';
            this.acMatches = [];
          }
        }
      } else {
        if (this.acSuppress) {
          this.acSuppress = false;
          return;
        }
        this.triggerAutocomplete(textarea, popup);
      }
    });
    textarea.addEventListener('change', () => {
      flushSave();
      updateHighlight();
    });
    textarea.addEventListener('blur', () => {
      flushSave();
      setTimeout(() => {
        if (popup) popup.style.display = 'none';
      }, 150);
    });

    // Floating VS Code Diagnostic Hover Tooltip
    let tooltipEl = document.getElementById('ide-diagnostics-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'ide-diagnostics-tooltip';
      tooltipEl.className = 'ide-diagnostics-tooltip';
      tooltipEl.style.display = 'none';
      document.body.appendChild(tooltipEl);
    }

    const editorContainer = document.getElementById('ide-editor-container');
    if (editorContainer) {
      editorContainer.addEventListener('mousemove', (e: MouseEvent) => {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        const squiggly = target ? target.closest('.ide-squiggly-error, .ide-squiggly-warning, .ide-line-error-marker, .ide-line-warning-marker') : null;
        if (squiggly && squiggly.getAttribute('title')) {
          const titleMsg = squiggly.getAttribute('title') || '';
          const isWarning = squiggly.classList.contains('ide-squiggly-warning') || squiggly.classList.contains('ide-line-warning-marker');
          tooltipEl.innerHTML = `
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="${isWarning ? '#cca700' : '#f14c4c'}" style="flex-shrink: 0; margin-top: 2px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.2a5.8 5.8 0 1 1 0 11.6A5.8 5.8 0 0 1 8 2.2zm-.7 3.3h1.4v4H7.3v-4zm0 5h1.4v1.4H7.3v-1.4z"/></svg>
                <div style="flex: 1;">
                  <div style="font-weight: 600; color: ${isWarning ? '#cca700' : '#f14c4c'}; font-size: 11px; margin-bottom: 2px;">${isWarning ? 'Warning' : 'Error'} (Python Language Server)</div>
                  <div style="color: #d4d4d4; font-size: 12px; word-break: break-word;">${this.escapeHtml(titleMsg)}</div>
                </div>
              </div>
            `;
          tooltipEl.style.display = 'block';
          tooltipEl.style.left = `${Math.min(window.innerWidth - 390, e.clientX + 12)}px`;
          tooltipEl.style.top = `${Math.min(window.innerHeight - 80, e.clientY + 18)}px`;
        } else {
          tooltipEl.style.display = 'none';
        }
      });

      editorContainer.addEventListener('mouseleave', () => {
        if (tooltipEl) tooltipEl.style.display = 'none';
      });
    }

    // Real-time REPL Interactive Command Bar Event Handlers
    const attachCLI = (inputId: string, outputId: string, wrapperId: string, isSplit = false) => {
      const cliInput = document.getElementById(inputId) as HTMLInputElement | null;
      const termStdout = document.getElementById(outputId);
      const wrapper = document.getElementById(wrapperId);
      if (!cliInput || !termStdout) return;

      if (wrapper) {
        wrapper.addEventListener('click', () => {
          cliInput.focus();
        });
      }

      cliInput.addEventListener('keydown', async (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const cmd = cliInput.value.trim();
          if (!cmd) return;
          cliInput.value = '';

          const sessionKey = (isSplit ? (this.activeTerminalId + '_split') : this.activeTerminalId) as string;
          let outputHtml = `<div><span style="color: #cccccc;">PS C:\\Learn&gt;</span> ${this.escapeHtml(cmd)}</div>`;

          if (cmd === 'clear' || cmd === 'cls') {
            termStdout.innerHTML = '';
            if (!this.terminalOutputs) this.terminalOutputs = {};
            this.terminalOutputs[sessionKey] = '';
            return;
          }

          if (cmd === 'ls' || cmd === 'dir') {
            const files = this.getIDEFiles();
            const folders = this.getIDEFolders();
            let fileListHtml = '<div style="color: #cccccc; padding: 2px 0;">\nDirectory: C:\\Learn\n\nMode         Name\n----         ----\n';
            folders.forEach(f => { fileListHtml += `d-----       ${f}\n`; });
            Object.keys(files).forEach(f => { fileListHtml += `-a----       ${f}\n`; });
            fileListHtml += '</div>';
            outputHtml += fileListHtml;
            termStdout.innerHTML += outputHtml;
            if (!this.terminalOutputs) this.terminalOutputs = {};
            this.terminalOutputs[sessionKey] = termStdout.innerHTML;
            const scrollContainer = termStdout.parentElement;
            if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
            return;
          }

          termStdout.innerHTML += outputHtml;
          const scrollContainer = termStdout.parentElement;
          if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;

          let codeToRun = cmd;
          if (cmd.startsWith('python ') || cmd.startsWith('py ')) {
            const targetFile = cmd.replace(/^(python|py)\s+/, '').trim();
            const files = this.getIDEFiles();
            if (files[targetFile] !== undefined) {
              codeToRun = files[targetFile];
            }
          }

          if (typeof loadPyodide !== 'undefined') {
            try {
              if (!this.pyodideInstance) {
                this.pyodideInstance = await loadPyodide();
              }
              // Ensure current directory in Python sys.path
              try {
                await this.pyodideInstance?.runPythonAsync('import sys\nif "." not in sys.path:\n    sys.path.insert(0, ".")');
              } catch (spErr) { }

              // Sync all virtual files into pyodide virtual filesystem with directory creation
              const files = this.getIDEFiles();
              for (const [fname, fcontent] of Object.entries(files)) {
                try {
                  if (fname.includes('/')) {
                    const parts = fname.split('/');
                    parts.pop();
                    let currentDir = '';
                    for (const part of parts) {
                      currentDir = currentDir ? `${currentDir}/${part}` : part;
                      try { this.pyodideInstance?.FS.mkdir(currentDir); } catch (dirErr) { }
                    }
                  }
                  this.pyodideInstance?.FS.writeFile(fname, fcontent);
                } catch (fsErr) { }
              }

              let out = '';
              const decoder = new TextDecoder('utf-8');
              this.pyodideInstance?.setStdout({
                raw: (byte: number) => {
                  out += decoder.decode(new Uint8Array([byte]), { stream: true });
                }
              });
              this.pyodideInstance?.setStderr({
                raw: (byte: number) => {
                  out += decoder.decode(new Uint8Array([byte]), { stream: true });
                }
              });
              if (typeof this.pyodideInstance.setStdin === 'function') {
                try {
                  this.pyodideInstance.setStdin({
                    stdin: () => window.prompt('Python input():') || ''
                  });
                } catch (inErr) { }
              }

              const res = await this.pyodideInstance?.runPythonAsync(codeToRun);
              try {
                await this.pyodideInstance?.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
              } catch (fErr) { }
              out += decoder.decode();
              if (out) termStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(out)}</div>`;
              if (res !== undefined) termStdout.innerHTML += `<div style="color: #4fc1ff;">${this.escapeHtml(String(res))}</div>`;
            } catch (err: unknown) {
              const errText = err instanceof Error ? err.message : String(err);
              termStdout.innerHTML += `<div style="color: #f14c4c;">${this.escapeHtml(errText)}</div>`;
            }
          } else {
            try {
              if (codeToRun.startsWith('print(')) {
                let inner = codeToRun.slice(6, -1);
                let endChar = '\n';
                const endMatch = inner.match(/,\s*end\s*=\s*(["'])(.*?)\1/);
                if (endMatch) {
                  endChar = endMatch[2];
                  inner = inner.replace(/,\s*end\s*=\s*(["'])(.*?)\1/, '');
                }
                const textVal = inner.trim().replace(/^["']|["']$/g, '');
                termStdout.innerHTML += `<div style="white-space: pre-wrap;">${this.escapeHtml(textVal + endChar)}</div>`;
              } else {
                termStdout.innerHTML += `<div style="color: #cccccc;">${this.escapeHtml(codeToRun)}</div>`;
              }
            } catch (err: unknown) {
              const errText = err instanceof Error ? err.message : String(err);
              termStdout.innerHTML += `<div style="color: #f14c4c;">${this.escapeHtml(errText)}</div>`;
            }
          }
          if (!this.terminalOutputs) this.terminalOutputs = {};
          this.terminalOutputs[sessionKey] = termStdout.innerHTML;
          try {
            sessionStorage.setItem('python_ide_terminal_outputs', JSON.stringify(this.terminalOutputs));
          } catch (e: unknown) { }
          if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
      });
    };

    attachCLI('ide-terminal-cli-input', 'ide-terminal-stdout', 'ide-terminal-stdout-wrapper', false);
    attachCLI('ide-terminal-cli-input-split', 'ide-terminal-stdout-split', 'ide-terminal-stdout-split-wrapper', true);

    // Auto-scroll terminal to bottom after mounting
    const termScroll = document.getElementById('ide-terminal-scroll-area');
    if (termScroll) termScroll.scrollTop = termScroll.scrollHeight;
    const termScrollSplit = document.getElementById('ide-terminal-scroll-area-split');
    if (termScrollSplit) termScrollSplit.scrollTop = termScrollSplit.scrollHeight;

    updateHighlight();
  }

  navigateToProblem(file: string, line: number, col: number) {
    if (file && file !== this.activeIDEFile) {
      this.activeIDEFile = file;
      const tabs = this.getOpenIDETabs();
      if (!tabs.includes(file)) tabs.push(file);
      this.openIDETabs = tabs;
      this.saveOpenIDETabs(tabs);
      this.saveActiveIDEFile(file);
      this.renderPythonIDE();
    }
    setTimeout(() => {
      const textarea = (document.getElementById('ide-code-input') as HTMLTextAreaElement | null);
      if (!textarea) return;
      textarea.focus();
      const lines = textarea.value.split('\n');
      let charIndex = 0;
      for (let i = 0; i < Math.min(line - 1, lines.length); i++) {
        charIndex += lines[i].length + 1;
      }
      charIndex += Math.min(col - 1, (lines[line - 1] || '').length);
      textarea.selectionStart = textarea.selectionEnd = charIndex;
      const lineHeight = 20;
      textarea.scrollTop = Math.max(0, (line - 3) * lineHeight);
    }, 60);
  }

  async runPythonCode() {
    const textarea = (document.getElementById('ide-code-input') as HTMLTextAreaElement | null);
    const terminalStdout = document.getElementById('ide-terminal-stdout');
    if (!textarea || !terminalStdout) return;

    const code = textarea.value;
    const activeFile = this.activeIDEFile || 'main.py';
    terminalStdout.innerHTML += `<div><span style="color: #cccccc;">PS C:\\Learn&gt;</span> python ${activeFile}</div>`;
    const scrollContainer = terminalStdout.parentElement;
    if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;

    // Check if Pyodide WebAssembly is available
    if (typeof loadPyodide !== 'undefined') {
      let logs = '';
      const decoder = new TextDecoder('utf-8');
      try {
        if (!this.pyodideInstance) {
          this.pyodideInstance = await loadPyodide();
        }

        // Ensure current directory in Python sys.path
        try {
          await this.pyodideInstance?.runPythonAsync('import sys\nif "." not in sys.path:\n    sys.path.insert(0, ".")');
        } catch (spErr) { }

        // Sync all virtual files into pyodide virtual filesystem with directory creation
        const files = this.getIDEFiles();
        for (const [fname, fcontent] of Object.entries(files)) {
          try {
            if (fname.includes('/')) {
              const parts = fname.split('/');
              parts.pop();
              let currentDir = '';
              for (const part of parts) {
                currentDir = currentDir ? `${currentDir}/${part}` : part;
                try { this.pyodideInstance?.FS.mkdir(currentDir); } catch (dirErr) { }
              }
            }
            this.pyodideInstance?.FS.writeFile(fname, fcontent);
          } catch (fsErr) { }
        }

        this.pyodideInstance?.setStdout({
          raw: (byte: number) => {
            logs += decoder.decode(new Uint8Array([byte]), { stream: true });
          }
        });
        this.pyodideInstance?.setStderr({
          raw: (byte: number) => {
            logs += decoder.decode(new Uint8Array([byte]), { stream: true });
          }
        });
        if (typeof this.pyodideInstance.setStdin === 'function') {
          try {
            this.pyodideInstance.setStdin({
              stdin: () => window.prompt('Python input():') || ''
            });
          } catch (inErr) { }
        }

        await this.pyodideInstance?.runPythonAsync(code);
        try {
          await this.pyodideInstance?.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
        } catch (flushErr) { }
        logs += decoder.decode();

        if (logs) terminalStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(logs)}</div>`;

        if (!this.outputLogs) this.outputLogs = `[Python Extension] Python 3.14 Language Server Ready.\n[Pyodide Runtime] In-browser WebAssembly worker thread initialized.\n[Workspace] Initialized virtual filesystem.`;
        this.outputLogs += `\n[Runner] Executed ${activeFile} successfully (${new Date().toLocaleTimeString()})`;

        // Validate output against current tutorial chapter requirements
        const curChapter = PYTHON_TUTORIAL_DATA.chapters.find(c => c.id === this.currentTutorialStep);
        if (curChapter && curChapter.output) {
          if (this.checkChapterOutputMatch(logs, curChapter.output)) {
            this.chapterExecuted = this.chapterExecuted || {};
            this.chapterExecuted[this.currentTutorialStep] = true;
            try {
              sessionStorage.setItem('python_tutorial_executed', JSON.stringify(this.chapterExecuted));
            } catch (e: unknown) { }
            this.updateTutorialChecklistUI();
            this.showSafetyToast('실행 결과가 예상 출력과 일치합니다. (완료)', 'success');
          } else {
            this.showSafetyToast('실행 결과가 예상 출력과 일치하지 않습니다.', 'warning');
          }
        }
      } catch (err: unknown) {
        try {
          await this.pyodideInstance?.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
        } catch (flushErr) { }
        logs += decoder.decode();
        if (logs) terminalStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(logs)}</div>`;

        const errMsg = err instanceof Error ? err.message : String(err);
        terminalStdout.innerHTML += `<div style="color: #f14c4c; font-weight: 500; white-space: pre-wrap;">Traceback (most recent call last):\n${this.escapeHtml(errMsg)}</div>`;

        // Parse error line number from traceback
        const lineMatch = errMsg.match(/line\s+(\d+)/i) || errMsg.match(/<exec>",\s*line\s+(\d+)/i);
        const errLine = lineMatch ? parseInt(lineMatch[1], 10) : 1;
        this.ideProblems = [{ file: activeFile, line: errLine, col: 1, message: `RuntimeError: ${errMsg.split('\n').pop()}`, severity: 'error', token: '' }];
      }
    } else {
      // Fallback Client-side Python 3.14 Sandbox Evaluator
      try {
        const printMatches = code.matchAll(/print\(([\s\S]*?)\)/g);
        for (const match of printMatches) {
          let inner = match[1];
          let endChar = '\n';
          const endMatch = inner.match(/,\s*end\s*=\s*(["'])(.*?)\1/);
          if (endMatch) {
            endChar = endMatch[2];
            inner = inner.replace(/,\s*end\s*=\s*(["'])(.*?)\1/, '');
          }
          const textVal = inner.trim().replace(/^["']|["']$/g, '');
          terminalStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(textVal + endChar)}</div>`;
        }
      } catch (err: unknown) {
        const fallbackErrMsg = err instanceof Error ? err.message : String(err);
        terminalStdout.innerHTML += `<div style="color: #f14c4c;">Error: ${this.escapeHtml(fallbackErrMsg)}</div>`;
      }
    }

    if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
}

export const PythonIDE = new PythonIDEController();
export function renderPythonIDE(): void {
  PythonIDE.renderPythonIDE();
}
