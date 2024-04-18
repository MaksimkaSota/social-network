import type { FC, ReactElement } from 'react';
import { useCallback, useEffect } from 'react';
import { App } from './App';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { authErrorSelector } from '../redux/selectors/error';
import { logoutErrorSelector } from '../redux/selectors/auth';
import { setLogoutError } from '../redux/actions/auth';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import type { ErrorType, Nullable } from '../utils/types/common';

export const AppContainer: FC = (): ReactElement => {
  const isFetchingAuth = useTypedSelector(isFetchingAuthSelector);
  const authError = useTypedSelector(authErrorSelector);
  const logoutError = useTypedSelector(logoutErrorSelector);

  const dispatch = useTypedDispatch();
  const setLogoutErrorCallback = useCallback(
    (error: Nullable<ErrorType>) => dispatch(setLogoutError(error)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <ErrorCatcher>
      <App
        isFetchingAuth={isFetchingAuth}
        authError={authError}
        logoutError={logoutError}
        setLogoutError={setLogoutErrorCallback}
      />
    </ErrorCatcher>
  );
};
