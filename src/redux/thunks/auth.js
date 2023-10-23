import { getAuthAPI, loginAPI, logoutAPI } from '../../api/auth';
import { resetAuthData, setAuthData, setAuthUserPhoto } from '../actions/auth';
import { getProfileAPI } from '../../api/profile';

export const getAuth = () => {
  return async (dispatch) => {
    const dataAuth = await getAuthAPI();
    if (dataAuth.resultCode === 0) {
      dispatch(setAuthData(dataAuth.data));
      const dataProfile = await getProfileAPI(dataAuth.data.id);
      dispatch(setAuthUserPhoto(dataProfile.photos.small));
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
      console.log(message);
      setStatus(message);
    }
    setSubmitting(false);
  };
};

export const logout = () => {
  return async (dispatch) => {
    const data = await logoutAPI();
    if (data.resultCode === 0) {
      dispatch(resetAuthData());
    }
  }
};
