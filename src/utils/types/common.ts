import type { Action } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { AppState } from '../../redux/reducers/reducers';
import type { IChatMessage } from './api';

export type Nullable<T> = T | null;
export type ThunkType<T extends Action> = ThunkAction<Promise<void>, AppState, unknown, T>;

export type AuthData = {
  id: null;
  email: null;
  login: null;
  isAuth: boolean;
  authUserPhoto: string;
  captchaUrl: string;
};
export type ErrorType = {
  code?: number;
  message: string;
};
export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  messageText: string;
};
export type PostType = {
  id: number;
  postText: string;
};
export type FollowUnfollowErrorType = ErrorType & { id: number };
export type SubscribersId = {
  isFetching: boolean;
  id: number;
};
export type FilterType = {
  term: string;
  friend: string;
};

export type ChannelStatus = 'pending' | 'fulfilled' | 'received';
export type EventsNames = 'receiveMessage' | 'changeChannelStatus';
export type MessagesSubscriber = (messages: Array<IChatMessage>) => void;
export type ChannelStatusSubscriber = (status: ChannelStatus) => void;
export type SubscribersType = {
  receiveMessage: Array<MessagesSubscriber>;
  changeChannelStatus: Array<ChannelStatusSubscriber>;
};
