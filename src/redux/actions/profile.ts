import { ProfileActionType } from '../types/profile';
import type {
  SetDataFailureAction,
  SetDataRequestAction,
  SetDataSuccessAction,
  SetPhotoFailureAction,
  SetPhotoRequestAction,
  SetPhotoSuccessCorrectAction,
  SetPhotoSuccessIncorrectAction,
  SetProfileFailureAction,
  SetProfileRequestAction,
  SetProfileSuccessAction,
  SetStatusFailureAction,
  SetStatusRequestAction,
  SetStatusSuccessCorrectAction,
  SetStatusSuccessIncorrectAction,
} from '../types/profile';
import type { IPhotos, IResponseProfile } from '../../utils/types/api';

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
export const setStatusSuccessCorrect = (status: string): SetStatusSuccessCorrectAction => ({
  type: ProfileActionType.SET_PROFILE_STATUS_SUCCESS_CORRECT,
  payload: status,
});
export const setStatusSuccessIncorrect = (status: string): SetStatusSuccessIncorrectAction => ({
  type: ProfileActionType.SET_PROFILE_STATUS_SUCCESS_INCORRECT,
  payload: status,
});
export const setStatusFailure = (message: string, code?: number): SetStatusFailureAction => ({
  type: ProfileActionType.SET_PROFILE_STATUS_FAILURE,
  payload: { code, message },
});
export const setPhotoRequest = (): SetPhotoRequestAction => ({ type: ProfileActionType.SET_PROFILE_PHOTO_REQUEST });
export const setPhotoSuccessCorrect = (photo: IPhotos): SetPhotoSuccessCorrectAction => ({
  type: ProfileActionType.SET_PROFILE_PHOTO_SUCCESS_CORRECT,
  payload: photo,
});
export const setPhotoSuccessIncorrect = (incorrectPhotoText: string): SetPhotoSuccessIncorrectAction => ({
  type: ProfileActionType.SET_PROFILE_PHOTO_SUCCESS_INCORRECT,
  payload: incorrectPhotoText,
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
