import classes from './App.module.scss';
import { HeaderContainer } from './Header/HeaderContainer';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Preloader } from './Common/Preloader/Preloader';
import { Error } from './Common/Error/Error';
import { ErrorPopup } from './Common/ErrorPopup/ErrorPopup';

export const App = ({ isFetchingAuth, authError, logoutError, setLogoutError }) => {
  if (isFetchingAuth) {
    return (
      <div className={classes.preloaderWrapper}>
        <Preloader className={classes.preloader} />
      </div>
    );
  }

  if (authError) {
    return <Error code={authError.code} message={authError.message} isGlobalError={true} />;
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
