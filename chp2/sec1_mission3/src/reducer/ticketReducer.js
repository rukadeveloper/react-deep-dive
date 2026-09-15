import { ACTION_TYPES } from "../type/actionTypes";

const SEAT_PRICE = 15000;

function calculateTotal(seats, discountRate) {
    const selectedCount = seats.filter(s => s.isSelected).length;
    return selectedCount * SEAT_PRICE * discountRate;
}

export default function ticketReducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_SEAT: {
            const target = state.seats.find(s => s.name === action.payload);

            if (target.isSelected) {
                const nextSeats = state.seats.map(s =>
                    s.name === action.payload ? { ...s, isSelected: false } : s
                );

                return {
                    ...state,
                    seats: nextSeats,
                    price: calculateTotal(nextSeats, state.discountRate)
                };
            }

            const selectedCount = state.seats.filter(s => s.isSelected).length;
            if (selectedCount >= 4) {
                alert('좌석은 최대 4석까지 선택할 수 있습니다.');
                return state;
            }

            const nextSeats = state.seats.map(s =>
                s.name === action.payload ? { ...s, isSelected: true } : s
            );

            return {
                ...state,
                seats: nextSeats,
                price: calculateTotal(nextSeats, state.discountRate)
            };
        }

        case ACTION_TYPES.TOGGLE_VIP: {
            const nextClasses = state.classes === 'VIP' ? 'General' : 'VIP';
            const nextDiscountRate = nextClasses === 'VIP' ? 0.8 : 1;

            return {
                ...state,
                classes: nextClasses,
                discountRate: nextDiscountRate,
                price: calculateTotal(state.seats, nextDiscountRate)
            };
        }

        default:
            return state;
    }
}
