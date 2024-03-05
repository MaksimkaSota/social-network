import { FC, ReactElement } from 'react';
import classes from './App.module.scss';
import { HeaderContainer } from './Header/HeaderContainer';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Preloader } from './Common/Preloader/Preloader';
import { Error } from './Common/Error/Error';
import { ErrorPopup } from './Common/ErrorPopup/ErrorPopup';
import { ErrorType, Nullable } from '../utils/types/common';

type PropsType = {
  isFetchingAuth: boolean;
  authError: Nullable<ErrorType>;
  logoutError: Nullable<ErrorType>;
  setLogoutError: (error: Nullable<ErrorType>) => void;
};

export const App: FC<PropsType> = ({ isFetchingAuth, authError, logoutError, setLogoutError }): ReactElement => {
  if (isFetchingAuth) {
    return (
      <div className={classes.preloaderWrapper}>
        <Preloader className={classes.preloader} />
      </div>
    );
  }

  if (authError) {
    return <Error code={authError.code} message={authError.message} isGlobalError />;
  }

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <Main />
      <Footer />
      {logoutError && <ErrorPopup errorObject={logoutError} resetError={setLogoutError} />}
    </div>
  );
};
