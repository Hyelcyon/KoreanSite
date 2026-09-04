import React, { useState } from 'react';
import { useQuizStore } from '../../stores/useQuizStore.js';
import { useAppStore } from '../../stores/useAppStore.js';
import { Storage } from '../../services/storage.js';
import { DataManager, EnrichedQuestion } from '../../services/data_manager.js';

export const WrongNotesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wrong' | 'bookmarks'>('wrong');
  const { startSession } = useQuizStore();
  const { showToast, setRoute } = useAppStore();

  const userStats = Storage.getUserStats();
  const history = userStats.history || {};
  const bookmarkedIds = Storage.getBookmarks();
  const wrongIds = Object.keys(history)
    .map(Number)
    .filter((id) => history[id] && history[id].incorrect > 0);

  const allQuestions = DataManager.getAllQuestions();

  const wrongQuestions: EnrichedQuestion[] = allQuestions.filter((q) =>
    wrongIds.includes(q.id)
  );

  const bookmarkedQuestions: EnrichedQuestion[] = allQuestions.filter((q) =>
    bookmarkedIds.includes(q.id)
  );

  const displayedQuestions =
    activeTab === 'wrong' ? wrongQuestions : bookmarkedQuestions;

  const handleStartReview = () => {
    if (displayedQuestions.length === 0) {
      showToast('복습할 문항이 없습니다.', 'error');
      return;
    }
    startSession('wrongReview', displayedQuestions);
  };

  const handleSolveSingle = (q: EnrichedQuestion) => {
    startSession('single', [q]);
  };

  const handleRemoveWrong = (qId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    Storage.removeWrongAnswer(qId);
    showToast('오답 목록에서 제거되었습니다.', 'success');
  };

  const handleToggleBookmark = (qId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    Storage.toggleBookmark(qId);
    showToast('북마크가 변경되었습니다.', 'info');
  };

  return (
    <div className="app-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="badge badge-category">오답 & 북마크 클리닉</span>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.85rem',
            fontWeight: 800,
            marginTop: '0.35rem',
            letterSpacing: '-0.03em',
          }}
        >
          취약 영역 정밀 복습 클리닉
        </h2>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            marginTop: '0.25rem',
          }}
        >
          오답이 발생한 문항과 별도 저장한 북마크 문항을 모아 완벽히 마스터할 때까지 반복 훈련합니다.
        </p>
      </div>

      {/* Tabs and Actions */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className={`btn ${activeTab === 'wrong' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('wrong')}
            style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
          >
            오답 노트 ({wrongQuestions.length})
          </button>
          <button
            className={`btn ${activeTab === 'bookmarks' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('bookmarks')}
            style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
          >
            북마크 보관함 ({bookmarkedQuestions.length})
          </button>
        </div>

        {displayedQuestions.length > 0 && (
          <button
            className="btn btn-primary"
            onClick={handleStartReview}
            style={{ fontSize: '0.85rem', padding: '0.45rem 1.15rem' }}
          >
            이 목록 전체 복습 풀기 ({displayedQuestions.length}문항)
          </button>
        )}
      </div>

      {/* Questions List */}
      {displayedQuestions.length === 0 ? (
        <div
          style={{
            padding: '3rem 1.5rem',
            textAlign: 'center',
            background: 'var(--surface-1)',
            borderRadius: '12px',
            border: '1px dashed var(--border-medium)',
          }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            {activeTab === 'wrong'
              ? '현재 등록된 오답 문항이 없습니다. 모의고사를 풀어보세요!'
              : '현재 북마크한 문항이 없습니다.'}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setRoute('catalog')}
            style={{ marginTop: '1rem' }}
          >
            문제 은행으로 이동
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {displayedQuestions.map((q) => {
            const isBookmarked = Storage.isBookmarked(q.id);
            const incorrectTimes = history[q.id]?.incorrect || 1;

            return (
              <div
                key={q.id}
                style={{
                  background: 'var(--surface-1)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  boxShadow: 'var(--shadow-elevation-1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-category">{q.category}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 700,
                      }}
                    >
                      #{q.id}
                    </span>
                    {activeTab === 'wrong' && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#ef4444',
                          background: 'rgba(239, 68, 68, 0.1)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          fontWeight: 600,
                        }}
                      >
                        오답 {incorrectTimes}회
                      </span>
                    )}
                  </div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.5,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {q.question}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    정답: {q.answer + 1}번 ({q.options[q.answer]})
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                  <button
                    className="btn btn-outline"
                    onClick={() => handleSolveSingle(q)}
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  >
                    풀기
                  </button>
                  {activeTab === 'wrong' ? (
                    <button
                      className="btn btn-outline"
                      onClick={(e) => handleRemoveWrong(q.id, e)}
                      style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem', color: '#ef4444' }}
                    >
                      삭제
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline"
                      onClick={(e) => handleToggleBookmark(q.id, e)}
                      style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                    >
                      {isBookmarked ? '해제' : '북마크'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
