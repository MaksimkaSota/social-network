import { POSTS_ADD_POST, POSTS_DELETE_POST } from '../types/posts';

export const addPost = (text) => ({type: POSTS_ADD_POST, payload: text});
export const deletePost = (id) => ({type: POSTS_DELETE_POST, payload: id});
