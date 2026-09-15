import React, { useReducer } from 'react'
import cafeteriaReducer, { initialState } from './store/cafeteria/cafeteriaReducer'
import { addAmount, changeMenu } from './store/cafeteria/cafeteriaActions'
import { CAFETERIA_ACTIONS } from './store/cafeteria/cafeteriaTypes'

export default function App() {
  const [state, dispatch] = useReducer(cafeteriaReducer, initialState)

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>사내 식당 (리팩토링 후)</h1>
      <p>밥: {state.rice} | 국: {state.soup} | 메뉴: {state.mainMenu}</p>
      <button onClick={() => dispatch(addAmount(10, CAFETERIA_ACTIONS.ADD_RICE))}>밥 추가</button>
      <button onClick={() => dispatch(changeMenu('돈까스'))}>메뉴 변경</button>
    </div>
  )
}