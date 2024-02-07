import { ErrorAction, ErrorState } from '../types/error';

const initialState: ErrorState = {
  SET_USERS: null,
  SET_PROFILE: null,
  SET_PROFILE_STATUS: null,
  SET_PROFILE_PHOTO: null,
  SET_PROFILE_DATA: null,
  SET_AUTH: null,
};

export const errorReducer = (state: ErrorState = initialState, action: ErrorAction): ErrorState => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? action.payload : null,
  };
};
