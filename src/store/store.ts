import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';

const middlewares = [thunk];
const composeEnhancers = compose;

if (__DEV__) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({});
  middlewares.push(logger);
}

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
