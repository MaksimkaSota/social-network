import type { AppState } from '../reducers/reducers';

export const messageSelector = (state: AppState) => state.chat.messages;
export const channelStatusSelector = (state: AppState) => state.chat.channelStatus;
