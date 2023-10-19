import { LoginFormContainer } from './LoginPageForm/LoginFormContainer';
import classes from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={classes.loginPageBlock}>
      <h1 className={classes.title}>Login</h1>
      <LoginFormContainer />
    </div>
  );
};
