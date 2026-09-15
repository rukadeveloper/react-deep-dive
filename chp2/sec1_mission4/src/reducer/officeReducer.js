export default function officeReducer(state, action) {
    switch (action.type) {
        case "CHANGE_TEMP":
            return { ...state, temperature: action.payload }
        case "CHANGE_HUMIDITY":
            return { ...state, humidity: action.payload }
        default:
            return state
    }
}