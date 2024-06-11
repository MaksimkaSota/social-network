import type { Dispatch, SetStateAction } from 'react';
import { isAxiosError } from 'axios';
import {
  setProfileRequest,
  setProfileSuccess,
  setProfileFailure,
  setStatusRequest,
  setStatusSuccess,
  setStatusFailure,
  setPhotoRequest,
  setPhotoSuccess,
  setPhotoFailure,
  setDataRequest,
  setDataSuccess,
  setDataFailure,
} from '../actions/profile';
import { getProfileAPI, getStatusAPI, updateStatusAPI, updatePhotoAPI, updateProfileAPI } from '../../api/http/profile';
import { fillErrorsObject, getErrorMessage } from '../../utils/helpers/thunksHelpers';
import { setAuthUserPhoto } from '../actions/auth';
import type { Nullable, ThunkType } from '../../utils/types/common';
import type { ProfileAction } from '../types/profile';
import type { SetAuthUserPhotoAction } from '../types/auth';
import type { SetStatusType, SetSubmittingType } from '../../utils/types/form';
import type { IPhotoData, IRequestProfile, IResponse, IResponseProfile } from '../../utils/types/api';
import { StatusCode } from '../../utils/types/enums';

export const getProfile = (id: number): ThunkType<ProfileAction> => {
  return async (dispatch) => {
    try {
      dispatch(setProfileRequest());
      const data: IResponseProfile = await getProfileAPI(id);
      dispatch(setProfileSuccess(data));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setProfileFailure(getErrorMessage(error), error.response?.status));
      }
    }
  };
};

export const getStatus = (id: number): ThunkType<ProfileAction> => {
  return async (dispatch) => {
    try {
      dispatch(setStatusRequest());
      const data: string = await getStatusAPI(id);
      dispatch(setStatusSuccess(data));
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setStatusFailure(getErrorMessage(error), error.response?.status));
      }
    }
  };
};

export const updateStatus = (status: string): ThunkType<ProfileAction> => {
  return async (dispatch) => {
    try {
      dispatch(setStatusRequest());
      const data: IResponse = await updateStatusAPI(status);
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
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setStatusFailure(getErrorMessage(error), error.response?.status));
      }
    }
  };
};

export const updatePhoto = (photo: File): ThunkType<ProfileAction | SetAuthUserPhotoAction> => {
  return async (dispatch) => {
    try {
      dispatch(setPhotoRequest());
      const data: IResponse<IPhotoData> = await updatePhotoAPI(photo);
      if (data.resultCode === StatusCode.success) {
        dispatch(setPhotoSuccess(data.data.photos));
        dispatch(setAuthUserPhoto(data.data.photos.small));
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        dispatch(setPhotoFailure(getErrorMessage(error), error.response?.status));
      }
    }
  };
};

export const updateData = (
  profileData: IRequestProfile,
  setStatus: SetStatusType,
  setSubmitting: SetSubmittingType,
  setEditModeData: Dispatch<SetStateAction<boolean>>
): ThunkType<ProfileAction> => {
  return async (dispatch, getState) => {
    try {
      const dataKeys: string[] = Object.keys(profileData);
      const contactsDataKeys: string[] = Object.keys(profileData.contacts);

      const data: IResponse = await updateProfileAPI(profileData);
      if (data.resultCode === StatusCode.success) {
        setEditModeData(false);
        dispatch(setDataRequest());
        const id: Nullable<number> = getState().auth.id;
        if (id !== null) {
          const profile: IResponseProfile = await getProfileAPI(id);
          dispatch(setProfileSuccess(profile));
          dispatch(setDataSuccess());
        }
      } else {
        const errors = {
          contacts: {},
        };
        data.messages.forEach((message: string): void => {
          dataKeys.forEach((dataKey: string): void => {
            let key = dataKey;
            if (key === 'lookingForAJob' || key === 'lookingForAJobDescription') {
              key = 'Job';
            }
            if (key === 'contacts') {
              contactsDataKeys.forEach((contactsDataKey: string): void => {
                fillErrorsObject(errors.contacts, contactsDataKey, message);
              });
            } else {
              fillErrorsObject(errors, key, message);
            }
          });
        });
        setStatus(errors);
      }
    } catch (error: unknown) {
      setEditModeData(false);
      if (isAxiosError(error)) {
        dispatch(setDataFailure(getErrorMessage(error), error.response?.status));
      }
    }
    setSubmitting(false);
  };
};
