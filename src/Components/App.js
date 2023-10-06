import './App.module.scss';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import classes from './App.module.scss';
import { HeaderContainer } from './Header/HeaderContainer';

export const App = () => {
  return (
    <div className={classes.wrapper}>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
};
