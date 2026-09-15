import { CAFETERIA_ACTIONS } from "./cafeteriaTypes";

export default function cafeteriaReducer(state, action) {
    switch (action.type) {
        case CAFETERIA_ACTIONS.ADD_RICE:
            return { ...state, rice: state.rice + action.amount }
        case CAFETERIA_ACTIONS.REFILL_SOUP:
            return { ...state, soup: state.soup + action.amount }
        case CAFETERIA_ACTIONS.CHANGE_MENU:
            return { ...state, mainMenu: action.newMenu }
        default:
            return state
    }
}

export const initialState = {
    rice: 20,
    soup: 30,
    mainMenu: '김치찌개'
}