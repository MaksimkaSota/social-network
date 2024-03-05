import { Dispatch } from 'redux';
import { isAxiosError } from 'axios';
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
import { FollowAction, UnfollowAction, UsersAction } from '../types/users';
import { ThunkType } from '../../utils/types/common';
import { StatusCode } from '../../utils/types/enums';
import { IResponse, IUsers } from '../../utils/types/api';

export const getUsers = (page: number, pageSize: number): ThunkType<UsersAction> => {
  return async (dispatch) => {
    try {
      dispatch(setUsersRequest());
      dispatch(setPage(page));
      const data: IUsers = await getUsersAPI(page, pageSize);
      dispatch(setUsersSuccess(data.items));
      dispatch(setTotalCount(data.totalCount));
    } catch (error) {
      if (isAxiosError(error)) {
        dispatch(setUsersFailure(getErrorMessage(error), error.response?.status));
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
  const data: IResponse = await apiMethod(id);
  dispatch(setSubscribersId(false, id));
  if (data.resultCode === StatusCode.success) {
    dispatch(actionCreator(id));
  }
};
export const followUser = (id: number): ThunkType<UsersAction> => {
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
export const unfollowUser = (id: number): ThunkType<UsersAction> => {
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
