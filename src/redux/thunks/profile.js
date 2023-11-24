import {
  setProfileRequest,
  setProfileSuccess,
  setStatusRequest,
  setStatusSuccess,
  setPhotoRequest,
  setPhotoSuccess,
} from '../actions/profile';
import { getProfileAPI, getStatusAPI, updateStatusAPI, updatePhotoAPI, updateProfileAPI } from '../../api/profile';
import { fillErrorsObject } from '../../utils/helpers/thunksHelpers';

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

export const updateData = (profile, setStatus, setSubmitting, setEditModeData, dataKeys, contactsDataKeys) => {
  return async (dispatch, getState) => {
    const data = await updateProfileAPI(profile);
    if (data.resultCode === 0) {
      const id = getState().auth.id;
      dispatch(getProfile(id));
      setEditModeData(false);
    } else {
      const errors = {
        contacts: {}
      };
      data.messages.forEach((message) => {
        dataKeys.forEach((dataKey) => {
          (dataKey === 'lookingForAJob' || dataKey === 'lookingForAJobDescription') && (dataKey = 'Job');
          if (dataKey === 'contacts') {
            contactsDataKeys.forEach((contactsDataKey) => {
              fillErrorsObject(errors.contacts, contactsDataKey, message);
            });
          } else {
            fillErrorsObject(errors, dataKey, message);
          }
        });
      });
      setStatus(errors);
    }
    setSubmitting(false);
  };
};
