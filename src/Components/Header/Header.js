import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import { Button } from '../Common/Button/Button';

export const Header = ({isAuth, loginName, authUserPhoto, logout}) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <h1 className={classes.headline}>Social Network</h1>
      <div className={classes.loginContainer}>
        {
          isAuth ?
            <>
              <img className={classes.userPhoto} src={authUserPhoto} alt="avatar" />
              <p className={classes.text}>{loginName}</p>
              <Button text="Logout" onClick={logout} />
            </> :
            <>
              <img className={classes.userPhoto} src={userPhoto} alt="avatar" />
              <p className={classes.text}>You are not authorized</p>
              <NavLink to="/login">
                <Button text="Login" />
              </NavLink>
            </>
        }
      </div>
    </header>
  );
};
