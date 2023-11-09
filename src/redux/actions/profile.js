import {
  PROFILE_SET_PROFILE_REQUEST,
  PROFILE_SET_PROFILE_SUCCESS,
  PROFILE_SET_STATUS_REQUEST,
  PROFILE_SET_STATUS_SUCCESS
} from '../types/profile';

export const setProfileRequest = () => ({type: PROFILE_SET_PROFILE_REQUEST});
export const setProfileSuccess = (profile) => ({type: PROFILE_SET_PROFILE_SUCCESS, payload: profile});
export const setStatusRequest = () => ({type: PROFILE_SET_STATUS_REQUEST});
export const setStatusSuccess = (status) => ({type: PROFILE_SET_STATUS_SUCCESS, payload: status});
