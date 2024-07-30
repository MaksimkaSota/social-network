import type { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginFormContainer } from './LoginPageForm/LoginFormContainer';
import classes from './LoginPage.module.scss';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../utils/types/form';
import { RoutePath } from '../../../../utils/types/enums';
import { LoginInformation } from './LoginInformation/LoginInformation';
import { textContent } from '../../../../utils/textContent';

type PropsType = {
  login: (
    loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setFieldValue: SetFieldValueType,
    setFieldTouched: SetFieldTouchedType
  ) => void;
  isAuth: boolean;
  incorrectAuthText: string;
  captchaUrl: string;
  languageMode: string;
};

export const LoginPage: FC<PropsType> = ({
  login,
  isAuth,
  incorrectAuthText,
  captchaUrl,
  languageMode,
}): ReactElement => {
  return isAuth ? (
    <Navigate to={RoutePath.profile} />
  ) : (
    <div className={classes.loginPageBlock}>
      <h3 className={classes.title}>{textContent.loginTitle[languageMode]}</h3>
      <LoginInformation incorrectAuthText={incorrectAuthText} languageMode={languageMode} />
      <LoginFormContainer login={login} captchaUrl={captchaUrl} languageMode={languageMode} />
    </div>
  );
};
