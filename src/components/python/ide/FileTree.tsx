import React, { useState } from 'react';
import { useIDEStore } from '../../../stores/useIDEStore.js';
import {
  FilePlus,
  FolderPlus,
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FileCode,
  Trash2,
  Sparkles,
} from 'lucide-react';

export const FileTree: React.FC = () => {
  const {
    files,
    folders,
    activeFile,
    isLearnFolderCollapsed,
    collapsedFolders,
    openFile,
    createFile,
    deleteFile,
    createFolder,
    deleteFolder,
    toggleLearnFolder,
    toggleFolderCollapse,
  } = useIDEStore();

  const [newFileInputOpen, setNewFileInputOpen] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFolderInputOpen, setNewFolderInputOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFileName.trim()) {
      let name = newFileName.trim();
      if (!name.endsWith('.py')) name += '.py';
      createFile(name, '# Python Script\n');
      setNewFileName('');
      setNewFileInputOpen(false);
    }
  };

  const handleCreateFolder = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFolderName.trim()) {
      createFolder(newFolderName.trim());
      setNewFolderName('');
      setNewFolderInputOpen(false);
    }
  };

  const fileList = Object.keys(files).sort();

  return (
    <div className="ide-explorer-panel">
      {/* Explorer Header */}
      <div className="ide-explorer-header">
        <span className="ide-explorer-title">탐색기</span>
        <div className="ide-explorer-actions">
          <button
            className="ide-icon-btn"
            onClick={() => setNewFileInputOpen(true)}
            title="새 파일 생성"
          >
            <FilePlus size={14} />
          </button>
          <button
            className="ide-icon-btn"
            onClick={() => setNewFolderInputOpen(true)}
            title="새 폴더 생성"
          >
            <FolderPlus size={14} />
          </button>
        </div>
      </div>

      {/* New File Inline Input */}
      {newFileInputOpen && (
        <form onSubmit={handleCreateFile} className="ide-inline-input-row">
          <FileCode size={14} color="#3b82f6" />
          <input
            type="text"
            className="ide-inline-input"
            placeholder="파일명.py"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            autoFocus
            onBlur={() => setNewFileInputOpen(false)}
          />
        </form>
      )}

      {/* New Folder Inline Input */}
      {newFolderInputOpen && (
        <form onSubmit={handleCreateFolder} className="ide-inline-input-row">
          <Folder size={14} color="#f59e0b" />
          <input
            type="text"
            className="ide-inline-input"
            placeholder="폴더명"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            autoFocus
            onBlur={() => setNewFolderInputOpen(false)}
          />
        </form>
      )}

      {/* Tree Content */}
      <div className="ide-tree-content">
        {/* Main Workspace Folder */}
        <div className="ide-tree-folder-row" onClick={toggleLearnFolder}>
          {isLearnFolderCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
          <span className="ide-folder-label">WORKSPACE</span>
        </div>

        {!isLearnFolderCollapsed && (
          <div className="ide-tree-files-list">
            {fileList.map((filePath) => {
              const isActive = filePath === activeFile;
              const fileName = filePath.split('/').pop() || filePath;

              return (
                <div
                  key={filePath}
                  className={`ide-tree-file-row ${isActive ? 'active' : ''}`}
                  onClick={() => openFile(filePath)}
                >
                  <FileCode size={14} color="#569cd6" className="file-icon" />
                  <span className="file-name">{fileName}</span>
                  {filePath !== 'main.py' && (
                    <button
                      className="btn-file-del"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`'${filePath}' 파일을 삭제하시겠습니까?`)) {
                          deleteFile(filePath);
                        }
                      }}
                      title="파일 삭제"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
