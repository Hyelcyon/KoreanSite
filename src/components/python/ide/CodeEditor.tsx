import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useIDEStore } from '../../../stores/useIDEStore.js';
import { highlightPythonSlice } from '../../../services/python_highlighter.js';
import { lintPythonCode, createDiagnosticMap, DiagnosticProblem } from '../../../services/python_linter.js';
import {
  SymbolItem,
  getIntelliSenseDatabase,
  extractUserSymbols,
  getCaretCoordinates,
} from '../../../services/intellisense.js';

const LINE_HEIGHT = 20;
const PADDING_TOP = 12;
const OVERSCAN = 20;

export const CodeEditor: React.FC = () => {
  const { activeFile, files, saveFileContent, setFileDirty, runCurrentCode } = useIDEStore();

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLPreElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef<number | null>(null);

  const [currentCode, setCurrentCode] = useState('');
  const [problems, setProblems] = useState<DiagnosticProblem[]>([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(400);

  const [acMatches, setAcMatches] = useState<SymbolItem[]>([]);
  const [acSelectedIndex, setAcSelectedIndex] = useState(0);
  const [acPosition, setAcPosition] = useState<{ left: number; top: number } | null>(null);
  const [, setAcToken] = useState('');

  // Sync editor content when active file changes
  useEffect(() => {
    if (activeFile && files[activeFile] !== undefined) {
      const code = files[activeFile];
      setCurrentCode(code);
      if (textareaRef.current) {
        textareaRef.current.value = code;
      }
    }
  }, [activeFile]);

  // Debounced static analysis linter
  useEffect(() => {
    if (!activeFile) {
      setProblems([]);
      return;
    }
    const timer = setTimeout(() => {
      const diags = lintPythonCode(currentCode, activeFile);
      setProblems(diags);
    }, 180);
    return () => clearTimeout(timer);
  }, [currentCode, activeFile]);

  // Synchronize scroll with RAF throttling
  const handleScroll = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    if (scrollRafRef.current) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      setScrollTop(textarea.scrollTop);
      setScrollLeft(textarea.scrollLeft);
      setViewportHeight(textarea.clientHeight || 400);
    });
  }, []);

  const lines = useMemo(() => currentCode.split('\n'), [currentCode]);
  const lineCount = Math.max(1, lines.length);
  const diagMap = useMemo(() => createDiagnosticMap(problems), [problems]);

  // Viewport virtual slice calculations
  const visibleStart = Math.max(0, Math.floor((scrollTop - PADDING_TOP) / LINE_HEIGHT));
  const visibleCount = Math.ceil(viewportHeight / LINE_HEIGHT);
  const startLine = Math.max(0, visibleStart - OVERSCAN);
  const endLine = Math.min(lineCount, visibleStart + visibleCount + OVERSCAN);

  const sliceHtml = useMemo(() => {
    return highlightPythonSlice(lines, startLine, endLine, diagMap);
  }, [lines, startLine, endLine, diagMap]);

  const offsetY = startLine * LINE_HEIGHT + PADDING_TOP - scrollTop;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    setCurrentCode(code);
    if (activeFile) {
      saveFileContent(activeFile, code);
      setFileDirty(activeFile, true);
    }
    triggerAutocomplete(e.target);
  };

  const triggerAutocomplete = (textarea: HTMLTextAreaElement) => {
    const pos = textarea.selectionStart;
    const textBefore = textarea.value.slice(0, pos);
    const lineBefore = textBefore.split('\n').pop() || '';
    const match = lineBefore.match(/([a-zA-Z0-9_.]+)$/);

    if (!match) {
      setAcMatches([]);
      setAcPosition(null);
      return;
    }

    const token = match[1];
    setAcToken(token);
    const db = getIntelliSenseDatabase();
    const userSymbols = extractUserSymbols(textarea.value);
    const all = [...db, ...userSymbols];

    let filtered: SymbolItem[] = [];
    if (token.includes('.')) {
      const parts = token.split('.');
      const subToken = parts.pop() || '';
      filtered = db.filter((s) => s.name.toLowerCase().startsWith(subToken.toLowerCase()));
    } else {
      filtered = all.filter((s) => s.name.toLowerCase().startsWith(token.toLowerCase()));
    }

    if (filtered.length > 0) {
      const coords = getCaretCoordinates(textarea, pos);
      setAcMatches(filtered.slice(0, 10));
      setAcSelectedIndex(0);
      setAcPosition({ left: coords.left + 50, top: coords.top + 24 });
    } else {
      setAcMatches([]);
      setAcPosition(null);
    }
  };

  const acceptAutocomplete = (item: SymbolItem) => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    const pos = textarea.selectionStart;
    const textBefore = textarea.value.slice(0, pos);
    const textAfter = textarea.value.slice(pos);

    const match = textBefore.match(/([a-zA-Z0-9_.]+)$/);
    if (match) {
      const tokenLen = match[1].includes('.')
        ? (match[1].split('.').pop() || '').length
        : match[1].length;
      const newBefore = textBefore.slice(0, pos - tokenLen) + item.name;
      const newCode = newBefore + textAfter;
      textarea.value = newCode;
      setCurrentCode(newCode);
      if (activeFile) saveFileContent(activeFile, newCode);

      const newPos = newBefore.length;
      textarea.setSelectionRange(newPos, newPos);
    }

    setAcMatches([]);
    setAcPosition(null);
    textarea.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Autocomplete popup navigation
    if (acMatches.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setAcSelectedIndex((prev) => (prev + 1) % acMatches.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setAcSelectedIndex((prev) => (prev - 1 + acMatches.length) % acMatches.length);
        return;
      }
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        if (acMatches[acSelectedIndex]) {
          acceptAutocomplete(acMatches[acSelectedIndex]);
        }
        return;
      }
      if (e.key === 'Escape') {
        setAcMatches([]);
        setAcPosition(null);
        return;
      }
    }

    // Ctrl+Enter: Run Code
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runCurrentCode();
      return;
    }

    // Tab key indent
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const code = textarea.value;
      const nextCode = code.substring(0, start) + '    ' + code.substring(end);
      textarea.value = nextCode;
      setCurrentCode(nextCode);
      if (activeFile) saveFileContent(activeFile, nextCode);
      textarea.selectionStart = textarea.selectionEnd = start + 4;
    }
  };

  const virtualizedLineNumbers = [];
  for (let lineNum = startLine + 1; lineNum <= endLine; lineNum++) {
    const lineProblems = diagMap.get(lineNum);
    const lineProblem = lineProblems && lineProblems[0];
    virtualizedLineNumbers.push(
      <div key={lineNum} className="ide-gutter-line">
        {lineProblem && (
          <span
            className={`ide-gutter-marker ${lineProblem.severity}`}
            title={lineProblem.message}
          />
        )}
        <span className="ide-line-number">{lineNum}</span>
      </div>
    );
  }

  return (
    <div className="ide-editor-container" id="ide-editor-container">
      {/* Line Numbers Gutter */}
      <div
        className="ide-editor-gutter"
        ref={gutterRef}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ transform: `translateY(${offsetY}px)`, willChange: 'transform' }}>
          {virtualizedLineNumbers}
        </div>
      </div>

      {/* Code Textarea & Syntax Overlay */}
      <div className="ide-code-area-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        <pre
          className="ide-syntax-overlay"
          ref={highlightRef}
          style={{
            margin: 0,
            padding: '0 10px',
            position: 'absolute',
            top: 0,
            left: 0,
            minWidth: '100%',
            transform: `translate(${-scrollLeft}px, ${offsetY}px)`,
            willChange: 'transform',
          }}
          dangerouslySetInnerHTML={{ __html: sliceHtml }}
        />

        <textarea
          ref={textareaRef}
          className="ide-code-textarea"
          id="ide-code-input"
          value={currentCode}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />

        {/* Autocomplete Popup */}
        {acPosition && acMatches.length > 0 && (
          <div
            className="ide-autocomplete-popup show"
            style={{ left: acPosition.left, top: acPosition.top }}
          >
            <div className="ide-ac-list">
              {acMatches.map((item, idx) => (
                <div
                  key={item.name}
                  className={`ide-ac-item ${idx === acSelectedIndex ? 'selected' : ''}`}
                  onClick={() => acceptAutocomplete(item)}
                >
                  <span className="ide-ac-kind-tag">{item.type}</span>
                  <span className="ide-ac-label">{item.name}</span>
                </div>
              ))}
            </div>
            {acMatches[acSelectedIndex] && (
              <div className="ide-ac-doc-preview">
                <div className="doc-sig">{acMatches[acSelectedIndex].sig}</div>
                <div className="doc-desc">{acMatches[acSelectedIndex].desc}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

