import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { usersReducer } from './users';
import { authReducer } from './auth';
import { initialReducer } from './initial';
import { loadingReducer } from './loading';

export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer,
  initial: initialReducer,
  loading: loadingReducer
});
