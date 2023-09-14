import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';

export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
});
