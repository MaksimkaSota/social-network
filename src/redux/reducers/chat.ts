import type { ChatAction, ChatState } from '../types/chat';
import { ChatActionType } from '../types/chat';
import { addUniqueIdInObject } from '../../utils/helpers/reducersHelpers';
import type { ChatMessageWithId } from '../../utils/types/common';

const initialState: ChatState = {
  messages: [],
  channelStatus: 'pending',
};

export const chatReducer = (state: ChatState = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ChatActionType.SET_CHAT_MESSAGES: {
      const messagesWithId: Array<ChatMessageWithId> = addUniqueIdInObject(action.payload);
      const allMessages: Array<ChatMessageWithId> = [...state.messages, ...messagesWithId];
      const last100Messages: Array<ChatMessageWithId> = allMessages.filter(
        (message: ChatMessageWithId, index: number, array: Array<ChatMessageWithId>): boolean =>
          index >= array.length - 100
      );
      return {
        ...state,
        messages: last100Messages,
      };
    }
    case ChatActionType.SET_CHAT_CHANNEL_STATUS:
      return {
        ...state,
        channelStatus: action.payload,
      };
    case ChatActionType.RESET_CHAT_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
