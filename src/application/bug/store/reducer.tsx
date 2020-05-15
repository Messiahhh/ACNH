import {
    StateType
} from '../type'

import { 
    ActionType,
} from '../../../common/type'

import {
    CHANGE_BUG_MONTH,
} from '../../../common/constant'


const fish = (state: StateType = {
    month: "所有时间",
}, action: ActionType) => {
    switch(action.type) {
        case CHANGE_BUG_MONTH:
            return Object.assign(state, {
                month: action.payload
            })
        default:
            return state
    }
}

export default fish