import './App.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
