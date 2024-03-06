import { UsersActionType } from '../types/users';
import type {
  FollowAction,
  SetFollowErrorsAction,
  SetPageAction,
  SetSubscribersIdAction,
  SetTotalCountAction,
  SetUnfollowErrorsAction,
  SetUsersFailureAction,
  SetUsersRequestAction,
  SetUsersSuccessAction,
  UnfollowAction,
} from '../types/users';
import type { IUser } from '../../utils/types/api';
import type { FollowUnfollowErrorType } from '../../utils/types/common';

export const setUsersRequest = (): SetUsersRequestAction => ({ type: UsersActionType.SET_USERS_REQUEST });
export const setUsersSuccess = (users: Array<IUser>): SetUsersSuccessAction => ({
  type: UsersActionType.SET_USERS_SUCCESS,
  payload: users,
});
export const setUsersFailure = (message: string, code?: number): SetUsersFailureAction => ({
  type: UsersActionType.SET_USERS_FAILURE,
  payload: { code, message },
});
export const follow = (id: number): FollowAction => ({ type: UsersActionType.FOLLOW_USERS_USER, payload: id });
export const setFollowErrors = ({ id, code, message }: FollowUnfollowErrorType): SetFollowErrorsAction => ({
  type: UsersActionType.SET_USERS_FOLLOW_ERRORS,
  payload: { id, code, message },
});
export const unfollow = (id: number): UnfollowAction => ({ type: UsersActionType.UNFOLLOW_USERS_USER, payload: id });
export const setUnfollowErrors = ({ id, code, message }: FollowUnfollowErrorType): SetUnfollowErrorsAction => ({
  type: UsersActionType.SET_USERS_UNFOLLOW_ERRORS,
  payload: { id, code, message },
});
export const setPage = (page: number): SetPageAction => ({ type: UsersActionType.SET_USERS_PAGE, payload: page });
export const setTotalCount = (totalCount: number): SetTotalCountAction => ({
  type: UsersActionType.SET_USERS_TOTAL_COUNT,
  payload: totalCount,
});
export const setSubscribersId = (isFetching: boolean, id: number): SetSubscribersIdAction => ({
  type: UsersActionType.SET_USERS_SUBSCRIBERS_ID,
  payload: { isFetching, id },
});
