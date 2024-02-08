import { LoadingState } from '../types/loading';

const initialState: LoadingState = {
  SET_USERS: false,
  SET_PROFILE: false,
  SET_PROFILE_STATUS: false,
  SET_PROFILE_PHOTO: false,
  SET_PROFILE_DATA: false,
  SET_AUTH: true,
};

export const loadingReducer = (state: LoadingState = initialState, action: any): LoadingState => {
  const matches = /(.*)_(REQUEST|SUCCESS_CORRECT|SUCCESS_INCORRECT|SUCCESS|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
};
