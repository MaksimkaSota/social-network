import type { IChatMessage } from '../../utils/types/api';
import type { ChannelStatus } from '../../utils/types/common';

export type ChatState = {
  messages: Array<IChatMessage>;
  channelStatus: ChannelStatus;
};

export enum ChatActionType {
  SET_CHAT_MESSAGES = 'RECEIVE_CHAT_MESSAGES',
  SET_CHAT_CHANNEL_STATUS = 'SET_CHAT_WS_CHANNEL_STATUS',
}

export type SetMessagesAction = { type: ChatActionType.SET_CHAT_MESSAGES; payload: Array<IChatMessage> };
export type SetChannelStatusAction = { type: ChatActionType.SET_CHAT_CHANNEL_STATUS; payload: ChannelStatus };

export type ChatAction = SetMessagesAction | SetChannelStatusAction;
