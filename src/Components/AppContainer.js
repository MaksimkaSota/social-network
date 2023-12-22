import { App } from './App';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { errorAuthSelector } from '../redux/selectors/error';
import { logoutErrorSelector } from '../redux/selectors/auth';
import { resetLogoutError } from '../redux/actions/auth';
import { Error } from './Common/Error/Error';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';

export const AppContainer = () => {
  const isFetchingAuth = useSelector(isFetchingAuthSelector);
  const errorAuth = useSelector(errorAuthSelector);
  const logoutError = useSelector(logoutErrorSelector);

  const dispatch = useDispatch();
  const resetLogoutErrorCallback = useCallback(
    () => dispatch(resetLogoutError()),
    [dispatch]
  );

  const [crashMessage, setCrashMessage] = useState('');

  const catchAllUnhandledErrors = () => {
    setCrashMessage('Unhandled Promise Error! We are sorry... Fix it soon!');
  };

  useEffect(() => {
    dispatch(getAuth());
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
  }, []);

  if (crashMessage) {
    return (
      <Error message={crashMessage} isGlobalError={true} />
    );
  }

  return (
    <ErrorCatcher setCrashMessage={setCrashMessage}>
      <App
        isFetchingAuth={isFetchingAuth}
        errorAuth={errorAuth}
        logoutError={logoutError}
        resetLogoutError={resetLogoutErrorCallback}
      />
    </ErrorCatcher>
  );
};
