import { ProfileActionType } from '../types/profile';
import type { ProfileAction, ProfileState } from '../types/profile';
import type { IResponseProfile } from '../../utils/types/api';

const initialState: ProfileState = {
  profile: null,
  status: '',
  incorrectStatusText: '',
  incorrectPhotoText: '',
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case ProfileActionType.SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case ProfileActionType.SET_PROFILE_STATUS_SUCCESS_CORRECT:
      return {
        ...state,
        status: action.payload,
      };
    case ProfileActionType.SET_PROFILE_STATUS_SUCCESS_INCORRECT:
      return {
        ...state,
        incorrectStatusText: action.payload,
      };
    case ProfileActionType.SET_PROFILE_PHOTO_SUCCESS_CORRECT:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload } as IResponseProfile,
      };
    case ProfileActionType.SET_PROFILE_PHOTO_SUCCESS_INCORRECT:
      return {
        ...state,
        incorrectPhotoText: action.payload,
      };
    default:
      return state;
  }
};
