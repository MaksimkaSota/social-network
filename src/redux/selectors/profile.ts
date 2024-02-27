import { AppState } from '../reducers/reducers';

export const profileSelector = (state: AppState) => state.profile.profile;
export const statusSelector = (state: AppState) => state.profile.status;
