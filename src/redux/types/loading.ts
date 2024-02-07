import {
  SetAuthFailureAction,
  SetAuthRequestAction,
  SetAuthSuccessCorrectAction,
  SetAuthSuccessIncorrectAction,
} from './auth';

export type LoadingState = {
  SET_USERS: boolean;
  SET_PROFILE: boolean;
  SET_PROFILE_STATUS: boolean;
  SET_PROFILE_PHOTO: boolean;
  SET_PROFILE_DATA: boolean;
  SET_AUTH: boolean;
};

export type LoadingAction =
  | SetAuthRequestAction
  | SetAuthSuccessCorrectAction
  | SetAuthSuccessIncorrectAction
  | SetAuthFailureAction;
