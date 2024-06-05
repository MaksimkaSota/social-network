import type { Dispatch } from 'react';
import type {
  ChannelStatus,
  ChannelStatusSubscriber,
  MessagesSubscriber,
  Nullable,
  ThunkType,
} from '../../utils/types/common';
import type { ChatAction } from '../types/chat';
import { chatAPI } from '../../api/webSocket/chat';
import { setChannelStatus, setMessages } from '../actions/chat';
import type { IChatMessage } from '../../utils/types/api';

let messageHandler: Nullable<MessagesSubscriber> = null;
export const messageHandlerCreator = (dispatch: Dispatch<ChatAction>) => {
  if (messageHandler === null) {
    messageHandler = (messages: IChatMessage[]): void => {
      dispatch(setMessages(messages));
    };
  }
  return messageHandler;
};

let channelStatusHandler: Nullable<ChannelStatusSubscriber> = null;
export const channelStatusHandlerCreator = (dispatch: Dispatch<ChatAction>) => {
  if (channelStatusHandler === null) {
    channelStatusHandler = (status: ChannelStatus): void => {
      dispatch(setChannelStatus(status));
    };
  }
  return channelStatusHandler;
};

export const startMessagesListening = (): ThunkType<ChatAction> => {
  return async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('receiveMessage', messageHandlerCreator(dispatch));
    chatAPI.subscribe('changeChannelStatus', channelStatusHandlerCreator(dispatch));
  };
};

export const stopMessagesListening = (): ThunkType<ChatAction> => {
  return async (dispatch) => {
    chatAPI.unsubscribe('receiveMessage', messageHandlerCreator(dispatch));
    chatAPI.unsubscribe('changeChannelStatus', channelStatusHandlerCreator(dispatch));
    chatAPI.stop();
  };
};

export const sendMessage = (message: string): ThunkType<ChatAction> => {
  return async () => {
    chatAPI.sendMessage(message);
  };
};
