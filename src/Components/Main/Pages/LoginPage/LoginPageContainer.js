import { LoginPage } from './LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { login } from '../../../../redux/thunks/auth';
import { incorrectAuthTextSelector, isAuthSelector } from '../../../../redux/selectors/auth';

const LoginPageContainer = () => {
  const isAuth = useSelector(isAuthSelector);
  const incorrectAuthText = useSelector(incorrectAuthTextSelector);
  const dispatch = useDispatch();
  const loginCallback = useCallback(
    (email, password, rememberMe, setStatus, setSubmitting) =>
      dispatch(login(email, password, rememberMe, setStatus, setSubmitting)),
    [dispatch]
  );

  return (
    <LoginPage login={loginCallback} isAuth={isAuth} incorrectAuthText={incorrectAuthText} />
  );
};

export default LoginPageContainer;
