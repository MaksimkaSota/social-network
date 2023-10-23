import { LoginPage } from './LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { login } from '../../../../redux/thunks/auth';

export const LoginPageContainer = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const loginCallback = useCallback(
    (email, password, rememberMe, setStatus, setSubmitting) =>
      dispatch(login(email, password, rememberMe, setStatus, setSubmitting)),
    [dispatch]
  );

  return (
    <LoginPage login={loginCallback} isAuth={isAuth} />
  );
};
