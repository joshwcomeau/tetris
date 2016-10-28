import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import App from './components/App';
import GameBoard from './components/GameBoard';
import SidePanel from './components/SidePanel';


const store = configureStore();

render(
  <Provider store={store}>
    <App>
      <GameBoard />
      <SidePanel />
    </App>
  </Provider>,
  document.getElementById('root')
);
