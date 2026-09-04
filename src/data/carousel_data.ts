// Hero Banner Carousel Data

export interface HeroSlide {
  theme: string;
  badge: string;
  title: string;
  desc: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    theme: 'theme-dark',
    badge: '국어 역량평가',
    title: '실전으로 증명하는<br />중세국어 500제 완성 과정',
    desc: '훈민정음 해례본부터 동국정운 한자음까지<br />실전 문제 풀이로 완성하는 국어학 경쟁력'
  },
  {
    theme: 'theme-silver',
    badge: '데브코스',
    title: '포트폴리오로 증명하는<br />9주 훈민정음 심화과정',
    desc: '해례본 제자해부터 15세기 원문 강독까지<br />프로젝트로 완성하는 실무 국어학 전문성'
  },
  {
    theme: 'theme-indigo',
    badge: '동국정운 특강',
    title: '3성 체계와 이영보래<br />동국정운 한자음 100제 마스터',
    desc: '순경음·반치음과 15세기 소실 문자의 음운론적 실체<br />핵심 개념을 단번에 정리하는 집중 코스'
  },
  {
    theme: 'theme-teal',
    badge: '실전 모의고사',
    title: '2026학년도 중세국어<br />전국 표준 모의평가 20제',
    desc: '공식 500제 문제은행 기반 실시간 역량 진단<br />백분위 성취도 및 취약 영역 정밀 분석'
  },
  {
    theme: 'theme-amber',
    badge: '원문 아카이브',
    title: '1446 세종 친제 해례본<br />15세기 음성학적 당대 독음 수록',
    desc: '어두자음군 [pt-], 순경음 [β], 구개음화 미적용 [ti]<br />국제음성기호(IPA) 대조표로 확인하는 세종 시대의 발음'
  }
];
