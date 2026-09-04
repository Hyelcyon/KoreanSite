import React, { useEffect } from 'react';
import { useAppStore, AppView } from './stores/useAppStore.js';
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
import { MobileDrawer } from './components/layout/MobileDrawer.js';
import { Toast } from './components/layout/Toast.js';
import { DashboardView } from './components/dashboard/DashboardView.js';
import { QuizView } from './components/korean/QuizView.js';
import { ResultView } from './components/korean/ResultView.js';
import { CatalogView } from './components/korean/CatalogView.js';
import { CombinerModal } from './components/korean/CombinerModal.js';
import { CorpusView } from './components/korean/CorpusView.js';
import { WrongNotesView } from './components/korean/WrongNotesView.js';
import { InfoHomeView } from './components/python/InfoHomeView.js';
import { PythonIDEView } from './components/python/ide/PythonIDEView.js';
import { BlankTrackView } from './components/common/BlankTrackView.js';

export const App: React.FC = () => {
  const { activeView, setRoute } = useAppStore();

  // Hash-based routing listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const validViews: AppView[] = [
        'dashboard',
        'korean-home',
        'quiz',
        'result',
        'catalog',
        'combiner',
        'corpus',
        'wrong',
        'info-home',
        'python-learn',
        'social-home',
        'english-home',
      ];

      if (validViews.includes(hash as AppView)) {
        setRoute(hash as AppView, false);
      } else if (!hash) {
        setRoute('dashboard', false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
      case 'korean-home':
        return <DashboardView />;
      case 'quiz':
        return <QuizView />;
      case 'result':
        return <ResultView />;
      case 'catalog':
        return <CatalogView />;
      case 'combiner':
        return <CombinerModal />;
      case 'corpus':
        return <CorpusView />;
      case 'wrong':
        return <WrongNotesView />;
      case 'info-home':
        return <InfoHomeView />;
      case 'python-learn':
        return <PythonIDEView />;
      case 'social-home':
        return (
          <BlankTrackView
            title="사회과 역량평가 플랫폼"
            desc="2026학년도 수능 및 전국연합학력평가 사회탐구 9개 과목 기출 문제 은행이 준비 중입니다."
          />
        );
      case 'english-home':
        return (
          <BlankTrackView
            title="영어과 구문&어휘 아카이브"
            desc="수능 평가원 1등급 보카 및 EBS 수능특강 연계 지문 정밀 분석 시스템이 준비 중입니다."
          />
        );
      default:
        return <DashboardView />;
    }
  };

  const isFullScreenView = activeView === 'python-learn';

  return (
    <div className="app-layout-shell">
      {/* Global GNB */}
      {!isFullScreenView && <Header />}
      <MobileDrawer />

      {/* Main Viewport */}
      <main id="app-root" role="main" className={isFullScreenView ? 'full-screen-ide-mode' : ''}>
        {renderActiveView()}
      </main>

      {/* Global Footer */}
      {!isFullScreenView && <Footer />}

      {/* Global Toast */}
      <Toast />
    </div>
  );
};
