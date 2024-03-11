import type { AuthData, ErrorType, Nullable } from '../../utils/types/common';
import type { IAuthData } from '../../utils/types/api';

export type AuthState = {
  id: Nullable<number>;
  email: Nullable<string>;
  login: Nullable<string>;
  isAuth: boolean;
  authUserPhoto: Nullable<string>;
  authUserPhotoError: Nullable<ErrorType>;
  incorrectAuthText: string;
  captchaUrl: string;
  logoutError: Nullable<ErrorType>;
};

export enum AuthActionType {
  SET_AUTH_REQUEST = 'SET_AUTH_REQUEST',
  SET_AUTH_SUCCESS_CORRECT = 'SET_AUTH_SUCCESS_CORRECT',
  SET_AUTH_SUCCESS_INCORRECT = 'SET_AUTH_SUCCESS_INCORRECT',
  SET_AUTH_FAILURE = 'SET_AUTH_FAILURE',
  SET_AUTH_PHOTO = 'SET_AUTH_PHOTO',
  SET_AUTH_PHOTO_ERROR = 'SET_AUTH_PHOTO_ERROR',
  RESET_AUTH_DATA = 'RESET_AUTH_DATA',
  SET_AUTH_CAPTCHA_URL = 'SET_AUTH_CAPTCHA_URL',
  SET_AUTH_LOGOUT_ERROR = 'SET_AUTH_LOGOUT_ERROR',
}

export type SetAuthRequestAction = { type: AuthActionType.SET_AUTH_REQUEST };
export type SetAuthSuccessCorrectAction = { type: AuthActionType.SET_AUTH_SUCCESS_CORRECT; payload: IAuthData };
export type SetAuthSuccessIncorrectAction = { type: AuthActionType.SET_AUTH_SUCCESS_INCORRECT; payload: string };
export type SetAuthFailureAction = { type: AuthActionType.SET_AUTH_FAILURE; payload: ErrorType };
export type SetAuthUserPhotoAction = { type: AuthActionType.SET_AUTH_PHOTO; payload: Nullable<string> };
export type SetAuthUserPhotoErrorAction = { type: AuthActionType.SET_AUTH_PHOTO_ERROR; payload: ErrorType };
export type ResetAuthDataAction = { type: AuthActionType.RESET_AUTH_DATA; payload: AuthData };
export type SetCaptchaUrlAction = { type: AuthActionType.SET_AUTH_CAPTCHA_URL; payload: string };
export type SetLogoutErrorAction = { type: AuthActionType.SET_AUTH_LOGOUT_ERROR; payload: Nullable<ErrorType> };

export type AuthAction =
  | SetAuthRequestAction
  | SetAuthSuccessCorrectAction
  | SetAuthSuccessIncorrectAction
  | SetAuthFailureAction
  | SetAuthUserPhotoAction
  | SetAuthUserPhotoErrorAction
  | ResetAuthDataAction
  | SetCaptchaUrlAction
  | SetLogoutErrorAction;
