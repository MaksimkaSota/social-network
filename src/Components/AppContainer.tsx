import { type FC, type ReactElement, useEffect } from 'react';
import { App } from './App';
import { ErrorCatcher } from './Common/ErrorCatcher/ErrorCatcher';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { authSelector, viewSelector } from '../redux/selectors/selectors';
import { isFetchingAuthSelector } from '../redux/selectors/loading';
import { authErrorSelector } from '../redux/selectors/error';
import { setLoginError, setLogoutError } from '../redux/actions/auth';
import { getAuth } from '../redux/thunks/auth';
import type { ErrorType, Nullable } from '../utils/types/common';

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
    <ErrorCatcher languageMode={languageMode}>
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
