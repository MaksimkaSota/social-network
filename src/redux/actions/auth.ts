import {
  AuthActionType,
  AuthData,
  resetAuthDataAction,
  SetAuthFailureAction,
  SetAuthRequestAction,
  SetAuthSuccessCorrectAction,
  SetAuthSuccessIncorrectAction,
  SetAuthUserPhotoAction,
  setAuthUserPhotoErrorAction,
  setCaptchaUrlAction,
  setLogoutErrorAction,
} from '../types/auth';
import { IAuthData } from '../../api/types/auth';
import { ErrorType } from '../types/error';
import { Nullable } from '../../utils/types/common';

export const setAuthRequest = (): SetAuthRequestAction => ({ type: AuthActionType.SET_AUTH_REQUEST });
export const setAuthSuccessCorrect = (data: IAuthData): SetAuthSuccessCorrectAction => ({
  type: AuthActionType.SET_AUTH_SUCCESS_CORRECT,
  payload: data,
});
export const setAuthSuccessIncorrect = (incorrectAuthText: string): SetAuthSuccessIncorrectAction => ({
  type: AuthActionType.SET_AUTH_SUCCESS_INCORRECT,
  payload: incorrectAuthText,
});
export const setAuthFailure = (code: number, message: string): SetAuthFailureAction => ({
  type: AuthActionType.SET_AUTH_FAILURE,
  payload: { code, message },
});
export const setAuthUserPhoto = (photo: Nullable<string>): SetAuthUserPhotoAction => ({
  type: AuthActionType.SET_AUTH_PHOTO,
  payload: photo,
});
export const setAuthUserPhotoError = (code: number, message: string): setAuthUserPhotoErrorAction => ({
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
}: AuthData): resetAuthDataAction => ({
  type: AuthActionType.RESET_AUTH_DATA,
  payload: { id, email, login, isAuth, authUserPhoto, captchaUrl },
});
export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlAction => ({
  type: AuthActionType.SET_AUTH_CAPTCHA_URL,
  payload: captchaUrl,
});
export const setLogoutError = (error: ErrorType): setLogoutErrorAction => ({
  type: AuthActionType.SET_AUTH_LOGOUT_ERROR,
  payload: error,
});
