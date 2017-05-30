import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Todo from './todos';
import Login from './login';
import Home from './home';
import configureStore from './store';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'

const store = configureStore({});
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Todo} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
  ,app);
