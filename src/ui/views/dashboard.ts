// Dashboard View Renderer

import { Storage } from '../../services/storage.js';
import { HERO_SLIDES } from '../../data/carousel_data.js';
import { State } from '../../state/app_state.js';
import { UICore } from '../ui_core.js';

export function renderDashboard(): void {
  const root = UICore.getRoot();
  if (!root) return;
  const wrongCount = Storage.getWrongAnswers().length;
  const slide = HERO_SLIDES[State.currentHeroSlide] || HERO_SLIDES[0]!;

  root.innerHTML = `
    <!-- Programmers Rich Gradient Hero Banner -->
    <section class="pg-hero-section ${slide.theme}" id="hero-banner-section">
      <div class="pg-hero-inner">
        <div class="pg-hero-content">
          <div class="pg-hero-badge" id="hero-badge">
            <span>${slide.badge}</span>
          </div>
          <h1 class="pg-hero-title" id="hero-title">
            ${slide.title}
          </h1>
          <p class="pg-hero-desc" id="hero-desc">
            ${slide.desc}
          </p>
          <div class="pg-hero-pagination">
            <button id="hero-prev" title="이전 배너" aria-label="이전">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="pagination-current">${State.currentHeroSlide + 1}</span>
            <span class="pagination-slash">/</span>
            <span class="pagination-total">${HERO_SLIDES.length}</span>
            <button id="hero-next" title="다음 배너" aria-label="다음">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <!-- Programmers 3D Isometric Laptop & Study Graphic -->
        <div class="pg-hero-graphic">
          <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background Atmospheric Glow -->
            <ellipse cx="260" cy="140" rx="140" ry="90" fill="rgba(255,255,255,0.06)" filter="blur(20px)"/>
            
            <!-- 3D Laptop Base -->
            <path d="M120 180L240 230L340 185L220 135L120 180Z" fill="#1e293b" stroke="#334155" stroke-width="2"/>
            <path d="M120 180L240 230V242L120 192V180Z" fill="#0f172a"/>
            <path d="M240 230L340 185V197L240 242V230Z" fill="#090d16"/>
            <!-- Laptop Keyboard Glow Grid -->
            <path d="M150 175L235 210L310 178L225 143L150 175Z" fill="#0f172a" stroke="#1e293b"/>
            <path d="M205 198L245 214L255 210L215 194L205 198Z" fill="#3b82f6" opacity="0.8"/>
            
            <!-- Laptop Screen -->
            <path d="M220 135L340 185V75L220 25V135Z" fill="#090d16" stroke="#475569" stroke-width="2"/>
            <!-- Display Area -->
            <path d="M230 130L330 172V85L230 43V130Z" fill="#020617"/>
            <path d="M240 60L310 88" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
            <path d="M240 75L295 97" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M240 90L280 106" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
            
            <!-- 3D Floating Study Folder (Yellow/Amber Programmers Style) -->
            <g transform="translate(60, 50)">
              <path d="M40 70L110 40L140 55L70 85L40 70Z" fill="#f59e0b"/>
              <path d="M40 70L70 85V130L40 115V70Z" fill="#d97706"/>
              <path d="M70 85L160 55V100L70 130V85Z" fill="#fbbf24"/>
              <!-- Folder Tab -->
              <path d="M45 65L75 52L88 58L58 71L45 65Z" fill="#fef3c7"/>
              <!-- Floating Magnifying Glass -->
              <circle cx="120" cy="85" r="24" fill="rgba(255,255,255,0.2)" stroke="#ffffff" stroke-width="3"/>
              <line x1="138" y1="102" x2="160" y2="124" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
            </g>
          </svg>
        </div>
      </div>
    </section>

    <!-- Quick Action Standalone Rounded Square Buttons Grid -->
    <div class="quick-icons-strip">
      <div class="quick-icons-grid">
        <!-- 1. Test / Code & Exam Unified -->
        <div class="quick-icon-item" data-action="exam">
          <div class="quick-icon-sq">
            <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <span class="quick-icon-label">국어평가</span>
        </div>

        <!-- 2. Wrong Notes / Checklist -->
        <div class="quick-icon-item" data-action="review">
          <div class="quick-icon-sq">
            <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <span class="quick-icon-label">오답노트 (${wrongCount})</span>
        </div>

        <!-- 3. Certification Star / Medal -> Hash Placeholder -->
        <div class="quick-icon-item" data-action="cert">
          <div class="quick-icon-sq">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" y1="9" x2="20" y2="9"></line>
              <line x1="4" y1="15" x2="20" y2="15"></line>
              <line x1="10" y1="3" x2="8" y2="21"></line>
              <line x1="16" y1="3" x2="14" y2="21"></line>
            </svg>
          </div>
          <span class="quick-icon-label">###</span>
        </div>
      </div>
    </div>
  `;
}
