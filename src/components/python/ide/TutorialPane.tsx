import React, { useEffect, useRef } from 'react';
import { useIDEStore } from '../../../stores/useIDEStore.js';
import { useAppStore } from '../../../stores/useAppStore.js';
import { PYTHON_TUTORIAL_DATA } from '../../../data/python_curriculum.js';
import { Chapter, Concept } from '../../../types/python.js';
import {
  BookOpen,
  CheckCircle2,
  Lock,
  Sparkles,
  ArrowRight,
  Code2,
  Copy,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';

export const TutorialPane: React.FC = () => {
  const {
    currentTutorialStep,
    chapterScrolled,
    chapterExecuted,
    completedChapters,
    setTutorialStep,
    setChapterScrolled,
    saveFileContent,
    activeFile,
  } = useIDEStore();

  const { showToast } = useAppStore();
  const scrollSentinelRef = useRef<HTMLDivElement>(null);

  const chapters: Chapter[] = PYTHON_TUTORIAL_DATA.chapters || [];
  const currentChapter = chapters[currentTutorialStep - 1] || chapters[0];
  const total = chapters.length;

  // Track scroll completion via IntersectionObserver
  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setChapterScrolled(currentTutorialStep);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [currentTutorialStep]);

  const isScrolled = !!chapterScrolled[currentTutorialStep];
  const isExecuted = !!chapterExecuted[currentTutorialStep];
  const isCompleted = isScrolled && isExecuted;

  const handleInsertCode = () => {
    if (activeFile && currentChapter) {
      const codeToInsert = currentChapter.starterCode || currentChapter.code || '';
      saveFileContent(activeFile, codeToInsert);
      showToast(`'${activeFile}'에 챕터 예제 코드가 삽입되었습니다.`, 'success');
    }
  };

  const handleCopySolution = () => {
    if (currentChapter?.solutionCode && navigator.clipboard) {
      navigator.clipboard.writeText(currentChapter.solutionCode);
      showToast('솔루션 코드가 클립보드에 복사되었습니다.', 'success');
    }
  };

  const handleNextChapter = () => {
    if (!isCompleted) {
      showToast('코드 실행과 본문 읽기를 모두 완료해야 다음 챕터로 진행할 수 있습니다.', 'warning');
      return;
    }
    if (currentTutorialStep < total) {
      setTutorialStep(currentTutorialStep + 1);
    }
  };

  return (
    <div className="ide-secondary-sidebar-panel">
      {/* Tutorial Header */}
      <div className="ide-tutorial-header">
        <div className="tutorial-header-top">
          <span className="tutorial-badge">Python 3.14 Track</span>
          <select
            className="tutorial-step-select"
            value={currentTutorialStep}
            onChange={(e) => setTutorialStep(parseInt(e.target.value, 10))}
          >
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {completedChapters[ch.id] ? '[완료] ' : ''}Ch.{ch.id} {ch.title}
              </option>
            ))}
          </select>
        </div>

        {/* Progress Bar */}
        <div className="tutorial-progress-bar">
          <div
            className="tutorial-progress-fill"
            style={{ width: `${(currentTutorialStep / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Tutorial Body Content */}
      <div className="ide-tutorial-body">
        <h3 className="tutorial-chapter-title">
          Ch.{currentChapter.id}. {currentChapter.title}
        </h3>
        <p className="tutorial-chapter-summary">{currentChapter.summary}</p>

        {/* Concepts Section */}
        <div className="tutorial-concepts-block">
          <h4 className="block-title">
            <Lightbulb size={16} color="#f59e0b" />
            <span>핵심 개념 및 문법 원리</span>
          </h4>
          <div className="concepts-list">
            {currentChapter.concepts.map((c: Concept, idx: number) => (
              <div key={idx} className="concept-card">
                <div className="concept-title">{c.title}</div>
                <div className="concept-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Syntax Example */}
        {currentChapter.syntaxExample && (
          <div className="tutorial-syntax-block">
            <h4 className="block-title">
              <Code2 size={16} color="#3b82f6" />
              <span>문법 참조 예제</span>
            </h4>
            <pre className="syntax-code-pre">{currentChapter.syntaxExample}</pre>
          </div>
        )}

        {/* Practice Task */}
        <div className="tutorial-task-block">
          <div className="task-header-row">
            <h4 className="block-title">
              <Sparkles size={16} color="#10b981" />
              <span>실습 과제</span>
            </h4>
          </div>
          {currentChapter.taskDescription && (
            <div className="task-description-card">{currentChapter.taskDescription}</div>
          )}
        </div>

        {/* Expected Output */}
        {currentChapter.output && (
          <div className="tutorial-output-block">
            <h4 className="block-title">
              <span>실습 목표 실행 결과</span>
            </h4>
            <pre className="output-preview-pre">{currentChapter.output}</pre>
          </div>
        )}

        {/* Hint */}
        {currentChapter.hint && (
          <div className="tutorial-hint-block">
            <Lightbulb size={16} color="#f59e0b" />
            <span><strong>힌트:</strong> {currentChapter.hint}</span>
          </div>
        )}

        {/* Key Takeaways */}
        {currentChapter.takeaways && (
          <div className="tutorial-takeaways-block">
            <h4 className="block-title">
              <Sparkles size={16} color="#10b981" />
              <span>핵심 요약 노트</span>
            </h4>
            <ul className="takeaways-list">
              {currentChapter.takeaways.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Scroll Sentinel for completion tracking */}
        <div ref={scrollSentinelRef} style={{ height: 10 }} />
      </div>

      {/* Completion Gate Footer */}
      <div className="ide-tutorial-footer">
        <div className="completion-gates-row">
          <span className={`gate-pill ${isScrolled ? 'passed' : ''}`}>
            {isScrolled ? <CheckCircle2 size={13} /> : <Lock size={13} />}
            <span>본문 정독</span>
          </span>
          <span className={`gate-pill ${isExecuted ? 'passed' : ''}`}>
            {isExecuted ? <CheckCircle2 size={13} /> : <Lock size={13} />}
            <span>코드 실행</span>
          </span>
        </div>

        <button
          className="btn-next-chapter"
          onClick={handleNextChapter}
          disabled={!isCompleted || currentTutorialStep >= total}
        >
          <span>{currentTutorialStep >= total ? '전체 마스터 완료' : '다음 챕터로 이동'}</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
