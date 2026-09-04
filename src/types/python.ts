// Python Tutorial & IDE Type Definitions

export interface Concept {
  title: string;
  desc: string;
}

export interface Chapter {
  id: number;
  badge: string;
  title: string;
  summary: string | string[];
  concepts: Concept[];
  syntaxExample?: string;
  taskDescription?: string;
  starterCode: string;
  code?: string;
  solutionCode: string;
  output: string;
  hint?: string;
  takeaways: string[];
}

export interface PythonTutorialData {
  title: string;
  version: string;
  chapters: Chapter[];
}

export interface LinterProblem {
  line: number;
  col: number;
  endCol?: number;
  message: string;
  severity: 'error' | 'warning' | 'info';
  type?: string;
}

export interface AutoCompleteItem {
  name: string;
  type: 'keyword' | 'builtin' | 'snippet' | 'variable' | 'function';
  snippet?: string;
  doc: string;
}

export interface IDEFileMap {
  [path: string]: string;
}
