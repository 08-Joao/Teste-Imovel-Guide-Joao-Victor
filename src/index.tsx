import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/Global.scss';
import Home from './screens/Home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

