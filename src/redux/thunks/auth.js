import { getAuthAPI } from '../../api/auth';
import { setAuthData, setAuthUserPhoto } from '../actions/auth';
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
