import { SET_POST, ADD_POST, SET_PROFILE } from '../types/profile';
import { TOGGLE_IS_FETCHING } from '../types/profile';

export const setPost = (text) => ({type: SET_POST, payload: text});
export const addPost = () => ({type: ADD_POST});
export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
