import { SET_POST, ADD_POST } from '../types/profile';

export const setPost = (text) => ({type: SET_POST, payload: text});
export const addPost = () => ({type: ADD_POST});
