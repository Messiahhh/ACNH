import {
    CHANGE_BUG_MONTH,
} from '../../../common/constant'

export function changeMonth(payload: string) {
    return {
        type: CHANGE_BUG_MONTH,
        payload,
    }
}
