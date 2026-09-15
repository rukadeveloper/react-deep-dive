import { useState, useReducer } from "react"
import officeReducer from "../reducer/officeReducer"

export default function OfficeControl() {
    const initialState = {
        temperature: 22,
        humidity: 45
    }

    const [state, dispatch] = useReducer(officeReducer, initialState)

    const [temperatureValue, setTemperatureValue] = useState(0)
    const [humidityValue, setHumidityValue] = useState(0)

    return (
        <div>
            <h1>SMART OFFICE 제어 시스템</h1>
            <p>현재 온도: {state.temperature}'C | 현재 습도: {state.humidity}%</p>
            <div id="input_area">
                <div className="temperature">
                    <input type="number" value={temperatureValue} onChange={(e) => { setTemperatureValue(e.target.value) }} />
                    <span>(온도 입력)</span>
                    <button onClick={() => { dispatch({ type: "CHANGE_TEMP", payload: temperatureValue }) }}>[온도설정버튼]</button>
                </div>
                <div className="humidity">
                    <input type="number" value={humidityValue} onChange={(e) => { setHumidityValue(e.target.value) }} />
                    <span>(습도 입력)</span>
                    <button onClick={() => { dispatch({ type: "CHANGE_HUMIDITY", payload: humidityValue }) }}>[습도설정버튼]</button>
                </div>
            </div>
        </div>
    )
}