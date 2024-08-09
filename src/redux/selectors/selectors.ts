import type { AppState } from '../reducers/reducers';

export const authSelector = (state: AppState) => state.auth;
export const profileSelector = (state: AppState) => state.profile;
export const publicationsSelector = (state: AppState) => state.publications;
export const usersSelector = (state: AppState) => state.users;
export const chatSelector = (state: AppState) => state.chat;
export const viewSelector = (state: AppState) => state.view;
