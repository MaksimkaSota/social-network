import { SET_MESSAGE, ADD_MESSAGE } from '../types/messages';

export const setMessage = (text) => ({type: SET_MESSAGE, payload: text});
export const addMessage = () => ({type: ADD_MESSAGE});
