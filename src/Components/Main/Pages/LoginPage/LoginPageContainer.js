import { LoginPage } from './LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { login } from '../../../../redux/thunks/auth';
import { captchaUrlSelector, incorrectAuthTextSelector, isAuthSelector } from '../../../../redux/selectors/auth';

const LoginPageContainer = () => {
  const isAuth = useSelector(isAuthSelector);
  const incorrectAuthText = useSelector(incorrectAuthTextSelector);
  const captchaUrl = useSelector(captchaUrlSelector);

  const dispatch = useDispatch();
  const loginCallback = useCallback(
    (loginData, setStatus, setSubmitting, setFieldValue, setFieldTouched) => {
      dispatch(login(loginData, setStatus, setSubmitting, setFieldValue, setFieldTouched));
    },
    [dispatch]
  );

  return (
    <LoginPage login={loginCallback} isAuth={isAuth} incorrectAuthText={incorrectAuthText} captchaUrl={captchaUrl} />
  );
};

export default LoginPageContainer;
