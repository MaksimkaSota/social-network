import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../redux/reducers/reducers';
import { Action } from 'redux';

export type Nullable<T> = T | null;
export type ThunkType<T extends Action> = ThunkAction<Promise<void>, AppState, unknown, T>;

export enum StatusCode {
  success = 0,
  failure = 1,
  required_captcha = 10,
}

export enum RequestState {
  request = 'REQUEST',
  failure = 'FAILURE',
}

export enum RoutePath {
  not_found = '*',
  main = '/',
  profile = '/profile',
  messages = '/messages',
  users = '/users',
  news = '/news',
  musics = '/musics',
  settings = '/settings',
  login = '/login',
}
