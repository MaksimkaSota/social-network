import './App.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
