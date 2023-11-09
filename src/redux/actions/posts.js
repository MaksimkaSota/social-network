import { ADD_POST } from '../types/posts';

export const addPost = (text) => ({type: ADD_POST, payload: text});
