import { App } from './App';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { errorAuthSelector } from '../redux/selectors/error';
import { logoutErrorSelector } from '../redux/selectors/auth';
import { resetLogoutError } from '../redux/actions/auth';

export const AppContainer = () => {
  const isFetchingAuth = useSelector(isFetchingAuthSelector);
  const errorAuth = useSelector(errorAuthSelector);
  const logoutError = useSelector(logoutErrorSelector);

  const dispatch = useDispatch();
  const resetLogoutErrorCallback = useCallback(
    () => dispatch(resetLogoutError()),
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return (
    <App
      isFetchingAuth={isFetchingAuth}
      errorAuth={errorAuth}
      logoutError={logoutError}
      resetLogoutError={resetLogoutErrorCallback}
    />
  );
};
