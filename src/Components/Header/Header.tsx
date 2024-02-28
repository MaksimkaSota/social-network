import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import { HeaderAuthInfo } from './HeaderAuthInfo/HeaderAuthInfo';
import { HeaderNotAuthInfo } from './HeaderNotAuthInfo/HeaderNotAuthInfo';
import { Nullable } from '../../utils/types/common';
import { ErrorType } from '../../redux/types/error';
import { FC, ReactElement } from 'react';

type PropsType = {
  isAuth: boolean;
  loginName: Nullable<string>;
  authUserPhoto: Nullable<string>;
  isFetchingAuthUserPhoto: boolean;
  authUserPhotoError: Nullable<ErrorType>;
  updateUserPhotoError: Nullable<ErrorType>;
  logout: () => void;
  incorrectAuthText: string;
}

export const Header: FC<PropsType> = ({
  isAuth,
  loginName,
  authUserPhoto,
  isFetchingAuthUserPhoto,
  authUserPhotoError,
  updateUserPhotoError,
  logout,
  incorrectAuthText,
}): ReactElement => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <h1 className={classes.headline}>Social Network</h1>
      <div className={classes.loginContainer}>
        {isAuth ? (
          <HeaderAuthInfo
            loginName={loginName}
            authUserPhoto={authUserPhoto}
            isFetchingAuthUserPhoto={isFetchingAuthUserPhoto}
            authUserPhotoError={authUserPhotoError}
            updateUserPhotoError={updateUserPhotoError}
            logout={logout}
          />
        ) : (
          <HeaderNotAuthInfo incorrectAuthText={incorrectAuthText} />
        )}
      </div>
    </header>
  );
};
