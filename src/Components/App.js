import { HeaderContainer } from './Header/HeaderContainer';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Preloader } from './Common/Preloader/Preloader';
import { Error } from './Common/Error/Error';
import classes from './App.module.scss';
import { ErrorPopup } from './ErrorPopup/ErrorPopup';

export const App = ({isFetchingAuth, errorAuth, logoutError, resetLogoutError}) => {
  console.log(logoutError);
  if (isFetchingAuth) {
    return (
      <div className={classes.preloaderWrapper}>
        <Preloader className={classes.preloader} />
      </div>
    );
  }

  if (errorAuth) {
    return (
      <div className={classes.errorAuthContainer}>
        <Error code={errorAuth.code} message={errorAuth.message} />
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <Main />
      <Footer />
      {logoutError && <ErrorPopup errorObject={logoutError} resetError={resetLogoutError} />}
    </div>
  );
};
