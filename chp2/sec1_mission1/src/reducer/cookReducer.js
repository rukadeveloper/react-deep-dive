export default function cookReducer(state, action) {
    switch (action.type) {
        case "COOK_RICE":
            return { rice: state.rice + 10 }
        case "SERVE_RICE": {
            if (state.rice > 0) {
                return { rice: state.rice - 1 }
            }
            alert("현재 재고가 0입니다!")
            return state
        }
        default:
            return state
    }
}