import type { FC, ReactElement } from 'react';
import classes from './App.module.scss';
import { HeaderContainer } from './Header/HeaderContainer';
import { Main } from './Main/Main';
import { Preloader } from './Common/Preloader/Preloader';
import { Error } from './Common/Error/Error';
import { ErrorPopup } from './Common/ErrorPopup/ErrorPopup';
import type { ErrorType, Nullable } from '../utils/types/common';
import { FooterContainer } from './Footer/FooterContainer';
import { errorText } from '../utils/languageLocalization/errorText';
import { Language } from '../utils/types/enums';

type PropsType = {
  isFetchingAuth: boolean;
  authError: Nullable<ErrorType>;
  loginError: Nullable<ErrorType>;
  logoutError: Nullable<ErrorType>;
  setLoginError: (error: Nullable<ErrorType>) => void;
  setLogoutError: (error: Nullable<ErrorType>) => void;
  languageMode: string;
};

export const App: FC<PropsType> = ({
  isFetchingAuth,
  authError,
  loginError,
  logoutError,
  setLoginError,
  setLogoutError,
  languageMode,
}): ReactElement => {
  if (isFetchingAuth) {
    return (
      <div className={classes.preloaderWrapper}>
        <Preloader className={classes.preloader} />
      </div>
    );
  }

  if (authError) {
    const message = languageMode === Language.en ? authError.message : errorText.initialization.ru;
    return <Error code={authError.code} message={message} isGlobalError />;
  }

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <Main />
      <FooterContainer />
      {logoutError && languageMode === Language.en && (
        <ErrorPopup errorObject={logoutError} resetError={setLogoutError} />
      )}
      {logoutError && languageMode === Language.ru && (
        <ErrorPopup errorObject={{ message: errorText.logout.ru }} resetError={setLogoutError} />
      )}
      {loginError && languageMode === Language.en && <ErrorPopup errorObject={loginError} resetError={setLoginError} />}
      {loginError && languageMode === Language.ru && (
        <ErrorPopup errorObject={{ message: errorText.login.ru }} resetError={setLoginError} />
      )}
    </div>
  );
};
