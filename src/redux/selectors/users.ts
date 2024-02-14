import { AppState } from '../reducers/reducers';

export const usersSelector = (state: AppState) => state.users.users;
export const pageSelector = (state: AppState) => state.users.page;
export const pageSizeSelector = (state: AppState) => state.users.pageSize;
export const totalCountSelector = (state: AppState) => state.users.totalCount;
export const subscribersIdSelector = (state: AppState) => state.users.subscribersId;
export const followErrorsSelector = (state: AppState) => state.users.followErrors;
export const unfollowErrorsSelector = (state: AppState) => state.users.unfollowErrors;
