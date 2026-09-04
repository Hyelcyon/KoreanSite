import React, { useState } from 'react';
import { useAppStore } from '../../stores/useAppStore.js';

export const CombinerModal: React.FC = () => {
  const [cho, setCho] = useState('ᄫ');
  const [jung, setJung] = useState('ᅵ');
  const [jong, setJong] = useState('');

  const { setCatalogFilter, setRoute, showToast } = useAppStore();

  const choList = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
    'ㆆ', 'ㆁ', 'ㅿ', 'ᄫ', 'ᄝ', 'ᄬ', 'ᅗ', 'ᄠ', 'ᄡ', 'ᄯ', 'ᄣ', 'ᄧ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ', 'ㆅ'
  ];
  const jungList = [
    'ㆍ', 'ㅡ', 'ㅣ', 'ㅗ', 'ㅏ', 'ㅜ', 'ㅓ', 'ㅛ', 'ㅑ', 'ㅠ', 'ㅕ', 'ᆡ', 'ㅢ', 'ㅘ', 'ㅝ', 'ㅚ', 'ㅐ', 'ㅔ'
  ];
  const jongList = ['', 'ㄱ', 'ㆁ', 'ㄷ', 'ㄴ', 'ㅂ', 'ㅁ', 'ㅅ', 'ㄹ', 'ᇹ', 'ᇫ', 'ᆮ', 'ᆺ', 'ᆹ', 'ᆶ'];

  const combinedChar = cho + jung + jong;

  const choHex = 'U+' + cho.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
  const jungHex = 'U+' + jung.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
  const jongHex = jong ? ' + U+' + jong.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') : '';

  let ruleExplanation = '훈민정음 합자해(合字解) 성음법: 초성과 중성이 결합하여 온전한 1음절을 구성합니다.';
  if (['ᄫ', 'ᄝ', 'ᄬ', 'ᅗ'].includes(cho)) {
    ruleExplanation =
      '연서(連書)의 원리: 순음(입술소리) 아래에 목구멍소리 ㅇ을 세로로 이어 적어 순경음(입술가벼운소리 [β])을 합성합니다. (예: 수ᄫᅵ, 더ᄫᅥ)';
  } else if (['ᄠ', 'ᄡ', 'ᄯ', 'ᄣ', 'ᄧ'].includes(cho)) {
    ruleExplanation =
      '합용병서(合用竝書)의 원리: 어두자음군으로 서로 다른 자음 2~3개를 가로로 나란히 결합하여 실제 자음군 소리를 발음합니다. (예: ᄠᅳᆮ [ptɯt], ᄡᆞᆯ [psal])';
  } else if (jung === 'ㆍ') {
    ruleExplanation =
      '하서(下書) 및 천(天)의 원리: 둥근 하늘을 본뜬 양성모음 ㆍ(아래아)는 가로 모음 계열로 초성의 아래에 결합합니다. (예: 나랏말ᄊᆞ미)';
  } else if (jong === 'ᇹ') {
    ruleExplanation =
      '동국정운 이영보래(以影補來) 원리: 한자음 ㄹ 받침 뒤에 여린히읗(ㆆ)을 덧붙여 입성(ㄷ받침)의 조음 긴장성을 나타냅니다. (예: 月 워ᇹ, 日 ᅀᅵᇹ)';
  }

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(combinedChar);
      showToast(`'${combinedChar}' 글자가 클립보드에 복사되었습니다.`, 'success');
    }
  };

  const handleSearch = () => {
    setCatalogFilter('all', combinedChar);
    setRoute('catalog');
  };

  return (
    <div className="app-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="badge badge-blue">KS X 1026-1 국립국어원 표준</span>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginTop: '0.35rem', letterSpacing: '-0.03em' }}>
          훈민정음 합자해(合字解) 실시간 자모 조합기
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
          초성(첫소리), 중성(가운뎃소리), 종성(끝소리)을 자유롭게 선택하여 15세기 소실 문자가 조합되는 원리와 유니코드 시퀀스를 실시간으로 확인합니다.
        </p>
      </div>

      <div className="combiner-grid">
        <div className="combiner-display-card">
          <span className="badge badge-level-1">LIVE COMPOSITE GLYPH</span>
          <div className="combiner-huge-glyph">{combinedChar}</div>

          <div className="combiner-formula">
            <span>{cho} (초)</span>
            <span>+</span>
            <span>{jung} (중)</span>
            {jong && (
              <>
                <span>+</span>
                <span>{jong} (종)</span>
              </>
            )}
            <span>=</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 900 }}>{combinedChar}</span>
          </div>

          <div className="combiner-hex-badge" style={{ marginBottom: '1.25rem' }}>
            유니코드 시퀀스: [{choHex} + {jungHex}{jongHex}] (KS X 1026-1)
          </div>

          <div className="combiner-rule-desc">
            <strong>학술 해설:</strong> {ruleExplanation}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button className="btn btn-primary" id="btn-copy-glyph" onClick={handleCopy}>
              조합된 글자 복사
            </button>
            <button className="btn btn-outline" id="btn-search-glyph" onClick={handleSearch}>
              500제에서 검색
            </button>
          </div>
        </div>

        <div className="jamo-picker-card">
          <div>
            <div className="jamo-section-title">
              <span>1. 초성 선택 (첫소리: 기본/가획/이체/순경음/병서)</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
                {cho}
              </span>
            </div>
            <div className="jamo-tiles-row">
              {choList.map((c) => (
                <button
                  key={c}
                  className={`jamo-tile-btn ${c === cho ? 'active' : ''}`}
                  onClick={() => setCho(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="jamo-section-title">
              <span>2. 중성 선택 (가운뎃소리: 삼재/초출/재출/합용)</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
                {jung}
              </span>
            </div>
            <div className="jamo-tiles-row">
              {jungList.map((j) => (
                <button
                  key={j}
                  className={`jamo-tile-btn ${j === jung ? 'active' : ''}`}
                  onClick={() => setJung(j)}
                >
                  {j}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="jamo-section-title">
              <span>3. 종성 선택 (끝소리: 8종성 / 이영보래 / 없음)</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
                {jong || '없음'}
              </span>
            </div>
            <div className="jamo-tiles-row">
              {jongList.map((f, idx) => (
                <button
                  key={idx}
                  className={`jamo-tile-btn ${f === jong ? 'active' : ''}`}
                  onClick={() => setJong(f)}
                >
                  {f || 'Ø'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
