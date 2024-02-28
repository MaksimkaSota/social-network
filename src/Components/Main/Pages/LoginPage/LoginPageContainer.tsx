import { useCallback } from 'react';
import { LoginPage } from './LoginPage';
import { login } from '../../../../redux/thunks/auth';
import { captchaUrlSelector, incorrectAuthTextSelector, isAuthSelector } from '../../../../redux/selectors/auth';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { FormikErrors } from 'formik';

const LoginPageContainer = () => {
  const isAuth = useTypedSelector(isAuthSelector);
  const incorrectAuthText = useTypedSelector(incorrectAuthTextSelector);
  const captchaUrl = useTypedSelector(captchaUrlSelector);

  const dispatch = useTypedDispatch();
  const loginCallback = useCallback(
    (
      loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
      setStatus: (status?: any) => void,
      setSubmitting: (isSubmitting: boolean) => void,
      setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>,
      setFieldTouched: (
        field: string,
        isTouched?: boolean,
        shouldValidate?: boolean
      ) => Promise<void | FormikErrors<any>>
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
