import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { App } from './App';
import { getAuth } from '../redux/thunks/auth';
import { setLoginError, setLogoutError } from '../redux/actions/auth';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import type { ErrorType, Nullable } from '../utils/types/common';
import { authSelector, viewSelector } from '../redux/selectors/selectors';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { authErrorSelector } from '../redux/selectors/error';

export const AppContainer: FC = (): ReactElement => {
  const { loginError, logoutError } = useTypedSelector(authSelector);
  const isFetchingAuth = useTypedSelector(isFetchingAuthSelector);
  const authError = useTypedSelector(authErrorSelector);
  const { languageMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const setLoginErrorCallback = (error: Nullable<ErrorType>) => dispatch(setLoginError(error));
  const setLogoutErrorCallback = (error: Nullable<ErrorType>) => dispatch(setLogoutError(error));

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <ErrorCatcher>
      <App
        isFetchingAuth={isFetchingAuth}
        authError={authError}
        loginError={loginError}
        logoutError={logoutError}
        setLoginError={setLoginErrorCallback}
        setLogoutError={setLogoutErrorCallback}
        languageMode={languageMode}
      />
    </ErrorCatcher>
  );
};
