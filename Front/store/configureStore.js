import { createStore } from 'redux';
import handleProfile from './reducers/profilReducer';

export default createStore(handleProfile);