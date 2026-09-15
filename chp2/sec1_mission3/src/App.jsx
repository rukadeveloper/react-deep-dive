import { useReducer } from 'react'
import ticketReducer from './reducer/ticketReducer'
import { initialState } from './data/initialState'
import { ACTION_TYPES } from './type/actionTypes'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(ticketReducer, initialState)

  const selectedSeats = state.seats.filter(s => s.isSelected)
  const isVip = state.classes === 'VIP'

  const handleToggleSeat = (seatName) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_SEAT, payload: seatName })
  }

  const handleToggleVip = () => {
    dispatch({ type: ACTION_TYPES.TOGGLE_VIP })
  }

  return (
    <div className="ticket-app">
      <h1>🎬 스마트 티켓 예매 시스템</h1>

      <button className="vip-toggle" onClick={handleToggleVip}>
        {isVip ? '👑 VIP 회원 (등급 전환)' : '👤 일반 회원 (등급 전환)'}
      </button>

      <h2>좌석 선택 (최대 4석)</h2>
      <div className="seat-list">
        {state.seats.map(seat => (
          <button
            key={seat.name}
            className={`seat ${seat.isSelected ? 'selected' : ''}`}
            onClick={() => handleToggleSeat(seat.name)}
          >
            {seat.name}
          </button>
        ))}
      </div>

      <hr />

      <p>
        선택된 좌석:{' '}
        {selectedSeats.length > 0
          ? selectedSeats.map(s => s.name).join(', ')
          : '없음'}
      </p>
      <p>
        사용자 등급: {isVip ? 'VIP (20% 할인 적용 중)' : '일반'}
      </p>

      <hr />

      <p className="total-amount">
        최종 결제 금액: {state.price.toLocaleString()}원
      </p>
    </div>
  )
}
