import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';

import { App } from './components/App';

import { GlobalStyle } from './global.style';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
