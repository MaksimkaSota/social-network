import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import { Button } from '../Common/Button/Button';
import cn from 'classnames';
import { Preloader } from '../Common/Preloader/Preloader';

export const Header = ({isAuth, loginName, authUserPhoto, isFetchingAuthUserPhoto, logout, incorrectAuthText}) => {
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
              {
                isFetchingAuthUserPhoto ?
                  <Preloader className={classes.authUserPhotoPreloader} /> :
                  <img className={classes.userPhoto} src={authUserPhoto} alt="avatar" />
              }
              <p className={classes.text}>{loginName}</p>
              <Button text="Logout" onClick={logout} />
            </> :
            <>
              <img className={classes.userPhoto} src={userPhoto} alt="avatar" />
              <p className={cn(classes.text, classes.incorrectAuthText)}>{incorrectAuthText}</p>
              <NavLink to="/login">
                <Button text="Login" />
              </NavLink>
            </>
        }
      </div>
    </header>
  );
};
