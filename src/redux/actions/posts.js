import { ADD_POST, DELETE_POST } from '../types/posts';

export const addPost = (text) => ({type: ADD_POST, payload: text});
export const deletePost = (id) => ({type: DELETE_POST, payload: id});
