import { LoginPage } from './LoginPage';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { authSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { login } from '../../../../redux/thunks/auth';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../utils/types/form';

const LoginPageContainer = () => {
  const { isAuth, incorrectAuthText, captchaUrl } = useTypedSelector(authSelector);
  const { languageMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const loginCallback = (
    loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setFieldValue: SetFieldValueType,
    setFieldTouched: SetFieldTouchedType
  ) => {
    dispatch(login(loginData, setStatus, setSubmitting, setFieldValue, setFieldTouched));
  };

  return (
    <LoginPage
      login={loginCallback}
      isAuth={isAuth}
      incorrectAuthText={incorrectAuthText}
      captchaUrl={captchaUrl}
      languageMode={languageMode}
    />
  );
};

export default LoginPageContainer;
