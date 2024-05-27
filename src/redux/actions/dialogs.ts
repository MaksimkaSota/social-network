import type { AddMessageAction, DeleteMessageAction, AddPostAction, DeletePostAction } from '../types/dialogs';
import { DialogsActionType } from '../types/dialogs';

export const addMessage = (text: string): AddMessageAction => ({
  type: DialogsActionType.ADD_DIALOGS_MESSAGE,
  payload: text,
});
export const deleteMessage = (id: number): DeleteMessageAction => ({
  type: DialogsActionType.DELETE_DIALOGS_MESSAGE,
  payload: id,
});

export const addPost = (text: string): AddPostAction => ({ type: DialogsActionType.ADD_DIALOGS_POST, payload: text });
export const deletePost = (id: number): DeletePostAction => ({
  type: DialogsActionType.DELETE_DIALOGS_POST,
  payload: id,
});
