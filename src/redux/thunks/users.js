import {
  setUsersRequest,
  setUsersSuccess,
  setUsersFailure,
  setPage,
  setSubscribersId,
  setTotalCount,
  follow,
  setFollowErrors,
  unfollow,
  setUnfollowErrors
} from '../actions/users';
import { followAPI, getUsersAPI, unfollowAPI } from '../../api/users';
import { getErrorMessage } from '../../utils/helpers/thunksHelpers';

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    try {
      dispatch(setUsersRequest());
      dispatch(setPage(page));
      const data = await getUsersAPI(page, pageSize);
      dispatch(setUsersSuccess(data.items));
      dispatch(setTotalCount(data.totalCount));
    } catch (error) {
      dispatch(setUsersFailure(error.response?.status, getErrorMessage(error)));
    }
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
    try {
      await followUnfollowUser(dispatch, id, followAPI, follow);
    } catch (error) {
      dispatch(setFollowErrors({id, code: error.response?.status, message: getErrorMessage(error)}));
    }
  };
};
export const unfollowUser = (id) => {
  return async (dispatch) => {
    try {
      await followUnfollowUser(dispatch, id, unfollowAPI, unfollow);
    } catch (error) {
      dispatch(setUnfollowErrors({id, code: error.response?.status, message: getErrorMessage(error)}));
    }
  };
};
