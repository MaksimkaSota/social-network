import { useCallback } from 'react';
import { LoginPage } from './LoginPage';
import { login } from '../../../../redux/thunks/auth';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../utils/types/form';
import { authSelector } from '../../../../redux/selectors/selectors';

const LoginPageContainer = () => {
  const { isAuth, incorrectAuthText, captchaUrl } = useTypedSelector(authSelector);

  const dispatch = useTypedDispatch();
  const loginCallback = useCallback(
    (
      loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
      setStatus: SetStatusType,
      setSubmitting: SetSubmittingType,
      setFieldValue: SetFieldValueType,
      setFieldTouched: SetFieldTouchedType
    ) => {
      dispatch(login(loginData, setStatus, setSubmitting, setFieldValue, setFieldTouched));
    },
    [dispatch]
  );

  return (
    <LoginPage login={loginCallback} isAuth={isAuth} incorrectAuthText={incorrectAuthText} captchaUrl={captchaUrl} />
  );
};

export default LoginPageContainer;
