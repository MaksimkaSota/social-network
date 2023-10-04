import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { usersReducer } from './users';

export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  users: usersReducer
});
