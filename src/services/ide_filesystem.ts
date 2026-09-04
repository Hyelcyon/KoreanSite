// Python Virtual File System & Workspace Storage Manager

export interface IDEFileMap {
  [path: string]: string;
}

export const IDEFileSystem = {
  getFiles(): IDEFileMap {
    const defaultFiles: IDEFileMap = {
      'main.py': ''
    };
    try {
      const saved = localStorage.getItem('python_ide_files');
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          const sanitized: IDEFileMap = {};
          for (const [k, v] of Object.entries(parsed)) {
            if (k && k !== 'null' && k !== 'undefined' && k.trim()) {
              let content = typeof v === 'string' ? v : '';
              if (content.includes('Python 3.14 프로그래밍 환경') || content.includes('print(greet(')) {
                content = '';
              }
              sanitized[k.trim()] = content;
            }
          }
          if (sanitized['main.py'] === undefined) {
            sanitized['main.py'] = '';
          }
          return sanitized;
        }
      }
      return defaultFiles;
    } catch {
      return defaultFiles;
    }
  },

  saveFiles(files: IDEFileMap): void {
    const sanitized: IDEFileMap = {};
    if (files && typeof files === 'object') {
      for (const [k, v] of Object.entries(files)) {
        if (k && k !== 'null' && k !== 'undefined' && k.trim()) {
          sanitized[k.trim()] = typeof v === 'string' ? v : '';
        }
      }
    }
    localStorage.setItem('python_ide_files', JSON.stringify(sanitized));
  },

  getFolders(): string[] {
    try {
      const saved = localStorage.getItem('python_ide_folders');
      const list = saved ? JSON.parse(saved) : ['Learn'];
      if (Array.isArray(list)) {
        const sanitized = list
          .filter((f) => f && f !== 'null' && f !== 'undefined' && typeof f === 'string' && f.trim())
          .map((f) => (f as string).trim());
        return Array.from(new Set(sanitized));
      }
      return ['Learn'];
    } catch {
      return ['Learn'];
    }
  },

  saveFolders(folders: string[]): void {
    const sanitized = Array.isArray(folders)
      ? Array.from(
          new Set(
            folders
              .filter((f) => f && f !== 'null' && f !== 'undefined' && typeof f === 'string' && f.trim())
              .map((f) => f.trim())
          )
        )
      : ['Learn'];
    localStorage.setItem('python_ide_folders', JSON.stringify(sanitized));
  },

  getOpenTabs(): string[] {
    const files = this.getFiles();
    try {
      const saved = localStorage.getItem('python_ide_open_tabs');
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter((tab) => tab && tab !== 'null' && files[tab] !== undefined);
        }
      }
    } catch {
      // Ignore
    }
    return files['main.py'] !== undefined ? ['main.py'] : Object.keys(files).slice(0, 1);
  },

  saveOpenTabs(tabs: string[]): void {
    try {
      const valid = Array.isArray(tabs) ? tabs.filter((t) => t && t !== 'null') : [];
      localStorage.setItem('python_ide_open_tabs', JSON.stringify(valid));
    } catch {
      // Ignore
    }
  },

  getActiveFile(): string | null {
    const files = this.getFiles();
    try {
      const saved = localStorage.getItem('python_ide_active_file');
      if (saved !== null) {
        if (saved === '' || saved === 'null') return null;
        if (files[saved] !== undefined) return saved;
      }
    } catch {
      // Ignore
    }
    const openTabs = this.getOpenTabs();
    if (openTabs.length && files[openTabs[0]!] !== undefined) return openTabs[0]!;
    return null;
  },

  saveActiveFile(file: string | null): void {
    try {
      if (file && file !== 'null') {
        localStorage.setItem('python_ide_active_file', file);
      } else {
        localStorage.setItem('python_ide_active_file', '');
      }
    } catch {
      // Ignore
    }
  },

  isFileDirty(filePath: string, dirtyFiles?: Record<string, boolean>): boolean {
    if (!filePath) return false;
    const liveTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
    if (liveTextarea && liveTextarea.getAttribute('data-file') === filePath) {
      const savedFiles = this.getFiles();
      if (liveTextarea.value !== (savedFiles[filePath] || '')) return true;
    }
    return Boolean(dirtyFiles && dirtyFiles[filePath]);
  },

  isFolderDirty(folderPath: string, dirtyFiles?: Record<string, boolean>): boolean {
    if (!folderPath) return false;
    const prefix = folderPath + '/';
    const files = this.getFiles();
    for (const fname of Object.keys(files)) {
      if (fname.startsWith(prefix) && this.isFileDirty(fname, dirtyFiles)) {
        return true;
      }
    }
    return false;
  }
};
