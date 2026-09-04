// Old Korean Jamo Combiner View Renderer

import { State } from '../../state/app_state.js';
import { UICore } from '../ui_core.js';

export function renderCombiner(): void {
  const root = UICore.getRoot();
  if (!root) return;

  const choList = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
    'ㆆ', 'ㆁ', 'ㅿ', 'ᄫ', 'ᄝ', 'ᄬ', 'ᅗ', 'ᄠ', 'ᄡ', 'ᄯ', 'ᄣ', 'ᄧ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ', 'ㆅ'
  ];
  const jungList = [
    'ㆍ', 'ㅡ', 'ㅣ', 'ㅗ', 'ㅏ', 'ㅜ', 'ㅓ', 'ㅛ', 'ㅑ', 'ㅠ', 'ㅕ', 'ᆡ', 'ㅢ', 'ㅘ', 'ㅝ', 'ㅚ', 'ㅐ', 'ㅔ'
  ];
  const jongList = ['', 'ㄱ', 'ㆁ', 'ㄷ', 'ㄴ', 'ㅂ', 'ㅁ', 'ㅅ', 'ㄹ', 'ᇹ', 'ᇫ', 'ᆮ', 'ᆺ', 'ᆹ', 'ᆶ'];

  const currentCho = State.combiner.cho;
  const currentJung = State.combiner.jung;
  const currentJong = State.combiner.jong;

  const combinedChar = currentCho + currentJung + currentJong;

  const choHex = 'U+' + currentCho.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
  const jungHex = 'U+' + currentJung.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
  const jongHex = currentJong ? ' + U+' + currentJong.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') : '';

  let ruleExplanation = '훈민정음 합자해(合字解) 성음법: 초성과 중성이 결합하여 온전한 1음절을 구성합니다.';
  if (['ᄫ', 'ᄝ', 'ᄬ', 'ᅗ'].includes(currentCho)) {
    ruleExplanation =
      '연서(連書)의 원리: 순음(입술소리) 아래에 목구멍소리 ㅇ을 세로로 이어 적어 순경음(입술가벼운소리 [β])을 합성합니다. (예: 수ᄫᅵ, 더ᄫᅥ)';
  } else if (['ᄠ', 'ᄡ', 'ᄯ', 'ᄣ', 'ᄧ'].includes(currentCho)) {
    ruleExplanation =
      '합용병서(合用竝書)의 원리: 어두자음군으로 서로 다른 자음 2~3개를 가로로 나란히 결합하여 실제 자음군 소리를 발음합니다. (예: ᄠᅳᆮ [ptɯt], ᄡᆞᆯ [psal])';
  } else if (currentJung === 'ㆍ') {
    ruleExplanation =
      '하서(下書) 및 천(天)의 원리: 둥근 하늘을 본뜬 양성모음 ㆍ(아래아)는 가로 모음 계열로 초성의 아래에 결합합니다. (예: 나랏말ᄊᆞ미)';
  } else if (currentJong === 'ᇹ') {
    ruleExplanation =
      '동국정운 이영보래(以影補來) 원리: 한자음 ㄹ 받침 뒤에 여린히읗(ㆆ)을 덧붙여 입성(ㄷ받침)의 조음 긴장성을 나타냅니다. (예: 月 워ᇹ, 日 ᅀᅵᇹ)';
  }

  root.innerHTML = `
    <div class="app-container" style="padding-top: 2rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-blue">KS X 1026-1 국립국어원 표준</span>
        <h2 style="font-size: 1.85rem; font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.03em;">
          훈민정음 합자해(合字解) 실시간 자모 조합기
        </h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.25rem;">
          초성(첫소리), 중성(가운뎃소리), 종성(끝소리)을 자유롭게 선택하여 15세기 소실 문자가 조합되는 원리와 유니코드 시퀀스를 실시간으로 확인합니다.
        </p>
      </div>

      <div class="combiner-grid">
        <div class="combiner-display-card">
          <span class="badge badge-level-1">LIVE COMPOSITE GLYPH</span>
          <div class="combiner-huge-glyph">${combinedChar}</div>
          
          <div class="combiner-formula">
            <span>${currentCho} (초)</span>
            <span>+</span>
            <span>${currentJung} (중)</span>
            ${currentJong ? `<span>+</span><span>${currentJong} (종)</span>` : ''}
            <span>=</span>
            <span style="color: var(--accent-primary); font-weight: 900;">${combinedChar}</span>
          </div>

          <div class="combiner-hex-badge" style="margin-bottom: 1.25rem;">
            유니코드 시퀀스: [${choHex} + ${jungHex}${jongHex}] (KS X 1026-1)
          </div>

          <div class="combiner-rule-desc">
            <strong>학술 해설:</strong> ${ruleExplanation}
          </div>

          <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
            <button class="btn btn-primary" id="btn-copy-glyph" data-char="${combinedChar}">
              조합된 글자 복사
            </button>
            <button class="btn btn-outline" id="btn-search-glyph" data-char="${combinedChar}">
              500제에서 검색
            </button>
          </div>
        </div>

        <div class="jamo-picker-card">
          <div>
            <div class="jamo-section-title">
              <span>1. 초성 선택 (첫소리: 기본/가획/이체/순경음/병서)</span>
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${currentCho}</span>
            </div>
            <div class="jamo-tiles-row">
              ${choList
                .map(
                  (c) =>
                    `<button class="jamo-tile-btn ${c === currentCho ? 'active' : ''}" data-type="cho" data-val="${c}">${c}</button>`
                )
                .join('')}
            </div>
          </div>

          <div>
            <div class="jamo-section-title">
              <span>2. 중성 선택 (가운뎃소리: 삼재/초출/재출/합용)</span>
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${currentJung}</span>
            </div>
            <div class="jamo-tiles-row">
              ${jungList
                .map(
                  (j) =>
                    `<button class="jamo-tile-btn ${j === currentJung ? 'active' : ''}" data-type="jung" data-val="${j}">${j}</button>`
                )
                .join('')}
            </div>
          </div>

          <div>
            <div class="jamo-section-title">
              <span>3. 종성 선택 (끝소리: 8종성 / 이영보래 / 없음)</span>
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${currentJong || '없음'}</span>
            </div>
            <div class="jamo-tiles-row">
              ${jongList
                .map(
                  (f) =>
                    `<button class="jamo-tile-btn ${f === currentJong ? 'active' : ''}" data-type="jong" data-val="${f}">${f || 'Ø'}</button>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
