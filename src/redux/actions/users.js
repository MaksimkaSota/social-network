import {
  SET_USERS_REQUEST,
  SET_USERS_SUCCESS,
  FOLLOW_USERS_USER,
  UNFOLLOW_USERS_USER,
  SET_USERS_PAGE,
  SET_USERS_TOTAL_COUNT,
  SET_USERS_SUBSCRIBERS_ID
} from '../types/users';

export const setUsersRequest = () => ({type: SET_USERS_REQUEST});
export const setUsersSuccess = (users) => ({type: SET_USERS_SUCCESS, payload: users});
export const follow = (id) => ({type: FOLLOW_USERS_USER, payload: id});
export const unfollow = (id) => ({type: UNFOLLOW_USERS_USER, payload: id});
export const setPage = (page) => ({type: SET_USERS_PAGE, payload: page});
export const setTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, payload: totalCount});
export const setSubscribersId = (isFetching, id) => ({type: SET_USERS_SUBSCRIBERS_ID, payload: {isFetching, id}});
