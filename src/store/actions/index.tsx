import {
    CHANGE_MONTH,
    CHANGE_PLACE,
    CHANGE_SIZE
} from '../types'

export function changeMonth(month: string) {
    return {
        type: CHANGE_MONTH,
        payload: month,
    }
}

export function changePlace(place: string) {
    return {
        type: CHANGE_PLACE,
        payload: place,
    }
}

export function changeSize(size: string) {
    return {
        type: CHANGE_SIZE,
        payload: size,
    }
}


