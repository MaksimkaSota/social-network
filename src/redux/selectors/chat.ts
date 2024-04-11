import type { AppState } from '../reducers/reducers';

export const messagesSelector = (state: AppState) => state.chat.messages;
export const channelStatusSelector = (state: AppState) => state.chat.channelStatus;
