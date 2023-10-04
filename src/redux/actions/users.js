import { SET_USERS, FOLLOW, UNFOLLOW, SET_PAGE, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING } from '../types/users';

export const setUsers = (users) => ({type: SET_USERS, payload: users});
export const follow = (id) => ({type: FOLLOW, payload: id});
export const unfollow = (id) => ({type: UNFOLLOW, payload: id});
export const setPage = (page) => ({type: SET_PAGE, payload: page});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
