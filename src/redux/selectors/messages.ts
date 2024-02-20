import { AppState } from '../reducers/reducers';

export const dialogsSelector = (state: AppState) => state.messages.dialogs;
export const messagesSelector = (state: AppState) => state.messages.messages;
