import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/reducers';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
