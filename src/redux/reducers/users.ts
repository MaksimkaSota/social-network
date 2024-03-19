import { UsersActionType } from '../types/users';
import type { UsersAction, UsersState } from '../types/users';
import { updateObjectInArray } from '../../utils/helpers/reducersHelpers';

const initialState: UsersState = {
  users: [],
  page: 1,
  pageSize: 10,
  totalCount: 0,
  subscribersId: [],
  followErrors: [],
  unfollowErrors: [],
  filter: {
    term: '',
    friend: '',
  },
};

export const usersReducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionType.SET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case UsersActionType.FOLLOW_USERS_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, { followed: true }),
      };
    case UsersActionType.UNFOLLOW_USERS_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, { followed: false }),
      };
    case UsersActionType.SET_USERS_FOLLOW_ERRORS:
      return {
        ...state,
        followErrors: [...state.followErrors, action.payload],
      };
    case UsersActionType.SET_USERS_UNFOLLOW_ERRORS:
      return {
        ...state,
        unfollowErrors: [...state.unfollowErrors, action.payload],
      };
    case UsersActionType.SET_USERS_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UsersActionType.SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case UsersActionType.SET_USERS_SUBSCRIBERS_ID:
      return {
        ...state,
        subscribersId: action.payload.isFetching
          ? [...state.subscribersId, action.payload.id]
          : state.subscribersId.filter((id: number): boolean => id !== action.payload.id),
      };
    case UsersActionType.SET_USERS_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
