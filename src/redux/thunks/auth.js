import { getAuthAPI, getCaptchaUrlAPI, loginAPI, logoutAPI } from '../../api/auth';
import {
  setAuthRequest,
  setAuthSuccessCorrect,
  setAuthSuccessIncorrect,
  setAuthUserPhoto,
  resetAuthData,
  setCaptchaUrl
} from '../actions/auth';
import { getProfileAPI } from '../../api/profile';
import { setProfileFailure } from '../actions/profile';
import { getErrorMessage } from '../../utils/helpers/thunksHelpers';

export const getAuth = () => {
  return async (dispatch) => {
    dispatch(setAuthRequest());
    const dataAuth = await getAuthAPI();
    if (dataAuth.resultCode === 0) {
      dispatch(setAuthSuccessCorrect(dataAuth.data));
      dispatch(setAuthSuccessIncorrect(''));
      try {
        const dataProfile = await getProfileAPI(dataAuth.data.id);
        dispatch(setAuthUserPhoto(dataProfile.photos.small));
      } catch (error) {
        dispatch(setProfileFailure(error.response.status, getErrorMessage(error)));
      }
    } else if (dataAuth.resultCode === 1) {
      dispatch(setAuthSuccessIncorrect(dataAuth.messages[0]));
    }
  };
};

export const login = (loginData, setStatus, setSubmitting, setFieldValue, setFieldTouched) => {
  return async (dispatch) => {
    const data = await loginAPI(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha);
    if (data.resultCode === 0) {
      dispatch(getAuth());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
        setFieldValue('isCaptcha', true);
        setFieldTouched('captcha', false);
      }
      const message = data.messages[0] || 'Some error';
      setStatus(message);
    }
    setSubmitting(false);
  };
};

export const logout = () => {
  return async (dispatch) => {
    const data = await logoutAPI();
    if (data.resultCode === 0) {
      dispatch(resetAuthData({
        id: null,
        name: null,
        login: null,
        isAuth: false,
        authUserPhoto: '',
        captchaUrl: ''
      }));
      dispatch(setAuthSuccessIncorrect('You are not authorized'));
    }
  };
};

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const data = await getCaptchaUrlAPI();
    dispatch(setCaptchaUrl(data.url));
  };
};
