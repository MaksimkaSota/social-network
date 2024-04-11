import type { SetMessagesAction, SetChannelStatusAction, ResetMessagesAction } from '../types/chat';
import type { IChatMessage } from '../../utils/types/api';
import type { ChannelStatus } from '../../utils/types/common';
import { ChatActionType } from '../types/chat';

export const setMessages = (messages: Array<IChatMessage>): SetMessagesAction => ({
  type: ChatActionType.SET_CHAT_MESSAGES,
  payload: messages,
});
export const setChannelStatus = (status: ChannelStatus): SetChannelStatusAction => ({
  type: ChatActionType.SET_CHAT_CHANNEL_STATUS,
  payload: status,
});
export const resetMessages = (): ResetMessagesAction => ({ type: ChatActionType.RESET_CHAT_MESSAGES });
