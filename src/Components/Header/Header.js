import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { HeaderAuthInfo } from './HeaderAuthInfo/HeaderAuthInfo';
import { HeaderNotAuthInfo } from './HeaderNotAuthInfo/HeaderNotAuthInfo';

export const Header = ({
                         isAuth,
                         loginName,
                         authUserPhoto,
                         isFetchingAuthUserPhoto,
                         errorAuthUserPhoto,
                         logout,
                         incorrectAuthText
                       }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <h1 className={classes.headline}>Social Network</h1>
      <div className={classes.loginContainer}>
        {
          isAuth ?
            <HeaderAuthInfo
              loginName={loginName}
              authUserPhoto={authUserPhoto}
              isFetchingAuthUserPhoto={isFetchingAuthUserPhoto}
              errorAuthUserPhoto={errorAuthUserPhoto}
              logout={logout}
            /> :
            <HeaderNotAuthInfo incorrectAuthText={incorrectAuthText} />
        }
      </div>
    </header>
  );
};
