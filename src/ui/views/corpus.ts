// Middle Korean Corpus View Renderer

import { UICore } from '../ui_core.js';

export function renderCorpus(): void {
  const root = UICore.getRoot();
  if (!root) return;
  root.innerHTML = `
    <div class="app-container" style="padding-top: 2rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem;">
        <span class="badge badge-blue">국립국어원 표준 자료실</span>
        <h2 style="font-size: 1.85rem; font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.03em;">
          15세기 훈민정음 및 중세국어 원문 아카이브
        </h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.25rem;">
          1446년 훈민정음 해례본 어제 서문, 1448년 동국정운 한자음 표기 체계, 1459년 월인석보 훈민정음언해를 집대성한 공식 학술 원문입니다.
        </p>
      </div>

      <!-- Section 1: Authentic Text Card -->
      <div style="background-color: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-elevation-1); margin-bottom: 2rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary);">
          훈민정음 언해본 서문 (1459)
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          15세기 원본 목판본 표기 규칙에 따라 띄어쓰기 없이 연서(連書)로 기록된 원형 본문과 학습용 대역입니다.
        </p>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
            1. 15세기 원본 형태 (무띄어쓰기 연서 정음 원문)
          </span>
          <span class="badge badge-category">연서 원형</span>
        </div>
        <div style="font-family: var(--font-serif); font-size: 1.25rem; line-height: 2; padding: 1.5rem; background-color: var(--surface-2); border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem; letter-spacing: 0.02em; word-break: break-all;">
          나랏말ᄊᆞ미듕귁에달아문ᄍᆞ와로서르ᄉᆞᄆᆞᆺ디아니ᄒᆞᆯᄊᆡ이런젼ᄎᆞ로어린백ᄉᆡᇰ이니르고져홇배이셔도ᄆᆞᄎᆞᆷ내제ᄠᅳ들시러펴디못ᄒᆞᆯ노미하니라내이ᄅᆞᆯ위ᄒᆞ야어엿비너겨새로스믈여듧ᄍᆞᄅᆞᆯ맹ᄀᆞ노니사ᄅᆞᆷ마다ᄒᆡᅇᅧ수ᄫᅵ니겨날로ᄡᅮ메편안킈ᄒᆞ고져ᄒᆞᆯᄯᆞᄅᆞ미니라
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">
            2. 현대식 띄어쓰기 & 표준 발음 대역
          </span>
          <span class="badge badge-level-1">학습 대역</span>
        </div>
        <div style="font-family: var(--font-serif); font-size: 1.05rem; line-height: 1.75; padding: 1.25rem; background-color: var(--surface-2); border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem; color: var(--text-secondary);">
          나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할새 이런 전차로 어린 백성이 니르고져 홀 배 이셔도 마참내 제 뜻을 시러 펴디 못할 노미 하니라 내 이랄 위하야 어엿비 너겨 새로 스믈여덟 자랄 맹가노니 사람마다 해여 수비 니겨 날로 쓰메 편안킈 하고져 할 따라미니라
        </div>

        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.4rem;">
          3. 현대어 의미 풀이
        </div>
        <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
          우리나라 말이 중국과 달라 문자와 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 말하고자 하는 바가 있어도 마침내 제 뜻을 능히 펴지 못하는 사람이 많으니라. 내가 이를 불쌍히 여겨 새로 스물여덟 자를 만드니, 모든 사람으로 하여금 쉽게 익혀 날마다 쓰는 데 편안하게 하고자 할 따름이니라.
        </div>
      </div>

      <!-- Section 2: 15th-Century Phonetic Reading Guide -->
      <div style="background-color: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-elevation-1); margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
            15세기 세종 당대 음성학적 독음(讀音) 및 발음 규칙 해설
          </h3>
          <span class="badge badge-blue">학술 음운론</span>
        </div>
        
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
          15세기 중세국어는 현대 한국어와 조음 위치 및 음운 체계가 완전히 달랐습니다. 훈민정음 창제 당대 15세기 사람들의 실제 발음과 국제음성기호(IPA) 대조표입니다.
        </p>

        <div class="catalog-table-wrapper">
          <table class="catalog-table">
            <thead>
              <tr>
                <th style="width: 140px;">원문 어휘</th>
                <th style="width: 150px;">15세기 당대 독음</th>
                <th style="width: 150px;">국제음성기호(IPA)</th>
                <th>15세기 당대 조음 음운 원리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">나랏말ᄊᆞ미</td>
                <td style="font-weight: 600;">[나랃말싸미]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[na-rat-mal-ssʌ-mi]</td>
                <td>'ㅅ'은 종성 8종성법에 의해 [t]로 발음, 'ㆍ(아래아)'는 후설 양성모음 [ʌ] 발음</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">듕귁에 달아</td>
                <td style="font-weight: 600;">[듕귁에 달라]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[tjuŋ-kwik-e tal-a]</td>
                <td>동국정운식 중고음 '위' 모음 반영, '달아'는 '달라(異)'의 'ㄹ' 탈락 전 원형 연철</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">문ᄍᆞ와로 서르</td>
                <td style="font-weight: 600;">[문짜와로 서르]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[mun-ts'ʌ-wa-ro sʌ-rɯ]</td>
                <td>음성모음(ㅓ, ㅡ) 모음조화 철저 적용, 'ᄍᆞ'는 된소리 치음 [ts'] 발음</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">ᄉᆞᄆᆞᆺ디</td>
                <td style="font-weight: 600;">[사맏디]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[sʌ-mʌt-ti]</td>
                <td>구개음화 발생 이전이므로 '사맛지'가 아니라 혓소리 그대로 <strong>[ti]</strong>로 파열 발음</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">니르고져</td>
                <td style="font-weight: 600;">[니르고져]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[ni-rɯ-go-zjʌ]</td>
                <td>두음법칙 이전이므로 초성 'ㄴ' [ni] 온전 발음</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">ᄠᅳ들</td>
                <td style="font-weight: 600;">[프뜯을] (ㅂ·ㄷ 연속)</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[ptɯ-dɯl]</td>
                <td><strong>어두자음군(合用竝書)</strong>: 현대의 된소리가 아니라 [p]와 [t]를 연속 파열!</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">수ᄫᅵ</td>
                <td style="font-weight: 600;">[수비]·[수위] 중간음</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[su-βi]</td>
                <td><strong>순경음 비읍(連書)</strong>: 입술 사이로 바람을 내는 유성 양순 마찰음 <strong>[β]</strong> 발음!</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">날로 ᄡᅮ메</td>
                <td style="font-weight: 600;">[날로 ㅂ쑤메]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[nal-ro psu-me]</td>
                <td><strong>어두자음군</strong>: [p]와 [s]를 찰나에 연속 조음</td>
              </tr>
              <tr>
                <td style="font-weight: 700; color: var(--accent-primary);">ᄯᆞᄅᆞ미니라</td>
                <td style="font-weight: 600;">[ㅂ따라미니라]</td>
                <td style="font-family: var(--font-mono); font-size: 0.82rem;">[pstʌ-rʌ-mi-ni-ra]</td>
                <td>어두 ㅂ계 자음군 [pst-] 및 아래아 [ʌ] 연속 조음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
