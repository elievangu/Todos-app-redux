//npm import
import { combineReducers } from 'redux';

//local import
import filterReducer from './filterReducer';
import todos from './todoReducer';

const reducers = combineReducers({
    filterReducer,
    todos});

export default reducers;