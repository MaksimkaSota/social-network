import { ErrorState } from '../types/error';
import { RequestState } from '../../utils/types/common';

const initialState: ErrorState = {
  SET_USERS: null,
  SET_PROFILE: null,
  SET_PROFILE_STATUS: null,
  SET_PROFILE_PHOTO: null,
  SET_PROFILE_DATA: null,
  SET_AUTH: null,
};

export const errorReducer = (state: ErrorState = initialState, action: any): ErrorState => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === RequestState.failure ? action.payload : null,
  };
};
