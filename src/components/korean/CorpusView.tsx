import React from 'react';
import { DataManager } from '../../services/data_manager.js';

export const CorpusView: React.FC = () => {
  const corpus = DataManager.getCorpus();

  return (
    <div style={{ maxWidth: 'var(--max-width-reading)', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="badge badge-category">국립국어원 표준 자료</span>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>
          15세기 훈민정음 및 중세국어 원문 아카이브
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>
          1446년 훈민정음 해례본 어제 서문, 1448년 동국정운 한자음 표기 체계, 1459년 월인석보 훈민정음언해를 집대성한 공식 학술 원문입니다.
        </p>
      </div>

      {/* Section 1: Haeryebon Eoje Eonhaebon */}
      <div
        style={{
          backgroundColor: 'var(--surface-1)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: 'var(--shadow-elevation-1)',
          marginBottom: '2rem',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.35rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--accent-primary)',
          }}
        >
          훈민정음 언해본 서문 (1459)
        </h3>
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            lineHeight: 1.8,
            padding: '1.25rem',
            backgroundColor: 'var(--surface-2)',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.25rem',
          }}
        >
          나랏말ᄊᆞ미 中國에 달아 文字와로 서르 ᄉᆞᄆᆞᆺ디 아니ᄒᆞᆯᄊᆡ 이런 젼ᄎᆞ로 어린 百姓이 니르고져 홇 배 이셔도 ᄆᆞᄎᆞᆷ내 제 ᄠᅳ들 시러 펴디 못ᄒᆞᆯ 노미 하니라 내 이ᄅᆞᆯ 爲ᄒᆞ야 어엿비 너겨 새로 스믈여듧 字ᄅᆞᆯ ᄆᆡᇰᄀᆞ노니 사ᄅᆞᆷ마다 ᄒᆡᅇᅧ 수ᄫᅵ 니겨 날로 ᄡᅮ메 便安킈 ᄒᆞ고져 ᄒᆞᆯ ᄯᆞᄅᆞ미니라
        </div>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          <strong>현대어 풀이:</strong> 우리나라 말이 중국과 달라 문자와 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 말하고자 하는 바가 있어도 마침내 제 뜻을 능히 펴지 못하는 사람이 많으니라. 내가 이를 불쌍히 여겨 새로 스물여덟 자를 만드니, 모든 사람으로 하여금 쉽게 익혀 날마다 쓰는 데 편안하게 하고자 할 따름이니라.
        </div>
      </div>

      {/* Section 2: Dongguk Jeongun Table */}
      <div
        style={{
          backgroundColor: 'var(--surface-1)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: 'var(--shadow-elevation-1)',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.35rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--accent-primary)',
          }}
        >
          동국정운식 한자음 대표 표기 대조표 (1448)
        </h3>
        <div className="catalog-table-wrapper">
          <table className="catalog-table">
            <thead>
              <tr>
                <th>한자 (漢字)</th>
                <th>동국정운식 표기</th>
                <th>현대 한자음</th>
                <th>적용 표기 규칙</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>世</td>
                <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  솅
                </td>
                <td>세</td>
                <td>형식 종성 'ㅇ' 부착 (3성 체계 완비)</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>國</td>
                <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  귁
                </td>
                <td>국</td>
                <td>중고음(홍무정운) 원음 '위' 모음 반영</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>月</td>
                <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  워ᇹ
                </td>
                <td>월</td>
                <td>이영보래 (ㄹ 받침 뒤 여린히읗 ㆆ 덧붙임)</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>日</td>
                <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  ᅀᅵᇹ
                </td>
                <td>일</td>
                <td>이영보래 + 반치음(ㅿ) 초성 반영</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>斗</td>
                <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  둉
                </td>
                <td>두</td>
                <td>형식 종성 'ㅇ' 부착</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>便</td>
                <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  뼌
                </td>
                <td>편</td>
                <td>전탁 초성 'ㅃ' 유성음 원음 반영</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
