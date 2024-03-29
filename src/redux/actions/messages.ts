import { MessagesActionType } from '../types/messages';
import type { AddMessageAction, DeleteMessageAction } from '../types/messages';

export const addMessage = (text: string): AddMessageAction => ({
  type: MessagesActionType.ADD_MESSAGES_MESSAGE,
  payload: text,
});
export const deleteMessage = (id: number): DeleteMessageAction => ({
  type: MessagesActionType.DELETE_MESSAGES_MESSAGE,
  payload: id,
});
