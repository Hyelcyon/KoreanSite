import React from 'react';
import { useAppStore } from '../../stores/useAppStore.js';
import { useQuizStore } from '../../stores/useQuizStore.js';

export const Header: React.FC = () => {
  const {
    activeNavTab,
    headerCollapsed,
    setRoute,
    setActiveNavTab,
    toggleHeaderCollapsed,
    setMobileDrawerOpen,
  } = useAppStore();

  const { startSession } = useQuizStore();

  const handleNavClick = (tab: 'exam' | 'social' | 'english' | 'info') => {
    setActiveNavTab(tab);
    if (tab === 'exam') setRoute('dashboard');
    else if (tab === 'social') setRoute('social-home');
    else if (tab === 'english') setRoute('english-home');
    else if (tab === 'info') setRoute('info-home');
  };

  const handleQuickStart = () => {
    startSession('mockExam');
  };

  return (
    <header className={`site-header ${headerCollapsed ? 'header-collapsed' : ''}`}>
      <div className="header-inner">
        {/* Left: Brand */}
        <a
          className="brand-block"
          href="#dashboard"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('exam');
          }}
        >
          <div className="brand-icon-sq">&alpha;</div>
          <div className="brand-title">ALPHAGH</div>
        </a>

        {/* Center: Navigation Tabs */}
        <nav className="nav-tabs" role="tablist" aria-label="메인 메뉴">
          {/* 1. 국어 Dropdown */}
          <div className="nav-item-dropdown-wrap">
            <button
              className={`nav-tab-btn ${activeNavTab === 'exam' ? 'active' : ''}`}
              onClick={() => handleNavClick('exam')}
              data-tab="exam"
              role="tab"
            >
              국어
            </button>

            {/* Programmers Sliding White Mega Dropdown Menu */}
            <div className="mega-dropdown-panel" id="dropdown-test-panel">
              <div className="mega-dropdown-inner">
                <div className="mega-col">
                  <a
                    href="#dashboard"
                    className="mega-col-title-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('exam');
                    }}
                  >
                    국어 홈
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 사회 */}
          <button
            className={`nav-tab-btn ${activeNavTab === 'social' ? 'active' : ''}`}
            onClick={() => handleNavClick('social')}
            data-tab="social"
            role="tab"
          >
            사회
          </button>

          {/* 3. 영어 */}
          <button
            className={`nav-tab-btn ${activeNavTab === 'english' ? 'active' : ''}`}
            onClick={() => handleNavClick('english')}
            data-tab="english"
            role="tab"
          >
            영어
          </button>

          {/* 4. 정보 Dropdown */}
          <div className="nav-item-dropdown-wrap">
            <button
              className={`nav-tab-btn ${activeNavTab === 'info' ? 'active' : ''}`}
              onClick={() => handleNavClick('info')}
              data-tab="info"
              role="tab"
            >
              정보
            </button>

            {/* Programmers Sliding White Mega Dropdown Menu (정보) */}
            <div className="mega-dropdown-panel" id="dropdown-info-panel">
              <div className="mega-dropdown-inner">
                <div className="mega-col">
                  <a
                    href="#info-home"
                    className="mega-col-title-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('info');
                    }}
                  >
                    정보 홈
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <button
            className="header-link-btn"
            id="btn-header-wrong"
            onClick={() => setRoute('wrong')}
          >
            오답노트
          </button>
          <button
            className="btn-login-outline"
            id="btn-quick-start"
            onClick={handleQuickStart}
          >
            시험 시작
          </button>

          {/* Mobile 3-Line Hamburger Button */}
          <button
            className="btn-mobile-hamburger"
            id="btn-mobile-menu"
            aria-label="메뉴 열기"
            onClick={() => setMobileDrawerOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Minimal Header Collapse/Expand Handle Tab */}
      <button
        className="header-collapse-handle"
        id="btn-header-collapse-handle"
        aria-label="상단 배너 접기/펼치기"
        title="상단 배너 접기/펼치기"
        onClick={toggleHeaderCollapsed}
      >
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="icon-collapse-chevron"
          style={{
            transform: headerCollapsed ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s ease',
          }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </header>
  );
};
