import { IAuthData } from '../../api/types/auth';
import { ErrorType } from './error';

export type AuthState = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  authUserPhoto: string;
  authUserPhotoError: ErrorType | null;
  incorrectAuthText: string;
  captchaUrl: string;
  logoutError: ErrorType | null;
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
export type SetAuthUserPhotoAction = { type: AuthActionType.SET_AUTH_PHOTO; payload: string };
export type setAuthUserPhotoErrorAction = { type: AuthActionType.SET_AUTH_PHOTO_ERROR; payload: ErrorType };
type ResetData = {
  id: null;
  email: null;
  login: null;
  isAuth: boolean;
  authUserPhoto: string;
  captchaUrl: string;
};
export type resetAuthDataAction = { type: AuthActionType.RESET_AUTH_DATA; payload: ResetData };
export type setCaptchaUrlAction = { type: AuthActionType.SET_AUTH_CAPTCHA_URL; payload: string };
export type setLogoutErrorAction = { type: AuthActionType.SET_AUTH_LOGOUT_ERROR; payload: ErrorType };

export type AuthAction =
  | SetAuthRequestAction
  | SetAuthSuccessCorrectAction
  | SetAuthSuccessIncorrectAction
  | SetAuthFailureAction
  | SetAuthUserPhotoAction
  | setAuthUserPhotoErrorAction
  | resetAuthDataAction
  | setCaptchaUrlAction
  | setLogoutErrorAction;
