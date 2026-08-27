# Header Right Action Buttons (Archived / Backup)

## 1. Description
상단 GNB 우측 영역(`header-actions`)에 위치했던 `오답노트` 링크 버튼과 `시험 시작` 아웃라인 버튼의 위치 및 코드 내용입니다.

---

## 2. HTML Structure

- **파일 위치**: `c:/Mywork/Web/TypingSite/index.html` (`.header-actions` 내부)

```html
<!-- Right Actions -->
<div class="header-actions">
  <button class="header-link-btn" id="btn-header-wrong">오답노트</button>
  <button class="btn-login-outline" id="btn-quick-start">시험 시작</button>
  <!-- Mobile 3-Line Hamburger Button -->
  <button class="btn-mobile-hamburger" id="btn-mobile-menu" aria-label="메뉴 열기">
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
```

---

## 3. CSS Styles

- **파일 위치**: `c:/Mywork/Web/TypingSite/css/layout.css` (L447-L478)

```css
.header-link-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  transition: color var(--duration-fast);
}

.header-link-btn:hover {
  color: var(--text-primary);
}

.btn-login-outline {
  border: 1px solid var(--border-medium);
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all var(--duration-fast);
}

.btn-login-outline:hover {
  color: var(--text-primary);
  background-color: #f8fafc;
}
```

---

## 4. JS Event Handlers

- **파일 위치**: `c:/Mywork/Web/TypingSite/js/app.bundle.js` (L1610-L1624)

```javascript
// Header Wrong Answers -> Show Wrong Problem List Page
if (target.closest('#btn-header-wrong')) {
  this.switchTab('wrong');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return;
}

// Hero Start / Quick Start
if (target.closest('#btn-hero-start') || target.closest('#btn-quick-start') || target.closest('#btn-promo-start')) {
  const sample = DataManager.getRandomSample(20);
  State.startSession('exam', sample);
  UI.renderQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return;
}
```
