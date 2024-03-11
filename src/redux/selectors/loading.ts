import type { AppState } from '../reducers/reducers';

export const isFetchingUsersSelector = (state: AppState) => state.loading.SET_USERS;
export const isFetchingProfileSelector = (state: AppState) => state.loading.SET_PROFILE;
export const isFetchingStatusSelector = (state: AppState) => state.loading.SET_PROFILE_STATUS;
export const isFetchingPhotoSelector = (state: AppState) => state.loading.SET_PROFILE_PHOTO;
export const isFetchingDataSelector = (state: AppState) => state.loading.SET_PROFILE_DATA;
export const isFetchingAuthSelector = (state: AppState) => state.loading.SET_AUTH;
