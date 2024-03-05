import {
  ProfileActionType,
  SetDataFailureAction,
  SetDataRequestAction,
  SetDataSuccessAction,
  SetPhotoFailureAction,
  SetPhotoRequestAction,
  SetPhotoSuccessAction,
  SetProfileFailureAction,
  SetProfileRequestAction,
  SetProfileSuccessAction,
  SetStatusFailureAction,
  SetStatusRequestAction,
  SetStatusSuccessAction,
} from '../types/profile';
import { IPhotos, IResponseProfile } from '../../utils/types/api';

export const setProfileRequest = (): SetProfileRequestAction => ({ type: ProfileActionType.SET_PROFILE_REQUEST });
export const setProfileSuccess = (profile: IResponseProfile): SetProfileSuccessAction => ({
  type: ProfileActionType.SET_PROFILE_SUCCESS,
  payload: profile,
});
export const setProfileFailure = (message: string, code?: number): SetProfileFailureAction => ({
  type: ProfileActionType.SET_PROFILE_FAILURE,
  payload: { code, message },
});
export const setStatusRequest = (): SetStatusRequestAction => ({ type: ProfileActionType.SET_PROFILE_STATUS_REQUEST });
export const setStatusSuccess = (status: string): SetStatusSuccessAction => ({
  type: ProfileActionType.SET_PROFILE_STATUS_SUCCESS,
  payload: status,
});
export const setStatusFailure = (message: string, code?: number): SetStatusFailureAction => ({
  type: ProfileActionType.SET_PROFILE_STATUS_FAILURE,
  payload: { code, message },
});
export const setPhotoRequest = (): SetPhotoRequestAction => ({ type: ProfileActionType.SET_PROFILE_PHOTO_REQUEST });
export const setPhotoSuccess = (photo: IPhotos): SetPhotoSuccessAction => ({
  type: ProfileActionType.SET_PROFILE_PHOTO_SUCCESS,
  payload: photo,
});
export const setPhotoFailure = (message: string, code?: number): SetPhotoFailureAction => ({
  type: ProfileActionType.SET_PROFILE_PHOTO_FAILURE,
  payload: { code, message },
});
export const setDataRequest = (): SetDataRequestAction => ({ type: ProfileActionType.SET_PROFILE_DATA_REQUEST });
export const setDataSuccess = (): SetDataSuccessAction => ({ type: ProfileActionType.SET_PROFILE_DATA_SUCCESS });
export const setDataFailure = (message: string, code?: number): SetDataFailureAction => ({
  type: ProfileActionType.SET_PROFILE_DATA_FAILURE,
  payload: { code, message },
});
