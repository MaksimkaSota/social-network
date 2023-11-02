import {
  SET_USERS_REQUEST,
  SET_USERS_SUCCESS,
  FOLLOW,
  UNFOLLOW,
  SET_PAGE,
  SET_TOTAL_COUNT,
  SET_SUBSCRIBERS_ID
} from '../types/users';

export const setUsersRequest = () => ({type: SET_USERS_REQUEST});
export const setUsersSuccess = (users) => ({type: SET_USERS_SUCCESS, payload: users});
export const follow = (id) => ({type: FOLLOW, payload: id});
export const unfollow = (id) => ({type: UNFOLLOW, payload: id});
export const setPage = (page) => ({type: SET_PAGE, payload: page});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount});
export const setSubscribersId = (isFetching, id) => ({type: SET_SUBSCRIBERS_ID, payload: {isFetching, id}});
