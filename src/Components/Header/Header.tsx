import type { FC, ReactElement } from 'react';
import classes from './Header.module.scss';
import { HeaderAuthInfo } from './HeaderAuthInfo/HeaderAuthInfo';
import { HeaderNotAuthInfo } from './HeaderNotAuthInfo/HeaderNotAuthInfo';
import Logo from '../../assets/images/logo.svg';
import type { ErrorType, Nullable } from '../../utils/types/common';
import { contentText } from '../../utils/languageLocalization/contentText';
import { altText } from '../../utils/languageLocalization/altText';

type PropsType = {
  isAuth: boolean;
  loginName: Nullable<string>;
  authUserPhoto: Nullable<string>;
  isFetchingAuthUserPhoto: boolean;
  authUserPhotoError: Nullable<ErrorType>;
  updateUserPhotoError: Nullable<ErrorType>;
  logout: () => void;
  incorrectAuthText: string;
  incorrectPhotoText: string;
  languageMode: string;
  themeMode: string;
};

export const Header: FC<PropsType> = ({
  isAuth,
  loginName,
  authUserPhoto,
  isFetchingAuthUserPhoto,
  authUserPhotoError,
  updateUserPhotoError,
  logout,
  incorrectAuthText,
  incorrectPhotoText,
  languageMode,
  themeMode,
}): ReactElement => {
  return (
    <header className={classes[`header-${themeMode}`]}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} alt={altText.logo[languageMode]} />
      </div>
      <h1 className={classes.headline}>{contentText.headline[languageMode]}</h1>
      <div className={classes.loginContainer}>
        {isAuth ? (
          <HeaderAuthInfo
            loginName={loginName}
            authUserPhoto={authUserPhoto}
            isFetchingAuthUserPhoto={isFetchingAuthUserPhoto}
            authUserPhotoError={authUserPhotoError}
            updateUserPhotoError={updateUserPhotoError}
            incorrectPhotoText={incorrectPhotoText}
            logout={logout}
            languageMode={languageMode}
          />
        ) : (
          <HeaderNotAuthInfo incorrectAuthText={incorrectAuthText} languageMode={languageMode} />
        )}
      </div>
    </header>
  );
};
