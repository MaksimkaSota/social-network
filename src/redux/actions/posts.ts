import { ADD_POSTS_POST, DELETE_POSTS_POST } from '../types/posts';

export const addPost = (text) => ({ type: ADD_POSTS_POST, payload: text });
export const deletePost = (id) => ({ type: DELETE_POSTS_POST, payload: id });
