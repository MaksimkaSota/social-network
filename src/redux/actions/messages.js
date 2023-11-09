import { ADD_MESSAGE, DELETE_MESSAGE } from '../types/messages';

export const addMessage = (text) => ({type: ADD_MESSAGE, payload: text});
export const deleteMessage = (id) => ({type: DELETE_MESSAGE, payload: id});
