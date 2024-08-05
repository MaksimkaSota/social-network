import type { ErrorType, Nullable } from '../../utils/types/common';
import type { IPhotos, IResponseProfile } from '../../utils/types/api';

export type ProfileState = {
  profile: Nullable<IResponseProfile>;
  status: string;
  incorrectStatusText: string;
  incorrectPhotoText: string;
};

export enum ProfileActionType {
  SET_PROFILE_REQUEST = 'SET_PROFILE_REQUEST',
  SET_PROFILE_SUCCESS = 'SET_PROFILE_SUCCESS',
  SET_PROFILE_FAILURE = 'SET_PROFILE_FAILURE',
  SET_PROFILE_STATUS_REQUEST = 'SET_PROFILE_STATUS_REQUEST',
  SET_PROFILE_STATUS_SUCCESS_CORRECT = 'SET_PROFILE_STATUS_SUCCESS_CORRECT',
  SET_PROFILE_STATUS_SUCCESS_INCORRECT = 'SET_PROFILE_STATUS_SUCCESS_INCORRECT',
  SET_PROFILE_STATUS_FAILURE = 'SET_PROFILE_STATUS_FAILURE',
  SET_PROFILE_PHOTO_REQUEST = 'SET_PROFILE_PHOTO_REQUEST',
  SET_PROFILE_PHOTO_SUCCESS_CORRECT = 'SET_PROFILE_PHOTO_SUCCESS_CORRECT',
  SET_PROFILE_PHOTO_SUCCESS_INCORRECT = 'SET_PROFILE_PHOTO_SUCCESS_INCORRECT',
  SET_PROFILE_PHOTO_FAILURE = 'SET_PROFILE_PHOTO_FAILURE',
  SET_PROFILE_DATA_REQUEST = 'SET_PROFILE_DATA_REQUEST',
  SET_PROFILE_DATA_SUCCESS = 'SET_PROFILE_DATA_SUCCESS',
  SET_PROFILE_DATA_FAILURE = 'SET_PROFILE_DATA_FAILURE',
}

export type SetProfileRequestAction = { type: ProfileActionType.SET_PROFILE_REQUEST };
export type SetProfileSuccessAction = { type: ProfileActionType.SET_PROFILE_SUCCESS; payload: IResponseProfile };
export type SetProfileFailureAction = { type: ProfileActionType.SET_PROFILE_FAILURE; payload: ErrorType };
export type SetStatusRequestAction = { type: ProfileActionType.SET_PROFILE_STATUS_REQUEST };
export type SetStatusSuccessCorrectAction = {
  type: ProfileActionType.SET_PROFILE_STATUS_SUCCESS_CORRECT;
  payload: string;
};
export type SetStatusSuccessIncorrectAction = {
  type: ProfileActionType.SET_PROFILE_STATUS_SUCCESS_INCORRECT;
  payload: string;
};
export type SetStatusFailureAction = { type: ProfileActionType.SET_PROFILE_STATUS_FAILURE; payload: ErrorType };
export type SetPhotoRequestAction = { type: ProfileActionType.SET_PROFILE_PHOTO_REQUEST };
export type SetPhotoSuccessCorrectAction = {
  type: ProfileActionType.SET_PROFILE_PHOTO_SUCCESS_CORRECT;
  payload: IPhotos;
};
export type SetPhotoSuccessIncorrectAction = {
  type: ProfileActionType.SET_PROFILE_PHOTO_SUCCESS_INCORRECT;
  payload: string;
};
export type SetPhotoFailureAction = { type: ProfileActionType.SET_PROFILE_PHOTO_FAILURE; payload: ErrorType };
export type SetDataRequestAction = { type: ProfileActionType.SET_PROFILE_DATA_REQUEST };
export type SetDataSuccessAction = { type: ProfileActionType.SET_PROFILE_DATA_SUCCESS };
export type SetDataFailureAction = { type: ProfileActionType.SET_PROFILE_DATA_FAILURE; payload: ErrorType };

export type ProfileAction =
  | SetProfileRequestAction
  | SetProfileSuccessAction
  | SetProfileFailureAction
  | SetStatusRequestAction
  | SetStatusSuccessCorrectAction
  | SetStatusSuccessIncorrectAction
  | SetStatusFailureAction
  | SetPhotoRequestAction
  | SetPhotoSuccessCorrectAction
  | SetPhotoSuccessIncorrectAction
  | SetPhotoFailureAction
  | SetDataRequestAction
  | SetDataSuccessAction
  | SetDataFailureAction;
