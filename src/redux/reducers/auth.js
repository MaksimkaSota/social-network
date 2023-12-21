import {
  SET_AUTH_SUCCESS_CORRECT,
  SET_AUTH_SUCCESS_INCORRECT,
  RESET_AUTH_DATA,
  SET_AUTH_PHOTO,
  SET_AUTH_CAPTCHA_URL,
  SET_AUTH_LOGOUT_ERROR,
  RESET_AUTH_LOGOUT_ERROR
} from '../types/auth';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  authUserPhoto: '',
  incorrectAuthText: '',
  captchaUrl: '',
  logoutError: null
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
    case SET_AUTH_PHOTO:
      return {
        ...state,
        authUserPhoto: action.payload,
      };
    case RESET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_AUTH_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload,
      }
    case SET_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        logoutError: action.payload,
      }
    case RESET_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        logoutError: null,
      }
    default:
      return state;
  }
};
