import { SET_PROFILE_SUCCESS, SET_PROFILE_STATUS_SUCCESS, SET_PROFILE_PHOTO_SUCCESS } from '../types/profile';

const initialState = {
  profile: {},
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_PROFILE_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload,
      };
    case SET_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    default:
      return state;
  }
};
