import { ADD_MESSAGE } from '../types/messages';

export const addMessage = (text) => ({type: ADD_MESSAGE, payload: text});
