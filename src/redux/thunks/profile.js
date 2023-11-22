import {
  setProfileRequest,
  setProfileSuccess,
  setStatusRequest,
  setStatusSuccess,
  setPhotoRequest,
  setPhotoSuccess,
} from '../actions/profile';
import { getProfileAPI, getStatusAPI, updateStatusAPI, updatePhotoAPI } from '../../api/profile';

export const getProfile = (id) => {
  return async (dispatch) => {
    dispatch(setProfileRequest());
    const data = await getProfileAPI(id);
    dispatch(setProfileSuccess(data));
  };
};

export const getStatus = (id) => {
  return async (dispatch) => {
    dispatch(setStatusRequest());
    const data = await getStatusAPI(id);
    dispatch(setStatusSuccess(data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    dispatch(setStatusRequest());
    const data = await updateStatusAPI(status);
    switch (data.resultCode) {
      case 0:
        dispatch(setStatusSuccess(status));
        break;
      case 1:
        dispatch(setStatusSuccess(data.messages[0]));
        break;
      default:
        dispatch(setStatusSuccess('Some server status error'));
        break;
    }
  };
};

export const updatePhoto = (photo) => {
  return async (dispatch) => {
    dispatch(setPhotoRequest());
    const data = await updatePhotoAPI(photo);
    if (data.resultCode === 0) {
      dispatch(setPhotoSuccess(data.data.photos));
    }
  };
};
