import { COURSE_TYPES } from "./courseTypes";

export default function courseReducer(state, action) {
    switch (action.type) {
        case COURSE_TYPES.INCREMENT: {
            const found = state.lists.find(l => l.id === action.id)

            return {
                ...state,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + found.price,
                lists: state.lists.map(b => b.id === action.id ? { ...b, quantity: b.quantity + 1 } : b)
            }
        }
        case COURSE_TYPES.DECREMENT: {
            const found = state.lists.find(l => l.id === action.id)

            if (found.quantity <= 1) return state
            return {
                ...state,
                totalQuantity: state.totalQuantity - 1,
                totalPrice: state.totalPrice - found.price,
                lists: state.lists.map(b => b.id === action.id ? { ...b, quantity: b.quantity - 1 } : b)
            }
        }
        case COURSE_TYPES.REMOVE: {
            const found = state.lists.find(l => l.id === action.id)

            return {
                ...state,
                totalQuantity: state.totalQuantity - found.quantity,
                totalPrice: state.totalPrice - found.price * found.quantity,
                lists: state.lists.filter(b => b.id !== action.id)
            }
        }
        default:
            return state
    }
}

export const initialState = {
    totalQuantity: 3,
    totalPrice: 140000,
    lists: [
        {
            id: 1,
            name: 'React 마스터 클래스',
            price: 50000,
            quantity: 1
        },
        {
            id: 2,
            name: 'Next.js 실무 가이드',
            price: 45000,
            quantity: 2
        }
    ]
}