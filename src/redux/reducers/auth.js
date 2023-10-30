import {
  SET_AUTH_SUCCESS_CORRECT,
  SET_AUTH_SUCCESS_INCORRECT,
  RESET_AUTH_DATA,
  SET_AUTH_USER_PHOTO
} from '../types/auth';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  authUserPhoto: '',
  incorrectAuthText: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS_CORRECT:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      };
    case SET_AUTH_SUCCESS_INCORRECT:
      return {
        ...state,
        incorrectAuthText: action.payload
      };
    case SET_AUTH_USER_PHOTO:
      return {
        ...state,
        authUserPhoto: action.payload,
      };
    case RESET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
