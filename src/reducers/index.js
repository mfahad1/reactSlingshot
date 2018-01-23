import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getAllScore } from './getAllScore';
const rootReducer = combineReducers({
  routing: routerReducer,
  getAllScore
});

export default rootReducer;
