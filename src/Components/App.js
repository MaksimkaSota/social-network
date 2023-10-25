import { HeaderContainer } from './Header/HeaderContainer';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Preloader } from './Common/Preloader/Preloader';
import classes from './App.module.scss';

export const App = ({initialized}) => {
  return (
    initialized ?
      <div className={classes.wrapper}>
        <HeaderContainer />
        <Main />
        <Footer />
      </div> :
      <div className={classes.preloaderWrapper}>
        <Preloader className={classes.preloader} />
      </div>
  );
};
