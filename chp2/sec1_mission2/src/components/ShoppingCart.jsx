import { useReducer } from "react"
import cartReducer from "../reducer/cartReducer"
import { initialCartData } from "../data/initialCartData"

export default function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialCartData)

    const addRandomProduct = () => {
        dispatch({
            type: "ADD_ITEM", payload: {
                cartId: state.datas.length > 0 ? state.datas.at(-1).cartId + 1 : 1,
                productIcon: '🍇',
                productName: '포도',
                price: Math.floor(Math.random() * 10000)
            }
        })
    }

    const deleteProduct = (cartId) => {
        dispatch({ type: "REMOVE_ITEM", payload: cartId })
    }

    return (
        <div>
            <h1>🛒 프로 장바구니 (Action & Payload)</h1>
            <button onClick={addRandomProduct}>랜덤 상품 추가하기 [클릭 시 하단 목록 추가]</button>
            <div className="lists">
                {state.datas.map(d => (
                    <div key={d.cartId} style={{ display: 'flex' }}>
                        <span>{d.productIcon}</span>
                        <span>{d.productName}({d.price.toLocaleString()}원)</span>
                        <button onClick={() => deleteProduct(d.cartId)}>삭제 버튼</button>
                    </div>
                ))}
            </div>
            <p>총 수량: {state.totalQuantity} | 총 결제 금액: {state.totalPrice.toLocaleString()}원</p>
        </div>
    )
}