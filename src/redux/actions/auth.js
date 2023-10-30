import {
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS_CORRECT,
  SET_AUTH_SUCCESS_INCORRECT,
  SET_AUTH_USER_PHOTO,
  RESET_AUTH_DATA
} from '../types/auth';

export const setAuthRequest = () => ({type: SET_AUTH_REQUEST});
export const setAuthSuccessCorrect = (data) => ({type: SET_AUTH_SUCCESS_CORRECT, payload: data});
export const setAuthSuccessIncorrect = (incorrectAuthText) => ({
  type: SET_AUTH_SUCCESS_INCORRECT,
  payload: incorrectAuthText
});
export const setAuthUserPhoto = (photo) => ({type: SET_AUTH_USER_PHOTO, payload: photo});
export const resetAuthData = (id, email, login, isAuth, authUserPhoto) => ({
  type: RESET_AUTH_DATA,
  payload: {id, email, login, isAuth, authUserPhoto}
});
