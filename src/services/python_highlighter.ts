// Python Syntax Highlighter Service

import { DiagnosticProblem, lintPythonCode, createDiagnosticMap } from './python_linter.js';

const CONTROL_KEYWORDS = new Set([
  'return', 'if', 'elif', 'else', 'for', 'while', 'break', 'continue', 'pass',
  'try', 'except', 'finally', 'raise', 'with', 'yield', 'await', 'async',
  'match', 'case', 'import', 'from', 'as'
]);

const OTHER_KEYWORDS = new Set([
  'def', 'class', 'lambda', 'type', 'global', 'nonlocal', 'assert',
  'in', 'is', 'not', 'and', 'or', 'True', 'False', 'None'
]);

const TYPE_NAMES = new Set([
  'str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple',
  'bytes', 'object', 'Any', 'Optional', 'Union', 'Callable',
  'List', 'Dict', 'Set', 'Tuple'
]);

const BUILTINS = new Set([
  'print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted',
  'sum', 'min', 'max', 'abs', 'round', 'all', 'any', 'isinstance', 'issubclass',
  'open', 'input', 'id', 'dir', 'help', 'repr', 'super', 'next', 'iter',
  'reversed', 'format', 'hash', 'callable', 'hasattr', 'getattr', 'setattr',
  'delattr', 'chr', 'ord', 'hex', 'oct', 'bin', 'pow', 'divmod', 'slice',
  'frozenset', 'bytearray', 'memoryview', 'classmethod', 'staticmethod',
  'property', 'globals', 'locals'
]);

const esc = (str: string): string =>
  (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function computeIndents(lines: string[]): number[] {
  const indents = lines.map((l) => {
    if (!l.trim()) return -1;
    const m = l.match(/^[ \t]+/);
    if (!m) return 0;
    let count = 0;
    for (let c = 0; c < m[0].length; c++) {
      count += m[0][c] === '\t' ? 4 : 1;
    }
    return Math.floor(count / 4);
  });

  for (let idx = 0; idx < indents.length; idx++) {
    if (indents[idx] === -1) {
      let prev = 0;
      for (let p = idx - 1; p >= 0; p--) {
        if (indents[p] !== -1) {
          prev = indents[p] ?? 0;
          break;
        }
      }
      let next = 0;
      for (let n = idx + 1; n < indents.length; n++) {
        if (indents[n] !== -1) {
          next = indents[n] ?? 0;
          break;
        }
      }
      indents[idx] = Math.max(0, Math.min(prev, next));
    }
  }

  return indents;
}

export function highlightPythonLine(
  line: string,
  lineNum: number,
  lineDiags: DiagnosticProblem[] = [],
  indent = 0
): string {
  let result = '';
  let i = 0;
  const len = line.length;

  // Render indent guides for empty lines inside active indented blocks
  if (!line.trim()) {
    for (let v = 0; v < indent; v++) {
      result +=
        '<span class="ide-indent-guide" style="border-left: 1px solid rgba(255, 255, 255, 0.12); display: inline-block; width: 4ch; height: 20px;">    </span>';
    }
    return result;
  }

  // Render indent guide lines for leading whitespace (every 4 spaces or tabs)
  const indentMatch = line.match(/^([ \t]+)/);
  if (indentMatch && indentMatch[1]) {
    const indentStr = indentMatch[1];
    let indentHtml = '';
    for (let s = 0; s < indentStr.length; ) {
      if (indentStr[s] === '\t') {
        indentHtml +=
          '<span class="ide-indent-guide" style="border-left: 1px solid rgba(255, 255, 255, 0.12); display: inline-block; width: 4ch; height: 20px;">\t</span>';
        s++;
      } else if (indentStr.substring(s, s + 4) === '    ') {
        indentHtml +=
          '<span class="ide-indent-guide" style="border-left: 1px solid rgba(255, 255, 255, 0.12); display: inline-block; width: 4ch; height: 20px;">    </span>';
        s += 4;
      } else {
        indentHtml += esc(indentStr[s] || '');
        s++;
      }
    }
    result += indentHtml;
    i = indentStr.length;
  }

  while (i < len) {
    // 1. Comment
    if (line[i] === '#') {
      result += `<span style="color: #6a9955;">${esc(line.substring(i))}</span>`;
      break;
    }

    // 2. Strings & f-strings
    const isFPrefix =
      (line[i] === 'f' || line[i] === 'F' || line[i] === 'r' || line[i] === 'R' || line[i] === 'b' || line[i] === 'B') &&
      (line[i + 1] === '"' || line[i + 1] === "'");
    const isFString = (line[i] === 'f' || line[i] === 'F') && (line[i + 1] === '"' || line[i + 1] === "'");

    if (isFPrefix || line[i] === '"' || line[i] === "'") {
      let prefix = '';
      if (isFPrefix) {
        prefix = line[i] || '';
        i++;
      }
      const quote = line[i] || '"';
      const isTriple = line[i] === quote && line[i + 1] === quote && line[i + 2] === quote;
      const startPos = i;
      if (isTriple) {
        i += 3;
      } else {
        i += 1;
      }

      while (i < len) {
        if (line[i] === '\\') {
          i += 2;
          continue;
        }
        if (isTriple) {
          if (line[i] === quote && line[i + 1] === quote && line[i + 2] === quote) {
            i += 3;
            break;
          }
        } else {
          if (line[i] === quote) {
            i += 1;
            break;
          }
        }
        i++;
      }

      const fullStr = (prefix ? prefix : '') + line.substring(startPos, i);

      if (isFString && fullStr.includes('{')) {
        let fHtml = `<span style="color: #569cd6;">${prefix}</span><span style="color: #ce9178;">${quote}</span>`;
        const inner = fullStr.substring(
          prefix.length + quote.length,
          fullStr.length - (fullStr.endsWith(quote) ? quote.length : 0)
        );
        let segStart = 0;
        let inBrace = false;
        let braceDepth = 0;
        let braceContent = '';

        for (let c = 0; c < inner.length; c++) {
          if (inner[c] === '{' && inner[c + 1] !== '{') {
            if (braceDepth === 0) {
              fHtml += `<span style="color: #ce9178;">${esc(inner.substring(segStart, c))}</span>`;
              fHtml += `<span style="color: #569cd6;">{</span>`;
              braceContent = '';
              inBrace = true;
            }
            braceDepth++;
          } else if (inner[c] === '}' && inBrace) {
            braceDepth--;
            if (braceDepth === 0) {
              fHtml += `<span style="color: #9cdcfe;">${esc(braceContent)}</span>`;
              fHtml += `<span style="color: #569cd6;">}</span>`;
              inBrace = false;
              segStart = c + 1;
            }
          } else {
            if (inBrace) braceContent += inner[c];
          }
        }
        if (segStart < inner.length && !inBrace) {
          fHtml += `<span style="color: #ce9178;">${esc(inner.substring(segStart))}</span>`;
        }
        if (fullStr.endsWith(quote)) {
          fHtml += `<span style="color: #ce9178;">${quote}</span>`;
        }
        result += fHtml;
      } else {
        let strHtml = '';
        if (prefix) {
          strHtml = `<span style="color: #569cd6;">${prefix}</span><span style="color: #ce9178;">${esc(fullStr.substring(prefix.length))}</span>`;
        } else {
          strHtml = `<span style="color: #ce9178;">${esc(fullStr)}</span>`;
        }
        const strDiag = lineDiags.find(
          (d) =>
            d.token === fullStr ||
            d.token === `"${fullStr.slice(1, -1)}"` ||
            d.token === `'${fullStr.slice(1, -1)}'`
        );
        if (strDiag) {
          result += `<span class="ide-squiggly-${strDiag.severity || 'error'}" title="${esc(strDiag.message)}">${strHtml}</span>`;
        } else {
          result += strHtml;
        }
      }
      continue;
    }

    // 3. Numbers
    if (/\d/.test(line[i] || '') && (i === 0 || !/[a-zA-Z0-9_]/.test(line[i - 1] || ''))) {
      let numStr = '';
      while (i < len && /[0-9a-fA-FxXbBoOeE\._]/.test(line[i] || '')) {
        numStr += line[i];
        i++;
      }
      const numHtml = `<span style="color: #b5cea8;">${esc(numStr)}</span>`;
      const numDiag = lineDiags.find((d) => d.token === numStr);
      if (numDiag) {
        result += `<span class="ide-squiggly-${numDiag.severity || 'error'}" title="${esc(numDiag.message)}">${numHtml}</span>`;
      } else {
        result += numHtml;
      }
      continue;
    }

    // 4. Identifiers / Keywords / Functions / Variables
    if (/[a-zA-Z_]/.test(line[i] || '')) {
      let word = '';
      const wordStart = i;
      while (i < len && /[a-zA-Z0-9_]/.test(line[i] || '')) {
        word += line[i];
        i++;
      }

      let isFuncCall = false;
      let k = i;
      while (k < len && (line[k] === ' ' || line[k] === '\t')) k++;
      if (k < len && line[k] === '(') {
        isFuncCall = true;
      }

      const beforeText = line.substring(0, wordStart).trim();
      const isDefName = /\bdef\s+$/.test(line.substring(0, wordStart));
      let tokenHtml = '';

      if (CONTROL_KEYWORDS.has(word)) {
        tokenHtml = `<span style="color: #c586c0; font-weight: 500;">${word}</span>`;
      } else if (OTHER_KEYWORDS.has(word)) {
        tokenHtml = `<span style="color: #569cd6; font-weight: 500;">${word}</span>`;
      } else if (isDefName || isFuncCall || BUILTINS.has(word)) {
        tokenHtml = `<span style="color: #dcdcaa;">${word}</span>`;
      } else if (
        TYPE_NAMES.has(word) ||
        ((/->\s*$/.test(beforeText) || /:\s*$/.test(beforeText)) && /^[A-Z]/.test(word))
      ) {
        tokenHtml = `<span style="color: #4ec9b0;">${word}</span>`;
      } else {
        tokenHtml = `<span style="color: #9cdcfe;">${word}</span>`;
      }

      const diag = lineDiags.find((d) => d.token === word);
      if (diag) {
        result += `<span class="ide-squiggly-${diag.severity || 'error'}" title="${esc(diag.message)}">${tokenHtml}</span>`;
      } else {
        result += tokenHtml;
      }
      continue;
    }

    // 5. Operators & punctuation
    if (line.startsWith('->', i)) {
      result += `<span style="color: #d4d4d4;">-&gt;</span>`;
      i += 2;
      continue;
    }

    result += esc(line[i] || '');
    i++;
  }

  const colonDiag = lineDiags.find((d) => d.token === ':');
  if (colonDiag) {
    result += `<span class="ide-squiggly-error" title="${esc(colonDiag.message)}" style="display: inline-block; width: 6px;">&nbsp;</span>`;
  }

  return result;
}

export function highlightPythonSlice(
  lines: string[],
  startLine: number,
  endLine: number,
  diagMap?: Map<number, DiagnosticProblem[]>,
  indents?: number[]
): string {
  const safeStart = Math.max(0, startLine);
  const safeEnd = Math.min(lines.length, endLine);
  const computedIndents = indents || computeIndents(lines);
  const rendered: string[] = [];

  for (let idx = safeStart; idx < safeEnd; idx++) {
    const line = lines[idx] || '';
    const lineNum = idx + 1;
    const lineDiags = diagMap ? (diagMap.get(lineNum) || []) : [];
    const indent = computedIndents[idx] || 0;
    rendered.push(highlightPythonLine(line, lineNum, lineDiags, indent));
  }

  return rendered.join('\n');
}

export function highlightPythonCode(
  code: string,
  activeIDEFile = 'main.py',
  onDiagnostics?: (diags: DiagnosticProblem[]) => void,
  providedDiagMap?: Map<number, DiagnosticProblem[]>,
  lineRange?: { start: number; end: number }
): string {
  if (!code) return '';
  const lines = code.split('\n');

  let diagMap = providedDiagMap;
  if (!diagMap) {
    const diagnostics = lintPythonCode(code, activeIDEFile);
    if (onDiagnostics) {
      onDiagnostics(diagnostics);
    }
    diagMap = createDiagnosticMap(diagnostics);
  }

  const indents = computeIndents(lines);
  const start = lineRange ? lineRange.start : 0;
  const end = lineRange ? lineRange.end : lines.length;

  return highlightPythonSlice(lines, start, end, diagMap, indents);
}

