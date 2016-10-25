import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import App from './components/App';
import GameBoard from './components/GameBoard';


const store = configureStore();

render(
  <Provider store={store}>
    <App>
      <GameBoard />
    </App>
  </Provider>,
  document.getElementById('root')
);
