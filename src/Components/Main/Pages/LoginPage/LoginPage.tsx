import { Navigate } from 'react-router-dom';
import { LoginFormContainer } from './LoginPageForm/LoginFormContainer';
import classes from './LoginPage.module.scss';
import { FC, ReactElement } from 'react';
import {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType
} from '../../../../utils/types/formik';

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
};

export const LoginPage: FC<PropsType> = ({ login, isAuth, incorrectAuthText, captchaUrl }): ReactElement => {
  return isAuth ? (
    <Navigate to="/profile" />
  ) : (
    <div className={classes.loginPageBlock}>
      <h3 className={classes.title}>Login</h3>
      <p className={classes.incorrectAuthText}>{incorrectAuthText}! Log in, please!</p>
      <LoginFormContainer login={login} captchaUrl={captchaUrl} />
    </div>
  );
};
