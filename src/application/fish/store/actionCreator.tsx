import {
    CHANGE_FISH_MONTH,
    CHANGE_SIZE,
    CHANGE_PLACE
} from '../../../common/constant'

export function changeMonth(payload: string) {
    return {
        type: CHANGE_FISH_MONTH,
        payload,
    }
}

export function changeSize(payload: string) {
    return {
        type: CHANGE_SIZE,
        payload,
    }
}

export function changePlace(payload: string) {
    return {
        type: CHANGE_PLACE,
        payload,
    }
}