import { combineReducers } from 'redux';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import { profileReducer } from './profile';
import { publicationsReducer } from './publications';
import { usersReducer } from './users';
import { authReducer } from './auth';
import { loadingReducer } from './loading';
import { errorReducer } from './error';
import { chatReducer } from './chat';
import { viewReducer } from './view';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  publications: publicationsReducer,
  users: usersReducer,
  chat: chatReducer,
  loading: loadingReducer,
  error: errorReducer,
  view: viewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppState, unknown, AnyAction>;
