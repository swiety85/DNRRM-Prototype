import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import Axios from 'axios';
import Admin from './admin';
import LoginPage from './auth';
import configureStore, {history} from './configureStore';
import { deauthorize } from './auth/actions';
import './App.scss';

const store = configureStore ();

Axios.interceptors.response.use (null, error => {
  if (error.response.status === 401) {
    store.dispatch(deauthorize());
  }
  return Promise.reject (error);
});

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path="/login" render={(routeProps) => <LoginPage {...routeProps}/>} />
          <Route exact path="/" render={(routeProps) => <Admin {...routeProps}/>} />
          <Route path="/admin" render={(routeProps) => <Admin {...routeProps}/>} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
