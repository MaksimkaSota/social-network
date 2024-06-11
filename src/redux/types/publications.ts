import type { PublicationType } from '../../utils/types/common';

export type PublicationsState = {
  messages: PublicationType[];
  posts: PublicationType[];
};

export enum PublicationsActionType {
  ADD_PUBLICATIONS_MESSAGE = 'ADD_PUBLICATIONS_MESSAGE',
  DELETE_PUBLICATIONS_MESSAGE = 'DELETE_PUBLICATIONS_MESSAGE',
  ADD_PUBLICATIONS_POST = 'ADD_PUBLICATIONS_POST',
  DELETE_PUBLICATIONS_POST = 'DELETE_PUBLICATIONS_POST',
}

export type AddMessageAction = { type: PublicationsActionType.ADD_PUBLICATIONS_MESSAGE; payload: string };
export type DeleteMessageAction = { type: PublicationsActionType.DELETE_PUBLICATIONS_MESSAGE; payload: number };
export type AddPostAction = { type: PublicationsActionType.ADD_PUBLICATIONS_POST; payload: string };
export type DeletePostAction = { type: PublicationsActionType.DELETE_PUBLICATIONS_POST; payload: number };

export type PublicationsAction = AddMessageAction | DeleteMessageAction | AddPostAction | DeletePostAction;
