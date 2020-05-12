import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profilReducer'
import missionsReducer from './reducers/missionsReducer'

const reducers = combineReducers({
    profile: profileReducer,
    missions: missionsReducer
})

export default createStore(reducers);