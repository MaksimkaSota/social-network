import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/reducers';

export const store = createStore(rootReducer);
