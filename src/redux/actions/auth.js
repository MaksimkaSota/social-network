import {
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS_CORRECT,
  SET_AUTH_SUCCESS_INCORRECT,
  SET_AUTH_FAILURE,
  SET_AUTH_PHOTO,
  RESET_AUTH_DATA,
  SET_AUTH_CAPTCHA_URL,
  SET_AUTH_LOGOUT_ERROR
} from '../types/auth';

export const setAuthRequest = () => ({type: SET_AUTH_REQUEST});
export const setAuthSuccessCorrect = (data) => ({type: SET_AUTH_SUCCESS_CORRECT, payload: data});
export const setAuthSuccessIncorrect = (incorrectAuthText) => ({
  type: SET_AUTH_SUCCESS_INCORRECT,
  payload: incorrectAuthText
});
export const setAuthFailure = (code, message) => ({type: SET_AUTH_FAILURE, payload: {code, message}});
export const setAuthUserPhoto = (photo) => ({type: SET_AUTH_PHOTO, payload: photo});
export const resetAuthData = ({id, email, login, isAuth, authUserPhoto, captchaUrl}) => ({
  type: RESET_AUTH_DATA,
  payload: {id, email, login, isAuth, authUserPhoto, captchaUrl}
});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_AUTH_CAPTCHA_URL, payload: captchaUrl});
export const setLogoutError = (error) => ({type: SET_AUTH_LOGOUT_ERROR, payload: error});
