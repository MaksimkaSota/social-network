import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { usersReducer } from './users';
import { authReducer } from './auth';
import { loadingReducer } from './loading';

export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer,
  loading: loadingReducer
});
