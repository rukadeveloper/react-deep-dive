import { useReducer } from "react"
import cookReducer from "./reducer/cookReducer"

export default function App() {
  const [state, dispatch] = useReducer(cookReducer, { rice: 0 })
  return (
    <div>
      <h1>학교 급식실 재고 관리</h1>
      <p>현재 밥 재고 : {state.rice} 인분</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => dispatch({ type: "COOK_RICE" })}>밥 하기(+10)</button>
        <button onClick={() => dispatch({ type: "SERVE_RICE" })}>배식하기(-1)</button>
      </div>
    </div>
  )
}