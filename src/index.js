import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './Components/App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from './Components/Common/Context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
  root.render(
    <StrictMode>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreContext.Provider>
    </StrictMode>
  );
};

rerender();
store.subscribe(rerender);

reportWebVitals();
