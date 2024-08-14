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
export type PublicationType = {
  id: number;
  text: string;
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
export type LanguageLocalizationType = {
  [textKey: string]: { [languageKey: string]: string };
};
export type ObjectType = { [field: string]: any };

export type ChannelStatus = 'pending' | 'fulfilled' | 'received';
export type EventsNames = 'receiveMessage' | 'changeChannelStatus';
export type MessagesSubscriber = (messages: IChatMessage[]) => void;
export type ChannelStatusSubscriber = (status: ChannelStatus) => void;
export type SubscribersType = {
  receiveMessage: MessagesSubscriber[];
  changeChannelStatus: ChannelStatusSubscriber[];
};

export type ChatMessageWithId = IChatMessage & { id: string };
