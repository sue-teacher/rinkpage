# 지수쌤 학습 허브 📚

앞으로 만드는 학습 웹앱 링크를 한곳에 모아 보여주는 Linktree 스타일 사이트입니다.
React + Vite로 만들었고, GitHub를 통해 Vercel에 배포합니다.

## 로컬에서 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 배포용 빌드(dist/ 생성)
npm run preview  # 빌드 결과 미리보기
```

## 🔗 새 학습 웹앱 링크 추가하기 (가장 자주 하는 작업)

`src/data/links.js` 파일의 `links` 배열에 블록 하나만 추가하면 끝입니다.

```js
export const links = [
  // ...기존 링크들...

  {
    id: 'my-new-app',                 // 고유 식별자(겹치지 않게)
    title: '새 학습 웹앱 이름',          // 카드에 크게 보이는 제목
    description: '한 줄 설명',           // 제목 아래 설명
    url: 'https://my-app.vercel.app',  // 클릭 시 이동할 주소
    emoji: '✨',                        // 왼쪽 아이콘(이모지)
    tag: '역사',                        // 분류 뱃지(선택)
    accent: '#7aa2ff',                 // 카드 포인트 색(선택, 생략하면 금색)
    status: 'live',                    // 'live' 공개 / 'soon' 준비중(선택)
  },
]
```

### 필드 설명

| 필드 | 필수 | 설명 |
| --- | --- | --- |
| `id` | ✅ | 고유 식별자. 다른 링크와 겹치지 않게. |
| `title` | ✅ | 카드 제목 |
| `url` | ✅ | 이동할 주소 (`status`가 `soon`이면 눌러도 이동하지 않음) |
| `description` | | 제목 아래 한 줄 설명 |
| `emoji` | | 왼쪽 아이콘. 생략하면 🔗 |
| `tag` | | 분류 뱃지. 같은 `tag`가 2개 이상이면 상단에 필터 버튼이 자동 생성됨 |
| `accent` | | 카드 왼쪽 테두리 색(hex). 생략하면 기본 금색 |
| `status` | | `'live'`(기본) 또는 `'soon'`(준비중 뱃지, 클릭 비활성) |

> 사이트 제목/소개 문구/아바타 이모지는 같은 파일의 `profile` 객체에서 바꿀 수 있어요.

## 🚀 Vercel 배포 (GitHub 연동)

1. 이 폴더를 GitHub 저장소에 올립니다.
   ```bash
   git init
   git add .
   git commit -m "지수쌤 학습 허브 초기 버전"
   git branch -M main
   git remote add origin https://github.com/<사용자명>/<저장소명>.git
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com)에서 **Add New → Project**로 해당 저장소를 가져옵니다.
3. Vercel이 Vite 프로젝트를 자동 인식합니다. 기본값 그대로 두면 됩니다.
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**를 누르면 배포 완료. 이후 `main` 브랜치에 push할 때마다 자동 재배포됩니다.

## 📁 폴더 구조

```
krio(rinktree)/
├─ index.html              # 진입 HTML
├─ vercel.json             # SPA 라우팅 설정
├─ public/
│  └─ favicon.svg          # 파비콘
└─ src/
   ├─ main.jsx             # React 진입점
   ├─ App.jsx              # 전체 레이아웃 + 태그 필터
   ├─ components/
   │  └─ LinkCard.jsx      # 링크 카드 한 개
   ├─ data/
   │  └─ links.js          # ★ 링크를 추가/수정하는 곳
   └─ styles/
      └─ global.css        # 디자인 토큰 + 스타일
```

## 메모

- 기존 두 앱(세계대전, 혁명들)의 `url`은 아직 `example.com` 임시 주소입니다.
  각 앱의 실제 Vercel 주소로 `src/data/links.js`에서 바꿔주세요.
