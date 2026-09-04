import React, { useState } from 'react';
import { useIDEStore } from '../../../stores/useIDEStore.js';
import { Play, Columns, X } from 'lucide-react';

export const EditorTabs: React.FC = () => {
  const {
    openTabs,
    activeFile,
    dirtyFiles,
    openFile,
    closeTab,
    reorderTabs,
    runCurrentCode,
    toggleTerminalSplit,
    isTerminalSplit,
  } = useIDEStore();

  const [draggedTab, setDraggedTab] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<{ tab: string; position: 'before' | 'after' } | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, tab: string) => {
    setDraggedTab(tab);
    e.dataTransfer.setData('text/plain', tab);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, tab: string) => {
    e.preventDefault();
    if (!draggedTab || draggedTab === tab) return;
    e.dataTransfer.dropEffect = 'move';

    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    const position = e.clientX < midX ? 'before' : 'after';
    setDropTarget({ tab, position });
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDropTarget(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetTab: string) => {
    e.preventDefault();
    if (!draggedTab || draggedTab === targetTab) {
      setDraggedTab(null);
      setDropTarget(null);
      return;
    }

    const fromIndex = openTabs.indexOf(draggedTab);
    const toIndex = openTabs.indexOf(targetTab);

    if (fromIndex !== -1 && toIndex !== -1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      const isAfter = e.clientX >= midX;
      let finalIndex = toIndex;
      if (fromIndex < toIndex && !isAfter) finalIndex = toIndex - 1;
      if (fromIndex > toIndex && isAfter) finalIndex = toIndex + 1;
      reorderTabs(fromIndex, Math.max(0, Math.min(openTabs.length - 1, finalIndex)));
    }

    setDraggedTab(null);
    setDropTarget(null);
  };

  const handleDragEnd = () => {
    setDraggedTab(null);
    setDropTarget(null);
  };

  return (
    <div className="ide-editor-tab-bar">
      <div className="ide-editor-tabs-scroll">
        {openTabs.map((tab) => {
          const isActive = tab === activeFile;
          const isDirty = !!dirtyFiles[tab];
          const isDragging = draggedTab === tab;
          const isTarget = dropTarget?.tab === tab;
          const fileName = tab.split('/').pop() || tab;

          const indicatorStyle: React.CSSProperties = isTarget
            ? dropTarget.position === 'before'
              ? { borderLeft: '2px solid #0078d4', paddingLeft: '6px' }
              : { borderRight: '2px solid #0078d4', paddingRight: '6px' }
            : {};

          return (
            <div
              key={tab}
              className={`ide-editor-tab ${isActive ? 'active' : ''} ${isDragging ? 'dragging' : ''}`}
              draggable
              onDragStart={(e) => handleDragStart(e, tab)}
              onDragOver={(e) => handleDragOver(e, tab)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, tab)}
              onDragEnd={handleDragEnd}
              onClick={() => openFile(tab)}
              title={tab}
              style={{
                opacity: isDragging ? 0.4 : 1,
                cursor: 'grab',
                ...indicatorStyle,
              }}
            >
              <span className="ide-tab-icon python">&alpha;</span>
              <span className="ide-tab-name">{fileName}</span>
              {isDirty ? (
                <span className="ide-tab-dirty-dot" title="저장되지 않은 변경사항"></span>
              ) : (
                <button
                  className="ide-tab-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab);
                  }}
                  aria-label={`${fileName} 탭 닫기`}
                >
                  <X size={13} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Editor Top Right Action Toolbar */}
      <div className="ide-editor-actions">
        <button
          className="btn-ide-run"
          onClick={runCurrentCode}
          title="Python 코드 실행 (Ctrl+Enter / F5)"
        >
          <Play size={14} fill="currentColor" />
          <span>실행</span>
        </button>

        <button
          className={`btn-ide-tool-icon ${isTerminalSplit ? 'active' : ''}`}
          onClick={toggleTerminalSplit}
          title="터미널 분할 (Split Terminal)"
        >
          <Columns size={15} />
        </button>
      </div>
    </div>
  );
};
