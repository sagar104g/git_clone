import { combineReducers } from 'redux';
import repos from './repos';
import profile from './profile';

export default combineReducers({
    repos,
    profile
})