import {
  follow,
  setPage,
  setSubscribersId,
  setTotalCount,
  setUsers,
  toggleIsFetchingUsers,
  unfollow
} from '../actions/users';
import { followAPI, getUsersAPI, unfollowAPI } from '../../api/users';

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingUsers(true));
    dispatch(setPage(page));
    const data = await getUsersAPI(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(toggleIsFetchingUsers(false));
  };
};

export const followUser = (id) => {
  return async (dispatch) => {
    dispatch(setSubscribersId(true, id));
    const data = await followAPI(id);
    dispatch(setSubscribersId(false, id));
    if (data.resultCode === 0) {
      dispatch(follow(id));
    }
  };
};

export const unfollowUser = (id) => {
  return async (dispatch) => {
    dispatch(setSubscribersId(true, id));
    const data = await unfollowAPI(id);
    dispatch(setSubscribersId(false, id));
    if (data.resultCode === 0) {
      dispatch(unfollow(id));
    }
  };
};
