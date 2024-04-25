import type { AppState } from '../reducers/reducers';

export const authSelector = (state: AppState) => state.auth;
export const chatSelector = (state: AppState) => state.chat;
export const messagesSelector = (state: AppState) => state.messages;
export const postsSelector = (state: AppState) => state.posts;
export const profileSelector = (state: AppState) => state.profile;
export const usersSelector = (state: AppState) => state.users;
