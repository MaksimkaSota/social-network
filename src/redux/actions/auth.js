import { RESET_AUTH_DATA, SET_AUTH_DATA, SET_AUTH_USER_PHOTO } from '../types/auth';

export const setAuthData = (data) => ({type: SET_AUTH_DATA, payload: data});
export const setAuthUserPhoto = (profile) => ({type: SET_AUTH_USER_PHOTO, payload: profile});
export const resetAuthData = () => ({type: RESET_AUTH_DATA});
