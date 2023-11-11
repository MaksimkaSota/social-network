import {
  SET_USERS_SUCCESS,
  FOLLOW_USERS_USER,
  UNFOLLOW_USERS_USER,
  SET_USERS_PAGE,
  SET_USERS_TOTAL_COUNT,
  SET_USERS_SUBSCRIBERS_ID,
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
    case SET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case FOLLOW_USERS_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, {followed: true})
      };
    case UNFOLLOW_USERS_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, {followed: false})
      };
    case SET_USERS_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      };
    case SET_USERS_SUBSCRIBERS_ID:
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
