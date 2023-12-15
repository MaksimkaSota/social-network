import { HeaderContainer } from './Header/HeaderContainer';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Preloader } from './Common/Preloader/Preloader';
import { Error } from './Common/Error/Error';
import classes from './App.module.scss';

export const App = ({isFetchingAuth, errorAuth}) => {
  if (isFetchingAuth) {
    return (
      <div className={classes.preloaderWrapper}>
        <Preloader className={classes.preloader} />
      </div>
    );
  }

  if (errorAuth) {
    return (
      <Error code={errorAuth.code} message={errorAuth.message} />
    );
  }

  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
};
