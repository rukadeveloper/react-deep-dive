# [미션 8: 초급] 글로벌 다국어(i8n) 설정 시스템

### 1. 상세 시나리오 및 배경

가장 핵심적인 사용자 경험(UX)은 사용자가 상단 버튼을 클릭하면 페이지 전체의 언어가 한국어에서 영어로 전환

### 2. 단계별 실습 가이드 (Vite 환경)

1. Context 생성 : src/contexts/LanguageContext.jsx를 생성하여 공용 게시판의 틀을 정의합니다.

2. Provider 설치 : App.jsx에서 LanguageContext.Provider를 통해 전체 트리에 언어 데이터 방송을 시작합니다.

3. Props 제거 : Layout.jsx와 MainSection.jsx에서 쓰던 lang props를 삭제합니다.

4. useContext 사용 : ContentCard.jsx에서 useContext Hook을 사용해 게시판에 붙은 정보를 읽어옵니다.

5. 기존 코드

```
// ❌ 리팩토링 전: Props Drilling의 실제 고통
function App() {
  const [lang] = useState("ko");
  return <Layout lang={lang} />; // App은 Layout에게 짐을 맡김
}

function Layout({ lang }) {
  // Layout은 lang을 쓰지 않지만 MainSection에게 전달하기 위해 억지로 받음
  return <MainSection lang={lang} />; 
}

function MainSection({ lang }) {
  // MainSection 역시 무의미한 전달자 역할 수행
  return <ContentCard lang={lang} />; 
}

function ContentCard({ lang }) {
  // 1층에 도착해서야 비로소 데이터가 사용됨
  return <p>{lang === "ko" ? "뉴스 읽기" : "Read News"}</p>;
}
```

### 3. 데이터 흐름

```
[ 아키텍처 변화 비교 ]

| 구분         | Props Drilling (과거)         | Context API (현재)             |
| :----------- | :--------------------------- | :----------------------------- |
| App          | Props로 강제 전달 (배달 시작) | Provider로 방송 시작 (게시)    |
| Layout       | 배달 의무 있음 (코드 지저분)  | 배달 의무 없음 (코드 깔끔)     |
| MainSection  | 배달 의무 있음 (코드 지저분)  | 배달 의무 없음 (코드 깔끔)     |
| ContentCard  | 부모가 줄 때까지 수동적 대기 | useContext로 직접 능동적 확인  |
```

### 4. 예상 UI

```
[ 예상 UI 구조 ]

***************************************************
* [ 🌐 React Times ]                              *
* [ 버튼: 언어 변경 (ko ↔ en) ]                    *
* *
* (Layout Area - 전달 의무 해방)                   *
* (Main Section - 전달 의무 해방)                  *
* -----------------------------------------   *
* | [ Content Card ]                      |   *
* | 현재 전역 감지 언어: en               |   *
* | "Hello! Welcome to React Times."      |   *
* -----------------------------------------   *
***************************************************
```