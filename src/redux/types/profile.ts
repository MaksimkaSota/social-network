import { ErrorType, Nullable } from '../../utils/types/common';
import { IPhotos, IResponseProfile } from '../../utils/types/api';

export type ProfileState = {
  profile: Nullable<IResponseProfile>;
  status: string;
};

export enum ProfileActionType {
  SET_PROFILE_REQUEST = 'SET_PROFILE_REQUEST',
  SET_PROFILE_SUCCESS = 'SET_PROFILE_SUCCESS',
  SET_PROFILE_FAILURE = 'SET_PROFILE_FAILURE',
  SET_PROFILE_STATUS_REQUEST = 'SET_PROFILE_STATUS_REQUEST',
  SET_PROFILE_STATUS_SUCCESS = 'SET_PROFILE_STATUS_SUCCESS',
  SET_PROFILE_STATUS_FAILURE = 'SET_PROFILE_STATUS_FAILURE',
  SET_PROFILE_PHOTO_REQUEST = 'SET_PROFILE_PHOTO_REQUEST',
  SET_PROFILE_PHOTO_SUCCESS = 'SET_PROFILE_PHOTO_SUCCESS',
  SET_PROFILE_PHOTO_FAILURE = 'SET_PROFILE_PHOTO_FAILURE',
  SET_PROFILE_DATA_REQUEST = 'SET_PROFILE_DATA_REQUEST',
  SET_PROFILE_DATA_SUCCESS = 'SET_PROFILE_DATA_SUCCESS',
  SET_PROFILE_DATA_FAILURE = 'SET_PROFILE_DATA_FAILURE',
}

export type SetProfileRequestAction = { type: ProfileActionType.SET_PROFILE_REQUEST };
export type SetProfileSuccessAction = { type: ProfileActionType.SET_PROFILE_SUCCESS; payload: IResponseProfile };
export type SetProfileFailureAction = { type: ProfileActionType.SET_PROFILE_FAILURE; payload: ErrorType };
export type SetStatusRequestAction = { type: ProfileActionType.SET_PROFILE_STATUS_REQUEST };
export type SetStatusSuccessAction = { type: ProfileActionType.SET_PROFILE_STATUS_SUCCESS; payload: string };
export type SetStatusFailureAction = { type: ProfileActionType.SET_PROFILE_STATUS_FAILURE; payload: ErrorType };
export type SetPhotoRequestAction = { type: ProfileActionType.SET_PROFILE_PHOTO_REQUEST };
export type SetPhotoSuccessAction = { type: ProfileActionType.SET_PROFILE_PHOTO_SUCCESS; payload: IPhotos };
export type SetPhotoFailureAction = { type: ProfileActionType.SET_PROFILE_PHOTO_FAILURE; payload: ErrorType };
export type SetDataRequestAction = { type: ProfileActionType.SET_PROFILE_DATA_REQUEST };
export type SetDataSuccessAction = { type: ProfileActionType.SET_PROFILE_DATA_SUCCESS };
export type SetDataFailureAction = { type: ProfileActionType.SET_PROFILE_DATA_FAILURE; payload: ErrorType };

export type ProfileAction =
  | SetProfileRequestAction
  | SetProfileSuccessAction
  | SetProfileFailureAction
  | SetStatusRequestAction
  | SetStatusSuccessAction
  | SetStatusFailureAction
  | SetPhotoRequestAction
  | SetPhotoSuccessAction
  | SetPhotoFailureAction
  | SetDataRequestAction
  | SetDataSuccessAction
  | SetDataFailureAction;
