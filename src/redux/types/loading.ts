import {
  SetAuthFailureAction,
  SetAuthRequestAction,
  SetAuthSuccessCorrectAction,
  SetAuthSuccessIncorrectAction,
} from './auth';
import {
  SetDataFailureAction,
  SetDataRequestAction,
  SetDataSuccessAction,
  SetPhotoFailureAction,
  SetPhotoRequestAction,
  SetPhotoSuccessAction,
  SetProfileFailureAction,
  SetProfileRequestAction,
  SetProfileSuccessAction,
  SetStatusFailureAction,
  SetStatusRequestAction,
  SetStatusSuccessAction,
} from './profile';

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
  | SetAuthFailureAction
  | SetProfileRequestAction
  | SetProfileSuccessAction
  | SetProfileFailureAction
  | SetStatusRequestAction
  | SetStatusSuccessAction
  | SetStatusFailureAction
  | SetPhotoRequestAction
  | SetPhotoSuccessAction
  | SetPhotoFailureAction
  | SetDataRequestAction
  | SetDataSuccessAction
  | SetDataFailureAction;
