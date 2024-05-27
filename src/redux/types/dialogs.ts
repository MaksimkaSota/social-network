import type { MessageType, PostType } from '../../utils/types/common';

export type DialogsState = {
  messages: Array<MessageType>;
  posts: Array<PostType>;
};

export enum DialogsActionType {
  ADD_DIALOGS_MESSAGE = 'ADD_DIALOGS_MESSAGE',
  DELETE_DIALOGS_MESSAGE = 'DELETE_DIALOGS_MESSAGE',
  ADD_DIALOGS_POST = 'ADD_DIALOGS_POST',
  DELETE_DIALOGS_POST = 'DELETE_DIALOGS_POST',
}

export type AddMessageAction = { type: DialogsActionType.ADD_DIALOGS_MESSAGE; payload: string };
export type DeleteMessageAction = { type: DialogsActionType.DELETE_DIALOGS_MESSAGE; payload: number };
export type AddPostAction = { type: DialogsActionType.ADD_DIALOGS_POST; payload: string };
export type DeletePostAction = { type: DialogsActionType.DELETE_DIALOGS_POST; payload: number };

export type DialogsAction = AddMessageAction | DeleteMessageAction | AddPostAction | DeletePostAction;
