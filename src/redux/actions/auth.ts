import { AuthActionType } from '../types/auth';
import type {
  ResetAuthDataAction,
  SetAuthFailureAction,
  SetAuthRequestAction,
  SetAuthSuccessCorrectAction,
  SetAuthSuccessIncorrectAction,
  SetAuthUserPhotoAction,
  SetAuthUserPhotoErrorAction,
  SetCaptchaUrlAction,
  SetLoginErrorAction,
  SetLogoutErrorAction,
} from '../types/auth';
import type { AuthData, ErrorType, Nullable } from '../../utils/types/common';
import type { IAuthData } from '../../utils/types/api';

export const setAuthRequest = (): SetAuthRequestAction => ({ type: AuthActionType.SET_AUTH_REQUEST });
export const setAuthSuccessCorrect = (data: IAuthData): SetAuthSuccessCorrectAction => ({
  type: AuthActionType.SET_AUTH_SUCCESS_CORRECT,
  payload: data,
});
export const setAuthSuccessIncorrect = (incorrectAuthText: string): SetAuthSuccessIncorrectAction => ({
  type: AuthActionType.SET_AUTH_SUCCESS_INCORRECT,
  payload: incorrectAuthText,
});
export const setAuthFailure = (message: string, code?: number): SetAuthFailureAction => ({
  type: AuthActionType.SET_AUTH_FAILURE,
  payload: { code, message },
});
export const setAuthUserPhoto = (photo: Nullable<string>): SetAuthUserPhotoAction => ({
  type: AuthActionType.SET_AUTH_PHOTO,
  payload: photo,
});
export const setAuthUserPhotoError = (message: string, code?: number): SetAuthUserPhotoErrorAction => ({
  type: AuthActionType.SET_AUTH_PHOTO_ERROR,
  payload: { code, message },
});
export const resetAuthData = ({
  id,
  email,
  login,
  isAuth,
  authUserPhoto,
  captchaUrl,
}: AuthData): ResetAuthDataAction => ({
  type: AuthActionType.RESET_AUTH_DATA,
  payload: { id, email, login, isAuth, authUserPhoto, captchaUrl },
});
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlAction => ({
  type: AuthActionType.SET_AUTH_CAPTCHA_URL,
  payload: captchaUrl,
});
export const setLoginError = (error: Nullable<ErrorType>): SetLoginErrorAction => ({
  type: AuthActionType.SET_AUTH_LOGIN_ERROR,
  payload: error,
});
export const setLogoutError = (error: Nullable<ErrorType>): SetLogoutErrorAction => ({
  type: AuthActionType.SET_AUTH_LOGOUT_ERROR,
  payload: error,
});
