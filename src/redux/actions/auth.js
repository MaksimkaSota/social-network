import {
  AUTH_SET_AUTH_REQUEST,
  AUTH_SET_AUTH_SUCCESS_CORRECT,
  AUTH_SET_AUTH_SUCCESS_INCORRECT,
  AUTH_SET_AUTH_USER_PHOTO,
  AUTH_RESET_AUTH_DATA
} from '../types/auth';

export const setAuthRequest = () => ({type: AUTH_SET_AUTH_REQUEST});
export const setAuthSuccessCorrect = (data) => ({type: AUTH_SET_AUTH_SUCCESS_CORRECT, payload: data});
export const setAuthSuccessIncorrect = (incorrectAuthText) => ({
  type: AUTH_SET_AUTH_SUCCESS_INCORRECT,
  payload: incorrectAuthText
});
export const setAuthUserPhoto = (photo) => ({type: AUTH_SET_AUTH_USER_PHOTO, payload: photo});
export const resetAuthData = ({id, email, login, isAuth, authUserPhoto}) => ({
  type: AUTH_RESET_AUTH_DATA,
  payload: {id, email, login, isAuth, authUserPhoto}
});
