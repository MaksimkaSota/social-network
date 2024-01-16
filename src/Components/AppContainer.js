import { App } from './App';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { authErrorSelector } from '../redux/selectors/error';
import { logoutErrorSelector } from '../redux/selectors/auth';
import { setLogoutError } from '../redux/actions/auth';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';

export const AppContainer = () => {
  const isFetchingAuth = useSelector(isFetchingAuthSelector);
  const authError = useSelector(authErrorSelector);
  const logoutError = useSelector(logoutErrorSelector);

  const dispatch = useDispatch();
  const setLogoutErrorCallback = useCallback((error) => dispatch(setLogoutError(error)), [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  const [globalError, setGlobalError] = useState(null);

  return (
    <ErrorCatcher globalError={globalError} setGlobalError={setGlobalError}>
      <App
        isFetchingAuth={isFetchingAuth}
        authError={authError}
        logoutError={logoutError}
        setLogoutError={setLogoutErrorCallback}
      />
    </ErrorCatcher>
  );
};
