import { AuthState, AuthActionType, AuthAction } from '../types/auth';

const initialState: AuthState = {
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

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.SET_AUTH_SUCCESS_CORRECT:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case AuthActionType.SET_AUTH_SUCCESS_INCORRECT:
      return {
        ...state,
        incorrectAuthText: action.payload,
      };
    case AuthActionType.SET_AUTH_PHOTO:
      return {
        ...state,
        authUserPhoto: action.payload,
      };
    case AuthActionType.SET_AUTH_PHOTO_ERROR:
      return {
        ...state,
        authUserPhotoError: action.payload,
      };
    case AuthActionType.RESET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionType.SET_AUTH_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload,
      };
    case AuthActionType.SET_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        logoutError: action.payload,
      };
    default:
      return state;
  }
};
