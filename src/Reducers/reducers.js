//npm import
import { combineReducers } from 'redux';

//local import
import filterReducer from './filterReducer';
import todos from './todoreducer';

const reducers = combineReducers({
    filterReducer,
    todos});

export default reducers;