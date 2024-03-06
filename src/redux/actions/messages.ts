import { ADD_MESSAGES_MESSAGE, DELETE_MESSAGES_MESSAGE } from '../types/messages';

export const addMessage = (text) => ({ type: ADD_MESSAGES_MESSAGE, payload: text });
export const deleteMessage = (id) => ({ type: DELETE_MESSAGES_MESSAGE, payload: id });
