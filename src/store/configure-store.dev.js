import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Perf from 'react-addons-perf';

import { watchInitializeGame, watchGameTick } from '../sagas/run-game.saga';
import reducer from '../reducers';
import DevTools from '../components/DevTools';


window.Perf = Perf;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(watchInitializeGame);
  sagaMiddleware.run(watchGameTick);

  // Allow direct access to the store, for debugging/testing
  window.store = store;

  return store;
}
