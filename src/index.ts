// Standalone Modular TypeScript Entrypoint
// Built with KS X 1026-1 Standard Unicode Conjoining Jamo & Programmers 2026 Rich Gradient Architecture

import { App } from './router/app.js';
import { State } from './state/app_state.js';
import { UI } from './ui/ui.js';
import { DataManager } from './services/data_manager.js';
import { Storage } from './services/storage.js';
import { PyodideRunner } from './services/pyodide_runner.js';

// Expose on global window for seamless debugging and legacy script interop if needed
declare global {
  interface Window {
    App: typeof App;
    State: typeof State;
    UI: typeof UI;
    DataManager: typeof DataManager;
    AppStorage: typeof Storage;
    PyodideRunner: typeof PyodideRunner;
  }
}

if (typeof window !== 'undefined') {
  window.App = App;
  window.State = State;
  window.UI = UI;
  window.DataManager = DataManager;
  window.AppStorage = Storage;
  window.PyodideRunner = PyodideRunner;
}

// Auto-Launch Guarantee
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

export { App, State, UI, DataManager, Storage, PyodideRunner };
