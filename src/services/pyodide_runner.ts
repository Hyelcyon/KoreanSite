// Pyodide WebAssembly Runtime & Execution Manager

import { PyodideInterface } from '../types/pyodide.js';

export interface PyodideRunResult {
  stdout: string;
  stderr?: string;
  result?: unknown;
  error?: string;
}

export interface PyodideRunOptions {
  stdinPrompt?: string;
  onStdoutChunk?: (chunk: string) => void;
  onStderrChunk?: (chunk: string) => void;
}

export class PyodideRunnerService {
  private instance: PyodideInterface | null = null;
  private isLoading = false;

  async init(): Promise<PyodideInterface | null> {
    return this.getInstance();
  }

  async runCode(
    code: string,
    files: Record<string, string> = {},
    options: PyodideRunOptions = {}
  ): Promise<PyodideRunResult> {
    return this.executeCode(code, files, options);
  }

  async getInstance(): Promise<PyodideInterface | null> {
    if (this.instance) return this.instance;
    if (typeof loadPyodide === 'undefined') return null;

    if (!this.isLoading) {
      this.isLoading = true;
      try {
        this.instance = await loadPyodide();
        try {
          await this.instance.runPythonAsync('import sys\nif "." not in sys.path:\n    sys.path.insert(0, ".")');
        } catch {
          // Ignore sys.path insert errors
        }
      } catch (err) {
        console.error('Failed to load Pyodide runtime:', err);
      } finally {
        this.isLoading = false;
      }
    }
    return this.instance;
  }

  syncVirtualFiles(instance: PyodideInterface, files: Record<string, string>): void {
    for (const [fname, fcontent] of Object.entries(files)) {
      try {
        if (fname.includes('/')) {
          const parts = fname.split('/');
          parts.pop();
          let currentDir = '';
          for (const part of parts) {
            currentDir = currentDir ? `${currentDir}/${part}` : part;
            try {
              instance.FS.mkdir(currentDir);
            } catch {
              // Directory might already exist
            }
          }
        }
        instance.FS.writeFile(fname, fcontent);
      } catch (fsErr) {
        console.warn('Pyodide FS sync warning:', fsErr);
      }
    }
  }

  async executeCode(
    code: string,
    files: Record<string, string> = {},
    options: PyodideRunOptions = {}
  ): Promise<PyodideRunResult> {
    const pyodide = await this.getInstance();
    if (!pyodide) {
      return {
        stdout: '',
        error: 'Pyodide WebAssembly runtime is not loaded in this environment.'
      };
    }

    this.syncVirtualFiles(pyodide, files);

    let logs = '';
    
    pyodide.setStdout({
      batched: (msg: string) => {
        logs += msg + '\n';
        if (options.onStdoutChunk) options.onStdoutChunk(msg);
      }
    });

    pyodide.setStderr({
      batched: (msg: string) => {
        logs += msg + '\n';
        if (options.onStderrChunk) options.onStderrChunk(msg);
      }
    });

    if (typeof pyodide.setStdin === 'function') {
      try {
        pyodide.setStdin({
          stdin: () => window.prompt(options.stdinPrompt || 'Python input():') || ''
        });
      } catch {
        // Ignore stdin setup error
      }
    }

    try {
      const result = await pyodide.runPythonAsync(code);
      try {
        await pyodide.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
      } catch {
        // Ignore flush error
      }
      return {
        stdout: logs,
        result
      };
    } catch (err: unknown) {
      try {
        await pyodide.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
      } catch {
        // Ignore flush error
      }
      const errMsg = err instanceof Error ? err.message : String(err);
      return {
        stdout: logs,
        error: errMsg
      };
    }
  }
}

export const PyodideRunner = new PyodideRunnerService();
