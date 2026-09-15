# [미션 5: 중급] 사내 식당 통합 관리 - 리듀서 모듈화

### 1. 상세 시나리오 및 배경

사내 식당 관리 앱의 규모가 커지면서 관리 항목이 '밥 재고', '국 재고', '오늘의 메인 메뉴' 3가지로 늘어났습니다.
이 코드를 원칙에 따라 갈끔하게 모듈화하여 누구나 코드를 쉽게 수정하고 기능을 확장할 수 있는 상태로 리팩토링 해야합니다.

### 2. 리팩토링 대상 : 엉망인 코드

원본 코드는 다음과 같습니다.

```
// [문제의 코드] src/App.jsx - 모든 로직이 한 곳에 섞여 있어 관리가 불가능함
import React, { useReducer } from 'react';

// 로직이 컴포넌트와 붙어 있어 파일이 비대해짐
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_RICE': return { ...state, rice: state.rice + action.amount };
    case 'REFILL_SOUP': return { ...state, soup: state.soup + action.amount };
    case 'CHANGE_MENU': return { ...state, mainMenu: action.newMenu };
    default: return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { rice: 20, soup: 30, mainMenu: '김치찌개' });

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🍱 사내 식당 (리팩토링 전)</h1>
      <p>밥: {state.rice} | 국: {state.soup} | 메뉴: {state.mainMenu}</p>
      
      {/* 액션 객체를 매번 직접 타이핑함 (오타 위험 높음) */}
      <button onClick={() => dispatch({ type: 'ADD_RICE', amount: 10 })}>밥 추가</button>
      <button onClick={() => dispatch({ type: 'CHANGE_MENU', newMenu: '돈까스' })}>메뉴 변경</button>
    </div>
  );
}

```

### 3. 구현 요구사항

Vite 프로젝트의 src 폴더 아래에 store/cafeteria/ 폴더를 생성하고 다음 파일들을 구현하세요.

1. cafeteriaTypes.js : 모든 액션 타입을 상수를 정의합니다.
2. cafeteriaActions.js: 액션 크리에이터 함수 구현
3. cafeteriaReducer.js : 초기 상태와 리듀서 함수를 분리해 작성
4. App.jsx: 분리된 모듈을 가져와 UI 랜더링에만 집중

