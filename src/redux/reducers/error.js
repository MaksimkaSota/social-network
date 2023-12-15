const initialState = {
  SET_USERS: null,
  SET_PROFILE: null,
  SET_AUTH: null
};

export const errorReducer = (state = initialState, action) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? action.payload : null,
  };
};
