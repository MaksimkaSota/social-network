import { getAuth } from './auth';
import { setInitializedSuccess } from '../actions/initial';

export const initialize = () => {
  return async (dispatch) => {
    await dispatch(getAuth());
    dispatch(setInitializedSuccess());
  };
};
