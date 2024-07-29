import type { AddMessageAction, DeleteMessageAction, AddPostAction, DeletePostAction } from '../types/publications';
import { PublicationsActionType } from '../types/publications';

export const addMessage = (text: string): AddMessageAction => ({
  type: PublicationsActionType.ADD_PUBLICATIONS_MESSAGE,
  payload: text,
});
export const deleteMessage = (id: number): DeleteMessageAction => ({
  type: PublicationsActionType.DELETE_PUBLICATIONS_MESSAGE,
  payload: id,
});

export const addPost = (text: string): AddPostAction => ({
  type: PublicationsActionType.ADD_PUBLICATIONS_POST,
  payload: text,
});
export const deletePost = (id: number): DeletePostAction => ({
  type: PublicationsActionType.DELETE_PUBLICATIONS_POST,
  payload: id,
});
