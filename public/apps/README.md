# 작품(AI Studio) 코드 넣는 곳

각 작품은 Google AI Studio에서 만든 인터랙티브 앱입니다. AI Studio 앱은 외부에
배포되어 있지 않고 로그인이 필요하므로, **사이트 안에서 실제로 실행하려면
각 앱의 코드를 export해서 여기에 넣어야** 합니다.

## 1) AI Studio에서 코드 받기

AI Studio 앱 화면에서 코드를 내려받습니다. 보통 두 가지 형태입니다.

- **단일 HTML 파일** 형태인 경우 → 그 파일을 `index.html` 로 저장
- **Vite/React 프로젝트** 형태(파일 여러 개)인 경우 → 해당 프로젝트를
  `npm install && npm run build` 한 뒤, 생성된 `dist/` 안의 결과물
  (`index.html` + `assets/`)를 통째로 복사

> 빌드 시 base 경로가 필요하면 `vite build --base=/apps/<폴더>/` 로 빌드하세요.
> (예: `vite build --base=/apps/jung-jiyoung/`)

## 2) 폴더에 넣기

작품별 폴더에 `index.html`이 바로 아래에 오도록 넣습니다.

```
public/apps/
  kim-taehwan/   index.html  (+ assets…)
  park-miju/     index.html
  ju-dain/       index.html
  park-chaeyoon/ index.html
  jung-jiyoung/  index.html
  jo-yechan/     index.html
  lee-seohyun/   index.html
```

## 3) 활성화

`src/data/works.ts` 에서 해당 작품의 `liveReady: false` → `true` 로 바꿉니다.
그러면 갤러리에서 **작품 실행(LIVE)** 버튼이 켜지고, 풀스크린으로 작품이
바로 구동됩니다. (코드를 안 넣은 작품은 자동으로 "AI Studio에서 열기"
링크로만 동작합니다.)

코드를 직접 넣기 어려우면, 코드를 그대로 전달해 주면 대신 넣어 드립니다.
