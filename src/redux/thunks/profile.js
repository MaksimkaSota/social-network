import { setProfile, setStatus, toggleIsFetchingProfile, toggleIsFetchingStatus } from '../actions/profile';
import { getProfileAPI, getStatusAPI, updateStatusAPI } from '../../api/profile';

export const getProfile = (id) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    const data = await getProfileAPI(id);
    dispatch(setProfile(data));
    dispatch(toggleIsFetchingProfile(false));
  };
};

export const getStatus = (id) => {
  return async (dispatch) => {
    const data = await getStatusAPI(id);
    dispatch(setStatus(data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingStatus(true));
    const data = await updateStatusAPI(status);
    switch (data.resultCode) {
      case 0:
        dispatch(setStatus(status));
        break;
      case 1:
        dispatch(setStatus(data.messages[0]));
        break;
      default:
        dispatch(setStatus('Some server status error'));
        break;
    }
    dispatch(toggleIsFetchingStatus(false));
  };
};
