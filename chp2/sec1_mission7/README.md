# [미션 7: 최종] 프로페셔널 업무 협업 대시보드

### 1. 상세 시나리오 및 배경

팀원들이 업무를 관리하는 프로젝트 대시보드 엔진을 구축해야 합니다.
단순한 Todo List는 실무 요구사항을 충족하지 못합니다.
우선순위에 따른 분류, 완료/미완료에 따른 실시간 통계 산출, 불변성 기반의 데이터 처리가 필수적입니다.

### 2. 상세 구현 명세

1. 고급 아키텍처 설계 : types, actions, reducer를 엄격히 분리하여 src/store/tasks 폴더에 배치합니다.
2. 데이터 무결성 검증 : ADD_TASK 액션 시 제목이 공백인 경우 추가를 거부하는 로직을 리듀서 내부에 구현합니다.
3. 복합 비즈니스 로직 구현
- TOGGLE_TASK: 클릭 시 완료 상태(true/false)를 반전시킵니다
- UPDATE_PRIORITY: 드롭다운 선택 시 해당 업무의 우선순위만 정밀하게 교체합니다.
- DELETE_TASK: 특정 업무를 목록에서 완전히 제거합니다.

4. 유도된 상태 통계
- useState를 추가하지 않고, tasks 배열을 가공하여 '전체', '진행 중', '완료됨' 숫자를 실시간으로 산출하여 화면 상단 대시보드에 표시합니다.

5. 컴포넌트 역할 분담
- App.jsx : 메인 상태, 통계 로직 관리
- TaskInput.jsx : 입력값 처리 및 액션 발송
- TaskItem.jsx : 개별 업무 UI 및 수정/삭제 인터렉션 담당

### 3. 폴더 구조 설계

```
src/
  store/
    tasks/
      taskTypes.js    (액션 이름표)
      taskActions.js  (요청서 자동 작성 함수)
      taskReducer.js  (운영 매뉴얼 및 초기값)
  components/
    TaskInput.jsx     (입력 컴포넌트)
    TaskItem.jsx      (단일 업무 컴포넌트)
    TaskStats.jsx     (상단 통계 컴포넌트)
  App.jsx             (메인 조립 본부)
```