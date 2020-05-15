import { 
    StateType,
} from '../type'
import {
    ActionType,
} from '../../../common/type'
import {
    CHANGE_FISH_MONTH,
    CHANGE_SIZE,
    CHANGE_PLACE,
} from '../../../common/constant'


const fish = (state: StateType = {
    month: "所有时间",
    place: "所有地点",
    size: "所有大小",
}, action: ActionType) => {
    switch(action.type) {
        case CHANGE_FISH_MONTH:
            return Object.assign(state, {
                month: action.payload
            })
        case CHANGE_PLACE:
            return Object.assign(state, {
                place: action.payload
            })
        case CHANGE_SIZE:
            return Object.assign(state, {
                size: action.payload
            })
        default:
            return state
    }
}

export default fish