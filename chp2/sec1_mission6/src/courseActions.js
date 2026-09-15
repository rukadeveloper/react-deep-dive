import { COURSE_TYPES } from "./courseTypes";

export function increaseId(id) {
    return { type: COURSE_TYPES.INCREMENT, id }
}

export function decreaseId(id) {
    return { type: COURSE_TYPES.DECREMENT, id }
}

export function removeId(id) {
    return { type: COURSE_TYPES.REMOVE, id }
}