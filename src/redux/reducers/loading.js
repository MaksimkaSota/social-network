const initialState = {
  SET_USERS: false,
  SET_PROFILE: false,
  SET_STATUS: false,
  SET_AUTH: true
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
