import {
  setUsersRequest,
  setUsersSuccess,
  follow,
  setPage,
  setSubscribersId,
  setTotalCount,
  unfollow
} from '../actions/users';
import { followAPI, getUsersAPI, unfollowAPI } from '../../api/users';

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setUsersRequest());
    dispatch(setPage(page));
    const data = await getUsersAPI(page, pageSize);
    dispatch(setUsersSuccess(data.items));
    dispatch(setTotalCount(data.totalCount));
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
