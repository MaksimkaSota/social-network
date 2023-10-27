import {
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  SET_AUTH_USER_PHOTO,
  RESET_AUTH_DATA,
} from '../types/auth';

export const setAuthRequest = () => ({type: SET_AUTH_REQUEST});
export const setAuthSuccess = (data) => ({type: SET_AUTH_SUCCESS, payload: data});
export const setAuthFailure = () => ({type: SET_AUTH_FAILURE});
export const setAuthUserPhoto = (profile) => ({type: SET_AUTH_USER_PHOTO, payload: profile});
export const resetAuthData = () => ({type: RESET_AUTH_DATA});
