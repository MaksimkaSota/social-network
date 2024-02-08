import { SetAuthFailureAction } from './auth';
import {
  SetDataFailureAction,
  SetPhotoFailureAction,
  SetProfileFailureAction,
  SetStatusFailureAction,
} from './profile';
import { SetUsersFailureAction } from './users';

export type ErrorType = {
  code: number;
  message: string;
};

export type ErrorState = {
  SET_USERS: ErrorType | null;
  SET_PROFILE: ErrorType | null;
  SET_PROFILE_STATUS: ErrorType | null;
  SET_PROFILE_PHOTO: ErrorType | null;
  SET_PROFILE_DATA: ErrorType | null;
  SET_AUTH: ErrorType | null;
};

export type ErrorAction =
  | SetAuthFailureAction
  | SetProfileFailureAction
  | SetStatusFailureAction
  | SetPhotoFailureAction
  | SetDataFailureAction
  | SetUsersFailureAction;
