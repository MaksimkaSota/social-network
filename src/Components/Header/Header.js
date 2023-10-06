import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';

export const Header = ({isAuth, login, authUserPhoto}) => {
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
              <p className={classes.text}>{login}</p>
              <NavLink className={classes.click} to={'/login'}>Logout</NavLink>
              {/*Logic for logout*/}
            </> :
            <>
              <img className={classes.userPhoto} src={userPhoto} alt="avatar" />
              <p className={classes.text}>You are not authorized</p>
              <NavLink className={classes.click} to={'/login'}>Login</NavLink>
              {/*Logic for login*/}
            </>
        }
      </div>
    </header>
  );
};
