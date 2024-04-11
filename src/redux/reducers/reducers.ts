import { combineReducers } from 'redux';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import { profileReducer } from './profile';
import { messagesReducer } from './messages';
import { postsReducer } from './posts';
import { usersReducer } from './users';
import { authReducer } from './auth';
import { loadingReducer } from './loading';
import { errorReducer } from './error';
import { chatReducer } from './chat';

export const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  posts: postsReducer,
  users: usersReducer,
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
  chat: chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppState, unknown, AnyAction>;
