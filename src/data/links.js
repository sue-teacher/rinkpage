// ============================================================
//  지수쌤 학습 허브 — 링크 데이터
//  새 학습 웹앱을 만들 때마다 아래 links 배열에 블록 하나만 추가하면 됩니다.
// ------------------------------------------------------------
//  링크 하나의 형태:
//  {
//    id: 'unique-id',          // 고유 식별자(영문/숫자)
//    title: '카드 제목',        // 화면에 크게 보일 이름
//    description: '한 줄 설명',  // 제목 아래 설명
//    url: 'https://...',       // 클릭 시 이동할 주소
//    emoji: '🗺️',              // 왼쪽 아이콘(이모지)
//    tag: '역사',               // 분류 뱃지(선택). 같은 tag끼리 묶어볼 수 있어요
//    accent: '#ffd166',        // 카드 포인트 색(선택, 생략하면 기본 금색)
//    status: 'live',           // 'live'(공개) | 'soon'(준비중). 생략하면 live
//  }
// ============================================================

export const profile = {
  name: '지수쌤 학습 허브',
  tagline: '수업에서 쓰는 학습 웹앱을 한곳에 모았어요',
  emoji: '📚',
}

export const links = [
  {
    id: 'ww1',
    title: '지수쌤과 전쟁 예언자',
    description: '지도를 따라가며 배우는 제1차 세계대전 학습 게임',
    url: 'https://world-war-prophet.vercel.app/',
    emoji: '🕯️',
    tag: '역사',
    accent: '#e8995a',
    status: 'live',
  },
  {
    id: 'revolution',
    title: '지수쌤과 혁명 탐험대',
    description: '세계를 바꾼 7개의 혁명을 탐험하는 역사1 복습 게임',
    url: 'https://revolutions-omega.vercel.app/',
    emoji: '🗺️',
    tag: '역사',
    accent: '#ffd166',
    status: 'live',
  },

  // ── 새 학습 웹앱을 여기에 추가하세요 ───────────────────────
  // {
  //   id: 'new-app',
  //   title: '새 학습 웹앱 이름',
  //   description: '한 줄 설명',
  //   url: 'https://...',
  //   emoji: '✨',
  //   tag: '분류',
  //   status: 'soon',
  // },
]
