import { setProfile, toggleIsFetchingProfile } from '../actions/profile';
import { getProfileAPI } from '../../api/profile';

export const getProfile = (id) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    const data = await getProfileAPI(id);
    dispatch(setProfile(data));
    dispatch(toggleIsFetchingProfile(false));
  };
};
