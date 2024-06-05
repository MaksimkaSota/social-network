import type { AppState } from '../reducers/reducers';

export const authSelector = (state: AppState) => state.auth;
export const profileSelector = (state: AppState) => state.profile;
export const dialogsSelector = (state: AppState) => state.dialogs;
export const usersSelector = (state: AppState) => state.users;
export const chatSelector = (state: AppState) => state.chat;
