import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './Components/App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

reportWebVitals();
