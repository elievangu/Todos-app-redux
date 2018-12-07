//npm import
import { combineReducers } from 'redux';

//local import
import filterReducer from './filterReducer';
import todoReducer from './todoReducer';

const reducers = combineReducers(
    filterReducer,
    todoReducer);

export default reducers;