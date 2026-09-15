import { useReducer } from "react"
import courseReducer, { initialState } from "./courseReducer"
import { decreaseId, increaseId, removeId } from "./courseActions"

export default function App() {
  const [state, dispatch] = useReducer(courseReducer, initialState)

  function addQuantity(id) {
    dispatch(increaseId(id))
  }

  function decreaseQuantity(id) {
    dispatch(decreaseId(id))
  }

  function removeItem(id) {
    dispatch(removeId(id))
  }

  return (
    <div>
      <h1>GEMINI ACADEMY 수강 바구니</h1>
      <p>--------------------------------</p>
      <div>
        {state.lists.map(l => (
          <div key={l.id}>
            <div>* {l.name} ({l.price.toLocaleString()}원)</div>
            <div>
              <button onClick={() => addQuantity(l.id)}>+</button>
              <span>{l.quantity}</span>
              <button onClick={() => decreaseQuantity(l.id)}>-</button>
              <button onClick={() => removeItem(l.id)}>[삭제]</button>
            </div>
          </div>
        )
        )
        }
      </div>
      <p>--------------------------------</p>
      <div>
        <p>총 강의 수 : {state.totalQuantity}</p>
        <p>총 강의 수 : {state.totalPrice}</p>
      </div>
    </div>
  )
}