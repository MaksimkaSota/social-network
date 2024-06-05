import type { IUser } from '../../utils/types/api';
import type { ErrorType, FilterType, FollowUnfollowErrorType, SubscribersId } from '../../utils/types/common';

export type UsersState = {
  users: IUser[];
  page: number;
  pageSize: number;
  totalCount: number;
  subscribersId: number[];
  followErrors: FollowUnfollowErrorType[];
  unfollowErrors: FollowUnfollowErrorType[];
  filter: FilterType;
};

export enum UsersActionType {
  SET_USERS_REQUEST = 'SET_USERS_REQUEST',
  SET_USERS_SUCCESS = 'SET_USERS_SUCCESS',
  SET_USERS_FAILURE = 'SET_USERS_FAILURE',
  FOLLOW_USERS_USER = 'FOLLOW_USERS_USER',
  SET_USERS_FOLLOW_ERRORS = 'SET_USERS_FOLLOW_ERRORS',
  UNFOLLOW_USERS_USER = 'UNFOLLOW_USERS_USER',
  SET_USERS_UNFOLLOW_ERRORS = 'SET_USERS_UNFOLLOW_ERRORS',
  SET_USERS_PAGE = 'SET_USERS_PAGE',
  SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
  SET_USERS_SUBSCRIBERS_ID = 'SET_USERS_SUBSCRIBERS_ID',
  SET_USERS_FILTER = 'SET_USERS_FILTER',
}

export type SetUsersRequestAction = { type: UsersActionType.SET_USERS_REQUEST };
export type SetUsersSuccessAction = { type: UsersActionType.SET_USERS_SUCCESS; payload: IUser[] };
export type SetUsersFailureAction = { type: UsersActionType.SET_USERS_FAILURE; payload: ErrorType };
export type FollowAction = { type: UsersActionType.FOLLOW_USERS_USER; payload: number };
export type SetFollowErrorsAction = { type: UsersActionType.SET_USERS_FOLLOW_ERRORS; payload: FollowUnfollowErrorType };
export type UnfollowAction = { type: UsersActionType.UNFOLLOW_USERS_USER; payload: number };
export type SetUnfollowErrorsAction = {
  type: UsersActionType.SET_USERS_UNFOLLOW_ERRORS;
  payload: FollowUnfollowErrorType;
};
export type SetPageAction = { type: UsersActionType.SET_USERS_PAGE; payload: number };
export type SetTotalCountAction = { type: UsersActionType.SET_USERS_TOTAL_COUNT; payload: number };
export type SetSubscribersIdAction = { type: UsersActionType.SET_USERS_SUBSCRIBERS_ID; payload: SubscribersId };
export type SetFilterAction = { type: UsersActionType.SET_USERS_FILTER; payload: FilterType };

export type UsersAction =
  | SetUsersRequestAction
  | SetUsersSuccessAction
  | SetUsersFailureAction
  | FollowAction
  | SetFollowErrorsAction
  | UnfollowAction
  | SetUnfollowErrorsAction
  | SetPageAction
  | SetTotalCountAction
  | SetSubscribersIdAction
  | SetFilterAction;
