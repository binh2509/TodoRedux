import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store';

const store = configureStore({});
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,app);