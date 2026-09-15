import { TASK_ACTIONS } from "./taskTypes";

export default function taskReducer(state, action) {
    switch (action.type) {
        case TASK_ACTIONS.ADD_TASK:
            return [
                ...state,
                {
                    id: state.length > 0 ? state.at(-1).id + 1 : 1,
                    ...action.item
                }
            ]
        case TASK_ACTIONS.TOGGLE_TASK:
            return state.map(item => item.id === action.id ? { ...item, isComplete: !item.isComplete } : item)
        case TASK_ACTIONS.UPDATE_PRIORITY:
            return state.map(item => item.id === action.id ? { ...item, priority: action.priority } : item)
        case TASK_ACTIONS.DELETE_TASK:
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
}

export const initialState = []