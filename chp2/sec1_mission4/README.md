# [미션 4: 초급] 스마트 오피스 - 정밀 환경 제어 시스템

### 1. 상세 시나리오 및 배경

배경: 여러분은 스마트 오피스의 환경을 관리하는 시스템 개발자입니다. 이제는 사용자가 원하는 수치를 직접 입력하여 온도와 습도를 조절해야 합니다.
목표: 액션 객체에 type 뿐만 아니라 실제 데이터인 payload을 실어보내는 법을 익히고, 여러 개의 상태를 객체로 관리하는 감각을 습득합니다.

### 2. 단계별 실습 가이드

Step 1. 파일 생성

src/components/OfficeControl.jsx 파일을 생성하여 연결합니다.

Step 2. 상태 설계

```
const initialState = {
  temperature: 22,
  humidity: 45
}
```

Step 3. 액션과 페이로드 설계

사용자가 입력한 값을 리듀서로 전달하기 위해 payload라는 이름을 사용합니다.

- CHANGE_TEMP : 입력된 온도 값으로 temperature 교체
- CHANGE_HUMIDITY: 입력된 습도 값으로 humidity 교체

### 3. UI 구조

***************************************************
* *
* 🏢 SMART OFFICE 제어 시스템                   *
* *
* 현재 온도: 22°C  |  현재 습도: 45%            *
* *
* [ 25 ] (온도 입력)   [ 온도 설정 버튼 ]       *
* [ 50 ] (습도 입력)   [ 습도 설정 버튼 ]       *
* *
***************************************************

### 4. 데이터 흐름

입력: 사용자가 입력창에 25를 클릭하고 온도 설정 클릭
Dispatch: dispatch({ type: "CHANGE_TEMP", payload: 25}) 클릭
Reducer: 매뉴얼에서 CHANGE_TEMP 확인 -> state.temperature를 action.payload 값으로 교체한 이후 새 객체 반환
Update: 화면에 현재 온도 25도로 즉시 반영