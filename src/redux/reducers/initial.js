import { INITIALIZED_SUCCESS } from '../types/initial';

const initialState = {
  initialized: false,
};

export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
};
