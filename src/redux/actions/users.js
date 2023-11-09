import {
  USERS_SET_USERS_REQUEST,
  USERS_SET_USERS_SUCCESS,
  USERS_FOLLOW,
  USERS_UNFOLLOW,
  USERS_SET_PAGE,
  USERS_SET_TOTAL_COUNT,
  USERS_SET_SUBSCRIBERS_ID
} from '../types/users';

export const setUsersRequest = () => ({type: USERS_SET_USERS_REQUEST});
export const setUsersSuccess = (users) => ({type: USERS_SET_USERS_SUCCESS, payload: users});
export const follow = (id) => ({type: USERS_FOLLOW, payload: id});
export const unfollow = (id) => ({type: USERS_UNFOLLOW, payload: id});
export const setPage = (page) => ({type: USERS_SET_PAGE, payload: page});
export const setTotalCount = (totalCount) => ({type: USERS_SET_TOTAL_COUNT, payload: totalCount});
export const setSubscribersId = (isFetching, id) => ({type: USERS_SET_SUBSCRIBERS_ID, payload: {isFetching, id}});
