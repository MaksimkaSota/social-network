import { getAuthAPI } from '../../api/auth';
import { setAuthData, setAuthUserPhoto } from '../actions/auth';
import { getProfileAPI } from '../../api/profile';

export const getAuth = () => {
  return (dispatch) => {
    getAuthAPI()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthData(data.data));
          getProfileAPI(data.data.id)
            .then((data) => {
              dispatch(setAuthUserPhoto(data.photos.small));
            });
        }
      });
  };
};
