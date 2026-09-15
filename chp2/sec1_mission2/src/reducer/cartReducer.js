export default function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + action.payload.price,
                datas: [...state.datas, action.payload]
            }

        case "REMOVE_ITEM":
            return {
                totalQuantity: state.totalQuantity - 1,
                totalPrice: state.totalPrice - state.datas.find(d => d.cartId === action.payload).price,
                datas: [...state.datas.filter(d => d.cartId != action.payload)]
            }

        default:
            return state
    }
}