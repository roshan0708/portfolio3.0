import React from 'react';
import ReactDOM from 'react-dom';
import App from '@root/App';
import '@root/styles/index.scss';
import MouseContextProvider from '@root/context/mouseContext';

ReactDOM.render(
  <MouseContextProvider>
    <App />
  </MouseContextProvider>,
  document.getElementById('root'),
);
