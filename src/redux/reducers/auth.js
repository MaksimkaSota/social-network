import {
  SET_AUTH_SUCCESS_CORRECT,
  SET_AUTH_SUCCESS_INCORRECT,
  RESET_AUTH_DATA,
  SET_AUTH_PHOTO,
  SET_AUTH_PHOTO_ERROR,
  SET_AUTH_CAPTCHA_URL,
  SET_AUTH_LOGOUT_ERROR,
} from '../types/auth';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  authUserPhoto: '',
  authUserPhotoError: null,
  incorrectAuthText: '',
  captchaUrl: '',
  logoutError: null,
};

export const authReducer = (action, state = initialState) => {
  switch (action.type) {
    case SET_AUTH_SUCCESS_CORRECT:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case SET_AUTH_SUCCESS_INCORRECT:
      return {
        ...state,
        incorrectAuthText: action.payload,
      };
    case SET_AUTH_PHOTO:
      return {
        ...state,
        authUserPhoto: action.payload,
      };
    case SET_AUTH_PHOTO_ERROR:
      return {
        ...state,
        authUserPhotoError: action.payload,
      };
    case RESET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_AUTH_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload,
      };
    case SET_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        logoutError: action.payload,
      };
    default:
      return state;
  }
};
