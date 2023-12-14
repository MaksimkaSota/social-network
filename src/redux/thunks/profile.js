import {
  setProfileRequest,
  setProfileSuccess,
  setStatusRequest,
  setStatusSuccess,
  setPhotoRequest,
  setPhotoSuccess,
  setDataRequest,
  setDataSuccess,
  setProfileFailure,
} from '../actions/profile';
import { getProfileAPI, getStatusAPI, updateStatusAPI, updatePhotoAPI, updateProfileAPI } from '../../api/profile';
import { fillErrorsObject, getErrorMessage } from '../../utils/helpers/thunksHelpers';
import { setAuthUserPhoto } from '../actions/auth';

export const getProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setProfileRequest());
      const data = await getProfileAPI(id);
      dispatch(setProfileSuccess(data));
    } catch (error) {
      dispatch(setProfileFailure(error.response.status, getErrorMessage(error)));
    }
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
      dispatch(setAuthUserPhoto(data.data.photos.small));
    }
  };
};

export const updateData = (profileData, setStatus, setSubmitting, setEditModeData) => {
  return async (dispatch, getState) => {
    const dataKeys = Object.keys(profileData);
    const contactsDataKeys = Object.keys(profileData.contacts);

    const data = await updateProfileAPI(profileData);
    if (data.resultCode === 0) {
      setEditModeData(false);
      dispatch(setDataRequest());
      const id = getState().auth.id;
      const data = await getProfileAPI(id);
      dispatch(setProfileSuccess(data));
      dispatch(setDataSuccess());
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
