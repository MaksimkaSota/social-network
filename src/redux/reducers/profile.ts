import { ProfileAction, ProfileActionType, ProfileState } from '../types/profile';
import { IResponseProfile } from '../../api/types/profile';

const initialState: ProfileState = {
  profile: null,
  status: '',
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case ProfileActionType.SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case ProfileActionType.SET_PROFILE_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload,
      };
    case ProfileActionType.SET_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload } as IResponseProfile,
      };
    default:
      return state;
  }
};
