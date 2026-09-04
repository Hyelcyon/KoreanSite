import { PYTHON_TUTORIAL_DATA } from '../data/python_curriculum.js';
// Main Application Controller, Event Router & Lifecycle

import { HERO_SLIDES } from '../data/carousel_data.js';
import { DataManager } from '../services/data_manager.js';
import { Storage } from '../services/storage.js';
import { State } from '../state/app_state.js';
import { UI } from '../ui/ui.js';

export class AppController {
  heroTimer: number | null = null;
    
    init() {
      // 0. Restore site header collapsed state from localStorage
      const savedHeaderCollapsed = localStorage.getItem('site_header_collapsed');
      const header = document.querySelector('.site-header');
      const chevronIcon = document.getElementById('icon-collapse-chevron');
      if (header && savedHeaderCollapsed === 'true') {
        header.classList.add('header-collapsed');
        if (chevronIcon) {
          chevronIcon.innerHTML = '<polyline points="6 9 12 15 18 9"/>';
        }
      } else if (chevronIcon) {
        chevronIcon.innerHTML = '<polyline points="18 15 12 9 6 15"/>';
      }

      requestAnimationFrame(() => {
        document.documentElement.classList.remove('header-initially-collapsed');
      });

      this.bindEvents();
      this.bindKeyboardShortcuts();

      window.addEventListener('hashchange', () => {
        this.routeFromHash();
      });

      // Route according to URL hash or last saved view
      this.routeFromHash();
    }

    routeFromHash() {
      const rawHash = window.location.hash.replace('#', '').trim();

      // 1. If hash is explicitly #quiz, attempt restore
      if (rawHash === 'quiz') {
        const restored = State.restoreSessionFromStorage();
        if (restored) {
          UI.renderQuiz();
          return;
        }
      }

      // 2. If no hash or hash is dashboard (Home), always display dashboard and clear stale session
      if (!rawHash || rawHash === 'dashboard') {
        State.clearSessionStorage();
        sessionStorage.setItem('alphagh_current_view', 'dashboard');
        this.switchTab('dashboard', false);
        return;
      }

      // 3. Direct route matching
      if (rawHash === 'korean-home' || rawHash === 'korean') {
        this.switchTab('korean-home', false);
      } else if (rawHash === 'info-home' || rawHash === 'info') {
        this.switchTab('info-home', false);
      } else if (rawHash === 'python-learn' || rawHash === 'python') {
        this.switchTab('python-learn', false);
      } else if (rawHash.startsWith('exam')) {
        this.switchTab('korean-home', false);
      } else if (rawHash.startsWith('catalog') || rawHash === 'problems') {
        this.switchTab('catalog', false);
      } else if (rawHash.startsWith('combiner')) {
        this.switchTab('combiner', false);
      } else if (rawHash.startsWith('corpus')) {
        this.switchTab('corpus', false);
      } else if (rawHash.startsWith('wrong') || rawHash.startsWith('review')) {
        this.switchTab('wrong', false);
      } else {
        this.switchTab('dashboard', false);
      }
    }
    startHeroAutoPlay() {
      this.stopHeroAutoPlay();
      this.heroTimer = setInterval(() => {
        if (State.view === 'dashboard') {
          const nextIndex = (State.currentHeroSlide + 1) % HERO_SLIDES.length;
          UI.transitionHeroSlide(nextIndex);
        }
      }, 3000);
    }
    stopHeroAutoPlay() {
      if (this.heroTimer) {
        clearInterval(this.heroTimer);
        this.heroTimer = null;
      }
    }
    bindEvents() {
      document.addEventListener('keydown', (e) => {
        if (document.body.classList.contains('in-ide-mode')) {
          // Ctrl + S -> Save Current Active File Buffer & Clear Dirty Indicator
          if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            const curTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
            if (curTextarea) {
              const curFile = curTextarea.getAttribute('data-file') || '' || UI.PythonIDE.activeIDEFile;
              if (curFile) {
                const curFiles = UI.PythonIDE.getIDEFiles();
                curFiles[curFile] = curTextarea.value;
                UI.PythonIDE.saveIDEFiles(curFiles);
                if (UI.PythonIDE.dirtyFiles) delete UI.PythonIDE.dirtyFiles[curFile];
                const tabCloseBtn = document.querySelector(`.ide-editor-tab[data-file="${curFile}"] .btn-close-ide-tab`);
                if (tabCloseBtn) {
                  tabCloseBtn.innerHTML = '<span class="codicon codicon-close" style="font-size: 12px;"></span>';
                  tabCloseBtn.setAttribute('title', 'Close (Ctrl+W)');
                }
              }
            }
            return;
          }

          // Ctrl + ` (Backquote) -> Toggle Terminal Drawer
          if (e.ctrlKey && (e.key === '`' || e.key === '~' || e.code === 'Backquote')) {
            e.preventDefault();
            UI.PythonIDE.isTerminalDrawerClosed = !UI.PythonIDE.isTerminalDrawerClosed;
            if (!UI.PythonIDE.isTerminalDrawerClosed) {
              UI.PythonIDE.activeDrawerTab = 'terminal';
            }
            UI.PythonIDE.renderPythonIDE();
            return;
          }
          // Ctrl + F5 or F5 -> Run Python Code
          if (e.key === 'F5') {
            e.preventDefault();
            if (UI.PythonIDE.isTerminalDrawerClosed) {
              UI.PythonIDE.isTerminalDrawerClosed = false;
              UI.PythonIDE.activeDrawerTab = 'terminal';
              UI.PythonIDE.renderPythonIDE();
            }
            UI.PythonIDE.runPythonCode();
            return;
          }
        }
      });

      // Drag and Drop Handlers for File & Folder Movement
      let isDragging = false;
      document.addEventListener('dragstart', (e) => {
        if (!document.body.classList.contains('in-ide-mode')) return;
        const fileItem = (e.target as HTMLElement).closest('.ide-file-item');
        const folderItem = (e.target as HTMLElement).closest('.ide-folder-item');
        if (!fileItem && !folderItem) return;

        if (fileItem) {
          const filePath = fileItem.getAttribute('data-file') || '';
          if (UI.PythonIDE.isFileDirty(filePath)) {
            e.preventDefault();
            UI.showSafetyToast(`'${filePath}' 파일에 저장되지 않은 변경사항이 있어 이동할 수 없습니다. 먼저 Ctrl+S로 저장해 주세요.`);
            return;
          }
          isDragging = true;
          e.dataTransfer?.setData('application/json', JSON.stringify({ type: 'file', path: filePath }));
          fileItem.classList.add('is-dragging');
        } else if (folderItem) {
          const folderPath = folderItem.getAttribute('data-folder') || '';
          if (UI.PythonIDE.isFolderDirty(folderPath)) {
            e.preventDefault();
            UI.showSafetyToast(`'${folderPath}' 폴더 내에 저장되지 않은 파일이 있어 이동할 수 없습니다. 먼저 파일을 저장해 주세요.`);
            return;
          }
          isDragging = true;
          e.dataTransfer?.setData('application/json', JSON.stringify({ type: 'folder', path: folderPath }));
          folderItem.classList.add('is-dragging');
        }
      });

      document.addEventListener('dragend', () => {
        isDragging = false;
        document.querySelectorAll('.is-dragging').forEach(el => el.classList.remove('is-dragging'));
        document.querySelectorAll('.drag-over-folder').forEach(el => el.classList.remove('drag-over-folder'));
      });

      document.addEventListener('dragover', (e) => {
        if (!isDragging || !document.body.classList.contains('in-ide-mode')) return;
        const folderRow = (e.target as HTMLElement).closest('.ide-folder-item') || (e.target as HTMLElement).closest('#ide-folder-learn');
        if (folderRow) {
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
          folderRow.classList.add('drag-over-folder');
        }
      });

      document.addEventListener('dragleave', (e) => {
        if (!isDragging) return;
        const folderRow = (e.target as HTMLElement).closest('.ide-folder-item') || (e.target as HTMLElement).closest('#ide-folder-learn');
        if (folderRow && !folderRow.contains(e.relatedTarget as Node | null)) {
          folderRow.classList.remove('drag-over-folder');
        }
      });

      document.addEventListener('drop', (e) => {
        if (!document.body.classList.contains('in-ide-mode')) return;
        const folderRow = (e.target as HTMLElement).closest('.ide-folder-item') || (e.target as HTMLElement).closest('#ide-folder-learn');
        if (!folderRow) return;
        e.preventDefault();
        folderRow.classList.remove('drag-over-folder');

        let payload;
        try {
          payload = e.dataTransfer ? JSON.parse(e.dataTransfer.getData('application/json')) : null;
        } catch (err) { return; }

        if (!payload || !payload.path) return;
        const targetFolder = folderRow.getAttribute('data-folder') || '' || ''; // empty string = root (Learn)

        if (payload.type === 'file') {
          const srcFile = payload.path;
          if (UI.PythonIDE.isFileDirty(srcFile)) {
            UI.showSafetyToast(`'${srcFile}' 파일에 저장되지 않은 변경사항이 있어 이동할 수 없습니다.`);
            return;
          }
          const baseName = srcFile.split('/').pop();
          const destFile = targetFolder ? (targetFolder + '/' + baseName) : baseName;
          if (srcFile === destFile) return;

          const files = UI.PythonIDE.getIDEFiles();
          files[destFile] = files[srcFile] || '';
          delete files[srcFile];
          UI.PythonIDE.saveIDEFiles(files);

          const liveTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
          if (liveTextarea && (liveTextarea.getAttribute('data-file') || '') === srcFile) {
            liveTextarea.setAttribute('data-file', destFile);
          }

          let tabs = UI.PythonIDE.getOpenIDETabs();
          tabs = tabs.map(t => t === srcFile ? destFile : t);
          UI.PythonIDE.openIDETabs = tabs;
          UI.PythonIDE.saveOpenIDETabs(tabs);

          if (UI.PythonIDE.activeIDEFile === srcFile) {
            UI.PythonIDE.activeIDEFile = destFile;
            UI.PythonIDE.saveActiveIDEFile(destFile);
          }
          UI.PythonIDE.renderPythonIDE();
        } else if (payload.type === 'folder') {
          const srcFolder = payload.path;
          if (UI.PythonIDE.isFolderDirty(srcFolder)) {
            UI.showSafetyToast(`'${srcFolder}' 폴더 내에 저장되지 않은 파일이 있어 이동할 수 없습니다.`);
            return;
          }
          if (targetFolder === srcFolder || targetFolder.startsWith(srcFolder + '/')) {
            UI.showSafetyToast('폴더를 자기 자신 또는 하위 폴더로 이동할 수 없습니다.');
            return;
          }
          const folderBase = srcFolder.split('/').pop();
          const destFolder = targetFolder ? (targetFolder + '/' + folderBase) : folderBase;
          if (srcFolder === destFolder) return;

          const files = UI.PythonIDE.getIDEFiles();
          const newFiles: import('../services/ide_filesystem.js').IDEFileMap = {};
          const srcPrefix = srcFolder + '/';
          const destPrefix = destFolder + '/';

          for (const [k, v] of Object.entries(files)) {
            if (k.startsWith(srcPrefix)) {
              const subPath = k.substring(srcPrefix.length);
              newFiles[destPrefix + subPath] = v;
            } else {
              newFiles[k] = v;
            }
          }
          UI.PythonIDE.saveIDEFiles(newFiles);

          const liveTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
          if (liveTextarea) {
            const curEditing = liveTextarea.getAttribute('data-file') || '';
            if (curEditing && curEditing.startsWith(srcPrefix)) {
              liveTextarea.setAttribute('data-file', destPrefix + curEditing.substring(srcPrefix.length));
            }
          }

          let folders = UI.PythonIDE.getIDEFolders();
          folders = folders.map(f => {
            if (f === srcFolder) return destFolder;
            if (f.startsWith(srcPrefix)) return destPrefix + f.substring(srcPrefix.length);
            return f;
          });
          if (targetFolder && !folders.includes(targetFolder)) folders.push(targetFolder);
          if (!folders.includes(destFolder)) folders.push(destFolder);
          UI.PythonIDE.saveIDEFolders(folders);

          let tabs = UI.PythonIDE.getOpenIDETabs();
          tabs = tabs.map(t => {
            if (t.startsWith(srcPrefix)) return destPrefix + t.substring(srcPrefix.length);
            return t;
          });
          UI.PythonIDE.openIDETabs = tabs;
          UI.PythonIDE.saveOpenIDETabs(tabs);

          if (UI.PythonIDE.activeIDEFile && UI.PythonIDE.activeIDEFile.startsWith(srcPrefix)) {
            UI.PythonIDE.activeIDEFile = destPrefix + UI.PythonIDE.activeIDEFile.substring(srcPrefix.length);
            UI.PythonIDE.saveActiveIDEFile(UI.PythonIDE.activeIDEFile);
          }
          UI.PythonIDE.renderPythonIDE();
        }
      });

      document.addEventListener('mouseover', (e) => {
        if (this.heroTimer && (e.target as HTMLElement).closest('#hero-banner-section')) {
          this.stopHeroAutoPlay();
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (!this.heroTimer && State.view === 'dashboard' && (e.target as HTMLElement).closest('#hero-banner-section')) {
          this.startHeroAutoPlay();
        }
      });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stopHeroAutoPlay();
        } else if (State.view === 'dashboard') {
          this.startHeroAutoPlay();
        }
      });

      document.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement) || document.body;

        // Header Wrong Notes Link
        if (target.closest('#btn-header-wrong')) {
          e.preventDefault();
          this.switchTab('wrong');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Wrong Notes Start All Review Button
        if (target.closest('#btn-start-all-review')) {
          e.preventDefault();
          this.startReviewSession();
          return;
        }

        // Wrong Notes Clear History
        if (target.closest('#btn-clear-wrong-history')) {
          e.preventDefault();
          if (confirm('오답 기록과 북마크를 모두 비우시겠습니까?')) {
            Storage.clearUserData();
            this.switchTab('wrong');
          }
          return;
        }

        // Wrong Notes Empty CTA
        if (target.closest('#btn-goto-exam-from-empty')) {
          e.preventDefault();
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Hero Slide Next/Prev Button Click
        if (target.closest('#hero-next')) {
          const nextIndex = (State.currentHeroSlide + 1) % HERO_SLIDES.length;
          UI.transitionHeroSlide(nextIndex);
          this.startHeroAutoPlay();
          return;
        }
        if (target.closest('#hero-prev')) {
          const prevIndex = (State.currentHeroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
          UI.transitionHeroSlide(prevIndex);
          this.startHeroAutoPlay();
          return;
        }

        // Mobile Drawer Menu Open/Close
        if (target.closest('#btn-mobile-menu')) {
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.add('active');
          return;
        }

        if (target.closest('#btn-mobile-close')) {
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');
          return;
        }

        // Mobile Drawer Left Tab Switching & Direct Navigation
        const mobileNavItem = target.closest('.mobile-nav-item');
        if (mobileNavItem) {
          e.preventDefault();
          const targetSectionId = mobileNavItem.getAttribute('data-target') || '';
          document.querySelectorAll('.mobile-nav-item').forEach(el => el.classList.remove('active'));
          document.querySelectorAll('.mobile-panel-section').forEach(el => el.classList.remove('active'));

          mobileNavItem.classList.add('active');
          const targetSection = document.getElementById(targetSectionId);
          if (targetSection) targetSection.classList.add('active');

          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');

          if (targetSectionId === 'm-cat-korean') {
            this.switchTab('exam');
          } else if (targetSectionId === 'm-cat-social') {
            this.switchTab('social');
          } else if (targetSectionId === 'm-cat-english') {
            this.switchTab('english');
          } else if (targetSectionId === 'm-cat-info') {
            this.switchTab('info');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Mobile Drawer Action Links & Promo Buttons
        const mobileActionLink = target.closest('.mobile-menu-link') || target.closest('.mobile-promo-btn');
        if (mobileActionLink) {
          e.preventDefault();
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');

          const action = mobileActionLink.getAttribute('data-action') || '';
          if (action === 'korean-home') {
            this.switchTab('exam');
          } else if (action === 'social-home') {
            this.switchTab('social');
          } else if (action === 'english-home') {
            this.switchTab('english');
          } else if (action === 'info-home') {
            this.switchTab('info');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        if (target.closest('#btn-mobile-login-action')) {
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Brand Logo Click (Go to Home Dashboard)
        const brandBtn = target.closest('.brand-block');
        if (brandBtn) {
          e.preventDefault();
          this.switchTab('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Nav Tab Button Click (국어 탭 누르면 국어 홈, 정보 탭 누르면 정보 홈으로 이동)
        const navBtn = target.closest('.nav-tab-btn');
        if (navBtn) {
          const tab = navBtn.getAttribute('data-tab') || '';
          if (tab === 'exam' || tab === 'korean-home') {
            this.switchTab('korean-home');
          } else if (tab === 'info' || tab === 'info-home') {
            this.switchTab('info-home');
          } else {
            this.switchTab(tab);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Mega Dropdown Title Link Click (국어 홈 / 정보 홈)
        const megaTitleLink = target.closest('.mega-col-title-link');
        if (megaTitleLink) {
          e.preventDefault();
          const action = megaTitleLink.getAttribute('data-action') || '';
          if (action === 'info-home') {
            this.switchTab('info-home');
          } else {
            this.switchTab('korean-home');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Info Course Card Click (Python 배우기 -> IDE 화면 진입)
        const courseCard = target.closest('.info-course-card');
        if (courseCard) {
          e.preventDefault();
          this.switchTab('python-learn');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Site Header Collapse / Expand Handle Click (Chevron Tab)
        if (target.closest('#btn-header-collapse-handle')) {
          e.preventDefault();
          const header = document.querySelector('.site-header');
          const chevronIcon = document.getElementById('icon-collapse-chevron');
          if (header) {
            const isCollapsed = header.classList.toggle('header-collapsed');
            localStorage.setItem('site_header_collapsed', isCollapsed ? 'true' : 'false');
            if (chevronIcon) {
              chevronIcon.innerHTML = isCollapsed
                ? '<polyline points="6 9 12 15 18 9"/>'
                : '<polyline points="18 15 12 9 6 15"/>';
            }
          }
          return;
        }

        // Python IDE Exit Button
        if (target.closest('#btn-exit-python-ide')) {
          e.preventDefault();
          const header = document.querySelector('.site-header');
          const chevronIcon = document.getElementById('icon-collapse-chevron');
          if (header) {
            header.classList.remove('header-collapsed');
            localStorage.setItem('site_header_collapsed', 'false');
            if (chevronIcon) {
              chevronIcon.innerHTML = '<polyline points="18 15 12 9 6 15"/>';
            }
          }
          this.switchTab('info-home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Python IDE Run Button -> Execute Real Python 3.14 Code
        if (target.closest('#btn-run-python')) {
          e.preventDefault();
          UI.PythonIDE.runPythonCode();
          return;
        }

        // Terminal Delete Session Button in Dropdown
        const delSessionBtn = target.closest('.btn-delete-terminal-session');
        if (delSessionBtn) {
          e.preventDefault();
          e.stopPropagation();
          const targetSession = delSessionBtn.getAttribute('data-session');
          if (targetSession && UI.PythonIDE.terminalSessions && UI.PythonIDE.terminalSessions.length > 1) {
            delete UI.PythonIDE.terminalOutputs[targetSession];
            UI.PythonIDE.terminalSessions = UI.PythonIDE.terminalSessions.filter((s: string) => s !== targetSession);
            if (UI.PythonIDE.activeTerminalId === targetSession) {
              UI.PythonIDE.activeTerminalId = UI.PythonIDE.terminalSessions[UI.PythonIDE.terminalSessions.length - 1];
            }
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Terminal Clear / Kill Active Session Button
        if (target.closest('#btn-clear-terminal')) {
          e.preventDefault();
          if (!UI.PythonIDE.terminalSessions) UI.PythonIDE.terminalSessions = ['1: pwsh'];
          if (UI.PythonIDE.terminalSessions.length > 1) {
            const current = UI.PythonIDE.activeTerminalId;
            delete UI.PythonIDE.terminalOutputs[current];
            UI.PythonIDE.terminalSessions = UI.PythonIDE.terminalSessions.filter((s: string) => s !== current);
            UI.PythonIDE.activeTerminalId = UI.PythonIDE.terminalSessions[UI.PythonIDE.terminalSessions.length - 1];
            UI.PythonIDE.renderPythonIDE();
          } else {
            const terminalStdout = document.getElementById('ide-terminal-stdout');
            if (terminalStdout) {
              terminalStdout.innerHTML = '';
              UI.PythonIDE.terminalOutputs[UI.PythonIDE.activeTerminalId] = '';
            }
          }
          return;
        }

        // Terminal Instance Selector Pill Click -> Toggle Dropdown Menu
        // Toggle Terminal Dropdown Menu (Pill or Chevron Trigger)
        if (target.closest('#btn-terminal-instance-select') || target.closest('#btn-terminal-dropdown-trigger')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalMenuOpen = !UI.PythonIDE.isTerminalMenuOpen;
          UI.PythonIDE.isTerminalMoreMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Toggle Terminal More Actions Menu
        if (target.closest('#btn-terminal-more')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalMoreMenuOpen = !UI.PythonIDE.isTerminalMoreMenuOpen;
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Terminal More Actions Menu Item Clicks
        if (target.closest('#btn-menu-clear-term')) {
          e.preventDefault();
          if (!UI.PythonIDE.terminalOutputs) UI.PythonIDE.terminalOutputs = {};
          UI.PythonIDE.terminalOutputs[UI.PythonIDE.activeTerminalId] = '';
          UI.PythonIDE.isTerminalMoreMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }
        if (target.closest('#btn-menu-split-term')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalSplit = !UI.PythonIDE.isTerminalSplit;
          UI.PythonIDE.isTerminalMoreMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }
        if (target.closest('#btn-menu-kill-term') || target.closest('#btn-clear-terminal')) {
          e.preventDefault();
          if (!UI.PythonIDE.terminalSessions) UI.PythonIDE.terminalSessions = ['1: pwsh'];
          if (UI.PythonIDE.terminalSessions.length > 1) {
            const curIdx = UI.PythonIDE.terminalSessions.indexOf(UI.PythonIDE.activeTerminalId);
            UI.PythonIDE.terminalSessions = UI.PythonIDE.terminalSessions.filter((s: string) => s !== UI.PythonIDE.activeTerminalId);
            if (UI.PythonIDE.terminalOutputs && UI.PythonIDE.terminalOutputs[UI.PythonIDE.activeTerminalId]) {
              delete UI.PythonIDE.terminalOutputs[UI.PythonIDE.activeTerminalId];
            }
            UI.PythonIDE.activeTerminalId = UI.PythonIDE.terminalSessions[Math.max(0, curIdx - 1)];
          } else {
            if (!UI.PythonIDE.terminalOutputs) UI.PythonIDE.terminalOutputs = {};
            UI.PythonIDE.terminalOutputs[UI.PythonIDE.activeTerminalId] = '';
          }
          UI.PythonIDE.isTerminalMoreMenuOpen = false;
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Create New Terminal from Profile Item
        const profileItem = target.closest('.btn-create-profile-item');
        if (profileItem) {
          e.preventDefault();
          const prof = profileItem.getAttribute('data-profile') || 'PowerShell';
          if (!UI.PythonIDE.terminalSessions) UI.PythonIDE.terminalSessions = ['1: pwsh'];
          const maxNum = UI.PythonIDE.terminalSessions.reduce((max: number, s: string) => {
            const num = parseInt(s.split(':')[0], 10);
            return !isNaN(num) && num > max ? num : max;
          }, 0);
          const shortProf = prof.includes('PowerShell') ? 'pwsh' : (prof.includes('Command') ? 'cmd' : 'python');
          const nextSession = `${maxNum + 1}: ${shortProf}`;
          UI.PythonIDE.terminalSessions.push(nextSession);
          UI.PythonIDE.activeTerminalId = nextSession;
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Toggle Secondary Sidebar (Python Tutorial Assistant Panel)
        if (target.closest('#btn-ide-split-editor')) {
          e.preventDefault();
          UI.PythonIDE.isSecondarySidebarOpen = !UI.PythonIDE.isSecondarySidebarOpen;
          try {
            sessionStorage.setItem('ide_secondary_sidebar_open', String(UI.PythonIDE.isSecondarySidebarOpen));
          } catch (err) {}
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Close Secondary Sidebar Button
        if (target.closest('#btn-close-secondary-sidebar')) {
          e.preventDefault();
          UI.PythonIDE.isSecondarySidebarOpen = false;
          try {
            sessionStorage.setItem('ide_secondary_sidebar_open', 'false');
          } catch (err) {}
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Tutorial Prev Chapter Button
        if (target.closest('#btn-tutorial-prev')) {
          e.preventDefault();
          UI.PythonIDE.setTutorialStep((UI.PythonIDE.currentTutorialStep || 1) - 1);
          return;
        }

        // Tutorial Next Chapter Button (Free navigation enabled)
        if (target.closest('#btn-tutorial-next')) {
          e.preventDefault();
          const curStep = UI.PythonIDE.currentTutorialStep || 1;
          const totalChapters = PYTHON_TUTORIAL_DATA.chapters.length;
          if (curStep >= totalChapters) return;

          UI.PythonIDE.setTutorialStep(curStep + 1);
          return;
        }

        // Tutorial Insert Code into Editor Button
        const insertCodeBtn = target.closest('#btn-tutorial-insert-code');
        if (insertCodeBtn) {
          e.preventDefault();
          const step = parseInt(insertCodeBtn.getAttribute('data-step') || String(UI.PythonIDE.currentTutorialStep || 1), 10);
          UI.PythonIDE.insertTutorialCodeToEditor(step);
          return;
        }

        // Tutorial Copy Code Button
        const copyCodeBtn = target.closest('#btn-tutorial-copy-code');
        if (copyCodeBtn) {
          e.preventDefault();
          const curStep = UI.PythonIDE.currentTutorialStep || 1;
          const ch = PYTHON_TUTORIAL_DATA.chapters.find(c => c.id === curStep);
          if (ch && ch.code) {
            navigator.clipboard.writeText(ch.code).then(() => {
              UI.showSafetyToast('실습 코드가 클립보드에 복사되었습니다.');
            }).catch(() => {
              UI.showSafetyToast('클립보드 복사에 실패했습니다.');
            });
          }
          return;
        }

        // Run Python Code Play Button Action
        if (target.closest('#btn-run-python')) {
          e.preventDefault();
          if (UI.PythonIDE.isTerminalDrawerClosed) {
            UI.PythonIDE.isTerminalDrawerClosed = false;
            UI.PythonIDE.activeDrawerTab = 'terminal';
            UI.PythonIDE.renderPythonIDE();
          }
          UI.PythonIDE.runPythonCode();
          return;
        }

        // Toggle Terminal Panel Drawer Button Action
        if (target.closest('#btn-toggle-terminal-drawer')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalDrawerClosed = !UI.PythonIDE.isTerminalDrawerClosed;
          if (!UI.PythonIDE.isTerminalDrawerClosed) {
            UI.PythonIDE.activeDrawerTab = 'terminal';
          }
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Status Bar Problems Indicator Click -> Open Problems Tab in Drawer
        if (target.closest('#btn-status-problems')) {
          e.preventDefault();
          if (UI.PythonIDE.isTerminalDrawerClosed && UI.PythonIDE.activeDrawerTab === 'problems') {
            UI.PythonIDE.isTerminalDrawerClosed = false;
          } else if (!UI.PythonIDE.isTerminalDrawerClosed && UI.PythonIDE.activeDrawerTab === 'problems') {
            UI.PythonIDE.isTerminalDrawerClosed = true;
          } else {
            UI.PythonIDE.isTerminalDrawerClosed = false;
            UI.PythonIDE.activeDrawerTab = 'problems';
          }
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Status Bar Terminal / Interpreter Click -> Open Terminal Tab in Drawer
        if (target.closest('#btn-status-terminal')) {
          e.preventDefault();
          if (UI.PythonIDE.isTerminalDrawerClosed && UI.PythonIDE.activeDrawerTab === 'terminal') {
            UI.PythonIDE.isTerminalDrawerClosed = false;
          } else if (!UI.PythonIDE.isTerminalDrawerClosed && UI.PythonIDE.activeDrawerTab === 'terminal') {
            UI.PythonIDE.isTerminalDrawerClosed = true;
          } else {
            UI.PythonIDE.isTerminalDrawerClosed = false;
            UI.PythonIDE.activeDrawerTab = 'terminal';
          }
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Terminal Panel Close Action
        if (target.closest('#btn-close-terminal-panel')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalDrawerClosed = true;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Terminal Dropdown Menu Item Click
        const menuItem = target.closest('.terminal-menu-item');
        const deleteSessionBtn = target.closest('.btn-delete-terminal-session');
        if (deleteSessionBtn) {
          e.preventDefault();
          e.stopPropagation();
          const delSession = deleteSessionBtn.getAttribute('data-session');
          if (delSession && UI.PythonIDE.terminalSessions.length > 1) {
            UI.PythonIDE.terminalSessions = UI.PythonIDE.terminalSessions.filter((s: string) => s !== delSession);
            if (UI.PythonIDE.activeTerminalId === delSession) {
              UI.PythonIDE.activeTerminalId = UI.PythonIDE.terminalSessions[0];
            }
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        } else if (menuItem) {
          e.preventDefault();
          const session = menuItem.getAttribute('data-session');
          if (session) {
            UI.PythonIDE.activeTerminalId = session;
            UI.PythonIDE.isTerminalMenuOpen = false;
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Add Terminal (+) Action -> dynamically adds next session
        if (target.closest('#btn-add-terminal')) {
          e.preventDefault();
          if (!UI.PythonIDE.terminalSessions) UI.PythonIDE.terminalSessions = ['1: pwsh'];
          const maxNum = UI.PythonIDE.terminalSessions.reduce((max: number, s: string) => {
            const num = parseInt(s.split(':')[0], 10);
            return !isNaN(num) && num > max ? num : max;
          }, 0);
          const nextSession = `${maxNum + 1}: pwsh`;
          UI.PythonIDE.terminalSessions.push(nextSession);
          UI.PythonIDE.activeTerminalId = nextSession;
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Split Terminal Action
        if (target.closest('#btn-split-terminal')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalSplit = !UI.PythonIDE.isTerminalSplit;
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Terminal Size Toggle Action (Maximize vs Default)
        if (target.closest('#btn-toggle-terminal-size')) {
          e.preventDefault();
          UI.PythonIDE.isTerminalDrawerClosed = false;
          UI.PythonIDE.isTerminalMaximized = !UI.PythonIDE.isTerminalMaximized;
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Bottom Drawer Tab Switch (Problems, Output, Terminal)
        const drawerTab = target.closest('.ide-term-tab');
        if (drawerTab) {
          e.preventDefault();
          const tabKey = drawerTab.getAttribute('data-tab') || '';
          if (tabKey) {
            UI.PythonIDE.isTerminalDrawerClosed = false;
            UI.PythonIDE.activeDrawerTab = (tabKey || 'terminal') as 'problems' | 'output' | 'terminal';
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Problem List Item Click -> Jump to line and focus editor
        const problemItem = target.closest('.btn-problem-item');
        if (problemItem) {
          e.preventDefault();
          const pFile = problemItem.getAttribute('data-file') || '';
          const pLine = parseInt(problemItem.getAttribute('data-line') || '1', 10) || 1;
          const pCol = parseInt(problemItem.getAttribute('data-col') || '1', 10) || 1;
          UI.PythonIDE.navigateToProblem(pFile, pLine, pCol);
          return;
        }

        // Learn Folder Collapse / Expand Toggle
        if (target.closest('#ide-folder-learn') && !target.closest('.ide-tree-actions')) {
          e.preventDefault();
          UI.PythonIDE.isLearnFolderCollapsed = !UI.PythonIDE.isLearnFolderCollapsed;
          UI.PythonIDE.selectedExplorerFolder = '';
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Inline File Delete Action [X]
        const delFileBtn = target.closest('.btn-file-delete');
        if (delFileBtn) {
          e.preventDefault();
          e.stopPropagation();
          const delFile = delFileBtn.getAttribute('data-file') || '';
          if (delFile) {
            const liveTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
            if (liveTextarea && (liveTextarea.getAttribute('data-file') || '') === delFile) {
              liveTextarea.removeAttribute('data-file');
            }

            const files = UI.PythonIDE.getIDEFiles();
            delete files[delFile];
            UI.PythonIDE.saveIDEFiles(files);

            let tabs = UI.PythonIDE.getOpenIDETabs().filter(t => t !== delFile);
            UI.PythonIDE.openIDETabs = tabs;
            UI.PythonIDE.saveOpenIDETabs(tabs);

            if (UI.PythonIDE.activeIDEFile === delFile) {
              UI.PythonIDE.activeIDEFile = tabs.length ? tabs[tabs.length - 1] : Object.keys(files)[0] || null;
              UI.PythonIDE.saveActiveIDEFile(UI.PythonIDE.activeIDEFile);
            }
            if (UI.PythonIDE.dirtyFiles) delete UI.PythonIDE.dirtyFiles[delFile];
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Inline Folder Delete Action [X]
        const delFolderBtn = target.closest('.btn-folder-delete');
        if (delFolderBtn) {
          e.preventDefault();
          e.stopPropagation();
          const delFolder = delFolderBtn.getAttribute('data-folder') || '';
          if (delFolder) {
            const files = UI.PythonIDE.getIDEFiles();
            const prefix = delFolder + '/';
            const matchCount = Object.keys(files).filter(k => k.startsWith(prefix)).length;
            if (matchCount > 0) {
              if (!confirm(`폴더 '${delFolder}' 및 내부 ${matchCount}개 파일을 모두 삭제하시겠습니까?`)) {
                return;
              }
            }

            const liveTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
            if (liveTextarea) {
              const curEditing = liveTextarea.getAttribute('data-file') || '';
              if (curEditing && curEditing.startsWith(prefix)) {
                liveTextarea.removeAttribute('data-file');
              }
            }

            const newFiles: import('../services/ide_filesystem.js').IDEFileMap = {};
            for (const [k, v] of Object.entries(files)) {
              if (!k.startsWith(prefix)) newFiles[k] = v;
            }
            UI.PythonIDE.saveIDEFiles(newFiles);

            let folders = UI.PythonIDE.getIDEFolders().filter(f => f !== delFolder && !f.startsWith(prefix));
            UI.PythonIDE.saveIDEFolders(folders);

            let tabs = UI.PythonIDE.getOpenIDETabs().filter(t => !t.startsWith(prefix));
            UI.PythonIDE.openIDETabs = tabs;
            UI.PythonIDE.saveOpenIDETabs(tabs);

            if (UI.PythonIDE.activeIDEFile && UI.PythonIDE.activeIDEFile.startsWith(prefix)) {
              UI.PythonIDE.activeIDEFile = tabs.length ? tabs[tabs.length - 1] : Object.keys(newFiles)[0] || null;
              UI.PythonIDE.saveActiveIDEFile(UI.PythonIDE.activeIDEFile);
            }
            if (UI.PythonIDE.selectedExplorerFolder === delFolder) UI.PythonIDE.selectedExplorerFolder = null;
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Inline Folder New File Action
        const folderNewFileBtn = target.closest('.btn-folder-new-file');
        if (folderNewFileBtn) {
          e.preventDefault();
          e.stopPropagation();
          const targetFolder = folderNewFileBtn.getAttribute('data-folder') || '';
          UI.PythonIDE.selectedExplorerFolder = targetFolder;
          UI.PythonIDE.inlineCreatingItem = { type: 'file', parentFolder: targetFolder };
          if (targetFolder && UI.PythonIDE.collapsedFolders) UI.PythonIDE.collapsedFolders[targetFolder] = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Inline Folder New Subfolder Action
        const folderNewSubBtn = target.closest('.btn-folder-new-subfolder');
        if (folderNewSubBtn) {
          e.preventDefault();
          e.stopPropagation();
          const parentFolder = folderNewSubBtn.getAttribute('data-folder') || '';
          UI.PythonIDE.selectedExplorerFolder = parentFolder;
          UI.PythonIDE.inlineCreatingItem = { type: 'folder', parentFolder: parentFolder };
          if (parentFolder && UI.PythonIDE.collapsedFolders) UI.PythonIDE.collapsedFolders[parentFolder] = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // IDE Explorer File Click -> Open File in Tab & Editor
        const fileItem = target.closest('.ide-file-item');
        if (fileItem && !target.closest('.ide-tree-actions')) {
          e.preventDefault();
          const fileName = fileItem.getAttribute('data-file') || '';
          if (fileName) {
            // Flush current buffer before switching
            const curTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
            if (curTextarea) {
              const prevFile = curTextarea.getAttribute('data-file') || '' || UI.PythonIDE.activeIDEFile;
              if (prevFile) {
                const curFiles = UI.PythonIDE.getIDEFiles();
                curFiles[prevFile] = curTextarea.value;
                UI.PythonIDE.saveIDEFiles(curFiles);
                if (UI.PythonIDE.dirtyFiles) delete UI.PythonIDE.dirtyFiles[prevFile];
              }
            }
            UI.PythonIDE.activeIDEFile = fileName;
            const openTabs = UI.PythonIDE.openIDETabs || UI.PythonIDE.getOpenIDETabs();
            if (!openTabs.includes(fileName)) openTabs.push(fileName);
            UI.PythonIDE.openIDETabs = openTabs;
            UI.PythonIDE.saveOpenIDETabs(openTabs);
            UI.PythonIDE.saveActiveIDEFile(fileName);
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Dismiss Terminal Dropdown Menu on outside click
        if (UI.PythonIDE.isTerminalMenuOpen && !target.closest('#btn-terminal-instance-select') && !target.closest('#ide-terminal-dropdown-menu')) {
          UI.PythonIDE.isTerminalMenuOpen = false;
          UI.PythonIDE.renderPythonIDE();
        }

        // IDE Editor Tab Click -> Switch Active File
        const editorTab = target.closest('.ide-editor-tab');
        const closeTabBtn = target.closest('.btn-close-ide-tab');
        if (closeTabBtn) {
          e.preventDefault();
          e.stopPropagation();
          const closeFile = closeTabBtn.getAttribute('data-file') || '';
          if (closeFile) {
            let openTabs = UI.PythonIDE.openIDETabs || UI.PythonIDE.getOpenIDETabs();
            openTabs = openTabs.filter(f => f !== closeFile);
            UI.PythonIDE.openIDETabs = openTabs;
            UI.PythonIDE.saveOpenIDETabs(openTabs);
            if (UI.PythonIDE.activeIDEFile === closeFile) {
              UI.PythonIDE.activeIDEFile = openTabs.length > 0 ? openTabs[openTabs.length - 1] : null;
              UI.PythonIDE.saveActiveIDEFile(UI.PythonIDE.activeIDEFile);
            }
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        } else if (editorTab) {
          e.preventDefault();
          const tabFile = editorTab.getAttribute('data-file') || '';
          if (tabFile) {
            // Flush current buffer before switching
            const curTextarea = document.getElementById('ide-code-input') as HTMLTextAreaElement | null;
            if (curTextarea) {
              const prevFile = curTextarea.getAttribute('data-file') || '' || UI.PythonIDE.activeIDEFile;
              if (prevFile) {
                const curFiles = UI.PythonIDE.getIDEFiles();
                curFiles[prevFile] = curTextarea.value;
                UI.PythonIDE.saveIDEFiles(curFiles);
                if (UI.PythonIDE.dirtyFiles) delete UI.PythonIDE.dirtyFiles[prevFile];
              }
            }
            UI.PythonIDE.activeIDEFile = tabFile;
            UI.PythonIDE.saveActiveIDEFile(tabFile);
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // Subfolder Click -> Select Target Folder and Toggle Collapse
        const folderItem = target.closest('.ide-folder-item');
        if (folderItem && !target.closest('.ide-tree-actions')) {
          e.preventDefault();
          const fName = folderItem.getAttribute('data-folder') || '';
          if (fName) {
            UI.PythonIDE.selectedExplorerFolder = fName;
            if (!UI.PythonIDE.collapsedFolders) UI.PythonIDE.collapsedFolders = {};
            UI.PythonIDE.collapsedFolders[fName] = !UI.PythonIDE.collapsedFolders[fName];
            UI.PythonIDE.renderPythonIDE();
          }
          return;
        }

        // IDE Explorer Header New File Action
        if (target.closest('#btn-ide-new-file')) {
          e.preventDefault();
          const curTargetFolder = UI.PythonIDE.selectedExplorerFolder || '';
          UI.PythonIDE.inlineCreatingItem = { type: 'file', parentFolder: curTargetFolder };
          if (curTargetFolder && UI.PythonIDE.collapsedFolders) UI.PythonIDE.collapsedFolders[curTargetFolder] = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // IDE Explorer Header New Folder Action
        if (target.closest('#btn-ide-new-folder')) {
          e.preventDefault();
          const curTargetFolder = UI.PythonIDE.selectedExplorerFolder || '';
          UI.PythonIDE.inlineCreatingItem = { type: 'folder', parentFolder: curTargetFolder };
          if (curTargetFolder && UI.PythonIDE.collapsedFolders) UI.PythonIDE.collapsedFolders[curTargetFolder] = false;
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // IDE Explorer Refresh Action
        if (target.closest('#btn-ide-refresh')) {
          e.preventDefault();
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // IDE Explorer Collapse All Folders Action
        if (target.closest('#btn-ide-collapse-all')) {
          e.preventDefault();
          UI.PythonIDE.isLearnFolderCollapsed = true;
          const folders = UI.PythonIDE.getIDEFolders();
          if (!UI.PythonIDE.collapsedFolders) UI.PythonIDE.collapsedFolders = {};
          folders.forEach(f => {
            if (f) UI.PythonIDE.collapsedFolders[f] = true;
          });
          UI.PythonIDE.renderPythonIDE();
          return;
        }

        // Footer Nav Link
        const footerBtn = target.closest('.nav-tab-btn-footer');
        if (footerBtn) {
          e.preventDefault();
          const tab = footerBtn.getAttribute('data-tab') || '';
          this.switchTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Mega Dropdown Link Click
        const megaLink = target.closest('.mega-link');
        if (megaLink) {
          e.preventDefault();
          document.querySelectorAll('.mega-link').forEach(el => el.classList.remove('active'));
          megaLink.classList.add('active');

          const action = megaLink.getAttribute('data-action') || '';
          if (action === 'all-problems') {
            this.switchTab('catalog');
          } else if (action === 'basic-problems' || action === 'exam-20') {
            const sample = DataManager.getRandomSample(20);
            State.startSession('exam', sample);
            UI.renderQuiz();
          } else if (action === 'intro-problems') {
            const easyQuestions = DataManager.getAllQuestions().filter(q => q.difficulty === '초급' || q.difficulty === '중급');
            State.startSession('category', easyQuestions.slice(0, 20), '입문 문제');
            UI.renderQuiz();
          } else if (action === 'haerye') {
            const catQuestions = DataManager.getByCategory('훈민정음 해례본');
            State.startSession('category', catQuestions, '훈민정음 해례본');
            UI.renderQuiz();
          } else if (action === 'dongguk') {
            const catQuestions = DataManager.getByCategory('동국정운');
            State.startSession('category', catQuestions, '동국정운');
            UI.renderQuiz();
          } else if (action === 'sosill') {
            const catQuestions = DataManager.getByCategory('소실 문자');
            State.startSession('category', catQuestions, '소실 문자');
            UI.renderQuiz();
          } else if (action === 'grammar') {
            const catQuestions = DataManager.getByCategory('중세국어 문법');
            State.startSession('category', catQuestions, '중세국어 문법');
            UI.renderQuiz();
          } else if (action === 'cert' || action === 'infinite') {
            const allShuffled = DataManager.getRandomSample(500);
            State.startSession('infinite', allShuffled);
            UI.renderQuiz();
          } else if (action === 'review' || action === 'weakness') {
            this.startReviewSession();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        if (target.closest('#btn-mega-goto-stats')) {
          e.preventDefault();
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Header Wrong Answers -> Show Wrong Problem List Page
        if (target.closest('#btn-header-wrong')) {
          this.switchTab('wrong');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Hero Start / Quick Start
        if (target.closest('#btn-hero-start') || target.closest('#btn-quick-start') || target.closest('#btn-promo-start')) {
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Hero Catalog / All Curriculum
        if (target.closest('#btn-hero-catalog') || target.closest('#link-all-curriculum')) {
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Quick Icon Items
        const quickItem = target.closest('.quick-icon-item');
        if (quickItem) {
          const action = quickItem.getAttribute('data-action') || '';
          if (action === 'exam') {
            const sample = DataManager.getRandomSample(20);
            State.startSession('exam', sample);
            UI.renderQuiz();
          } else if (action === 'catalog') {
            this.switchTab('catalog');
          } else if (action === 'combiner') {
            this.switchTab('combiner');
          } else if (action === 'corpus') {
            this.switchTab('corpus');
          } else if (action === 'review' || action === 'wrong') {
            this.switchTab('wrong');
          } else if (action === 'cert') {
            const allShuffled = DataManager.getRandomSample(500);
            State.startSession('infinite', allShuffled);
            UI.renderQuiz();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Curriculum Card Click
        const currCard = target.closest('.curr-card');
        if (currCard) {
          const cat = currCard.getAttribute('data-cat') || '';
          if (cat === 'all') {
            const sample = DataManager.getRandomSample(20);
            State.startSession('exam', sample);
            UI.renderQuiz();
          } else {
            const catQuestions = DataManager.getByCategory(cat);
            State.startSession('category', catQuestions, cat);
            UI.renderQuiz();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Cert Promo Action
        if (target.closest('#btn-cert-action')) {
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Combiner Jamo Tile Click
        const jamoTile = target.closest('.jamo-tile-btn');
        if (jamoTile) {
          const type = jamoTile.getAttribute('data-type');
          const val = jamoTile.getAttribute('data-val') || '';
          if (type === 'cho') State.combiner.cho = val;
          if (type === 'jung') State.combiner.jung = val;
          if (type === 'jong') State.combiner.jong = val;
          UI.renderCombiner();
          return;
        }

        // Combiner Copy Button
        const copyBtn = target.closest('#btn-copy-glyph');
        if (copyBtn) {
          const char = copyBtn.getAttribute('data-char') || '';
          if (navigator.clipboard) {
            navigator.clipboard.writeText(char).then(() => {
              copyBtn.textContent = '복사 완료!';
              setTimeout(() => (copyBtn.textContent = '조합된 글자 복사'), 1500);
            });
          }
          return;
        }

        // Combiner Search in Catalog
        const searchBtn = target.closest('#btn-search-glyph');
        if (searchBtn) {
          const char = searchBtn.getAttribute('data-char') || '';
          this.switchTab('catalog');
          const input = ((document.getElementById('catalog-search-input') as HTMLInputElement | null) as HTMLInputElement | null);
          if (input) {
            input.value = char;
            UI.renderCatalog('all', char);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Quiz Option Selection
        const optionBtn = target.closest('.quiz-option-row, .quiz-option-tile, .option-item');
        if (optionBtn && !State.isAnswered) {
          const index = parseInt(optionBtn.getAttribute('data-index') || '0', 10);
          State.answerCurrentQuestion(index);
          UI.renderQuiz();
          return;
        }

        // Next Question
        if (target.closest('#btn-next-question')) {
          State.nextQuestion();
          UI.renderQuiz();
          return;
        }

        // Finish Quiz -> View Diagnostic Result Report
        if (target.closest('#btn-finish-quiz')) {
          const record = State.finishSession();
          UI.renderResult(record);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Breadcrumbs Click Navigation
        const crumbLink = target.closest('.crumb-link');
        if (crumbLink) {
          e.preventDefault();
          const crumbType = crumbLink.getAttribute('data-crumb') || '';
          State.stopTimer();
          State.clearSessionStorage();
          if (crumbType === 'dashboard') {
            this.switchTab('dashboard');
          } else if (crumbType === 'category') {
            const cat = crumbLink.getAttribute('data-cat') || '' || 'all';
            this.switchTab('catalog');
            UI.renderCatalog(cat, '');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Back to Catalog / Dashboard
        if (target.closest('#btn-back-to-catalog') || target.closest('#btn-quit-quiz')) {
          State.stopTimer();
          State.clearSessionStorage();
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Retry Exam
        if (target.closest('#btn-retry-exam')) {
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Go Home
        if (target.closest('#btn-go-home')) {
          State.stopTimer();
          State.clearSessionStorage();
          this.switchTab('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Toggle Bookmark
        if (target.closest('#btn-toggle-bookmark')) {
          const q = State.getCurrentQuestion();
          if (q) {
            Storage.toggleBookmark(q.id);
            UI.renderQuiz();
          }
          return;
        }

        // Single Question Solve from Catalog (Row or Title Click)
        const solveBtn = target.closest('.btn-solve-single') || target.closest('.pg-table-row');
        if (solveBtn && !target.closest('.cat-btn') && !target.closest('.pg-filter-select')) {
          e.preventDefault();
          const qIdAttr = solveBtn.getAttribute('data-id');
          if (qIdAttr) {
            const qId = parseInt(qIdAttr, 10);
            const q = DataManager.getQuestionById(qId);
            if (q) {
              State.startSession('single', [q]);
              UI.renderQuiz();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
          return;
        }

        // Category filter in Catalog
        const catBtn = target.closest('.cat-btn');
        if (catBtn) {
          const cat = catBtn.getAttribute('data-cat') || '';
          const input = ((document.getElementById('catalog-search-input') as HTMLInputElement | null) as HTMLInputElement | null);
          const query = input ? input.value : '';
          UI.renderCatalog(cat || 'all', query || '');
          return;
        }

        // Virtual Keyboard Click in Catalog
        const vkKey = target.closest('.vk-key');
        if (vkKey) {
          const char = vkKey.getAttribute('data-char') || '';
          const input = ((document.getElementById('catalog-search-input') as HTMLInputElement | null) as HTMLInputElement | null);
          if (input) {
            input.value += char;
            input.focus();
            const activeCatBtn = document.querySelector('.cat-btn.active');
            const currentCat = activeCatBtn ? activeCatBtn.getAttribute('data-cat') || '' : 'all';
            UI.renderCatalog(currentCat, input.value);
          }
          return;
        }
      });

      let catalogFilterTimer: number | null = null;
      const triggerCatalogFilter = (immediate = false) => {
        if (catalogFilterTimer) {
          clearTimeout(catalogFilterTimer);
          catalogFilterTimer = null;
        }
        const run = () => {
          const searchInput = ((document.getElementById('catalog-search-input') as HTMLInputElement | null) as HTMLInputElement | null);
          const catSelect = (document.getElementById('filter-category-select') as HTMLSelectElement | null);
          const diffSelect = (document.getElementById('filter-difficulty') as HTMLSelectElement | null);
          const typeSelect = (document.getElementById('filter-type') as HTMLSelectElement | null);

          const query = searchInput ? searchInput.value : '';
          const cat = catSelect ? catSelect.value : 'all';
          const diff = diffSelect ? diffSelect.value : 'all';
          const examType = typeSelect ? typeSelect.value : 'all';

          UI.renderCatalog(cat, query, diff, examType);
        };

        if (immediate) {
          run();
        } else {
          catalogFilterTimer = setTimeout(run, 60);
        }
      };

      document.addEventListener('input', (e) => {
        if ((e.target as HTMLElement).id === 'catalog-search-input') {
          triggerCatalogFilter(false);
        }
      });

      document.addEventListener('change', (e) => {
        if ((e.target as HTMLElement).id === 'select-tutorial-chapter') {
          const step = parseInt((e.target as HTMLInputElement).value, 10);
          if (!isNaN(step)) {
            UI.PythonIDE.setTutorialStep(step);
          }
          return;
        }
        if (
          (e.target as HTMLElement).id === 'filter-category-select' ||
          (e.target as HTMLElement).id === 'filter-difficulty' ||
          (e.target as HTMLElement).id === 'filter-type'
        ) {
          triggerCatalogFilter(false);
        }
      });
    }
    switchTab(tab: string, updateHistory = true) {
      const header = document.querySelector('.site-header');
      const footer = document.querySelector('.site-footer');
      if (tab === 'python-learn') {
        document.body.classList.add('in-ide-mode');
        document.documentElement.classList.add('in-ide-mode');
        if (header) header.classList.add('ide-mode-active');
        if (footer) {
      const f = document.querySelector('.site-footer') as HTMLElement | null;
      if (f) f.style.display = 'none';
    }
      } else {
        document.body.classList.remove('in-ide-mode');
        document.documentElement.classList.remove('in-ide-mode');
        if (header) {
          header.classList.remove('ide-mode-active');
          header.classList.remove('header-collapsed');
        }
        if (footer) {
      const f = document.querySelector('.site-footer') as HTMLElement | null;
      if (f) f.style.display = '';
    }
      }

      document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
        const btnTab = btn.getAttribute('data-tab') || '';
        const isActive = btnTab === tab ||
          (tab === 'korean-home' && btnTab === 'exam') ||
          (tab === 'info-home' && btnTab === 'info');
        btn.classList.toggle('active', isActive);
      });

      State.stopTimer();
      sessionStorage.setItem('alphagh_current_view', tab);

      if (updateHistory) {
        if (tab === 'dashboard') {
          if (window.location.hash) history.pushState(null, '', window.location.pathname + window.location.search);
        } else {
          window.location.hash = '#' + tab;
        }
      }

      if (tab === 'dashboard') {
        document.querySelectorAll('.mega-link').forEach(el => el.classList.remove('active'));
        State.view = 'dashboard';
        State.clearSessionStorage();
        sessionStorage.setItem('alphagh_current_view', 'dashboard');
        UI.renderDashboard();
        this.startHeroAutoPlay();
      } else {
        this.stopHeroAutoPlay();
        if (tab === 'exam' || tab === 'korean-home') {
          State.view = 'korean-home';
          UI.renderBlankPage();
        } else if (tab === 'info' || tab === 'info-home') {
          State.view = 'info-home';
          UI.renderInfoHome();
        } else if (tab === 'python-learn') {
          State.view = 'python-learn';
          UI.PythonIDE.renderPythonIDE();
        } else if (tab === 'social' || tab === 'english') {
          State.view = tab;
          UI.renderBlankPage();
        } else if (tab === 'catalog') {
          document.querySelectorAll('.mega-link').forEach(el => el.classList.remove('active'));
          const allProbLink = document.querySelector('.mega-link[data-action="all-problems"]');
          if (allProbLink) allProbLink.classList.add('active');
          State.view = 'catalog';
          UI.renderCatalog('all', '');
        } else if (tab === 'combiner') {
          State.view = 'combiner';
          UI.renderCombiner();
        } else if (tab === 'corpus') {
          State.view = 'corpus';
          UI.renderCorpus();
        } else if (tab === 'wrong') {
          State.view = 'wrong';
          UI.renderWrongNotes();
        }
      }
    }
    startReviewSession() {
      const wrongIds = Storage.getWrongAnswers();
      const bookmarkIds = Storage.getBookmarks();
      const combinedIds = Array.from(new Set([...wrongIds, ...bookmarkIds]));

      if (combinedIds.length === 0) {
        alert('현재 저장된 오답 또는 북마크 문항이 없습니다. 먼저 문제를 풀어보세요.');
        return;
      }

      const reviewQuestions = combinedIds
        .map((id) => DataManager.getQuestionById(id))
        .filter((q): q is import("../services/data_manager.js").EnrichedQuestion => Boolean(q));

      State.startSession('review', reviewQuestions);
      UI.renderQuiz();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes((document.activeElement as HTMLElement)?.tagName || "")) return;

        if (State.view === 'quiz') {
          if (['Enter', ' '].includes(e.key) && State.isAnswered) {
            e.preventDefault();
            const currentNum = State.currentIndex + 1;
            const total = State.sessionQuestions.length;
            if (currentNum < total) {
              State.nextQuestion();
              UI.renderQuiz();
            } else {
              const record = State.finishSession();
              UI.renderResult(record);
            }
            return;
          }

          if (e.key.toLowerCase() === 'b') {
            const q = State.getCurrentQuestion();
            if (q) {
              Storage.toggleBookmark(q.id);
              UI.renderQuiz();
            }
            return;
          }

          if (e.key === 'Escape') {
            State.stopTimer();
            State.view = 'dashboard';
            this.switchTab('dashboard');
            return;
          }
        }
      });
    }
}

export const App = new AppController();
