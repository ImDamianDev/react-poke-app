import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { DataProvider } from "./context/dataContext";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </Provider>
);