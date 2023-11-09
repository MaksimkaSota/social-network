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

const followUnfollowUser = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(setSubscribersId(true, id));
  const data = await apiMethod(id);
  dispatch(setSubscribersId(false, id));
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
};
export const followUser = (id) => {
  return async (dispatch) => {
    await followUnfollowUser(dispatch, id, followAPI, follow);
  };
};
export const unfollowUser = (id) => {
  return async (dispatch) => {
    await followUnfollowUser(dispatch, id, unfollowAPI, unfollow);
  };
};
