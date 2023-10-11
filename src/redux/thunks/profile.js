import { setProfile, toggleIsFetchingProfile } from '../actions/profile';
import { getProfileAPI } from '../../api/profile';

export const getProfile = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    getProfileAPI(id)
      .then((data) => {
        dispatch(setProfile(data));
        dispatch(toggleIsFetchingProfile(false));
      });
  };
};
