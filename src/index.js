import './index.scss';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './Components/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

reportWebVitals();
