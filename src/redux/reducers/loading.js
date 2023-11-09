const initialState = {
  USERS_SET_USERS: false,
  PROFILE_SET_PROFILE: false,
  PROFILE_SET_STATUS: false,
  AUTH_SET_AUTH: true
};

export const loadingReducer = (state = initialState, action) => {
  const matches = /(.*)_(REQUEST|SUCCESS_CORRECT|SUCCESS_INCORRECT|SUCCESS|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'REQUEST',
  };
};
