/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootSaga, rootReducer } from './store';
import { PcreateTheme, PThemeProvider } from './atoms';
import { APP_THEME } from './constants';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
const theme = PcreateTheme(APP_THEME);
ReactDOM.render(
  <Provider store={store}>
    <PThemeProvider theme={theme}>
      <App />
    </PThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept(App);
}
