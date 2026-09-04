import React from 'react';
import { useAppStore } from '../../stores/useAppStore.js';
import { X } from 'lucide-react';

export const MobileDrawer: React.FC = () => {
  const {
    mobileDrawerOpen,
    mobileActiveTab,
    setMobileDrawerOpen,
    setMobileActiveTab,
    setRoute,
  } = useAppStore();

  if (!mobileDrawerOpen) return null;

  return (
    <div className="mobile-drawer-overlay active" id="mobile-drawer">
      <div className="mobile-drawer-header">
        <div
          className="brand-block"
          onClick={() => {
            setRoute('dashboard');
            setMobileDrawerOpen(false);
          }}
        >
          <div className="brand-icon-sq">&alpha;</div>
          <div className="brand-title">ALPHAGH</div>
        </div>
        <button
          className="mobile-drawer-close"
          id="btn-mobile-close"
          aria-label="메뉴 닫기"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <div className="mobile-drawer-body">
        {/* Left Category Nav */}
        <div className="mobile-drawer-left-nav">
          <button
            className={`mobile-nav-item ${mobileActiveTab === 'm-cat-korean' ? 'active' : ''}`}
            onClick={() => setMobileActiveTab('m-cat-korean')}
          >
            국어
          </button>
          <button
            className={`mobile-nav-item ${mobileActiveTab === 'm-cat-social' ? 'active' : ''}`}
            onClick={() => setMobileActiveTab('m-cat-social')}
          >
            사회
          </button>
          <button
            className={`mobile-nav-item ${mobileActiveTab === 'm-cat-english' ? 'active' : ''}`}
            onClick={() => setMobileActiveTab('m-cat-english')}
          >
            영어
          </button>
          <button
            className={`mobile-nav-item ${mobileActiveTab === 'm-cat-info' ? 'active' : ''}`}
            onClick={() => setMobileActiveTab('m-cat-info')}
          >
            정보
          </button>
        </div>

        {/* Right Content Panels */}
        <div className="mobile-drawer-right-content">
          {mobileActiveTab === 'm-cat-korean' && (
            <div className="mobile-panel-section active">
              <h4 className="mobile-panel-title">국어</h4>
              <ul className="mobile-menu-list">
                <li>
                  <a
                    href="#dashboard"
                    className="mobile-menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoute('dashboard');
                    }}
                  >
                    국어 홈
                  </a>
                </li>
              </ul>
            </div>
          )}

          {mobileActiveTab === 'm-cat-social' && (
            <div className="mobile-panel-section active">
              <h4 className="mobile-panel-title">사회</h4>
              <ul className="mobile-menu-list">
                <li>
                  <a
                    href="#social-home"
                    className="mobile-menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoute('social-home');
                    }}
                  >
                    사회 홈
                  </a>
                </li>
              </ul>
            </div>
          )}

          {mobileActiveTab === 'm-cat-english' && (
            <div className="mobile-panel-section active">
              <h4 className="mobile-panel-title">영어</h4>
              <ul className="mobile-menu-list">
                <li>
                  <a
                    href="#english-home"
                    className="mobile-menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoute('english-home');
                    }}
                  >
                    영어 홈
                  </a>
                </li>
              </ul>
            </div>
          )}

          {mobileActiveTab === 'm-cat-info' && (
            <div className="mobile-panel-section active">
              <h4 className="mobile-panel-title">정보</h4>
              <ul className="mobile-menu-list">
                <li>
                  <a
                    href="#info-home"
                    className="mobile-menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoute('info-home');
                    }}
                  >
                    정보 홈
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
