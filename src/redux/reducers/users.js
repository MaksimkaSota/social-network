import {
  USERS_SET_USERS_SUCCESS,
  USERS_FOLLOW,
  USERS_UNFOLLOW,
  USERS_SET_PAGE,
  USERS_SET_TOTAL_COUNT,
  USERS_SET_SUBSCRIBERS_ID,
} from '../types/users';
import { updateObjectInArray } from '../../utils/helpers/reducersHelpers';

const initialState = {
  users: [],
  page: 1,
  pageSize: 10,
  totalCount: 0,
  subscribersId: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_SET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case USERS_FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, {followed: true})
      };
    case USERS_UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, {followed: false})
      };
    case USERS_SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case USERS_SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      };
    case USERS_SET_SUBSCRIBERS_ID:
      return {
        ...state,
        subscribersId:
          action.payload.isFetching ?
            [...state.subscribersId, action.payload.id] :
            state.subscribersId.filter((id) => id !== action.payload.id)
      };
    default:
      return state;
  }
};
