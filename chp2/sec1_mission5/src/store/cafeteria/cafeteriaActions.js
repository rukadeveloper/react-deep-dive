import { CAFETERIA_ACTIONS } from "./cafeteriaTypes";

export function addAmount(amount, type) {
    return {
        type,
        amount
    }
}

export function changeMenu(menuName) {
    return {
        type: CAFETERIA_ACTIONS.CHANGE_MENU,
        newMenu: menuName
    }
}