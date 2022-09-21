import {combineReducers} from 'redux'
import accountReducer from './accountReducers'

const reducers = combineReducers({
    account: accountReducer
})

export default reducers;