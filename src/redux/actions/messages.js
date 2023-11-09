import { MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGE } from '../types/messages';

export const addMessage = (text) => ({type: MESSAGES_ADD_MESSAGE, payload: text});
export const deleteMessage = (id) => ({type: MESSAGES_DELETE_MESSAGE, payload: id});
