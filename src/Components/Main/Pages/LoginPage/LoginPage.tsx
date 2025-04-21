import type { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import classes from './LoginPage.module.scss';
import { LoginFormContainer } from './LoginPageForm/LoginFormContainer';
import { LoginInformation } from './LoginInformation/LoginInformation';
import { RoutePath } from '../../../../utils/types/enums';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../utils/types/form';
import { contentText } from '../../../../utils/languageLocalization/contentText';

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
      <h3 className={classes.title}>{contentText.loginTitle[languageMode]}</h3>
      <LoginInformation incorrectAuthText={incorrectAuthText} languageMode={languageMode} />
      <LoginFormContainer login={login} captchaUrl={captchaUrl} languageMode={languageMode} />
    </div>
  );
};
