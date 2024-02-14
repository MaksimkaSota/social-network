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
  setUnfollowErrors,
} from '../actions/users';
import { followAPI, getUsersAPI, unfollowAPI } from '../../api/users';
import { getErrorMessage } from '../../utils/helpers/thunksHelpers';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers/reducers';
import { FollowAction, UnfollowAction, UsersAction } from '../types/users';
import { isAxiosError } from 'axios';
import { Dispatch } from 'redux';
import { IResponse } from '../../api/types/http';

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, UsersAction>;

export const getUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    try {
      dispatch(setUsersRequest());
      dispatch(setPage(page));
      const data = await getUsersAPI(page, pageSize);
      dispatch(setUsersSuccess(data.items));
      dispatch(setTotalCount(data.totalCount));
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch(setUsersFailure(error.response?.status, getErrorMessage(error)));
      }
    }
  };
};

const followUnfollowUser = async (
  dispatch: Dispatch<UsersAction>,
  id: number,
  apiMethod: (id: number) => Promise<IResponse>,
  actionCreator: (id: number) => FollowAction | UnfollowAction
) => {
  dispatch(setSubscribersId(true, id));
  const data = await apiMethod(id);
  dispatch(setSubscribersId(false, id));
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
};
export const followUser = (id: number): ThunkType => {
  return async (dispatch) => {
    try {
      await followUnfollowUser(dispatch, id, followAPI, follow);
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch(setFollowErrors({ id, code: error.response?.status, message: getErrorMessage(error) }));
      }
    }
  };
};
export const unfollowUser = (id: number): ThunkType => {
  return async (dispatch) => {
    try {
      await followUnfollowUser(dispatch, id, unfollowAPI, unfollow);
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch(setUnfollowErrors({ id, code: error.response?.status, message: getErrorMessage(error) }));
      }
    }
  };
};
