import { getAuthAPI, loginAPI, logoutAPI } from '../../api/auth';
import {
  setAuthRequest,
  setAuthSuccessCorrect,
  setAuthSuccessIncorrect,
  setAuthUserPhoto,
  resetAuthData
} from '../actions/auth';
import { getProfileAPI } from '../../api/profile';

export const getAuth = () => {
  return async (dispatch) => {
    dispatch(setAuthRequest());
    const dataAuth = await getAuthAPI();
    if (dataAuth.resultCode === 0) {
      dispatch(setAuthSuccessCorrect(dataAuth.data));
      const dataProfile = await getProfileAPI(dataAuth.data.id);
      dispatch(setAuthUserPhoto(dataProfile.photos.small));
    } else if (dataAuth.resultCode === 1) {
      dispatch(setAuthSuccessIncorrect(dataAuth.messages[0]));
    }
  };
};

export const login = (email, password, rememberMe, setStatus, setSubmitting) => {
  return async (dispatch) => {
    const data = await loginAPI(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuth());
    } else {
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
      dispatch(resetAuthData(null, null, null, false, ''));
    }
  };
};
