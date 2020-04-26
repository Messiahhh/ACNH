import { 
    CHANGE_MONTH,
    CHANGE_PLACE,
    CHANGE_SIZE,
    State,
    ChangeStateAction,
 } from '../types'


const Select = (
    state: State = {
        month: "所有时间",
        place: "所有地点",
        size: "所有大小",
    },
    action: ChangeStateAction
): State => {
    switch(action.type) {
        case CHANGE_MONTH:
            let obj = Object.assign(state, {
                month: action.payload
            })
            console.log(obj);
            
            return obj
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


export default Select
