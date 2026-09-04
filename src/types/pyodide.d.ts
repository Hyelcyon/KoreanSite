// Pyodide WebAssembly Global Definitions

export interface PyodideFS {
  mkdir(path: string): void;
  writeFile(path: string, content: string): void;
  readFile(path: string, options?: { encoding: string }): string | Uint8Array;
  unlink(path: string): void;
  rmdir(path: string): void;
  readdir(path: string): string[];
}

export interface PyodideInterface {
  FS: PyodideFS;
  runPythonAsync(code: string): Promise<unknown>;
  setStdout(handlers: { batched?: (msg: string) => void; raw?: (byte: number) => void; isatty?: boolean }): void;
  setStderr(handlers: { batched?: (msg: string) => void; raw?: (byte: number) => void; isatty?: boolean }): void;
  setStdin(handlers: { stdin?: () => string | null; isatty?: boolean }): void;
}

declare global {
  function loadPyodide(): Promise<PyodideInterface>;
}
