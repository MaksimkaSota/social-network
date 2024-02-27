import { AppState } from '../reducers/reducers';

export const usersErrorSelector = (state: AppState) => state.error.SET_USERS;
export const profileErrorSelector = (state: AppState) => state.error.SET_PROFILE;
export const statusErrorSelector = (state: AppState) => state.error.SET_PROFILE_STATUS;
export const photoErrorSelector = (state: AppState) => state.error.SET_PROFILE_PHOTO;
export const dataErrorSelector = (state: AppState) => state.error.SET_PROFILE_DATA;
export const authErrorSelector = (state: AppState) => state.error.SET_AUTH;
