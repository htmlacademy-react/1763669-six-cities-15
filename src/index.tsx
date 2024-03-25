import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { store } from './components/store/store';
import { Settings } from './components/consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App placesCount={ Settings.placesCount }/>
    </Provider>
  </React.StrictMode>
);
