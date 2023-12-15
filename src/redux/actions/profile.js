import {
  SET_PROFILE_REQUEST,
  SET_PROFILE_SUCCESS,
  SET_PROFILE_FAILURE,
  SET_PROFILE_STATUS_REQUEST,
  SET_PROFILE_STATUS_SUCCESS,
  SET_PROFILE_PHOTO_REQUEST,
  SET_PROFILE_PHOTO_SUCCESS,
  SET_PROFILE_DATA_REQUEST,
  SET_PROFILE_DATA_SUCCESS
} from '../types/profile';

export const setProfileRequest = () => ({type: SET_PROFILE_REQUEST});
export const setProfileSuccess = (profile) => ({type: SET_PROFILE_SUCCESS, payload: profile});
export const setProfileFailure = (code, message) => ({type: SET_PROFILE_FAILURE, payload: {code, message}});
export const setStatusRequest = () => ({type: SET_PROFILE_STATUS_REQUEST});
export const setStatusSuccess = (status) => ({type: SET_PROFILE_STATUS_SUCCESS, payload: status});
export const setPhotoRequest = () => ({type: SET_PROFILE_PHOTO_REQUEST});
export const setPhotoSuccess = (photo) => ({type: SET_PROFILE_PHOTO_SUCCESS, payload: photo});
export const setDataRequest = () => ({type: SET_PROFILE_DATA_REQUEST});
export const setDataSuccess = () => ({type: SET_PROFILE_DATA_SUCCESS});
