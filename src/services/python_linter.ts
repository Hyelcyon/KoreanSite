// Python Static Analysis Linter

export interface DiagnosticProblem {
  file: string;
  line: number;
  col: number;
  token: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
}

const BUILTINS_SET = new Set([
  'print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'sum', 'min', 'max',
  'abs', 'round', 'all', 'any', 'isinstance', 'issubclass', 'open', 'input', 'id', 'dir', 'help',
  'repr', 'super', 'type', 'vars', 'str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple',
  'bytes', 'object', 'Exception', 'ValueError', 'TypeError', 'NameError', 'IndexError', 'KeyError',
  'ZeroDivisionError', 'True', 'False', 'None', 'next', 'iter', 'reversed', 'format', 'hash',
  'callable', 'hasattr', 'getattr', 'setattr', 'delattr', 'chr', 'ord', 'hex', 'oct', 'bin',
  'pow', 'divmod', 'slice', 'frozenset', 'bytearray', 'memoryview', 'classmethod', 'staticmethod',
  'property', 'globals', 'locals', 'StopIteration', 'KeyboardInterrupt', 'AttributeError',
  'ImportError', 'ModuleNotFoundError', 'FileNotFoundError', 'IOError', 'OSError', 'RuntimeError',
  'SyntaxError', 'IndentationError', 'TabError', 'SystemExit', 'AssertionError', 'NotImplementedError',
  'OverflowError', 'RecursionError'
]);

const COMMON_TYPOS: Record<string, string> = {
  'pirnt': 'print', 'prnt': 'print', 'pritn': 'print', 'prnit': 'print', 'println': 'print',
  'lenght': 'len', 'langth': 'len', 'rang': 'range', 'rangee': 'range', 'inpu': 'input',
  'imput': 'input', 'dfe': 'def', 'deff': 'def', 'calss': 'class', 'clss': 'class',
  'clas': 'class', 'retrun': 'return', 'retun': 'return', 'reutrn': 'return',
  'improt': 'import', 'form': 'from', 'whlie': 'while', 'elseif': 'elif', 'elsif': 'elif'
};

const inferLiteralType = (expr: string): string | null => {
  const tr = (expr || '').trim();
  if (/^["'].*["']$/.test(tr)) return 'str';
  if (/^-?\d+$/.test(tr)) return 'int';
  if (/^-?\d+\.\d+$/.test(tr)) return 'float';
  if (/^(True|False)$/.test(tr)) return 'bool';
  if (/^\[.*\]$/.test(tr)) return 'list';
  if (/^\{.*\}$/.test(tr)) return tr.includes(':') ? 'dict' : 'set';
  if (/^\(.*\)$/.test(tr)) return 'tuple';
  return null;
};

export function createDiagnosticMap(problems: DiagnosticProblem[]): Map<number, DiagnosticProblem[]> {
  const map = new Map<number, DiagnosticProblem[]>();
  for (let i = 0; i < problems.length; i++) {
    const p = problems[i];
    if (!p) continue;
    const existing = map.get(p.line);
    if (existing) {
      existing.push(p);
    } else {
      map.set(p.line, [p]);
    }
  }
  return map;
}

const REGEX_CLASS = /^\s*class\s+([a-zA-Z_]\w*)/;
const REGEX_DEF = /^\s*def\s+([a-zA-Z_]\w*)/;
const REGEX_FROM_IMPORT = /^\s*from\s+[a-zA-Z0-9_.]+\s+import\s+(.+)$/;
const REGEX_IMPORT = /^\s*import\s+(.+)$/;
const REGEX_WITH_AS = /\bas\s+([a-zA-Z_]\w*)\s*:/;
const REGEX_EXCEPT_AS = /\bexcept\b.*\bas\s+([a-zA-Z_]\w*)\s*:/;
const REGEX_ASSIGN = /^\s*([a-zA-Z_][a-zA-Z0-9_,\s*]*?)\s*(?::\s*[a-zA-Z0-9_\[\],\s|]+)?\s*=(?!=)/;
const REGEX_FOR = /^\s*for\s+([a-zA-Z_][a-zA-Z0-9_,\s*]*?)\s+in\b/;
const REGEX_DEF_PARAMS = /^\s*def\s+\w+\(([^)]*)\)/;
const REGEX_BLOCK_KEYWORD = /^(def|class|if|elif|else|for|while|try|except|finally|with|match|case)\b/;
const REGEX_TYPE_ANNOT = /^\s*([a-zA-Z_]\w*)\s*:\s*([a-zA-Z_]\w*)\s*=\s*(.+)$/;
const REGEX_CALLS = /\b([a-zA-Z_]\w*)\s*\(/g;
const REGEX_CLEAN_QUOTES = /(["'])(?:(?=(\\?))\2.)*?\1/g;
const REGEX_IDENTIFIER = /^[a-zA-Z_]\w*$/;

export function lintPythonCode(code: string, activeFile = 'main.py'): DiagnosticProblem[] {
  if (!code) return [];
  const lines = code.split('\n');
  const diagnostics: DiagnosticProblem[] = [];

  const userDefined = new Set<string>(['self', 'cls', 'args', 'kwargs']);
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i] || '';
    const cm = l.match(REGEX_CLASS);
    if (cm && cm[1]) userDefined.add(cm[1]);

    const dm = l.match(REGEX_DEF);
    if (dm && dm[1]) userDefined.add(dm[1]);

    const fromImportMatch = l.match(REGEX_FROM_IMPORT);
    if (fromImportMatch && fromImportMatch[1]) {
      const items = fromImportMatch[1].split(',');
      for (let j = 0; j < items.length; j++) {
        const parts = (items[j] || '').trim().split(/\s+as\s+/);
        const sym = (parts[1] || parts[0] || '').trim();
        if (sym && REGEX_IDENTIFIER.test(sym)) userDefined.add(sym);
      }
    }

    const importMatch = l.match(REGEX_IMPORT);
    if (importMatch && importMatch[1] && !l.includes('from ')) {
      const items = importMatch[1].split(',');
      for (let j = 0; j < items.length; j++) {
        const parts = (items[j] || '').trim().split(/\s+as\s+/);
        const sym = (parts[1] || parts[0] || '').trim().split('.')[0] || '';
        if (sym && REGEX_IDENTIFIER.test(sym)) userDefined.add(sym);
      }
    }

    const withMatch = l.match(REGEX_WITH_AS);
    if (withMatch && withMatch[1]) userDefined.add(withMatch[1]);

    const exceptMatch = l.match(REGEX_EXCEPT_AS);
    if (exceptMatch && exceptMatch[1]) userDefined.add(exceptMatch[1]);

    const am = l.match(REGEX_ASSIGN);
    if (am && am[1] && !l.trim().startsWith('if') && !l.trim().startsWith('return')) {
      const vars = am[1].split(',');
      for (let j = 0; j < vars.length; j++) {
        const vName = (vars[j] || '').replace(/[*\s]/g, '').trim();
        if (vName && REGEX_IDENTIFIER.test(vName)) userDefined.add(vName);
      }
    }

    const fm = l.match(REGEX_FOR);
    if (fm && fm[1]) {
      const vars = fm[1].split(',');
      for (let j = 0; j < vars.length; j++) {
        const vName = (vars[j] || '').replace(/[*\s()]/g, '').trim();
        if (vName && REGEX_IDENTIFIER.test(vName)) userDefined.add(vName);
      }
    }

    const pm = l.match(REGEX_DEF_PARAMS);
    if (pm && pm[1]) {
      const params = pm[1].split(',');
      for (let j = 0; j < params.length; j++) {
        const pName = ((params[j] || '').trim().split(':')[0] || '').split('=')[0]?.replace(/[*]/g, '').trim();
        if (pName && REGEX_IDENTIFIER.test(pName)) userDefined.add(pName);
      }
    }
  }

  let inTripleQuote = false;
  let tripleQuoteChar = '';

  for (let idx = 0; idx < lines.length; idx++) {
    const l = lines[idx] || '';
    const lineNum = idx + 1;
    const trimmed = l.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (inTripleQuote) {
      if (l.includes(tripleQuoteChar)) {
        inTripleQuote = false;
      }
      continue;
    }

    if (l.includes('"""') || l.includes("'''")) {
      const qChar = l.includes('"""') ? '"""' : "'''";
      const count = (l.match(new RegExp(qChar, 'g')) || []).length;
      if (count % 2 !== 0) {
        inTripleQuote = true;
        tripleQuoteChar = qChar;
        continue;
      }
    }

    if (REGEX_BLOCK_KEYWORD.test(trimmed) && !trimmed.endsWith(':')) {
      diagnostics.push({
        file: activeFile,
        line: lineNum,
        col: l.length,
        token: ':',
        severity: 'error',
        message: "SyntaxError: expected ':' at end of statement"
      });
    }

    const typeAnnotMatch = l.match(REGEX_TYPE_ANNOT);
    if (typeAnnotMatch && typeAnnotMatch[1] && typeAnnotMatch[2] && typeAnnotMatch[3]) {
      const declaredType = typeAnnotMatch[2];
      const valExpr = typeAnnotMatch[3].trim();
      const actualType = inferLiteralType(valExpr);

      if (actualType && declaredType !== actualType) {
        if (!(declaredType === 'float' && actualType === 'int')) {
          diagnostics.push({
            file: activeFile,
            line: lineNum,
            col: l.indexOf(valExpr) + 1,
            token: valExpr,
            severity: 'error',
            message: `TypeError: Expression of type "${actualType}" cannot be assigned to declared type "${declaredType}"`
          });
        }
      }
    }

    const singleQuotes = (l.match(/(?<!\\)'/g) || []).length;
    const doubleQuotes = (l.match(/(?<!\\)"/g) || []).length;
    if (singleQuotes % 2 !== 0 && !l.includes("'''")) {
      diagnostics.push({ file: activeFile, line: lineNum, col: l.length, token: "'", severity: 'error', message: "SyntaxError: unterminated single-quoted string literal" });
    } else if (doubleQuotes % 2 !== 0 && !l.includes('"""')) {
      diagnostics.push({ file: activeFile, line: lineNum, col: l.length, token: '"', severity: 'error', message: "SyntaxError: unterminated double-quoted string literal" });
    }

    const indentSpaces = l.match(/^ +/);
    if (indentSpaces && indentSpaces[0].length % 4 !== 0) {
      diagnostics.push({ file: activeFile, line: lineNum, col: 1, token: 'indent', severity: 'warning', message: "IndentationError: unexpected indent (must be multiple of 4 spaces)" });
    }

    const pyKeywords = new Set(['if', 'elif', 'else', 'while', 'for', 'in', 'is', 'not', 'and', 'or', 'return', 'yield', 'with', 'assert', 'case', 'except', 'raise', 'import', 'from', 'as', 'lambda', 'pass', 'break', 'continue']);
    const codeOnlyLine = l.replace(REGEX_CLEAN_QUOTES, (m) => ' '.repeat(m.length));

    const callMatches = codeOnlyLine.matchAll(REGEX_CALLS);
    for (const match of callMatches) {
      const name = match[1];
      if (!name) continue;
      const col = (match.index || 0) + 1;
      const isDef = new RegExp(`^\\s*def\\s+${name}\\b`).test(l);
      const isDotMethod = (match.index || 0) > 0 && codeOnlyLine[(match.index || 0) - 1] === '.';
      if (isDef || isDotMethod || pyKeywords.has(name)) continue;

      if (COMMON_TYPOS[name]) {
        diagnostics.push({
          file: activeFile,
          line: lineNum,
          col: col,
          token: name,
          severity: 'error',
          message: `NameError: name '${name}' is not defined. Did you mean '${COMMON_TYPOS[name]}'?`
        });
      } else if (!BUILTINS_SET.has(name) && !userDefined.has(name)) {
        let closest: string | null = null;
        for (const b of BUILTINS_SET) {
          if (Math.abs(b.length - name.length) <= 1 && (b.startsWith(name.slice(0, 2)) || b.endsWith(name.slice(-2)))) {
            closest = b;
            break;
          }
        }
        diagnostics.push({
          file: activeFile,
          line: lineNum,
          col: col,
          token: name,
          severity: 'error',
          message: closest ? `NameError: name '${name}' is not defined. Did you mean '${closest}'?` : `NameError: name '${name}' is not defined`
        });
      }
    }
  }

  return diagnostics;
}
