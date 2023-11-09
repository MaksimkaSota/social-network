import { SET_PROFILE_REQUEST, SET_PROFILE_SUCCESS, SET_STATUS_REQUEST, SET_STATUS_SUCCESS } from '../types/profile';

export const setProfileRequest = () => ({type: SET_PROFILE_REQUEST});
export const setProfileSuccess = (profile) => ({type: SET_PROFILE_SUCCESS, payload: profile});
export const setStatusRequest = () => ({type: SET_STATUS_REQUEST});
export const setStatusSuccess = (status) => ({type: SET_STATUS_SUCCESS, payload: status});
