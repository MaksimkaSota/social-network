import {
  ADD_POST,
  SET_PROFILE,
  TOGGLE_IS_FETCHING_PROFILE,
  SET_STATUS,
  TOGGLE_IS_FETCHING_STATUS
} from '../types/profile';

export const addPost = (text) => ({type: ADD_POST, payload: text});
export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const toggleIsFetchingProfile = (isFetching) => ({type: TOGGLE_IS_FETCHING_PROFILE, payload: isFetching});
export const setStatus = (status) => ({type: SET_STATUS, payload: status});
export const toggleIsFetchingStatus = (isFetching) => ({type: TOGGLE_IS_FETCHING_STATUS, payload: isFetching});
