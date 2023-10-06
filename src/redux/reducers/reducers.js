import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { usersReducer } from './users';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer
});
