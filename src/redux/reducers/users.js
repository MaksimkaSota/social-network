import { SET_USERS, FOLLOW, UNFOLLOW, SET_PAGE, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING } from '../types/users';

const initialState = {
  users: [],
  page: 1,
  pageSize: 10,
  totalCount: 0,
  isFetching: false
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return {...user, followed: true}
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return {...user, followed: false}
          }
          return user;
        })
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    default:
      return state;
  }
};
