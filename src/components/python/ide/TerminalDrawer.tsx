import React, { useState, useRef, useEffect } from 'react';
import { useIDEStore } from '../../../stores/useIDEStore.js';
import { PyodideRunner } from '../../../services/pyodide_runner.js';
import {
  Terminal,
  AlertTriangle,
  FileText,
  Plus,
  Trash2,
  Maximize2,
  Minimize2,
  X,
  Play,
  Columns,
  Sparkles,
} from 'lucide-react';

export const TerminalDrawer: React.FC = () => {
  const {
    activeDrawerTab,
    isTerminalDrawerClosed,
    isTerminalMaximized,
    isTerminalSplit,
    terminalSessions,
    activeTerminalId,
    terminalOutputs,
    ideProblems,
    setActiveDrawerTab,
    toggleTerminalDrawer,
    toggleTerminalMaximized,
    toggleTerminalSplit,
    addTerminalSession,
    switchTerminalSession,
    deleteTerminalSession,
    clearTerminalOutput,
    appendTerminalOutput,
    openFile,
  } = useIDEStore();

  const [cliInput, setCliInput] = useState('');
  const [splitCliInput, setSplitCliInput] = useState('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutputs, activeTerminalId]);

  if (isTerminalDrawerClosed) return null;

  const currentOutput = terminalOutputs[activeTerminalId] || '';
  const splitOutput = terminalOutputs[`${activeTerminalId}_split`] || '';

  const handleCommandSubmit = async (
    cmd: string,
    sessionKey: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    appendTerminalOutput(sessionKey, `\n\x1b[38;2;86;156;214m>>> ${trimmed}\x1b[0m\n`);
    setInput('');

    try {
      const runner = PyodideRunner;
      const res = await runner.runCode(trimmed);
      if (res.stdout) appendTerminalOutput(sessionKey, res.stdout);
      if (res.stderr) appendTerminalOutput(sessionKey, `\x1b[38;2;241;76;76m${res.stderr}\x1b[0m\n`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      appendTerminalOutput(sessionKey, `\x1b[38;2;241;76;76mTraceback: ${msg}\x1b[0m\n`);
    }
  };

  return (
    <div
      className={`ide-terminal-drawer-panel ${isTerminalMaximized ? 'maximized' : ''}`}
      id="ide-bottom-drawer"
    >
      {/* Drawer Tab Header Bar */}
      <div className="ide-drawer-header-bar">
        <div className="ide-drawer-tabs">
          <button
            className={`ide-term-tab ${activeDrawerTab === 'problems' ? 'active' : ''}`}
            onClick={() => setActiveDrawerTab('problems')}
          >
            <AlertTriangle size={14} />
            <span>문제 ({ideProblems.length})</span>
          </button>

          <button
            className={`ide-term-tab ${activeDrawerTab === 'output' ? 'active' : ''}`}
            onClick={() => setActiveDrawerTab('output')}
          >
            <FileText size={14} />
            <span>출력</span>
          </button>

          <button
            className={`ide-term-tab ${activeDrawerTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveDrawerTab('terminal')}
          >
            <Terminal size={14} />
            <span>터미널 (Pyodide REPL)</span>
          </button>
        </div>

        {/* Multi-Session & Window Action Toolbar */}
        <div className="ide-drawer-actions">
          {activeDrawerTab === 'terminal' && (
            <div className="ide-session-chips">
              {terminalSessions.map((s) => (
                <div
                  key={s}
                  className={`ide-session-chip ${s === activeTerminalId ? 'active' : ''}`}
                  onClick={() => switchTerminalSession(s)}
                >
                  <span>{s}</span>
                  {terminalSessions.length > 1 && (
                    <button
                      className="btn-chip-del"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTerminalSession(s);
                      }}
                      title="세션 종료"
                    >
                      <X size={11} />
                    </button>
                  )}
                </div>
              ))}

              <button
                className="btn-add-session"
                onClick={addTerminalSession}
                title="새 터미널 추가"
              >
                <Plus size={13} />
              </button>
            </div>
          )}

          <button
            className="ide-drawer-tool-btn"
            onClick={() => clearTerminalOutput()}
            title="터미널 지우기"
          >
            <Trash2 size={14} />
          </button>

          <button
            className="ide-drawer-tool-btn"
            onClick={toggleTerminalMaximized}
            title={isTerminalMaximized ? '터미널 복원' : '터미널 최대화'}
          >
            {isTerminalMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>

          <button
            className="ide-drawer-tool-btn"
            onClick={toggleTerminalDrawer}
            title="패널 닫기"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Drawer Body */}
      <div className="ide-drawer-body">
        {/* Tab 1: Diagnostics Problems */}
        {activeDrawerTab === 'problems' && (
          <div className="ide-problems-list">
            {ideProblems.length === 0 ? (
              <div className="ide-problems-empty">
                <span style={{ color: '#10b981' }}>구문 오류가 없습니다. (Zero Problems)</span>
              </div>
            ) : (
              ideProblems.map((p, idx) => (
                <div
                  key={idx}
                  className="ide-problem-item"
                  onClick={() => openFile(p.file)}
                  style={{ cursor: 'pointer' }}
                >
                  <AlertTriangle
                    size={14}
                    color={p.severity === 'error' ? '#f14c4c' : '#cca700'}
                  />
                  <span className="problem-msg">{p.message}</span>
                  <span className="problem-loc">
                    [{p.file} {p.line}:{p.col}]
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Output */}
        {activeDrawerTab === 'output' && (
          <div className="ide-output-view">
            <pre className="output-console-text">
              {currentOutput || '출력 로그가 없습니다.'}
            </pre>
          </div>
        )}

        {/* Tab 3: Interactive Terminal REPL */}
        {activeDrawerTab === 'terminal' && (
          <div className={`ide-terminal-splits-container ${isTerminalSplit ? 'split' : ''}`}>
            {/* Primary Terminal */}
            <div className="ide-term-pane">
              <div className="ide-term-stdout">
                <pre className="ansi-output-block">{currentOutput}</pre>
                <div ref={terminalBottomRef} />
              </div>

              <form
                className="ide-term-prompt-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommandSubmit(cliInput, activeTerminalId, setCliInput);
                }}
              >
                <span className="prompt-symbol">&gt;&gt;&gt;</span>
                <input
                  type="text"
                  className="ide-term-input"
                  placeholder="파이썬 코드 또는 명령어를 입력하세요 (예: print(1 + 2))"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                />
              </form>
            </div>

            {/* Split Secondary Terminal */}
            {isTerminalSplit && (
              <div className="ide-term-pane split">
                <div className="ide-term-stdout">
                  <pre className="ansi-output-block">{splitOutput}</pre>
                </div>

                <form
                  className="ide-term-prompt-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommandSubmit(
                      splitCliInput,
                      `${activeTerminalId}_split`,
                      setSplitCliInput
                    );
                  }}
                >
                  <span className="prompt-symbol">&gt;&gt;&gt;</span>
                  <input
                    type="text"
                    className="ide-term-input"
                    placeholder="분할 터미널 명령 입력..."
                    value={splitCliInput}
                    onChange={(e) => setSplitCliInput(e.target.value)}
                  />
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
