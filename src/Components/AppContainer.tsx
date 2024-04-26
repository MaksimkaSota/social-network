import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { App } from './App';
import { getAuth } from '../redux/thunks/auth';
import { setLogoutError } from '../redux/actions/auth';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import type { ErrorType, Nullable } from '../utils/types/common';
import { authSelector } from '../redux/selectors/selectors';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { authErrorSelector } from '../redux/selectors/error';

export const AppContainer: FC = (): ReactElement => {
  const { logoutError } = useTypedSelector(authSelector);
  const isFetchingAuth = useTypedSelector(isFetchingAuthSelector);
  const authError = useTypedSelector(authErrorSelector);

  const dispatch = useTypedDispatch();
  const setLogoutErrorCallback = (error: Nullable<ErrorType>) => dispatch(setLogoutError(error));

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
