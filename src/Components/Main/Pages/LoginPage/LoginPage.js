import { Navigate } from 'react-router-dom';
import { LoginFormContainer } from './LoginPageForm/LoginFormContainer';
import classes from './LoginPage.module.scss';

export const LoginPage = ({ login, isAuth, incorrectAuthText, captchaUrl }) => {
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
