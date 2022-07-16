import { combineReducers } from 'redux';
import AppReducer from './app/app-reducer';

export default combineReducers({
  app: AppReducer,
});
