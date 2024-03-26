import type { ChatAction, ChatState } from '../types/chat';
import { ChatActionType } from '../types/chat';

const initialState: ChatState = {
  messages: [],
  channelStatus: 'pending',
};

export const chatReducer = (state: ChatState = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ChatActionType.SET_CHAT_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
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
