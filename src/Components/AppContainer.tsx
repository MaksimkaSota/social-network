import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { App } from './App';
import { getAuth } from '../redux/thunks/auth';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { authErrorSelector } from '../redux/selectors/error';
import { logoutErrorSelector } from '../redux/selectors/auth';
import { setLogoutError } from '../redux/actions/auth';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { ErrorType } from '../redux/types/error';
import { Nullable } from '../utils/types/common';

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

  const [globalError, setGlobalError] = useState<ErrorType | null>(null);

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
