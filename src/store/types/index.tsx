export const CHANGE_MONTH = "CHANGE_MONTH"
export const CHANGE_PLACE = "CHANGE_PLACE"
export const CHANGE_SIZE = "CHANGE_SIZE"

export interface State {
    month: string,
    place: string,
    size: string,
}

export interface ChangeStateAction {
    type: string,
    payload: string, 
}