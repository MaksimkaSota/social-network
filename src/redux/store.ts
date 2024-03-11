import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
