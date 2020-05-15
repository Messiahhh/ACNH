import { combineReducers } from 'redux'

import { reducer as fish } from '../application/fish/store'
import { reducer as bug } from '../application/bug/store'

export default combineReducers({
    fish,
    bug,
})