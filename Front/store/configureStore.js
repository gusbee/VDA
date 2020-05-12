import { createStore, combineReducers } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem'
import profileReducer from './reducers/profilReducer'
import missionsReducer from './reducers/missionsReducer'

// Configuration de la persistance des données sur l'appareil
const persistConfig = {
    key: 'lvda',
    storage: ExpoFileSystemStorage
}

export default createStore(persistCombineReducers(persistConfig, {profileReducer, missionsReducer}));