import { PROFILE_SET_PROFILE_SUCCESS, PROFILE_SET_STATUS_SUCCESS } from '../types/profile';

const initialState = {
  profile: {},
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case PROFILE_SET_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};
